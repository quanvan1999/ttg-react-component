import styled from 'styled-components'

const DivInput = styled.div`
    width: 200px;
    margin: auto;
    margin-top: 10px;
`;

const TagInput = styled.input`
    background-color: ${props => props.background ? props.background : '#fff6f6'};
    border: none;
    height: 40px;
    padding: 5px 15px;
    font-size: 16px;
    font-weight: 300;
    margin-top: 10px;
    margin-right: 10px;
    outline: none;
    color: ${props => (props.color === true) ? props.color : "red"}
     
    &:hover {
        cursor: pointer;
        background-color: #FABD44;
    }

    &:focus {
        outline: none;
        box-shadow: 0px 0px 2px black;
    }
    
`;

const Input = (props) =>{
    return(
        <DivInput>
            <TagInput type="text" placeholder="input..." color="false"/>
        </DivInput>
    )
}
export default Input