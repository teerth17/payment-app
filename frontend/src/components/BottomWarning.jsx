import { Link } from "react-router-dom"

export default function BottomWarning({label,to,buttontext}){
    return(
        <div className="py-2 text-sm felx justify-center items-center">
            <span>
                {label}
            </span>
            <Link className="pointer cursor-pointer underline pl-1" to={to}> {buttontext}</Link>
        </div>
    )
}