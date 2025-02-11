

// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

{
    function  Area (a, b){
       let s= a*b;
        console.log(s);
        return s;
    }
    Area(2, 3);
}


// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r
{
    function circle (r){
        const PI =3.14;
         let s = PI*r*r;
        console.log(s);

        // s =Math.PI * Math.pow(r, 2);
    }
    circle(2);
}


// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

{
    function cylinder (r, h){
       let s = 2 * Math.PI * r *h;
        console.log(s);
    }
    cylinder(2, 5);
}



// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент


{
    let arrys = [5, 2, 3, 0, true, 'ttt'];

    function printArr(arr){
        for (const argument of arguments) {
            console.log(argument);
        }
    }
    printArr(arrys);
}

// #59g0IsA
// - створити функцію яка створює параграф з текстом та виводить його через document.write.
// Текст задати через аргумент


{
    let str = 'ttttt';

    function printString (string){
        document.write(`<p>${string}</p>`);
    }
    printString(str);
}


// #hOL6126
// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write.
// Текст li задати через аргумент всім однаковий

{
    let str = 'yyyyyyy';

    function ulFun (a){

        document.write(`<ul>`);
        for (let i = 0; i < 3; i++) {
            document.write(`<li>${a}</li>`);
        }
        document.write(`</ul>`);
    }
    ulFun(str);
}


// #0Kxco1edSN
// - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та
// виводить його через document.write

{
    let str = 'wwww';

    function ulFunK (a, k){

        document.write(`<ul>`);
        for (let i = 0; i < k; i++) {
            document.write(`<li>${a}</li>`);
        }
        document.write(`</ul>`);
    }
    ulFunK(str, 5);
}


// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та
// будує для них список (ul li) та виводить його через document.write


{
    let arrys = [5, 2, 3, 0, true, 'ttt'];

    function gEFoxMMO (arr){

        document.write(`<ul>`);
        for (const aElement of arr) {
            document.write(`<li>${aElement}</li>`);
        }
        document.write(`</ul>`);
    }
    gEFoxMMO(arrys);
}

// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та
// виводить їх в документ. Для кожного об'єкту окремий блок.
{
    let users = [
        {id: 'k1', name: 'olena', age: 22},
        {id: 'k2', name: 'oleg', age: 45},
        {id: 'k3', name: 'olesia', age: 21}
    ];

    function usersArr (arr){
        for (const item of arr) {
                document.write(`<h1>${item.id} ${item.name} ${item.age}</h1>`);
        }
    }
    usersArr(users);
}



//     #pghbnSB
// - створити функцію яка повертає найменьше число з масиву

{
    let arrys = [-10,1 , 1, 2, 10, -5, 6, 0];

    function minArg(arg) {
        let minA = arg[0];
        for (let i = 1; i < arg.length; i++) {
            let argElement = arg[i];
            if (minA > argElement) {
                minA = argElement;
            }
        }
        return minA;
    }

    let a = minArg(arrys);
    console.log(a);
}







// #EKRNVPM
// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13

{
    let  arr = [1,2,10];
    function sum (arr){
        let b = 0;
        for (const elem of arr) {
            b = b + elem;
        }
        return b;
    }
    let c =  sum(arr);
    console.log(c);
}

// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]


{
    console.log('*************************************************');

    function swap(arr, index0, index1){

        let b = arr[index0];
        arr[index0] = arr[index1];
        arr[index1] =  b;


       return arr;

    }
    let  a = swap([11,22,33,44],0,2);
    console.log(a);
}

//тільки сусідні міняє
{
    function swap1(arr, index1, index2){

        [arr[index1], arr[index2]] = [arr[index2], arr[index1]];

        return arr;

    }
    let  a = swap1([11,22,33,44], 1, 2);
    console.log(a);
}





// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400


// з відео про розбір домашки
{
    function exchange(sumUAH,currencyValues,EurDolar){

        let valuta;
        for (const i of currencyValues) {
            if (i.currency === EurDolar){
                valuta = i;
            }
        }
        res =  sumUAH / valuta.value;
        return res;
}

    // currencyValues = [
    //     {currency:'USD',value:25},
    //     {currency:'EUR',value:42}
    // ];

    console.log(exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD'));
}



