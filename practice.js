//qusetions-1:

// document.getElementById("text").innerHTML="this is the element having id as text";


//question-2:

// document.getElementsByTagName("h1")[0].innerHTML="this is the parctice";

//question-3:

// var value = document.getElementsByClassName("box")[0]
// value.style.width="200px"
// value.style.hight="200px"
// value.style.border="2px solid red"

//qusetion-4:

// document.getElementsByTagName("h1")[0].innerText="HELLO WORLD";

//question-5:

// function change(){
//     document.getElementById("container").style.flexDirection="column";
// }


//question-6:

// document.getElementById("heading").style.color="red";

//question-7:

// function Replacetext(){
//     document.getElementById("hello").innerText="Welcome to Elevation Academy";
// }

//question-8:

function clock(){
   var hours = document.getElementById("hour")
   var minutes = document.getElementById("minute")
   var seconds = document.getElementById("second")

    var time = new Date()
    var hr = time.getHours()
    var min = time.getMinutes()
    var sec = time.getSeconds()
    if(hr==0) {
        hr = 12;
    }
    if(hr>12){
        hr = hr - 12;
    }
    if(hr<10){
        hr ="0" + hr
    }
    if(min<10){
        min = "0" + min
    }
    if(sec<10){
        sec = "0" + sec
    }

hours.innerText=hr;
minutes.innerText=min;
seconds.innerText=sec;

}
setInterval(clock,1000)

//question-9:

// function checknumber(){

//     var dot = document.getElementById("container")
//     var result = dot.value;
//     document.getElementById("output").innerText=result;
// }







