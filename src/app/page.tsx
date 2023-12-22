"use client"
import React from 'react';
import Menu from './components/menu';
import Login from './components/login';
import { useState, useEffect } from 'react'
import { InformationCircleIcon } from '@heroicons/react/24/solid'

export default function Home() {
  const [logged, setLogged] = useState(false);

  const checkUser = (e:any) => {
    e.preventDefault();
    console.log('checkUser');
    setLogged(true);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-sm-24" style={{
      'backgroundImage': 'linear-gradient(to bottom, rgba(95, 133, 22, 0.80), rgba(29, 40, 6, 0.90)), url("/bkg1.jpg")',
      'backgroundSize': 'cover', /* makes the bg image responsive */
      'backgroundRepeat': 'no-repeat',
      'backgroundPosition': 'center',
      'backgroundColor': '#222222',
    }}>
      <Login checkUser={(e:any) => checkUser(e)}/>
      {logged &&
        <div className="grid grid-cols-1">
          <div>
            <Menu/>
          </div>
        </div>
      }
    </main>
  )
}
