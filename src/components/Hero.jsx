import React from 'react'
import OnlinePayImage from '../assets/Online pay.svg'

export default function Hero() {
  return (
    <main>
        <div className="flex flex-col w-[90%] m-auto md:flex-row">
        <article className='hero-info md:w-[70%] md:m-auto mb-3'>
          <h1 className='text-[var(--yellow)] text-4xl mb-2'>
            Payments infrastructure <br />
            for the internet
          </h1>
          <p className='text-xl mb-2'>
            Millions of companies of all sizes—from startups to Fortune 500s—use
            Ztripe&apos;s software and APIs to accept payments, send payouts, and
            manage their businesses online.
          </p>
          <button className='bg-[var(--blue)] px-2 py-1 rounded-md'>Start now</button>
        </article>
        <article className=' w-[90%] m-auto md:w-1/2'>
          <img src={OnlinePayImage} className='pay-img' alt='pay online' />
        </article>
        </div>
    </main>
  )
}
