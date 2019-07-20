import React from 'react';

export class Counter extends React.Component {

	//1. 시간에 따라 변하는 데이터는 state라는 모델로 정의
	//2. state를 변경하는 방법은 setState() 밖에 없다.
	//3 setState()는 merge(overwriting) 된다.
	//4 setState() 비동기 처리된다.
	//이벤트 우측에는 함수 선언문이 와야 된다.

	//arrow function 안에 쓰이는 this는 lexical this
	changeScore = (delta) => {
		console.log('incrementScore: ', this);
		// this.setState({score: this.state.score + delta})
		this.setState(prevState => {
			return ({score: this.state.score + delta});
		})
	}


	render() {
		return (
			<div className="counter">
				<button className="counter-action decrement" onClick={ () => {this.changeScore(-1)} }> - </button>
				<span className="counter-score">{this.props.score}</span>
				<button className="counter-action increment" onClick={ () => {this.changeScore(1)} }> + </button>
			</div>
		)
	}
}