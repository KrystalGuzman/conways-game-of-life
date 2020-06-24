import React from 'react';
import ArrayClone from './ArrayClone';
import Controls from './Controls';
import Grid from './Grid';
import Description from './Description';

class Container extends React.Component {
	constructor() {
		super();
		this.speed = 100;
		this.rows = 30;
		this.cols = 50;
		this.state = {
      playing: false,
			generation: 0,
			gridFull: Array(this.rows).fill().map(() => Array(this.cols).fill(false))
		};
  }
  

	selectBox = (row, col) => {
    if (this.state.playing == false){
		let gridCopy = ArrayClone(this.state.gridFull);
		gridCopy[row][col] = !gridCopy[row][col];
		this.setState({
			gridFull: gridCopy
    });
  }
	};

	seed = () => {
		let gridCopy = ArrayClone(this.state.gridFull);
		for (let i = 0; i < this.rows; i++) {
			for (let j = 0; j < this.cols; j++) {
				if (Math.floor(Math.random() * 4) === 1) {
					gridCopy[i][j] = true;
				}
			}
		}
		this.setState({
      gridFull: gridCopy,
      generation: 0
		});
	};

  chooseGeneration = (gen) => {
    this.play(this.state.generation + gen);
    
  };

  nextButton = () => {
    this.play(this.state.generation + 1);
  };
  
	playButton = () => {
    clearInterval(this.intervalId);
    this.setState({ playing: true });
		this.intervalId = setInterval(this.play, this.speed);
	};

	pauseButton = () => {
    this.setState({ playing: false });
		clearInterval(this.intervalId);
	};

	slow = () => {
		this.speed = 1000;
		this.playButton();
	};

	fast = () => {
		this.speed = 100;
		this.playButton();
	};

	clear = () => {
		var grid = Array(this.rows).fill().map(() => Array(this.cols).fill(false));
		this.setState({
			gridFull: grid,
			generation: 0
		});
	};

	gridSize = (size) => {
		switch (size) {
			case '1':
				this.cols = 10;
				this.rows = 10;

				break;
			case '2':
				this.cols = 25;
				this.rows = 25;
				break;
			default:
				this.cols = 50;
				this.rows = 50;
		}
		this.clear();
	};

	play = () => {
		let g = this.state.gridFull;
		let g2 = ArrayClone(this.state.gridFull);
		for (let i = 0; i < this.rows; i++) {
			for (let j = 0; j < this.cols; j++) {
				let count = 0;
				if (i > 0) if (g[i - 1][j]) count++;
				if (i > 0 && j > 0) if (g[i - 1][j - 1]) count++;
				if (i > 0 && j < this.cols - 1) if (g[i - 1][j + 1]) count++;
				if (j < this.cols - 1) if (g[i][j + 1]) count++;
				if (j > 0) if (g[i][j - 1]) count++;
				if (i < this.rows - 1) if (g[i + 1][j]) count++;
				if (i < this.rows - 1 && j > 0) if (g[i + 1][j - 1]) count++;
				if (i < this.rows - 1 && j < this.cols - 1) if (g[i + 1][j + 1]) count++;
				if (g[i][j] && (count < 2 || count > 3)) g2[i][j] = false;
        if (!g[i][j] && count === 3) g2[i][j] = true;
        
      }
      
		}
    
    
    this.setState({
			gridFull: g2,
			generation: this.state.generation + 1
    });
    if(JSON.stringify(g2)==JSON.stringify(g)){
      this.setState({ playing: false });
      clearInterval(this.intervalId);
      alert("All life has stopped.")
    }
	};

	componentDidMount() {
		this.seed();
	}

	render() {
    const { world, playing } = this.state;
		return (
			<div class="boxcontent">
				<div class="game">
					<h1>Conway's Game of Life</h1>
					<Controls
            next={this.nextButton}
						playButton={this.playButton}
						pauseButton={this.pauseButton}
						slow={this.slow}
						fast={this.fast}
						clear={this.clear}
						seed={this.seed}
            gridSize={this.gridSize}
            gen={this.chooseGeneration}
            playing={playing}
					/>
					<Grid world={world} gridFull={this.state.gridFull} rows={this.rows} cols={this.cols} selectBox={this.selectBox} />
					<h2>Generations: {this.state.generation}</h2>
					<Description />
				</div>
			</div>
		);
	}
}
export default Container;
