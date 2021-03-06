import React from 'react';
import "./css/how.css";
import Hint from "./hints";

function How(props){ 
    if (props.active) {
        const hinters = [
            {
                num: "0", 
                title: "Hint 1", 
                body: "The pills have to look the exact same, and each one only owns so many pills"}, 
            {
                num: "1", 
                title: "Final Hint", 
                body: "You can only buy pills in whole numbers, and Hasan bought a certain amount of them extra."},
            
        ].slice(0, props.vals.hints)
        const hints = <Hint
            values = {hinters}
            num = {props.hints}
            click = {() => {props.change("how", "hints", props.vals.hints + 1); props.change("hints", "hints", props.hints - 1)}}
        
        /> 
        return (   
            <div class = "largest">
                <div class = "how"> 
                <div class = "finale"> 
                    <p> The last thing we need is to figure out which pill, the <b> HOW </b> that Hasan switched out. 
                        We've compiled the following information and know that he bought some amount extra of the pill supply. Put 
                        the number of the list in the letter.
                    </p> 
                </div> 
                <div class = "healthprob"> 
                    <h5> Prescriptions under Hasan's Name</h5>
                    <ul>
                        <li> High Cholesterol </li> 
                        <li> Nausea </li>
                        <li> Diarrhea </li>
                        <li> Erectile Dysfunction</li>
                        <li> Heart Disease </li> 
                    </ul>
                </div> 
                <div class = "healthprob">
                    <h5> Money Spent on Prescriptions </h5>    
                    <ul> 
                        <li> Total Spent on Prescriptions Last Month: 450 </li>
                        <li> Total Spent on Prescription This Month: 462 </li> 
                    </ul> 
                </div> 
                <div class = "descriptions"> 
                    <h5> Common Medication Descriptions </h5> 
                    <ol> 
                        <li> <b>Knee Pain: </b> Oval, marked B,  <b> $1.20 </b> </li> 
                        <li> <b>Addy: </b> White, Square, <b> $.80 </b> </li> 
                        <li> <b>Early Balding Treatment:</b> Red, Small, marked B, <b> $1.55 </b> </li> 
                        <li> <b> Diarrhea relieve: </b> White, Circular, marked B, <b> $1.30 </b> </li> 
                        <li> <b> High Blood Pressure: </b> Gray, Large, marked A, <b> $2.00 </b> </li> 
                        <li> <b> High Cholesterol: </b> Gray, marked C, <b> $.50 </b> </li> 
                        <li> <b> Vicodin: </b> Large, marked A, <b>$3.00 </b>  </li> 
                        <li> <b> Hearing Loss ailment: </b> Square, Medium, <b>$1.25 </b> </li> 
                        <li> <b> Viagra: </b> Square, Small, <b> $2.50 </b> </li> 
                        <li> <b> Type 1 Diabetes: </b>  Red, Large, marked A, <b> $3.20 </b> </li> 
                        <li> <b> Type 2 Diabetes: </b> Red, Medium, <b>$3.60 </b> </li>
                        <li> <b> Heart Disease prevention: </b> Red, Large, marked C,<b>$4.40 </b> </li> 
                        <li> <b> Nause Medication: </b> White, Circular, marked A, <b> $6.00</b> </li> 
                    </ol> 

                </div> 

            </div> 
                {hints}
            </div>
        )
    } else { 
        return (
            <div class = "reject"> 
                <h3> Finish earlier levels!! </h3> 
            </div>
        )
    }
}

export default How;