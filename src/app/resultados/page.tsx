import Menu from "../components/menu"
import { ArrowRightCircleIcon } from '@heroicons/react/24/solid'

export default function Resultados() {
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
          <div className="pl-10 pr-10 w-full">
            <h1 className="font-orbitron text-4xl flex"><ArrowRightCircleIcon className="h-10 w-10 text-gray-300" /> Resultados</h1>
            <hr className='mb-3 mt-2'/>
          </div>
        </div>
      </main>
    )
  }