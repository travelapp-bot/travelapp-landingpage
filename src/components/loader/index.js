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
                        height={100}
                        width={100}
                        radius={5}
                        color="#4fa94d"
                        ariaLabel="ball-triangle-loading"
                        visible={loading}
                    />
                </div>
            }
        </>

    )
}

export default Loader