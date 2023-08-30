"use client"
import { useState, useEffect, useRef } from 'react'
import Menu from "../components/menu"
import Loader from '../components/loader'
import { ChevronRightIcon, ArrowRightCircleIcon, ArrowSmallRightIcon, ArrowSmallLeftIcon } from '@heroicons/react/24/solid'

export default function Emisiones() {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)
    const [etapa, setEtapa] = useState('Etapa A1')
    const A1_1 = useRef<HTMLInputElement>(null);
    const A1_2 = useRef<HTMLInputElement>(null);
    const A1_3 = useRef<HTMLInputElement>(null);
    const A1_4 = useRef<HTMLInputElement>(null);

    useEffect(() => {
        fetch('/api/hello')
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoading(false)
            })
    }, [])

    if (isLoading) return <Loader/>
    if (!data) return <p>No profile data</p>

    type Employee = {
        message: string
    };

    let employee: Employee | any = data;

    const sacaValor = async (etapa: string) => {
        setEtapa(etapa);

        const res = await fetch('/api/hello', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify([{
                etapa: {
                    A1_1: A1_1.current?.value,
                    A1_2: A1_2.current?.value,
                    A1_3: A1_3.current?.value,
                    A1_4: A1_4.current?.value,
                }
            }]),
        })

        const data = await res.json();
        console.log('LA DATA: ',data);
    }

    return (
        <main className="flex min-h-screen align-center justify-center flex-col p-5" style={{
            'backgroundImage': 'linear-gradient(to bottom, rgba(95, 133, 22, 0.90), rgba(29, 40, 6, 0.95)), url("/bkg1.jpg")',
            'backgroundSize': 'cover', /* makes the bg image responsive */
            'backgroundRepeat': 'no-repeat',
            'backgroundPosition': 'center',
            'backgroundColor': '#222222',
        }}>
            <div className="flex flex-col sm:flex-row w-full justify-space-evenly">
                <div className="basis-1/4">
                    <Menu />
                </div>
                <div className="pl-10 pr-10 pt-5 w-full">
                    <h1 className="flex font-orbitron text-4xl pb-2"><ArrowRightCircleIcon className="h-10 w-10 text-gray-300" /> Emisiones de Gases de Efecto Invernadero</h1>
                    <hr className='mb-3'/>
                    {/*<p>{employee.message}</p>*/}
                    <div className='flex justify-around mb-0'>
                        <h2 className={`text-xs md:text-3xl font-orbitron w-full ${etapa === 'Etapa A1' ? 'bg-customVerdeDos' : 'bg-customVerdeUno'} text-center p-3 hover:bg-customVerdeDos cursor-pointer`} onClick={() => sacaValor('Etapa A1')}>Etapa A1</h2>
                        <h2 className={`text-xs md:text-3xl font-orbitron w-full ${etapa === 'Etapa A2' ? 'bg-customVerdeDos' : 'bg-customVerdeUno'} text-center p-3 hover:bg-customVerdeDos cursor-pointer ml-1 mr-1`} onClick={() => sacaValor('Etapa A2')}>Etapa A2</h2>
                        <h2 className={`text-xs md:text-3xl font-orbitron w-full ${etapa === 'Etapa A3' ? 'bg-customVerdeDos' : 'bg-customVerdeUno'} text-center p-3 hover:bg-customVerdeDos cursor-pointer`} onClick={() => sacaValor('Etapa A3')}>Etapa A3</h2>
                    </div>
                    <h2 className='flex items-center font-orbitron text-2xl bg-customVerdeDos p-3'><ArrowSmallRightIcon className="h-5 w-5 text-gray-300 mr-1" /> {etapa}</h2>
                    <form>
                        <div className='etapaA1' style={{
                            display: etapa === 'Etapa A1' ? 'block' : 'none'
                        }}>
                            <p className='flex font-orbitron text-gray-100 mt-3 mb-2'><ChevronRightIcon className="h-6 w-6 text-gray-300" /> Año de declaración:</p>
                            <input type="number" ref={A1_1} name='A1_1' placeholder='Año de declaración' className="font-orbitron border border-gray-300 rounded-md px-4 py-2 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"></input>
                            <p className='flex font-orbitron text-gray-100 mt-3 mb-2'><ChevronRightIcon className="h-6 w-6 text-gray-300" /> Nombre común del producto:</p>
                            <input type="text" ref={A1_2} name='A1_2' placeholder='Nombre común del producto' className="font-orbitron border border-gray-300 rounded-md px-4 py-2 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"></input>
                            <p className='flex font-orbitron text-gray-100 mt-3 mb-2'><ChevronRightIcon className="h-6 w-6 text-gray-300" /> Producción total del producto para el año declarado:</p>
                            <input type="number" ref={A1_3} name='A1_3' placeholder='Producción total del producto para el año declarado' className="font-orbitron border border-gray-300 rounded-md px-4 py-2 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"></input>
                            <p className='flex font-orbitron text-gray-100 mt-3 mb-2'><ChevronRightIcon className="h-6 w-6 text-gray-300" /> Materias primas:</p>
                            <input type="text" ref={A1_4} name='A1_4' placeholder='Materias primas' className="font-orbitron border border-gray-300 rounded-md px-4 py-2 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"></input>
                            <div className='flex w-full justify-end mt-2'>
                                <ArrowSmallRightIcon className="h-10 w-10 text-gray-300" onClick={() => sacaValor('Etapa A2')} />
                            </div>
                        </div>
                        <div className='etapaA2' style={{
                            display: etapa === 'Etapa A2' ? 'block' : 'none',
                            overflow: 'auto'
                        }}>
                            <p className='flex font-orbitron text-gray-100 mt-3 mb-2'><ChevronRightIcon className="h-6 w-6 text-gray-300" /> La ubicación del proveedor de materia prima::</p>
                            <input type="number" placeholder='La ubicación del proveedor de materia prima' className="font-orbitron border border-gray-300 rounded-md px-4 py-2 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"></input>
                            <p className='flex font-orbitron text-gray-100 mt-3 mb-2'><ChevronRightIcon className="h-6 w-6 text-gray-300" /> Los km que el proveedor recorre de ida:</p>
                            <input type="text" placeholder='Los km que el proveedor recorre de ida' className="font-orbitron border border-gray-300 rounded-md px-4 py-2 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"></input>
                            <p className='flex font-orbitron text-gray-100 mt-3 mb-2'><ChevronRightIcon className="h-6 w-6 text-gray-300" /> Los km que el proveedor recorre de regreso:</p>
                            <input type="number" placeholder='Los km que el proveedor recorre de regreso' className="font-orbitron border border-gray-300 rounded-md px-4 py-2 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"></input>
                            <p className='flex font-orbitron text-gray-100 mt-3 mb-2'><ChevronRightIcon className="h-6 w-6 text-gray-300" /> El rendimiento de la unidad de transporte llena:</p>
                            <input type="text" placeholder='El rendimiento de la unidad de transporte llena' className="font-orbitron border border-gray-300 rounded-md px-4 py-2 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"></input>
                            <p className='flex font-orbitron text-gray-100 mt-3 mb-2'><ChevronRightIcon className="h-6 w-6 text-gray-300" /> El rendimiento de la unidad de transporte vacía:</p>
                            <input type="text" placeholder='El rendimiento de la unidad de transporte vacía' className="font-orbitron border border-gray-300 rounded-md px-4 py-2 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"></input>
                            <p className='flex font-orbitron text-gray-100 mt-3 mb-2'><ChevronRightIcon className="h-6 w-6 text-gray-300" /> La frecuencia con la que se surtió la materia prima en el año de declaración:</p>
                            <input type="text" placeholder='La frecuencia con la que se surtió la materia prima en el año de declaración' className="font-orbitron border border-gray-300 rounded-md px-4 py-2 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"></input>
                            <div className='flex w-full justify-end mt-2'>
                                <ArrowSmallLeftIcon className="h-10 w-10 text-gray-300" onClick={() => sacaValor('Etapa A1')} />
                                <ArrowSmallRightIcon className="h-10 w-10 text-gray-300" onClick={() => sacaValor('Etapa A3')} />
                            </div>
                        </div>
                        <div className='etapa A3' style={{
                            display: etapa === 'Etapa A3' ? 'block' : 'none'
                        }}>
                            <p className='flex font-orbitron text-gray-100 mt-3 mb-2'><ChevronRightIcon className="h-6 w-6 text-gray-300" /> Consumo total de energía eléctrica en kWh:</p>
                            <input type="number" placeholder='Consumo total de energía eléctrica en kWh' className="font-orbitron border border-gray-300 rounded-md px-4 py-2 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"></input>
                            <p className='flex font-orbitron text-gray-100 mt-3 mb-2'><ChevronRightIcon className="h-6 w-6 text-gray-300" /> Consumo de combustibles fósiles en la planta:</p>
                            <input type="text" placeholder='Consumo de combustibles fósiles en la planta' className="font-orbitron border border-gray-300 rounded-md px-4 py-2 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"></input>
                            <p className='flex font-orbitron text-gray-100 mt-3 mb-2'><ChevronRightIcon className="h-6 w-6 text-gray-300" /> Consumo de combustibles fósiles en las unidades móviles de la empresa:</p>
                            <input type="number" placeholder='Consumo de combustibles fósiles en las unidades móviles de la empresa' className="font-orbitron border border-gray-300 rounded-md px-4 py-2 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"></input>
                            <div className='flex w-full justify-end mt-2'>
                                <ArrowSmallLeftIcon className="h-10 w-10 text-gray-300" onClick={() => sacaValor('Etapa A2')} />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}