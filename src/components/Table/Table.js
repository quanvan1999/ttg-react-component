import styled from 'styled-components'
import React from 'react'

const Table = styled.table`
    width: 50%;
    background: #fff;
    margin: auto;
    border: 1px solid rgba(34,36,38,.15); 
    -webkit-box-shadow: none;
    box-shadow: none;
    border-radius: .28571429rem; 
    text-align: left;
    color: rgba(0,0,0,.87);
    border-collapse: separate; 
    border-spacing: 0;  
    position: relative;

    tr{
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
    }

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
const Row = styled.tr``;
const HeaderCell = styled.th``;
const Body = styled.tbody``;
const Cell = styled.td``;
const TableFooter = styled.tr`
    right: 0;
    position: absolute;
`;

const handleClick = (props)=>{
    console.log(props)
}
function TableComponent(props){
    return(
        <Table {...props}>
        {
            React.Children.map(props.children, child => {
                return React.cloneElement(
                    child, 
                    {
                        onSelect: () => handleClick(child.props.value), 
                        displayMode: props.displayMode,
                        ingroup: true
                    })
            })
        }
        </Table>
    )
};

TableComponent.Header = Header
TableComponent.Row = Row
TableComponent.HeaderCell = HeaderCell
TableComponent.Body = Body
TableComponent.Cell = Cell
TableComponent.TableFooter = TableFooter


export default TableComponent