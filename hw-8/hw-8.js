
// #AiN5CoUQ
// Створити функцію, яка робить глибоку копію об'єкту.
// Додати перевірки на undefined, null, NaN.
// Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,які в нього були до цього моменту.
{
    let user = {
        name: 'Olena',
        age: 22,
        skills: ['uuu', 'tttt'],
        greteeng: function aaa (){
            console.log(`hello ${this.name}`)
        }

    };


    // if (value == null) або if (value === null || value === undefined)
    function hasNull(value) {
        if (value == null || Number.isNaN(value)) {
            return true;
        }

        if (value && typeof value === 'object')  {
            for (const key in value) {
                if (hasNull(value[key])) {
                    return true;
                }
            }
        }

        return false;
    }
    console.log(hasNull(user)); // true


    function copy(arr) {
        let copySt = JSON.stringify(arr);
        return copyPar = JSON.parse(copySt);
    }
    copy(user);


    function  perevirkaFun (arr){
    for (let i in arr){

        if (typeof arr[i] === "function"){
            // console.log( `${i}:`, arr[i]);

            copyPar.greteeng = arr[i];
            copyPar.greteeng();
        }
    }
    console.log( copyPar);
}
    perevirkaFun(user);


}



// #iz6emEsP2BA
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration
//     Зробити все ВИКЛЮЧНО за допомоги інлайн конструкції




{
    let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];


    // let mapedCourses = coursesAndDurationArray.map(function (value, index) {
    //     return {id: index, ...value};
    // });
    // console.log(mapedCourses);

    let mapedCourses = coursesAndDurationArray.map((value, index) => ({ id: index, ...value }));
    console.log(mapedCourses);

}

