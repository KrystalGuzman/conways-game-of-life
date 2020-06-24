import React from 'react';
import { Button, Grid, Header, Popup } from 'semantic-ui-react';

class Description extends React.Component {
	render() {
		return (
			<div>
				<Popup trigger={<Button>Conway's Rules</Button>} flowing hoverable>
					<Header as="h4">Rules for the Game of Life</Header>
					<p>
						The universe of the Game of Life is an infinite, two-dimensional orthogonal grid of square
						cells.
					</p>
					<p>There are one of two possible states: live or dead, (or populated and unpopulated).</p>
					<p>
						Every cell interacts with its eight neighbours, which are the cells that are horizontally,
						vertically, or diagonally adjacent.
					</p>
					<p>At each step in time, the following transitions occur:</p>
					<Grid divided columns={2}>
						<Grid.Column textAlign="center">
							<Header as="h4">Dead Cells</Header>
							<p>If a dead cell has exactly 3 live neighbors it will come to life.</p>
						</Grid.Column>
						<Grid.Column textAlign="center">
							<Header as="h4">Alive Cells</Header>
							<p>If a live cell does not have exactly 2 or 3 live neighbors then it dies.</p>
						</Grid.Column>
					</Grid>
				</Popup>

				<Popup trigger={<Button>Learn More</Button>} flowing hoverable>
					<Grid centered divided columns={1}>
						<Grid.Column>
							<Header as="h4">Conway's Game of Life</Header>
							<a
								href="https://en.wikipedia.org/wiki/Conway's_Game_of_Life"
								target="_blank"
								rel="noopener noreferrer"
							>
								<p>Sourced from Wikipedia.org</p>
							</a>
							<p>
								The Game of Life, also known simply as Life, is a cellular automaton. It was devised by
								the British mathematician John Horton Conway in 1970.
							</p>
							<p>
								It is a zero-player game, meaning that given a fixed set of rules, its evolution is
								determined by its initial state, requiring no further input.
							</p>
							<p>
								One interacts with the Game of Life by creating an initial configuration and observing
								how it evolves.
							</p>
							<p>
								It is Turing complete and can simulate a universal constructor or any other Turing machine.
							</p>
						</Grid.Column>
					</Grid>
				</Popup>
			</div>
		);
	}
}
export default Description;
