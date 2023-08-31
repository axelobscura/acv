import { ArrowRightCircleIcon } from '@heroicons/react/24/solid'

export default function Resultados() {
    return (
        <div className="flex flex-col sm:flex-row w-full justify-space-evenly">
            <div className="pt-0 w-full">
                <h1 className="font-orbitron text-4xl flex"><ArrowRightCircleIcon className="h-10 w-10 text-gray-300" /> Resultados</h1>
                <hr className='mb-3 mt-2' />
                <h3 className='font-orbitron text-2xl text-white text-bold pt-3 pb-3'>Generación de Dióxido de Carbono equivalente</h3>
                <table className="font-orbitron table-fixed border-separate border-spacing-2 border border-white w-full">
                    <thead>
                        <tr>
                            <th className='bg-customVerdeDos'>Etapa</th>
                            <th className='bg-customVerdeDos'>tCO2e por consumo de combustible</th>
                            <th className='bg-customVerdeDos'>tCO2e por consumo de energía</th>
                            <th className='bg-customVerdeDos'>Total de tCO2e</th>
                            <th className='bg-customVerdeDos'>KgCO2e/unidad declarada</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>20000</td>
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