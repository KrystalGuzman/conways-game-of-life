import React from 'react';
import { Button, Dropdown, Form } from 'semantic-ui-react';

class Controls extends React.Component {
	handleDropdown = (event, { value }) => {
		this.props.gridSize(value);
	};

	handleChange = (e) => {
		this.props.gen(e.target.value);
	};

	render() {
		const options = [
			{
				key: '1',
				text: '10x10',
				value: '1'
			},
			{
				key: '2',
				text: '25x25',
				value: '2'
			},
			{
				key: '3',
				text: '50x50',
				value: '3'
			}
		];
		return (
			<div className="center">
				{/* shows only pause or play */}
				{this.props.playing ? (
					<Button content="Pause" icon="pause" labelPosition="right" onClick={this.props.pauseButton} />
				) : (
					<Button content="Play" icon="play" labelPosition="right" onClick={this.props.playButton} />
				)}
				<Button content="Next" icon="right arrow" labelPosition="right" onClick={this.props.next} />
				<Button content="Shuffle" icon="random" labelPosition="right" onClick={this.props.seed} />
				<Button content="Clear" icon="redo" labelPosition="right" onClick={this.props.clear} />
				<Button.Group>
					<Button content="Slow" icon="minus" labelPosition="left" onClick={this.props.slow} />
					<Button.Or onClick={this.props.medium} />
					<Button content="Fast" icon="plus" labelPosition="right" onClick={this.props.fast} />
				</Button.Group>

				<Dropdown
					placeholder="Select Grid Size"
					fluid
					selection
					options={options}
					onChange={this.handleDropdown}
				/>
			</div>
		);
	}
}

export default Controls;
