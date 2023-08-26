import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Análisis de Ciclo de Vida | Instituto Mexicano del Cemento y del Concreto A.C.',
  description:
    'Análisis de Ciclo de Vida, Instituto Mexicano del Cemento y del Concreto A.C.',
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="flex flex-row w-full justify-center">
        <div className="basis-1/6"></div>
        <div className="basis-1/3 flex flex-col items-center justify-center">
          <Image
            //className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/logo-imcyc-blanco.svg"
            alt="Instituto Mexicano del Cemento y del Concreto A.C."
            width={300}
            height={37}
            priority
          />
          <p className='p-3 text-sm'><small>Instituto Mexicano del Cemento y del Concreto A.C.</small></p>
          <button className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-full w-full mt-5 py-5">
            Emisiones de Gases de Efecto Invernadero
          </button>
          <button className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-full w-full mt-5 py-5">
            Generación de Residuos
          </button>
          <button className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-full w-full mt-5 py-5">
            Consumo de Agua
          </button>
          <button className="bg-green-800 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full w-full mt-5 py-5">
            Resultados
          </button>
        </div>
        <div className="basis-1/6"></div>
      </div>

    </main>
  )
}
