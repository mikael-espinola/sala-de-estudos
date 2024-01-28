import { React, useState } from "react";
import FatherContext from "./FatherContext";
import Son from "./Son";
import Daugther from "./Daugther";

export default function Father() {
  const [prop, setProp] = useState("Father's");
  return (
    <div>
      <h4>Father</h4>
      <FatherContext.Provider value={{ prop }}>
        <Son />
      </FatherContext.Provider>
    </div>
  );
}
