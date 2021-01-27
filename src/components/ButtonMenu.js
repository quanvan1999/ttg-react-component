import styled from 'styled-components'
import PropTypes from 'prop-types'
import IcoMenu from '../components/icons/IcoMenu';

const StyleButton = styled.button`
    background: transparent;
    border:none;
    cursor:pointer;
    padding: 0;
    
    &:focus {
        outline:none;
    }
    & svg{
        width: 2rem;
        height: 2rem;
    }
`;
const ButtonMenu = (props) =>{
    return(
        <StyleButton open={props.open} onClick={() => props.setOpen(!props.open)}>
            <IcoMenu/>
        </StyleButton>
    )
}
ButtonMenu.propTypes = {
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired
}
export default ButtonMenu