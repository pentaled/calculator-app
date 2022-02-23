import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ResultScreen from './ResultScreen'

const NumPad = styled.div`
    text-align: center;
    width: ${props => props.space === 2 ? '170px' : '80px'};
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
// Goal: when push on button shows on the actual screen
const Keypad = ({ item }) => { // I tried to push the keys and attributes to the useState array so that it can do the calculations in the array but does not work.
    const [result, setResult] = useState([])
    const buttonsApply = () => {
        if (item.type === 'icons') {
          result.push(item.attributes)
        } else {
          result.push(item.key)
        }
    }
    if (item.type === 'icons') {
        return ( 
            <NumPad type="primary" onClick={buttonsApply} shape="circle" space={item.space} background={item.type === "character"}>
                <FontAwesomeIcon icon={item.key}/>
            </NumPad>
        )
    } else {
        return (
            <NumPad name={item.key} onClick={buttonsApply} type="primary" shape="circle" space={item.space} background={item.type === "character"}>{item.key}</NumPad>
        )
    } //In the bottom I tried to transfer the data from Keypads.jsx --> ResultScreen.jsx like List.jsx --> Listitem.jsx in the last project but it does not seem to work.
    {result.length > 0? (
        result.map((item) => {
            return <ResultScreen key={item.id} item={item} buttonsApply={buttonsApply}/>
        })
    ) : (
        <ResultScreen result="Error"/>
    )} 
}

Keypad.propTypes = {
    item: PropTypes.shape({
        key: PropTypes.string.isRequired,
        type: PropTypes.string,
        space: PropTypes.string,
        attributes: PropTypes.string
    })
}
  
export default Keypad;