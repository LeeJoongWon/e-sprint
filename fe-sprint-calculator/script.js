const calculator = document.querySelector('.calculator'); // calculator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const buttons = calculator.querySelector('.calculator__buttons'); // calculator__keys 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.

const firstOperend = document.querySelector('.calculator__operend--left'); // calculator__operend--left 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const operator = document.querySelector('.calculator__operator'); // calculator__operator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const secondOperend = document.querySelector('.calculator__operend--right'); // calculator__operend--right 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const calculatedResult = document.querySelector('.calculator__result'); // calculator__result 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.

function calculate(n1, operator, n2) {
    let result = 0;
    // TODO : n1과 n2를 operator에 따라 계산하는 함수를 만드세요.
    // ex) 입력값이 n1 : '1', operator : '+', n2 : '2' 인 경우, 3이 리턴됩니다.
    let num1 = Number(n1);
    let num2 = Number(n2);
    // result = num1 + operatorNum + num2;
    if (operator === '+') {
        result = num1 + num2;
    } else if (operator === '-') {
        result = num1 - num2;
    } else if (operator === '*') {
        result = num1 * num2;
    } else if (operator === '/') {
        result = num1 / num2;
    }
    return String(result);
}

let isOperator = false;
buttons.addEventListener('click', function (event) {
    // 버튼을 눌렀을 때 작동하는 함수입니다.

    const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
    const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
    const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
    // ! 위 코드(Line 19 - 21)는 수정하지 마세요.

    if (target.matches('button')) {
        if (action === 'number') {
            if (isOperator) {
                if (secondOperend.textContent === '0') {
                    secondOperend.textContent = '';
                }
                secondOperend.textContent += buttonContent;
            } else {
                if (firstOperend.textContent === '0') {
                    firstOperend.textContent = '';
                }
                firstOperend.textContent += buttonContent;
            }
        }

        if (action === 'operator') {
            operator.textContent = buttonContent;
            isOperator = true;
        }

        if (action === 'decimal') {
            //소수점
            if (isOperator) {
                secondOperend.textContent += '.';
            } else {
                firstOperend.textContent += '.';
            }
        }

        if (action === 'clear') {
            firstOperend.textContent = '0';
            secondOperend.textContent = '0';
            operator.textContent = '+';
            calculatedResult.textContent = '0';
            isOperator = false;
        }

        if (action === 'calculate') {
            calculatedResult.textContent = calculate(
                firstOperend.textContent,
                operator.textContent,
                secondOperend.textContent
            );
        }
    }
});

// ! Advanced Challenge test와 Nightmare test를 위해서는 아래 주석을 해제하세요.

const display = document.querySelector('.calculator__display--for-advanced'); // calculator__display 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
let firstNum = '';
let operatorForAdvanced = '';
let previousKey = '';
let previousNum = '';
let result = '';
let isDecimalEmpty = true;

buttons.addEventListener('click', function (event) {
    // 버튼을 눌렀을 때 작동하는 함수입니다.

    const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
    const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
    const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
    // ! 위 코드는 수정하지 마세요.
    // ! 여기서부터 Advanced Challenge & Nightmare 과제룰 풀어주세요.
    if (target.matches('button')) {
        if (action === 'number') {
            if (firstNum === '0') firstNum === '';

            //TODO 코드중복 해결 필요함
            if (result !== '' && operatorForAdvanced !== '') {
                firstNum += buttonContent;
                display.textContent = firstNum;
            } else {
                firstNum += buttonContent;
                display.textContent = firstNum;
            }
        }

        if (action === 'operator') {
            // 프리비어스 키 가 버튼 콘텐트 와 다르고 오퍼레이터 어드밴스가 비어있지 않을때
            if (previousKey !== buttonContent && operatorForAdvanced === '') {
                previousNum = firstNum;
                firstNum = '';
                isDecimalEmpty = true;
            } else if (firstNum !== '' && previousNum !== '') {
                /* 퍼스트 넘이 비어있지 않고  프리비어스키가 비어있지 않을때
                나이트메어 마지막 문제 해결용
                1,0,0,.,.,1,2,5,2,+,1,2,+,1,5,-,-,2,3,-,1,4,4,2,/,2,3,/,/,1,2,*,2,3,Enter
                를 연속으로 누르면 -111.48956666666668이(가) 화면에 표시되어야 합니다.
            */
                result = calculate(previousNum, operatorForAdvanced, firstNum);
                isDecimalEmpty = true;
                display.textContent = result;
                previousNum = result;
                firstNum = '';
            }

            //기본적으로 프리비어스키,오퍼레이터 어드밴스에  버튼 콘텐트 덮어씌우기
            previousKey = buttonContent;
            operatorForAdvanced = buttonContent;
        }

        if (action === 'decimal') {
            //데시멀이 비어있을때만 실행 (중복방지)
            if (isDecimalEmpty) {
                if (firstNum === '') firstNum = '0';
                firstNum += '.';
                display.textContent = firstNum;
                isDecimalEmpty = false;
            }
        }

        if (action === 'clear') {
            //모든 변수 초기화값으로
            display.textContent = '0';
            firstNum = '';
            operatorForAdvanced = '';
            previousNum = '';
            previousKey = '';
            result = '';
            isDecimalEmpty = true;
        }

        if (action === 'calculate') {
            //TODO 코드정리 필요함 if문을 수정하면 가속성이 좋아질듯
            //기본적으로 프리비우스넘이 존재할떄만 실행
            if (previousNum !== '') {
                //프리비우스 키가 엔터일때 - 엔터 연속입력 처리 ex> Enter Enter Enter...
                if (previousKey === buttonContent) {
                    // 리졸트가 비어있지 않을때만 실행 - 계산후 엔터 엔터 반복할때 처리 ex) 3 * 3 Enter Enter....
                    if (result !== '') {
                        result = calculate(
                            result,
                            operatorForAdvanced,
                            previousNum
                        );
                        isDecimalEmpty = true;
                        display.textContent = result;
                    }
                }
                //펄스트넘이 비어있을때만 실행 - 숫자 1번 입력 , 연산자 입력 후 엔터일떄 처리 ex) 3*Enter
                else if (firstNum === '') {
                    result = calculate(
                        previousNum,
                        operatorForAdvanced,
                        previousNum
                    );
                    isDecimalEmpty = true;
                    display.textContent = result;
                } else {
                    //그 외 실행
                    result = calculate(
                        previousNum,
                        operatorForAdvanced,
                        firstNum
                    );
                    isDecimalEmpty = true;
                    display.textContent = result;
                }
                previousKey = buttonContent;
            }
        }
    }
});
