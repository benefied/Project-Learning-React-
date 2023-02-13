class Toggle extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isToggleOn: true,
            color: 'blue',
            name: '',
            location: ''
        }
        this.changeName = this.changeName.bind(this);
        this.changeLocation = this.changeLocation.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    changeName(event){
        this.setState({
            name: event.target.value
            })
    }

    changeLocation(event){
        this.setState({
            location: event.target.value
        })
    }
    handleClick(event){
        const value = this.state.color === 'blue' ? 'white': 'blue';
        this.setState( prevState => ({
            isToggleOn: !prevState.isToggleOn,
            color: value
        })
        )
    }


    render(){
        const isToggleOn = this.state.isToggleOn;
        return <div>
                    <label htmlFor="name"></label>
                    <input type="text" id="name" placeholder='full name' onChange={e => this.changeName(e)}/>
                    <br />
                    <label htmlFor="location"></label>
                    <input type="text" id="location" placeholder='location' onChange={e => this.changeLocation(e)}/>
                    <br />
                    <div className= {this.state.color}>
                        {isToggleOn? <h2>your name is {this.state.name}</h2> : null}
                        {isToggleOn? <h2>your location is {this.state.location}</h2> : null}
                    </div>
                    <button className='btn' onClick={this.handleClick}>
                        {isToggleOn? 'hide profile': 'show profile'}
                    </button>
                </div>
            ;
    }
}

ReactDOM.render(
    <Toggle/>,
    document.getElementById('root')
);
