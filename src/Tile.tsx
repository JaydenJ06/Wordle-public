/**
 * TODO
 * This file specifies the component for a single tile on the Wordle game grid.
 * 
 * You will be implementing this component from scratch. You will also be styling
 * the component using Tailwind CSS based on the provided specifications.
 * 
 * First, note the `TileState` enum below:
 */

export enum TileState {
  Default, // This tile is ei ther empty or contains a letter that has not been guessed yet (white background)
  Incorrect, // This tile contains a letter that is not in the word (dark grey)
  PartiallyCorrect, // This tile contains a letter that is in the word but in the wrong placement (yellow)
  Correct, // This tile contains a letter in the correct placement (green)
}

/**
 * This enum specifies the possible states of the tile. The state of the tile will be
 * provided into the component as a prop. In addition, if a letter is typed in the tile,
 * it will be provided as a prop as well. The base component is listed below.
 * 
 * Make the tile component as a div. It should contain the following styles:
 * 1. The tile should be a square with a width and height of 3.5rem (56px).
 * 2. The tile should have a border of 2px.
 * 3. The tile should be a flexbox.
 * 4. The text inside of the tile should be centered both horizontally and vertically.
 * 5. The text inside of the tile should be Tailwind size 2xl and bold.
 * 
 * Finally, the rest of the styles should depend on the state of the tile and the letter:
 * - If the tile is in the `Default` state:
 *      - If the tile contains a letter, the text should be black and the border color
 *        should be Tailwind's slate-500 color.
 *      - If the tile does not contain a letter, the text should be black and the border
 *        color should be Tailwind's slate-300 color.
 * - If the tile is in the `Incorrect` state, the text should be white and the border
 *   color and background color should be Tailwind's slate-500 color.
 * - If the tile is in the `PartiallyCorrect` state, the text should be white and the
 *  border color and background color should be Tailwind's yellow-500 color.
 * - If the tile is in the `Correct` state, the text should be white and the border
 *  color and background color should be Tailwind's lime-600 color.
 * 
 * Finish the component below.
 */


type TileProps = { letter: string | null; state: TileState };

export default function Tile({ letter, state }: TileProps) {
  const getTileStyle = () => {
    switch (state) {
      case TileState.Incorrect:
        return "bg-slate-500 border-slate-500 text-white";
      case TileState.PartiallyCorrect:
        return "bg-yellow-500 border-yellow-500 text-white";
      case TileState.Correct:
        return "bg-lime-600 border-lime-600 text-white";
      case TileState.Default:
      default:
        if (letter !== null) {
          return "border-slate-500 text-black";
        } else {
          return "border-slate-300 text-black";
        }
    }
  };  
  return (
    <div
      className={`w-14 h-14 border-2 flex items-center justify-center text-2xl font-bold ${getTileStyle()}`}
    >
      {letter}
    </div>
  );
}
