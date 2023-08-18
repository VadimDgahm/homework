import React from 'react';
import styled from 'styled-components';

type ButtonPropsType = {
    onClick: () => void
    disabled?: boolean
    name: string

}

export const Button: React.FC<ButtonPropsType> = ({onClick, disabled = false, name}) => {
    return (
        <ButtonStyled disabled={disabled} onClick={onClick}>{name}</ButtonStyled>
    )
}

const ButtonStyled = styled.button`
padding: 0 15px;
margin: 0 15px 15px 0;
outline: none;
border: 1px solid #fff;
border-radius: 10px;
height: 46px;
line-height: 46px;
font-size: 14px;
font-weight: 600;
text-decoration: none;
color: #444;
box-shadow: 0 4px 6px rgb(65 132 144 / 10%), 0 1px 3px rgb(0 0 0 / 8%);
cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
user-select: none;
appearance: none;
touch-action: manipulation;  
vertical-align: top;
transition: box-shadow 0.2s;
background-color: ${props => props.disabled ? '#a1a1a1' : '#fff'};
`