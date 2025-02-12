// Тут ті самі завдання, що і в занятті про базові функції, але зробити їх потрібно за допомоги стрілочних функцій
//


// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
{
    let myFunc = (a, b) => a * b;
    console.log(myFunc(5, 3));
}

// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r
{
    let myCircle = (r) => (Math.PI * Math.pow(r, 2)).toFixed(3);
    console.log(myCircle(5));
}

// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
{
    let myArea = (r,h) => (2 * Math.PI * r *h).toFixed(3);
    console.log(myArea(5,4));
}

// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент
{
    let myArray = [5, 2, 3, 0, true, 'ttt'];
    let printArray = (arr) =>   arr.forEach((i) => {console.log(i);});
    printArray(myArray);
}

// {
//     let myArray = [5, 2, 3, 0, true, 'ttt'];
//     let printArray = (arr) => {
//         arr.forEach((i) => {
// //             console.log(i);
// //         });
//     };
//     printArray(myArray);
// }


// #59g0IsA
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
{
    let myText = (arg) => `<p>${arg}</p>`;
    document.write(myText('arg'));
}

// #hOL6126
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

{
    let myList = (arg) => {
        document.write(`<ul>`);
        for (let i = 0; i < 3; i++) {
            document.write(`<li>${arg}</li>`);
        }
        document.write(`</ul>`);
    };
    myList('list');
}

// #0Kxco1edSN
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

{
    {
        let myList = (arg, i) => {
            document.write(`<ul>`);
            for (let k = 1; k <= i; k++) {
                document.write(`<li>${arg} ${k}</li>`);
            }
            document.write(`</ul>`);
        };
        myList('list', 5);
    }
}

// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

{
        let array = [5, 2, 3, 0, true, 'ttt'];

        let myList = (arr) => {
            document.write(`<ul>`);
            for (let k = 0; k < arr.length; k++) {
                document.write(`<li>${arr[k]}</li>`);
            }
            document.write(`</ul>`);
        };
        myList(array);
}

// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

{
    let users = [
        {id: 'k1', name: 'olena', age: 22},
        {id: 'k2', name: 'oleg', age: 45},
        {id: 'k3', name: 'olesia', age: 21}
    ];
    let usersArr = (arr) => {
        for (const item of arr) {
            document.write(`<h1>${item.id} ${item.name} ${item.age}</h1>`);
        }
    }
    usersArr(users);
}

//     #pghbnSB
// - створити функцію яка повертає найменьше число з масиву

{
    let array = [-10,1 , 1, 2, 10, -5, 6, 0];

    let minArg = (arr) => {
        let minA = arr[0];
        for (let i = 1; i < arr.length; i++) {
            let argElement = arr[i];
            if (minA > argElement) {
                minA = argElement;
            }
        }
        return minA;
    };
    console.log(minArg(array));
}

//чат написав
// {
//     let array = [-10, 1, 1, 2, 10, -5, 6, 0];
//     let minArg = (arr) => Math.min(...arr);
//     let result = minArg(array);
//     console.log(result);
// }

// #EKRNVPM
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13

{
    let  arr = [1,2,10];
    let sum = (arr) => {
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
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

{
    let swap = (arr, index0, index1) =>{

        let b = arr[index0];
        arr[index0] = arr[index1];
        arr[index1] =  b;

        return arr;

    }
    let  a = swap([11,22,33,44],0,2);
    console.log(a);
}

//чат написав
// {
//     const swap = (arr, index1, index2) => {
//         // Створюємо копію масиву, щоб уникнути мутації оригінального масиву
//         const newArr = [...arr];
//
//         // Міняємо місцями елементи
//         const temp = newArr[index1];
//         newArr[index1] = newArr[index2];
//         newArr[index2] = temp;
//
//         return newArr; // Повертаємо новий масив
//     };
//
//     const a = swap([11, 22, 33, 44], 0, 2);
//     console.log(a); // Виведе: [33, 22, 11, 44]
// }


// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

{
    let exchange = (sumUAH, currencyValues, EurDolar) => {
        let valuta;
        for (const i of currencyValues) {
            if (i.currency === EurDolar) {
                valuta = i;
                break;
            }
        }
        return sumUAH / valuta.value;
    };
    console.log(exchange(10000, [{ currency: 'USD', value: 25 }, { currency: 'EUR', value: 42 }], 'USD'));
}
//чат написав
// {
//     let exchange = (sumUAH, currencyValues, EurDolar) => {
//         let valuta = currencyValues.find((i) => i.currency === EurDolar);
//         return sumUAH / valuta.value;
//     };
//     console.log(exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'USD'));
// }













