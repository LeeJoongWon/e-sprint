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
        let tmp = flights.filter((el) => el.uuid === uuid);
        tmp = { ...bodyData };
        console.log(tmp);
        console.log('실행안됨');
        return res.json(bodyData);
    },
};

/*
Bare Minimum Requirements

statesairline/controller/flightController.js와 statesairline/controller/bookController.js 에 코드를 작성하세요.

Express 공식문서에서 req.query , req.params를 사용하는 방법을 확인하세요. Query와 Params를 기준으로 데이터를 필터링하는 코드를 작성해야 합니다.

예약 데이터는 controller/bookController.js 안에 작성된 let booking = []; 배열에 저장해야 합니다.
Flight API -> 항공편 수정은 Advanced Challenges입니다.

*/
