m=0
var y;
function start(){
    y=setInterval(run,100)
    function run(){
        if(m==1300){
            clearInterval(y)
        }
        else{
            m+=5
            let x=document.getElementById("img")
            x.style.marginLeft=m+'px'
        }
    }
}
function stop(){
    clearInterval(y)
}
function restart(){
    m=0
    let x=document.getElementById("img")
    x.style.marginLeft=m+'px'
}