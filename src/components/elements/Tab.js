import styled from 'styled-components'
import PropTypes from "prop-types"
import React, { useState, useEffect } from 'react';
import {getFader} from '../../utils/color'
const Container = styled.div`
    height: ${props => props.fullHeight ? "100%" : props.height ? props.height : "auto"};
    display: flex;
    flex-direction: column
`;
const DivTab = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`;
const ButtonTab=styled.button`
    display:block;
    position:relative;
    border:0;
    border-radius:0;
    cursor: pointer;
    width:100%;
    outline: none;
    padding: 4px 4px 2px 4px;
    font-size:1rem;
    color:${props => props.theme.color.fill.primary};
    background: ${props => getFader(props.theme.color.fill.primary, 0.05)};
    &:disabled {
        color: ${props => props.theme.color.text.disabled};
    }
`;
const TabContain=styled.div`
    display:flex;
    background: ${props => getFader(props.theme.color.fill.primary, 0.05)};
`;
const StyleIndicator=styled.div`
    height: 3px;
    background: ${props => props.theme.color.fill.primary};
    transition: all 0.3s ease-out;
`;
const TabContent=styled.div`
    height: 100%;
    padding: 0.5rem;
    background: ${props => props.theme.color.background.secondary};
`;

const Tab = (props) => {
    const [tabs,SetTabs]= useState((props.children.find(child => child.props.selected) || props.children.find(child => !child.props.disabled)).props.value)
    const [index, setIndex] = useState(0)
    const selectTab = (value) => {
        if (props.children.find(child => child.props.value === value).props.disabled)
            return
        SetTabs(value)
    }
    useEffect(() => {
        setIndex(props.children.map(child => child.props.value).indexOf(tabs))
    }, [setIndex, props.children, tabs])

    return(
        <Container {...props}>
            <DivTab  {...props}>
                {props.children.map((tab) => (
                    <ButtonTab onClick={() => selectTab(tab.props.value)} key={tab.props.value} disabled={tab.props.disabled}>
                        {tab.props.name}
                    </ButtonTab>
                ))}
            </DivTab>
            <TabContain>
                <StyleIndicator style={{width: 100 / props.children.length + "%", transform: `translateX(${index * 100}%)`}}/>
            </TabContain>
            <TabContent {...props}>{props.children.find(child => child.props.value === tabs)}</TabContent>
        </Container>
    )
}
Tab.propTypes = {
    selected: PropTypes.number,
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.element
    ]).isRequired,
    disable:PropTypes.bool,
    className: PropTypes.string,
    onChange: PropTypes.func,
    fullHeight: PropTypes.bool,
    height: PropTypes.number
};
Tab.defaultProps = {
    selected: 0
}

export default Tab