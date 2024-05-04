let userscore=0;
let comscore=0;
const userscorepara=document.querySelector("#userscore");   //accessing the scorecard tag.
const compscorepara=document.querySelector("#comscore");

const msg=document.querySelector("#msg");  //accessing the msg container of result.

const drawgame=()=>{                              //arrow function when game is draw.
    console.log("game is draw");
    msg.innerText="OOh,Game is DRAW!- TRY aGaiN";  
    msg.style.backgroundColor="rgb(5, 158, 185)";

} 
 
const showwinner=(userwin)=>{                     //arrow function for showing the winner of game.
    if(userwin)
    {
        userscore++;
        userscorepara.innerText=userscore;
        console.log("you win");
        msg.innerText="YOU WIN! 😀";
        msg.style.backgroundColor="green"; //changingcolour.
    }
    else{
        comscore++;
        compscorepara.innerText=comscore;
        console.log("you lose");
        msg.innerText="🤖 YOU LOSE 👎😛";      //setting the text for displaying on the screen .
        msg.style.backgroundColor="red";
    }
}

const playgame=(userchoice)=>{                         //arrow function which manages the userchoice and computer choice.
    console.log("user choice=",userchoice);
    const comchoice=genComChoice();         //calling the function.
    console.log("computer choice is=", comchoice);

if(userchoice==comchoice)
{
    //draw condition
    drawgame();                                   //conditions for winning the game by selecting diferent choices by user.
}
else{
    let userwin=true;
    if(userchoice=="rock")
    {
        //comp=scissors,papers
        userwin=comchoice=="paper"?false:true ;  //user lose or win.
    }
    else if(userchoice=="paper")
    {
        //com=rock,scissor
        userwin=comchoice=="scissor"?false:true;
    }
    else{
        //com=rock,paper
        //user=scissor
       userwin= comchoice=="rock"?false:true;
    }
    showwinner(userwin);
}
}

const genComChoice=()=>{                                   //arrow function for gemnerating computer choice.
    const option=["rock","paper","scissor"];
    const randomidx=Math.floor(Math.random()*3);
    return option[randomidx];
}


const choices= document.querySelectorAll(".choice");     //accessing the choice tag from HTML.
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
         playgame(userchoice);   //calling the function.
    });
});
