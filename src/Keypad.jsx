import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Buttons from './keypad.json'

const NumPad = styled.div`
    text-align: center;
    width: ${props => props.spave === 2 ? '170px' : '80px'};
    height:80px;
    font-size: 26px;
    min-width: ${props => props.space === 2 ? '170px' : '80px'};
    border-radius: 16px;
    margin: 0 5px 12px;
    color: #fff;
    border-color: ${props => props.background ? '#333333' : '#FA9033'};
    background: ${props => props.background ? '#333333' : '#FA9033'};
    line-height: 80px;
    cursor: pointer;

    &:hover {
        background: ${props => props.background ? '#4a4a4a' : '#eb8f3f'};
        border-color: ${props => props.background ? '#4a4a4a' : '#eb8f3f'};
    }
`

const Keypad = ({ item }) => {
    const createKeypad = (key, type) => {
        Buttons.map((item) => {
            if (key === item.key) {
                item.type = type 
            }
            return item
        })
    }
    
    if (item.type === 'icons') {
        return (
            <NumPad type="primary" shape="circle" space={item.space} background={item.type === "character"}createKeypad={createKeypad}>
                <FontAwesomeIcon icon={item.key} createKeypad={createKeypad}/>
            </NumPad>
        )
    } else {
        return (
            <NumPad type="primary" shape="circle" space={item.space} background={item.type === "character"} createKeypad={createKeypad}>{item.key}</NumPad>
        )
    }
}

Keypad.propTypes = {
    item: PropTypes.shape({
        key: PropTypes.string,
        type: PropTypes.string,
        space: PropTypes.string
    })
}

export default Keypad;