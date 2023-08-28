import { Metadata } from 'next';
import Menu from './components/menu';

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
        <div className="basis-1/2 flex flex-col items-center justify-center">
          <Menu />
        </div>
        <div className="basis-1/6"></div>
      </div>

    </main>
  )
}
