import React from 'react'

const PlaygroundPage = () => {
  return (
    <div className="h-[2000px] w-full bg-black">
        {/* Relative dan absolute -> Parent */}
        <div className="bg-green-400 h-[50vh]">
        </div>
        <div className="bg-blue-400 h-[50vh]">
            <div className='w-96 h-96 bg-white rounded-md relative right-0'> 

            </div>

        </div>
    </div>
  )
}

export default PlaygroundPage