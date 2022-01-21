import styled from 'styled-components'
import PropTypes from 'prop-types'

const Frame = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0 5px 12px;
`

const FrameResult = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0 5px 12px;
`

const Container = ({ title, children }) => {
    return (
        <Frame>
            <FrameResult>
                {title}
            </FrameResult>
            {children}
        </Frame>
    )
}

Container.defaultProps = {
    title: "Default List"
}
Container.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node
}

export default Container