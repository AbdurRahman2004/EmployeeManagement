import React from 'react'

const SummaryCard = ({image ,text1,text2,color}) => {
  return (
    <div className='rounded flex bg-white'>
        <div className={`text-3xl flex justify-center items-center ${color} text-white px-4`}>
          {image}
        </div>
        <div className='pl-4 py-1'>
            <p className='text-lg font-semibold'>{text1}</p>
            <p className='text-xl font-bold'>{text2}</p>
        </div>
    </div>
  )
}

export default SummaryCard
