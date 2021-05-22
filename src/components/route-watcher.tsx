import { FC } from "react";
import { useGate } from "effector-react";
import { useLocation, useNavigate } from "react-router";
import { RouteWatcherGate } from "@src/models/router";

export const RouteWatcher: FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  useGate(RouteWatcherGate, { navigate, pathname });
  return null;
};
