function swap(num1, num2){

    let  temp = num1.value;
    num1.value = num2.value;
    num2.value = temp;
   
}
var num1 = {value : 0};
var num2 = {value : 0};

num1.value = parseInt(prompt("Enter the first number: "));
num2.value = parseInt(prompt("ENter the second number: "));

swap(num1, num2);

console.log("Swap: ",num1.value,"------",num2.value);