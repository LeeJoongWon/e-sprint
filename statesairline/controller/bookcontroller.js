const { v4: uuidv4 } = require('uuid');
const flightlist = require('../Repositories/flightlist');
let reservationlist = [];

module.exports = {
  lookup: (req, res) => {
    try {
      if (req.query.flight_id !== undefined) {
        const list = reservationlist.filter((item)=>{ return item.flight_guid === req.query.flight_id });
        console.log(`[GET] Success : /book?flight=${req.query.flight_id}`);
        return res.status(200).json(list);
      }
      if (req.query.phone !== undefined) {
        const reservation = reservationlist.filter((item)=>{return item.phone === req.query.phone});
        const flight = flightlist.filter((item)=>{return item.uuid === reservation[0].flight_guid});
        const data = {
          uuid: flight[0].uuid,
          departure: flight[0].departure,
          destination: flight[0].destination,
          departure_times: flight[0].departure_times,
          arrival_times: flight[0].arrival_times,
          guid: reservation[0].guid,
          name: reservation[0].name,
          phone: reservation[0].phone
        }
        console.log(`[GET] Success : /book?phone=${req.query.phone}`);
        return res.status(200).json(data);
      }
      console.log('[GET] Success : /book');
      return res.status(200).json(reservationlist);
    } catch (error) {
      console.error(`[GET] Error : /book ${error}`);
      return res.status(506).send('[GET] Failed : Not found reservationdata');
    }
  },

  create: (req, res) => {
    try {
      const { flight_guid, name, phone } = req.body;
      reservationlist.push({
         guid: uuidv4(), 
         flight_guid,
         name, 
         phone
      });
      console.log('[POST] Success : /book');
      return res.status(200).send('[POST] Success : Create reservationdata');
    } catch (error) {
      console.error(`[POST] Error : /book ${error}`);
      return res.status(506).send('[POST] Failed : Not Create reservationdata');
    }
  },

  delete_id: (req, res) => {
    try {
      reservationlist = reservationlist.filter((item)=>{ return req.params.id !== item.guid })
      console.log('[delete] Success : /delete/reservationdata/:id');
      return res.status(200).send(`[delete] Success : delete flightdata [${req.params.id}]`);
    } catch (error) {
      console.error(`[delete] Error /delete/reserviontdata/:id : ${error}`);
      return res.status(506).send('[delete] Failed : Not delete reservationdata');
    }
  }
};
