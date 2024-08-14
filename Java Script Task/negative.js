let array = [-1,2,3,-2,4,5];
let arr = check(array);
console.log(arr);

function check(array) {
    let temp = 0;
    let count=0;
    let newArray = [...array];
    for (let i = 0; i < newArray.length ; i++) {
        if(newArray[i]<0 && newArray[i]!="null")
        {
            for(let j=i+1;j<=newArray.length;j++)
            {
            newArray[j-1]=newArray[j];
        }
    }
    }
    return newArray;
}
