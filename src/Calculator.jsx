import React, { useState } from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Keypads from './Keypads'
import ResultScreen from './ResultScreen';

const FrameCalculator = styled.div`
    position: relative;
    justify-content: center;
    align-items: center;
    width: 347px;
    height: 548px;
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
const Calculator = ({ children, item }) => {
    const [result, setResult] = useState([])
    const buttonsApply = () => {
        if (item.type === 'icons') {
          result.push(item.attributes)
        } else {
          result.push(item.key)
        }
        console.log(result)
    }
    return (
        <FrameCalculator>
            <FrameContent>
                {children}
            </FrameContent>
            {result.length > 0? (
                result.map((item) => {
                    return <Keypads key={item.id} item={item} buttonsApply={buttonsApply}/>
                })
            ) : (
                <FrameContent/>
            )} 
        </FrameCalculator>
    )
}  

Calculator.propTypes = {
    children: PropTypes.node
}

export default Calculator