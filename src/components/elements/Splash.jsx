import React from 'react'
import Layout from '../layout/Layout'
import splash from "../../assets/splash.gif"

const Splash = () => {
    return (
        <div className='flex h-[80vh] justify-center items-center'>
            <img className='w-[50%]' alt='splash' src={splash}></img>
        </div>

    )
}

export default Splash