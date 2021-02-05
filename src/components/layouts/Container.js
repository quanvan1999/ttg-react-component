import styled from 'styled-components'

// const DivContainer = styled.div`
//     margin: auto;
//     height: auto;
//     @media (max-width: 575.98px){
//         width: 100%;
//     }
//     @media (max-width: 767px){
//         width: 540px;
//     }
//     @media screen and (min-device-width: 768px) and (max-device-width: 991px){
//         width: 720px;
//     }
//     @media screen and (min-device-width: 992px) and (max-device-width: 1199px){
//         max-width: 960px;
//     }
//     @media screen and (min-device-width: 1200px) and (max-device-width: 1399px){
//         width: 1320px;
//     }
//     @media(min-width: 1400px){
//         width: 1320px;
//     }    
// `;

const StyledContainer = styled.div`
    width: 100%;
`;

const FContainer = ({children}) => <StyledContainer>{children}</StyledContainer>

export default FContainer

// const Container = (props)=>{
//     return(
//         <DivContainer {...props}>
//             {props.children}
//         </DivContainer>
//     )
// }
// const ContainerFluid = (props)=>{
//     return(
//         <DivContainerFluid {...props}>
//             {props.children}
//         </DivContainerFluid>
//     )
// }