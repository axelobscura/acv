import Image from 'next/image'

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
          <p className='p-3'><small>Instituto Mexicano del Cemento y del Concreto A.C.</small></p>
        </div>
        <div className="basis-1/6"></div>
      </div>

    </main>
  )
}
