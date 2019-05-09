import React from 'react'

export const Main = ({ children }) => (
  <div className='container flex-grow-1 d-flex flex-column'>
    <div className='flex-grow-1'></div>
    <div className='row'>
      <div className='offset-md-4 col-md-4'>
        <div className='d-flex flex-column'>{children}</div>
      </div>
    </div>
    <div className='flex-grow-2'></div>
  </div>
)

export const Page = ({ children }) => (
  <div className='d-flex flex-column bg-primary flex-grow-1'>{children}</div>
)