"use client"
import { useSearchParams } from 'next/navigation'
import Menu from "../components/menu"
import Emisiones from '../components/emisiones'
import Residuos from '../components/residuos'
import Aguas from '../components/aguas'
import Resultados from '../components/resultados'
import { useState } from 'react'

export default function Calculadora() {
    const searchParams = useSearchParams()
    const categoria = searchParams.get('categoria')

    const [etapa, setEtapa] = useState('')
    const [losdatos, setLosdatos] : [losdatos: any, setLosdatos: any] = useState([])

    const setLaEtapa = (etapa: string) => {
        setEtapa(etapa)
    }

    const agregarDatos = (dato: any | undefined) => {
        setLosdatos([...losdatos, dato])
    }

    console.log('LOS DATOS:', losdatos)

    return (
      <main className="flex min-h-screen align-center flex-col p-5" style={{
        'backgroundImage': 'linear-gradient(to bottom, rgba(95, 133, 22, 0.80), rgba(29, 40, 6, 0.90)), url("/bkg1.jpg")',
        'backgroundSize': 'cover', /* makes the bg image responsive */
        'backgroundRepeat': 'no-repeat',
        'backgroundPosition': 'center',
        'backgroundColor': '#222222',
        'alignItems': 'center',
        'justifyContent': 'center',
      }}>
        <div className="flex flex-col sm:flex-row w-full h-full align-center justify-center">
          <div className="basis-1/4">
            <Menu setLaEtapa={(etapa: any) => setLaEtapa(etapa)} />
          </div>
          <div className="sm:pl-0 sm:pr-0 md:pl-10 md:pr-10  pt-5 w-full">
            {categoria == "emisiones" && <Emisiones setLaEtapa={(etapa: any) => setLaEtapa(etapa)} etapa={etapa} agregarDatos={(dato: any) => agregarDatos(dato)}/>}
            {categoria == "residuos" && <Residuos setLaEtapa={(etapa: any) => setLaEtapa(etapa)} etapa={etapa}/>}
            {categoria == "aguas" && <Aguas/>}
            {categoria == "resultados" && <Resultados/>}
          </div>
        </div>
      </main>
    )
  }