import React from 'react';
import Button from 'react-bootstrap/Button';
import "./css/home.css";

function Home(props){ 
       let button1; 
        if (props.vals.accepted){ 
            button1 = <p> <u> Accepted! </u> </p> 
        } else { 
            button1 = <Button className = "accept" onClick = {props.onclick}> Accept the Case? </Button>;
        }
        return ( 
            <div class = "row"> 
                <div class = "letter" id = "introletter"> 
                    <h3> Welcome to the SherLOCKED Room! </h3>
                    <p> This Web Escape Room works in the same fashion that a regular 
                        escape room works. Find the clues, piece them together, and <u> beat the 
                        puzzle </u>, but this time in the web browser! You have the ability to search up facts, although 
                        almost all of the information in the game should be common knowledge! 
                    </p>
                    <p> You can check how much time you have left 
                        in the top right corner and use the right to navigate. More levels will open up 
                        as you successfully complete tasks, and the puzzles get progressively harder so I recommend
                        that you play with other people either by all doing the puzzle separately and sharing findings, or 
                        by screen sharing a single screen using any type of video conferencing tool. A disclaimer I do not take responsibility for any part of the ficton that may 
                        mirror reality, and apologize if anything comes across as offensive as it mostly certainly wasn't 
                        the intention! 
                    </p>
                    <div class = "buttonhold">  
                        {button1}
                    </div> 
                    <div class = "closing">
                        <p> Best of Luck, </p> 
                        <p> Akhil Killawala </p>     
                       
                    </div>  
                </div> 

            </div>


        )
    }


export default Home;