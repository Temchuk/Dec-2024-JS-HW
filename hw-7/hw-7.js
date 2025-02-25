




// #XjJuucOMR0
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//


{
    function User(id, name, surname, email, phone) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
    }

    let users = [
        new User(11, 'hffh', 'kkk', 'uiui', '+3646525'),
        new User(1, 'hffh', 'kkk', 'uiui', '+3646525'),
        new User(14, 'hffh', 'kkk', 'uiui', '+3646525'),
        new User(12, 'hffh', 'kkk', 'uiui', '+3646525'),
    ];

    // console.log(users);


// #2ikXsE2WiKZ
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати ,
// залишивши тільки об'єкти з парними id (filter)
//
    let sort1 = users.filter((value, index) => {
        return value.id % 2 === 0;

    })
    console.log(sort1);


// #pOeHKct
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//


    let sort2 = users.sort((a1, a2) => {
        return a1.id - a2.id;

    })
    console.log(sort2);
}

// #nkMXISv
// - створити конструктор для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом
// зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

{

    function Client(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }

    let clients = [
        new Client(1, "вуа", "рлртир", "tth", "+380991234567", ["Замовлення 1", "Замовлення 2", "Замовлення 3","Замовлення 4"]),
        new Client(2, "ее", "рлил", "hhh", "+380991234567", ["Замовлення 1", "Замовлення 2"]),
        new Client(3, "щщ", "Пбд ьтб", "ddd", "+380991234567", ["Замовлення 1", "Замовлення 2", "Замовлення 3"]),

    ]
    console.log(clients);



// #8abtVjRv
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості
// товарів в полі order по зростанню. (sort)

    let sort3 = clients.sort((a1, a2) => a1.order.length - a2.order.length);
    console.log(sort3);

}






// #vV9a6584I5
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник,
// рік випуску, максимальна швидкість, об'єм двигуна.
// додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в
// поточний об'єкт car
//
//
{
    function Car(model, manufacturer, year, speed, engine) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.speed = speed;
        this.engine = engine;
    }

    let cars = [
        new Car('BMV', 'jjjj', '2000', '200', '1.9'),
        new Car('WV', 'jrrr', '2001', '180', '2'),
        new Car('Opel', 'jttt', '2002', '160', '2.1'),
        new Car('Reno', 'uuj', '2003', '220', '1.8'),
    ];

    function drive(arr) {
        arr.forEach((i) => {
            console.log(`їдемо зі швидкістю ${i.speed} на годину`);
        });
    }

    drive(cars);

    function info(arr) {
        arr.forEach((i) => {
            console.log(`model:${i.model}, manufacturer:${i.manufacturer}, year :${i.year}, speed:${i.speed}, engine:${i.engine}`);
        });
    }

    info(cars);

    function increaseMaxSpeed(arr, newSpeed) {
        arr.forEach((i) => {
            console.log(`їдемо зі швидкістю ${+i.speed + newSpeed} на годину`);
        });
    }

    increaseMaxSpeed(cars, 50);

    function changeYear(arr, newValue) {
        arr.forEach((i) => {
            i.year = newValue;
            console.log(`model:${i.model}, рік випуску ${newValue}`);
        });
    }

    changeYear(cars, 2010);


    function addDriver(arr, driver) {
        arr.forEach((i) => {
            i.driver = driver;
        });
    }

    addDriver(cars, 'ivan');
    console.log(cars);

}




// переписано
// {
//     function Car(model, manufacturer, year, speed, engine) {
//
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.year = year;
//         this.speed = speed;
//         this.engine = engine;
//
//
//         this.drive = function () {
//             console.log(`їдемо зі швидкістю ${this.speed} на годину`);
//         };
//
//
//         this.info = function () {
//             console.log(`model: ${this.model}, manufacturer: ${this.manufacturer}, year: ${this.year}, speed: ${this.speed}, engine: ${this.engine}`);
//         };
//
//
//         this.increaseMaxSpeed = function (newSpeed) {
//             console.log(`їдемо зі швидкістю ${+this.speed + newSpeed} на годину`);
//         };
//
//
//         this.changeYear = function (newValue) {
//             this.year = newValue;
//             console.log(`model: ${this.model}, рік випуску ${newValue}`);
//         };
//
//
//         this.addDriver = function (driver) {
//             this.driver = driver;
//         };
//     }
//
//
//     let cars = [
//         new Car('BMV', 'jjjj', '2000', '200', '1.9'),
//         new Car('WV', 'jrrr', '2001', '180', '2'),
//         new Car('Opel', 'jttt', '2002', '160', '2.1'),
//         new Car('Reno', 'uuj', '2003', '220', '1.8'),
//     ];
//
//
//     cars.forEach((car) => {
//         car.drive();
//         car.info();
//         car.increaseMaxSpeed(50);
//         car.changeYear(2010);
//         car.addDriver('Ivan');
//     });
//
//
//     console.log(cars);
// }















// #5kla3yMpgp
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
//


