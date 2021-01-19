import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import {useState} from "react"
import styled from 'styled-components'

const StyleTable = styled.div`
    position:relative;
    & input{
        padding:3px 5px;
        font-size:1rem;
        border:1px solid ${props => props.theme.fillColor};
        background: ${props => props.theme.backgroundColor};
        color: ${props => props.theme.textColor};

    }
    & .react-datepicker__day-name{
        color: ${props => props.theme.backgroundColor};
    }
    & .react-datepicker__current-month{
        color: ${props => props.theme.backgroundColor};
    }
    & .react-datepicker__day--selected , .react-datepicker__day--keyboard-selected{
        background: ${props => props.theme.fillColor};
        color:  ${props => props.theme.backgroundColor};       
    }
    & .react-datepicker-popper{
        transform:none!important;
    }
    & .react-datepicker__tab-loop{
        position:relative;
    }
    & .react-datepicker__header{
        background:${props => props.theme.fillColor};
    }
    & .react-datepicker__close-icon::after{
        background:${props => props.theme.fillColor};
    }
    & .react-datepicker__day--today{
        font-size:1rem;
    }
`;

const  TableDatePicker = (props) => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <StyleTable {...props}>
            <DatePicker selected={startDate}
                dateFormat="dd/MM/yyyy"
                onChange={date => setStartDate(date)}
                onSelect={date => props.onSelect(date)}
                isClearable
                placeholderText="Select date"
                >
            <div style={{color:"red"}}>{props.children}</div>
            </DatePicker>
        </StyleTable>
    );
}
TableDatePicker.defaultProps = {
    onSelect: (x) => console.log(x)
}
export default TableDatePicker