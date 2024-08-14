let array=[1,2,3,4,5];
let temp=0;
for(let i=0;i<array.length/2;i++){
    temp=array[array.length-i-1];
    array[array.length-i-1]=array[i];
    array[i]=temp;
}
console.log(array);