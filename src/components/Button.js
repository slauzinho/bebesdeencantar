import React, { PureComponent } from 'react'
import styled from 'react-emotion'

const ButtonStyle = styled('button')`
    white-space: nowrap;
    display: inline-block;
    height: 40px;
    line-height: 40px;
    padding: 0 14px;
    -webkit-box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);
    box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);
    background: #fff;
    border-radius: 4px;
    font-size: 15px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: .025em;
    color: {props => props.color ? props.color : "black"};
    text-decoration: none;
    -webkit-transition: all .15s ease;
    transition: all .15s ease;
    border: none;

    :focus,
    :hover {
        outline-width: 0;
        color: {props => props.color ? props.color : "black"};
        -webkit-transform: translateY(-1px);
        transform: translateY(-1px);
        -webkit-box-shadow: 0 7px 14px rgba(50,50,93,.1), 0 3px 6px rgba(0,0,0,.08);
        box-shadow: 0 7px 14px rgba(50,50,93,.1), 0 3px 6px rgba(0,0,0,.08);
    }
`

const Button = props => (
    <ButtonStyle>
        {props.children}
    </ButtonStyle>
)

export default Button;