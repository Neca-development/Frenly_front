import '@shared/styles/global.scss'

import { ApolloProvider } from '@apollo/client'
import { store } from '@app/store'
import { client } from '@shared/api'
import { LoaderContextProvider } from '@shared/lib'
import { Loader } from '@shared/ui'
import type { Config } from '@usedapp/core'
import { ChainId, DAppProvider } from '@usedapp/core'
import type { AppProps } from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'

const config: Config = {
  readOnlyChainId: ChainId.Mumbai,
  readOnlyUrls: {
    [ChainId.Mumbai]:
      'https://polygon-mumbai.g.alchemy.com/v2/HCm-qNqCQm-NnbV9nHWxq9OnMHkUNvsg',
    [ChainId.Mainnet]:
      'https://eth-mainnet.g.alchemy.com/v2/JANw7_5C171cj-buFVibsh1jIZAwe4Yq',
  },
  notifications: {
    expirationPeriod: 10_000,
    checkInterval: 200_000,
  },
  autoConnect: true,
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ApolloProvider client={client}>
      <DAppProvider config={config}>
        <Provider store={store}>
          <LoaderContextProvider>
            <Component {...pageProps} />
            <ToastContainer
              position="bottom-left"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
            <Loader />
          </LoaderContextProvider>
        </Provider>
      </DAppProvider>
    </ApolloProvider>
  )
}

export default MyApp
