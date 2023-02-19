class CountdownTimer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      seconds: props.time,
      isPaused: false,
    };

    this.intervalId = null;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.isPaused !== this.state.isPaused) {
      if (!this.state.isPaused && this.state.seconds > 0) {
        this.intervalId = setInterval(() => {
          this.setState({ seconds: this.state.seconds - 1 });
        }, 1000);
      } else {
        clearInterval(this.intervalId);
      }
    }
  }

  handlePauseResume = () => {
    this.setState({ isPaused: !this.state.isPaused });
  };

  render() {
    return (
      <div>
        <h2>{this.state.seconds} seconds</h2>
        <button onClick={this.handlePauseResume}>
          {this.state.isPaused ? 'Resume' : 'Pause'}
        </button>
      </div>
    );
  }
}
