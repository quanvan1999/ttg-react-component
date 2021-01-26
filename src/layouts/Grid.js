import styled from 'styled-components'
import PropTypes from 'prop-types';
const DivContainer = styled.div`
    margin: auto;
    height: auto;
    @media(min-width: 1400px){
        width: 1320px;
    }
    @media screen and (min-device-width: 1200px) and (max-device-width: 1399px){
        width: 1140px;
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
    @media screen and (min-device-width: 498px) (max-device-width: 575px){
        width: 520px;
    }
    @media screen and (max-device-width: 499px){
        width: 348px;
    }
`;
const DivContainerFluid = styled.div`
    width: 100%;
    height: auto;
    box-sizing: border-box;
`;
const DivRow = styled.div`
    width: 100%;
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    display: flex;
    flex-wrap: wrap;
`;
const DivCol = styled.div`
    padding-top: .75rem;
    padding-bottom: .75rem;
    padding-left: .75rem;
    background-color: white;
    border: 1px solid rgba(39,41,43,0.1);
    width: ${props => props.col ? (100/12 * props.col) : (100/12)}%;
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
        <DivContainerFluid>
            {props.children}
        </DivContainerFluid>
    )
}
const Row = (props)=>{
    return(
        <DivRow>
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

// ${props => props.col === 1 ? 'min-width: 110px;' : 'auto;'}
// ${props => props.col === 2 ? 'min-width: 220px;' : 'auto;'}
// ${props => props.col === 3 ? 'min-width: 330px;' : 'auto;'}
// ${props => props.col === 4 ? 'min-width: 440px;' : 'auto;'}
// ${props => props.col === 5 ? 'min-width: 550px;' : 'auto;'}
// ${props => props.col === 6 ? 'min-width: 660px;' : 'auto;'}
// ${props => props.col === 7 ? 'min-width: 770px;' : 'auto;'}
// ${props => props.col === 8 ? 'min-width: 880px;' : 'auto;'}
// ${props => props.col === 9 ? 'min-width: 990px;' : 'auto;'}
// ${props => props.col === 10 ? 'min-width: 1100px;' : 'auto;'}
// ${props => props.col === 11 ? 'min-width: 1201px;' : 'auto;'}
// ${props => props.col === 12 ? 'min-width: 1320px;' : 'auto;'}