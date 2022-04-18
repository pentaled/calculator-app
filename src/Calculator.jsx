import React, { useState } from 'react';
import Keydata from './keypad.json'
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

const Calculator = ({ result }) => {
    const keyEntered = []
    const [insert, setResult] = useState([])

    const buttonsApply = (item) => { //Problem One
        if (item.type === 'icons') {
            console.log(item.attributes)
        }
        console.log(item.key)
    }
    const calculate = (e) => {
        setResult(insert.concat(e.target.item.key))
    }
    return (
        <FrameCalculator>
            <FrameResult>
                {result}
            </FrameResult>
            <FrameContent>
                {Keydata.map((item) => (
                    <Keypads key={item.key} item={item} calculate={calculate} buttonsApply={buttonsApply}/>
                ))}
            </FrameContent>
        </FrameCalculator>
    )
}  

Calculator.defaultProps = {
    result: "Error"
}

Calculator.propTypes = {
    item: PropTypes.shape({
        key: PropTypes.string.isRequired,
        type: PropTypes.string,
        space: PropTypes.number,
        attributes: PropTypes.string
    }),
    result: PropTypes.array.isRequired
}

export default Calculator;