console.log("hellow world (:")
/*
The page is going to have a grid of cells with x and y coordinates

Your part is to create a class whose instance will contain all the information relevant to a game session

The constructor should have parameters to generate a grid with a given height, width, with n-amount of bombs

And the class instance should have a single function that's used to play the game, probably called RevealTile(x, y)
In a surviving condition, returning an object with an array of coords of which tiles should be revealed(for those flood fills of empty spaces [no bombs in proximity] and their bomb proximity count)
Example:
    {
        failed: false,
        tiles: [
            { x: 1; y: 1; proximity: 2},
            { x: 2; y: 1; proximity: 1},
            { x: 1; y: 2; proximity: 0}
        ]
    }

In a failed condition, returning an object with an array of coords of which tiles were bombs
Example:
    {
        {
        failed: false,
        bombs: [
            {x:12; y: 3;},
            {x:6; y: 9;},
            {x:4; y: 2;},
        ]
    }
    }

    --Feel absolutely free to ask questions
    I don't feel like i've gone over enough on how to transition your knowledge of python onto js

    Starting out, you might want to

    - be able to define a class with functions and variables
    - generate a grid with n-amount of mines
    - pregenerate a grid of proximity counts using the code below

    Then, as a bonus
    - track how much time was spent, cps, STATISTICS
    - generate a grid with n-amount mines only on the first RevealTiles() call, so you can avoid failing the player on the first click
    - check start conditions. Valid amount of mines should technically be equal to or less than height * width - 9 (for breathing room on said first click; no mines within a 3x3 of the first RevealTile())
    
    bonus bonus extra extra
    - perhaps have the generated proximity grid, instead of treating edges as empty spaces, but as wrapped around to the opposite side, making the game more fair
        - extra bonus, have a flood clear wrap around to opposite sides too
    - somehow use a different algorithm that can guarantee cavities in the spacing of mines (instead of randomly placed, instead have mines cluster in certain areas)

    Dont worry about 'flagging'(flagging tiles so the user can't accidentally click on them) , that should be the 'interactivity' side of things

*/

//The following is JSDoc, a way of documenting your JS, which IDE's can recognize and add autocomplete for: https://jsdoc.app/
/**
 * @typedef {Object} Tile
 * @property {Number} x
 * @property {Number} y
 * @property {Number} proximity Number of bombs in a 3x3 proximity of this tiles
 */
/**
 * @typedef {Object} RevealResult
 * @property {Boolean} failed Has the user clicked on a bomb and failed? 
 * @property {[Tile] | null} tiles In the case of success, tiles that should be revealed
 * @property {[Tile] | null} bombs In the case of failure, tiles that were bombs
 */

/* Example to help
IN PYTHON
class Game:
    def __init__(self, options):
        self.width = 15
        self.height = 15
        self.mines = 20
        self.grid = []
        self.proximity_grid = []

    def RevealTile(self, x, y) -> Any:
        raise Exception("Not Implemented")
*/

//JS Equivalent
class Game {
    //Defaults
    width = 15
    height = 15
    mines = 20
    grid = []
    proximity_grid = []
    /**
     * Reveals a tile and anything associated with it
     * @param {Number} x The x coordinate of the tile
     * @param {Number} y The y coordinate of the tile
     * @return {RevealResult} The result of this action
     */
    RevealTile(x, y) {
        throw new Error("Not Implemented")
    }
}

/* SAMPLE JAVA CODE FROM AN EARLIER THING THAT CAN HELP
public class Minesweeper {
    public static void main (String[] args){
        //Parse first argument
        int height = Integer.parseInt(args[0]);
        int width = Integer.parseInt(args[1]);
        int mines = Integer.parseInt(args[2]);
        //Initialize
        int[][] field = new int[width][height];
        //Place mines
        for (int ct = 0; ct < mines; ct++) {
            //Random position
            int xRand = (int)Math.floor(Math.random() * width);
            int yRand = (int)Math.floor(Math.random() * height);
            if(field[xRand][yRand] < 0)
            {   //If mine already in place, retry
                ct--; continue;
            }
            //Mines will be represented as negative values
            field[xRand][yRand] = -10;
            //Literal edge case, avoid out of bounds indexing for edge and corner mines
            int xMinBound = Math.max(xRand - 1, 0);
            int xMaxBound = Math.min(xRand + 1, width - 1);
            int yMinBound = Math.max(yRand - 1, 0);
            int yMaxBound = Math.min(yRand + 1, height - 1);
            //Add one to all squares around, including the mined square
            for (int xUpdate = xMinBound; xUpdate <= xMaxBound; xUpdate++) {
                for (int yUpdate = yMinBound; yUpdate <= yMaxBound; yUpdate++) {
                    field[xUpdate][yUpdate]++;
                }
            }
        }
        //Print array
        for (int yi = 0; yi < height; yi++) {
            for (int xi = 0; xi < width; xi++) {
                //Print out value accordingly
                int val = field[xi][yi];
                System.out.print((val < 0 ? "*": val) + "  ");
            }
            System.out.print("\n");
        }
    }
}
*/