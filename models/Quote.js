const mongoose = require('mongoose');

const QuoteSchema = new mongoose.Schema({
  agent: {
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
    }
  },
  effectiveDate: {
    type: Date,
    required: true
  },
  insured: {
    name: {
      type: String,
      required: true
    },
    mailingAddress: {
      type: String
    },
    phoneNumber: {
      type: String
    },
    insuredEmail: {
      type: String
    },
    dateOfBirth: {
      type: String,
      required: true
    }
  },
  locationAddress: {
    street: {
      type: String,
      required: true
    },
    city: {
      type: String
    },
    state: {
      type: String,
      required: true
    },
    county: {
      type: String
    }
  }
});
module.exports = Quote = mongoose.model('quotes', QuoteSchema);
