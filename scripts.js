// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100
function isPrime(num) {
    for(var i = 2; i < num; i++)
        if(num % i === 0) {
           return false;
        }
        return i;
}
    var num = 0;

    while( num <= 100 ){
        if (num !== 0 && num !== 1){
            if(isPrime(num)){
                console.log(num);
            }
        }
        num++;
    }
// 2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
// 3. Товары в корзине хранятся в массиве. Задачи:
// a) Организовать такой массив для хранения товаров в корзине;
// b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
var basket = [
    product1 = [
        price = 1900.33,
        title = 'IPhone XR',
        category = 'apple'
    ],
    product2 = [
        price = 1500.34,
        title = 'Samsung S51',
        category = 'Samsung'
    ],
    product3 = [
        price = 1400.88,
        title = 'Huawei 42',
        category = 'Huawei'
    ],
    product4 = [
        price = 1243.22,
        title = 'Sony 35',
        category = 'Sony'
    ],
];

function countBasketPrice(obj){
    var sum = 0;
    for (key in obj){
       sum += obj[key][0];
    }
    return sum;
}

console.log(countBasketPrice(basket));

// 4.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
//     for(…){// здесь пусто}
//
for (var i = 0; i <= 9; console.log(i++) ){ }
// 5) *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
// x
// xx
// xxx
// xxxx
// xxxxx
let result = '';

for (let i = 0; i <= 20; i++){
    result += 'x';
    console.log(result);
}