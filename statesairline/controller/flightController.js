const flights = require('../repository/flightList');
const fs = require('fs');
/* 더미데이터 flights
  {
    uuid: 'af6fa55c-da65-47dd-af23-578fdba40bed',
    departure: 'ICN',
    destination: 'CJU',
    departure_times: '2021-12-02T12:00:00',
    arrival_times: '2021-12-03T12:00:00'
  }
*/

module.exports = {
    // [GET] /flight
    // 요청 된 파라미터 departure_times, arrival_times 값과 동일한 값을 가진 항공편 데이터를 조회합니다.
    // 요청 된 파라미터 departure, destination 값과 동일한 값을 가진 항공편 데이터를 조회합니다.
    findAll: (req, res) => {
        const { departure_times, arrival_times, destination, departure } =
            req.query;
        // TODO:
        let list = flights;
        // flights 안에 departure_times 파라미터와 같은 값
        if (departure_times) {
            list = list.filter(
                (data) => data.departure_times === departure_times
            );
        }
        // list 안에 arrival_times 파라미터와 같은 값
        if (arrival_times) {
            list = list.filter((data) => data.arrival_times === arrival_times);
        }
        // list 안에 destination 파라미터와 같은 값
        if (destination) {
            list = list.filter((data) => data.destination === destination);
        }
        // list 안에 departure 파라미터와 같은 값
        if (departure) {
            list = list.filter((data) => data.departure === departure);
        }

        return res.json(list);
    },

    // [GET] /flight/:ㅕㅕid
    // 요청 된 uuid 값과 동일한 uuid 값을 가진 항공편 데이터를 조회합니다.
    findById: (req, res) => {
        const { uuid } = req.params;
        // TODO:
        // uuid: af6fa55c-da65-47dd-af23-578fdba42bed
        let list;
        if (uuid) {
            list = flights.filter((data) => data.uuid === uuid);
            return res.json(list);
        }
    },

    // Advanced
    // [PUT] /flight/:uuid 요청을 수행합니다.
    // 요청 된 uuid 값과 동일한 uuid 값을 가진 항공편 데이터를 요쳥 된 Body 데이터로 수정합니다.
    update: (req, res) => {
        const { uuid } = req.params;
        const bodyData = req.body;

        // TODO:

        /*수정해야 될 데이터
            {
                uuid: 'af6fa55c-da65-47dd-af23-578fdba99bed',
                departure: 'CJU',
                destination: 'ICN',
                departure_times: '2021-12-03T12:00:00',
                arrival_times: '2021-12-04T12:00:00',
            }
        */

        // 해결하지 못했던 원인 -> 더미 데이터 복사본을 만들어서 사용
        // Advanced Challenges 1번은 통과했으나 2번문제에서 에러 발생 (1번문제와 2번문제는 연결되어 있음 )
        // 1번문제에서 수정한 데이터를 다시 2번 문제에서 재 수정함
        // 복사본은 불가능 (update함수가 실행될때마다 update내의 변수는 초기화 되기 때문) 원본 자체를 수정하거나 전역 변수를 만들어 복사본을 사용해야 함

        // 더미 데이터의 크기만큼 반복하며
        for (let i = 0; i < flights.length; i++) {
            //더미 데이터 안의 Key값중에 uuid와 파라미터로 받은 uuid를 비교
            if (flights[i].uuid === uuid) {
                flights[i] = { ...flights[i], ...bodyData };

                /* 
                uuid값이 똑같으면 해당 배열 인덱스위치의 데이터를 수정

                { ...flights[i], ...bodyData }를 한 이유 
                -> bodyData 파라미터의 데이터에는 모든 키값이 존재하지는 않음 

                예시)
                .send({
                        departure: 'CJU',
                        destination: 'ICN',
                    }) -> 테스트 케이스에서 보내는 인자값 -> bodyData

                완벽한 데이터를 보내는것이 아니기 때문에 스프레드 연산자(Spread Opertor)를 통해
                먼저 기존 데이터인 flights[i]를 할당하고 덮어 씌우기로 bodyData를 함
                */

                //수정한 데이터를 응답으로 보냄
                res.json(flights[i]);
            }
        }
    },
};

/*
Bare Minimum Requirements

statesairline/controller/flightController.js와 statesairline/controller/bookController.js 에 코드를 작성하세요.

Express 공식문서에서 req.query , req.params를 사용하는 방법을 확인하세요. Query와 Params를 기준으로 데이터를 필터링하는 코드를 작성해야 합니다.

예약 데이터는 controller/bookController.js 안에 작성된 let booking = []; 배열에 저장해야 합니다.
Flight API -> 항공편 수정은 Advanced Challenges입니다.

*/
