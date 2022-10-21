# fe-sprint

코드스테이츠의 교육을 수강하면서 해결했던 sprint 모음집 입니다

이름을 클릭하면 해당 sprint로 이동합니다

# 1. [calculator](https://github.com/LeeJoongWon/fe-sprint/tree/master/fe-sprint-calculator)

실제로 작동하는 계산기를 만듭니다

* 학습 목표
  * 계산기 Github repository에 작성된 HTML, CSS를 이해할 수 있다. 
  * 두 숫자의 사칙연산을 구현할 수 있다.
  * 숫자 버튼을 눌렀을 때, 계산기의 화면에 숫자가 보여야 합니다.
  * 숫자 버튼을 여러 번 눌렀을 때, 계산기 화면에 숫자가 이어붙여져야(concatenation) 합니다.
  * 연산자 버튼을 눌렀을 때, 계산기 화면에 보이는 숫자를 따로 저장하고 계산할 준비해야 합니다.
  * Enter 버튼을 눌렀을 때, 이전에 저장한 숫자와 계산기 화면에 보이는 숫자를 계산한 결과를 화면에 보여줘야 합니다.
  * 두 정수의 사칙연산을 수행하는 calculate 함수를 작성합니다.
  * AC 버튼을 누르면 초기 상태로 돌아갈 수 있어야 합니다.

두 숫자의 사칙연산을 할 수 있는 계산기를 구현합니다.

# 2. [JavaScript Koans](https://github.com/LeeJoongWon/fe-sprint/tree/master/fe-sprint-javascript-koans)

* 목표 - JavaScript의 주요 개념인 아래의 내용에 대해 설명할 수 있어야 한다.
  * JavaScript의 타입
  * 변수 선언 키워드 let과 const
  * 화살표 함수
  * 스코프
  * 배열
  * 객체
  * spread
  * 구조분해할당

# 3. [validation-check](https://github.com/codestates-seb/fe-sprint-validation-check)

* validation-check(유효성 검사)
  * 특정 값은 반드시 입력해야 합니다. (아이디, 이메일, 비밀번호, 이름, 전화번호 등)
  * 비밀번호는 n 자릿수 이상이어야 하고, 숫자나 특수문자를 반드시 포함해야 합니다.
  * 비밀번호와 비밀번호 확인란에 입력된 문자가 동일해야 합니다.
  * 신용카드의 경우, 입력한 신용카드의 번호가 유효해야 합니다.
이런 기능을 유효성 검사(Form validation)라고 부릅니다.

* Before You Learn
  * HTML & CSS 기초
  * DOM 기초와 CRUD

* 학습 목표
  * DOM 기초 실습을 통해, 구체적인 사용법을 익힐 수 있다.
  * querySelector를 활용하여, HTML 엘리먼트 정보를 가져올 수 있다.
  * oncilck, onkeyup 속성이나 addEventListener 메서드로 이벤트 핸들러 함수를 HTML 엘리먼트에 적용할 수 있다.
  * 이벤트 핸들러 함수에서 이벤트가 발생한 곳의 정보를 확인할 수 있다.
  * 이벤트 핸들러 함수로 유효성 검사를 실행할 수 있다.
  * 유효성 검사에 필요한 기술 요소를 익힐 수 있다.
  * 유효성 검사에 필요한 HTML 엘리먼트, CSS 속성이 무엇인지 알 수 있다.
  * 엘리먼트가 화면에 표시되거나 사라지게 만들 수 있다. (display: none)
  * 유효성 검사에서 활용할 수 있는 정규 표현식의 기초 사용법에 대해 익힐 수 있다. (advanced)
  * 관심사 분리를 적용하거나, 유효성 검사 함수를 따로 분리해서 설계할 수 있다. (advanced)

# 4. [sprint-my-agora-states]

Section1에서 배운 내용을 총 동원하여 나만의 멋진 아고라 스테이츠를 만듭니다.

* 디스커션 나열 기능
  * script.js를 수정하여 agoraStatesDiscussions 배열의 데이터를 나열할 수 있게 구현합니다.
* CSS
  * 아고라 스테이츠 질문 리스트가 중앙으로 와야 합니다.
  * style.css를 수정하여 멋지고 아름답게 나만의 아고라 스테이츠를 꾸밉니다.
  *colorhunt, dribbble에서 적절한 색 조합, 디자인을 참고합니다.
