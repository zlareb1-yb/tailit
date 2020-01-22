import React from 'react';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from './header.styles';

const Header = ({ currentUser, hidden, signOutStart }) => (
  <HeaderContainer>
     <LogoContainer to='/'>
      <Logo className='logo' />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/signin'>SIGN IN</OptionLink>
      <OptionLink to='/logs'>LOGS</OptionLink>
      <OptionLink to='/help'>HELP</OptionLink>
    </OptionsContainer>
  </HeaderContainer>
);

export default Header;
