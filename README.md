# react-chartjs-2

React wrapper for Chart.js 2 Open for PRs and contributions!

## Examples

To build the examples locally, run:

```
npm install
npm start
```

Then open localhost:3000 in a browser.

## Installation via NPM

```
npm install --save react-chartjs-2 chart.js
```

## Usage

Check example/src/components/\* for usage.

```
import { Doughnut } from 'react-chartjs-2';

<Doughnut data={...} />
```

### Properties

- data: (PropTypes.object | PropTypes.func).isRequired,
- width: PropTypes.number,
- height: PropTypes.number,
- id: PropTypes.string,
- legend: PropTypes.object,
- options: PropTypes.object,
- redraw: PropTypes.bool,
- getDatasetAtEvent: PropTypes.func,
- getElementAtEvent: PropTypes.func,
- getElementsAtEvent: PropTypes.func
- onElementsClick: PropTypes.func, // alias for - getElementsAtEvent (backward compatibility)

### Custom size

In order for Chart.js to customize the size you need not to set maintainAspectRatio to false, example:

```
<Bar
data={data}
width={100}
height={50}
options={{ title: {
              display: true,
              text: "Largest Cities In New York",
              fontSize: 30
            },
            legend: {
              display: true,
              position: "right"
            }
          }}
/>
```

## Screenshots

### Pie Chart

<img width="906" alt="Screen Shot 2020-02-07 at 7 09 26 PM" src="https://user-images.githubusercontent.com/52920074/74074731-73587b00-49dd-11ea-864f-b5623080770b.png">

### Bar Chart

<img width="1132" alt="Screen Shot 2020-02-07 at 7 09 44 PM" src="https://user-images.githubusercontent.com/52920074/74074733-7489a800-49dd-11ea-9eb4-fc05c4b44c44.png">

### Line Chart

<img width="1135" alt="Screen Shot 2020-02-07 at 7 10 24 PM" src="https://user-images.githubusercontent.com/52920074/74074756-8bc89580-49dd-11ea-85cf-34996f547c7e.png">

### Doughnut Chart

<img width="976" alt="Screen Shot 2020-02-07 at 7 10 35 PM" src="https://user-images.githubusercontent.com/52920074/74074758-8f5c1c80-49dd-11ea-95c2-7c232751c72b.png">

## Development (src, lib and the build process)

NOTE: The source code for the component is in src. A transpiled CommonJS version (generated with Babel) is available in lib for use with node.js, browserify and webpack. A UMD bundle is also built to dist, which can be included without the need for any build system.

To build, watch and serve the examples (which will also watch the component source), run npm start. If you just want to watch changes to src and rebuild lib, run npm run watch (this is useful if you are working with npm link).

## License

[MIT Licensed](https://github.com/jerairrest/react-chartjs-2/blob/master/LICENSE.md) Copyright (c) 2020 Keerthi Mani
