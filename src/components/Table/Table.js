import styled from 'styled-components'
import React from 'react'

const TableComponent = styled.table`
    width: ${props => props.width ? props.width : '100%'};
    background: ${props => props.theme.color.background.secondary};
    margin: ${props => props.demo ? "8px": "0px"};
    border: 1px solid ${props => props.displayMode === "disabled" ? "var(--fillColor)" : "rgba(34,36,38,.15)"};
    -webkit-box-shadow: none;
    box-shadow: none;
    border-radius: .28571429rem; 
    text-align: left;
    color: rgba(0,0,0,.87);
    border-collapse: separate; 
    border-spacing: 0;  
    position: relative;
    th{
        cursor: auto;
        background: #f9fafb;
        text-align: inherit;
        color: rgba(0,0,0,.87);
        padding: .92857143em .78571429em;
        vertical-align: inherit;
        font-style: none;
        font-weight: 700;
        text-transform: none;
        border-bottom: 1px solid rgba(34,36,38,.1);
        border-left: none;
        border-left: 1px solid rgba(34,36,38,.1);
    }

    td{
        padding: .78571429em .78571429em;
        text-align: inherit;
        border-left: 1px solid rgba(34,36,38,.1);
        border-bottom: 1px solid rgba(34,36,38,.1);
    }
`;
const Header = styled.thead``;
const Row = styled.tr`
    width: 100%;
    background: #fff;
    margin: 1em 0;
    border: 1px solid rgba(34,36,38,.15);
    -webkit-box-shadow: none;
    box-shadow: none;
    border-radius: .28571429rem;
    text-align: left;
    color: rgba(0,0,0,.87);
    border-collapse: separate;
    border-spacing: 0;

    &:hover{
        background: rgba(0,0,0,.05)!important;
        color: rgba(0,0,0,.95)!important;
    }
`;
const HeaderCell = styled.th``;
const Body = styled.tbody``;
const Cell = styled.td``;
const TableFooter = styled.tfoot`
    right: 0;
    position: absolute;
    &:hover{
        background: transparent;
    }
`;

const handleClick = (props)=>{
    console.log(props)
}
function Table(props){
    return(
        <TableComponent {...props}>
        {
            React.Children.map(props.children, child => {
                return React.cloneElement(
                    child, 
                    {
                        onSelect: () => handleClick(child.props.value)
                    })
            })
        }
        </TableComponent>
    )
};

Table.Header = Header
Table.Row = Row
Table.HeaderCell = HeaderCell
Table.Body = Body
Table.Cell = Cell
Table.TableFooter = TableFooter


export default Table