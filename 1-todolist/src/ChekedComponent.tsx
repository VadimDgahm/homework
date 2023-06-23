import React, { FC, MouseEvent, useState } from "react";
import { TopCarType } from "./App";
import { FilterMoney } from "./FilterMoney";

export type ChekedComponentPropsType = "all" | 'Dollars' | 'RUBLS'
export const ChekedComponent = () => {
  const [money, setMoney] = useState([
    { banknots: "Dollars", value: 100, number: " a1234567890" },
    { banknots: "Dollars", value: 50, number: " z1234567890" },
    { banknots: "RUBLS", value: 100, number: " w1234567890" },
    { banknots: "Dollars", value: 100, number: " e1234567890" },
    { banknots: "Dollars", value: 50, number: " c1234567890" },
    { banknots: "RUBLS", value: 100, number: " r1234567890" },
    { banknots: "Dollars", value: 50, number: " x1234567890" },
    { banknots: "RUBLS", value: 50, number: " v1234567890" },
  ]);
  let [curency, setCurency] = useState<ChekedComponentPropsType>("all");
  let currentMoney = money;
  if (curency === "all") {
    currentMoney = money;
  } else {
    currentMoney = money.filter((objMoney) => objMoney.banknots == curency);
  }
  
  const filterCurency = (nameButton: ChekedComponentPropsType) => {
    setCurency(nameButton)
  };
  return (
    <FilterMoney currentMoney={currentMoney} callback={(name:ChekedComponentPropsType)=>filterCurency(name)}/>
  );
};
