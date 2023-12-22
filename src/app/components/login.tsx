'use client';
import Image from 'next/image'
import Link from 'next/link'

interface LoginProps {
    checkUser: (e: React.FormEvent<HTMLFormElement>) => void;
  }

export default function Login({ checkUser }: LoginProps) {
    return(
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
                <p className='font-orbitron text-xs pt-3 mt-3'>Instituto Mexicano del Cemento y del Concreto A.C.</p>
                <h2 className='font-orbitron text-3xl pt-5 pb-0 mb-0 font-bold'>ANÁLISIS DE CICLO DE VIDA</h2>
            </div>
            <form onSubmit={(e) => checkUser(e)}>
                <div className="mb-2">
                    <label className="font-orbitron block mb-2 text-sm font-medium text-gray-100 dark:text-gray-100 text-left">Usuario:</label>
                    <input type="email" name="email" className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500" placeholder="Ingrese su nombre de usuario" />
                </div>
                <div className="mb-2">
                    <label className="font-orbitron block mb-2 text-sm font-medium text-gray-100 dark:text-gray-100 text-left">Contraseña:</label>
                    <input type="password" name="password" className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500" placeholder="Ingrese su contraseña" />
                </div>
                <button type="submit" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 mt-5">INGRESAR A SU CUENTA</button>
            </form>
        </div>
    )
}