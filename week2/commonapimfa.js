const input = [1,2,3,4,5,6];


let a = input.map(function(i){
return i*2;
});

console.log(a);

let bodyparser = input.filter(function(i){
    if(i%2 == 0){
        return true;
    }

return false;
});

console.log(b);