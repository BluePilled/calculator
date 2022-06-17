// .jsCalc
function displayTxt(txt){
 document.getElementById("myText").innerHTML = txt;
}

function displayNums(str){
  if (str == "clear"){
   document.getElementById("myText").innerHTML = "";
  } else if (str == "solve"){
    document.getElementById("myText").innerHTML = solve(document.getElementById("myText").innerHTML);
  } else {
  let oldNum = document.getElementById("myText").innerHTML;
  let newNum = document.getElementById(str).value;
  displayTxt(oldNum+newNum);
  }
}

function solve(str){
 let arr = str.split(" ")
 let sum = parseInt(arr[0])
 for (let i = 1; i < arr.length; i+=2){
  if(arr[i] == "+"){ 
   sum += parseInt(arr[i+1])
  } else if(arr[i] == "-"){
   sum -= parseInt(arr[i+1])
  } else if(arr[i] == "x"){
   sum *= parseInt(arr[i+1])
  } else if(arr[i] == "/"){
   sum /= parseInt(arr[i+1])
  }
 }
 return sum
}

console.log(solve("1 + 20"))



// .load .jsCalc.js