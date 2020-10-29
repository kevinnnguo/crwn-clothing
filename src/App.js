import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { SelectCurrentUser } from "./redux/user/user.selector";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import "./App.css";
import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import {signInSuccess} from './redux/user/user.action'

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const {signInSuccess} = this.props;    
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          signInSuccess({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        signInSuccess(userAuth);
        //Only execute once to add collections to firebase
        // addCollectionsAndDocuments(
        //   "collections",
        //   collectionsArray.map(({ title, items }) => ({ title, items }))
        // );
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: SelectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  signInSuccess: (user) => dispatch(signInSuccess(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
