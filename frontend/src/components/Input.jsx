export default function Input({label, placeholder,onChange}){
    console.log(label)
    return(
        <div className="text-md text-left font-medium py-1">
            {label}
            <div className="border-2 border-gray-200 mt-1 p-1">
            <input onChange={onChange} placeholder={placeholder} />
            </div>
            
        </div>
    )
}