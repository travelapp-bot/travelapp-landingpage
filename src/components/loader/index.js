"use client"

import React, { useState } from 'react'
import { Oval } from 'react-loader-spinner'
import { useSelector } from 'react-redux'

function Loader({state}) {
    
    return (
        <>
            
                <div className="loader-wrapper">
                    <Oval
                        height={50}
                        width={50}
                        radius={5}
                        color="grey"
                        secondaryColor='#A9A9A9'
                        ariaLabel="ball-triangle-loading"
                        visible={state}
                    
                    />
                </div>
            
        </>

    )
}

export default Loader