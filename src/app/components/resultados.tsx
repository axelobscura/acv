import { ArrowRightCircleIcon } from '@heroicons/react/24/solid'

export default function Resultados() {
    return (
        <div className="flex flex-col sm:flex-row w-full justify-space-evenly">
            <div className="pt-0 w-full">
                <h1 className="font-orbitron text-4xl flex"><ArrowRightCircleIcon className="h-10 w-10 text-gray-300" /> Resultados</h1>
                <hr className='mb-3 mt-2' />
            </div>
        </div>
    )
}