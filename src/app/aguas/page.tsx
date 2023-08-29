import { ChevronRightIcon, ArrowRightCircleIcon, ArrowSmallRightIcon, ArrowSmallLeftIcon } from '@heroicons/react/24/solid'
import Menu from "../components/menu"

export default function Aguas() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-10" style={{
        'backgroundImage': 'linear-gradient(to bottom, rgba(95, 133, 22, 0.80), rgba(29, 40, 6, 0.90)), url("/bkg1.jpg")',
        'backgroundSize': 'cover', /* makes the bg image responsive */
        'backgroundRepeat': 'no-repeat',
        'backgroundPosition': 'center',
        'backgroundColor': '#222222',
      }}>
        <div className="flex flex-col sm:flex-row w-full items-center justify-space-evenly">
                <div className="basis-1/4">
                    <Menu />
                </div>
                <div className="pl-10 pr-10 p-10 rounded-2xl w-full">
                    <h1 className="flex font-orbitron text-4xl pb-2"><ArrowRightCircleIcon className="h-10 w-10 text-gray-300" /> Consumo de Agua</h1>
                    <hr className='mb-3'/>
                    <p className='flex font-orbitron text-gray-100 mt-3 mb-2'><ChevronRightIcon className="h-6 w-6 text-gray-300" />Consumo total de agua para el año de declarado:</p>
                    <input type="number" placeholder='Consumo total de agua para el año de declarado' className="font-orbitron border border-gray-300 rounded-md px-4 py-2 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"></input>
                </div>
            </div>
      </main>
    )
  }