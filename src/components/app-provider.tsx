import React, { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { RouteWatcher } from './route-watcher'

export const AppProvider: FC = ({ children }) => {
  return (
    <BrowserRouter>
      <RouteWatcher />
      {children}
    </BrowserRouter>
  )
}
