import React, {ChangeEvent} from 'react';
import styled from 'styled-components';
import { Button } from '../Buttom/Button';

type WindowCounterPropsType = {
    maxValue: string
    value: string
    onClickAddHandkler: () => void
    disabledBtnRESET: boolean
    onClickResetHandkler: () => void
    onClickPageCounter: () => void
}

export const WindowCounter: React.FC<WindowCounterPropsType> = (props) => {

    return (
        <div>
            <Value color={props.value === props.maxValue && props.value !== '0' || props.value === 'Incore' ? "red" : "black"}>{props.value}</Value>
        <div>
          <Button
            name={'inc'}
            disabled={props.value >= props.maxValue ? true : false}
            onClick={props.onClickAddHandkler}
          />
          <Button name={'reset'} disabled={props.disabledBtnRESET} onClick={props.onClickResetHandkler}/>
          <Button name={'set'} onClick={props.onClickPageCounter}/>
        </div>
        </div>
    )
}

const Value = styled.div`
  color: ${props => props.color}
`