//logical oprators
if(3==3 && 4==4){
    document.write("the conition is true.") 
}
if (3==3 && 4==8){
    document.write("the statement is false and will not be printed")
}
const age =21;
if(age>18){
alert("old enough to register");
} else {
    alert("old enough to enter");
}
const x =8;
if (x<10) {
    document.getElementById("demo2").innerHTML = "x is less than 10";
}else if(x>10){
    document.getElementById("demo2").innerHTML="x is greater than 10;"
}else{
    document.getElementById("demo2").innerHTML ="x is 10, it is neither greater or less";
}

