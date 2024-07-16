import Link from 'next/link'
import React from 'react'

const MenuItem = ({mn}) => {
  return (
    <Link href={mn.url} className='dark:text-white text-neutral-900 text-lg dark:hover:text-teal-300 hover:text-teal-700 transition-all font-bold'>{mn.name}</Link>
  )
}

export default MenuItem