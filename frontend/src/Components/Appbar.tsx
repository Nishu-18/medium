import { Link } from "react-router-dom";
import { Avatar } from "./Avatar";

export function Appbar(){
    return <div className="flex justify-between px-10 border-b py-4 ">
        <div className="font-medium text-xl">
            <Link to={"/blogs"}>
            Medium
            </Link>
           
        </div>
        <div>
            <Link to={'/publish'}>
        <button type="button" className="mr-5 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">New</button>
            </Link>
            <Avatar size="large" name="Nishchal"></Avatar>
        </div>
        
    </div>
}