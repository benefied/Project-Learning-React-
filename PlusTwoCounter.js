class PlusTwo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            Counter: 0
        }
        this.onClickHandler = this.onClickHandler.bind(this);
    }
    onClickHandler(event){
        event.preventDefault();
        let count = this.state.Counter + 2;
        this.setState({ Counter: count });
    }

    render(){
        const county =  this.state.Counter;
        let line =  React.createElement('div', null, 'the value is', county);
        let buttonLine = React.createElement('button', {
            onClick: this.onClickHandler
        }, 'plus two');

        return React.createElement('div', null, line, buttonLine);
    }
}

const element = React.createElement(PlusTwo);

ReactDOM.render(element, document.getElementById('root'));
