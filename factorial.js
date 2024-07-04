//using recursion
function factorial(n) {
    

    if(n<=0){
        return 1;
    }

return n*factorial(n-1)
}

console.log(factorial(5));



//using normal loop

const fact=function (n) {

   let num=1;

    for(let i=1;i<=n;i++){

       num*=i
   
            }
            return num;
}

console.log(fact(5));
