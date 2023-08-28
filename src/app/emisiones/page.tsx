"use client"
import { useState, useEffect } from 'react'
import Menu from "../components/menu"

export default function Emisiones() {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        fetch('/api/hello')
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoading(false)
            })
    }, [])

    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>

    console.log(data);

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-10">
            <div className="flex flex-row w-full justify-space-evenly">
                <div className="basis-1/4">
                    <Menu />
                </div>
                <div className="basis-1/2 pl-10 pr-10">
                    <h1 className="font-orbitron text-4xl">Emisiones de Gases de Efecto Invernadero</h1>
                    <hr/>
                    <p>{data.message}</p>
                </div>
            </div>
        </main>
    )
}