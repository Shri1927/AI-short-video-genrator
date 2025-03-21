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
    }))
  }

  const scriptData = "this is meIt was a dark and stormy night. A young boy named Timmy was walking home from school when he saw a spooky-looking house on top of a hill. He had heard stories about the house being haunted, but he didn't believe them... until now. Suddenly, he saw glowing eyes peering out from the dark windows. A ghostly figure emerged from the house and began to chase him! Timmy ran as fast as his little legs could carry him. He hid behind a large tree, hoping the ghost wouldn't find him. After a few minutes, the ghost disappeared. Timmy slowly peeked from behind the tree... ...and ran all the way home to his relieved parents, promising never to walk near the haunted house again. "


  const onClickHandler = () =>{
    generateAudioFile(scriptData);
  }
  // Getting Video Script
  const getVideoScript = async () => {
    setLoading(true);
    const prompt = `Write a script to generate ${formData.duration} video on topic: ${formData.topic} along with AI image prompt in ${formData.imageStyle} format for each scene and give the result in JSON format with imageprompt and content text as field`;

      const result = await axios.post('/api/get-video-script', {
        prompt: prompt
      }).then(res => {
        setVideoScript(res.data.result);
        generateAudioFile(res.data.result);
      }).catch((err) => {
        console.log(err); 
      });
    setLoading(false);
  }


  // Generate Audio
  const generateAudioFile = async(videoScriptData) =>{
    let script = '';
    const id = uuidv4();
    // videoScriptData.script.forEach(scene => {
    //   script = script + scene.contentText+' ';
    // });

    await axios.post('/api/generate-audio', {
      text: videoScriptData,
      id: id
    }).then(res => {
      console.log('Audio generated');
    }).catch((err) => {
      console.log(err); 
    });
    
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
        <Button className='mt-10 w-full bg-violet-600 hover:bg-violet-600 cursor-pointer' onClick={onClickHandler}>Create Short Video</Button>
      </div>
        <CustomLoader loading={loading} />
    </div>
  )
}

export default CreateNew;
