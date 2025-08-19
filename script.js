var start = new Date().getTime();

function getColorRandom(){
    var num="0123456789ABCDEF";
    var color = '#';
    for (let i = 0; i < 6; i++) {
        color += num[Math.floor(Math.random() * 16)];
    }
    return color;
}


document.getElementById('squarShape').onclick = function(){
    var left;
    var top;
    var wh;
    left = Math.random()*500 ;
    top= `${Math.random()*300}px` ;
    wh = `${(Math.random()*400)+100}px` ;
    
    document.getElementById('squarShape').style.left = `${left}px`;
    document.getElementById('squarShape').style.top = top;
    document.getElementById('squarShape').style.height = wh;
    document.getElementById('squarShape').style.width = wh;
    document.getElementById('squarShape').style.backgroundColor= getColorRandom();
   
     var end = new Date().getTime();
    document.getElementById('speed').innerText= Math.floor(left / ((end-start)/1000));


    alert('Second : '+(end-start)/1000 +'sec' );
    
} 