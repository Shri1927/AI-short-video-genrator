'use client'
import React, { useState } from 'react'
import SelctTopic from './_components/SelctTopic'
import SelectStyle from './_components/SelectStyle'
import SelectDuration from './_components/SelectDuration'
import { Button } from '@/components/ui/button'
import axios from 'axios'
import CustomLoader from './_components/CustomLoader'
import { v4 as uuidv4 } from 'uuid'

const CreateNew = () => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [videoScript, setVideoScript] = useState();

  const onInputChange = (fieldName, fieldValue) => {
    console.log(fieldName, fieldValue);
    setFormData(prev => ({
      ...prev,
      [fieldName]: fieldValue
    }));
  };

  const onClickHandler = () => {
    getVideoScript();
  };

  // Getting Video Script
  const getVideoScript = async () => {
    setLoading(true);
    const prompt = `Write a script to generate ${formData.duration} video on topic: ${formData.topic} along with AI image prompt in ${formData.imageStyle} format for each scene and give the result in JSON format with imageprompt and content text as field`;

    try {
      const res = await axios.post('/api/get-video-script', {
        prompt: prompt
      });

      const scriptData = res.data.result;
      setVideoScript(scriptData);
      generateAudioFile(scriptData);
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  };

  // Generate Audio
  const generateAudioFile = async (videoScriptData) => {
    let script = '';
    const id = uuidv4();

    videoScriptData.script.forEach(scene => {
      script += scene.contentText + ' ';
    });

    try {
      await axios.post('/api/generate-audio', {
        text: script,
        id: id
      });
      console.log('Audio generated');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className='md:px-20'>
      <h2 className='font-bold text-violet-600 text-4xl text-center'>Create New</h2>

      <div className='mt-10 shadow-md p-10'>
        {/* Select topic */}
        <SelctTopic onUserSelect={onInputChange} />
        {/* Select style */}
        <SelectStyle onUserSelect={onInputChange} />
        {/* Select Duration */}
        <SelectDuration onUserSelect={onInputChange} />
        {/* Create button */}
        <Button
          className='mt-10 w-full bg-violet-600 hover:bg-violet-600 cursor-pointer'
          onClick={onClickHandler}
        >
          Create Short Video
        </Button>
      </div>

      <CustomLoader loading={loading} />
    </div>
  );
};

export default CreateNew;
