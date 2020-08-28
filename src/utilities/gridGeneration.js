import { stillTilesIndexes } from "./constants";
import { quickDieIndexes } from "./constants";
import { oscillatorIndexes } from "./constants";
import { infiniteRepeatingIndexes } from "./constants";

export const generateEmptyGrid = (newSize, setGeneration) => {
  const grid = [];
  // Populate the initial array
  for (let i = 0; i < newSize; ++i) {
    grid.push(Array.from(Array(newSize), () => 0));
  }
  setGeneration(0);

  return grid;
};

export const generatePrefabGrid = (size, prefab) => {
  const grid = [];
  // Populate the initial array
  for (let i = 0; i < size; ++i) {
    grid.push(Array.from(Array(size), () => 0));
  }

  // Populate the prefab
  switch (prefab) {
    case "Still Tiles": {
      stillTilesIndexes.map(item => {
        grid[item.x][item.y] = 1;
      });
      break;
    }
    case "Quick Die": {
      quickDieIndexes.map(item => {
        grid[item.x][item.y] = 1;
      });
      break;
    }
    case "Oscillator": {
      oscillatorIndexes.map(item => {
        grid[item.y][item.x] = 1;
      });
      break;
    }
    case "Infinite Repeating": {
      infiniteRepeatingIndexes.map(item => {
        grid[item.y][item.x] = 1;
      });
      break;
    }
    default: {
      break;
    }
  }
  return grid;
};
