import React, { Component } from 'react';

// Only use Error boundaries when needed and error that can occur is out of your control. It works only in production mode.
class ErrorBoundary extends Component {

  state = {
    hasError: false,
    errorMessage: ''
  }

  componentDidCatch = (error, info) => {
    this.setState({
      hasError: true,
      errorMessage: error
    });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong!!</h1>;
    } else {
      return this.props.children;
    }

  }
}

export default ErrorBoundary;