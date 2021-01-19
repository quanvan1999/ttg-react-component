import styled from 'styled-components'
import {useEffect} from 'react'
import PropTypes from 'prop-types'
const SpanParent = styled.span`
    position: relative;
    margin: ${props => props.demo ? "8px" : "0"};
`;
const Amount = styled.span`
    user-select: none;
    position: absolute;
    font-size: ${props => props.theme.textSize.small};
    border-radius: 10px;
    color: ${props => props.theme.color.background.primary};
    background-color: ${props => props.theme.color.fill.danger};
    top: 0%;
    left: 100%;
    padding: 0px 4px;
    transform: translate(-50%, -50%);
`;
const Dot = styled.span`
    background-color: ${props => props.theme.color.fill.danger};
    width: 12px;
    height: 12px;
    border-radius: 999px;
    position: absolute;
    top: 0%;
    left: 100%;
    transform: translate(-60%, -30%);
`;
const Badge = (props) => {
    useEffect(() => {
        if (props.value < 0)
            throw Error("Value must be greater or equal than zero!")
        else if (props.max <= 0)
            throw Error("Max must be greater than zero!")
    }, [props.max, props.value])
    const display = () => {
        return props.value <= props.max ? 
            props.value === 0 ? 
                props.showZero ? "0" : "" : props.value.toString() : props.max.toString() + "+"
    }
    return (
            <SpanParent {...props}>
                {props.icon}
                {
                    props.dot ? 
                    props.value > 0 ? <Dot/> : "" : 
                    <Amount>{display()}</Amount>
                }
            </SpanParent>
    )
}
Badge.propTypes = {
    icon: PropTypes.element.isRequired,
    value: PropTypes.number,
    max: PropTypes.number,
    dot: PropTypes.bool,
    showZero: PropTypes.bool
}
Badge.defaultProps = {
    value: 0,
    max: 999,
    dot: false,
    showZero: false
}
export default Badge