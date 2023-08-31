"use client"
import { useState, useEffect, useRef } from 'react'
import Loader from '../components/loader'
import { ChevronRightIcon, ArrowRightCircleIcon, ArrowSmallRightIcon, ArrowSmallLeftIcon } from '@heroicons/react/24/solid'

export default function Emisiones({ setLaEtapa, etapa, agregarDatos } : {setLaEtapa: any, etapa: any, agregarDatos:any}) {
    if(!etapa){
        etapa = 'Etapa A1'
    }

    const A1_1 = useRef<HTMLInputElement>(null);
    const A1_2 = useRef<HTMLInputElement>(null);
    const A1_3 = useRef<HTMLInputElement>(null);
    const A1_4 = useRef<HTMLInputElement>(null);
    const A2_1 = useRef<HTMLInputElement>(null);
    const A2_2 = useRef<HTMLInputElement>(null);
    const A2_3 = useRef<HTMLInputElement>(null);
    const A2_4 = useRef<HTMLInputElement>(null);
    const A2_5 = useRef<HTMLInputElement>(null);
    const A2_6 = useRef<HTMLInputElement>(null);
    const A3_1 = useRef<HTMLInputElement>(null);
    const A3_2 = useRef<HTMLInputElement>(null);
    const A3_3 = useRef<HTMLInputElement>(null);

    /*
    useEffect(() => {
        fetch('/api/hello')
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoading(false)
            })
    }, [])

    if (isLoading) return <Loader/>
    if (!data) return <p>NO HAY DATOS</p>
    */
    /*
    type Employee = {
        message: string
    };

    let employee: Employee | any = data;
    */
    
    let value_A1_1 = localStorage.getItem('A1_1');
    let value_A1_2 = localStorage.getItem('A1_2');
    let value_A1_3 = localStorage.getItem('A1_3');
    let value_A1_4 = localStorage.getItem('A1_4');
    let value_A2_1 = localStorage.getItem('A2_1');
    let value_A2_2 = localStorage.getItem('A2_2');
    let value_A2_3 = localStorage.getItem('A2_3');
    let value_A2_4 = localStorage.getItem('A2_4');
    let value_A2_5 = localStorage.getItem('A2_5');
    let value_A2_6 = localStorage.getItem('A2_6');
    let value_A3_1 = localStorage.getItem('A3_1');
    let value_A3_2 = localStorage.getItem('A3_2');
    let value_A3_3 = localStorage.getItem('A3_3');

    const sacaValor = async (etapa: string) => {
        setLaEtapa(etapa);
        /*
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
                    A2_1: A2_1.current?.value,
                }
            }]),
        })

        const data = await res.json();
        console.log('LA DATA: ',data);
        */
    }

    const sacarDato = (e: any) => {
        let valor = e.target.value;
        let nombre = e.target.name;
        console.log(valor, nombre);
        agregarDatos({nombre, valor})
    }

    return (
        <div className="flex flex-col sm:flex-row w-full justify-space-evenly">
            <div className="p-0 w-full">
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
                        <input type="number" onMouseOut={sacarDato} name='A1_1' placeholder={value_A1_1 ? value_A1_1 : 'Año de declaración'} className="font-orbitron border border-gray-300 rounded-md px-4 py-2 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"></input>
                        <p className='flex font-orbitron text-gray-100 mt-3 mb-2'><ChevronRightIcon className="h-6 w-6 text-gray-300" /> Nombre común del producto:</p>
                        <input type="text" onMouseOut={sacarDato} name='A1_2' placeholder={value_A1_2 ? value_A1_2 : 'Nombre común del producto'} className="font-orbitron border border-gray-300 rounded-md px-4 py-2 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"></input>
                        <p className='flex font-orbitron text-gray-100 mt-3 mb-2'><ChevronRightIcon className="h-6 w-6 text-gray-300" /> Producción total del producto para el año declarado:</p>
                        <input type="number" onMouseOut={sacarDato} name='A1_3' placeholder={value_A1_3 ? value_A1_3 : 'Producción total del producto para el año declarado'} className="font-orbitron border border-gray-300 rounded-md px-4 py-2 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"></input>
                        <p className='flex font-orbitron text-gray-100 mt-3 mb-2'><ChevronRightIcon className="h-6 w-6 text-gray-300" /> Materias primas:</p>
                        <input type="text" onMouseOut={sacarDato} name='A1_4' placeholder={value_A1_4 ? value_A1_4 : 'Materias primas'} className="font-orbitron border border-gray-300 rounded-md px-4 py-2 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"></input>
                        <div className='flex w-full justify-end mt-2'>
                            <ArrowSmallRightIcon className="h-10 w-10 text-gray-300" onClick={() => sacaValor('Etapa A2')} />
                        </div>
                    </div>
                    <div className='etapaA2' style={{
                        display: etapa === 'Etapa A2' ? 'block' : 'none',
                        overflow: 'auto'
                    }}>
                        <p className='flex font-orbitron text-gray-100 mt-3 mb-2'><ChevronRightIcon className="h-6 w-6 text-gray-300" /> La ubicación del proveedor de materia prima::</p>
                        <input type="text" onMouseOut={sacarDato} name='A2_1' placeholder={value_A2_1 ? value_A2_1 : 'La ubicación del proveedor de materia prima'} className="font-orbitron border border-gray-300 rounded-md px-4 py-2 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"></input>
                        <p className='flex font-orbitron text-gray-100 mt-3 mb-2'><ChevronRightIcon className="h-6 w-6 text-gray-300" /> Los km que el proveedor recorre de ida:</p>
                        <input type="number" onMouseOut={sacarDato} name='A2_2' placeholder={value_A2_2 ? value_A2_2 : 'Los km que el proveedor recorre de ida'} className="font-orbitron border border-gray-300 rounded-md px-4 py-2 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"></input>
                        <p className='flex font-orbitron text-gray-100 mt-3 mb-2'><ChevronRightIcon className="h-6 w-6 text-gray-300" /> Los km que el proveedor recorre de regreso:</p>
                        <input type="number" onMouseOut={sacarDato} name='A2_3' placeholder={value_A2_3 ? value_A2_3 : 'Los km que el proveedor recorre de regreso'} className="font-orbitron border border-gray-300 rounded-md px-4 py-2 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"></input>
                        <p className='flex font-orbitron text-gray-100 mt-3 mb-2'><ChevronRightIcon className="h-6 w-6 text-gray-300" /> El rendimiento de la unidad de transporte llena:</p>
                        <input type="text" onMouseOut={sacarDato} name='A2_4' placeholder={value_A2_4 ? value_A2_4 : 'El rendimiento de la unidad de transporte llena'} className="font-orbitron border border-gray-300 rounded-md px-4 py-2 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"></input>
                        <p className='flex font-orbitron text-gray-100 mt-3 mb-2'><ChevronRightIcon className="h-6 w-6 text-gray-300" /> El rendimiento de la unidad de transporte vacía:</p>
                        <input type="text" onMouseOut={sacarDato} name='A2_5' placeholder={value_A2_5 ? value_A2_5 : 'El rendimiento de la unidad de transporte vacía'} className="font-orbitron border border-gray-300 rounded-md px-4 py-2 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"></input>
                        <p className='flex font-orbitron text-gray-100 mt-3 mb-2'><ChevronRightIcon className="h-6 w-6 text-gray-300" /> La frecuencia con la que se surtió la materia prima en el año de declaración:</p>
                        <input type="text" onMouseOut={sacarDato} name='A2_6' placeholder={value_A2_6 ? value_A2_6 : 'La frecuencia con la que se surtió la materia prima en el año de declaración'} className="font-orbitron border border-gray-300 rounded-md px-4 py-2 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"></input>
                        <div className='flex w-full justify-end mt-2'>
                            <ArrowSmallLeftIcon className="h-10 w-10 text-gray-300" onClick={() => sacaValor('Etapa A1')} />
                            <ArrowSmallRightIcon className="h-10 w-10 text-gray-300" onClick={() => sacaValor('Etapa A3')} />
                        </div>
                    </div>
                    <div className='etapa A3' style={{
                        display: etapa === 'Etapa A3' ? 'block' : 'none'
                    }}>
                        <p className='flex font-orbitron text-gray-100 mt-3 mb-2'><ChevronRightIcon className="h-6 w-6 text-gray-300" /> Consumo total de energía eléctrica en kWh:</p>
                        <input type="number" onMouseOut={sacarDato} name='A3_1' placeholder={value_A3_1 ? value_A3_1 : 'Consumo total de energía eléctrica en kWh'} className="font-orbitron border border-gray-300 rounded-md px-4 py-2 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"></input>
                        <p className='flex font-orbitron text-gray-100 mt-3 mb-2'><ChevronRightIcon className="h-6 w-6 text-gray-300" /> Consumo de combustibles fósiles en la planta:</p>
                        <input type="text" onMouseOut={sacarDato} name='A3_2' placeholder={value_A3_2 ? value_A3_2 : 'Consumo de combustibles fósiles en la planta'} className="font-orbitron border border-gray-300 rounded-md px-4 py-2 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"></input>
                        <p className='flex font-orbitron text-gray-100 mt-3 mb-2'><ChevronRightIcon className="h-6 w-6 text-gray-300" /> Consumo de combustibles fósiles en las unidades móviles de la empresa:</p>
                        <input type="number" onMouseOut={sacarDato} name='A3_3' placeholder={value_A3_3 ? value_A3_3 : 'Consumo de combustibles fósiles en las unidades móviles de la empresa'} className="font-orbitron border border-gray-300 rounded-md px-4 py-2 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"></input>
                        <div className='flex w-full justify-end mt-2'>
                            <ArrowSmallLeftIcon className="h-10 w-10 text-gray-300" onClick={() => sacaValor('Etapa A2')} />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}