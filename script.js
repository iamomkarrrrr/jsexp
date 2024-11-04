function reverse(){
    let result=document.querySelector('#text');
    let str=document.querySelector('#str').value;
    let s='';
    for(let i=str.length-1;i>=0;i--){
         s+=str[i];
    }
    return result.innerText=`${s}`;
}

function add(){
    let str=document.querySelector('#st').value;
    let str1=document.querySelector('#st1').value;
    let str2=document.querySelector('#st3').value;
    let result=document.querySelector('#text1');
    const newString = str.replace(str1, str2);
    return result.innerText=`${newString}`;
}
function isPalindrome(str) {
    const normalizedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedStr = normalizedStr.split('').reverse().join('');
    return normalizedStr === reversedStr;
}

function palin() {
    const input = document.querySelector('#sr').value;
    const resultText = document.querySelector('#text2');
    if (isPalindrome(input)) {
        resultText.innerText = `"${input}" is a palindrome.`;
    } else {
        resultText.innerText = `"${input}" is not a palindrome.`;
    }
}