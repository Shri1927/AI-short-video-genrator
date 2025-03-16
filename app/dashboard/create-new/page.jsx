'use client'
import React, { useState } from 'react'
import SelctTopic from './_components/SelctTopic'
import SelectStyle from './_components/SelectStyle'
import SelectDuration from './_components/SelectDuration'
import { Button } from '@/components/ui/button'
import axios from 'axios'

const CreateNew = () => {
  const [formData, setFormData] = useState({});

  const onInputChange = (fieldName, fieldValue) => {
    console.log(fieldName, fieldValue);
    setFormData(prev => ({
      ...prev,
      [fieldName]: fieldValue
    }))
  }

  // Getting Video Script
  const getVideoScript = async () => {
    if (!formData.topic || !formData.duration || !formData.imageStyle) {
      console.error('Please select all options before proceeding.');
      return;
    }

    const prompt = `Write a script to generate ${formData.duration} video on topic: ${formData.topic} along with AI image prompt in ${formData.imageStyle} format for each scene and give the result in JSON format with imageprompt and content text as field`;
    console.log(prompt);

    try {
      const response = await axios.post('/api/get-video-script', {
        prompt: prompt
      });
      console.log(response.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('Axios error:', error.message);
      } else {
        console.log('Unexpected error:', error);
      }
    }
  }

  return (
    <div className='md:px-20'>
      <h2 className='font-bold text-violet-600 text-4xl text-center'>Create New</h2>

      <div className='mt-10 shadow-md p-10'>
        {/* Select topic */}
        <SelctTopic onUserSelect={onInputChange} />
        {/* select style */}
        <SelectStyle onUserSelect={onInputChange} />
        {/* select Duration */}
        <SelectDuration onUserSelect={onInputChange} />
        {/* create button */}
        <Button className='mt-10 w-full bg-violet-600' onClick={getVideoScript}>Create Short Video</Button>
      </div>
    </div>
  )
}

export default CreateNew;
