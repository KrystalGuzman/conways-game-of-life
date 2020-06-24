# conways-game-of-life

https://conways-game-of-life.krystalguzman.vercel.app/

## What is the project?
A cellular automaton is a program that operates on data typically stored in a 2D grid.

A simple set of rules describes how the value in a cell on the grid changes over time, often as the result of the states of that cell's neighbors.

Rules:
If the cell is alive and has 2 or 3 neighbors, then it remains alive. Else it dies.
If the cell is dead and has exactly 3 neighbors, then it comes to life. Else if remains dead.

## What problem does it solve?
It shows that sometimes very complex behavior can emerge from a very simple set of rules.
CAs have been used in biological and chemical simulations and other areas of research, such as CA-based computer processors, and other numeric techniques.

## Exceptional difficulties and solutions, if any.
I ended up scrapping the generation picker because of time restraints.  I could  get the setState to update the generation counter.

## TODO list/wishlist. What do you want to add to it if you have more time?
[] Add presets
[] Add generation picker

### Tech
React
Semantic UI