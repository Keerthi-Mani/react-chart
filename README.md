# react-chartjs-2

React wrapper for Chart.js 2 Open for PRs and contributions!

## Examples

Live demo: jerairrest.github.io/react-chartjs-2

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
