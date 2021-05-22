import React, { FC, MouseEvent, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { navigateToFx } from '../models/router'
import { Routes } from './routes'

export const App: FC = () => {
  const handleTestNav = async (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault()
    await navigateToFx('/todos')
  }

  return (
    <div>
      <h1>My App</h1>
      <nav className='flex items-center space-x-2'>
        <button onClick={handleTestNav}>Test Nav</button>
        <NavLink
          to='/'
          end
          className='bg-indigo-400'
          activeClassName='bg-red-500'
        >
          Home
        </NavLink>
        <NavLink
          to='/todos'
          className='bg-indigo-400'
          activeClassName='bg-red-500'
        >
          Todos
        </NavLink>
        <NavLink
          to='/dashboard'
          className='bg-indigo-400'
          activeClassName='bg-red-500'
        >
          Dashboard
        </NavLink>
        <NavLink
          to='/form'
          className='bg-indigo-400'
          activeClassName='bg-red-500'
        >
          Form
        </NavLink>
      </nav>
      <Routes />
    </div>
  )
}
