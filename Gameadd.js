class Gamecall extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props);
    }
    render(){
        if(this.props.games){
            const gameList = games.map(game => {
                    return React.createElement('ul', null, 
                            React.createElement('li', null, game)
                                    );
            });
            return gameList;
        }
        return React.createElement('h1', null, 'no games available');
    }
}

const games = ['ff9', 'COD'];

const element = React.createElement(Gamecall, {games: games});

ReactDOM.render(element, document.getElementById('root'));
