import { attach } from 'effector'
import { createGate } from 'effector-react'
import { appDomain } from '../domain'
import { RouteWatcherGateState } from './types'

export const RouteWatcherGate = createGate<RouteWatcherGateState>({
  domain: appDomain,
})

export const navigate$ = RouteWatcherGate.state.map(({ navigate }) => navigate)
export const pathname$ = RouteWatcherGate.state.map(({ pathname }) => pathname)

export const navigateToFx = attach({
  source: navigate$,
  mapParams: (pathname: string, navigate) => ({
    pathname,
    navigate,
  }),
  effect: appDomain.createEffect<RouteWatcherGateState, void>(
    ({ pathname, navigate }) => navigate(pathname),
  ),
})
