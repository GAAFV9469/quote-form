import React, { Fragment, useState } from 'react';

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    agentEmail: '',
    agentName: '',
    agency: '',
    agencyLocation: '',
    effectiveDate: '',
    unsuredName: '',
    insuredMailingAddress: '',
    insuredPhoneNumber: '',
    insuredEmail: '',
    dateOfBirth: '',
    locationAddressStreet: '',
    locationAddressCity: '',
    locationAddressCounty: '',
    locationAddressZip: ''
  });

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
    locationAddressCounty,
    locationAddressZip
  } = formData;

  const onChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    console.log(formData);
  };
  return (
    <Fragment>
      <div className='container'>
        {/* <!------------------------------------------- Heading --> */}
        <div>
          <p className='center'>
            Please complete the questions below and email the form to
            App@general-assurance.com or fax to 804-266-1600
          </p>
        </div>
        <div className='row'>
          {/* <!------------------------------------------- Agency Information --> */}
          <form className='col s12'>
            <div className='row form-group'>
              <div>
                <h4>Agency Information</h4>
              </div>
              <div className='input-field col s6'>
                <input
                  id='agentEmail'
                  type='email'
                  className='validate'
                  name='agentEmail'
                  value={agentEmail}
                  onChange={e => onChange(e)}
                />
                <label for='agentEmail'>Email</label>
              </div>
              <div className='input-field col s6'>
                <input
                  id='effectiveDate'
                  type='text'
                  name='effectiveDate'
                  className='datepicker'
                  value={effectiveDate}
                  onChange={e => onChange(e)}
                />
                <label for='effectiveDate'>Effective Date</label>
              </div>
            </div>
            <div className='row'>
              <div className='input-field col s12'>
                <input
                  id='agentName'
                  type='text'
                  name='agentName'
                  className='datepicker'
                  value={agentName}
                  onChange={e => onChange(e)}
                />
                <label for='agentName'>Agent Name</label>
              </div>
            </div>
            <div className='row'>
              <div className='input-field col s6'>
                <input
                  id='agency'
                  type='text'
                  className='validate'
                  name='agency'
                  value={agency}
                  onChange={e => onChange(e)}
                />
                <label for='agency'>Agency name</label>
              </div>
              <div className='input-field col s6'>
                <input
                  id='agencyLocation'
                  type='text'
                  name='agencyLocation'
                  className='validate'
                  value={agencyLocation}
                  onChange={e => onChange(e)}
                />
                <label for='agencyLocation'>Agency Location</label>
              </div>
            </div>
            {/* <!------------------------------------ Insured Information --> */}
            <div className='row form-group'>
              <div>
                <h4>Insured Information</h4>
              </div>
              <div className='input-field col s12'>
                <input
                  id='insuredName'
                  type='text'
                  name='insuredName'
                  className='validate'
                  value={insuredName}
                  onChange={e => onChange(e)}
                />
                <label for='insuredName'>Name</label>
              </div>
            </div>
            <div className='row'>
              <div className='input-field col s12'>
                <input
                  id='insuredMailingAddress'
                  type='text'
                  className='validate'
                  name='insuredMailingAddress'
                  value={insuredMailingAddress}
                  onChange={e => onChange(e)}
                />
                <label for='insuredMailingAddress'>Mailing Address</label>
              </div>
              {/* <div className="input-field col s2">
              <input id="insured_city" type="text" className="validate" />
              <label for="insured_city">City</label>
            </div>
            <div className="input-field col s2">
              <input id="insured_state" type="text" className="validate" />
              <label for="insured_state">State</label>
            </div>
            <div className="input-field col s2">
              <input id="insured_zip" type="text" className="validate" />
              <label for="insured_zip">Zip Code</label>
            </div> */}
            </div>
            <div className='row'>
              <div className='input-field col s4'>
                <input
                  id='insuredPhoneNumber'
                  type='text'
                  className='validate'
                  name='insuredPhoneNumber'
                  value={insuredPhoneNumber}
                  onChange={e => onChange(e)}
                />
                <label for='insuredPhoneNumber'>Phone Number</label>
              </div>
              <div className='input-field col s5'>
                <input
                  id='insuredEmail'
                  type='email'
                  className='validate'
                  name='insuredEmail'
                  value={insuredEmail}
                  onChange={e => onChange(e)}
                />
                <label for='insuredEmail'>Email</label>
              </div>
              <div className='input-field col s3'>
                <input
                  id='dateOfBirth'
                  type='text'
                  className='datepicker'
                  name='dateOfBirth'
                  value={dateOfBirth}
                  onChange={e => onChange(e)}
                />
                <label for='dateOfBirth'>Date of Birth</label>
              </div>
            </div>
            <div className='row'>
              <div className='input-field col s6'>
                <input
                  id='locationAddressStreet'
                  type='text'
                  className='validate'
                  name='locationAddressStreet'
                  value={locationAddressStreet}
                  onChange={e => onChange(e)}
                />
                <label for='locationAddressStreet'>Location Address</label>
              </div>
              <div className='input-field col s2'>
                <input
                  id='locationAddressCity'
                  type='text'
                  className='validate'
                  name='locationAddressCity'
                  value={locationAddressCity}
                  onChange={e => onChange(e)}
                />
                <label for='locationAddressCity'>City</label>
              </div>
              <div className='input-field col s2'>
                <input
                  id='locationAddressState'
                  type='text'
                  className='validate'
                  name='locationAddressState'
                  value={locationAddressState}
                  onChange={e => onChange(e)}
                />
                <label for='locationAddressState'>State</label>
              </div>
              <div className='input-field col s2'>
                <input
                  id='locationAddressZip'
                  type='text'
                  name='locationAddressZip'
                  value={locationAddressZip}
                  className='validate'
                />
                <label for='locationAddressZip'>Zip Code</label>
              </div>
            </div>
            <div className='row'>
              <div className='input-field col s12'>
                <input
                  id='locationAddressCounty'
                  type='text'
                  className='validate'
                  name='locationAddressCounty'
                  value={locationAddressCounty}
                  onChange={e => onChange(e)}
                />
                <label for='locationAddressCounty'>Location County</label>
              </div>
            </div>
            <div className='row center'>
              <h4 for='group1'>Policy Type:</h4>
              {}
              <p>
                <label>
                  <input name='group1' type='radio' checked />
                  <span>HO3</span>
                </label>
                <label>
                  <input name='group1' type='radio' />
                  <span>DP3</span>
                </label>
                <label>
                  <input className='with-gap' name='group1' type='radio' />
                  <span>HO4</span>
                </label>
                <label>
                  <input name='group1' type='radio' />
                  <span>HO6</span>
                </label>
                <label>
                  <input name='group1' type='radio' />
                  <span>MH </span>
                </label>
              </p>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default QuoteForm;
