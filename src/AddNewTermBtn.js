import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from "./Button";
function AddNewTermBtn({ handleLoginClick}) {
    const history = useHistory();

    const handleClick = () => {
        console.log("handleClick");
        history.push(`/addNewTerm`);
    }

    
   
    return (
        <div className="update">
            <div>
                {/* <span onClick={handleClick} className="icon">ADD NEW TERM</span> */}
                <a href={`/addNewTerm`}><Button>NEW TERM</Button></a>
                
            </div>
        </div>
    )
}
export default AddNewTermBtn;