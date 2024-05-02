import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../lib/hooks";
import React, { ReactElement, ReactNode, useEffect } from "react";

export default function PrivateRoute({ children }: { children: ReactNode }): ReactElement {
  const navigate = useNavigate();
  const { isAuthenticated } = useAppSelector((state) => state.authentication);
  useEffect(() => {
    if (isAuthenticated === false) {
      navigate("/login");
    } 
  }, [])
    return <React.Fragment>{children}</React.Fragment>;
}


