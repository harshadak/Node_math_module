module.exports = function() {
    return {
        add: function(num1, num2) {
            let sum = num1 + num2;
            console.log(sum);
            return sum;
        },
        multiply: function(num1, num2) {
            let prod = num1 * num2;
            console.log(prod);
            return prod; 
        },
        square: function(num) {
            let square = num * num;
            console.log(square);
            return square; 
        },
        random: function(num1, num2) {
            let rand = Math.floor(Math.random() * (num2 - num1 + 1) + num1);
            console.log(rand);
            return rand;
        }
    }
};