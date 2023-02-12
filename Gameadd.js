<script type="text/babel">
        class Gamecall extends React.Component {
            constructor(props) {
              super(props);
              console.log(this.props);
            }
            render() {
              if (this.props.games) {
                const gameList = games.map((game) => {
                   return <ul>
                      <li>{game}</li>
                    </ul>
                });
          
                return gameList;
              }
              return <h1> no games available </h1>;
            }
          }
          
          const games = ["ff9", "COD"];
          
          const element = <Gamecall games={games} />;
          
          ReactDOM.render(element, document.getElementById("root"));
    </script>
