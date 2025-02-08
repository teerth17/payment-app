import "tailwindcss";

export default function Heading({props}){


    return(
        <div className="font-bold text-4xl pt-6">
        <h1>{props.Heading}</h1>
        </div>
    )
}