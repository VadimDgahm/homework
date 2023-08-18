import React, {ChangeEvent} from 'react';
import styled from 'styled-components';
import { Input } from '../Input/Input';
import { Button } from '../Buttom/Button';

type SettingsCounterPropsType = {
    onChangeMaxValue: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeStartValue: (e: ChangeEvent<HTMLInputElement>) => void
    maxValueInput: string
    startValueInput: string
    disabledBtnSET: boolean
    onClickBtnSET: () => void
    errorInputMaxValue: boolean
    errorInputStartValue: boolean
}


export const SettingsCounter: React.FC<SettingsCounterPropsType> = (props) => {

    return (
        <div> 
          <Input error={props.errorInputMaxValue} onChange={props.onChangeMaxValue} value={props.maxValueInput} type='number' name="max value"/>
          <Input error={props.errorInputStartValue} onChange={props.onChangeStartValue} value={props.startValueInput} type='number' name="start value"/>
          <Button name={'set'} disabled={props.disabledBtnSET} onClick={props.onClickBtnSET}/>
        </div>
        )
}