import { Component } from "react";
import { connect } from "react-redux";
import styles from "./ErrorBoundary.module.css";
class ErrorBoundary extends Component {
  // static getDerivedStateFromError(error) {
  //   return {
  //     hasError: true,
  //   };
  // }
  render() {
    if (this.props.error) {
      return (
        <div className={styles.error}>
          <p>Something Went Wrong!!!</p>
        </div>
      );
    }

    return this.props.children;
  }
}

const mapStateToProps = (state) => {
  return { error: state.movies.error };
};

export default connect(mapStateToProps)(ErrorBoundary);
