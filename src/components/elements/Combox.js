import React, {useState, useEffect, useRef} from 'react'
import IcoChevronDown from '../icons/IcoChevronDown'
import IcoX from '../icons/IcoX'
import PropTypes from 'prop-types'
import styled, {keyframes} from 'styled-components'
import useClickOutside from '../../hooks/useClickOutside'

const Option = (props) => <div>{props.children}</div>
Option.propTypes = {
    id: PropTypes.number,
    searchText: PropTypes.arrayOf(PropTypes.string),
    value: PropTypes.string
}
const opa = keyframes `
    0% {transform: translateY(100%);opacity: 0;}
    100% {transform: translateY(0%);opacity: 1;}
`;
const out = keyframes`
    100% {transform: translateY(100%); opacity: 0;}
`;
const Container = styled.div`
    display: block;
    width: 100%;
    position: relative;
    cursor: pointer;
`;
const Dummy = styled.div`
    padding: 0px;
    margin-top: 4px;
    font-size: ${props=> props.theme.textSize.medium};
    width: 0px;
    overflow: hidden;
`;
const Bar = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    border: 2px solid ${props => props.open ? props.theme.color.fill.primary : props.theme.color.border.primary};
    border-radius: 5px;
    transition: border 0.15s linear;
`;
const ItemContainer = styled.div`
    width: 100%;
    background: transparent;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    overflow-y: auto;
    padding: 0px 6px 4px 6px;
    overflow-x: hidden;
    transition: all 1s linear;
    &::-webkit-scrollbar {
        display: none;
    }
`;
const OpenButton = styled.div`
    display: flex;
    align-items: center;
    background-color: transparent;
    padding: 0 4px;
    border: none;
    border-radius: 0;
    outline: 0;
    transform: ${props => props.isOpen ? "rotateX(180deg)" : "rotateX(0deg)"};
    transition: all 0.15s linear;
`;
const slideDown = keyframes`
    from {max-height: 0px; opacity: 0;}
    to {max-height: 15rem; opacity: 1;}
`;
const SelectContainer = styled.div`
    border: 2px solid ${props => props.theme.color.border.primary};
    background: ${props => props.theme.color.background.primary};
    max-height: 15rem;
    position: absolute;
    overflow: hidden;
    width: 100%;
    z-index: 2;
    border-radius: 5px;
    margin-top: 0.4rem;
    top: 100%;
    animation: ${slideDown} 0.15s ease-out 0s 1 forwards normal;
`;
const Selection = styled.div`
    padding: 0.5rem;
    background-color: ${props => props.selected ? props.theme.color.background.secondary: "transparent"};
    &:hover {
        background-color: ${props => props.theme.color.border.primary};
    }
`;
const StyledItem = styled.div`
    display: flex;
    align-items: center;
    background: ${props => props.theme.color.background.secondary};
    color: ${props => props.theme.color.text.primary};
    animation: ${opa} 0.15s linear 0s 1 normal forwards;
    border-radius: 2px;
    padding: 0px 0px 0px 8px;
    margin-right: 6px;
    margin-top: 4px;
    font-size: ${props=> props.theme.textSize.medium};
    overflow-x: hidden;
    cursor: pointer;
    transition: all 1s linear;
    &.item-out {
        animation: ${out} 0.15s ease-out 0s 1 normal forwards;
    }
`;
const XContainer = styled.div`
    margin-left: 6px;
    padding: 0px 2px;
    border-left: 1px solid ${props => props.theme.color.border.primary};
`;
const SearchBarContainer = styled.div`
    background: transparent;
    padding: 0.5rem 0.5rem;
`;
const SearchBar = styled.input`
    background: transparent;
    padding: 0.25rem 0.5rem;
    font-size: 1rem;
    outline: 0;
    width: 100%;
    border: none;
    border-bottom: 1px solid ${props => props.theme.color.border.primary};
    color: ${props => props.theme.color.fill.primary};
`;

function Combox(props) {
    const {onSelect} = props
    const [isOpen, setIsOpen] = useState(false);
    const comboxRef = useClickOutside(() => setIsOpen(false))
    // Selected item
    const [items, setItems] = useState([])
    const [returnItems, setReturnItems] = useState([])
    const [seachText, setSeachText] = useState("")
    const [removingItem, setRemovingItem] = useState("")
    const refSearchBar = useRef(null)

    const addItem = (itemProp) => {
        if (props.multiple) {
            if (items.map( item => item.id).includes(itemProp.id) ) { removeItem(itemProp.id) }
            else setItems([...items, itemProp])
        }
        else {
            setItems([itemProp])
            setIsOpen(false)
        }
    }

    useEffect(() => {
        setReturnItems(items.map(item => item.value))
    },[items])

    useEffect(() => {
        onSelect(returnItems)
    }, [returnItems, onSelect])

    useEffect(() => {
        if (isOpen) {
            if (refSearchBar.current) {
                refSearchBar.current.focus()
                setSeachText("")
            }
        }
    }, [isOpen])

    const removeItem = (id) => {
        setRemovingItem(id)
        setTimeout(() => {
            setItems(items.filter(item => item.id !== id))
            setRemovingItem("")
        }, 300)
    }

    const handleSearchText = (e) => {
        setSeachText(e.target.value)
    }

    const handleOpen = (state) => {
        setIsOpen(state)
    }
    
    return (
        <Container ref={comboxRef}>
            <Bar open={isOpen}>
                <ItemContainer onClick={() => handleOpen(true)}>
                    <Dummy>x</Dummy>
                    {items.map(item => 
                    <StyledItem key={item.id} className={removingItem === item.id ? "item-out" : ""}>
                        {item.children}
                        <XContainer onClick={() => removeItem(item.id)}>
                            <IcoX size="small"/>
                        </XContainer>
                    </StyledItem>
                    )}
                </ItemContainer>
                <OpenButton isOpen={isOpen} onClick={() => handleOpen(!isOpen)}><IcoChevronDown/></OpenButton>
            </Bar>
            {isOpen && 
                <SelectContainer>
                    {props.searchable &&
                    <SearchBarContainer>
                        <SearchBar ref={refSearchBar} type="input" placeholder="Search..." value={seachText} onChange={handleSearchText}/>
                    </SearchBarContainer>
                    }
                    {props.children
                        .filter(child => child.props.searchText.concat([child.props.value]).map(c => c.toUpperCase()).join("|").includes(seachText.toUpperCase().trim()))
                            .map(child => 
                                <Selection 
                                    selected={items.map(item => item.id).includes(child.props.id)} 
                                    key={child.props.id}
                                    onClick={() => addItem(child.props)}>{child.props.children}
                                </Selection>
                            )
                    }
                </SelectContainer>
            }
        </Container>
    )
}

Combox.Option = Option
Combox.propTypes = {
    multiple: PropTypes.bool,
    searchable: PropTypes.bool,
    onSelect: PropTypes.func
}
Combox.defaultProps = {
    multiple: false,
    searchable: false,
    onSelect: (v) => console.log(v)
}

export default Combox