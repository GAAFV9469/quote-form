const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const config = require('config');

// import Model
const Quote = require('../../models/Quote');

//@route    POST api/quote
//@desc     create a quote in DB
//@access   private eventually for now public
router.post(
  '/quote',
  [
    check('agent.agentEmail', 'Please enter a valid email address').isEmail(),
    check('agent.agentName', 'Agent Name is required')
      .not()
      .isEmpty(),
    check('agent.agencyLocation', 'Agency Location is required')
      .not()
      .isEmpty(),
    check('agent.effectiveDate', 'Effective Date is a required field')
      .not()
      .isEmpty(),
    check('insured.name', 'The name is required')
      .not()
      .isEmpty(),
    check('insured.dateOfBirth', 'Date of Birth is a required field')
      .not()
      .isEmpty(),
    check('locationAddress.street', 'The Location Street is required')
      .not()
      .isEmpty(),
    check('locationAddress.city', 'The Location City is required')
      .not()
      .isEmpty(),
    check('locationAddress.state', 'The Location State is required')
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
      effectiveDate
    } = req.body.agent;
    const {
      name,
      mailingAddress,
      phoneNumber,
      insuredEmail,
      dateOfBirth
    } = req.body.insured;

    const { street, city, state, county } = req.body.locationAddress;

    // //build Quote object
    // const qouteFields = {};

    // if (agentEmail) quoteFields.agentEmail = agentEmail;
    // if (agentName) quoteFields.agentName = agentName;
    // if (agency) quoteFields.agency = agency;
    // if (agencyLocation) quoteFields.agencyLocation = agencyLocation;
    // if (effectiveDate) quoteFields.effectiveDate = effectiveDate;
    // if (name) quoteFields.name = name;
    // if (mailingAddress) quoteFields.mailingAddress = mailingAddress;
    // if (phoneNumber) quoteFields.phoneNumber = phoneNumber;
    // if (insuredEmail) quoteFields.insuredEmail = insuredEmail;
    // if (dateOfBirth) quoteFields.dateOfBirth = dateOfBirth;
    // if (street) quoteFields.street = street;
    // if (city) quoteFields.city = city;
    // if (state) quoteFields.state = state;
    // if (county) quoteFields.county = county;

    try {
      const newQuote = new Quote({
        agentEmail,
        agentName,
        agency,
        agencyLocation,
        effectiveDate,
        name,
        mailingAddress,
        phoneNumber,
        insuredEmail,
        dateOfBirth,
        street,
        city,
        state,
        county
      });
      await newQuote.save();
      res.json(newQuote);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
