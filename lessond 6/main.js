function startGeme() {

    let start1 = confirm('хочиш сыграть в игру угадай число');

    
        let makeNumber = Math.floor(Math.random() * (100 - 0 + 0)) + 0
        alert(makeNumber)


    
    let attempts = 10;


    if (start1 == true) {
        
        start();
       
    } else {
        alert('игра не была начата чтобы начать перезагрузите страницу');
        return
    }

    function start() {
        getNumber();


    };

    function getNumber() {
        let number = prompt('Угадай число от 1 до 100')
        if (number === null) {
            alert('ига завершена чтобы начать занова перезагрузите страницу');
            return
        };

        function colAttempts() {
            attempts--
        };

        function resultat() {
            function b() {
                if (attempts == 0) {
                    alert('закончились попытки')
                    let newGeme = confirm('хочеш попробовать еще')
                    if (newGeme == true) {
                        attempts = 10
                        let makeNumber = Math.floor(Math.random() * (100 - 0 + 0)) + 0


                        start()
                    } else {
                        return
                    };

                };
                let resume = confirm('хочеш продолжить играть');

                if (resume == true) {
                    start();
                } else {
                    alert('нет');
                    return;
                }
            };
            if (number > makeNumber) {
                colAttempts();
                alert(`Загаданное число меньше осталось попыток ${attempts}`);
                b();


            } else if (number < makeNumber) {
                colAttempts();
                alert(`Загаданное число больше осталось попыток ${attempts}`);
                b()
            } else if (isNaN(number)) {
                colAttempts();
                alert(`Введи число!  осталось попыток ${attempts}`);
                b();
            } else {
                alert(`Поздравляю, Вы угадали!!!`)
                let makeNumber = Math.floor(Math.random() * (100 - 0 + 0)) + 0
                attempts = 10

                start()
                b()
            };
        };
        return resultat();

    };
    resultat();



}
startGeme();