
// #dFeorS3m7u
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
{
    let myArray = ['hello world', 'lorem ipsum', 'javascript is cool'];
    let printArray = (arr) =>   arr.forEach((i) => {console.log(i, i.length);});
    printArray(myArray);
}
//-------------------------------------------------------------------------------------------------------

// #8lld9HMxXWB
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
{
let str1 = 'hello world';
let str2 = 'lorem ipsum';
let str3 = 'javascript is cool';
      console.log(str1.toUpperCase()); // всі з великої
      console.log(str2.toUpperCase()); // всі з великої
      console.log(str3.toUpperCase()); // всі з великої

    //або
    let myArray = ['hello world', 'lorem ipsum', 'javascript is cool'];
    let printArray = (arr) =>   arr.forEach((i) => {console.log(i.toUpperCase());});
    printArray(myArray);
}
// ----------------------------------------------------------------------------------------------------------


// #ClDsAm7xba7
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
{
    let myArray = ['hello world', 'lorem ipsum', 'javascript is cool'];
    let printArray = (arr) =>   arr.forEach((i) => {console.log(i.toLowerCase());});
    printArray(myArray);
}
//-----------------------------------------------------------------------------------------------------

// #0b89BkYZwu
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
{
    let str = ' dirty string   ';
    let cleanedStr = str.trim();

    console.log(cleanedStr);
}
//--------------------------------------------------------------------------------------------------

//     #bfoJuse4ZzP
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
//
{
    let str = 'Ревуть воли як ясла повні';
    let arr = str.split(' '); // розділяє по пробілу і створює  всевдомасив
    console.log(arr); // ось цей
}
//--------------------------------------------------------------------------------------------------

// #Rbr5kEQ
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві
// на стрінгові.
{
    let numbers = [10,8,-7,55,987,-1011,0,1050,0];
    let arr = numbers.map(num => num.toString());
    console.log(arr);
    // console.log(typeof arr[0]);
}
//----------------------------------------------------------------------------------------------------

// #5hqyKTfmc
// - створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого
// до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//
// ==========================
{
    let nums = [11,21,3];

    let sortNums = (array,direction) => {
        if (direction === 'ascending'){
            console.log(nums.sort((a, b) => {
                if (a < b) {
                    return -1;
                }
                if (a > b) {
                    return 1
                }
                if (a === b) {
                    return 0
                }
            }));

        } else if (direction === 'descending'){
            console.log(nums.sort((a, b) => {
                if (a < b) {
                    return 1;
                }
                if (a > b) {
                    return -1
                }
                if (a === b) {
                    return 0
                }
            }));
        }
}
    sortNums(nums, 'descending');
}
//-------------------------------------------------------------------------------------------------------


// #yo06d74c1C
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}




// =========================
//     #bolvdlhP
// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }
//
// =========================
//







//     #EP5I1UUzAX
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// =========================





// #4LJn7zBx
// взяти з arrays.js масив coursesArray
// --написати пошук всіх об'єктів, в яких в modules є sass
// --написати пошук всіх об'єктів, в яких в modules є docker










