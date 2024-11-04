

function areatri() {
    const base = parseFloat(document.querySelector('#base').value);
    const height = parseFloat(document.querySelector('#height').value);
    const result = document.querySelector('#trians');

    if (isNaN(base) || isNaN(height)) {
        result.innerText = "Please enter valid numbers.";
    } else {
        const area = 0.5 * base * height.toFixed(2);
        result.innerText = `The area of the triangle : ${area}`;
    }
}
function arearec(){
    const len=parseFloat(document.querySelector('#length').value);
    const bre=parseFloat(document.querySelector('#width').value);
    const result=document.querySelector('#recans');
    if(isNaN(len)||isNaN(bre)){
        return result.innerText="Please Enter Valid Input";
    }else{
        const ans=len*bre.toFixed(2);
        return result.innerText=`The area Of an Rectangle :${ans}`;
    }
}

let btn=document.querySelector('#btn');
let result=document.querySelector('#textarea');
btn.addEventListener('click',function(){
    let r=parseFloat(document.querySelector('#cir').value);
    if(isNaN(r)){
        return result.innerText="Please Enter Valid Input";
    }else{
        const anns=Math.PI*r*r;
        return result.innerText= `Area of a Circle:${anns.toFixed(2)}`;
    }

});