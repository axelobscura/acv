"use client"
import { useState, useEffect } from 'react'
import { ChevronRightIcon, ArrowRightCircleIcon, ArrowSmallRightIcon, ArrowSmallLeftIcon } from '@heroicons/react/24/solid'
import { useSearchParams } from 'next/navigation'

export default function Residuos({ setLaEtapa, etapa, agregarDatos } : {setLaEtapa: any, etapa: any, agregarDatos: any}) {
    const searchParams = useSearchParams()
    const search = searchParams.get('categoria')
    if(!etapa || search === 'residuos' && etapa !== 'Residuos de manejo especial' && etapa !== 'Residuos sólidos urbanos'){
        etapa = 'Residuos peligrosos'
    }
    return (
        <div className="flex flex-col sm:flex-row w-full justify-space-evenly">
            <div className="p-0 rounded-2xl w-full">
                <h1 className="flex font-orbitron text-4xl pb-2"><ArrowRightCircleIcon className="h-10 w-10 text-gray-300" /> Generación de Residuos</h1>
                <hr className='mb-3'/>
                {/*<p>{employee.message}</p>*/}
                <div className='flex justify-around mb-0'>
                    <h2 className={`text-xs md:text-3xl font-orbitron w-full ${etapa === 'Residuos peligrosos' ? 'bg-customVerdeDos' : 'bg-customVerdeUno'} text-center p-3 hover:bg-customVerdeDos cursor-pointer`} onClick={() => setLaEtapa('Residuos peligrosos')}>Residuos peligrosos</h2>
                    <h2 className={`text-xs md:text-3xl font-orbitron w-full ${etapa === 'Residuos de manejo especial' ? 'bg-customVerdeDos' : 'bg-customVerdeUno'} text-center p-3 hover:bg-customVerdeDos cursor-pointer ml-1 mr-1`} onClick={() => setLaEtapa('Residuos de manejo especial')}>Residuos de manejo especial</h2>
                    <h2 className={`text-xs md:text-3xl font-orbitron w-full ${etapa === 'Residuos sólidos urbanos' ? 'bg-customVerdeDos' : 'bg-customVerdeUno'} text-center p-3 hover:bg-customVerdeDos cursor-pointer`} onClick={() => setLaEtapa('Residuos sólidos urbanos')}>Residuos sólidos urbanos</h2>
                </div>
                <h2 className='flex items-center font-orbitron text-2xl bg-customVerdeDos p-3'><ArrowSmallRightIcon className="h-5 w-5 text-gray-300 mr-1" /> {etapa}</h2>
                <form>
                    {etapa === 'Residuos peligrosos' &&
                        <div className='etapaA1'>
                            <p className='flex font-orbitron text-gray-100 mt-3 mb-2'><ChevronRightIcon className="h-6 w-6 text-gray-300" /> Generación de RP (kg):</p>
                            <input type="number" placeholder='Generación de RP (kg)' className="font-orbitron border border-gray-300 rounded-md px-4 py-2 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"></input>
                            <p className='flex font-orbitron text-gray-100 mt-3 mb-2'><ChevronRightIcon className="h-6 w-6 text-gray-300" /> Cantidad de RP que se reutilizaron (kg):</p>
                            <input type="number" placeholder='Cantidad de RP que se reutilizaron (kg)' className="font-orbitron border border-gray-300 rounded-md px-4 py-2 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"></input>
                            <div className='flex w-full justify-end'>
                                <button className='mt-5' onClick={() => setLaEtapa('Residuos de manejo especial')}><ArrowSmallRightIcon className="h-10 w-10 text-gray-300" /></button>
                            </div>
                        </div>
                    }
                    {etapa === 'Residuos de manejo especial' &&
                        <div className='etapaA2'>
                            <p className='flex font-orbitron text-gray-100 mt-3 mb-2'><ChevronRightIcon className="h-6 w-6 text-gray-300" /> Generación de RME (kg):</p>
                            <input type="number" placeholder='Generación de RSU (kg)' className="font-orbitron border border-gray-300 rounded-md px-4 py-2 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"></input>
                            <p className='flex font-orbitron text-gray-100 mt-3 mb-2'><ChevronRightIcon className="h-6 w-6 text-gray-300" /> Cantidad de RME que se reutilizaron (kg):</p>
                            <input type="number" placeholder='Cantidad de RSU que se reutilizaron (kg)' className="font-orbitron border border-gray-300 rounded-md px-4 py-2 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"></input>
                            <div className='flex w-full justify-end'>
                                <button className='mt-5' onClick={() => setLaEtapa('Residuos peligrosos')}><ArrowSmallLeftIcon className="h-10 w-10 text-gray-300" /></button>
                                <button className='mt-5' onClick={() => setLaEtapa('Residuos sólidos urbanos')}><ArrowSmallRightIcon className="h-10 w-10 text-gray-300" /></button>
                            </div>
                        </div>
                    }
                    {etapa === 'Residuos sólidos urbanos' &&
                        <div className='etapaA3'>
                            <p className='flex font-orbitron text-gray-100 mt-3 mb-2'><ChevronRightIcon className="h-6 w-6 text-gray-300" /> Generación de RSU (kg):</p>
                            <input type="number" placeholder='Generación de RME (kg)' className="font-orbitron border border-gray-300 rounded-md px-4 py-2 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"></input>
                            <p className='flex font-orbitron text-gray-100 mt-3 mb-2'><ChevronRightIcon className="h-6 w-6 text-gray-300" /> Cantidad de RSU que se reutilizaron (kg):</p>
                            <input type="number" placeholder='Cantidad de RME que se reutilizaron (kg)' className="font-orbitron border border-gray-300 rounded-md px-4 py-2 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"></input>
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