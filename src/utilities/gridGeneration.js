import { stillTilesIndexes } from "./constants";
import { quickDieIndexes } from "./constants";
import { oscillatorIndexes } from "./constants";
import { infiniteRepeatingIndexes } from "./constants";
import { operations } from "./constants";
import produce from "immer";

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

export const generateData = (data, gridSize) => {
  return produce(data, dataCopy => {
    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        let neighbors = 0;
        operations.forEach(([x, y]) => {
          const newI = i + x;
          const newJ = j + y;
          if (newI >= 0 && newI < gridSize && newJ >= 0 && newJ < gridSize) {
            neighbors += data[newI][newJ];
          }
        });

        if (neighbors < 2 || neighbors > 3) {
          dataCopy[i][j] = 0;
        } else if (data[i][j] === 0 && neighbors === 3) {
          dataCopy[i][j] = 1;
        }
      }
    }
  });
};
