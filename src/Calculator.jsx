import styled from 'styled-components'
import PropTypes from 'prop-types'

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
const Calculator = ({ children }) => {
    return (
        <FrameCalculator>
            <FrameContent>
                {children}
            </FrameContent>
        </FrameCalculator>
    )
}  

Calculator.propTypes = {
    children: PropTypes.node
}

export default Calculator