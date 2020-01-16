import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Services from '../../components/services/services.component';
import SERVICES_DATA from './service.data';

import { ServicesContainer } from './services.styles';


const ServicesPage = () => (

  <ServicesContainer>
      {SERVICES_DATA.map((service) => <Services serviceName={service['name']} log_path={service['path']} />)}
  </ServicesContainer>
);

export default ServicesPage;
