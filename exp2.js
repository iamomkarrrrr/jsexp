function Table(){
    const num=parseFloat(document.querySelector('#table').value);
    const result=document.querySelector('#text');
    if (isNaN(num)) {
        result.innerText = "Please Enter Valid Input";
        return;
    }
    for(let i=1;i<=10;i++){
        result.innerText+=`${num} X ${1} = ${num*i}\n`;
    }

}