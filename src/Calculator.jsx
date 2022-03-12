import React, { useState } from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Keypads from './Keypads'

const FrameCalculator = styled.div`
    position: relative;
    justify-content: center;
    align-items: center;
    width: 347px;
    height: 547px;
    padding: 14px;
    margin: 20px auto 0;
    border: 1px solid #000;
    border-radius: 15px;
    border-width: 2px;
    border-color: #dedcdc;
    hidden: scroll;
`
const FrameContent = styled.div`
    display: flex;
    flex-flow: wrap;
    position: relative;
    justify-content: left;
    align-items: left;
    border: 1px solid transparent;
    border-radius: 15px;
    border-width: 2px;
    width: 370px;
    height: 434px;
    padding: 14px;
    margin: -22px;
    margin-top: -2.5px;
    hidden: scroll;
`

const FrameResult = styled.div`
    position: relative;
    justify-content: center;
    align-items: center;
    width: 325px;
    height: 80px;
    padding: 14px;
    padding-bottom: 0px;
    padding-top: 40px;
    margin: -10px;
    margin-top: -29px;
    hidden: scroll;
    text-align: right;
    font-size: 55px;
    font-family: Arial;
    letter-spacing: 2px;
    border: 1px solid transparent;
    border-radius: 15px;
    border-width: 2px;
`

const Calculator = ({ children, item, result }) => {
    const keyEntered = [result]
    const [insert, setResult] = useState([])
    const buttonsApply = () => {
        if (item.type === 'icons') {
            keyEntered.push(item.attributes)
        } else {
            keyEntered.push(item.key)
        }
    }
    const calculate = () => {
        keyEntered.concat(setResult)
    }
    return (
        <FrameCalculator>
            <FrameResult>
                {result}            
            </FrameResult>
            <FrameContent onClick={() => calculate()}>
                {children}
            </FrameContent>
            {insert.length > 0? (
                insert.map((item) => {
                    return <Keypads buttonsApply={buttonsApply} keyEntered={keyEntered}/>
                })
            ) : (
                <FrameContent/>
            )} 
        </FrameCalculator>
    )
}  

Calculator.defaultProps = {
    result: "Error"
}

Calculator.propTypes = {
    result: PropTypes.array.isRequired,
    children: PropTypes.node
}

export default Calculator