import { ChevronRightIcon, ArrowRightCircleIcon, ArrowSmallRightIcon, ArrowSmallLeftIcon } from '@heroicons/react/24/solid'

export default function Aguas({ agregarDatos, losdatos } : { agregarDatos: any, losdatos: any }) {

    const sacarDato = (e: any) => {
        let valor = e.target.value;
        let nombre = e.target.name;
        agregarDatos({nombre, valor})
    }

    const object_R1_1 = losdatos.find((obj: any) => obj.nombre === 'Consumo total de agua para el año de declarado');

    return (
        <div className="flex flex-col sm:flex-row w-full justify-space-evenly">
            <div className="p-0 rounded-2xl w-full bg-customVerdeDos p-5 shadow-[inset_0_5px_10px_rgba(0,0,0,0.6)]">
                <h1 className="flex font-orbitron text-4xl pb-2"><ArrowRightCircleIcon className="h-10 w-10 text-gray-300" /> Consumo de Agua</h1>
                <hr className='mb-3'/>
                <p className='flex font-orbitron text-gray-100 mt-3 mb-2'><ChevronRightIcon className="h-6 w-6 text-gray-300" />Consumo total de agua (I) para el año de declarado:</p>
                <input type="number" onBlur={sacarDato} name='Consumo total de agua para el año de declarado' placeholder={object_R1_1 ? object_R1_1.valor : 'Consumo total de agua para el año de declarado'} className="font-orbitron border border-gray-300 rounded-md px-4 py-2 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"></input>
            </div>
        </div>
    )
  }