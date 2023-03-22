let fname:string = "jay";
let age:number = 30
let isWorking:boolean = false

console.log(`name =  ${fname.toUpperCase()}`)

//any & unknow
let lname:any ="jay"
lname=false

function formatNumber(num:number){
    return num.toFixed(2)
}
let amount = 50.12345
formatNumber(amount)

let money:unknown = 50.1234
money="50.12345"
if(typeof money === "number"){
    console.log(formatNumber(money))
}
//type assi