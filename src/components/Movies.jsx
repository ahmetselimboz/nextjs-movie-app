

import Link from 'next/link'
import React from 'react'

const Movies = ({ dt }) => {


    return (
        <Link href={`/movie/${dt.id}`}  className='w-[450px] relative h-[250px] cursor-pointer mb-6 rounded-md shadow-lg shadow-cyan-700/60'>
            <img className='object-cover w-[450px] h-[250px] rounded-md' src={`https://image.tmdb.org/t/p/original/${dt?.backdrop_path || dt?.poster_path}`} alt="" />
            <div className='absolute bottom-0 p-3 w-full h-full flex flex-col  justify-end opacity-0 hover:opacity-100 transition-all hover:bg-gradient-to-b from-transparent to-black rounded-md'>
                <div className='text-2xl font-bold text-white'>{dt?.title || "Lorem Ipsum"}</div>
                <div className='text-white'>{Math.ceil(dt?.vote_average * 10) / 10} - {dt?.release_date || "00-00-0000"}</div>
            </div>

        </Link>
    )
}

export default Movies