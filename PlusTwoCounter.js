class PlusTwo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            Counter : 0
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
        let line =  <div> 'the value is', {county}</div>;
        let buttonLine = <button 
            onClick={this.onClickHandler}
        > plus two</button>;

        <div> {line} {buttonLine}</div>;
    }
}

const element = <PlusTwo/>;

ReactDOM.render(element, document.getElementById('root'));
