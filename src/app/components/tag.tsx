'use client';
import { useState, useEffect } from 'react'
import { InformationCircleIcon } from '@heroicons/react/24/solid'

export default function Tag({ide}: {ide: string}) {

    const verRespuestas = () => {
        console.log('tag');
    }

    return(
        <div className={`tag ${ide}`} onClick={verRespuestas}><InformationCircleIcon className="h-10 w-10 text-gray-300" /></div>
    )
}