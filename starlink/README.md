PLAY HERE: https://bartsmet30.github.io/starlink-canvas/

Starlink.
1st Project Ironhack Web-Development PT2017
Bart Smet

Short description of the game:
The style of the game is memory.
The game draws an amount of stars on the screen, 
the stars are being connected to eachother with lines in a certain sequence.
After some seconds the connection lines disappear.
The user now has to click the stars in the order of the given sequence.
If the user succeeds, another star will be added to the screen.
If the user makes a mistake, a live will be taken away.
The challenge of the game is to remember the order of the stars

Scoring:
Each correctly clicked star adds a point to the score in the upperright corner.
When the game is over, the high score gets displayed.

Game functionalities:
Get Hint: If the user gets stuck, he can use the hints
The user has 3 hints, which will highlight the next star to click.
Lives: The user has 3 lives, so he can cmake 3 mistakes

Sequence of the gameplay:
1. Landing page with button to start the game
2. The user is asked for a name input (this input will be use througout the game)
3. The user gets the instructions of the game and a button to start
4. The actual gameplay starts
5. Upon game over, the user can click a button to start a new game. The game will be reset.

Technologies used:
HTML5
Canvas
CSS3
JQuery
Javascript

Approach:
I started out with just the canvas to get the gamelogic working with very basic shapes.
This was done in javascript and canvas.
I created a game, star and sound constructor. They are the main elements of the game
First, I made the functions very basic. I just wanted the very simple things to work good.
After that I started adding css.
When the basic css was there, I added more functionalities to the game like reset, get hint, scores and lives.
I basically went from very raw and basic functions to more complex structures, always having the end goal/idea in mind.

Biggest challenge:
The biggest challenge was to work with canvas and more specific to update the canvas.

Things planned for the future:
- Animating the connections between the stars. I wanted to add a drawing effect.
- Only by clicking on the wrong star, a life is taken. 
Now, also when you click somewhere on the canvas besides the correct star, a life is taking.
- I noticed that people who are playing the game have the tendency to click and drag between the starts. So, instead of clicking the stars, I would like to make a click and drag animation/function. The user has to click a star and drag a line till the next correct star.


