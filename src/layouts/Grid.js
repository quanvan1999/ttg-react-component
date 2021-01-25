import styled from 'styled-components'
import PropTypes from 'prop-types';
const DivContainer = styled.div`
    margin: auto;
    color: black;
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
    @media screen and (min-device-width: 498px) (max-device-width: 575px){
        width: 520px;
    }
    @media screen and (max-device-width: 499px){
        width: 350px;
    }
`;
const DivContainerFluid = styled.div`
    min-width: 100%;
    height: auto;
`;
const DivRow = styled.div`
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
    @media(min-width: 1400px){
        ${props => props.col === 1 ? 'min-width: 110px;' : 'auto;'}
        ${props => props.col === 2 ? 'min-width: 220px;' : 'auto;'}
        ${props => props.col === 3 ? 'min-width: 330px;' : 'auto;'}
        ${props => props.col === 4 ? 'min-width: 440px;' : 'auto;'}
        ${props => props.col === 5 ? 'min-width: 550px;' : 'auto;'}
        ${props => props.col === 6 ? 'min-width: 660px;' : 'auto;'}
        ${props => props.col === 7 ? 'min-width: 770px;' : 'auto;'}
        ${props => props.col === 8 ? 'min-width: 880px;' : 'auto;'}
        ${props => props.col === 9 ? 'min-width: 990px;' : 'auto;'}
        ${props => props.col === 10 ? 'min-width: 1100px;' : 'auto;'}
        ${props => props.col === 11 ? 'min-width: 1201px;' : 'auto;'}
        ${props => props.col === 12 ? 'min-width: 1320px;' : 'auto;'}
    }
    @media screen and (min-device-width: 1200px) and (max-device-width: 1399px){
        ${props => props.col === 1 ? 'min-width: 95px;' : 'auto;'}
        ${props => props.col === 2 ? 'min-width: 190px;' : 'auto;'}
        ${props => props.col === 3 ? 'min-width: 285px;' : 'auto;'}
        ${props => props.col === 4 ? 'min-width: 380px;' : 'auto;'}
        ${props => props.col === 5 ? 'min-width: 475px;' : 'auto;'}
        ${props => props.col === 6 ? 'min-width: 570px;' : 'auto;'}
        ${props => props.col === 7 ? 'min-width: 665px;' : 'auto;'}
        ${props => props.col === 8 ? 'min-width: 760px;' : 'auto;'}
        ${props => props.col === 9 ? 'min-width: 885px;' : 'auto;'}
        ${props => props.col === 10 ? 'min-width: 950px ;' : 'auto;'}
        ${props => props.col === 11 ? 'min-width: 1045px;' : 'auto;'}
        ${props => props.col === 12 ? 'min-width: 1140px;' : 'auto;'}
    }
    @media screen and (min-device-width: 992px) and (max-device-width: 1199px){
        ${props => props.col === 1 ? 'width: 80px;' : 'auto;'}
        ${props => props.col === 2 ? 'width: 160px;' : 'auto;'}
        ${props => props.col === 3 ? 'width: 240px;' : 'auto;'}
        ${props => props.col === 4 ? 'width: 320px;' : 'auto;'}
        ${props => props.col === 5 ? 'width: 400px;' : 'auto;'}
        ${props => props.col === 6 ? 'width: 480px;' : 'auto;'}
        ${props => props.col === 7 ? 'width: 560px;' : 'auto;'}
        ${props => props.col === 8 ? 'width: 640px;' : 'auto;'}
        ${props => props.col === 9 ? 'width: 720px;' : 'auto;'}
        ${props => props.col === 10 ? 'width: 800px ;' : 'auto;'}
        ${props => props.col === 11 ? 'width: 880px;' : 'auto;'}
        ${props => props.col === 12 ? 'width: 960px;' : 'auto;'}
    }
    @media screen and (min-device-width: 768px) and (max-device-width: 991px){
        ${props => props.col === 1 ? 'width: 60px;' : 'auto;'}
        ${props => props.col === 2 ? 'width: 120px;' : 'auto;'}
        ${props => props.col === 3 ? 'width: 180px;' : 'auto;'}
        ${props => props.col === 4 ? 'width: 240px;' : 'auto;'}
        ${props => props.col === 5 ? 'width: 300px;' : 'auto;'}
        ${props => props.col === 6 ? 'width: 360px;' : 'auto;'}
        ${props => props.col === 7 ? 'width: 420px;' : 'auto;'}
        ${props => props.col === 8 ? 'width: 480px;' : 'auto;'}
        ${props => props.col === 9 ? 'width: 540px;' : 'auto;'}
        ${props => props.col === 10 ? 'width: 600px ;' : 'auto;'}
        ${props => props.col === 11 ? 'width: 660px;' : 'auto;'}
        ${props => props.col === 12 ? 'width: 720px;' : 'auto;'}
    }
    @media screen and (min-device-width: 576px) and (max-device-width: 767px){
        ${props => props.col === 1 ? 'width: 45px;' : 'auto;'}
        ${props => props.col === 2 ? 'width: 90px;' : 'auto;'}
        ${props => props.col === 3 ? 'width: 135px;' : 'auto;'}
        ${props => props.col === 4 ? 'width: 180px;' : 'auto;'}
        ${props => props.col === 5 ? 'width: 225px;' : 'auto;'}
        ${props => props.col === 6 ? 'width: 270px;' : 'auto;'}
        ${props => props.col === 7 ? 'width: 315px;' : 'auto;'}
        ${props => props.col === 8 ? 'width: 360px;' : 'auto;'}
        ${props => props.col === 9 ? 'width: 405px;' : 'auto;'}
        ${props => props.col === 10 ? 'width: 450px ;' : 'auto;'}
        ${props => props.col === 11 ? 'width: 495px;' : 'auto;'}
        ${props => props.col === 12 ? 'width: 540px;' : 'auto;'}
    }
    @media screen and (min-device-width: 499px) and (max-device-width: 575px){
        ${props => props.col === 1 ? 'width: 8.33%;' : 'auto;'}
        ${props => props.col === 2 ? 'width: 16.66%;' : 'auto;'}
        ${props => props.col === 3 ? 'width: 24.99%;' : 'auto;'}
        ${props => props.col === 4 ? 'width: 33.32%;' : 'auto;'}
        ${props => props.col === 5 ? 'width: 41.65%;' : 'auto;'}
        ${props => props.col === 6 ? 'width: 49.98%;' : 'auto;'}
        ${props => props.col === 7 ? 'width: 58.31%;' : 'auto;'}
        ${props => props.col === 8 ? 'width: 66.64%;' : 'auto;'}
        ${props => props.col === 9 ? 'width: 74.97%;' : 'auto;'}
        ${props => props.col === 10 ? 'width: 83.3%;' : 'auto;'}
        ${props => props.col === 11 ? 'width: 91.63%;' : 'auto;'}
        ${props => props.col === 12 ? 'width: 100%;' : 'auto;'}
    }
    @media screen and (max-device-width: 499px){
        ${props => props.col === 1 ? 'width: 9.2%;' : 'auto;'}
        ${props => props.col === 2 ? 'width: 16.66%;' : 'auto;'}
        ${props => props.col === 3 ? 'width: 25.99%;' : 'auto;'}
        ${props => props.col === 4 ? 'width: 33.32%;' : 'auto;'}
        ${props => props.col === 5 ? 'width: 40.5%;' : 'auto;'}
        ${props => props.col === 6 ? 'width: 49.98%;' : 'auto;'}
        ${props => props.col === 7 ? 'width: 57%;' : 'auto;'}
        ${props => props.col === 8 ? 'width: 66.64%;' : 'auto;'}
        ${props => props.col === 9 ? 'width: 74.97%;' : 'auto;'}
        ${props => props.col === 10 ? 'width: 83.3%;' : 'auto;'}
        ${props => props.col === 11 ? 'width: 91.63%;' : 'auto;'}
        ${props => props.col === 12 ? 'width: 100%;' : 'auto;'}
    }
    @media screen and (max-device-width: 320px) and (min-device-width: 270px){
        ${props => props.col === 1 ? 'width: 9.33%;' : 'auto;'}
        ${props => props.col === 2 ? 'width: 16.6%;' : 'auto;'}
        ${props => props.col === 3 ? 'width: 25.99%;' : 'auto;'}
        ${props => props.col === 4 ? 'width: 33.32%;' : 'auto;'}
        ${props => props.col === 5 ? 'width: 40.5%;' : 'auto;'}
        ${props => props.col === 6 ? 'width: 49.98%;' : 'auto;'}
        ${props => props.col === 7 ? 'width: 57%;' : 'auto;'}
        ${props => props.col === 8 ? 'width: 66.64%;' : 'auto;'}
        ${props => props.col === 9 ? 'width: 74.97%;' : 'auto;'}
        ${props => props.col === 10 ? 'width: 83.3%;' : 'auto;'}
        ${props => props.col === 11 ? 'width: 91.63%;' : 'auto;'}
        ${props => props.col === 12 ? 'width: 100%;' : 'auto;'}
    }
    @media screen and (max-device-width: 280px){
        ${props => props.col === 1 ? 'width: 9.33%;' : 'auto;'}
        ${props => props.col === 2 ? 'width: 16.66%;' : 'auto;'}
        ${props => props.col === 3 ? 'width: 25.99%;' : 'auto;'}
        ${props => props.col === 4 ? 'width: 33.32%;' : 'auto;'}
        ${props => props.col === 5 ? 'width: 40.5%;' : 'auto;'}
        ${props => props.col === 6 ? 'width: 49.98%;' : 'auto;'}
        ${props => props.col === 7 ? 'width: 57%;' : 'auto;'}
        ${props => props.col === 8 ? 'width: 66.64%;' : 'auto;'}
        ${props => props.col === 9 ? 'width: 74.97%;' : 'auto;'}
        ${props => props.col === 10 ? 'width: 83.3%;' : 'auto;'}
        ${props => props.col === 11 ? 'width: 91.63%;' : 'auto;'}
        ${props => props.col === 12 ? 'width: 100%;' : 'auto;'}
    }
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