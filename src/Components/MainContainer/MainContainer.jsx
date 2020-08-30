import React, { useState, useCallback, useRef } from "react";
import { sharedStyles } from "../../material-ui/styles/sharedStyles";
import { Button, ButtonBase, Typography } from "@material-ui/core";
import produce from "immer";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { images } from "../../images";
import { operations } from "../../utilities/constants";
import { generateEmptyGrid } from "../../utilities/gridGeneration";
import { generatePrefabGrid } from "../../utilities/gridGeneration";
import Slider from "@material-ui/core/Slider";
import { generateData } from "../../utilities/gridGeneration";

let classNames = require("classnames");

const MainContainer = () => {
  const classes = sharedStyles();

  const [speed, setSpeed] = useState(500);
  const [gridClass, setGridClass] = useState(classes.gridDefault);
  const [gridSize, setGridSize] = useState(25);
  const [generation, setGeneration] = useState(0);
  const [running, setRunning] = useState(false);
  const [data, setData] = useState(() => {
    return generateEmptyGrid(25, setGeneration);
  });

  // We need immediate access to some states, so we will use refs.
  const speedRef = useRef(speed);
  speedRef.current = speed;

  const runningRef = useRef(running);
  runningRef.current = running;

  const genRef = useRef(generation);
  genRef.current = generation;

  // Dynamically setting the class for the grid size
  const getClassName = value => {
    switch (value) {
      case 30: {
        return classes.gridSmall;
      }
      case 35: {
        return classes.gridMedium;
      }
      case 40: {
        return classes.gridLarge;
      }
      default: {
        return classes.gridDefault;
      }
    }
  };

  const handleChange = event => {
    setGridSize(event.target.value);
    setGridClass(getClassName(event.target.value));
    setData(generateEmptyGrid(event.target.value, setGeneration));
  };

  const handlePreset = event => {
    setData(generatePrefabGrid(gridSize, event.currentTarget.value));
  };

  const onSpeedChange = (event, value) => {
    setSpeed(1000 * value);
    speedRef.current = 1000 * value;
  };

  // This is where we apply our rules and determine what cell lives, dies or is born
  const runSimulation = useCallback(() => {
    if (!runningRef.current) {
      return;
    }
    setGeneration(genRef.current + 1);

    setData(data => {
      return generateData(data, gridSize);
    });
    setTimeout(runSimulation, speedRef.current);
  }, []);

  return (
    <>
      <div className={classes.root}>
        <div className={classes.leftColumn}>
          <div className={gridClass}>
            {data.map((rows, i) =>
              rows.map((col, j) => (
                <div
                  key={`${i}-${j}`}
                  onClick={() => {
                    if (!running) {
                      const newGrid = produce(data, dataCopy => {
                        dataCopy[i][j] = dataCopy[i][j] ? 0 : 1;
                      });
                      setData(newGrid);
                    }
                  }}
                  className={classNames(
                    data[i][j] ? classes.alive : classes.dead,
                    classes.gridItem
                  )}
                />
              ))
            )}
          </div>
          <div className={classes.menubar}>
            <Button
              onClick={() => {
                setRunning(!running);
                if (!running) {
                  runningRef.current = true;
                  runSimulation();
                }
              }}
              className={classes.button}
            >
              {running ? "Stop" : "Start"}
            </Button>
            <Button
              onClick={() => {
                !running && setData(generateEmptyGrid(gridSize, setGeneration));
              }}
              className={classes.button}
            >
              Clear
            </Button>
            <FormControl className={classes.formControl}>
              <InputLabel id="grid-size-select-label">Grid Size</InputLabel>
              <Select
                labelId="grid-size-select-label"
                id="grid-size-select"
                value={gridSize}
                onChange={handleChange}
              >
                <MenuItem value={25}>25 x 25</MenuItem>
                <MenuItem value={30}>30 x 30</MenuItem>
                <MenuItem value={35}>35 x 35</MenuItem>
                <MenuItem value={40}>40 x 40</MenuItem>
              </Select>
            </FormControl>

            <div className={classes.slider}>
              <Typography id="speed-slider" gutterBottom>
                Speed (s)
              </Typography>
              <Slider
                defaultValue={0.5}
                aria-labelledby="speed"
                step={0.1}
                marks
                min={0.1}
                max={2.0}
                valueLabelDisplay="auto"
                onChange={onSpeedChange}
              />
            </div>
            <span>Generation: </span>
            <span>{generation}</span>
          </div>
          <div className={classes.about}>
            <h1 className={classes.h1}>About This Game</h1>
            <p>
              Conway's Game of Life was created by a British mathematician John
              Conway in 1970. The evolution of the cells is
              <br />
              determined by its initial state. Once started a simple set of
              rules is followed that determines whether the cell stays
              <br />
              alive or dies (Turing machine).
            </p>
          </div>
        </div>
      </div>
      <div className={classes.rightColumn}>
        {images.map(image => (
          <ButtonBase
            focusRipple
            key={image.title}
            className={classes.image}
            focusVisibleClassName={classes.focusVisible}
            value={image.title}
            onClick={handlePreset}
            style={{
              width: image.width
            }}
          >
            <span
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`
              }}
            />
            <span className={classes.imageBackdrop} />
            <span className={classes.imageButton}>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                className={classes.imageTitle}
              >
                {image.title}
                <span className={classes.imageMarked} />
              </Typography>
            </span>
          </ButtonBase>
        ))}
        <div className={classes.rules}>
          <h1 className={classes.h1}>Rules</h1>
          <p>
            <ul>
              <li>A live cell with less than 2 neighbors dies</li>
              <li>
                A live cell with 2 - 3 neighbors lives to the next generation
              </li>
              <li>A live cell with more than 3 neighbors dies</li>
              <li>Any dead cell with 3 neighbors comes back to life</li>
            </ul>
          </p>
        </div>
      </div>
    </>
  );
};

//<GridDisplay data={data} toggleLife={toggleLife} />

export default MainContainer;
