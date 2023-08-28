"use client"
import { useState, useEffect } from 'react'
import Menu from "../components/menu"
import { ChevronRightIcon } from '@heroicons/react/24/solid'

export default function Emisiones() {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)

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

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-10">
            <div className="flex flex-row w-full justify-space-evenly">
                <div className="basis-1/4">
                    <Menu />
                </div>
                <div className="pl-10 pr-10 bg-customVerdeDos p-10 rounded-medium">
                    <h1 className="font-orbitron text-4xl pb-2">Emisiones de Gases de Efecto Invernadero</h1>
                    <hr className='mb-3'/>
                    {/*<p>{employee.message}</p>*/}
                    <p className='flex font-orbitron text-gray-100 mt-3 mb-2'><ChevronRightIcon className="h-6 w-6 text-customVerdeUno" /> Año de declaración:</p>
                    <input type="number" placeholder='Año de declaración' className="font-orbitron border border-gray-300 rounded-md px-4 py-2 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"></input>
                    <p className='flex font-orbitron text-gray-500 mt-3 mb-2'><ChevronRightIcon className="h-6 w-6 text-customVerdeUno" /> Nombre común del producto:</p>
                    <input type="text" placeholder='Nombre común del producto' className="font-orbitron border border-gray-300 rounded-md px-4 py-2 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"></input>
                    <p className='flex font-orbitron text-gray-500 mt-3 mb-2'><ChevronRightIcon className="h-6 w-6 text-customVerdeUno" /> Producción total del producto para el año declarado:</p>
                    <input type="number" placeholder='Producción total del producto para el año declarado' className="font-orbitron border border-gray-300 rounded-md px-4 py-2 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"></input>
                    <p className='flex font-orbitron text-gray-500 mt-3 mb-2'><ChevronRightIcon className="h-6 w-6 text-customVerdeUno" /> Materias primas:</p>
                    <input type="text" placeholder='Materias primas' className="font-orbitron border border-gray-300 rounded-md px-4 py-2 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"></input>
                </div>
            </div>
        </main>
    )
}