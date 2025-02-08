

// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

{
    function  Area (a, b){
       let s= a*b;
        console.log(s);
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

    function ul (a){

        document.write(`<ul>`);
        for (let i = 0; i < 3; i++) {
            document.write(`<li>${a}</li>`);
        }
        document.write(`</ul>`);
    }
    ul(str);
}


// #0Kxco1edSN
// - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та
// виводить його через document.write




// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та
// будує для них список (ul li) та виводить його через document.write




// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та
// виводить їх в документ. Для кожного об'єкту окремий блок.




//     #pghbnSB
// - створити функцію яка повертає найменьше число з масиву
// #EKRNVPM
// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13



// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]



// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400