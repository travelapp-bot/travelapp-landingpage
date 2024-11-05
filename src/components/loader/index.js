"use client"

import React from 'react'
import { Oval } from 'react-loader-spinner'
import { useSelector } from 'react-redux'

function Loader() {
    const loading = useSelector(state => state?.loader?.open)
    return (
        <>
            {loading &&
                <div className="loader-wrapper">
                    <Oval
                        height={50}
                        width={50}
                        radius={5}
                        color="grey"
                        secondaryColor='#A9A9A9'
                        ariaLabel="ball-triangle-loading"
                        visible={loading}
                    
                    />
                </div>
            }
        </>

    )
}

export default Loader