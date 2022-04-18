import { Component } from "react";

import style from './errorBoundary.module.scss'

class ErrorBoundary extends Component {
  state = {
    error: false,
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
    this.setState({ error: true })
  }

  errorBoundaryMesage = () => {
    return <div className={style.error}>ErrorBoundary</div>;
  }

  render() {
    return (this.state.error) ? this.errorBoundaryMesage() : this.props.children;
  }
}

export default ErrorBoundary;
