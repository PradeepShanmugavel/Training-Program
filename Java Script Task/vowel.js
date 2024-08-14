var str="Iam Big Gamer Sakthivel";
var num=vowel(str.toLowerCase());
console.log(num);
function vowel(str)
{
    var count=0;
    for(let i=0;i<str.length;i++)
    {
        if(str[i]=='a'||str[i]=='e'||str[i]=='i'||str[i]=='o'||str[i]=='u')
            count++;
    }
    return count;
}