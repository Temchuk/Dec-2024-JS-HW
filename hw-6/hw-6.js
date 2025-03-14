
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

{

    let coursesAndDurationArray = [
        {title: 'JavaScript Complex', monthDuration: 5},
        {title: 'Java Complex', monthDuration: 6},
        {title: 'Python Complex', monthDuration: 6},
        {title: 'QA Complex', monthDuration: 4},
        {title: 'FullStack', monthDuration: 7},
        {title: 'Frontend', monthDuration: 4}
    ]

    let sort1 = coursesAndDurationArray.sort((a1, a2) => {
        return a2.monthDuration - a1.monthDuration;
    })
    console.log(sort1);



    let sort2 = coursesAndDurationArray.filter((a1) => {
        return a1.monthDuration > 5;
    })
    console.log(sort2);


    let sort3 = coursesAndDurationArray.map((a1, a2) => {
        return {id:a2 + 1, ...a1};
    })
    console.log(sort3);

}
// ---------------------------------------------------------------------------------------------

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
{

    let coloda = [
        {cardSuit: 'spade', value: ['6', '7', '8', '9', '10', 'ace','jack','queen','king'], color: 'black'},
        {cardSuit:'diamond', value:  ['6', '7', '8', '9', '10', 'ace','jack','queen','king'], color: 'red'},
        {cardSuit:'heart', value:  ['6', '7', '8', '9', '10', 'ace','jack','queen','king'], color: 'red'},
        {cardSuit:'clubs', value:  ['6', '7', '8', '9', '10', 'ace','jack','queen','king'], color: 'black'}
        ];

    // console.log(coloda);

    function change(value,  choice) {
        const newObj = {
            '6': 6,
            '7': 7,
            '8': 8,
            '9': 9,
            '10': 10,
            'ace': 11,
            'jack': 12,
            'queen': 13,
            'king': 14
        };
        const ekvivalent= newObj[value] || 0;
        return ekvivalent > choice;
    }

function poshuk (coloda,  {mast, znachenny, color, choice } = {}) {
    coloda.forEach((karta) => {
        if (color === undefined || karta.color === color) {

            if (mast === undefined || karta.cardSuit === mast) {
                karta.value.forEach((value)=> {
                    if (znachenny === undefined || value === znachenny) {
                        if (choice === undefined || change(value, choice)) {
                            console.log(`${karta.cardSuit} ${value} ${karta.color}`);
                        }

                    }
                });
            }
        }

    });

}

    console.log("конкретна карта");
    poshuk( coloda, {mast: 'spade', znachenny: '10', color: 'black' });
    console.log("*************************");
    console.log("всі буби");
    poshuk(coloda, {mast: 'spade',  color: 'black' });
    console.log("*************************");
    console.log("всі шістки");
    poshuk(coloda, { znachenny: '6' });
    console.log("*************************");
    console.log("всі червоні карти");
    poshuk(coloda, { color: 'red' , });
    console.log("*************************");
    console.log("всі старші карти");
    poshuk( coloda, {  mast: 'spade', choice: 9 });

}

// --------------------------------------------------------------------------------------------------




//     #EP5I1UUzAX
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }

{
    let coloda = [
        {cardSuit: 'spade', value: ['6', '7', '8', '9', '10', 'ace','jack','queen','king'], color: 'black'},
        {cardSuit:'diamond', value:  ['6', '7', '8', '9', '10', 'ace','jack','queen','king'], color: 'red'},
        {cardSuit:'heart', value:  ['6', '7', '8', '9', '10', 'ace','jack','queen','king'], color: 'red'},
        {cardSuit:'clubs', value:  ['6', '7', '8', '9', '10', 'ace','jack','queen','king'], color: 'black'}
    ];

    const groupeSuit = coloda.reduce((acc, mast) => {
        const suit = mast.cardSuit;
        if (!acc[suit]) {
            acc[suit] = []; // друкує пустий масив якщо такої масті немає
        }
        acc[suit].push(mast);// додає весь обєкт масті до асс (АКУМУЛЯТОР)
        return acc;
    }, {});

    const newColoda = groupeSuit['heart'];
    console.log(newColoda);

}


// ---------------------------------------------------------

// #4LJn7zBx
// взяти з arrays.js масив coursesArray
// --написати пошук всіх об'єктів, в яких в modules є sass
// --написати пошук всіх об'єктів, в яких в modules є docker

{
    let arr = [
        {
            title: 'JavaScript Complex',
            monthDuration: 5,
            hourDuration: 909,
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
        },
        {
            title: 'Java Complex',
            monthDuration: 6,
            hourDuration: 909,
            modules: ['html',
                'css',
                'js',
                'mysql',
                'mongodb',
                'angular',
                'aws',
                'docker',
                'git',
                'java core',
                'java advanced']
        },
        {
            title: 'Python Complex',
            monthDuration: 6,
            hourDuration: 909,
            modules: ['html',
                'css',
                'js',
                'mysql',
                'mongodb',
                'angular',
                'aws',
                'docker',
                'python core',
                'python advanced']
        },
        {
            title: 'QA Complex',
            monthDuration: 4,
            hourDuration: 909,
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
        },
        {
            title: 'FullStack',
            monthDuration: 7,
            hourDuration: 909,
            modules: ['html',
                'css',
                'js',
                'mysql',
                'mongodb',
                'react',
                'angular',
                'aws',
                'docker',
                'git',
                'node.js',
                'python',
                'java']
        },
        {
            title: 'Frontend',
            monthDuration: 4,
            hourDuration: 909,
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
        }
    ];



    let sort4 = arr.filter((a1, i) => {
        return a1.modules.includes('sass');
    })
    console.log(sort4);


    let sort5 = arr.reduce((acc, arr) => {
       if (arr.modules.includes('sass')) {
           acc.arr1.push(arr);
       } else if (arr.modules.includes('docker')) {
           acc.arr2.push(arr);
       } else  {
           acc.arr3.push(arr);
       }
return acc;
    },{arr1: [], arr2: [], arr3: []});

    console.log(sort5);
}








