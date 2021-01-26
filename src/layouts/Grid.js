import styled, { css } from 'styled-components'
import PropTypes from 'prop-types';
const DivContainer = styled.div`
    margin: auto;
    color: white;
    height: auto;
    @media(min-width: 1400px){
        width: 1320px;
    }
    @media screen and (min-device-width: 1200px) and (max-device-width: 1399px){
        width: 1140px;
    }
    @media screen and (min-device-width: 992px) and (max-device-width: 1199px){
        width: 960px;
    }
    @media screen and (min-device-width: 768px) and (max-device-width: 991px){
        width: 720px;
    }
    @media screen and (min-device-width: 576px) and (max-device-width: 767px){
        width: 540px;
    }
    @media (max-width: 575px){
        width: 100%;
    }
`;
const DivContainerFluid = styled.div`
    width: 100%;
    height: auto;
`;
const DivRow = styled.div`
    width: 100%;
    background: transparent;
    display: flex;
    flex-wrap: wrap;
`;
const DivCol = styled.div`
    --colNum: ${props => props.col || 0};
    border: 1px solid black;
    flex: ${props => props.col ? "0 0 auto" : "1 0 0%"};
    width: ${props => props.col ? "calc(100%/12*var(--colNum))" : "100%"};

    ${props => !props.col && css`
        flex: 1 0 0%;
        width: 100%;
    `}
`;
DivCol.PropTypes={
    col: PropTypes.number
}
DivCol.defaultProps={
    col: 1
}


const Container = (props)=>{
    return(
        <DivContainer {...props}>
            {props.children}
        </DivContainer>
    )
}
const ContainerFluid = (props)=>{
    return(
        <DivContainerFluid {...props}>
            {props.children}
        </DivContainerFluid>
    )
}
const Row = (props)=>{
    return(
        <DivRow  {...props}>
            {props.children}
        </DivRow>
    )
}
const Col = (props)=>{
    return(
        <DivCol {...props}>
            {props.children}
        </DivCol>
    )
}



export {Container, ContainerFluid, Row, Col}