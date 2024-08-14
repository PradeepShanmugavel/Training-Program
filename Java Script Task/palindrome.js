var str="Madam";
console.log(palindrome(str.toLowerCase()));
function palindrome(str)
{
    var flag=true;
    for(let i=0;i<str.length;i++)
    {
        if(str[i]!=str[str.length-i-1])
        {
            flag=false;
            break;
        }
    }
    if(flag==true)
        return "palindrome"
    else
        return "not palindrome"
}
