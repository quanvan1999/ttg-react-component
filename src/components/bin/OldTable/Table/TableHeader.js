import React from 'react'
import styled from 'styled-components';

const TableHeader = (props) => {
    const { headers } = props;
    const DivTitle = styled.div`
        margin-right:15px;
    `;
    return(
      <thead className="thead-dark" key="header-1">
          <tr key="header-0">
            { headers && headers.map((value, index) => {
                return <th key={index}>
                            <DivTitle>{value}</DivTitle>
                        </th>
            })}
          </tr>
      </thead>
    );
  }
export default TableHeader