* 디스커션 추가 기능
  * script.js를 수정하여 디스커션 추가 기능을 구현합니다.
  * section.form__container 요소에 새로운 아고라 스테이츠 질문을 추가할 수 있는 입력 폼을 제작합니다. 형식은 자유입니다.
  * 아이디, 본문을 입력하고 버튼을 누르면 실제 화면에 디스커션이 추가되어야 합니다.
  * agoraStatesDiscussions 배열에 추가한 데이터가 실제 쌓여야 합니다.

Advanced Challenge
* 현지 시간 적용
  * 샘플 시간을 잘 변형하여, 현지 시간에 맞게 표현합니다. (ex. 오전 10:02:17)
* 페이지네이션 기능
  * 페이지네이션에 대해서 스스로 학습합니다.
  * 한 페이지에 10개씩 디스커션이 보여야 합니다.
  * 다음 페이지로 넘어갈 수 있어야 합니다.
  * 이전 페이지로 돌아올 수 있어야 합니다.
  * 다음 페이지가 없거나, 이전 페이지가 없는 경우 페이지를 유지해야 합니다.
* 디스커션 유지 기능
  * LocalStorage에 대해서 스스로 학습하고, 새롭게 추가하는 Discussion이 페이지를 새로고침해도 유지되도록 제작합니다.
  
* Github Page 배포
  * https://leejoongwon.github.io/fe-sprint-my-agora-states/


# 1. [Beesbeesbees](https://github.com/LeeJoongWon/fe-sprint/tree/master/fe-sprint-beesbeesbees)

가장 고귀한 곤충인 꿀벌은, 일생 동안 특정 발달 단계를 하나하나 거칩니다.

각 단계에는 꿀벌이 갖는 고유한 특징이 있습니다. 이 repository에는 다양한 종류의 꿀벌 Class가 존재합니다. 

각 단계별로 꿀벌 Class가 있고, 이를 통해 class keyword를 이용한 상속을 학습합니다.

# 2. [Underbar](https://github.com/LeeJoongWon/fe-sprint/tree/master/fe-sprint-underbar)

고차 함수의 기본적인 사용법을 이해 해야됩니다.

콜백 함수를 전달하여 사용할 수 있어야 합니다.

클로저 함수를 리턴하여 활용할 수 있어야 합니다.

... (spread syntax)를 사용하여 전달인자(arguments)의 개수를 파악할 수 있고, 각각의 전달인자에 접근할 수 있어야 합니다.

자바스크립트 배열 내장 메서드(forEach, map, filter, reduce 등)의 원리를 이해 해야됩니다.

# 3. [async-and-promise](https://github.com/LeeJoongWon/fe-sprint/tree/master/fe-sprint-async-and-promise)

callback, Promise, async & await를 각각 구현해보세요

delay 함수와 sleep 함수의 차이점을 확인하세요

fetch API를 사용해보세요

#React Twittler Intro

React Twittler Intro 과제에서는 유명 SNS 서비스인 Twitter와 유사한 Twittler를 React로 개발합니다. 

앞으로 있을 React Twittler Router, React Twittler State Props 과제 통과를 위해서 JSX 기본 문법을 숙지하고, 

컴포넌트 기반 개발을 처음으로 시작하는 단계입니다.

* 학습 목표
  * 리액트, JSX 기본 문법을 익힌다.
  * 리액트, JSX로 트위틀러를 하드 코딩할 수 있다.
  * 컴포넌트를 먼저 개발하는 Bottom-up 개발 방식에 익숙해진다.
  * npm script로 리액트 개발에 필요한 기본적인 툴을 사용할 수 있다.

# 4. [React Twittler SPA](https://github.com/LeeJoongWon/fe-sprint/tree/master/fe-sprint-react-twittler-spa)

React Twittler SPA 스프린트에서는 기존 React Twittler Intro 에 React Router 기능을 담은 Twittler 로 발전시킵니다.

# 5. [React Twittler State & Props](https://github.com/LeeJoongWon/fe-sprint/tree/master/fe-sprint-react-twittler-state-props)

React Twittler State & Props 스프린트에서는 지금까지 배운 state, props를 활용하여 유저 parkhacker의 Twittler에서의 트윗 전송 기능을 구현합니다. 

이번 스프린트의 핵심은 트윗 추가 및 추가된 트윗 조회 기능 구현입니다.

* 학습 목표
  * JSX 문법의 기본과 컴포넌트 기반 개발에 대해서 숙지한다.
  * React Router DOM으로 React에서 SPA(Single-Page Application)을 구현할 수 있다.
  * state hook을 이용하여, 컴포넌트에서 데이터를 변화시킬 수 있다.
  * props를 이용하여, 부모 컴포넌트의 데이터를 자식 컴포넌트로 전달할 수 있다.
  * 바람직한 컴포넌트 구조와 state와 props의 위치에 대해 고민한다.


