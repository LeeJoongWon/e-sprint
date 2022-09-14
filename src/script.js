// 동영상 강의에 나온 코드를 그대로 실습하세요
// TODO : DOM으로부터 필요한 엘리먼트를 불러오세요.

// 아이디 엘리먼트 불러오기
const elInputUserNameMessage = document.querySelector('#username');
const elSuccessMessage = document.querySelector('.success-message');
const elFailureMessage = document.querySelector('.failure-message');

// 비밀번호 엘리먼트 불러오기
const elPassword = document.querySelector('#password');
const elPassword_retype = document.querySelector('#password-retype');
const elPasswordMismatchMessage = document.querySelector('.mismatch-message');
elInputUserNameMessage.onkeyup = function () {
    if (isMoreThan4Length(elInputUserNameMessage.value)) {
        //아이디 길이가 4이상일떄
        elSuccessMessage.classList.remove('hide');
        elFailureMessage.classList.add('hide');
    } else {
        //아이디 길이가 4미만일때
        elSuccessMessage.classList.add('hide');
        elFailureMessage.classList.remove('hide');
    }
};

elPassword_retype.onkeyup = function () {
    if (isMatch(elPassword.value, elPassword_retype.value)) {
        // 비밀번호가 일치할떄
        elPasswordMismatchMessage.classList.add('hide');
    } else {
        // 비밀번호가 일치하지 않을떄
        elPasswordMismatchMessage.classList.remove('hide');
    }
};

function isMoreThan4Length(value) {
    // TODO : 동영상 강의를 보고 이 함수를 완성하세요.
    return value.length >= 4;
}

function isMatch(password1, password2) {
    // TODO : 동영상 강의를 보고 이 함수를 완성하세요.
    return password1 === password2;
}
