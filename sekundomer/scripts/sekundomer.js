// Реализуем простой секундомер. Нужно добавить в блок с id=`simpleTimerContainer` секундомер. В блоке будут:
//  - параграф, в котором будем выводить текущее время секундомера
//  - кнопка "Старт" - при нажатии запускаем секундомер
//  - кнопка "Сброс" - при нажатии сбрасываем секундомер.
// Нам нужно добавить кнопки "Пауза", "Возобновить". Первая будет приостанавливать, но не сбрасывать секундомер, а вторая - возобновлять его работу.

const startCounterBtnEl = document.querySelector('.start')
const stopCounterBtnEl = document.querySelector('.stop')
const textCounterEl = document.querySelector('.text')
let interval = null; // Эта переменная будет использоваться для хранения идентификатора интервала

startCounterBtnEl.addEventListener('click', () => {
    interval = setInterval( () => {
    textCounterEl.innerText = +textCounterEl.innerText + 1 //0 1 2...
    })
}, 1000);

stopCounterBtnEl.addEventListener('click', () => {
    if (interval) { 
    //  Это условие проверяет, установлен ли идентификатор интервала. Если да, то останавливается интервал с помощью clearInterval(), и значение текстового счетчика сбрасывается обратно на "0".
    clearInterval(interval);
    textCounterEl.innerText = '0';
    }
});


const pauseCounterBtnEl = document.querySelector('.pause')
const renewCounterBtnEl = document.querySelector('.renew')

pauseCounterBtnEl.addEventListener('click', () => {
    clearInterval(interval); 
    // clearInterval(с переменной) используется в для остановки выполнения кода, который был запущен с переменной=setInterval()
});


renewCounterBtnEl.addEventListener('click', () => {
    
    interval = setInterval( () => {
    textCounterEl.innerText = +textCounterEl.innerText + 1
    })

});


// Да, тут бы не завредило ограничение - то ли делать кнопку disabled, когда таймер запущен, или же ввести дополнительную переменную (флаг), который будет это контролировать. Так получается, что при каждом нажатии на ренью, у Вас создается ЕЩЕ один интервал