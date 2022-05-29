import React, { useState, useEffect } from 'react';
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
    const [insert, setResult] = useState([])//Use react hook

    useEffect(() => {
        setResult(result)
    }, [result])

    const buttonsApply = (item) => { 
        if (item.type === 'icons') {
            const newData = result.push(item.attributes) 
            setResult(newData)
        } else {
            const newData = result.push(item.key)
            setResult(newData)
        } 
        if (item.key === "C") { 
            const newData = result.splice(0, result.length) 
            setResult(newData)
        }
        if (item.key === "Del") {
            result.pop()
            const newData = result.pop()
            setResult(newData)
        }
        if (item.key === "equals") {
            result.pop()
            if (result.includes("+") === true) {
                const remplus = result.indexOf("+")
                result.splice(remplus, 1)
                const strtonum = result.join()
                const newarr = strtonum.split(',').map(Number)
                const number = newarr.reduce((a, b) => a + b)
                result.splice(0, result.length)
                const text = number.toString()
                const newData = result.push(text)
                setResult(newData)
                
            }
            if (result.includes("-") === true) {
                const remminus = result.indexOf("-")
                result.splice(remminus, 1)
                const strtonum = result.join()
                const newarr = strtonum.split(',').map(Number)
                const number = newarr.reduce((a, b) => a - b)
                result.splice(0, result.length)
                const text = number.toString()
                const newData = result.push(text)
                setResult(newData)
            }
            if (result.includes("*") === true) {
                const remtimes = result.indexOf("*")
                result.splice(remtimes, 1)
                const strtonum = result.join()
                const newarr = strtonum.split(',').map(Number)
                const number = newarr.reduce((a, b) => a * b)
                result.splice(0, result.length)
                const text = number.toString()
                const newData = result.push(text)
                setResult(newData)
            }
            if (result.includes("/") === true) {
                const remdiv = result.indexOf("/")
                result.splice(remdiv, 1)
                const strtonum = result.join()
                const newarr = strtonum.split(',').map(Number)
                const number = newarr.reduce((a, b) => a / b)
                result.splice(0, result.length)
                const text = number.toString()
                const newData = result.push(text)
                setResult(newData)
            }
        }
    }
    return (
        <FrameCalculator>
            {insert? (
                <FrameResult data-testid="result">
                    {result} 
                </FrameResult>
            ):(
                <FrameResult/>
            )}
            <FrameContent>
                {Keydata.map((item) => (
                    <Keypads key={item.key} item={item} buttonsApply={buttonsApply} />
                ))}
            </FrameContent>
        </FrameCalculator>
    )
}  

Calculator.defaultProps = {
    result: []
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