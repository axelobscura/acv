"use client"
import { useEffect, useState } from 'react'
import Loader from '../components/loader'
import { ChevronRightIcon, ArrowRightCircleIcon, ArrowSmallRightIcon, ArrowSmallLeftIcon } from '@heroicons/react/24/solid'

export default function Emisiones({ setLaEtapa, etapa, agregarDatos, losdatos } : {setLaEtapa: any, etapa: any, agregarDatos:any, losdatos:any}) {
    if(!etapa){
        etapa = 'Etapa A1'
    }

    const [prendido, setPrendido] = useState('')

    useEffect(() => {
        setPrendido(losdatos.filter((dato: any) => dato.nombre === etapa))
    }, [])

    const sacaValor = async (etapa: string) => {
        setLaEtapa(etapa);
    }

    const sacarDato = (e: any) => {
        let valor = e.target.value;
        let nombre = e.target.name;
        agregarDatos({nombre, valor})
    }

    console.log(losdatos.map((dat: any) => dat.nombre === 'A1_1'))
    const object_A1_1 = losdatos.find((obj: any) => obj.nombre === 'A1_1');

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
                        <select onChange={sacarDato} name='A1_1' className="font-orbitron border border-gray-300 rounded-md px-4 py-2 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full">
                            <option value=''>{object_A1_1.valor}</option>
                            <option value='2017'>2017</option>
                            <option value='2018'>2018</option>
                            <option value='2019'>2019</option>
                            <option value='2020'>2020</option>
                            <option value='2021'>2021</option>
                            <option value='2022'>2022</option>
                            <option value='2023'>2023</option>
                        </select>
                        <p className='flex font-orbitron text-gray-100 mt-3 mb-2'><ChevronRightIcon className="h-6 w-6 text-gray-300" /> Nombre común del producto:</p>
                        <input type="text" onBlur={sacarDato} name='A1_2' placeholder={'Nombre común del producto'} className="font-orbitron border border-gray-300 rounded-md px-4 py-2 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"></input>
                        <p className='flex font-orbitron text-gray-100 mt-3 mb-2'><ChevronRightIcon className="h-6 w-6 text-gray-300" /> Producción total del producto para el año declarado:</p>
                        <input type="number" onBlur={sacarDato} name='A1_3' placeholder={'Producción total del producto para el año declarado'} className="font-orbitron border border-gray-300 rounded-md px-4 py-2 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"></input>
                        <p className='flex font-orbitron text-gray-100 mt-3 mb-2'><ChevronRightIcon className="h-6 w-6 text-gray-300" /> Materias primas:</p>
                        <select onChange={sacarDato} name='A1_4' className="font-orbitron border border-gray-300 rounded-md px-4 py-2 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full">
                            <option value=''></option>
                            <option value='Polipropileno'>Polipropileno</option>
                            <option value='Grava'>Grava</option>
                            <option value='Cemento'>Cemento</option>
                            <option value='Arena'>Arena</option>
                            <option value='Agua'>Agua</option>
                        </select>
                        <div className='flex w-full justify-end mt-2'>
                            <ArrowSmallRightIcon className="h-10 w-10 text-gray-300" onClick={() => sacaValor('Etapa A2')} />
                        </div>
                    </div>
                    <div className='etapaA2' style={{
                        display: etapa === 'Etapa A2' ? 'block' : 'none',
                        overflow: 'auto'
                    }}>
                        <p className='flex font-orbitron text-gray-100 mt-3 mb-2'><ChevronRightIcon className="h-6 w-6 text-gray-300" /> La ubicación del proveedor de materia prima::</p>
                        <input type="text" onMouseOut={sacarDato} name='A2_1' placeholder={'La ubicación del proveedor de materia prima'} className="font-orbitron border border-gray-300 rounded-md px-4 py-2 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"></input>
                        <p className='flex font-orbitron text-gray-100 mt-3 mb-2'><ChevronRightIcon className="h-6 w-6 text-gray-300" /> Los km que se recorren de la planta del proveedor a la planta de producción (ida):</p>
                        <input type="number" onMouseOut={sacarDato} name='A2_2' placeholder={'Los km que el proveedor recorre de ida'} className="font-orbitron border border-gray-300 rounded-md px-4 py-2 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"></input>
                        <p className='flex font-orbitron text-gray-100 mt-3 mb-2'><ChevronRightIcon className="h-6 w-6 text-gray-300" /> Los km km que se recorren de la planta del producción a la planta de proveedor (vuelta):</p>
                        <input type="number" onMouseOut={sacarDato} name='A2_3' placeholder={'Los km que el proveedor recorre de regreso'} className="font-orbitron border border-gray-300 rounded-md px-4 py-2 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"></input>
                        <p className='flex font-orbitron text-gray-100 mt-3 mb-2'><ChevronRightIcon className="h-6 w-6 text-gray-300" /> El rendimiento de la unidad de transporte llena:</p>
                        <input type="text" onMouseOut={sacarDato} name='A2_4' placeholder={'El rendimiento de la unidad de transporte llena'} className="font-orbitron border border-gray-300 rounded-md px-4 py-2 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"></input>
                        <p className='flex font-orbitron text-gray-100 mt-3 mb-2'><ChevronRightIcon className="h-6 w-6 text-gray-300" /> El rendimiento de la unidad de transporte vacía:</p>
                        <input type="text" onMouseOut={sacarDato} name='A2_5' placeholder={'El rendimiento de la unidad de transporte vacía'} className="font-orbitron border border-gray-300 rounded-md px-4 py-2 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"></input>
                        <p className='flex font-orbitron text-gray-100 mt-3 mb-2'><ChevronRightIcon className="h-6 w-6 text-gray-300" /> La frecuencia con la que se surtió la materia prima en el año de declaración:</p>
                        <input type="text" onMouseOut={sacarDato} name='A2_6' placeholder={'La frecuencia con la que se surtió la materia prima en el año de declaración'} className="font-orbitron border border-gray-300 rounded-md px-4 py-2 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"></input>
                        <div className='flex w-full justify-end mt-2'>
                            <ArrowSmallLeftIcon className="h-10 w-10 text-gray-300" onClick={() => sacaValor('Etapa A1')} />
                            <ArrowSmallRightIcon className="h-10 w-10 text-gray-300" onClick={() => sacaValor('Etapa A3')} />
                        </div>
                    </div>
                    <div className='etapa A3' style={{
                        display: etapa === 'Etapa A3' ? 'block' : 'none'
                    }}>
                        <p className='flex font-orbitron text-gray-100 mt-3 mb-2'><ChevronRightIcon className="h-6 w-6 text-gray-300" /> Consumo total de energía eléctrica en kWh:</p>
                        <input type="number" onMouseOut={sacarDato} name='A3_1' placeholder={'Consumo total de energía eléctrica en kWh'} className="font-orbitron border border-gray-300 rounded-md px-4 py-2 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"></input>
                        <p className='flex font-orbitron text-gray-100 mt-3 mb-2'><ChevronRightIcon className="h-6 w-6 text-gray-300" /> Consumo de combustibles fósiles en la planta:</p>
                        <input type="text" onMouseOut={sacarDato} name='A3_2' placeholder={'Consumo de combustibles fósiles en la planta'} className="font-orbitron border border-gray-300 rounded-md px-4 py-2 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"></input>
                        <p className='flex font-orbitron text-gray-100 mt-3 mb-2'><ChevronRightIcon className="h-6 w-6 text-gray-300" /> Consumo de combustibles fósiles en las unidades móviles de la empresa:</p>
                        <input type="number" onMouseOut={sacarDato} name='A3_3' placeholder={'Consumo de combustibles fósiles en las unidades móviles de la empresa'} className="font-orbitron border border-gray-300 rounded-md px-4 py-2 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"></input>
                        <div className='flex w-full justify-end mt-2'>
                            <ArrowSmallLeftIcon className="h-10 w-10 text-gray-300" onClick={() => sacaValor('Etapa A2')} />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}