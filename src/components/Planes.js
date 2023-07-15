import React, { useState } from "react";
import lb from "../assets/lb.svg";
import lf from "../assets/lf.svg";
import rb from "../assets/rb.svg";
import rf from "../assets/rf.svg";

export default function Planes() {
  const [plane, setPlane] = useState(true);
  return (
    <div className="relative">
      <div>
        {plane ? (
          <img src={rf} alt="plane" className="w-32" />
        ) : (
          <img
            src={rb}
            alt="plane"
            className="w-32 cursor-pointer"
            onClick={() => setPlane(!plane)}
          />
        )}
      </div>
      <div className="absolute top-16 left-[25px]">
        {plane ? (
          <img
            src={lb}
            alt="plane"
            className="w-32 cursor-pointer"
            onClick={() => setPlane(!plane)}
          />
        ) : (
          <img src={lf} alt="plane" className="w-32" />
        )}
      </div>
    </div>
  );
}
