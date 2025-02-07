




// #dYQNrBV
// Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log

{
    console.log('- Створити змінні. Присвоїти кожному з них значення: \'hello\',\'owu\',\'com\', \'ua\', 1, 10, -999, 123, 3.14, 2.7, 16, true, false. Вивести кожну змінну за допомогою: console.log');

    let a = 'hello';
    let b = 'owu';
    let c = 'com';
    let d = 'ua';

    let e;
    e = 1;

    // КОНСТАНТИ З ВЕКЛИКОЇ  БУКВИ І НЕ ПЕРЕВИЗНАЧАЮТЬСЯ
    const F = 10;

    let g = true;


    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);

    console.log(e);

    console.log(F);

    console.log(g);


// конкатенації
    console.log('a' + 'b');
    console.log(a + ' ' + b);


    console.log(e + F);

    console.log(a + F + e);

    console.log(e + F + a);

    console.log(e + a + F);


    let x = 'ddddd';
    let y = 'uuuu';
    console.log(x, y);



// -----------

    {
        console.log('');
        let a = 1231123123123123123123n;
        let b = BigInt(1231123123123123123123);

        console.log(a);
        console.log(b);
        console.log('');
    }

// -----------




}

// -------------------------------------------------------------------------------------------------------

// #6Qb97gsv
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ.
// З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)


{
    console.log('');
    console.log('- Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З\'єднати їх в одну змінну person (Не об\'єкт, просто за допомоги конкатенації)');
    let firstName = 'Олена';
    let middleName = 'Олегівна';
    let lastName = 'Темчук';

    let person = firstName + ' ' + middleName + ' ' + lastName;
    console.log(person)

    console.log(`${firstName} ${middleName} ${lastName}`)
}

// ------------------------------------------------------------------

// #4N0y5tufA
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;

{
    console.log('');
    console.log('- За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль. let a = 100; let b = \'100\'; let c = true;');

    let a = 100;
    let b = '100';
    let c = true;

    console.log(typeof a)
    console.log(typeof b, b)
    console.log(typeof c, c)


    // конвертація
    {   console.log('');
        console.log(parseInt('10500.6ggg'));
        console.log(parseFloat('10500.6ggg'));
        console.log(+'10500.6ggg');


        console.log(!!0); //false
        console.log(!!-5); //true

        console.log(!!"-5"); //true
        console.log(!!"0"); //true
        console.log(!!""); //false

        console.log(true +''); //стрінга
        console.log(+true ); //цифра
        console.log(100 - true); //99





        console.log('');
    }



}

// ------------------------------------------------------------


// #ruUtWDUI
// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям,
// По-Батькові та роками. та вивести в консоль

{
    console.log('');
    console.log('- Додаткове для тих хто цікавився prompt`oм. За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль');

    let name = prompt( 'enter your name');
    console.log(name);

    let middlename = prompt('enter your middlenam');
    console.log(middlename);

    let age = +prompt('enter your age');
    console.log(age);
    console.log(typeof age)

}


