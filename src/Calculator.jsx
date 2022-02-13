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
    position: relative;
    justify-content: center;
    align-items: center;
    width: 340px;
    height: 490px;
    margin: 0px auto 0;
    padding: 14px;
    hidden: scroll;
    text-align: right;
    font-size: 65px;
    font-family: Arial;
`

const Calculator = ({ title, content }) => {
    return (
        <FrameCalculator>
            <FrameContent>
                {title}
            </FrameContent>
            {content}
        </FrameCalculator>
    )
}  

Calculator.defaultProps = {
    title: "Error"
}

Calculator.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.node
}

export default Calculator