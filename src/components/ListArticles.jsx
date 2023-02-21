import React from 'react'
import Article from './Article'

const ListArticles = () => {
  return (
    <div className='grid sm:grid-cols-3 grid-cols-1 gap-8'>
        <Article />
        <Article />
        <Article />
    </div>
  )
}

export default ListArticles