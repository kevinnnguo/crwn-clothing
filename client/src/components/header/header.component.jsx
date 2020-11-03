import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect'

import { ReactComponent as Logo } from "../../assets/crown.svg";
import { SelectCurrentUser } from "../../redux/user/user.selector";
import { SelectCartHidden } from "../../redux/cart/cart.selector";
import { signOutStart} from '../../redux/user/user.action'

import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink} from './header.styles'
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

const Header = ({ currentUser, hidden, signOutStart }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">
          SHOP
        </OptionLink>
        <OptionLink to="/shop">
          CONTACT
        </OptionLink>
        {currentUser ? (
          <OptionLink  as='div' onClick={signOutStart}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/signin">
            SIGN IN
          </OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: SelectCurrentUser,
  hidden: SelectCartHidden,
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
