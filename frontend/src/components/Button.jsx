export default function Button({ label, onCLick}) {
    return(
            <button onClick={onCLick} className=" w-full rounded-md mt-2 p-1 bg-black text-white  font-bold font-medium text-md cursor-pointer">{label}</button> 
        
    )
}