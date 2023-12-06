import React from 'react'

export const Header = () => {
  return (
    <>
        <header className='font-mono mt-24'>
            <h1 className='text-4xl md:text-5xl lg:text-7xl font-semibold text-center'>
                Pass Generator
            </h1>
            <p className='text-xl md:text-2xl lg:text-3xl px-14 lg:px-60 font-medium text-center mt-7'>
                Randomly create combinations of characters, numbers and symbols to form complex passwords!
            </p>
        </header>
    </>
  )
}
