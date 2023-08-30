'use client';
import { useState, useEffect } from 'react'
import { InformationCircleIcon } from '@heroicons/react/24/solid'

export default function Loader() {
    return(
        <div className="flex min-h-screen flex-col items-center justify-center p-sm-24" style={{
            'backgroundImage': 'linear-gradient(to bottom, rgba(95, 133, 22, 0.80), rgba(29, 40, 6, 0.90))',
            'backgroundSize': 'cover', /* makes the bg image responsive */
            'backgroundRepeat': 'no-repeat',
            'backgroundPosition': 'center',
            'backgroundColor': '#222222',
        }}>
            <p className='font-orbitron text-white tex-lg'>CARGANDO</p>
        </div>
    )
}