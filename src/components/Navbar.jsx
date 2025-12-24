import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-slate-800 text-white'>
            <div className="mycontainer flex justify-between items-center px-4 py-5 h-14">

                <div className="logo font-bold text-white text-2xl">
                    <span className='text-green-500'>&lt;</span>

                    <span>Pass</span><span className='text-green-500'>OP/&gt;</span>


                </div>

                <button className="bg-green-800 my-5  rounded-full flex gap-1 justify-center items-center  ring-white ring-1">
                    <img className=" w-10 p-1 " src="/icons/github.svg" alt="github logo" />
                    <span className="font-semibold text-blue-600  px-2 ">GitHub</span>
                </button>
            </div>
        </nav>
    );
}

export default Navbar