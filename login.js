// problem1

let count=0;
let num=13
    for(let i=1;i<=num;i++){
        if(num%i==0){
        count++
     }
    }
    if(count==2){
        console.log("Yes");
    }
    else{
        console.log("No");
    }

//problem2

let new_string ="";
let str="manisha"
  for(let i=str.length-1;i>=0;i--){
      new_string=new_string+str[i];
 }
  
  if(new_string==str){
      console.log("Yes");
 }
 else{
      console.log("No");
 } 