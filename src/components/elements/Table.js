import styled from 'styled-components'
import React from 'react'

const TableComponent = styled.table`
    width: ${props => props.width ? props.width : '100%'};
    background: ${props => props.theme.color.background.secondary};
    padding: ${props => props.ingroup ? "6px 16px" : props.type === "outline" ? "5px 15px" : "6px 16px"};
    margin: ${props => props.demo ? "8px": "0px"};
    border: 1px solid ${props => props.displayMode === "disabled" ? "var(--fillColor)" : "rgba(34,36,38,.15)"};
    font-size: ${props => props.theme.textSize[props.size] || "1rem" };
    font-weight: ${props => props.theme.weight[props.fontWeight] || 500};
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
        color: ${props => props.theme.color.text.primary};
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
    border: 1px solid;
    border-color: ${props => props.ingroup ? props.theme.color.border.primary : "var(--fillColor)"};
    -webkit-box-shadow: none;
    box-shadow: none;
    border-radius: .28571429rem;
    text-align: left;
    color: ${props => props.theme.color.text.secondary};
    border-collapse: separate;
    border-spacing: 0;

    &:hover{
        color: ${props => props.theme.color.text.primary    }
        background: ${props => props.theme.color.text.visited};
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
function Table(props){
    return(
        <TableComponent {...props}>
        {
            React.Children.map(props.children, child => {
                return React.cloneElement(
                    child, 
                    {
                        onSelect: () => props.onSelect
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

Table.defaultProps = {
    displayMode: "edit",
    size: "medium",
    disabled: false,
    onSelect: (e) => {},
    default: false
}


export default Table