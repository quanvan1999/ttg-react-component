import styled from 'styled-components'
import React from 'react'
import PropTypes from 'prop-types'

const TableComponent = styled.table`
    width: ${props => props.width || '100%'};
    margin: ${props => props.demo ? "8px": "0px"};
    box-shadow: none;
    border-collapse: collapse; 
    position: relative;
    border: 1px solid ${props => props.theme.color.border.primary};
`;

const Header = styled.thead`
`;

const Row = styled.tr`
    cursor: pointer;
    background: ${props => props.theme.color.background.primary};
    transition: all 150ms ease-in;
    padding: ${props => props.footer ? "0.5rem" : "0"};
    &:hover {
        background: ${props => !props.footer && props.theme.color.background.secondary};
    }
`;

const HeaderCell = styled.th`
    cursor: pointer;
    background: ${props => props.theme.color.background.secondary};
    color: ${props => props.theme.color.text.primary};
    padding: 0.5rem 1rem;
    font-weight: ${props => props.theme.weight.bold};
    border: 1px solid ${props => props.theme.color.border.primary};
    width: ${props => props.width || "auto"};
    text-align: ${props => props.textAlign || "center"};
`;
HeaderCell.propTypes = {
    width: PropTypes.string,
    textAlign: PropTypes.string
}
const Body = styled.tbody``;
const Cell = styled.td`
    padding: 0rem;
    height: 40px;
    text-overflow: ellipsis;
    border: ${props => props.footer ? "0px" : "1px"} solid ${props => props.theme.color.border.primary};
    text-align: ${props => props.textAlign || "left"};
`;

Cell.propTypes = {
    textAlign: PropTypes.string
}

const Footer = (props) => {
    return (
        <tfoot>
            <Row footer>
                {React.Children.map(props.children, child => React.cloneElement(child, {footer: true}))}
            </Row>
        </tfoot>
    )
}

function Table(props){
    return(
        <TableComponent {...props}>
         {props.children}
        </TableComponent>
    )
};
Table.Row = Row
Table.Header = Header
Table.HeaderCell = HeaderCell
Table.Body = Body
Table.Cell = Cell
Table.Footer = Footer

Table.propTypes = {
    cellWidth: PropTypes.string
}

export default Table