# 6. [StatesAirline Client](https://github.com/LeeJoongWon/fe-sprint/tree/master/fe-sprint-statesairline-client)

StatesAirline Client 앱은 아직 미완성 상태입니다. 

앞에서 배운 상태 끌어올리기, 데이터 흐름 개념을 활용하여 항공편 검색 기능을 구현합니다.

이번 과제의 핵심은 네트워크 요청을 통해 항공편 리스트를 받아오고, 도착지 정보 검색 기능을 구현하는 것입니다. 

이 기능 구현을 위해서 상태 갱신 함수를 어디로 전달할지, Effect hook을 어떻게 활용할 수 있을 지를 고민해 봅시다.

* 학습 목표
  * React의 데이터 흐름에 대해 이해하고 state를 전달할 수 있다.
  * 상태 끌어올리기를 활용하여, 원하는 컴포넌트에서 state를 변경할 수 있다.
  * Side Effect의 개념에 대해서 이해할 수 있다.
  * Effect Hook을 활용하여 비동기 호출 및 Ajax 요청과 같은 side effect를 처리할 수 있다.
  * 네트워크 요청이 느릴 경우에 표시되는 로딩 화면을 구현할 수 있다.

# 7. [Mini Node Server](https://github.com/LeeJoongWon/fe-sprint/tree/master/fe-sprint-mini-node-server)

이번 과제에서는 Node.js의 [http 모듈](https://nodejs.org/dist/latest-v16.x/docs/api/http.html)을 이용해 웹 서버를 만듭니다

. Node.js가 제공하고 있는 [HTTP 트랜잭션 해부](https://nodejs.org/ko/docs/guides/anatomy-of-an-http-transaction/)(Anatomy of an HTTP Transaction) 공식 가이드 문서를 통해 Mini-Node Server를 완성하는 데 큰 도움을 받을 수 있습니다.

# 8. [StatesAirline Server](https://github.com/LeeJoongWon/fe-sprint/tree/master/fe-sprint-statesairline-server)

StatesAirline 서버를 구현합니다. 

이 서버는 Express 프레임워크를 이용해 만들고, 로컬 호스트와 연결합니다. 

States Airline Server는 클라이언트의 요청에 따라 항공편과 예약 데이터를 조회, 생성, 수정, 그리고 삭제하는 기능을 수행할 수 있어야 합니다. 

"States Airline Server" 스프린트를 통해 Express 프로젝트에서 사용하는 폴더 구조를 이해하고, 

Express를 활용하여 API 요청을 처리하는 방법을 실습하게 됩니다. 코드를 작성하면서 폴더 구조가 어떻게 구성이 되어 있고 

router ,controller가 어떠한 역할을 수행하는지 관찰해 보세요. 문제를 해결하기 전에, 문제가 무엇인지 파악하는 것이 우선이 돼야 합니다. 

생산적인 고민을 통해 문제를 정의하고, 차근차근 해결할 수 있어야 합니다.

* 학습 목표
  * Express 프레임워크를 사용하여 States Airline API Server를 개발합니다.
  * Flight API 와 Book API 에서 정의한 API 요청을 수행하는 코드를 작성합니다.
  * Flight Router, Book Router 에 있는 모든 테스트를 통과해야 합니다.

# 9. [my-agora-states-server](https://github.com/LeeJoongWon/fe-sprint/tree/master/fe-sprint-my-agora-states-server)

* my-agora-states-server/app.js
  * 모든 Origin, 경로에 대해 CORS 요청을 허용하게 미들웨어를 적용합니다.  
  * POST 요청 등에 포함된 body(payload)를 구조화하기 위한 미들웨어를 적용합니다.   
  * 서버 상태 확인을 위해 GET / 에서 상태 코드 200으로 응답합니다. 
  * discussionsRouter 를 이용하여 /discussions 경로로 라우팅합니다.

* my-agora-states-server/router/discussions.js 
  * GET /discussions
  * 모든 discussion 목록을 조회하는 라우터를 작성합니다.
  * GET /discussions/:id  
  * discussion 하나를 조회하는 라우터를 작성합니다.
  
* my-agora-states-server/controller/index.js 
  * discussionsController.findAll (모든 discussion 목록 조회)  
  * discussionsController.findById (discussion 하나를 조회)
