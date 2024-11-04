function removeArrayElement() {
    const arrayInput = document.getElementById("arrayInput").value;
    const elementToRemove = document.getElementById("elementInput").value;
    let array = arrayInput.split(',').map(item => item.trim()); 
    const index = array.indexOf(elementToRemove);
    if (index !== -1) {
    array.splice(index, 1);
    document.getElementById("result").innerText = `Array after removal:
    [${array.join(', ')}]`;
    } else {
    document.getElementById("result").innerText = "Element Not Found!";
    }
    }
    