/*Доповнити функцію createNewUser() методами підрахунку віку користувача та його паролем.

Технічні вимоги:
Візьміть виконане домашнє завдання номер 5 (створена вами функція createNewUser()) і доповніть її наступним функціоналом:
При виклику функція повинна запитати дату народження (текст у форматі dd.mm.yyyy) і зберегти її в полі birthday.
Створити метод getAge() який повертатиме скільки користувачеві років.
Створити метод getPassword(), який повертатиме першу літеру імені користувача у верхньому регістрі, з'єднану з прізвищем (у нижньому регістрі) та роком народження.
(наприклад, Ivan Kravchenko 13.03.1992 → Ikravchenko1992.
Вивести в консоль результат роботи функції createNewUser(), а також функцій getAge() та getPassword() створеного об'єкта.*/

let newUser = {
    firstName: "",
    lastName: "",
    birthdayInput: "",
    getLogin: function() {
        newUser.loginName = (newUser.firstName[0] + newUser.lastName).toLowerCase();
        //newUser.loginName.toLowerCase();
        return this.loginName;
    },
    getAge: function(){                 // Homework 6: метод getAge() який повертатиме скільки користувачеві років
        // to get just year from the string "birthdayInput"
        newUser.birthdaySliceYear = Number(newUser.birthdayInput.slice(6));

        /* =================================================================================
        To get only month if we want to count difference in month too:
        newUser.birthdaySliceMonth = Number(newUser.birthdayInput.slice(3,6));
        if we want to find the current month:
        let nowMonth = new Date().getMonth();
        =================================================================================== */

        // to get age: to find difference between the current year and birthday year
        let nowYear = new Date().getFullYear();                     // to get current  year
        return nowYear - newUser.birthdaySliceYear;

        /* =================================================================================
        extra for finding difference in month:
        if (nowMonth > newUser.birthdaySliceMonth) {
            newUser.differenceMonth = (nowMonth + 1) - newUser.birthdaySliceMonth;
        }else{
            newUser.differenceMonth = newUser.birthdaySliceMonth - (nowMonth + 1);
        }

        If we want to print out the difference in both year and month:
        if (newUser.differenceMonth != "0") {
            newUser.age = alert("You are " + newUser.differenceYear + " years and " + newUser.differenceMonth + " months old");
        }else{
            newUser.age = alert("You are " + newUser.differenceYear + " years old");
        }
        ================================================================================= */
    },

    // Homework 6: метод getPassword(), який повертатиме, як приклад: Ivan Kravchenko 13.03.1992 → Ikravchenko1992.
    getPassword: function(){
        return ((this.loginName[0]).toUpperCase()) + (this.loginName.slice(1)) + this.birthdaySliceYear;
    },
};

function createNewUser(){
    newUser.firstName = prompt("Name: ", "");
    newUser.lastName = prompt("Surname: ", "");
    // Homework 6: запитати дату народження (текст у форматі dd.mm.yyyy) і зберегти її в полі birthday.
    do{
        newUser.birthdayInput = prompt("Your date of birthday in the format dd.mm.yyyy : ", "");
    } while (newUser.birthdayInput == null || newUser.birthdayInput == '');
    return newUser;
}

createNewUser();
newUser.getLogin();

console.log(Object.entries(newUser));        // Homework 6: Результат роботи функції createNewUser ()

let age = newUser.getAge();                 // Homework 6: в консоль результат роботи функції getAge()
console.log("Age is: " + age);

let password = newUser.getPassword();       // Homework 6: в консоль результат роботи функції getPassword()
console.log("Password is: " + password);