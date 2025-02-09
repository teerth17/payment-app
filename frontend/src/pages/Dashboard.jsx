import { useEffect ,useState} from "react";
import AppBar from "../components/AppBar";
import Balance from "../components/Balance";
import Heading from "../components/Heading";
import Users from "../components/Users";
import axios from "axios";


function Dashboard(){
    const [balance,setBalance] = useState(0);

    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/account/balance",{
            params:{
                userId: localStorage.getItem('userId'),
            },
            headers:{
            Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
    }).then((response) => {
        console.log(response.data);
        setBalance(response.data.balance);
    })
    },[])
    return (
        <div>
            <div>
                <AppBar />
                <Balance amount={balance} />
                <Users />
            </div>
        </div>
    )
}

export default Dashboard;