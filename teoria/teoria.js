





// -------------------------------------- математика------------------------
//математика
// Math.round(s);   // заокруглення до цілого
//
// s.toFixed(3); //заокреглення до 3 чисел після коми


// ***************************************************************************************************



// -------------------------------------- МАСИВИ------------------------
// масива
//
// a.forEach(i);  //перебір елементів масиву
//

// newArrayS.join("\n"); // кожен елемент масиву з нового рядка
//
//

//
// {
//     // псевдо-масив, тобто ОБ'ЄКТ. (ВИВОДИТЬ ВСІ ЗМІННІ ЯКІ ЗАПИШЕШ,
//     // НАВІТЬ ЯКШО ЇХ МЕНШЕ АБО БІЛЬШЕ ЗА ВКАЗАННІ ЗМІННІ)
//
//     function foo(a,b) {
//         console.log(arguments);
//
//     }
//     foo(20, 50, 15 );
//
// }


//
// (...arr) "розгортає" масив у список окремих значень.
//     Тобто, ...arr перетворює масив [-10, 1, 1, 2, 10, -5, 6, 0] у: -10, 1, 1, 2, 10, -5, 6, 0
//     Після цього Math.min(...arr) стає еквівалентним Math.min(-10, 1, 1, 2, 10, -5, 6, 0).

// Math.min(...arr) //мінімальне


// Замість циклу for...of використано метод find, який знаходить перший елемент масиву a.find(i)


// let arr = [];
// console.log(Array.isArray(arr)); // перевіряє чи масив є масивом

// console.log(arr.push('new element1')); // додає в кінець масиву новий елемент







// console.log(arr.unshift('!!!')); // додає в початок
// console.log(arr.push('new element1')); // додає в кінець

// console.log(arr.shift()); // видаляє з початку
// console.log(arr.pop()); //  видаляє з кінця



//arr.join(';'); // зєднує масиви через ;
// let arr2 = arr1.concat(nums); // до масиву arr1 додає масив nums


//nums.reverse() // реверс


// let arr3 = arr4.slice(0, 4); //залишив з 0 по 3 а решта викинув
//  console.log(splice(0, 4)); //видаляє прям то шо сказали (від 0 до 3) ,а решта залишить

// // let splice = concat.splice(0, 2, '!!!', '#$%^', '*&&^%$65'); (приймає 1 початок ,2 скільки ,3 заміна)


// // concat.splice(concat.indexOf(11), 1); // видаляє 1 елесмен (число 11)
// console.log(concat.includes(11)); // чи є в масиві елемент 11


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
//  сайт зі всіма методами (array.js methods)











// --------------------------------------------------------------------------------------------------------------
//стрінга

// {
//     let str = 'hello okten !!!';
//     console.log(str);
// // let s = str.concat('!!!'); // дописує в кінець рядку
// // console.log(s);
//     console.log(str.toUpperCase()); // всі з великої
//     console.log(str.toLowerCase()); // всі з малої
//     console.log(str.startsWith('hel')); // true якшо є такий початок
//     console.log(str.endsWith('en')); // true якшо є такий кінець
//     console.log(str.substring(0, 7)); // обрізає і  виводить всі букви до 7 індекса не включно
//     console.log(str.indexOf('o')); // порядковий номер з початку
//     console.log(str.lastIndexOf('o')); // порядковий номер з кінця
//     console.log(str.indexOf('o', 5)); // порядковий номер після 5 символу
//     console.log(str.charAt(8)); // який симфол під цим номером
// // console.log(str.replace('e', '!')); // замінює тільки першу яку знайшов
//     console.log(str.replaceAll('e', '!')); // замінює всі які знайшов
//     let split = str.split(' '); // розділяє по пробілу і створює  всевдомасив
//     console.log(split); // ось цей
// str.trim(); // Метод trim() видаляє всі пробіли з обох кінців стрічки, залишаючи
// лише текст без зайвих пробілів на початку та в кінці.

// console.log(concat.includes(11)); // чи є  елемент 11



// }

//-------------------------------------------------------------------------------------------------





{

    // let users = [
    //     {name: 'vasya', age: 31, status: false},
    //     {name: 'petya', age: 30, status: true},
    //     {name: 'kolya', age: 29, status: true},
    //     {name: 'olya', age: 28, status: false},
    //     {name: 'max', age: 30, status: true},
    //     {name: 'anya', age: 31, status: false},
    //     {name: 'oleg', age: 28, status: false},
    //     {name: 'andrey', age: 29, status: true},
    //     {name: 'masha', age: 30, status: true},
    //     {name: 'olya', age: 31, status: false},
    //     {name: 'max', age: 31, status: true}
    // ];
    //
    //
    // users.forEach(function (value) {
    //     console.log(value);
    // });
    //
    //
    //

    // //
    // // users.forEach(value => console.log(value));
    // //
    // // let filteredUsers = users.filter(value => value.age > 30);
    // // console.log(filteredUsers);
    // // console.log(users);
    // //
    // // let mapedUsers = users.map(function (value, index) {
    // //     return {...value, id: index + 1};
    // // });
    // // console.log(mapedUsers);
    // //
    // // users.map((value, index) => {
    // //     return {id: index + 1, name: value.name, age: value.age, status: value.status}
    // // })
    // //
    // //
    // // let find = users.find(value => value.name === 'max');
    // // console.log(find);
}







