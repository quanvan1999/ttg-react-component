import styled from 'styled-components'

const DivInput = styled.div`
    font-size: ${props => props.theme.textSize.medium};
    position: relative;
    display: inline-block;
    height: 50px;
    overflow: hidden;
`;

const InputComponent = styled.input`
    font-size: ${props => props.theme.textSize.medium};
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    padding: 24px 8px 0px 8px;
    color: ${props => props.theme.textColor};
    border-bottom: 1px solid black;
    outline: none;
`;

const LabelComponent = styled.label`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transition: all 0.3s ease;
    pointer-events: none;
`;

const TextInput = (props) =>{
    return(
        <DivInput {...props}>
            <InputComponent type="text" name="input_text" autoComplete="off" required/>
            <LabelComponent htmlFor="name" >
                <span>Name</span>
            </LabelComponent>
        </DivInput>
    )
}

export default TextInput