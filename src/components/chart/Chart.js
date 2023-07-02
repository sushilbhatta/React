import ChartBar from "./ChartBar";
import  './ChartBar.css'
const Chart = (props) => {
    const dataPointValue=props.dataPoints.map((datapoint)=>datapoint)
    const totalMaximum=Math.max(...dataPointValue)
  return (
    <div className="chart">
      {props.dataPoints.map((datapoint) => {
        <ChartBar
          key={datapoint.label}
          value={datapoint.value}
          maxValue={totalMaximum}
          label={datapoint.label}
        />;
      })}
    </div>
  );
};
export default Chart;
