let personarray = ["abhi","patidar","mukati"];
pers = personarray[0];
console.log(pers);
const ages = [21,22,23,24,25];
for(let i=0;i<ages.length;i++){
    if(ages[i]%2 == 0){
        console.log("even");
    }else{
        console.log("odd");
    }
}
let max = ages[0];
for(let i=0;i<ages.length;i++){
    if(ages[i] > max ){
        max = ages[i];
    }
}
console.log(max);



const user1={
    firstname:"Harkirat",
    gender :"male"
}
console.log(user1.firstname);

const allusers = [{
    firstname: "harkirat", 
    gender: "male"
},{
    firstname: "ram", 
    gender: "male"
},{
    firstname: "sita", 
    gender: "female"
}]

for(let i =0 ; i<allusers.length;i++){
    if(allusers[i].gender=="female"){
        console.log(allusers[i].firstname);
    }
}