import React from 'react'

const getMovie = async (id) => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjhiZjdmZTg5NmM2ZGNhZWUyZTQ3NmM3ZTE1NzZhNSIsIm5iZiI6MTcyMTI1NDY5MS4yNTcyMjIsInN1YiI6IjY2OTZkZjhiNDgxNzhlMWEwMDdiOTFhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._c7FnlAlkiVGqnJBI3a5pVg559tcW2inJxmS4B6Ekmg'
        }
    };

    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)

    return await res.json();

}

const page = async ({ params }) => {
    const id = params.id

    const movieDetail = await getMovie(id)



    return (
        <div className='relative p-7 min-h-screen rounded-md'>
            <img className='object-cover w-full  h-screen rounded-md' src={`https://image.tmdb.org/t/p/original/${movieDetail?.backdrop_path || movieDetail?.poster_path}`} alt="" />
            <div className='m-7 absolute top-0 left-0 h-screen  bg-gradient-to-t from-transparent to-black rounded-md p-16 space-y-5 shadow-lg shadow-cyan-700/60'>
                <div className='text-6xl font-bold my-3 text-white'>
                    {movieDetail?.title || "Lorem Ipsum"}
                </div>
                <div className="w-1/2 text-white">{movieDetail?.overview || "Lorem Ipsum"}</div>
                <div className='text-white'>{Math.ceil(movieDetail?.vote_average * 10) / 10} - {movieDetail?.release_date || "00-00-0000"}</div>
                <div className='text-center text-white border w-32 p-2 rounded-md text-lg cursor-pointer transition-all hover:bg-white hover:text-black'>Trial</div>
            </div>
        </div>
    )
    
}

export default page