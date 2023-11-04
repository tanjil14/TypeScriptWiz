
// we can easily define type all premitive and non premitive data.

// interface only use non premitive data;
type User1 ={
    name:string,
    age:number
}

interface User2{
    name:string,
    age:number
}

// const user1:User1={
//     name:"Anis",
//     age:10
// }
const user2:User2={
    name:"Anis",
    age:10
}

// if we need intersection or extend property then we can use both

type UserWithRole1=User1 & {
    role:boolean
}
// use & intersection to add extra propery 
const user1:UserWithRole1={
    name:"Anis",
    age:10,
    role:true
}
// if we use interface 
interface UserWithRole2 extends User1 {
    role:boolean
}
// use & intersection to add extra propery 
const user3:UserWithRole2={
    name:"Anis",
    age:10,
    role:true
}

// in array 
type userArray=number[]
const user:userArray=[20,30]
interface userArray1{
    [index:number]:number;
}
const user4:userArray1=[20]
// in function 
// type Add=(num1:number,num2:number)=>number
// if i declare it in interface 
interface Add{
(num1:number,num2:number):number
}
const add:Add=(num1,num2)=>num1+num2;
