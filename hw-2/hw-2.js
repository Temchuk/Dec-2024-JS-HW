





// Масиви та об'єкти
// #67kfznmiMl
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

{
    let arr = [999, 1, 222, 'kkk', true, 55, 88, 77, 6, 2];
    console.log(arr);
    console.log(arr.length)
    console.log(arr[0]);
    console.log(arr[1]);
    console.log(arr[2]);
    console.log(arr[3]);
    console.log(arr[4]);
    console.log(arr[5]);
    console.log(arr[6]);
    console.log(arr[7]);
    console.log(arr[8]);
    console.log(arr[9]);
    console.log('');

    arr[arr.length] = 6666666;
    console.log(arr);








}

// ---------------------------------------------
// #LARqoUj5I
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
{
    let obj1 = {
        title: 'TTT1',
        pageCount: 65,
        genre: 'roman'
    };
    let ob2 = {
        title: 'TTT2',
        pageCount: 64,
        genre: 'roman'
    };
    let ob3 = {
        title: 'TTT3',
        pageCount: 61,
        genre: 'roman'
    };
console.log(obj1)

}

// ------------------------
//     #sA3Gg1sCp
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
// Поле "автори" - являється  масивом. Кожен автор має поля name та age.

{
    let obj = {
        title: 'TTT3',
        pageCount: 61,
        genre: 'roman',
        authors: [
            {
                name:'AA',
                age: 55
            },
            {
                name:'BB',
                age: 66
            }
        ]
    };
    console.log(obj)

    let obj1 = {
        title: 'TTT3',
        pageCount: 61,
        genre: 'roman',
        authors: [
            {name:'AA', age: 55},
            {name:'BB', age: 66}
        ]
    };
    console.log(obj1)

    let obj2 = {
        title: 'TTT3',
        pageCount: 61,
        genre: 'roman',
        authors: [{name:'AA', age: 55}, {name:'BB', age: 66}]
    };
    console.log(obj2)
}


// ---------------------------------------
//     #jCHFnEbdmFd
// - Створити масив з 10 об'єктами які описують сутніть "користувач".
// Поля: name, username,password. Вивести в консоль пароль кожного користувача

{
    let users =[
        {name: 'g', username: 'iiii', password: 'tyfyu12'},
        {name: 'gtg', username: 'iiiihhyhgc', password: 'tyfyurttyt12'},
        {name: 'gser', username: 'iithrfthii', password: 'tyfythbnu12'},
    ];

    for (let i=0; i <= users.length-1; i++){
        console.log(`${users[i].name}: ${users[i].password}`);
    }


}


// --------------------------
// #coYydZuaeEB
// - описати масив, в якому буде зберігатись інформація про температуру вранці,
// вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати.
// Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням
// вичключаємо одразу


{

    let arr = [
        { day: "Понеділок", morning: 18, afternoon: 25, evening: 20 },
        { day: "Вівторок", morning: 17, afternoon: 24, evening: 19 },
        { day: "Середа", morning: 19, afternoon: 26, evening: 21 },
        { day: "Четвер", morning: 20, afternoon: 27, evening: 22 },
        { day: "П'ятниця", morning: 19, afternoon: 25, evening: 20 },
        { day: "Субота", morning: 18, afternoon: 23, evening: 18 },
        { day: "Неділя", morning: 17, afternoon: 22, evening: 17 }
    ];

    for (let i of arr){
    console.log(`${i.day}: morning:${i.morning}, afternoon:${i.afternoon}, evening:${i.evening}`);
    }
    // то саме
    for (let i=0; i <= arr.length-1; i++){
        console.log(`${arr[i].day}: morning:${arr[i].morning}, afternoon:${arr[i].afternoon}, evening:${arr[i].evening}`);
    }
    // то саме
    for (let i in arr){
        console.log(`${arr[i].day}: morning:${arr[i].morning}, afternoon:${arr[i].afternoon}, evening:${arr[i].evening}`);
    }

}
// -------------------------------
// Логічні розгалуження:
//
//     #bAUsaq6LI
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
//
// #3ckURgvs
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
//
// #UMoNq4biWGe
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
//
// #KzrtqyQ
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//
//     #uwsz1RnTQJ1
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
//
//         #iBvqtjEm
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
//
//     #awLXL6TBzg
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".