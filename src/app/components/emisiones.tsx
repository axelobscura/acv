"use client"
import React from 'react'
import { useEffect, useState } from 'react'
import Loader from '../components/loader'
import { ChevronRightIcon, ArrowRightCircleIcon, ArrowSmallRightIcon, ArrowSmallLeftIcon } from '@heroicons/react/24/solid'
import { useSearchParams } from 'next/navigation'

export default function Emisiones({ setLaEtapa, etapa, agregarDatos, losdatos } : {setLaEtapa: any, etapa: any, agregarDatos:any, losdatos:any}) {
    const searchParams = useSearchParams()
    const search = searchParams.get('categoria')
    if(etapa !== 'Etapa A1' && etapa !== 'Etapa A2' && etapa !== 'Etapa A3'){
        etapa = 'Etapa A1'
    }
    
    const [prendido, setPrendido] = useState('')
    const [lasPrimas, setLasPrimas] : [lasPrimas: any, setLasPrimas: any] = useState([])
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
    
    let mPrimas: string[] = [];
    const materiasPrimas = (e: any) => {
        let valor = e.target.value;
        let nombre = e.target.name;
        const exists = mPrimas.indexOf(valor) !== -1;
        if (lasPrimas.includes(valor)) {
            const index = lasPrimas.indexOf(valor);
            lasPrimas.splice(index, 1);
            setLasPrimas(lasPrimas)
        } else {
            mPrimas.push(valor);
            setLasPrimas([...lasPrimas, {nombre: nombre, valor: valor}])
        }
    }

    useEffect(() => {
        if(lasPrimas.length){
            agregarDatos({'nombre':'primas', 'valor':[...lasPrimas]})
        }
    }, [lasPrimas])
    
    const object_A1_1 = losdatos.find((obj: any) => obj.nombre === 'A1_1');
    const object_A1_2 = losdatos.find((obj: any) => obj.nombre === 'A1_2');
    const object_A1_3 = losdatos.find((obj: any) => obj.nombre === 'A1_3');
    const object_A1_4 = losdatos.find((obj: any) => obj.nombre === 'A1_4');
    const object_A2_1 = losdatos.find((obj: any) => obj.nombre === 'A2_1');
    const object_A2_2 = losdatos.find((obj: any) => obj.nombre === 'A2_2');

    return (
        <div className="flex flex-col sm:flex-row w-full justify-space-evenly">
            <div className="bg-customVerdeDos p-3 rounded-2xl w-full shadow-[inset_0_5px_10px_rgba(0,0,0,0.6)]">
                <h1 className="flex font-orbitron text-4xl pb-2"><ArrowRightCircleIcon className="h-10 w-10 text-gray-300" /> Emisiones de Gases de Efecto Invernadero</h1>
                <hr className='mb-3'/>
                {/*<p>{employee.message}</p>*/}
                <div className='flex justify-around mb-0'>
                    <h2 className={`text-xs md:text-3xl font-orbitron w-full rounded-2xl ${etapa === 'Etapa A1' ? 'bg-customVerdeDos shadow-[inset_0_5px_10px_rgba(0,0,0,0.6)]' : 'bg-customVerdeUno'} text-center p-3 hover:bg-customVerdeDos cursor-pointer`} onClick={() => sacaValor('Etapa A1')}>Etapa A1</h2>
                    <h2 className={`text-xs md:text-3xl font-orbitron w-full rounded-2xl ${etapa === 'Etapa A2' ? 'bg-customVerdeDos shadow-[inset_0_5px_10px_rgba(0,0,0,0.6)]' : 'bg-customVerdeUno'} text-center p-3 hover:bg-customVerdeDos cursor-pointer ml-1 mr-1`} onClick={() => sacaValor('Etapa A2')}>Etapa A2</h2>
                    <h2 className={`text-xs md:text-3xl font-orbitron w-full rounded-2xl ${etapa === 'Etapa A3' ? 'bg-customVerdeDos shadow-[inset_0_5px_10px_rgba(0,0,0,0.6)]' : 'bg-customVerdeUno'} text-center p-3 hover:bg-customVerdeDos cursor-pointer`} onClick={() => sacaValor('Etapa A3')}>Etapa A3</h2>
                </div>
                <form className='bg-customVerdeDos p-5 rounded-2xl'>
                    <div className='etapaA1' style={{
                        display: etapa === 'Etapa A1' ? 'block' : 'none'
                    }}>
                        <p className='flex font-orbitron text-gray-100 mt-3 mb-2'><ChevronRightIcon className="h-6 w-6 text-gray-300" /> Año de declaración:</p>
                        <select onChange={sacarDato} name='A1_1' className="font-orbitron border border-gray-300 rounded-md px-4 py-2 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full mx-3">
                            <option value={object_A1_1 ? object_A1_1.valor : ''}>{object_A1_1 ? object_A1_1.valor : ''}</option>
                            <option value='2017'>2017</option>
                            <option value='2018'>2018</option>
                            <option value='2019'>2019</option>
                            <option value='2020'>2020</option>
                            <option value='2021'>2021</option>
                            <option value='2022'>2022</option>
                            <option value='2023'>2023</option>
                            <option value='2024'>2024</option>
                        </select>
                        <p className='flex font-orbitron text-gray-100 mt-3 mb-2'><ChevronRightIcon className="h-6 w-6 text-gray-300" /> Nombre común del producto:</p>
                        <input type="text" onBlur={sacarDato} name='A1_2' placeholder={object_A1_2 ? object_A1_2.valor : 'Nombre común del producto'} className="font-orbitron border border-gray-300 rounded-md px-4 py-2 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full mx-3"></input>
                        <p className='flex font-orbitron text-gray-100 mt-3 mb-2'><ChevronRightIcon className="h-6 w-6 text-gray-300" /> Producción total del producto para el año declarado:</p>
                        <input type="number" onBlur={sacarDato} name='A1_3' placeholder={object_A1_3 ? object_A1_3.valor : 'Producción total del producto para el año declarado'} className="font-orbitron border border-gray-300 rounded-md px-4 py-2 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full mx-3"></input>
                        <p className='flex font-orbitron text-gray-100 mt-3 mb-2'><ChevronRightIcon className="h-6 w-6 text-gray-300" /> Unidad declarada:</p>
                        <input type="number" onBlur={sacarDato} name='A1_5' placeholder={object_A1_4 ? object_A1_4.valor : 'Introduce la unidad declarada del producto (Ej. kg, m3, l, etc).'} className="font-orbitron border border-gray-300 rounded-md px-4 py-2 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full mx-3"></input>
                        <p className='flex font-orbitron text-gray-100 mt-3 mb-2'><ChevronRightIcon className="h-6 w-6 text-gray-300" /> Selecciona el producto</p>
                        <div className="flex items-center justify-center">
                            <label className="inline-flex items-center m-3">
                                <input type="radio" className="form-radio accent-customVerdeDos h-7 w-7" name="radio-buttons" value="option1"></input>
                                <span className="ml-2 font-orbitron text-gray-100">Concreto</span>
                            </label>
                            <label className="inline-flex items-center m-3">
                                <input type="radio" className="form-radio accent-customVerdeDos h-7 w-7" name="radio-buttons" value="option2"></input>
                                <span className="ml-2 font-orbitron text-gray-100">Macrofibras</span>
                            </label>
                        </div>
                        <p className='flex font-orbitron text-gray-100 mt-3 mb-2'><ChevronRightIcon className="h-6 w-6 text-gray-300" /> Selecciona las materias primas que se usan para la fabricaión del producto (en el caso de que se seleccione macrofibras de polipropileno):</p>
                        <div className='flex'>
                            <input type="number" name='p2Valor' placeholder="Cantidad de polipropileno virgen (kg)" className="font-orbitron border border-gray-300 rounded-md px-4 py-2 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full mx-3"></input>
                        </div>
                        <div className='flex my-2'>
                            <input type="number" name='p2Valor' placeholder="Cantidad de polipropileno reciclado (kg)" className="font-orbitron border border-gray-300 rounded-md px-4 py-2 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full mx-3"></input>
                        </div>
                        <div className='flex w-full justify-end mt-2'>
                            <ArrowSmallRightIcon className="h-10 w-10 text-gray-300" onClick={() => sacaValor('Etapa A2')} />
                        </div>
                    </div>
                    <div className='etapaA2' style={{
                        display: etapa === 'Etapa A2' ? 'block' : 'none',
                        overflow: 'auto'
                    }}>
                        <p className='flex font-orbitron text-gray-100 mt-3 mb-2'><ChevronRightIcon className="h-6 w-6 text-gray-300" /> La ubicación del proveedor de materia prima::</p>
                        <input type="text" onMouseOut={sacarDato} name='A2_1' placeholder={object_A2_1 ? object_A2_1.valor : 'La ubicación del proveedor de materia prima'} className="font-orbitron border border-gray-300 rounded-md px-4 py-2 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"></input>
                        <p className='flex font-orbitron text-gray-100 mt-3 mb-2'><ChevronRightIcon className="h-6 w-6 text-gray-300" /> Los km que se recorren de la planta del proveedor a la planta de producción (ida):</p>
                        <input type="number" onMouseOut={sacarDato} name='A2_2' placeholder={object_A2_2 ? object_A2_2.valor : 'Los km que el proveedor recorre de ida'} className="font-orbitron border border-gray-300 rounded-md px-4 py-2 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"></input>
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