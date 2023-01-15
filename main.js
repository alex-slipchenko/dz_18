
const MyDiv = document.querySelectorAll('.form_input');

// document.querySelector('.buy').addEventListener('click', () => {
//     document.querySelector('#myForm').style.display = 'flex';
// })


vol.addEventListener('input', () => rangeCount.value = `${vol.value}${': Кількість продукції'}`);
function myValid(form) {
    let rezult = true;
    // ===============================================================
    function removeError(input) {
        const parent = input.parentNode;
        if (parent.classList.contains('error')) {

            parent.querySelector('.error-lable').remove();
            parent.classList.remove('error');

        }
    }
    // ===============================================================
    function createError(input, text) {
        const parent = input.parentNode;
        const errorLable = document.createElement('lable');
        errorLable.classList.add('error-lable');
        errorLable.textContent = text;

        parent.classList.add('error');
        parent.append(errorLable);
    }
    // ===============================================================

    const allInputs = form.querySelectorAll('[name]');
    const myBio = form.querySelector('input');
    // const myRange = document.querySelector('#vol');
    // const myTextArea = document.querySelector('#story');
    // console.log(myBio);
    for (const input of allInputs) {
        removeError(input);

        if (input.value === '' || /^\s+$/.test(input.value) || input.value === '0') {
            createError(input, 'Поле не заполнено');
            rezult = false;
        }
        // проверка на нечисло в ФИО=============
        if (!isNaN(myBio.value) && myBio.value) {
            removeError(myBio);
            createError(myBio, 'Введите коректно свои данные Вы ввели число');
            rezult = false;
        } else if (!/^(\s?[А-ЯІЇЄ][а-яіїє]+){3}$/.test(myBio.value)) {
            removeError(myBio);
            createError(myBio, 'Введите свои ФИО корректно');
            rezult = false;
        }
        // проверка на email=============
        if (!/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(myEmail.value)) {
            removeError(myEmail);
            createError(myEmail, 'Введите существующий адрес почты');
            rezult = false;
        }

        // проверка на телефон=============
        const phoneRegexp = /^([()]?\d( |-)?\d( |-)?\d( |-)?[()]?\d( |-)?\d( |-)?\d( |-)?\d( |-)?\d( |-)?\d( |-)?\d( |-)?)|(\+?\d{2}[()]?\d{3}( |-)?[()]?\d( |-)?\d( |-)?\d( |-)?\d( |-)?\d( |-)?\d( |-)?\d( |-)?)$/;
        if (!phoneRegexp.test(myPhone.value)) {
            removeError(myPhone);
            createError(myPhone, 'Укажите правильно телефон');
            rezult = false;
        }



        // проверка на yTextArea=============
        if (myTextArea.value.length < 10 && myTextArea.value.length > 0) {
            removeError(myTextArea);
            createError(myTextArea, `Минимальная длинна от 10 символов,Вы ввели всего: ${myTextArea.value.length}`);
            rezult = false;
        }

    }

    return rezult;
}


const myFio = document.querySelector('input');
const mySelect = document.querySelector('.form_input select');
const myPost = document.querySelector('.form_input input[name="number"]');
const myRadioBut = document.querySelectorAll('.form_input input[name="myMethod"]');
const myEmail = document.querySelector('.form_input input[name="myEmail"]');
const myPhone = document.querySelector('.form_input input[name="myPhone"]');
const myRange = document.querySelector('#vol');
const myTextArea = document.querySelector('#story');
const myModal = document.querySelector('.modal')

myForm.addEventListener('submit', function (event) {
    event.preventDefault();
    if (myValid(this) == true) {
        myModal.classList.remove('is-visible')

    }
});