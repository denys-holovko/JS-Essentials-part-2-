function totalSum() {
    var total = 0;
    for (var i = 1;i <= 3;i++){
        total+=i;
    }
    console.log(total);
}
totalSum();
console.log("\n");

function totalSum2() {
    var total = 0;
    for (var i = 20;i <= 220;i++){
        total+=i;
    }
    console.log(total);
}
totalSum2();
console.log("\n");

function evenNumbers(){
    for(var i = 1;i <= 20;i++){
        if(i%2===0){
            continue;
        }
        console.log(i);
    }
}
evenNumbers();
console.log("\n");

function evenNumbers2(){
    for(var i = 1 ;i<= 20;i++){
        if(i%2!==0){
            console.log(i);
        }
    }
}
evenNumbers2();
console.log("\n");

function oddNumbers(){
    var i = 10;
    while(i<=30){
        if(i%2==0){
        console.log(i);
    }
    i++;
}
}
oddNumbers();
console.log("\n");

function Num(){
    for(var i = 1;i<=15;i++){
        if(i===10){
            break;
        }
        console.log(i);
    }
}
Num();
console.log("\n");

function Num2(){
    var i = 0;
    while(i<5){
        console.log(`number ${i}  =)`);
        i++;
    }
}
Num2();


function Ask(){
    var user;
    do
    {
       user=parseInt(prompt("Введіть число більше, ніж 100: "));
    }
    while(user<100||isNaN(user));
    alert(user);
}

Ask();

function Ask2(){
     var user =parseInt(prompt("Введіть число більше, ніж 100:"));
     while(user<100||isNaN(user)){
         user =parseInt(prompt("Введіть число більше, ніж 100:"));
  }
     alert(user);
}
Ask2();
console.log("\n");

function Loop() {
    var del=  '#';
    for(var i = 0;i <= 8;i++){
        console.log(del);
        del+=del[i];
    }

}

Loop();
