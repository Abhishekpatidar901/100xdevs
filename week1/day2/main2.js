function sum(a,b, fntocall){
    let result = a+b;
    fntocall(result);
}
 
function displayresult(data){
  console.log("Result of the sum is:"+ data);
}

const ans = sum(1,2, function (data){
  console.log("Result of the sum is:"+ data);
});
//setTimeout(sum,3*1000) // call sum after 3 second

