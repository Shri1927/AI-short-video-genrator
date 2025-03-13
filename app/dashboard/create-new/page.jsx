'use client'
import React, { useState } from 'react'
import SelctTopic from './_components/SelctTopic'
import SelectStyle from './_components/SelectStyle'
import SelectDuration from './_components/SelectDuration'
const CreateNew = () => {
  const [formData, setFormData] = useState([]);
  const onInputChange = (fieldName, fieldValue) => {
       console.log(fieldName,fieldValue);
       
  }
  return (
    <div className='md:px-20'>
        <h2 className='font-bold text-violet-600 text-4xl text-center'>Create New</h2>

        <div className='mt-10 shadow-md p-10'>
          {/* Select topic */}
          <SelctTopic onUserSelect={onInputChange}/>
          {/* select style */}
          <SelectStyle onUserSelect={onInputChange}/>
          {/* select Duration */}
          <SelectDuration/>
          {/* create button */}
        </div>
    </div>
  )
}

export default CreateNew
