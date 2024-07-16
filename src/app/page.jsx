import Movies from '@/components/Movies';
import React from 'react'

const Page = async ({ searchParams }) => {

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjhiZjdmZTg5NmM2ZGNhZWUyZTQ3NmM3ZTE1NzZhNSIsIm5iZiI6MTcyMTE2NjEzMi45ODY5NjcsInN1YiI6IjY2OTZkZjhiNDgxNzhlMWEwMDdiOTFhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hs2y5Gq0bsSIqVCiu5VBpBDBU3MRMfReSY0AB5SbgIc'
        }
    };

    const res = await fetch(`https://api.themoviedb.org/3/${searchParams.genre ? "movie/" + searchParams.genre : "/trending/all/day"}?language=en-US`, options)

    const data = await res.json();


    return (
        <div className='mx-auto'>
            <div className='flex items-center flex-wrap justify-center gap-5 my-5'>
                {
                    data?.results?.map((dt, i) => (
                        <Movies dt={dt} key={i} />
                    ))
                }
            </div>
        </div>
    )
}

export default Page