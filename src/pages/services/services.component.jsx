import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import Services from "../../components/services/services.component";
//import SERVICES_DATA from "./service.data";

import { ServicesContainer, ServiceTitle } from "./services.styles";
import CustomButton from "../../components/custom-button/custom-button.component";

import { usePersistedState } from "../../redux/localstorage.utils";

import {
  addServiceStart
} from "../../redux/service/service.actions";

const INITIAL_STATE = [<Services uuid={0} />];

const getInitialState = (service, defaultVal) => {
  console.log('abc');
  var serviceList = [];
  if (service) {
    console.log(service);
    for (const uuid of Object.keys(service)) {
      console.log('aa')
      console.log(serviceList);
      console.log(uuid);
      serviceList.push(<Services uuid={uuid} />);
    }
  } else serviceList = defaultVal;
  
  return serviceList;
};

const ServicesPage = ({ service, addServiceStart }) => {

  useEffect(() => {
    console.log('mm')
    addServiceStart(service);
  }, []); 

  const [serviceList, setServiceList] = useState(
    getInitialState(service, INITIAL_STATE)
  );

  //const [serviceListInRedux, setServiceListInRedux] = usePersistedState('serviceList', INITIAL_STATE)

  const handleAdd = () => {
    
    console.log('nn')
    console.log(service);
    addServiceStart(service);
    setServiceList(serviceList.concat(<Services uuid={serviceList.length} />));

    //console.log(serviceListInRedux);
  };

  //{serviceListInRedux ? Object.keys(serviceListInRedux).length : null}

  return (
    <div className="shop-page">
      <ServiceTitle>File Information for collecting Logs</ServiceTitle>
      <ServicesContainer>{serviceList}</ServicesContainer>
      <CustomButton
        title="Add Another File Information"
        disabled={serviceList.length >= 3}
        onClick={handleAdd}
      >
        Add
      </CustomButton>
    </div>
  );
};

const mapStateToProps = state => ({
  service: state.service.serviceList
    ? state.service.serviceList 
    : null
});

const mapDispatchToProps = dispatch => ({
  addServiceStart: service => dispatch(addServiceStart(service))
});

export default connect(mapStateToProps, mapDispatchToProps)(ServicesPage);
