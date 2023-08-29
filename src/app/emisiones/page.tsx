"use client"
import { useState, useEffect } from 'react'
import Menu from "../components/menu"
import { ChevronRightIcon, ArrowRightCircleIcon, ArrowSmallRightIcon } from '@heroicons/react/24/solid'

export default function Emisiones() {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)
    const [etapa, setEtapa] = useState('Etapa A1')

    useEffect(() => {
        fetch('/api/hello')
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoading(false)
            })
    }, [])

    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>

    type Employee = {
        message: string;
    };

    let employee: Employee | any = data;

    const laEtapa = (etp: string) => {
        setEtapa(etp)
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-10">
            <div className="flex flex-col sm:flex-row w-full items-center justify-space-evenly">
                <div className="basis-1/4">
                    <Menu />
                </div>
                <div className="pl-10 pr-10 bg-customVerdeTres p-10 rounded-2xl w-full">
                    <h1 className="flex font-orbitron text-4xl pb-2"><ArrowRightCircleIcon className="h-10 w-10 text-gray-300" /> Emisiones de Gases de Efecto Invernadero</h1>
                    <hr className='mb-3'/>
                    {/*<p>{employee.message}</p>*/}
                    <div className='flex justify-around mb-5'>
                        <h2 className={`text-3xl font-orbitron w-full ${etapa === 'Etapa A1' ? 'bg-customVerdeDos' : 'bg-customVerdeUno'} text-center p-3 hover:bg-customVerdeDos cursor-pointer`} onClick={() => setEtapa('Etapa A1')}>Etapa A1</h2>
                        <h2 className={`text-3xl font-orbitron w-full ${etapa === 'Etapa A2' ? 'bg-customVerdeDos' : 'bg-customVerdeUno'} text-center p-3 hover:bg-customVerdeDos cursor-pointer ml-1 mr-1`} onClick={() => setEtapa('Etapa A2')}>Etapa A2</h2>
                        <h2 className={`text-3xl font-orbitron w-full ${etapa === 'Etapa A3' ? 'bg-customVerdeDos' : 'bg-customVerdeUno'} text-center p-3 hover:bg-customVerdeDos cursor-pointer`} onClick={() => setEtapa('Etapa A3')}>Etapa A3</h2>
                    </div>
                    <div className='etapaA1'>
                        <h2 className='flex items-center font-orbitron text-2xl bg-customVerdeDos p-3'><ArrowSmallRightIcon className="h-5 w-5 text-gray-300 mr-1" /> {etapa}</h2>
                        <p className='flex font-orbitron text-gray-100 mt-3 mb-2'><ChevronRightIcon className="h-6 w-6 text-gray-300" /> Año de declaración:</p>
                        <input type="number" placeholder='Año de declaración' className="font-orbitron border border-gray-300 rounded-md px-4 py-2 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"></input>
                        <p className='flex font-orbitron text-gray-100 mt-3 mb-2'><ChevronRightIcon className="h-6 w-6 text-gray-300" /> Nombre común del producto:</p>
                        <input type="text" placeholder='Nombre común del producto' className="font-orbitron border border-gray-300 rounded-md px-4 py-2 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"></input>
                        <p className='flex font-orbitron text-gray-100 mt-3 mb-2'><ChevronRightIcon className="h-6 w-6 text-gray-300" /> Producción total del producto para el año declarado:</p>
                        <input type="number" placeholder='Producción total del producto para el año declarado' className="font-orbitron border border-gray-300 rounded-md px-4 py-2 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"></input>
                        <p className='flex font-orbitron text-gray-100 mt-3 mb-2'><ChevronRightIcon className="h-6 w-6 text-gray-300" /> Materias primas:</p>
                        <input type="text" placeholder='Materias primas' className="font-orbitron border border-gray-300 rounded-md px-4 py-2 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"></input>
                    </div>
                </div>
            </div>
        </main>
    )
}