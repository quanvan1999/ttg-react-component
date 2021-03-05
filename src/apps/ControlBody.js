import {SimpleInput, TeamsCalendar, MentionInput} from '../components/elements'
const ComboxData = [
    {id: 1, name: "La Quoc Anh", job: "Staff", display: "La Quoc Anh", avatar: "https://ttgvncom.sharepoint.com/sites/CommandCenter/_layouts/15/UserPhoto.aspx?Size=L&AccountName=anh.lq@ttgvn.com"},
    {id: 2, name: "Tran Thach Thao", job: "Staff", display: "Tran Thach Thao", avatar: "https://ttgvncom.sharepoint.com/sites/CommandCenter/_layouts/15/UserPhoto.aspx?Size=L&AccountName=thao.tt@ttgvn.com"},
    {id: 3, name: "Le Hoang Vu", job: "Staff", display: "Le Hoang Vu", avatar: "https://ttgvncom.sharepoint.com/sites/CommandCenter/_layouts/15/UserPhoto.aspx?Size=L&AccountName=vu.lh@ttgvn.com"},
    {id: 4, name: "Nguyen Hoang Tan", job: "Lead", display: "Nguyen Hoang Tan", avatar: "https://ttgvncom.sharepoint.com/sites/CommandCenter/_layouts/15/UserPhoto.aspx?Size=L&AccountName=tan.nh@ttgvn.com"},
    {id: 5, name: "Ngo Kim Son", job: "Staff", display: "Nguyen Hoang Tan", avatar: "https://ttgvncom.sharepoint.com/sites/CommandCenter/_layouts/15/UserPhoto.aspx?Size=L&AccountName=son.nk@ttgvn.com"},
    {id: 6, name: "Nguyen Quoc Dat", job: "Intern", display: "Nguyen Quoc Dat", avatar: "https://ttgvncom.sharepoint.com/sites/CommandCenter/_layouts/15/UserPhoto.aspx?Size=L&AccountName=dat.nq@ttgvn.com"},
    {id: 7, name: "Van Thuan Quan", job: "Intern", display: "Van Thuan Quan", avatar: "https://ttgvncom.sharepoint.com/sites/CommandCenter/_layouts/15/UserPhoto.aspx?Size=L&AccountName=quan.vt@ttgvn.com"}
  ]
const ControlBody = (props) => {
    const renderBody = (type) => {
        if (type === "text")
            return <SimpleInput fullWidth/>
        else if (type === "date")
            return <TeamsCalendar fullWidth/>
        else if (type === "pmention")
            return <MentionInput data={ComboxData}/>
        else
            return <p>Something went wrong</p>
    }
    return renderBody(props.type)
}

export default ControlBody