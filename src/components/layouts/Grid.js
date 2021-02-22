import styled from 'styled-components'
import propTypes from 'prop-types';
const DivContainer = styled.div`
    margin: auto;
    height: auto;
    @media(min-width: 1400px){
        width: 1320px;
    }
    @media screen and (min-device-width: 1200px) and (max-device-width: 1399px){
        width: 1150px;
    }
    @media screen and (min-device-width: 992px) and (max-device-width: 1199px){
        max-width: 960px;
    }
    @media screen and (min-device-width: 768px) and (max-device-width: 991px){
        width: 720px;
    }
    @media screen and (min-device-width: 576px) and (max-device-width: 767px){
        width: 540px;
    }
    @media screen and (min-device-width: 498px) and (max-device-width: 575px){
        width: 520px;
    }
    @media screen and (min-device-width: 500px) and (max-device-width: 540px){
        width: 490px;
    }
    @media screen and (max-device-width: 499px) {
        width: 350px;
    }
    @media screen and (max-device-width: 375px){
        font-size: 10px;
        width: 330px;
    }
    @media screen and (max-device-width: 360px){
        width: 320px;
    }
    @media screen and (max-device-width: 320px){
        width: 280px;
    }
    @media screen and (max-device-width: 280px){
        font-size: 10px;
        width: 250px;
    }
`;
const DivContainerFluid = styled.div`
    width: 100%;
    height: auto;
    box-sizing: border-box;
    @media screen and (max-device-width: 375px){
        font-size: 10px;
    }
`;
const DivRow = styled.div`
    width: 100%;
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: ${props => props.JustifyContent ? props.JustifyContent : "normal"};

    div{
        ${props => props.auto ? 'width: auto' : ''};
    }
`;
const DivCol = styled.div`
    margin: 0;
    padding: 0;
    background-color: white;
    border: 1px solid rgba(39,41,43,0.1);
    width: ${props => props.col ? (100/12 * props.col) : (100/12)}%;
    margin-left: ${props => props.offSet ? (100/12)*props.offSet : '0'}%;
    ${props => props.auto ? 'width: auto' : ''};
    ${props => props.middle ? 'margin: auto' : ''};
    @media(min-width: 1400px){
        width: ${props => props.xxl ? (100/12 * props.xxl) : ''}%;
    }
    @media screen and (min-device-width: 1200px) and (max-device-width: 1399px){
        width: ${props => props.xl ? (100/12 * props.xl) : ''}%;
    }
    @media screen and (min-device-width: 992px) and (max-device-width: 1199px){
        width: ${props => props.lg ? (100/12 * props.lg) : ''}%;
    }
    @media screen and (min-device-width: 768px) and (max-device-width: 991px){
        width: ${props => props.md ? (100/12 * props.md) : ''}%;
    }
    @media screen and (min-device-width: 576px) and (max-device-width: 767px){
        width: ${props => props.sm ? (100/12 * props.sm) : ''}%;
    }
    @media screen and (min-device-width: 498px) and (max-device-width: 575px){
        width: ${props => props.sm ? (100/12 * props.sm) : ''}%;
    }
    @media screen and (max-device-width: 540px) and (min-device-width: 500px){
        width: ${props => props.sm ? (100/12 * props.sm) : ''}%;
    }
    @media screen and (max-device-width: 499px){
        width: ${props => props.sm ? (100/12 * props.sm) : ''}%;
    }
    @media screen and (max-device-width: 375px) and (min-device-width: 361px){
        width: ${props => props.sm ? (100/12 * props.sm) : ''}%;
    }
    @media screen and (max-device-width: 360px) and (min-device-width: 321px){
        width: ${props => props.sm ? (100/12 * props.sm) : ''}%;
    }
    @media screen and (max-device-width: 320px) and (min-device-width: 281px){
        width: ${props => props.sm ? (100/12 * props.sm) : ''}%;
    }
    @media screen and (max-device-width: 280px){
        width: ${props => props.sm ? (100/12 * props.sm) : ''}%;
    }
`;

const Container = (props)=>{
    return(
        <DivContainer {...props}>
            {props.children}
        </DivContainer>
    )
}
const ContainerFluid = (props)=>{
    return(
        <DivContainerFluid>
            {props.children}
        </DivContainerFluid>
    )
}
const Row = (props)=>{
    return(
        <DivRow {...props}>
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

// All defalut props
DivCol.defaultProps={
    col: 1
}
DivRow.defaultProps={
    JustifyContent: 'normal'
}

//All propsTypes
DivCol.propTypes={
    col: propTypes.number
}
DivRow.propTypes={
    JustifyContent: propTypes.string
}

// offSet,middle,auto, 
//JustifiContent : center, left, flex-end....
// sm, md, xs, lg, xl, xxl


export {Container, ContainerFluid, Row, Col}