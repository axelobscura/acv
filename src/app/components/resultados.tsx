import { useState } from 'react';
import { ArrowRightCircleIcon, ArrowDownCircleIcon } from '@heroicons/react/24/solid'
import Modal from './modal';

export default function Resultados({datos}: {datos: any}) {
    const [modalOpen, setModalOpen] = useState(false)
    console.log('DATOS: ' + JSON.stringify(datos))

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    // EMISIONES
    const pt = datos.filter((nom: any) => nom.nombre === 'A1_3');
    // RESIDUOS
    const rp = datos.filter((nom: any) => nom.nombre === 'Generación de RP (kg)');
    const rp2 = datos.filter((nom: any) => nom.nombre === 'Cantidad de RP que se reutilizaron (kg)');
    const rme = datos.filter((nom: any) => nom.nombre === 'Generación de RME (kg)');
    const rme2 = datos.filter((nom: any) => nom.nombre === 'Cantidad de RME que se reutilizaron (kg)');
    const rsu = datos.filter((nom: any) => nom.nombre === 'Generación de RSU (kg)');
    const rsu2 = datos.filter((nom: any) => nom.nombre === 'Cantidad de RSU que se reutilizaron (kg)');
    // AGUAS
    const ca = datos.filter((nom: any) => nom.nombre === 'Consumo total de agua para el año de declarado');

    return (
        <div className="flex flex-col sm:flex-row w-full justify-space-evenly">
            <div className="pt-0 w-full">
                <h1 className="font-orbitron text-4xl flex"><ArrowRightCircleIcon className="h-10 w-10 text-gray-900" /> Resultados</h1>
                <hr className='mb-3 mt-2' />
                <p className='font-orbitron text-xs pb-3'>En esta sección se arrojaran una tablas resumen con las emisiones de CO<sup>2</sup> por unidad declarada de producto, para cada una de las etapa (A1, A2 y A3), además con el consumo por unidad declarada y un índice de circularidad de reutilización de residuos.</p>
                <hr/>
                {datos.map((dta:any) => {
                    if(dta.nombre && dta.nombre === 'A1_1'){
                        return(
                            <h3 key={dta.nombre} className='font-orbitron text-2xl text-white text-bold pt-3 pb-0'>Año de declaración: <b>{dta.valor}</b></h3>
                        )
                    }
                    if(dta.nombre && dta.nombre === 'A1_2'){
                        return(
                            <h3 key={dta.nombre} className='font-orbitron text-2xl text-white text-bold pt-0 pb-3'>Nombre común del producto: <b>{dta.valor}</b></h3>
                        )
                    }
                })}
                <hr/>
                <h3 className='flex items-center font-orbitron text-2xl text-white text-bold pt-1 pb-1'><ArrowDownCircleIcon className="h-7 w-7 mr-2 text-customVerdeCuatro" />Generación de Dióxido de Carbono equivalente</h3>
                <table className="font-orbitron table-fixed border-separate border-spacing-2 border border-white w-full">
                    <thead>
                        <tr>
                            <th className='bg-customVerdeDos'>Etapa</th>
                            <th className='bg-customVerdeDos text-1xl sm:text-xxs md:text-xs lg:text-base xl:text-xl'>tCO<sup>2</sup>e por consumo de combustible</th>
                            <th className='bg-customVerdeDos text-1xl sm:text-xxs md:text-xs lg:text-base xl:text-xl'>tCO<sup>2</sup>e por consumo de energía</th>
                            <th className='bg-customVerdeDos text-1xl sm:text-xxs md:text-xs lg:text-base xl:text-xl'>Total de tCO<sup>2</sup>e</th>
                            <th className='bg-customVerdeDos text-1xl sm:text-xxs md:text-xs lg:text-base xl:text-xl'>KgCO<sup>2</sup>e/unidad declarada</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        <tr>
                            <td className='bg-customVerdeUno text-center'>A1</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td className='bg-customVerdeUno text-center'>A2</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td className='bg-customVerdeUno text-center'>A3</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                        </tr>
                    </tbody>
                </table>
                <hr className='mb-1 mt-2' />
                <h3 className='flex items-center font-orbitron text-2xl text-white text-bold mb-2 mt-2'><ArrowDownCircleIcon className="h-7 w-7 mr-2 text-customVerdeCuatro"/>Consumo de Agua</h3>
                <table className="font-orbitron table-fixed border-separate border-spacing-2 border border-white w-full">
                    <thead>
                        <tr>
                            <th className='bg-customVerdeDos'>Consumo de Agua por Unidad Declarada</th>
                        </tr>
                    </thead>
                    <tbody className='text-2xl text-center font-bold'>
                        <tr>
                            <td>{ca.length && pt.length ? (ca[0].valor / pt[0].valor).toFixed(4) : 'FALTAN VALORES'}</td>
                        </tr>
                    </tbody>
                </table>
                <hr className='mb-1 mt-2' />
                <h3 className='flex items-center font-orbitron text-2xl text-white text-bold pt-1 pb-3'><ArrowDownCircleIcon className="h-7 w-7 mr-2 text-customVerdeCuatro"/>Índice de Circularidad</h3>
                <table className="font-orbitron table-fixed border-separate border-spacing-2 border border-white w-full">
                    <thead>
                        <tr>
                            <th className='bg-customVerdeDos'>Índice de Circularidad RP (%)</th>
                            <th className='bg-customVerdeDos'>Índice de Circularidad RME (%)</th>
                            <th className='bg-customVerdeDos'>Índice de Circularidad RSU (%)</th>
                        </tr>
                    </thead>
                    <tbody className='text-2xl text-center font-bold'>
                        <tr className=''>
                            <td>{rp.length && rp2.length ? ((rp2[0].valor * 100) / rp[0].valor).toFixed(4) : 'FALTAN VALORES'}</td>
                            <td>{rme.length && rme2.length ? ((rme2[0].valor * 100) / rme[0].valor).toFixed(4) : 'FALTAN VALORES'}</td>
                            <td>{rsu.length && rsu2.length ? ((rsu2[0].valor * 100) / rsu[0].valor).toFixed(4) : 'FALTAN VALORES'}</td>
                        </tr>
                    </tbody>
                </table>
                <Modal isOpen={modalOpen} onClose={closeModal} />
                <div>
                    <button className='font-orbitron bg-customVerdeDos p-3 mt-5' onClick={openModal}>AGREGAR DOCUMENTACIÓN</button>
                </div>
            </div>
        </div>
    )
}