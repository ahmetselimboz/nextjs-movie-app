import Movies from '@/components/Movies';
import React from 'react'

const page = async ({ params }) => {

    const keyword = params.keyword

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjhiZjdmZTg5NmM2ZGNhZWUyZTQ3NmM3ZTE1NzZhNSIsIm5iZiI6MTcyMTI1NDY5MS4yNTcyMjIsInN1YiI6IjY2OTZkZjhiNDgxNzhlMWEwMDdiOTFhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._c7FnlAlkiVGqnJBI3a5pVg559tcW2inJxmS4B6Ekmg'
        }
    };

    const res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${keyword}&include_adult=false&language=en-US&page=1`, options)
    const data = await res.json()

    return (
        <div>
            {
                data?.results?.length === 0 ?
                    <div className='my-6 text-2xl text-center font-bold underline'>Aradığınız film bulunamadı!!!</div> :

                    <div className='flex items-center flex-wrap justify-center gap-5 my-5'>
                    {
                        data?.results?.map((dt, i) => (
                            <Movies dt={dt} key={i} />
                        ))
                    }
                </div>

            }
        </div>
    )
}

export default page