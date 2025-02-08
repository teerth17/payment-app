import AppBar from "../components/AppBar";
import Balance from "../components/Balance";
import Heading from "../components/Heading";
import Users from "../components/Users";


function Dashboard(){
    return (
        <div>
            <div>
                <AppBar />
                <Balance amount={"$1000"} />
                <Users />
            </div>
        </div>
    )
}

export default Dashboard;