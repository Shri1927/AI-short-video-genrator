import React from 'react'
import SelctTopic from './_components/SelctTopic'
const CreateNew = () => {
  return (
    <div className='md:px-20'>
        <h2 className='font-bold text-violet-600 text-4xl text-center'>Create New</h2>

        <div className='mt-10 shadow-md p-10'>
          {/* Select topic */}
          <SelctTopic/>
          {/* select style */}

          {/* select Duration */}

          {/* create button */}
        </div>
    </div>
  )
}

export default CreateNew
