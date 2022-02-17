import styled from 'styled-components'
import PropTypes from 'prop-types'

const FrameCalculator = styled.div`
    position: relative;
    justify-content: center;
    align-items: center;
    width: 360px;
    height: 555px;
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
    margin: -16px;
    margin-top: -2.5px;
    hidden: scroll;
`

const FrameResult = styled.div`
    position: relative;
    justify-content: center;
    align-items: center;
    width: 333px;
    height: 80px;
    padding: 14px;
    padding-bottom: 10px;
    padding-top: 30px;
    margin: -16px;
    hidden: scroll;
    text-align: right;
    font-size: 55px;
    font-family: Arial;
`
const Calculator = ({ title, children }) => {
    return (
        <FrameCalculator>
            <FrameResult>
                {title}            
            </FrameResult>
            <FrameContent>
                {children}
            </FrameContent>
        </FrameCalculator>
    )
}  

Calculator.defaultProps = {
    title: "Error"
}

Calculator.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node
}

export default Calculator