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

            /*FUNCTIONS*/
            const convertArray = (x) => {
                input.splice(0, input.length)
                for (const i of x) {
                    input.push(i);
                }
            }
            const convertEquation = () => {
                const number = input.join('')
                const newArray = number.split(" ");
                const filterarr = newArray.filter(i => {return i !== null && i !== '';});
                const editArray = filterarr.join(' ')
                const findPlus = /p/g;
                const replacementPlus = '+';
                const resultPlus = editArray.replace(findPlus, replacementPlus);
                const findMinus = /m/g;
                const replacementMinus = '-';
                const resultMinus = resultPlus.replace(findMinus, replacementMinus);
                input.splice(0, input.length)
                loopCount.splice(0, loopCount.length)
                convertArray(resultMinus.split(" "))
            }
            const Calculate = (Numtonum) => {
                if (Numtonum.includes("+") === true) {
                    const strtonum = Numtonum.join('')
                    const remplus = strtonum.replace('+', ',')
                    const newarr = remplus.split(',').map(Number)
                    const result = (newarr.reduce((a, b) => a + b)) 
                    return (result.toString())
                }
                if (Numtonum.includes("-") === true) {
                    const strtonum = Numtonum.join('')
                    const remplus = strtonum.replace('-', ',')
                    const newarr = remplus.split(',').map(Number)
                    const result = (newarr.reduce((a, b) => a - b)) 
                    return (result.toString())
                }
                if (Numtonum.includes("/") === true) {
                    const strtonum = Numtonum.join('')
                    const remplus = strtonum.replace('/', ',')
                    const newarr = remplus.split(',').map(Number)
                    const result = (newarr.reduce((a, b) => a / b)) 
                    return (result.toString())
                }
                if (Numtonum.includes("*") === true) {
                    const strtonum = Numtonum.join('')
                    const remplus = strtonum.replace('*', ',')
                    const newarr = remplus.split(',').map(Number)
                    const result = (newarr.reduce((a, b) => a * b)) 
                    return (result.toString())
                }
            }
            const simplifyArray = (index) => {
                const indexNum1 = index - 1
                const indexNum2 = index + 1
                const Numtonum = input.slice(indexNum1, indexNum2+1);
                input.splice(indexNum1, Numtonum.length)
                input.splice(indexNum2 - 2, 0, Calculate(Numtonum))
            }

            if (result[0] === '0') {
                result.splice(0, 1)
            } 
            const joinarr = result.join('')
            const add = joinarr.replaceAll("+"," + ")
            const minus = add.replaceAll("-"," - ")
            const divide = minus.replaceAll("/"," / ")
            const times = divide.replaceAll("*"," * ")
            const myArray = times.split(" ");
            const equation = myArray
            const input = []
            const loopCount = []
        
            /*MAIN*/
            convertArray(equation)
            for (const [i, v] of input.entries()) {
                loopCount.push(i)
                if (v === "-") {
                    const indexminus = input.indexOf("-")
                    input[indexminus] = " m"
                }
                if (v === "+") {
                    const indexplus = input.indexOf("+")
                    input[indexplus] = " p"
                }
                if (v === "/") {
                    const indexdiv = input.indexOf("/")
                    input[indexdiv] = " / "

                }
                if (v === "*") {
                    const indextimes = input.indexOf("*")
                    input[indextimes] = " * "
                }
            }
            convertEquation()

            const sign = []
            const list = []
            for (const [i, v] of input.entries()) {
                if (v === "/") {
                    sign.push("/");
                    list.push(v)
                    loopCount.push(i)
                }
                if (v === "*") {
                    sign.push("*");
                    list.push(v)
                    loopCount.push(i)
                }
                if (v === "+") {
                    sign.push("+");
                    list.push(v)
                    loopCount.push(i)
                }
                if (v === "-") {
                    sign.push("-");
                    list.push(v)
                    loopCount.push(i)
                }
            }
            for (let i = 0; i < loopCount.length; i++) {
                const attribute = sign[0]
                const value = list[0]
                if (value === attribute) {
                    const index = input.indexOf(attribute)
                    simplifyArray(index)
                }
                sign.splice(0, 1);
                list.splice(0, 1);
            }
            if (input.length !== 1) {
                const strtonum = input.join(',')
                const newarr = strtonum.split(',').map(Number)
                const editInput = (newarr.reduce((a, b) => a + b)) 
                result.splice(0, result.length)
                const text = editInput.toString()
                const newData = result.push(text)
                setResult(newData)
            } else {
                result.splice(0, result.length)
                const text = input.toString()
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