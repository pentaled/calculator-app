import styled from 'styled-components'
import PropTypes from 'prop-types'

const FrameCalculator = styled.div`
    position: relative;
    justify-content: center;
    align-items: center;
    width: 400px;
    margin: 20px auto 0;
    border: 1px solid #000;
    border-radius: 15px;
    border-width: 2px;
    height: 625px;
    border-color: #bdbdbd;
    padding: 14px;
    hidden: scroll;
`
const FrameResult = styled.div`
    position: relative;
    justify-content: center;
    align-items: center;
    width: 360px;
    margin: 7px auto 0;
    height: 65px;
    padding: 14px;
    hidden: scroll;
    text-align: right;
    font-size: 65px;
    font-family: Arial;
`

const FrameButton = styled.div`
    position: relative;
    justify-content: center;
    align-items: center;
    width: 360px;
    margin: 7.5px auto 0;
    height: 65px;
    padding: 14px;
    hidden: scroll;
    text-align: right;
    font-size: 65px;
    font-family: Arial;
`
const Calculator = ({ result, button }) => {
    return (
        <FrameCalculator>
            <FrameResult>
                {result}
            </FrameResult>
            <FrameButton>
                {button}
            </FrameButton>
        </FrameCalculator>
    )
}

Calculator.defaultProps = {
    result: "Default List"
}
Calculator.propTypes = {
    result: PropTypes.string.isRequired,
    button: PropTypes.node
}

export default Calculator