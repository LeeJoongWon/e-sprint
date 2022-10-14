// POST /book에서 사용할 uuid입니다.
const { v4: uuid } = require('uuid');
// 항공편 예약 데이터를 저장합니다.
let booking = [];

module.exports = {
    // [GET] /book 요청을 수행합니다.
    // 전체 예약 데이터를 조회합니다.
    findAll: (req, res) => {
        return res.status(200).json(booking);
    },
    // [GET] /book/:phone 요청을 수행합니다.
    // 요청 된 phone과 동일한 phone 예약 데이터를 조회합니다.
    findByPhone: (req, res) => {
        const { phone } = req.params;
        let list = booking;
        if (phone) {
            // 특정 예약자 전화번호에 맞는 예약 조회
            list = list.filter((data) => data.phone === phone);
            return res.status(200).json(list);
        }
    },
    // [GET] /book/:phone/:flight_uuid 요청을 수행합니다.
    // 요청 된 id, phone과 동일한 uuid, phone 예약 데이터를 조회합니다.
    findByPhoneAndFlightId: (req, res) => {
        const { phone, flight_uuid } = req.params;
        // TODO:
        let list = booking;

        if (flight_uuid && phone) {
            // 특정 예약자 전화번호와 항공편 uuid에 맞는 예약 조회
            list = booking.filter((data) => data.phone === phone);
            list = list.filter((data) => data.flight_uuid === flight_uuid);
            return res.status(200).json(list);
        }
    },
    // [POST] /book 요청을 수행합니다.
    // 요청 된 예약 데이터를 저장합니다.
    create: (req, res) => {
        // POST /book에서 사용할 booking_uuid입니다.
        const booking_uuid = uuid();
        const body = req.body;
        // TODO:
        if (body) {
            let data = {
                booking_uuid: booking_uuid,
                flight_uuid: body.flight_uuid,
                name: body.name,
                phone: body.phone,
            };

            booking = [...booking, data];
            return res.status(201).json(data.flight_uuid);
        }
    },

    // Optional
    // [DELETE] /book/:booking_uuid 요청을 수행합니다.
    // 요청 된 id, phone 값과 동일한 예약 데이터를 삭제합니다.
    deleteByBookingId: (req, res) => {
        const { booking_uuid } = req.params;
        // TODO:
        // 테스트 케이스가 없음 작동안함
    },
};
