This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Miscellaneous info:

- hero icons are created through `<i className=\"d2mh [heroname / npc_dota_hero\_[heroname] / heroid]\" />` - using dota-2-minimap-hero-sprites ([https://github.com/bontscho/dota2-minimap-hero-sprites](https://github.com/bontscho/dota2-minimap-hero-sprites)) for the icons.
- Icon component will hold information of hero displayed in state.
- ~~Table component will create a table with an Icon component in each cell.~~ Decided to use CSS to limit the board, for now.
- App will handle game mechanics.
