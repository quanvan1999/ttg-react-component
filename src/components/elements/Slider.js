import React , {useState, useRef, useEffect} from 'react'
import styled, { keyframes } from 'styled-components'
import PropTypes from "prop-types";
import { getFader } from '../../utils/color'
const StyleSlider = styled.div`
    position:relative;
    display: ${props => props.fullWidth ? "block" : "inline-block"};
    width: ${props => props.fullWidth ? "100%": props.width + "px"};
    padding: 4px 8px;
`;
const Container = styled.div`
    position: absolute;
    background: ${props => props.theme.color.border.primary};
    height: 2.5px;
    left: 0;
    top: 50%;
    width: 100%;
    transform: translate(0%, -50%);
`;
const Left = styled.div`
    overflow: hidden;
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 50px;
    background: ${props => props.displayMode === "disabled" ? props.theme.color.text.disabled : props.theme.color.fill.primary};
`;
const bg = keyframes`
    from {left: -50%;}
    to {left: 100%;}
`;
const InLeft = styled.div`
    --clr: ${props => getFader(props.theme.color.background.primary, 0.8)};
    position: absolute;
    height: 100%;
    width: 40%;
    background: linear-gradient(to right, rgba(0,0,0,0), var(--clr), rgba(0,0,0,0));
    animation: ${bg} 2s ease-in-out 0s infinite forwards normal;
`;
const InputStyle = styled.input`
    position: absolute;
    background: red;
    display: inline-block;
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 100%;
    height: 0.2rem;
    outline: none;
    background: transparent; //${props => props.displayMode === "disabled" ? "#A3A3A3" : props.theme.color.fill.primary};
    &::-webkit-slider-thumb {
        pointer-events: ${props => props.displayMode !== "edit" ? "none" : "auto"};
        appearance: none;
        background: ${props => props.theme.color.background.primary};
        width: 1.3rem;
        height: 1.3rem;
        border: 0.2rem solid ${props => props.displayMode === "disabled" ? "#A3A3A3" : props.theme.color.fill.primary};
        border-radius: 999px;
        cursor: pointer;
        transition: all .15s ease-in-out;
    }
    &::-webkit-slider-thumb:active {
        transform: scale(1.3, 1.3)
    }
    &::-webkit-slider-thumb:hover {
        box-shadow: 0px 0px 1rem ${props => props.displayMode === "edit" ? getFader(props.theme.color.fill.primary, 0.8) : "transparent"};
    }
    &:hover ~ span {
        opacity: 1;
    }
    &::-moz-range-thumb {
        pointer-events: ${props => props.displayMode !== "edit" ? "none" : "auto"};
        appearance: none;
        background: ${props => props.theme.color.background.primary};
        width: 1.3rem;
        height: 1.3rem;
        border: 0.2rem solid ${props => props.displayMode === "disabled" ? "#A3A3A3" : props.theme.color.fill.primary};
        border-radius: 999px;
        cursor: pointer;
        transition: all .15s ease-in-out;
    }
`;
InputStyle.defaultProps = {width: "100%"}

const SliderValue= styled.span`
    color  : ${props => props.theme.color.text.primary};
    opacity: 0;
    position: absolute;
    transition: opacity 0.15s ease-in;
    top: 1rem;
    background: ${props => props.theme.backgroundColor};
    box-shadow: 0px 0px 0.125rem ${props => getFader(props.theme.color.text.primary, 0.8)};
    text-align: center;
    border-radius: 5px;
    padding: 1px 4px;
    font-size: ${props => props.theme.textSize.small};
`;

const Slider = (props) =>{
    let runInit = useRef(false)
    const {step, min, max, defaultLength, defaultValue, onSlide} = props
    const [range,setRange]=useState(defaultLength)
    const x = useRef()
    const handleChange = (v) => {
        if (props.displayMode === "edit") {
            onSlide(parseInt(v))
            setRange(v);
        }
    };

    useEffect(() => {
        if (!runInit.current) {
            console.log("I run")
            onSlide(defaultValue)
            setRange(defaultValue)
            runInit.current = true
        }
    }, [defaultValue, onSlide])
    return(
        <StyleSlider {...props}>
            <Container>
                <Left {...props} style={{width: parseInt((range - min)/(max-min)*100).toString() + "%"}}>
                    <InLeft/>
                </Left>
                <InputStyle {...props}
                    ref={x}
                    type="range"
                    step={step}
                    min={min}
                    max={max}
                    value={range}
                    onChange={(e) => handleChange(e.target.value)}
                />
                <SliderValue 
                    style={{
                        left: parseInt((range - min)/(max-min)*100).toString() + "%",
                        transform: "translateX(-" + parseInt((range - min)/(max-min)*100).toString() + "%)" 
                    }}>{range}</SliderValue>  
            </Container>   
        </StyleSlider>
    )
}

Slider.propTypes ={
    step: PropTypes.number,
    min: PropTypes.number,
    max: PropTypes.number,
    defaultValue: PropTypes.number,
    maxWidth: PropTypes.bool,
    onSlide: PropTypes.func,
    displayMode: PropTypes.oneOf(["edit", "view", "disabled"])
}
Slider.defaultProps = {
    step: 1,
    min: 0,
    max: 100,
    defaultValue: 50,
    width: 100,
    onSlide: (x) => console.log(x),
    displayMode: "edit"
}
export default Slider