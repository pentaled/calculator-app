import React, { useState } from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types'
import keypad from '../keypad.json'
import { faBackspace, faDivide, faTimes, faMinus, faPlus, faEquals} from '@fortawesome/free-solid-svg-icons'

const Wrapper = styled.div`
    margin: 100px 50px;
`

const button = styled( faBackspace, faDivide, faTimes, faMinus, faPlus )`
    height: 18px;
    witdth: 18px;
    color: #333333
`

const bigbutton = styled(keypad)`
    height: 18px;
    witdth: 170px;
    color: #FA9033
`

return (
    <Wrapper>
        <button></button>
    </Wrapper>
)