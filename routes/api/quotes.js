const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const config = require('config');

// import Model
const Quote = require('../../models/Quote');

//@route    GET api/quote
//@desc     get all quotes
//@access   private eventually for now public

router.get('/', async (req, res) => {
  try {
    const quotes = await Quote.find();
    res.json(quotes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

//@route    POST api/quote
//@desc     create a quote in DB
//@access   private eventually for now public
router.post(
  '/',
  [
    check('agentEmail', 'Please enter a valid email address').isEmail(),
    check('agentName', 'Agent Name is required')
      .not()
      .isEmpty(),
    check('agencyLocation', 'Agency Location is required')
      .not()
      .isEmpty(),
    check('effectiveDate', 'Effective Date is a required field')
      .not()
      .isEmpty(),
    check('insuredName', 'The name is required')
      .not()
      .isEmpty(),
    check('dateOfBirth', 'Date of Birth is a required field')
      .not()
      .isEmpty(),
    check('locationAddressStreet', 'The Location Street is required')
      .not()
      .isEmpty(),
    check('locationAddressCity', 'The Location City is required')
      .not()
      .isEmpty(),
    check('locationAddressState', 'The Location State is required')
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {
      agentEmail,
      agentName,
      agency,
      agencyLocation,
      effectiveDate,
      insuredName,
      insuredMailingAddress,
      insuredPhoneNumber,
      insuredEmail,
      dateOfBirth,
      locationAddressStreet,
      locationAddressCity,
      locationAddressState,
      locationAddressZip,
      locationAddressCounty
    } = req.body;

    try {
      let quote = new Quote({
        agentEmail,
        agentName,
        agency,
        agencyLocation,
        effectiveDate,
        insuredName,
        insuredMailingAddress,
        insuredPhoneNumber,
        insuredEmail,
        dateOfBirth,
        locationAddressStreet,
        locationAddressCity,
        locationAddressState,
        locationAddressZip,
        locationAddressCounty
      });
      await quote.save();
      res.json(quote);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  }
);

//@route    DELETE api/quote/:id
//@desc     delete a quote by id
//@access   private eventually for now public

router.delete('/:id', async (req, res) => {
  try {
    let quote = await Quote.findById(req.params.id);
    if (!quote) return res.status(404).json({ msg: 'No quote found!' });

    await Quote.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Quote removed!' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

//@route    PUT api/quote/:id
//@desc     update a quote
//@access   private eventually for now public

module.exports = router;

//build Quote object
// const quoteFields = {};

// if (effectiveDate) quoteFields.effectiveDate = effectiveDate;
// //build agent object
// quoteFields.agent = {};
// if (agentEmail) quoteFields.agent.agentEmail = agentEmail;
// if (agentName) quoteFields.agent.agentName = agentName;
// if (agency) quoteFields.agent.agency = agency;
// if (agencyLocation) quoteFields.agent.agencyLocation = agencyLocation;
// //build insured object
// quoteFields.insured = {};
// if (name) quoteFields.insuredEmail.name = name;
// if (mailingAddress) quoteFields.insured.mailingAddress = mailingAddress;
// if (phoneNumber) quoteFields.insured.phoneNumber = phoneNumber;
// if (insuredEmail) quoteFields.insured.insuredEmail = insuredEmail;
// if (dateOfBirth) quoteFields.insured.dateOfBirth = dateOfBirth;
// //build object for locationAddress
// quoteFields.locationAddress = {};
// if (street) quoteFields.locationAddress.street = street;
// if (city) quoteFields.locationAddress.city = city;
// if (state) quoteFields.locationAddress.state = state;
// if (county) quoteFields.locationAddress.county = county;
