"use client"
import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Menu from "../components/menu"
import Emisiones from '../components/emisiones'
import Residuos from '../components/residuos'
import Aguas from '../components/aguas'
import Resultados from '../components/resultados'
import { useState } from 'react'
import React from 'react'

export default function Calculadora() {
    const searchParams = useSearchParams()
    const categoria = searchParams.get('categoria')

    const [etapa, setEtapa] = useState('Etapa A1')
    const [losdatos, setLosdatos] : [losdatos: any, setLosdatos: any] = useState([])
    const [datos, setDatos] = useState([])

    const setLaEtapa = (etapa: string) => {
        setEtapa(etapa)
    }

    const agregarDatos = (dato: any | undefined) => {
      setLosdatos([...losdatos, dato])
    }

    useEffect(() => {
      const key = 'nombre';
      const arrayUniqueByKey : any = [...new Map(losdatos.map((item: any) => [item[key], item])).values()];
      setDatos(arrayUniqueByKey)
    }, [losdatos])

    console.log('datos: ', datos);

    return (
      <main className="flex min-h-screen flex-col p-5" style={{
        'backgroundImage': 'linear-gradient(to bottom, rgba(95, 133, 22, 0.90), rgba(29, 40, 6, 0.95)), url("/bkg1.jpg")',
        'backgroundSize': 'cover', /* makes the bg image responsive */
        'backgroundRepeat': 'no-repeat',
        'backgroundPosition': 'center',
        'backgroundColor': '#222222',
        'alignItems': 'center',
        'justifyContent': 'center',
      }}>
        <div className="flex flex-col sm:flex-row w-full h-full justify-center">
          <div className="basis-1/4">
            <div className='mt-5 pb-5 bg-customVerdeDos rounded-2xl w-full shadow-[inset_0_5px_10px_rgba(0,0,0,0.6)]'>
              <Menu setLaEtapa={(etapa: any) => setLaEtapa(etapa)}/>
            </div>
          </div>
          <div className="sm:pl-0 sm:pr-0 md:pl-5 md:pr-5 pt-5 w-full">
            {categoria == "emisiones" && <Emisiones setLaEtapa={(etapa: any) => setLaEtapa(etapa)} etapa={etapa} agregarDatos={(dato: any) => agregarDatos(dato)} losdatos={datos}/>}
            {categoria == "residuos" && <Residuos setLaEtapa={(etapa: any) => setLaEtapa(etapa)} etapa={etapa} agregarDatos={(dato: any) => agregarDatos(dato)} losdatos={datos}/>}
            {categoria == "aguas" && <Aguas agregarDatos={(dato: any) => agregarDatos(dato)} losdatos={datos}/>}
            {categoria == "resultados" && <Resultados datos={datos}/>}
          </div>
        </div>
      </main>
    )
  }