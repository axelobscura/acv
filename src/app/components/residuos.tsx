"use client"
import { useState, useEffect } from 'react'
import { ChevronRightIcon, ArrowRightCircleIcon, ArrowSmallRightIcon, ArrowSmallLeftIcon } from '@heroicons/react/24/solid'
import { useSearchParams } from 'next/navigation'

export default function Residuos({ setLaEtapa, etapa, agregarDatos, losdatos } : {setLaEtapa: any, etapa: any, agregarDatos: any, losdatos: any}) {
    const searchParams = useSearchParams()
    const search = searchParams.get('categoria')
    if(!etapa || search === 'residuos' && etapa !== 'Residuos de manejo especial' && etapa !== 'Residuos sólidos urbanos'){
        etapa = 'Residuos peligrosos'
    }

    const sacarDato = (e: any) => {
        let valor = e.target.value;
        let nombre = e.target.name;
        agregarDatos({nombre, valor})
    }

    const object_R1_1 = losdatos.find((obj: any) => obj.nombre === 'Generación de RP (kg)');
    const object_R1_2 = losdatos.find((obj: any) => obj.nombre === 'Cantidad de RP que se reutilizaron (kg)');
    const object_R2_1 = losdatos.find((obj: any) => obj.nombre === 'Generación de RME (kg)');
    const object_R2_2 = losdatos.find((obj: any) => obj.nombre === 'Cantidad de RME que se reutilizaron (kg)');
    const object_R3_1 = losdatos.find((obj: any) => obj.nombre === 'Generación de RSU (kg)');
    const object_R3_2 = losdatos.find((obj: any) => obj.nombre === 'Cantidad de RSU que se reutilizaron (kg)');

    return (
        <div className="flex flex-col sm:flex-row w-full justify-space-evenly">
            <div className="bg-customVerdeDos p-3 rounded-2xl w-full shadow-[inset_0_5px_10px_rgba(0,0,0,0.6)]">
                <h1 className="flex font-orbitron text-4xl pb-2"><ArrowRightCircleIcon className="h-10 w-10 text-gray-300" /> Generación de Residuos</h1>
                <hr className='mb-3'/>
                {/*<p>{employee.message}</p>*/}
                <div className='flex justify-center align-center mb-0'>
                    <h2 className={`flex align-center text-xs md:text-3xl font-orbitron rounded-2xl w-full ${etapa === 'Residuos peligrosos' ? 'bg-customVerdeDos shadow-[inset_0_5px_10px_rgba(0,0,0,0.6)]' : 'bg-customVerdeUno'} text-center hover:bg-customVerdeDos cursor-pointer`} onClick={() => setLaEtapa('Residuos peligrosos')}>Residuos peligrosos</h2>
                    <h2 className={`flex align-center text-xs md:text-3xl font-orbitron rounded-2xl w-full ${etapa === 'Residuos de manejo especial' ? 'bg-customVerdeDos shadow-[inset_0_5px_10px_rgba(0,0,0,0.6)]' : 'bg-customVerdeUno'} text-center p-3 hover:bg-customVerdeDos cursor-pointer ml-1 mr-1`} onClick={() => setLaEtapa('Residuos de manejo especial')}>Residuos de manejo especial</h2>
                    <h2 className={`flex align-center text-xs md:text-3xl font-orbitron rounded-2xl w-full ${etapa === 'Residuos sólidos urbanos' ? 'bg-customVerdeDos shadow-[inset_0_5px_10px_rgba(0,0,0,0.6)]' : 'bg-customVerdeUno'} text-center p-3 hover:bg-customVerdeDos cursor-pointer`} onClick={() => setLaEtapa('Residuos sólidos urbanos')}>Residuos sólidos urbanos</h2>
                </div>
                <form className='bg-customVerdeDos p-5 rounded-2xl'>
                    {etapa === 'Residuos peligrosos' &&
                        <div className='etapaA1'>
                            <p className='flex font-orbitron text-gray-100 mt-3 mb-2'><ChevronRightIcon className="h-6 w-6 text-gray-300" /> Generación de RP (kg):</p>
                            <input type="number" onBlur={sacarDato} name='Generación de RP (kg)' placeholder={object_R1_1 ? object_R1_1.valor : 'Generación de RP (kg)'} className="font-orbitron border border-gray-300 rounded-md px-4 py-2 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"></input>
                            <p className='flex font-orbitron text-gray-100 mt-3 mb-2'><ChevronRightIcon className="h-6 w-6 text-gray-300" /> Cantidad de RP que se reutilizaron (kg):</p>
                            <input type="number" onBlur={sacarDato} name='Cantidad de RP que se reutilizaron (kg)' placeholder={object_R1_2 ? object_R1_2.valor : 'Cantidad de RP que se reutilizaron (kg)'} className="font-orbitron border border-gray-300 rounded-md px-4 py-2 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"></input>
                            <div className='flex w-full justify-end'>
                                <button className='mt-5' onClick={() => setLaEtapa('Residuos de manejo especial')}><ArrowSmallRightIcon className="h-10 w-10 text-gray-300" /></button>
                            </div>
                        </div>
                    }
                    {etapa === 'Residuos de manejo especial' &&
                        <div className='etapaA2'>
                            <p className='flex font-orbitron text-gray-100 mt-3 mb-2'><ChevronRightIcon className="h-6 w-6 text-gray-300" /> Generación de RME (kg):</p>
                            <input type="number" onBlur={sacarDato} name='Generación de RME (kg)' placeholder={object_R2_1 ? object_R2_1.valor : 'Generación de RME (kg)'} className="font-orbitron border border-gray-300 rounded-md px-4 py-2 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"></input>
                            <p className='flex font-orbitron text-gray-100 mt-3 mb-2'><ChevronRightIcon className="h-6 w-6 text-gray-300" /> Cantidad de RME que se reutilizaron (kg):</p>
                            <input type="number" onBlur={sacarDato} name='Cantidad de RME que se reutilizaron (kg)' placeholder={object_R2_2 ? object_R2_2.valor : 'Cantidad de RME que se reutilizaron (kg)'} className="font-orbitron border border-gray-300 rounded-md px-4 py-2 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"></input>
                            <div className='flex w-full justify-end'>
                                <button className='mt-5' onClick={() => setLaEtapa('Residuos peligrosos')}><ArrowSmallLeftIcon className="h-10 w-10 text-gray-300" /></button>
                                <button className='mt-5' onClick={() => setLaEtapa('Residuos sólidos urbanos')}><ArrowSmallRightIcon className="h-10 w-10 text-gray-300" /></button>
                            </div>
                        </div>
                    }
                    {etapa === 'Residuos sólidos urbanos' &&
                        <div className='etapaA3'>
                            <p className='flex font-orbitron text-gray-100 mt-3 mb-2'><ChevronRightIcon className="h-6 w-6 text-gray-300" /> Generación de RSU (kg):</p>
                            <input type="number" onBlur={sacarDato} name='Generación de RSU (kg)' placeholder={object_R3_1 ? object_R3_1.valor : 'Generación de RSU (kg)'} className="font-orbitron border border-gray-300 rounded-md px-4 py-2 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"></input>
                            <p className='flex font-orbitron text-gray-100 mt-3 mb-2'><ChevronRightIcon className="h-6 w-6 text-gray-300" /> Cantidad de RSU que se reutilizaron (kg):</p>
                            <input type="number" onBlur={sacarDato} name='Cantidad de RSU que se reutilizaron (kg)' placeholder={object_R3_2 ? object_R3_2.valor : 'Cantidad de RSU que se reutilizaron (kg)'} className="font-orbitron border border-gray-300 rounded-md px-4 py-2 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"></input>
                            <div className='flex w-full justify-end'>
                                <button className='mt-5' onClick={() => setLaEtapa('Residuos de manejo especial')}><ArrowSmallLeftIcon className="h-10 w-10 text-gray-300" /></button>
                            </div>
                        </div>
                    }
                </form>
            </div>
        </div>
    )
  }