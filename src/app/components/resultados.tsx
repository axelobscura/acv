import { ArrowRightCircleIcon } from '@heroicons/react/24/solid'

export default function Resultados({datos}: {datos: any}) {

    //console.log('DATOS: ' + JSON.stringify(datos))

    return (
        <div className="flex flex-col sm:flex-row w-full justify-space-evenly">
            <div className="pt-0 w-full">
                <h1 className="font-orbitron text-4xl flex"><ArrowRightCircleIcon className="h-10 w-10 text-gray-300" /> Resultados</h1>
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
                <h3 className='font-orbitron text-2xl text-white text-bold pt-3 pb-1'>Generación de Dióxido de Carbono equivalente</h3>
                <table className="font-orbitron table-fixed border-separate border-spacing-2 border border-white w-full">
                    <thead>
                        <tr>
                            <th className='bg-customVerdeDos'>Etapa</th>
                            <th className='bg-customVerdeDos'>tCO<sup>2</sup>e por consumo de combustible</th>
                            <th className='bg-customVerdeDos'>tCO<sup>2</sup>e por consumo de energía</th>
                            <th className='bg-customVerdeDos'>Total de tCO2e</th>
                            <th className='bg-customVerdeDos'>KgCO2e/unidad declarada</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        <tr>
                            <td className='bg-customVerdeUno text-center'>A1</td>
                            <td>20000</td>
                            <td>20000</td>
                            <td>20000</td>
                            <td>20000</td>
                        </tr>
                        <tr>
                            <td className='bg-customVerdeUno text-center'>A2</td>
                            <td>20000</td>
                            <td>20000</td>
                            <td>20000</td>
                            <td>20000</td>
                        </tr>
                        <tr>
                            <td className='bg-customVerdeUno text-center'>A3</td>
                            <td>20000</td>
                            <td>20000</td>
                            <td>20000</td>
                            <td>20000</td>
                        </tr>
                    </tbody>
                </table>
                <hr className='mb-3 mt-2' />
                <h3 className='font-orbitron text-2xl text-white text-bold pt-3 pb-3'>Consumo de Agua</h3>
                <table className="font-orbitron table-fixed border-separate border-spacing-2 border border-white w-full">
                    <thead>
                        <tr>
                            <th className='bg-customVerdeDos'>Consumo de Agua por Unidad Declarada</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>20000</td>
                        </tr>
                    </tbody>
                </table>
                <hr className='mb-3 mt-2' />
                <h3 className='font-orbitron text-2xl text-white text-bold pt-3 pb-3'>Índice de Circularidad</h3>
                <table className="font-orbitron table-fixed border-separate border-spacing-2 border border-white w-full">
                    <thead>
                        <tr>
                            <th className='bg-customVerdeDos'>Índice de Circularidad RP (%)</th>
                            <th className='bg-customVerdeDos'>Índice de Circularidad RME (%)</th>
                            <th className='bg-customVerdeDos'>Índice de Circularidad RSU (%)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>20000</td>
                            <td>20000</td>
                            <td>20000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}