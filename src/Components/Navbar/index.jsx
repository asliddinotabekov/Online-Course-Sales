import React from 'react'
import { MoonIcon, ChatBubbleLeftIcon, UserIcon, Bars4Icon } from "@heroicons/react/24/outline";
import { SidebarContext } from '../../Context/Sidebar'
import ee from '../../assets/icons/icons8-login.gif'

const Navbar = ({ className }) => {
  const [sid, setSid] = React.useContext(SidebarContext)
  const sidebar = () => {
    return setSid(!sid)
  }


  console.log(sid)
  console.log(sid)
  return (
    <div className={` px-[10px]   sticky top-0 right-0 left-0   h-[70px] z-10     sm:bg-blue-gray-300 `} >
      <nav className=" w-full rounded-xl  border border-white/80 bg-white bg-opacity-80 py-2 px-4  text-white shadow-md backdrop-blur-2xl backdrop-saturate-200 md:h-18  ">
        <div>
          <div className="container pl-0 flex items-center justify-between  text-gray-900">
            <div>
              <div className={`w-12 h-12 sm:h-7 sm:w-7 rounded bg-blue-gray-50- flex items-center justify-center   xl:hidden 2xl:hidden`} onClick={sidebar}> <Bars4Icon className='w-7 h-6 text-black'></Bars4Icon></div>
            </div>
            <div className='flex justify-end flex-nowrap gap-5 '>
              <div className='w-12 h-12 sm:h-7 sm:w-7 bg-blue-gray-50 rounded-full bg-blue-gray-50- flex items-center justify-center'> <MoonIcon className='w-7 h-6 text-blue-500'></MoonIcon></div>
              <div className='bg-blue-gray-50 w-12 h-12 rounded-full flex items-center justify-center sm:h-7 sm:w-7'><ChatBubbleLeftIcon className='w-7 h-6 text-blue-500'></ChatBubbleLeftIcon></div>
              <div className='rounded-full bg-blue-gray-50  w-12 h-12  flex items-center justify-center sm:h-7 sm:w-7'>{localStorage.getItem("token") ? <UserIcon className='w-7 h-6 text-blue-500' ></UserIcon> : <img src={ee} className='rounded-full' alt="my-gif" />}</div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
