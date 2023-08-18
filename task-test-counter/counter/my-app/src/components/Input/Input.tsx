import React, {ChangeEvent} from 'react';
import styled from 'styled-components';

type InputPropsType = {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    value: string
    type?: string
    name?: string
    error?: boolean
}

export const Input: React.FC<InputPropsType> = ({onChange, value = '', type, ...props}) => {

    return (
        <div>
            <InputStyled background={props.error} onChange={onChange} value={value} type={type}/> {props.name}
        </div>
        )
}

//////////////////////////////////////////////////
type InputStyledPropsType = {
    background?: boolean
}
const InputStyled = styled.input<InputStyledPropsType>`
    background: ${props => props.background ? 'red': 'green'}
`