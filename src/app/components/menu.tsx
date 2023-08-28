import Image from 'next/image';
import Link from 'next/link';

export default function Menu() {
    return (
        <>
            <Link href='/'>
                <Image
                    //className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                    src="/logo-imcyc-blanco.svg"
                    alt="Instituto Mexicano del Cemento y del Concreto A.C."
                    width={300}
                    height={37}
                    priority
                />
            </Link>
            <p className='p-3 text-sm'><small>Instituto Mexicano del Cemento y del Concreto A.C.</small></p>
            <Link className='w-full' href='emisiones'>
                <button 
                    className="font-orbitron bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-full w-full mt-5 py-5"
                >
                    Emisiones de Gases de Efecto Invernadero
                </button>
            </Link>
            <Link className='w-full' href='residuos'>
                <button 
                    className="font-orbitron bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-full w-full mt-5 py-5"
                >
                    Generación de Residuos
                </button>
            </Link>
            <Link className='w-full' href='aguas'>
                <button 
                    className="font-orbitron bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-full w-full mt-5 py-5"
                >
                    Consumo de Agua
                </button>
            </Link>
            <Link className='w-full' href='resultados'>
                <button 
                    className="font-orbitron bg-green-800 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full w-full mt-5 py-5"
                >
                    Resultados
                </button>
            </Link>
        </>

    )
}