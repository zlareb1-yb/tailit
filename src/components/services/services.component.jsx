import React, { useState } from "react";

import { connect } from "react-redux";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import {
  logCollectionTriggerStart,
  logCollectionStop
} from "../../redux/service/service.actions";

import {
  ServicesContainer,
  ButtonsBarContainer,
  FileLink
} from "./services.styles";

import { usePersistedState } from "../../redux/localstorage.utils";

const INITIAL_STATE = {
  ip: "",
  username: "",
  password: "",
  logPath: ""
};

const Services = ({
  uuid,
  logCollectionStop,
  logCollectionTriggerStart,
  processInfo
}) => {

  const [serviceList, setServiceList] = usePersistedState(
    processInfo,
    INITIAL_STATE
  );
  
  const [serviceInfo, setServiceInfo] = useState(INITIAL_STATE);

  const { ip, username, password, logPath } = serviceInfo;

  const handleSubmit = async event => {
    event.preventDefault();

    logCollectionTriggerStart({
      uuid,
      ip,
      username,
      password,
      logPath
    });
  };

  const handleChange = event => {
    const { name, value } = event.target;

    setServiceInfo({ ...serviceInfo, [name]: value });
  };

  const handleStop = event => {
    setServiceInfo({ ...INITIAL_STATE });
    logCollectionStop();
  };

  return (
    <ServicesContainer>
      <span>Logs Link: </span>
      {processInfo ? (
        <FileLink href={processInfo.fileLink} target="_blank">
          {processInfo.fileLink}
        </FileLink>
      ) : null}
      <CustomButton type="button" isGoogleSignIn>
        Copy
      </CustomButton>
      <form className="service-form" onSubmit={handleSubmit}>
        <FormInput
          name="ip"
          type="ip"
          handleChange={handleChange}
          value={ip}
          label="IP"
          required
        />
        <FormInput
          name="username"
          type="username"
          value={username}
          handleChange={handleChange}
          label="Username"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          name="logPath"
          type="logPath"
          value={logPath}
          handleChange={handleChange}
          label="Log Path"
          required
        />
        <ButtonsBarContainer>
          <CustomButton type="submit"> Start </CustomButton>
          <CustomButton type="button" onClick={handleStop}>
            Stop
          </CustomButton>
          <CustomButton type="button"> Reset </CustomButton>
        </ButtonsBarContainer>
      </form>
    </ServicesContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  logCollectionStop: () => dispatch(logCollectionStop()),
  logCollectionTriggerStart: serviceInfo =>
    dispatch(logCollectionTriggerStart(serviceInfo))
});

//const mapStateToProps = state => ({ serviceInfo: state.service.serviceInfo });
const mapStateToProps = (state, props) => ({
  processInfo: state.service[props.uuid]
    ? state.service[props.uuid].processInfo
    : {}
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Services);
