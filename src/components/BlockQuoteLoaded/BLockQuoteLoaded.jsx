import React from 'react'

export const BLockQuoteLoaded = ({image, name, pRef}) => {
  return (
    <div>
    <h1>Rick and Morty</h1>
    <hr/>
    <blockquote className='blockquote text-center'>
                <img ref={pRef} src={image} alt="" className='mb-4'/>
                <footer className='blockquote-footer'>{name}</footer>
    </blockquote></div>
  )
}
