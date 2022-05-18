import React from 'react';
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
    const keyEntered = [] // The array to make the calculations // The function to change all things in the array to a number
    const buttonsApply = (item) => { 
        if (item.type === 'icons') {
            result.push(item.attributes) // Problem #3 "Cannot push the numbers in the Result area"
            keyEntered.push(item.attributes) // To calculate the inputs
        } else {
            result.push(item.key)
            keyEntered.push(item.key)
        } 
        if (item.key === "C") { // Problem #2 "Cannot put C, Del & equals in different functions and have to fit in ButtonsApply or else item is undentified"
            result.splice(0, result.length) // Sets the length of the array to 0 so that there will be nothing inside the array
            keyEntered.splice(0, keyEntered.length)
        }
        if (item.key === "Del") {
            result.pop() // To remove the 'Del' 
            result.pop()
            keyEntered.pop()
            keyEntered.pop()
        }
        if (item.key === "equals") {
            keyEntered.pop()
            if (keyEntered.includes("+") === true) {
                const remplus = keyEntered.indexOf("+")
                keyEntered.splice(remplus, 1)
                const strtonum = keyEntered.join()
                const newarr = strtonum.split(',').map(Number)
                const number = newarr.reduce((a, b) => a + b)
                const text = number.toString()
                console.log(text)// Do not do result = text otherwise it will have error
            }
            if (keyEntered.includes("-") === true) {
                const remminus = keyEntered.indexOf("-")
                keyEntered.splice(remminus, 1)
                const strtonum = keyEntered.join()
                const newarr = strtonum.split(',').map(Number)
                const number = newarr.reduce((a, b) => a - b)
                console.log(number)
            }
            if (keyEntered.includes("*") === true) {
                const remtimes = keyEntered.indexOf("*")
                keyEntered.splice(remtimes, 1)
                const strtonum = keyEntered.join()
                const newarr = strtonum.split(',').map(Number)
                const number = newarr.reduce((a, b) => a * b)
                console.log(number)
            }
            if (keyEntered.includes("/") === true) {
                const remdiv = keyEntered.indexOf("/")
                keyEntered.splice(remdiv, 1)
                const strtonum = keyEntered.join()
                const newarr = strtonum.split(',').map(Number)
                const number = newarr.reduce((a, b) => a / b)
                console.log(number)
            }
        }
        console.log("result", result) 
    }
    const calculate = () => {
        console.log("keyEntered", keyEntered)
    }
//#3 
//You cannot push the array into result because result is string. You need set result in the calculate function. You only show the results after calculation. Wrong place to display result.
//Need to move FrameResult styled component to ResultScreen.jsx!!!
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