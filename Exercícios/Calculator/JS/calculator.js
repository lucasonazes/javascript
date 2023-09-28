function createCalculator() {
    return {
        display: document.querySelector('.display'),


        start() {
            this.btnClick();
            this.pressEnter();
            this.pressBackSpace();
        },

        btnClick() {
            document.addEventListener('click', e => {
                const el = e.target;

                if(el.classList.contains('btn-num')) {
                    this.btnToDisplay(el.innerText);
                }
                if(el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }
                if(el.classList.contains('btn-del')) {
                    this.del();
                }
                if(el.classList.contains('btn-eq')) {
                    this.startCalculation();
                }
            });
        },

        pressBackSpace() {
            this.display.addEventListener('keyup', e => {
                if(e.keyCode === 8) {
                    e.preventDefault();
                    this.clearDisplay();
                }
            });
        },

        pressEnter() {
            this.display.addEventListener('keyup', e => {
                if(e.keyCode === 13) {
                    this.startCalculation();
                }
            });
        },

        btnToDisplay(value) {
            this.display.value += value;
        },

        startCalculation() {
            let calculation = this.display.value;

            try {
                calculation = eval(calculation);

                if(!calculation) {
                    alert('Invalid Operation');
                    return;
                }

                this.display.value = String(calculation);
            } catch(e) {
                alert('Invalid Operation');
                return;
            }
        },

        del() {
            this.display.value = this.display.value.slice(0,-1);
        },

        clearDisplay() {
            this.display.value = '';
        }
    };
}

const calculator = createCalculator();
calculator.start();