'use client';
import Image from 'next/image'
import Link from 'next/link'
import Tag from './tag'
import { useSearchParams } from 'next/navigation'
import React from 'react';

export default function Menu({setLaEtapa = 'Etapa A1'} : {setLaEtapa?: any}) {
    const searchParams = useSearchParams()
    const categorias = [
        {
          nombre: 'Emisiones de Gases de Efecto Invernadero',
          link: 'emisiones',
          etapa: 'Etapa A1'
        },
        {
          nombre: 'Generación de Residuos',
          link: 'residuos',
          etapa: 'Residuos peligrosos'
        },
        {
          nombre: 'Consumo de Agua',
          link: 'aguas',
          etapa: 'agua'
        },
        {
          nombre: 'Resultados',
          link: 'resultados',
          etapa: 'resultados'
        }
    ];

    const search = searchParams.get('categoria')

    return (
        <div className='p-3 text-center'>
            <div className='flex flex-col items-center justify-center p-3'>
                <Link href='/'>
                    <div>
                        <Image
                            //className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                            src="/logo-imcyc-blanco.svg"
                            alt="Instituto Mexicano del Cemento y del Concreto A.C."
                            width="0"
                            height="0"
                            sizes="100vw"
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </div>
                </Link>
                <p className='font-orbitron text-xs pt-3 mt-3'>Instituto Mexicano del Cemento y del Concreto A.C.</p>
                <h2 className='font-orbitron text-3xl pt-5 pb-0 mb-0 font-bold'>ANÁLISIS DE CICLO DE VIDA</h2>
            </div>
            {categorias.map((ele: any) => (
                <Link className='w-full' href={`/calculadora?categoria=${ele.link}`} key={ele.nombre}>
                    <button 
                        className={`font-orbitron ${search == ele.link ? 'bg-green-800' : 'bg-customVerde'} ${search ? 'text-md' : 'text-lg'} hover:bg-green-800 text-gray-100 hover:text-white font-bold py-2 px-4 rounded-full w-full mt-5 py-5 shadow-[inset_0_5px_10px_rgba(0,0,0,0.6)]`}
                    >
                        {ele.nombre}
                    </button>
                </Link>
            ))}
            
        </div>

    )
}