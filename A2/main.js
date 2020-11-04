//  Array of 4 Quotes
var quotes = [
    "Winning doesn’t always mean being first. Winning means you’re doing better than you’ve done before.", 
    "It always seems impossible until it is done.",
    "Optimism is a happiness magnet. If you stay positive good things and good people will be drawn to you.",
    "The difference between ordinary and extraordinary is that little extra."];

// Function to generate random number  
function randomNumber(min, max) {  
    return Math.random() * (max - min) + min; 
}  

// Function call 
randNum = Math.floor(randomNumber(0, 3));
document.getElementById("quote-here").innerHTML = quotes[randNum];

//CSS changes

function green(){
    document.getElementById("quote-here").style.color="green";
    document.getElementById("quotes").style.background="lightgreen";
    document.getElementById("quotes").style.border="2px solid green";
    document.getElementById("quotes").style.fontFamily="Helvetica";
    
}
function yellow(){
    document.getElementById("quote-here").style.color="orange";
    document.getElementById("quotes").style.background="yellow";
    document.getElementById("quotes").style.border="2px solid orange";
    document.getElementById("quotes").style.fontFamily="arial";
}

function blue(){
    document.getElementById("quote-here").style.color="blue";
    document.getElementById("quotes").style.background="cyan";
    document.getElementById("quotes").style.border="2px solid blue";
    document.getElementById("quotes").style.fontFamily="Courier";
}

function red(){
    document.getElementById("quote-here").style.color="red";
    document.getElementById("quotes").style.background="pink";
    document.getElementById("quotes").style.border="2px solid red";
    document.getElementById("quotes").style.fontFamily="serif";
}

//Hero Converter

function convert(){
    var inp = document.getElementById("input").value;
    
    var sel=document.getElementById("mySelect").value;

    var result=0.0;

    if (sel == "to-lb"){

        result=inp*2.2046;
        document.getElementById("output").innerHTML = result + " pounds";

    }else if(sel == "to-kg"){
        result=inp*0.4536;
        document.getElementById("output").innerHTML = result + " kilograms";
    }

}

function myCalc(){
    var str=document.getElementById("input2").value;

    var arr = str.split(",");

    var max=avg=sum = 0;
    var rev= "";
    var min=arr[0];

    for(var i = 0; i < arr.length; i++){
        
        var num = parseInt(arr[i]);
        
        sum+=num;

        if(num<min){
            min=num;
        }
        if(num>max){
            max=num;
        }
        rev=arr[i]+", "+rev;

        avg=sum/arr.length;

    }

    document.getElementById("max").innerHTML="Max : " +max;
    document.getElementById("min").innerHTML="Min : " +min;
    document.getElementById("avg").innerHTML="Average : " +avg;
    document.getElementById("sum").innerHTML="Sum : " +sum;
    document.getElementById("rev").innerHTML="Reverse Order : " +rev;
}

    //Magic Box

function clearIt(){
    var textStr = document.getElementById("maintxtbox").value;
    document.getElementById("maintxtbox").value="";
}

function capIt(){
    var textStr = document.getElementById("maintxtbox").value;
    var hold = "";

    if (textStr.localeCompare(textStr.toUpperCase())==0){
        hold= textStr.toLowerCase();
    }else{
        hold= textStr.toUpperCase();
    }

    document.getElementById("maintxtbox").value= hold;
}

function sort(){
    var textStr = document.getElementById("maintxtbox").value;

    var z = textStr.split('\n');
    z = z.sort();
    document.getElementById("maintxtbox").value = z.join('\n');

} 
    
function reverse(){
    var textStr = document.getElementById("maintxtbox").value;

    var z = textStr.split('\n');

    var lines = "";

    for (var i=0; i<z.length; i++){
        var line = z[i].split(" ");
        line = line.reverse();
        line = line.join(' ');
        lines+=line + "\n";
    }

    document.getElementById("maintxtbox").value = lines;
} 
    
function stripBlank(){
    var textStr = document.getElementById("maintxtbox").value;

    var z = textStr.split('\n');

    var lines = "";

    for (var i=0; i<z.length; i++){
        if(z[i].localeCompare("")!=0){
            var line = z[i].trim();
            lines+=line + "\n";
        }
    }

    document.getElementById("maintxtbox").value = lines;
} 
    
function addNum() {
    var textStr = document.getElementById("maintxtbox").value;

    var z = textStr.split('\n');

    var lines = "";

    for (var i=0; i<z.length; i++){
        var line = (i+1)+". "+z[i];
        lines+=line + "\n";
    }

    document.getElementById("maintxtbox").value = lines;
}
    
function shuffle(){
    var textStr = document.getElementById("maintxtbox").value;
    var array = textStr.split('\n');
    var lines="";

    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    lines=array.join('\n');
    document.getElementById("maintxtbox").value = lines;

}
