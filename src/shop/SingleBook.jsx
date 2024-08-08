import React from 'react'
import { useLoaderData } from 'react-router-dom';

const SingleBook = () => {
    const {_id, bookTitle, imageURL} = useLoaderData();
  return (
    <div className='mt-28 px-4 lg:px-24'> 
    <img src={imageURL} alt="" className='h-96' />

    <p> .Fern Brookbanks has wasted far too much of her adult life thinking about Will Baxter. She spent just twenty-four hours in her early twenties with the aggravatingly attractive, idealistic artist, a chance encounter that spiraled into a daylong adventure in TorontoIn this clever and swoonworthy YA debut from the New York Times bestselling author of The Love Hypothesis, life's moving pieces bring rival chess players together in a match for the heart.

Mallory Greenleaf is done with chess. Every move counts nowadays; after the sport led to the destruction of her family four years earlier, Mallory's focus is on her mom, her sisters, and the dead-end job that keeps the lights on. That is, until she begrudgingly agrees to play in one last charity tournament and inadvertently wipes the board with notorious "Kingkiller" Nolan Sawyer: current world champion and reigning Bad Boy of chess.
    </p>
  
    


    <h2>{bookTitle}</h2>
    
    
    </div>
    
    
  )
}

export default SingleBook
// import React from 'react'
// import { useLoaderData } from 'react-router-dom'

// import { Banner } from 'flowbite-react';
// import { HiX } from 'react-icons/hi';
// import { MdAnnouncement } from 'react-icons/md';

// const SignleBook = () => {
//     const data = useLoaderData();
//     const { bookTitle } = data;
//     console.log(data)
//     return (
//         <div className='mt-20'>
//             <Banner>
//                 <div className=" z-50 flex justify-between w-full py-12 px-4 border-b border-gray-200 bg-amber-400">
//                     <div className="flex items-center mx-auto">
//                         <p className="flex items-center text-2xl font-normal text-black">
//                             <MdAnnouncement className='me-2 text-red-600' />
//                             <span className='text-4xl font-semibold'>Book Name: {bookTitle}</span>
//                         </p>
//                     </div>
//                     <Banner.CollapseButton color="gray" className="border-0 bg-transparent px-0">
//                         <HiX className="h-4 w-4" />
//                     </Banner.CollapseButton>
//                 </div>
//             </Banner>

//             {/* book details */}
//             <div>
                
//             </div>
//         </div>
//     )
// }

// export default SignleBook