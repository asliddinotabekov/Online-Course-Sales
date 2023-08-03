import React from 'react'
import { Div } from './style'

const ColourCard = (props) => {
    return (
        <Div cl={props.colour} className={`w-full h-[200px] border  rounded-md px-8 text-[#fff] pt-[30px]`}>
            <h1 className='font-semibold text-[30px]'>Helper block will always help. me</h1>
            <p className='pt-3 pb-8 text-[20px]'>Helper block will always help.</p>
            <button type="button" class="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Teal to Lime</button>
        </Div>
    )
}

export default ColourCard
