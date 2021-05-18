//  FUNCTION DECLARATION

function num1 (number1, number2){
    console.log(number1 + number2);
}
num1(5, 5);


//  FUNCTION EXPRESSION

const num2 = function(number3, number4){
    console.log(number3 + number4);
};

num2(5, 5);

//   ARROW FUNCTION
const num3 = (number5, number6) => {
    console.log(number5 + number6);
};
num3(5, 5);