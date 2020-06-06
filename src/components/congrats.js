import React from "react";


function Congrats(props) {
    if (props.active) { 
    return (
        <div class = "container"> 
            <div class = "row topmargin"> 
                <div class = "letter"> 
                    <h3> Congrats {props.name} ! You have solved the puzzle! </h3> 

                    <p> I hope you guys enjoyed the puzzle! </p>

                    <p> It took you {45 - props.minutes - 1} minutes and {60 - props.seconds}  seconds. </p>
                
                    <div class = "promo"> 
                        <p>  If you like it, feel free to share it around and let me know 
                            by reaching out to me. 
                        </p> 

                        <p> - Akhil Killawala </p>
                    </div> 
                </div>
                <div> 
                    
                </div>
            </div> 
        </div> 
    )    
    } else { 
        return ( 
            <div class = "reject"> 
                <h3> Complete the stages! </h3> 
            </div> 
        )
    }   
}
export default Congrats;