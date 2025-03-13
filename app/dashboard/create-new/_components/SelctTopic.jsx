'use client'
import { useState } from 'react'
import { Textarea } from "@/components/ui/textarea"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


const SelctTopic = ({onUserSelect}) => {
    const options = ['Custom Prompt','Random AI Story','Scary Story','Historical Facts','Bed time Story','Motivational','Fun facts'];
    const[selectedOptions, setSelectedOptions] = useState();
    return (
        <div>
            <h2 className='font-bold text-2xl text-violet-600'>Content</h2>
            <p className='text-gray-500'>What is the Topic of your Video?</p>
            <Select onValueChange={(value) =>{ setSelectedOptions(value)
                value!='Custom Prompt'&&onUserSelect('topic', value)}
            }>
                <SelectTrigger className="w-full mt-2 p-6 text-lg">
                    <SelectValue placeholder="Content type" />
                </SelectTrigger>
                <SelectContent>
                    {options.map((items ,index) => (
                        <SelectItem value={items} key={index}>{items}</SelectItem>
                    ))}
                </SelectContent>
            </Select>

            {selectedOptions == 'Custom Prompt'&&
              <div className='mt-2 '>
                <Textarea className='mt-3' placeholder='Write a Prompt....'
                onChange={(e) => onUserSelect('topic', e.target.value)}/>
              </div>
            }
        </div>
    )
}

export default SelctTopic
