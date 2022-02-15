import styled from 'styled-components'
import PropTypes from 'prop-types'

const FrameCalculator = styled.div`
    position: relative;
    justify-content: center;
    align-items: center;
    width: 370px;
    height: 520px;
    padding: 14px;
    margin: 20px auto 0;
    border: 1px solid #000;
    border-radius: 15px;
    border-width: 2px;
    border-color: #bdbdbd;
    hidden: scroll;
`
const FrameContent = styled.div`
    display: flex;
    position: relative;
    justify-content: flex-start;
    align-items: flex-start;
    align-conent: center;
    width: 370px;
    height: 416px;
    padding: 14px;
    margin: -16px;
    margin-top: 2.5px;
    hidden: scroll;
    text-align: right;
    font-size: 65px;
    font-family: Arial;
`

const FrameResult = styled.div`
    position: relative;
    justify-content: center;
    align-items: center;
    width: 370px;
    height: 74px;
    padding: 14px;
    margin: -16px;
    hidden: scroll;
    text-align: right;
    font-size: 65px;
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