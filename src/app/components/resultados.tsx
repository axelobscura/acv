import { useState, useEffect } from 'react';
import { ArrowRightCircleIcon, ArrowDownCircleIcon } from '@heroicons/react/24/solid'
import Modal from './modal';
import SideBar from './sidebar';

export default function Resultados({datos}: {datos: any}) {
    const [modalOpen, setModalOpen] = useState(false);
    const [productoVal, setProductoVal] = useState(0);
    const [consumoGasolinaIda, setConsumoGasolinaIda] = useState(0);
    const [consumoGasolinaVuelta, setConsumoGasolinaVuelta] = useState(0);
    const [consumoGasolinaMes, setConsumoGasolinaMes] = useState(0);
    const [consumoGasolinaAno, setConsumoGasolinaAno] = useState(0);
    const [energiaMWH, setEnergiaMWH] = useState(0);

    const [cotcoM, setcotcoM] = useState(0);
    const [chtchM, setchtchM] = useState(0);
    const [notnoM, setnotnoM] = useState(0);

    const [cotcoT, setcotcoT] = useState(0);
    const [chtchT, setchtchT] = useState(0);
    const [notnoT, setnotnoT] = useState(0);

    const [poliVal, setPoliVal] = useState(0);
    //console.log('DATOS: ' + JSON.stringify(datos))

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    // EMISIONES
    const pt = datos.filter((nom: any) => nom.nombre === 'A1_3');
    const producto = datos.filter((nom: any) => nom.nombre === 'A1_6');
    const productoValor = producto[0]?.valor ? producto[0].valor : 0;
    
    const polivirgen = datos.filter((nom: any) => nom.nombre === 'A1_7');
    const polireciclado = datos.filter((nom: any) => nom.nombre === 'A1_8');

    const consumogasida = datos.filter((nom: any) => nom.nombre === 'A2_1');
    const consumogasvuelta = datos.filter((nom: any) => nom.nombre === 'A2_2');
    const frecuencia = datos.filter((nom: any) => nom.nombre === 'A2_6');

    const energiaKWH = datos.filter((nom: any) => nom.nombre === 'A3_1');

    console.log(energiaKWH[0]?.valor);

    useEffect(() => {
        //A1
        if(productoValor === 'concreto'){
            setProductoVal(272.155);
        } else if(polivirgen && polireciclado) {
            let virgen = (Number(polivirgen[0]?.valor) ? Number(polivirgen[0]?.valor) : 0) * 1.343;
            let poli = (Number(polireciclado[0]?.valor) ? Number(polireciclado[0]?.valor) : 0) * 0.183;
            let politotal = virgen + poli;
            setProductoVal(politotal / 375000);
        } else if(polivirgen && !polireciclado) {
            setProductoVal(1.343);
        } else if(!polivirgen && polireciclado) {
            setProductoVal(0.183);
        } else {
            setProductoVal(0);
        }
        //A1
        //A2
        if(consumogasida){
            console.log(consumogasida[0]?.valor)
            setConsumoGasolinaIda((Number(consumogasida[0]?.valor) ? Number(consumogasida[0]?.valor) : 0) * 0.666666666666667);
        }
        if(consumogasvuelta){
            console.log(consumogasvuelta[0]?.valor)
            setConsumoGasolinaVuelta((Number(consumogasvuelta[0]?.valor) ? Number(consumogasvuelta[0]?.valor) : 0) * 0.5);
        }
        if(consumogasida && consumogasvuelta && frecuencia){
            setConsumoGasolinaMes(consumoGasolinaIda + consumoGasolinaVuelta);
            setConsumoGasolinaAno((consumoGasolinaIda + consumoGasolinaVuelta) * Number(frecuencia[0]?.valor));
        }
        if(consumoGasolinaAno){
            setcotcoM(consumoGasolinaAno * 33.1404490848481 * 0.0000693);
            setchtchM((consumoGasolinaAno * 33.1404490848481 * 0.000025) / 1000);
            setnotnoM((consumoGasolinaAno * 33.1404490848481 * 0.000008) / 1000);
            setcotcoT(consumoGasolinaAno * 33.1404490848481 * 0.0000693);
            setchtchT(chtchM * 28);
            setnotnoT(notnoM * 265);
        }
        //A2
        //A3
        if(energiaKWH){
            setEnergiaMWH((Number(energiaKWH[0]?.valor) ? (Number(energiaKWH[0]?.valor / 1000) * 0.435) : 0))
        }
        //setEnergiaMWH
        //A3
    })
    // RESIDUOS

    const rp = datos.filter((nom: any) => nom.nombre === 'Generación de RP (kg)');
    const rp2 = datos.filter((nom: any) => nom.nombre === 'Cantidad de RP que se reutilizaron (kg)');
    const rme = datos.filter((nom: any) => nom.nombre === 'Generación de RME (kg)');
    const rme2 = datos.filter((nom: any) => nom.nombre === 'Cantidad de RME que se reutilizaron (kg)');
    const rsu = datos.filter((nom: any) => nom.nombre === 'Generación de RSU (kg)');
    const rsu2 = datos.filter((nom: any) => nom.nombre === 'Cantidad de RSU que se reutilizaron (kg)');
    
    // AGUAS
    
    const ca = datos.filter((nom: any) => nom.nombre === 'Consumo total de agua para el año de declarado');

    const A1_0 = datos.filter((nom: any) => nom.nombre === 'primas');

    console.log('A1_0', pt[0].valor)

    return (
        <div className="flex flex-col sm:flex-row w-full justify-space-evenly shadow-[inset_0_5px_10px_rgba(0,0,0,0.6)] p-5 rounded-2xl">
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
                            <th className='bg-customVerdeDos shadow-[inset_0_5px_10px_rgba(0,0,0,0.6)]'>Etapa</th>
                            <th className='bg-customVerdeDos text-sm sm:text-xxs md:text-xs lg:text-sm xl:text-sm shadow-[inset_0_5px_10px_rgba(0,0,0,0.6)] p-3'>tCO<sup>2</sup>e por consumo de combustible</th>
                            <th className='bg-customVerdeDos text-sm sm:text-xxs md:text-xs lg:text-sm xl:text-sm shadow-[inset_0_5px_10px_rgba(0,0,0,0.6)] p-3'>tCO<sup>2</sup>e por consumo de energía</th>
                            <th className='bg-customVerdeDos text-sm sm:text-xxs md:text-xs lg:text-sm xl:text-sm shadow-[inset_0_5px_10px_rgba(0,0,0,0.6)] p-3'>Total de tCO<sup>2</sup>e</th>
                            <th className='bg-customVerdeDos text-sm sm:text-xxs md:text-xs lg:text-sm xl:text-sm shadow-[inset_0_5px_10px_rgba(0,0,0,0.6)] p-3'>KgCO<sup>2</sup>e/unidad declarada</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        <tr>
                            <td className='bg-customVerdeUno text-center'>A1</td>
                            <td className='bg-customVerdeDos'></td>
                            <td className='bg-customVerdeDos'></td>
                            <td className='bg-customVerdeDos'></td>
                            <td><b>{productoVal.toFixed(3)}</b></td>
                        </tr>
                        <tr>
                            <td className='bg-customVerdeUno text-center'>A2</td>
                            <td><b>{(cotcoT + chtchT + notnoT).toFixed(3)}</b></td>
                            <td className='bg-customVerdeDos'><b></b></td>
                            <td><b>{(cotcoT + chtchT + notnoT).toFixed(3)}</b></td>
                            <td><b>{(((cotcoT + chtchT + notnoT)*1000)/375000).toFixed(3)}</b></td>
                        </tr>
                        <tr>
                            <td className='bg-customVerdeUno text-center'>A3</td>
                            <td><b>3.61</b></td>
                            <td><b>{(energiaMWH).toFixed(3)}</b></td>
                            <td><b>{(energiaMWH + 3.61).toFixed(3)}</b></td>
                            <td><b>{(((energiaMWH + 3.61)*1000)/Number(pt[0].valor)).toFixed(5)}</b></td>
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
                {/*
                    <SideBar/>
                */}
            </div>
        </div>
    )
}