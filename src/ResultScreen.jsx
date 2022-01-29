import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
    margin: 20px 10px;
    height: 10px;
    width: 10px;
    border: 1px solid #000;
    border-radius: 15px;
    border-width: 2px;
`

const Calculator = ({ result }) => {
    return (
        <Wrapper>
            {result}
        </Wrapper>
    )
}

Calculator.defaultProps = {
    result: "Default List"
}
Calculator.propTypes = {
    result: PropTypes.string.isRequired,
}

export default Calculator