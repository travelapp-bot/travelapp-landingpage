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
                        visible={true}
                        height="80"
                        width="80"
                        color="#B2BEB5"
                        secondaryColor
                        ariaLabel="oval-loading"
                        strokeWidth="4"
                        wrapperStyle={{}}
                        wrapperClass=""
                    />
                </div>
            }
        </>

    )
}

export default Loader