import React, { FC } from 'react'
import { Outlet, NavLink } from 'react-router-dom'

export const Dashboard: FC = () => (
  <div>
    <h1>Dashboard</h1>
    <nav>
      <NavLink to='/dashboard' end activeClassName='text-red-500'>
        Home
      </NavLink>
      <NavLink to='me' activeClassName='text-red-500'>
        Me
      </NavLink>
    </nav>
    <Outlet />
  </div>
)
