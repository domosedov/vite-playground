import { NavigateFunction } from "react-router";

export type RouteWatcherGateState = {
  pathname: string;
  navigate: NavigateFunction;
};
