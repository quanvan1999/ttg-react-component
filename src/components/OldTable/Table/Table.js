import TableBody from "./TableBody";
import TableHeader from "./TableHeader";
import styled from 'styled-components';
import PropTypes from 'prop-types'

const DivContainer = styled.div`
  margin: auto;
  overflow-x: auto;
  border-radius: 4px;
  background: ${props => props.theme.color.background.primary};
  box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
`;
const TableStyle = styled.table`
  min-width: 650px;
  width: 100%;
  display:table;
  border-spacing: 0;
  border-collapse: collapse;
  & tr{
    color: inherit;
    display: table-row;
    outline:   0;
    vertical-align: middle;
  }
  & td{
    color: ${props => props.theme.color.text.primary};
    width: 80px;
    font-weight: normal;
    line-height: 1.5rem;
    padding: 15px;
    font-size: 0.875rem;
    text-align: left;
    border-bottom: 1px solid ${props => props.theme.color.border.primary};
    letter-spacing: 0.01071em;
    vertical-align: inherit;
  }
  & th {
    color: ${props => props.theme.color.text.primary};
    padding: 15px;
    text-align: left;
    font-size: 0.875rem;
    border-bottom: 1px solid rgba(224,224,224,1);
    letter-spacing: 0.01071em;
    vertical-align: inherit;
  }
  & button{
    display:block;
    border:0;
    background:transparent;
    line-height: 1.5rem;
    cursor:pointer;
  }
  & .tr-sort-data button{
    position: absolute;
    top: -34px;
    right: 10px;
  }

  & .tr-sort-data th{
    padding: 0;
    position: relative;
  }
  & .tr-sort-data svg{
    color:${props => props.theme.color.text.primary};
    width: 16px;
    height: auto;
    opacity: 0.5; 
    display:block;   }
`;

const Table = (props) => {
    const { headers, rows, getvalue } = props;

    return (
      <DivContainer className="MuiTableContainer-root">
        <TableStyle className="table table-bordered table-hover">
          <TableHeader headers={headers}></TableHeader>
          <TableBody headers={headers} rows={rows} getvalue={getvalue}></TableBody>
        </TableStyle>
      </DivContainer>
    );
  }

Table.defaultProps = {
  headers: {},
  rows: {}
}
Table.propTypes={
  headers:PropTypes.object,
  rows:PropTypes.object
}
export default Table