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
            <div className='flex flex-col items-center justify-center p-3'>
                <Link href='/'>
                    <div>
                        <Image
                            //className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                            src="/logo-imcyc-blanco.svg"
                            alt="Instituto Mexicano del Cemento y del Concreto A.C."
                            width="0"
                            height="0"
                            sizes="100vw"
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </div>
                </Link>
                <p className='font-orbitron text-sm pt-3'>Instituto Mexicano del Cemento y del Concreto A.C.</p>
                <h2 className='font-orbitron text-3xl pt-4'>ANÁLISIS DE CICLO DE VIDA</h2>
            </div>
            {categorias.map((ele: any) => (
                <Link className='w-full' href={ele.link} key={ele.nombre}>
                    <button 
                        className="font-orbitron bg-customVerde hover:bg-green-800 text-gray-100 hover:text-white font-bold py-2 px-4 rounded-full w-full mt-5 py-5 shadow-sm"
                    >
                        <Tag/>
                        {ele.nombre}
                    </button>
                </Link>
            ))}
        </div>

    )
}