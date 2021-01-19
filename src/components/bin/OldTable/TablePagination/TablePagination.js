import Pagination from './Pagination'

const TablePagination = (props)=>{
    const {headers,rows, totalPage, pageSize, getvalue} = props
    return(
        <>
            <Pagination 
                totalPage={totalPage}
                headers={headers}
                rows={rows} 
                pageSize={pageSize}   
                getvalue = {getvalue}
            />
        </>
    )
}

export default TablePagination