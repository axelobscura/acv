import Image from 'next/image';
import Link from 'next/link';
import Tag from './tag';

export default function Menu() {
    const categorias = [
        {
          nombre: 'Emisiones de Gases de Efecto Invernadero',
          link: 'emisiones'
        },
        {
          nombre: 'Generación de Residuos',
          link: 'residuos'
        },
        {
          nombre: 'Consumo de Agua',
          link: 'aguas'
        },
        {
          nombre: 'Resultados',
          link: 'resultados'
        }
    ];
    return (
        <div className='p-3 text-center'>
            <div className='flex items-center justify-center p-5'>
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
            </div>
            <p className='p-3 text-sm p-0 pb-3 pt-0'><small>Instituto Mexicano del Cemento y del Concreto A.C.</small></p>
            {categorias.map((ele: any) => (
                <Link className='w-full' href={ele.link} key={ele.nombre}>
                    <button 
                        className="font-orbitron bg-customVerde hover:bg-green-800 text-gray-100 hover:text-white font-bold py-2 px-4 rounded-full w-full mt-5 py-5"
                    >
                        <Tag/>
                        {ele.nombre}
                    </button>
                </Link>
            ))}
        </div>

    )
}