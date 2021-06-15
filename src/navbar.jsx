import React from 'react'

export default function NavBar (props) {
  return (
    <div className='bg-nav fixed inset-x-0 top-0 px-2 md:py-2 flex items-center'>
      <h1 className='text-xl'>蒸気<span className='hidden sm:inline'><span className='text-gray-300'>の</span>博物館</span></h1>
      <h1 className='hidden truncate text-xl'>господи как же хочется тян</h1>
      <div className='flex space-x-2 md:space-x-4 flex-grow justify-end items-center'>
        <input
          className='appearance-none bg-transparent border-2 rounded-sm placeholder-white px-1 md:px-2 md:py-1 max-w-96 min-w-0 delay-75'
          style={{ borderColor: 'rgba(255, 255, 255, 0.5)' }}
          placeholder='Search...'
        />
        <div className='cursor-pointer p-1'>
          <svg className='h-6 lg:h-8' fill='#ffffff' viewBox='0 0 24 24' focusable='false'>
            <path d='M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z' />
          </svg>
        </div>
      </div>
    </div>
  )
}
