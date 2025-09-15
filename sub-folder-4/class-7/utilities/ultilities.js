function getInputValueByID(id){
    // console.log(id);

    // const value = document.querySelector('#'+id).value;
    const value = document.getElementById(id).value;
    // console.log(value);
    // console.log(typeof value);

    const convertedValue = parseInt(value);
    // console.log(convertedValue);

    return convertedValue;
}

function getInnerTextByID(id){
    const value = document.getElementById(id).innerText;
    const convertedValue = parseInt(value);
    return convertedValue;
}

function setInnerTextByID_Value(id, value){
    // console.log(id, value);
    document.getElementById(id).innerText = value;
}

function handleToggle(id, status){
    document.getElementById(id).style.display = status;
}

