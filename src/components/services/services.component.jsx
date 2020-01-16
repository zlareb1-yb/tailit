import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { logCollectionTriggerStart, logCollectionStop } from '../../redux/service/service.actions';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {
    ServicesContainer,
    ServicesTitle,
    ButtonsBarContainer
} from './services.styles';

const Services = ({ serviceName, log_path }) => {
    
    const [serviceInfo, setServiceInfo] = useState({
        pcIP: '',
        fileLink: ''
      });
    
      const { pcIP, fileLink } = serviceInfo;
    
      const handleSubmit = async event => {
        event.preventDefault();
        console.log('aa');
        //dispatch(logCollectionTriggerStart({ pcIP, serviceName, log_path }));
        logCollectionTriggerStart({ pcIP, serviceName, log_path });
      };
    
      const handleChange = event => {
        const { name, value } = event.target;
        
        setServiceInfo({ ...serviceInfo, [name]: value });
      };    

      const handleStop  = event => {
        const { name } = event.target;

        setServiceInfo({ [name]: '' });
        logCollectionStop({ pcIP, serviceName, log_path });
      };

    return (
      <ServicesContainer>
        
        <form className='service-form' onSubmit={handleSubmit}>
            <h2>{serviceName}</h2>
            <p>PC IP</p>
            {
                pcIP ? (
                    <p>{pcIP}</p>
                ) : (
                    <input onChange={handleChange} />
                )
            }
          <br />
          Link: {fileLink}
          <br />
          <div>
              <button type="submit">Start</button>
              <button onClick={handleStop}>Stop</button>
              <button>Reset</button>
          </div>
          
        </form>
      </ServicesContainer>
    );
}

const mapDispatchToProps = dispatch => ({
    logCollectionTriggerStart: serviceInfo => dispatch(logCollectionTriggerStart(serviceInfo)),
    //logCollectionStop: () => dispatch(logCollectionStop())
});

export default connect(null, mapDispatchToProps)(Services);