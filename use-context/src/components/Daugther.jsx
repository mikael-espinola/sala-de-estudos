import React, { useContext } from "react";
import FatherContext from "./FatherContext";

export default function Daugther() {
  const { prop } = useContext(FatherContext);
  return <div>{prop} Daugther</div>;
}
