import styled from 'styled-components'
import PropTypes from 'prop-types'

const FrameCalculator = styled.div`
    position: relative;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 625px;
    padding: 14px;
    margin: 20px auto 0;
    border: 1px solid #000;
    border-radius: 15px;
    border-width: 2px;
    border-color: #bdbdbd;
    hidden: scroll;
`
const FrameContent = styled.div`
    position: relative;
    justify-content: center;
    align-items: center;
    width: 365px;
    height: 592.5px;
    margin: 2.5px auto 0;
    border: 1px solid #000;
    border-width: 2px;
    border-color: #bdbdbd;
    padding: 14px;
    hidden: scroll;
    text-align: right;
    font-size: 65px;
    font-family: Arial;
`

const Calculator = ({ result, content }) => {
    return (
        <FrameCalculator>
            <FrameContent>
                {result}
            </FrameContent>
            {content}
        </FrameCalculator>
    )
}

Calculator.defaultProps = {
    result: "Error"
}

Calculator.propTypes = {
    result: PropTypes.string.isRequired,
    content: PropTypes.node
}

export default Calculator