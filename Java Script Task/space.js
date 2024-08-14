var str="Iam Big Gamer Sakthivel";
var str1=remove(str);
console.log(str1);
function remove(str)
{
    var count=0,result=[];
    for(let i=0;i<str.length;i++)
    {
        if(str[i]!=' ')
            result[count++]=str[i];
    }
    return result.join("");
}