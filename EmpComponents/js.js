// // how to make a custom map method (Polyfill of map Method ) ? 

// Array.prototype.myMap = function(cb){
//     let temp=[];
//     for(let i=0;i<=this.length;i++){
//         temp.push(cb(this[i],i,this));
//     }
//     return temp;
// }

// // how to make a custom filter method (Polyfill of filter Method ) ? 

// Array.prototype.myFilter = function(cb){
//     let temp=[]
//     for(i=0;i<=this.length;i++){
//         if(cb(this[i],i,this)){
//             temp.push(this[i]);
//         }
//     }
//     return temp;
// } 


// // how to make a custom reduce method (Polyfill of reduce Method ) ? 

// Array.prototype.myReducer = function(cb,intialValue){
//     let accumulator = intialValue;
//     let temp = [];
//     for(i=0;i<this.length;i++){
//         accumulator = accumulator ? cb(accumulator,this[i],i,this):this[i]
//     }
//     return accumulator;
// }

// let arr = [1,2,3,4]

// // arr.myMap((elm,i)=>{
// //     console.log(elm*3);
// // })

// // let datas =  arr.myFilter((elem)=>{
// //     return elem>2
// // })
 
// let data = arr.myReducer((a,b)=>{
//     return a+b;
// })
// console.log(data);


let arr = [
    {name:"karan",marks:65,deg:"BCA"},
    {name:"shivam",marks:11,deg:"BSC"},
    {name:"Aman",marks:11,deg:"BCA"}
]

// let mark = arr.filter((mark)=>{
//     return mark.marks>60
// })

// console.log(mark)

// let nameArr = arr.map((name)=>{
//     return name.name.toUpperCase();
// })

// for(i=0;i<arr.length;i++){
//     // let name = arr[i].name.toUpperCase();
//     // console.log("using for loop method",name);
//     console.log(arr[i].name.toUpperCase());
// }
// console.log(nameArr);


for(i=0;i<arr.length;i++){
    if(arr[i].marks>=60){
        console.log("the marks return by for loop",arr[i]);
    }
} 