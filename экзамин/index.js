// * // ИСХОДНЫЕ ДАННЫЕ НЕ ТРОГАТЬ!*

let successful = []

let unSuccessful = []

let taxes = 0

let taxesMax = {}

let taxesMin = {}

// * // Реальные данные 2021*

let bank = [

    {

        name: 'Apple',

        budget: 1000000,

        tax: 28,

        expensesPerYear: [

            {
                title: 'Salaries',
                total: 125000
            },

            {
                title: 'Utilites',
                total: 18000,
            },

            {
                title: 'Rent',
                total: 258000
            }

        ]

    },

    {

        name: 'Microsoft',

        budget: 988000,

        tax: 21,

        expensesPerYear: [

            {

                title: 'Salaries',

                total: 148000

            },

            {

                title: 'Utilites',

                total: 124000,

            },

            {

                title: 'Rent',

                total: 314000

            }

        ]

    },

    {

        name: 'HP',

        budget: 609000,

        tax: 14,

        expensesPerYear: [

            {

                title: 'Salaries',

                total: 414000

            },

            {

                title: 'Utilites',

                total: 19000,

            },

            {

                title: 'Rent',

                total: 114400

            }

        ]

    },

    {

        name: 'Xiomi',

        budget: 889500,

        tax: 17,

        expensesPerYear: [

            {

                title: 'Salaries',

                total: 318000

            },

            {

                title: 'Utilites',

                total: 14000,

            },

            {

                title: 'Rent',

                total: 169000

            }

        ]

    },

    {

        name: 'Samsung',

        budget: 889500,

        tax: 12,

        expensesPerYear: [

            {

                title: 'Salaries',

                total: 650400

            },

            {

                title: 'Utilites',

                total: 29000,

            },

            {

                title: 'Rent',

                total: 212000

            }

        ]

    },

]

// * // 1. Высчитать месячные траты, создав ключ expensesPerMonth в объектах*

// * // 2. Высчитать отношение трат в месяц к месячному бюджету в процентах, создав ключ procent в объектах. Например компания в месяц зарабатывает 100,000, а тратит 25,000, значит ее ключ procent = 25%*

// * // 3. Сохранить successful и unsuccessful и добавить туда фирмы, вычитав налог tax*

// * // 4. Сохранить в переменной taxes общее количество налогов со всех компаний. Например все платят по 20,000 в месяц. В итоге taxes = 100,000*

// * // 5. Сохранить в переменных taxesMax и taxesMin те, компанию которая больше и меньше всех платит налоги*

// * // 6. Добавить ключ totalMoney в каждой компании. Эта переменная показывает сколько в итоге осталось денег в компании после вычета всех налогов и трат*

// * // * Писать весь код в функции `setup()`*

// * // ТРИ ОЦЕНКИ. ЧИСТОТА КОДА, ЛОГИКА РАБОТЫ, УНИКАЛЬНОСТЬ КОДА*








// * // ИСХОДНЫЕ ДАННЫЕ НЕ ТРОГАТЬ!*

let discount = prompt('Какая скидка?')

let totalSale = 0

let total = 0

let max = {}

let min = {}

let average = 0

let arr = [

    {

        name: 'Milk',

        price: 3.25

    },

    {

        name: 'Coffee',

        price: 1.5

    },

    {

        name: 'IceCream',

        price: 7.85

    },

    {

        name: 'Tomatos',

        price: 4.14

    },

    {

        name: 'Onion',

        price: 2.25

    }

]

let arr_sale = []

// * // 1. Сохранить самый дорогой товар в переменную`max`*

// * // 2. Сохранить самый дешевый товар в переменную`min`*

// * // 3. Сохранить общую цену без скидок в переменную`total`*

// * // 4. Сохранить общую цену со скидкой в переменную`totalSale`*

// * // 5. Сохранить элементы из массива arr с обновленной ценой (цена со скидкой) в переменную `arr_sale`*

// * // 6. Сохранить в переменной`average` среднюю цену всех продуктов без скидок*

// * // * Писать весь код в функции `setup()`*

// * // ТРИ ОЦЕНКИ. ЧИСТОТА КОДА, ЛОГИКА РАБОТЫ, УНИКАЛЬНОСТЬ КОДА*

const setup = () => {

max = arr.reduce((a,b) =>{
    if(price_a < price_b){

        return a
    }else{
        return b
    }

})
   
max = arr.reduce((a,b) =>{
    if(price_a > price_b){

        return a
    }else{
        return b
    }

})
   


console.log(arr);

}

setup()


















