// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
//
// let arr = [];
// arr[0] = 1;
// arr[1] = 'hello';
// arr[2] = 'world';
// arr[5] = 69;
// arr[9] = true;
//
// arr[3] = 'js';
//
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[5]);
// console.log(arr[9]);
//

// - Створити 3 об'єкти які описують книги.
// Поля об'єкту : title ,pageCount, genre.

// let book = {
//     title: 'story',
//     pageCount: 256,
//     genre: 'comedy',
// }

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив.
// Кожен автор має поля name,age

// let book = {
//     title: 'story',
//     pageCount: 256,
//     genre: 'comedy',
//     authors: [
//         {
//             name: 'Mihail',
//             age: 22
//         },
//         {
//             name: 'Vasya',
//             age: 34
//         },
//         {
//             name: 'Martin',
//             age: 28
//         }
//     ]
// }
//

// - Створити масив з 10 об'єктами які описують сутніть "користувач".
// Поля: name, username,password.
// Вивести в консоль пароль кожного користувача

let arr = [
    {
        title: 'story',
        pageCount: 256,
        genre: 'comedy',
        authors: [
            {
                name: 'Mihail',
                age: 22
            },
            {
                name: 'Vasya',
                age: 34
            },
            {
                name: 'Martin',
                age: 28
            }
        ]
    },

    {
        title: 'story',
        pageCount: 256,
        genre: 'comedy',
        authors: [
            {
                name: 'Mihail',
                age: 22
            },
            {
                name: 'Vasya',
                age: 34
            },
            {
                name: 'Martin',
                age: 28
            }
        ]
    },

    {
        title: 'story',
        pageCount: 256,
        genre: 'comedy',
        authors: [
            {
                name: 'Mihail',
                age: 22
            },
            {
                name: 'Vasya',
                age: 34
            },
            {
                name: 'Martin',
                age: 28
            }
        ]
    }

]

console.log(arr[0].title);
console.log(arr[0].authors);
console.log(arr[0].authors[2]);
// console.log(arr[0].authors[2].age);
console.log(arr[0].authors[2]['age']);