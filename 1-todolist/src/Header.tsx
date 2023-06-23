import React from "react";

type HeaderPropsType = {
    title: string
}
const Header = (props: HeaderPropsType): JSX.Element => {
return (
    <h3>
        {props.title}
    </h3>
)
}

export default Header