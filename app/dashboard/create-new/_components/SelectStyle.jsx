import React, { useState } from 'react'
import Image from 'next/image'

const SelectStyle = ({onUserSelect}) => {

    const styleOptions = [
        {
            name: 'Realastic',
            image: '/real.png'
        },
        {
            name: 'Cartoon',
            image: '/cartoon.png'
        },
        {
            name: 'Comic',
            image: '/comic.png'
        },
        {
            name: 'WaterColor',
            image: '/watercolor.png'
        },
        {
            name: 'GTA',
            image: '/gta.png'
        },
    ]

    const [selectedOptions, setSelectedOptions] = useState();

    return (
        <div className='mt-7'>
            <h2 className='font-bold text-2xl text-violet-600 mt-5'>Styles</h2>
            <p className='text-gray-500'>Select Style of your Content</p>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-4'>
                {styleOptions.map((items, index) => (
                    <div className={`relative hover:scale-115 transition-all cursor-pointer rounded-xl ${selectedOptions == items.name&&'border-4 border-grey-600'}`}>
                        <Image src={items.image} height={100} width={100} alt='photo'
                            className='h-48 object-cover rounded-lg w-full mt-3' 
                           onClick={() => {
                            setSelectedOptions(items.name) 
                            onUserSelect('imageStyle', items.name)
                           }
                           } />
                        <h2 className='absolute p-1 bg-black bottom-0 w-full text-white text-center rounded-b-lg'>{items.name} </h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SelectStyle
