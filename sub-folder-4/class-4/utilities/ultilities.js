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

