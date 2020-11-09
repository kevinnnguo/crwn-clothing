import React from "react";

import {ErrorImageOverlay, ErrorImageContainer, ErrorImageText} from './error-boundary.styles'

class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError(error) {
    //Process error
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
          <ErrorImageOverlay>
              <ErrorImageContainer imageUrl={"https://i.imgur.com/WvEu0cO.png"}/>
              <ErrorImageText>Sorry, this page is broken</ErrorImageText>
          </ErrorImageOverlay>
      )
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
