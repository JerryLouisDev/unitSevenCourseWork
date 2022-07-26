const Header = (props) =>{
    console.log(props)
    return(
        <header>
            <h1>{props.title}</h1>
            <span className='stats'>Player {props.totalPlayers}</span>
        </header>
    )
}
const Player = (props) => {
    return(
        <div className="player">
            <span className="player-name">
            <button className="remove-player"onClick={() => props.removePlayer(props.id)}>✖</button>
                {props.name}
            </span>
            <Counter score={props.score} />
        </div>
    );
}
class Counter extends React.Component { 
  state = {
      score: 0
    };
    
  increaseScore = () => {
        console.log('this is score!')
        /**this.setstate updates the value and tell the value to increase   */
        /**instead of using this.state.score we use prevState to help with the program become more effective */
        /** instead of using return you can just rap it around () */
        this.setState(prevState => ({
                score:prevState.score +1
            
        }));
    }
    //Doing this way will be the OG way to constructor
    /** 
     * constructor(){
        super()
        this.state = {
            score:0
        };
   
    */
  decreaseScore = () => {
        console.log('this is score!going down')
        /**this.setstate updates the value and tell the value to increase   */
        this.setState(prevState => {
            return{
                score:prevState.score -1
            }
        });
    }
    render(){
        return(
            <div className='counter'>
                <button className="counter-action decrement" onClick={this.decreaseScore}> - </button>
                <span className="counter-score">{this.state.score}</span>
                {/**.bind allows the score to be defined if you are not using an announise function */}
                <button className="counter-action increment" onClick={this.increaseScore} > + </button>
            </div>
            );
    }

}

class App extends React.Component {
    state= {
        players:[
            {
                name: "Emily",
                id: 1
              },
              {
                name: "Majigi",
                id: 2
              },
              {
                name: "Meelogo",
                id: 3
              },
              {
                name: "Jerald",
                id: 4
              },
              {
                name: "Jey",
                id: 5
              },
              {
                name: "Jerry",
                id: 6
              }
        ]
    };
    handleRemovePlayer = (id) => {
        this.setState( prevState =>{
            return{
                players: this.state.players.filter(p => p.id !== id)
            }
           
        })
    }
    render(){
        return(
            <div className="scoreboard">
                <Header title='Scoreboard' totalPlayers={this.state.players.length} />
                {/** Players List */}
                {this.state.players.map(
                    player => 
                    <Player 
                    name= {player.name} 
                    id={player.id}
                    // score={player.score} 
                    key={player.id.toString()}
                    removePlayer={this.handleRemovePlayer}
                    />
                )}
    
            </div>
        )
    }

}
 /**the Header is a jsx tag */
ReactDOM.render(
    <App />,
    document.getElementById('root')

);