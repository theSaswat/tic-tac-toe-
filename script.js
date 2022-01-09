
const heading = document.querySelector('.heading')
const resetbtn= document.querySelector('.resetbtn')
const gameCells=document.querySelectorAll('.cell')

// heading.textContent="O Turns"
// console.log(heading)
// console.log(resetbtn)
// console.log(gameCells)





// gameCells.addEVENTliSTENER--- IT DOESNT WORK ON THIS IT WILL WORK ON SINGLE ELEMENT


var isXturn = true;
var count = 0;

const checkGameStatus=() =>{
// console.log('checking')
// console.log(gameCells[0].classList)
const indec0classlist = gameCells[0].classList;
const indec1classlist = gameCells[1].classList;
const indec2classlist = gameCells[2].classList;
const indec3classlist = gameCells[3].classList;
const indec4classlist = gameCells[4].classList;
const indec5classlist = gameCells[5].classList;
const indec6classlist = gameCells[6].classList;
const indec7classlist = gameCells[7].classList;
const indec8classlist = gameCells[8].classList;
// console.log(indec0classlist);
// console.log(indec1classlist);
if (indec0classlist.contains('O')) {
    if (indec1classlist.contains('O') && indec2classlist.contains('O') ) {
        alert("O WON");
       
        
    }
    
}
if (indec0classlist.contains('X')) {
    if (indec1classlist.contains('X') && indec2classlist.contains('X') ) {
        alert("X WON");
        
    }
    
}
if (indec3classlist.contains('')) {
    if (indec4classlist.contains('O') && indec5classlist.contains('O') ) {
        alert("O WON");
        
    }
    
}
if (indec3classlist.contains('X')) {
    if (indec4classlist.contains('X') && indec5classlist.contains('X') ) {
        alert("X WON");
        
    }
    
}
if (indec6classlist.contains('O')) {
    if (indec7classlist.contains('O') && indec8classlist.contains('O') ) {
        alert("O WON");
        
    }
    
}
if (indec6classlist.contains('X')) {
    if (indec7classlist.contains('X') && indec8classlist.contains('X') ) {
        alert("X WON");
        
    }
}
if (indec0classlist.contains('O')) {
    if (indec4classlist.contains('O') && indec8classlist.contains('O') ) {
        alert("O WON");
        
    }
    
}
if (indec0classlist.contains('X')) {
    if (indec4classlist.contains('X') && indec8classlist.contains('X') ) {
        alert("X WON");
        
    }
}

if (indec2classlist.contains('O')) {
    if (indec4classlist.contains('O') && indec6classlist.contains('O') ) {
        alert("O WON");
        
    }
    
}
if (indec2classlist.contains('X')) {
    if (indec4classlist.contains('X') && indec6classlist.contains('X') ) {
        alert("X WON");
        
    }
}
if (indec0classlist.contains('O')) {
    if (indec3classlist.contains('O') && indec6classlist.contains('O') ) {
        alert("O WON");
        
    }
    
}
if (indec0classlist.contains('X')) {
    if (indec3classlist.contains('X') && indec6classlist.contains('X') ) {
        alert("X WON");
        
    }
}
if (indec1classlist.contains('O')) {
    if (indec4classlist.contains('O') && indec7classlist.contains('O') ) {
        alert("O WON");
        
    }
    
}
if (indec1classlist.contains('X')) {
    if (indec4classlist.contains('X') && indec7classlist.contains('X') ) {
        alert("X WON");
        
    }
}
if (indec2classlist.contains('O')) {
    if (indec5classlist.contains('O') && indec8classlist.contains('O') ) {
        alert("O WON");
        
        
    }
    
}
if (indec2classlist.contains('X')) {
    if (indec5classlist.contains('X') && indec8classlist.contains('X') ) {
        alert("X WON");
        
    }
}


}

function cellHandler(event){
    //console.log('clicked'); // it will create a click button
    
// console.log(event.target.classList)
// console.log(this.target.classList).................... we cannot use this
// console.log(this.classList) .................... it will work
const classList = event.target.classList;
if (classList.length>1) {
    return
}

// classList.add("O")
if (isXturn) {
    classList.add("X");
    isXturn=false;
    heading.textContent="O's Turn";
    
    
}

else{
    classList.add("O");
    isXturn=true;
    heading.textContent="X's Turn";
    
}
count = count+1;
console.log(count);
if (count>=5) {
    checkGameStatus()
}

 }






for(cell of gameCells){
    cell.addEventListener('click',cellHandler)
}


const  resetHandler= () => {
    window.location.reload()
}


resetbtn.addEventListener('click',resetHandler);

