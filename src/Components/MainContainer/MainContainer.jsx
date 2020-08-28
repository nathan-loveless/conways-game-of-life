import React, { useState, useEffect, useCallback, useRef } from "react";
import GridDisplay from "../GridDisplay/GridDisplay";
import { sharedStyles } from "../../material-ui/styles/sharedStyles";
import { Button, ButtonBase, Typography } from "@material-ui/core";
import produce from "immer";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { images } from "../../images";
import { operations } from "../../utilities/constants";
import { stillTiles } from "../../utilities/constants";
import { generateEmptyGrid } from "../../utilities/gridGeneration";
import { generatePrefabGrid } from "../../utilities/gridGeneration";
import Slider from "@material-ui/core/Slider";

let classNames = require("classnames");

const MainContainer = () => {
  const classes = sharedStyles();

  const [speed, setSpeed] = useState(500);
  const speedRef = useRef(speed);
  speedRef.current = speed;
  const [gridClass, setGridClass] = useState(classes.gridDefault);
  const [gridSize, setGridSize] = useState(25);
  const [generation, setGeneration] = useState(0);
  const [running, setRunning] = useState(false);
  const runningRef = useRef(running);
  runningRef.current = running;

  const genRef = useRef(generation);
  genRef.current = generation;

  const [data, setData] = useState(() => {
    return generateEmptyGrid(25, setGeneration);
  });

  const valueText = value => {
    return `${value}s`;
  };

  const onSpeedChange = (event, value) => {
    setSpeed(1000 * value);
    speedRef.current = 1000 * value;
  };

  const handlePreset = event => {
    setData(generatePrefabGrid(gridSize, event.currentTarget.value));
  };

  const handleChange = event => {
    setGridSize(event.target.value);
    switch (event.target.value) {
      case 30: {
        setGridClass(classes.gridSmall);
        break;
      }
      case 35: {
        setGridClass(classes.gridMedium);
        break;
      }
      case 40: {
        setGridClass(classes.gridLarge);
        break;
      }
      default: {
        setGridClass(classes.gridDefault);
      }
    }
    setData(generateEmptyGrid(event.target.value, setGeneration));
  };

  const runSimulation = useCallback(() => {
    if (!runningRef.current) {
      return;
    }
    setGeneration(genRef.current + 1);

    setData(data => {
      return produce(data, dataCopy => {
        for (let i = 0; i < gridSize; i++) {
          for (let j = 0; j < gridSize; j++) {
            let neighbors = 0;
            operations.forEach(([x, y]) => {
              const newI = i + x;
              const newJ = j + y;
              if (
                newI >= 0 &&
                newI < gridSize &&
                newJ >= 0 &&
                newJ < gridSize
              ) {
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
    });
    console.log(speed);
    setTimeout(runSimulation, speedRef.current);
  }, []);

  return (
    <>
      <div className={classes.root}>
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
        <Button
          onClick={() => {
            setRunning(!running);
            if (!running) {
              runningRef.current = true;
              runSimulation();
            }
          }}
        >
          {running ? "Stop" : "Start"}
        </Button>
        <Button
          onClick={() => {
            !running && setData(generateEmptyGrid(gridSize, setGeneration));
          }}
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
            getAriaValueText={valueText}
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
      <div className={classes.root}>
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
      </div>
    </>
  );
};

//<GridDisplay data={data} toggleLife={toggleLife} />

export default MainContainer;
