

function getSum(){
    let valueFrontend = document.querySelector("#Frontend").value;
    let valueBackend = document.querySelector("#Backend").value;
    let valueDesign = document.querySelector("#Design").value;

    let frontInput = +document.querySelector(".frontInput").value;
    let backInput = +document.querySelector(".backInput").value;
    let desInput = +document.querySelector(".desInput").value;
   
    let sumFront = valueFrontend * frontInput;
    let sumBack = valueBackend * backInput;
    let sumDes = valueDesign * desInput;


    let sumCourses =  sumFront + sumBack + sumDes;

    if (sumCourses > 3000) {
        let finalPrice = sumCourses * 30/100; 

        document.querySelector(".finalPrice").innerText = 'С учетом скидки в 30% окончательная цена для Вас = $ ' + finalPrice;
    }

    document.querySelector(".sumCourse").innerText = 'Уважаемый студент, цена выбранных курсов = $  ' + sumCourses;

};



// 
// Задача состоит в создании формы выбора курсов для студента, где студент может выбрать различные модули: Frontend, Backend и Design,
// а затем выбрать конкретные курсы из каждого модуля. Каждый курс имеет свою стоимость. Студент также должен указать количество приобретаемых курсов.


// После выбора курсов и указания количества, при нажатии кнопки должна отобразиться общая стоимость выбранных курсов.
// Если общая стоимость превышает $3000, студенту предоставляется 30% скидка, и должна отобразиться окончательная сумма со скидкой.


// Например, если студент выбрал курсы JavaScript, PHP и Photoshop, каждый со своей стоимостью, и указал количество 12,
// то должна быть рассчитана общая стоимость (сумма стоимостей каждого выбранного курса, умноженная на количество) и отображена на экране.
// Если общая стоимость превышает $3000, то должна быть применена скидка в размере 30%, и должна быть показана окончательная сумма со скидкой.


// Например, сообщение на экране может быть: "Уважаемый студент, вы должны заплатить $5400". Если общая стоимость превышает $3000,
// то сообщение может быть: "Уважаемый студент, вы должны заплатить $5400, но вы получаете 30% скидку, и окончательная сумма составляет $3780".