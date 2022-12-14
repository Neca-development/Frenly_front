import { useRouter } from 'next/router'
import React from 'react'

interface IEndOfPageProperties {
  page: 'feed' | 'drafts'
}

export function EndOfPage(props: IEndOfPageProperties) {
  const { page } = props
  const router = useRouter()

  return (
    <section className="container py-4">
      <div className="p-8 bg-light-bg rounded-xl text-center">
        <div className="font-bold text-xl">
          {page === 'feed' && `That's all for now 👀`}
          {page === 'drafts' && 'No more drafts 👀'}
        </div>
        <p className="mt-1 text-base text-gray">
          {page === 'feed' &&
            'Come back later for more or follow more frens to stay in touch on-chain'}
          {page === 'drafts' &&
            'Do some more activity on-chain and come back later for posting'}
        </p>
        {page === 'feed' && (
          <button className="rounded-full bg-main text-white font-semibold py-1 px-4 mt-4">
            Invite frens
          </button>
        )}
        {page === 'drafts' && (
          <button
            className="rounded-full bg-main text-white font-semibold py-1 px-4 mt-4"
            onClick={() => router.back()}
          >
            Back to feed
          </button>
        )}
      </div>
    </section>
  )
}
