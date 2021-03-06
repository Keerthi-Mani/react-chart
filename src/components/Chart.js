import React, { Component } from "react";
import { Bar, Line, Pie, Doughnut } from "react-chartjs-2";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: [
          "Boston",
          "Worcester",
          "Springfield",
          "Lowell",
          "Cambridge",
          "New Bedford"
        ],
        datasets: [
          {
            label: "Population",
            data: [617594, 181045, 153060, 106519, 105162, 95072],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
              "rgba(255, 159, 64, 0.6)",
              "rgba(255, 99, 132, 0.6)"
            ]
          }
        ]
      }
    };
  }

  // Default display
  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: "right",
    location: "City"
  };

  render() {
    return (
      <div className="chart">
        {/* Bar Chart */}
        <Bar
          data={this.state.chartData}
          width={100}
          height={50}
          options={{
            title: {
              //   display: true,
              display: this.props.displayTitle,
              text: "Largest Cities In " + "" + this.props.location,
              fontSize: 30
            },
            legend: {
              //   display: true,
              // position: "right"
              display: this.props.displayLegend,
              position: this.props.legendPosition
            }
          }}
        />
        <br />
        <br />
        {/* Line Chart */}
        <Line
          data={this.state.chartData}
          width={100}
          height={50}
          options={{
            title: {
              //   display: true,
              display: this.props.displayTitle,
              text: "Largest Cities In " + "" + this.props.location,
              fontSize: 30
            },
            legend: {
              //   display: true,
              // position: "right"
              display: this.props.displayLegend,
              position: this.props.legendPosition
            }
          }}
        />

        <br />
        <br />
        {/* Pie Chart */}
        <Pie
          data={this.state.chartData}
          width={100}
          height={50}
          options={{
            title: {
              //   display: true,
              display: this.props.displayTitle,
              text: "Largest Cities In " + "" + this.props.location,
              fontSize: 30
            },
            legend: {
              //   display: true,
              // position: "right"
              display: this.props.displayLegend,
              position: this.props.legendPosition
            }
          }}
        />

        <br />
        <br />
        {/* Doughnut Chart */}
        <Doughnut
          data={this.state.chartData}
          width={100}
          height={50}
          options={{
            title: {
              //   display: true,
              display: this.props.displayTitle,
              text: "Largest Cities In " + "" + this.props.location,
              fontSize: 30
            },
            legend: {
              //   display: true,
              // position: "right"
              display: this.props.displayLegend,
              position: this.props.legendPosition
            }
          }}
        />
      </div>
    );
  }
}
export default Chart;
