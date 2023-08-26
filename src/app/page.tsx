import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative flex flex-col place-items-center before:absolute ">
        <Image
          //className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/logo-imcyc-blanco.svg"
          alt="Instituto Mexicano del Cemento y del Concreto A.C."
          width={300}
          height={37}
          priority
        />
        <p className='p-5'><small>Instituto Mexicano del Cemento y del Concreto A.C.</small></p>
      </div>
    </main>
  )
}
