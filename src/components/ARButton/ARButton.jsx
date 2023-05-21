import React from 'react';
import { Button } from '@mui/material';
import styled from 'styled-components';

const ArButton = styled(Button)`
    &&{
        background-color: var(--button-back-color);
        color: var(--main-color);
        font-family: 'Times New Roman', Times, serif;
        font-weight: bold;
        &:hover {
        box-shadow: 0px 0px 15px var(--main-color);
        background-color: var(--background-color);
        }
    }
`;
function ARButton(props) {
    return (
        <ArButton
            variant = "contained"
            className = "areeq-button"
            onClick = {props.onClick}
            type="props.type"
        >
            {props.text}
        </ArButton>
    );
}

export default ARButton;
