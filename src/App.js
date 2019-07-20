import React from 'react';
import './App.css';
import {Header} from './components/Header';
import {Player} from "./components/Player";

class App extends React.Component {
	//Lifting Up : 카운터 컴포넌트가 갖고 있는 로컬 state를 최상단 부몰로 올리기
	//로직을 구현하기 위해서 lifting up 이 필요
	state = {
		players : [
			{name: 'LDK', score: 30, id:1},
			{name: 'HONG', score: 40, id:2},
			{name: 'KIM', score: 50, id:3},
			{name: 'PARK', score: 60, id:4},
		]
	}

	render() {
		return (
			<div className="scoreboard">
				<Header title="My scoreboard" totalPlayers={11} />

				{
					this.state.players.map((player) => {
						return(
							<Player name={player.name} score={player.score} id={player.id} key={player.id} removePlayer={this.handleRemovePlayer} />
						)
					})
				}
			</div>
		)
	}
	handleRemovePlayer = (id) => {
		console.log(id)
		//	자식을 삭제하는 로직
		this.setState(prevState => ({
				players: prevState.players.filter(player => player.id !== id)
			})
		)
	}

}

export default App;