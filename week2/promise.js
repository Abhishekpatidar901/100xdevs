function myownsettimeout(callback, duration){
    setTimeout(function(){
        callback();
    },duration);
}

function promisemysettimeout(duration){
    const p = new Promise(function(resolve){
        setTimeout(function(){
            resolve();
        },duration);
    });
    return p;
}

const ans = promisemysettimeout(100);
ans.then(function(){
    console.log("timeout is done");
});


//promise chaining 
function promisifiedTimeout(duration){
    const p = new Promise(function(resolve){
        setTimeout(resolve,duration);
    })
    return p;
}
promisemysettimeout(1000).then(function(){
    console.log("first is done");
    return promisemysettimeout(2000)
}).then(function(){
    console.log("second is done")
});