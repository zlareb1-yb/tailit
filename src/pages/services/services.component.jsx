import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import Services from "../../components/services/services.component";
//import SERVICES_DATA from "./service.data";

import { ServicesContainer } from "./services.styles";

const INITIAL_STATE = [<Services key={1} />]

const ServicesPage = () => {

    const [serviceList, setServiceList] = useState(INITIAL_STATE)


    const handleAdd = () => {
        setServiceList(serviceList.concat(<Services key={serviceList.length} />))
    };
  /*
    return (
        <ServicesContainer>
            {SERVICES_DATA.map((service) => <Services />)}
        </ServicesContainer>
    );
    */
  return (
    <ServicesContainer>
        <button onClick={handleAdd}>Add</button>
        {serviceList}
    </ServicesContainer>
  );
};

export default ServicesPage;
