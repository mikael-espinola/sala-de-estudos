import React, { useContext } from "react";
import FatherContext from "./FatherContext";
import Daugther from "./Daugther";

export default function Son() {
  const { prop } = useContext(FatherContext);
  return (
    <>
      <h5>{prop} Son</h5>
      <h1>
        <Daugther />
      </h1>
    </>
  );
}
