import React from 'react'

const Footer = () => {
    return (
        <div className="bg-slate-800 text-white flex flex-col justify-center items-center">
            <div>
                <div className="logo font-bold text-white text-2xl">
                    <span className='text-green-500'>&lt;</span>

                    <span>Pass</span><span className='text-green-500'>OP/&gt;</span>


                </div>
            </div>
            <div className='flex'>
                Created with <img src="icons/heart.png" alt="heart" /> by Disha
            </div>
        </div>
    )
}

export default Footer