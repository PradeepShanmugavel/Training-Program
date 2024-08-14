let array=[11,3,1,5,21,65,31,85];
let temp=0;
for(let i=0;i<array.length;i++){
    for(let j=0;j<array.length;j++)
    {
        if(array[i]<array[j])
        {
            temp=array[i];
            array[i]=array[j];
            array[j]=temp;
        }
    }
}
console.log(array);