"use client"
import { useSearchParams } from 'next/navigation'
import Menu from "../components/menu"
import Emisiones from '../components/emisiones'
import Residuos from '../components/residuos'
import Aguas from '../components/aguas'
import Resultados from '../components/resultados'

export default function Calculadora() {
    const searchParams = useSearchParams();
    const categoria = searchParams.get('categoria');

    


    return (
      <main className="flex min-h-screen flex-col p-5" style={{
        'backgroundImage': 'linear-gradient(to bottom, rgba(95, 133, 22, 0.80), rgba(29, 40, 6, 0.90)), url("/bkg1.jpg")',
        'backgroundSize': 'cover', /* makes the bg image responsive */
        'backgroundRepeat': 'no-repeat',
        'backgroundPosition': 'center',
        'backgroundColor': '#222222',
      }}>
        <div className="flex flex-col sm:flex-row w-full justify-space-evenly">
          <div className="basis-1/4">
            <Menu />
          </div>
          <div className="pl-10 pr-10 pt-5 w-full">
            {categoria == "emisiones" && <Emisiones/>}
            {categoria == "residuos" && <Residuos/>}
            {categoria == "aguas" && <Aguas/>}
            {categoria == "resultados" && <Resultados/>}
          </div>
        </div>
      </main>
    )
  }