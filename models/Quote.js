const mongoose = require('mongoose');

const QuoteSchema = new mongoose.Schema({
  agentEmail: {
    type: String,
    required: true
  },
  agentName: {
    type: String,
    required: true
  },
  agency: {
    type: String
  },
  agencyLocation: {
    type: String,
    required: true
  },
  effectiveDate: {
    type: Date,
    required: true
  },
  insuredName: {
    type: String,
    required: true
  },
  insuredMailingAddress: {
    type: String
  },
  insuredPhoneNumber: {
    type: String
  },
  insuredEmail: {
    type: String
  },
  dateOfBirth: {
    type: String,
    required: true
  },
  locationAddressStreet: {
    type: String,
    required: true
  },
  locationAddressCity: {
    type: String
  },
  locationAddressState: {
    type: String,
    required: true
  },
  locationAddressCounty: {
    type: String
  }
});
module.exports = Quote = mongoose.model('quotes', QuoteSchema);
