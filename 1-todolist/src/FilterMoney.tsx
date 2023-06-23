import React, { FC } from "react";
import { ChekedComponentPropsType } from "./ChekedComponent";
type ArrayMoneyTypeObj = { banknots: string, value: number, number: string }

type FilterMoneyPropsType = {
  callback: (name: ChekedComponentPropsType) => void,
  currentMoney: Array<ArrayMoneyTypeObj>
};
export const FilterMoney: FC<FilterMoneyPropsType> = (props) => {
   
  const buttonHandler = (name: ChekedComponentPropsType) => {
    props.callback(name);
  };
  return (
    <>
      <ul>
        {props.currentMoney.map((objFromMoney, index) => {
          return (
            <li key={index}>
              <span>{objFromMoney.banknots}</span>
              <span>{objFromMoney.value}</span>
              <span>{objFromMoney.number}</span>
            </li>
          );
        })}
      </ul>
      <button onClick={() => buttonHandler("all")}>All</button>
      <button onClick={() => buttonHandler("RUBLS")}>filter Dollars</button>
      <button onClick={() => buttonHandler("Dollars")}>filter RUBLS</button>
    </>
  );
};
