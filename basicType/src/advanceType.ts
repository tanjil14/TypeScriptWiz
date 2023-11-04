{// Type Assertion :as

let random:any;

//assign string:
random ="I have to learn advance type script";
 // random. // its not show the suggestion or properties of string when use include . (dot)
 // so we can use here type assertion to declare the type string

const upperCase:string=(random as string).toUpperCase();
console.log(upperCase);

   // assign number :

   random =4;
   const precision=(random as number).toFixed();
   console.log(precision);
 // assign array :
 random=['Tanjil','Ahmed',20,40];
 (random as []).forEach((i)=>console.log(i))

 type LUser={
    name:string;
    age:number;
 }

 random ={name:"Tanjil",age:26};
 const age=(random as LUser).age;
 const name=(random as LUser).name;


 const getKgToGm=(value?:string | number):string |number|undefined=>{
    if(typeof value==="string"){
        const convertedValue = parseFloat(value) * 1000;
        return `converted value :${convertedValue}`;
    }if(typeof value==="number"){
        return value * 1000;
    }
    
 }
 const result1:string=getKgToGm("10") as string;
 const result2:number=getKgToGm(20) as number;

}