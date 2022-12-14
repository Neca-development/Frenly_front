/* eslint-disable no-await-in-loop */
import { useGetTxInfo } from '@shared/api'
import { useState } from 'react'

export const useWaitTxInfo = () => {
  const { getTxInfo } = useGetTxInfo()
  const [isLoop, setIsLoop] = useState(true)
  return {
    // eslint-disable-next-line sonarjs/cognitive-complexity
    pollUntilIndexed: async ({ txId }: { txId: string }) => {
      while (isLoop) {
        const {
          data: { hasTxHashBeenIndexed: response },
        } = await getTxInfo({ txId })

        if (response.__typename === 'TransactionIndexedResult') {
          if (response.metadataStatus) {
            if (response.metadataStatus.status === 'SUCCESS') {
              setIsLoop(false)
              return response.txReceipt
            }

            if (response.metadataStatus.status === 'METADATA_VALIDATION_FAILED') {
              throw new Error(response.metadataStatus.status)
            }
          } else if (response.indexed) {
            setIsLoop(false)
            return response.txReceipt
          }
          // eslint-disable-next-line no-await-in-loop, no-promise-executor-return
          await new Promise((resolve) => setTimeout(resolve, 1500))
        } else {
          // it got reverted and failed!
          throw new Error(response.reason)
        }
      }
    },
  }
}