// в класах є методи, а не функції
{
    class Car {
        constructor(model, manufacturer, year, speed, engine) {
            this.model = model;
            this.manufacturer = manufacturer;
            this.year = year;
            this.speed = speed;
            this.engine = engine;
        }


        info() {
            console.log(`model: ${this.model}, manufacturer: ${this.manufacturer}, year: ${this.year}, speed: ${this.speed}, engine: ${this.engine}`);
        }


        drive() {
            console.log(`їдемо зі швидкістю ${this.speed} на годину`);
        }


        increaseMaxSpeed(newSpeed) {
            console.log(`їдемо зі швидкістю ${+this.speed + newSpeed} на годину`);
        }


        changeYear(newValue) {
            this.year = newValue;
            console.log(`model: ${this.model}, рік випуску ${newValue}`);
        }


        addDriver(driver) {
            this.driver = driver;
        }
    }


    let cars = [
        new Car('BMV', 'jjjj', '2000', '200', '1.9'),
        new Car('WV', 'jrrr', '2001', '180', '2'),
        new Car('Opel', 'jttt', '2002', '160', '2.1'),
        new Car('Reno', 'uuj', '2003', '220', '1.8'),
    ];


    cars.forEach((car) => {
        car.drive();
        car.info();
        car.increaseMaxSpeed(50);
        car.changeYear(2010);
        car.addDriver('Ivan');
    });


    console.log(cars);
}



//************************** пробне********************************
// {
// class Car {
//
//
//     constructor(model, manufacturer, year, speed, engine) {
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.year = year;
//         this.speed = speed;
//         this.engine = engine;
//     }
//
//     // якщо
//     // drive () {
//     //         console.log(`їдемо зі швидкістю ${this.speed} на годину`);
//     // };
//     // то
//     // const cars = new Car ('BMV', 'jjjj', '2000', '200', '1.9');
//     // і вивід
//     // cars.drive();
//
//
//
//     // якщо
//     // static info(cars) {
//     //     cars.forEach((i)  => {
//     //         console.log(`model:${i.model}, manufacturer:${i.manufacturer}, year :${i.year}, speed:${i.speed}, engine:${i.engine}`);
//     //     });
//     // }
//     // то масив
//     //і вивід
//     // Car.info(cars);
//
//
//
//
//
//     // якщо
//     // info(arr) {
//     //     arr.forEach((i) => {
//     //         console.log(`model:${i.model}, manufacturer:${i.manufacturer}, year :${i.year}, speed:${i.speed}, engine:${i.engine}`);
//     //     });
//     // }
//     // то масив
//     //і вивід
//     // cars[0].info(cars);
//
// }
//
//
//
//     // let cars = [
//     //     new Car('BMV', 'jjjj', '2000', '200', '1.9'),
//     //     new Car('WV', 'jrrr', '2001', '180', '2'),
//     //     new Car('Opel', 'jttt', '2002', '160', '2.1'),
//     //     new Car('Reno', 'uuj', '2003', '220', '1.8'),
//     // ];
//
//
//     // cars.drive();
//     // Car.info(cars);
//     // cars[3].info(cars);
//
// }
//*********************************кінець пробне***************************************************





// #zg6Fifnqig
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//
//
//


{
    class Popeluhka {
        constructor(name, age, size) {
            this.name = name;
            this.age = age;
            this.size = size;
        }

    }

  let  popeluhkuuuuuu = [
      new  Popeluhka ('uuu1', '21', '50'),
      new  Popeluhka ('uuu2', '22', '49'),
      new  Popeluhka ('uuu3', '23', '38'),
      new  Popeluhka ('uuu4', '24', '55'),
      new  Popeluhka ('uuu5', '25', '22'),
      new  Popeluhka ('uuu6', '26', '55'),
      new  Popeluhka ('uuu7', '27', '36'),
      new  Popeluhka ('uuu8', '28', '40'),
      new  Popeluhka ('uuu9', '29', '37'),
      new  Popeluhka ('uuu10', '30', '55'),
  ];

    // console.log(popeluhkuuuuuu);


    class Prunc {
        constructor(name, age, size) {
            this.name = name;
            this.age = age;
            this.size = size;
        }
    }


let prunccccc = new Prunc ('tt', '31', '38');


function find1 (arr1, arr2){
    arr1.forEach((i) => {
        if (i.size === arr2.size)
        {
            console.log(`name:${i.name}, age:${i.age}, size:${i.size}`);
        }
    });
}
find1(popeluhkuuuuuu, prunccccc);




    function find2(arr1, arr2) {
        const found = arr1.find((i) => i.size === arr2.size);
        if (found) {
            console.log(`name:${found.name}, age:${found.age}, size:${found.size}`);
        }
    }


    find2(popeluhkuuuuuu, prunccccc);

}



// #gsKLAsNWM
// *Через Array.prototype. створити власний foreach, filter


{
    function My (name, age) {
    this.name = name;
    this.age = age;
    }

My.prototype.size = function (){
        return `my ${this.name}`;
};
let user = new My ('olena', '22');

console.log(user);
console.log(user.size());

}


//чат писав
{
    Array.prototype.myForEach = function (callback) {
        if (typeof callback !== 'function') {
            throw new TypeError('Callback must be a function');
        }
        for (let i = 0; i < this.length; i++) {
            callback(this[i], i, this);
        }
    };


    let numbers = [1, 2, 3];
    numbers.myForEach((num, index) => {
        console.log(`Елемент ${num} має індекс ${index}`);
    });



    Array.prototype.myFilter = function (callback) {
        if (typeof callback !== 'function') {
            throw new TypeError('Callback must be a function');
        }
        const result = [];
        for (let i = 0; i < this.length; i++) {
            if (callback(this[i], i, this)) {
                result.push(this[i]);
            }
        }
        return result;
    };




    let evenNumbers = numbers.myFilter((num) => num % 2 === 0);
    console.log(evenNumbers); // [2]



}