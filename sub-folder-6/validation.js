// // const number = 23;
const number = '23';
// console.log(typeof number);
if(typeof number === 'number'){
    console.log('Value is a number');
}else{
    console.log('Value is not a number');
}

const teachers = ['raju', 'shakil', 'arman'];
const students = {name: 'Tahira', age: 4};
console.log(typeof teachers);
console.log(typeof students);
console.log(Array.isArray(teachers));

// const value = 22;
// const value = '22';
// const value = 'Siam';
// const value = {};
// const value = [];
const value = [5];
console.log(isNaN(value));
