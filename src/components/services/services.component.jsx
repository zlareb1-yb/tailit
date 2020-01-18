import React, { useState } from "react";

import { connect } from "react-redux";

import {
  logCollectionTriggerStart,
  logCollectionStop
} from "../../redux/service/service.actions";

import { ServicesContainer } from "./services.styles";

const INITIAL_STATE = {
  ip: "",
  username: "",
  password: "",
  logPath: ""
};

const Services = ({
  logCollectionStop,
  logCollectionTriggerStart,
  processInfo
}) => {
  const [serviceInfo, setServiceInfo] = useState(INITIAL_STATE);

  const { ip, username, password, logPath } = serviceInfo;

  const handleSubmit = async event => {
    event.preventDefault();

    logCollectionTriggerStart({
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
      <form className="service-form" onSubmit={handleSubmit}>
        <p>IP</p>
        <input name="ip" value={ip} onChange={handleChange} />
        <p>Username</p>
        <input name="username" value={username} onChange={handleChange} />
        <p>Password</p>
        <input name="password" value={password} onChange={handleChange} />
        <p>Log Path</p>
        <input name="logPath" value={logPath} onChange={handleChange} />
        <br />
        <p>Link: {processInfo ? processInfo.fileLink : null}</p>
        <br />
        <div>
          <button type="submit">Start</button>
          <button type="button" onClick={handleStop}>
            Stop
          </button>
          <button type="button">Reset</button>
        </div>
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
const mapStateToProps = state => ({ processInfo: state.service.processInfo });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Services);
