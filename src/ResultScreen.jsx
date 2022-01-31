import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
    position: relative;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 600Spx;
    padding: 14px;
    margin: 20px auto 0;
    border: 1px solid #000;
    border-radius: 15px;
    border-width: 10px;
    border-color: #000;
    hidden: scroll;
`

const ResultScreen = ({ result }) => {
    return (
        <Wrapper>
            {result}
        </Wrapper>
    )
}

ResultScreen.defaultProps = {
    result: "Default List"
}
ResultScreen.propTypes = {
    result: PropTypes.string.isRequired,
}

export default ResultScreen