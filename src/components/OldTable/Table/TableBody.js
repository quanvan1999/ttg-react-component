import React, { useState } from 'react'
import useSortableData from './useSortableData'
import IcoSort from '../../../icons/IcoRepeat'
const TableBody = (props) => {
    const { headers, rows, getvalue } = props;
    const {requestSort} = useSortableData(rows)
    const [rotate, setRotate] = useState(false);
    const buildRow = (rows, headers) => {
      return (
           <tr key={rows.id}>
           { headers.map((value, index) => {
               return <td key={index} onClick={()=>getvalue(rows.id)}>{rows[value]}</td>
            })}
           </tr>
       )
    };
    const handleRotate = ()=>{
      if(rotate === true){
        setRotate(false)
      }
      else{
        setRotate(true)
      }
    }
    return(
        <tbody>
          <tr className="tr-sort-data">
            {headers.map((value,index) => <th key={index}><button className="button-sort" onClick={() => requestSort(value)}><IcoSort rotate={rotate} onClick={()=>handleRotate()}/></button></th>)}
          </tr>
          { rows && rows.map((value) => {
                  return buildRow(value, headers);
              })}
        </tbody>
  );
  }
export default TableBody