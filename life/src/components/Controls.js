import React from 'react';
import { Button, Dropdown } from 'semantic-ui-react';

class Controls extends React.Component {
	handleDropdown = (event, { value }) => {
		this.props.gridSize(value);
	};

	render() {
		const options = [
			{
				key: '1',
				text: '20x10',
				value: '1'
			},
			{
				key: '2',
				text: '50x30',
				value: '2'
			},
			{
				key: '3',
				text: '70x50',
				value: '3'
			}
		];
		return (
			<div className="center">
				<Button content="Stop" icon="stop" labelPosition="right" onClick={this.props.pauseButton} /> :
				<Button content="Play" icon="play" labelPosition="right" onClick={this.props.playButton} />
				<Button content="Shuffle" icon="random" labelPosition="right" onClick={this.props.seed} />
				<Button content="Clear" icon="redo" labelPosition="right" onClick={this.props.clear} />
				<Button content="Slow" icon="minus" labelPosition="right" onClick={this.props.slow} />
				<Button content="Fast" icon="plus" labelPosition="right" onClick={this.props.fast} />
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
