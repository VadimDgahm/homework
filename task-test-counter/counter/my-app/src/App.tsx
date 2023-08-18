import React, { ChangeEvent, useEffect, useState } from "react";
import "./App.css";
import { SettingsCounter } from "./components/SettingsCounter/SettingsCounter";
import { WindowCounter } from "./components/WindowCounter/WindowCounter";

type StateType = {
  value: string;
  maxValue: string;
  maxValueInput: string;
  startValueInput: string;
  errorInputMaxValue: boolean;
  errorInputStartValue: boolean;
  disabledBtnRESET: boolean;
  disabledBtnSET: boolean;
  pageCounter: boolean;
};
function App() {
  useEffect(() => {
    let stateString = localStorage.getItem("stateCounter");
    stateString && setState(JSON.parse(stateString));
  }, []);

  const [state, setState] = useState<StateType>({
    value: "0",
    maxValue: "0",
    maxValueInput: "0",
    startValueInput: "0",
    errorInputMaxValue: false,
    errorInputStartValue: false,
    disabledBtnRESET: true,
    disabledBtnSET: true,
    pageCounter: false,
  });

  useEffect(() => localStorage.setItem("stateCounter", JSON.stringify(state)) , [state]);

  const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
      Number(e.currentTarget.value) < 0 ||
      e.currentTarget.value <= state.startValueInput ||
      Number(state.startValueInput) < 0
    ? setState({
        ...state,
        errorInputMaxValue: true,
        errorInputStartValue: true,
        value: "Incore",
        disabledBtnRESET: true,
        disabledBtnSET: true,
        maxValueInput: e.currentTarget.value,
      })
    : setState({
        ...state,
        errorInputMaxValue: false,
        value: "Enter",
        disabledBtnRESET: true,
        errorInputStartValue: false,
        disabledBtnSET: false,
        maxValueInput: e.currentTarget.value,
      });
  };
  const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
      Number(e.currentTarget.value) < 0 ||
      state.maxValueInput <= e.currentTarget.value ||
      Number(state.maxValueInput) < 0 
      ? setState({
        ...state,
        startValueInput: e.currentTarget.value,
        errorInputStartValue: true,
        value: "Incore",
        disabledBtnRESET: true,
        disabledBtnSET: true,
      })
      : setState({
        ...state,
        errorInputMaxValue: false,
        startValueInput: e.currentTarget.value,
        errorInputStartValue: false,
        value: "Enter",
        disabledBtnRESET: true,
        disabledBtnSET: false,
      });
  };

  const onClickBtnSET = () => setState({
      ...state,
      pageCounter: false,
      value: state.startValueInput,
      maxValue: state.maxValueInput,
      disabledBtnSET: true,
      disabledBtnRESET: false,
  });
  const onClickAddHandkler = () => state.value < state.maxValue && setState({ ...state, value: String(Number(state.value) + 1) });
  const onClickResetHandkler = () => setState({ ...state, value: state.startValueInput });
  const onClickPageCounter = () => setState({ ...state, pageCounter: true });

  return (
    <div className="App">
      <header className="App-header">
        {state.pageCounter ? (
          <SettingsCounter
            onChangeMaxValue={onChangeMaxValue}
            onChangeStartValue={onChangeStartValue}
            maxValueInput={state.maxValueInput}
            startValueInput={state.startValueInput}
            disabledBtnSET={state.disabledBtnSET}
            onClickBtnSET={onClickBtnSET}
            errorInputMaxValue={state.errorInputMaxValue}
            errorInputStartValue={state.errorInputStartValue}
          />
        ) : (
          <WindowCounter
            maxValue={state.maxValue}
            value={state.value}
            onClickAddHandkler={onClickAddHandkler}
            disabledBtnRESET={state.disabledBtnRESET}
            onClickResetHandkler={onClickResetHandkler}
            onClickPageCounter={onClickPageCounter}
          />
        )}
      </header>
    </div>
  );
}

export default App;
