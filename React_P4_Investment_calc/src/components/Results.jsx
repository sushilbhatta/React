import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ input }) {
  const resultData = calculateInvestmentResults(input);
  const inintialInvestment =
    resultData[0].valueEndOfYear -
    resultData[0].interest -
    resultData[0].annualInvestment;
  {
    console.log(resultData);
  }
  return (
    <table id='result'>
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment year</th>
          <th>Intrest(year)</th>
          <th>total intereast</th>
          <th>Investment </th>
        </tr>
      </thead>
      <tbody>
        {resultData.map((yearData) => {
          const totalIntrest =
            yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year -
            inintialInvestment;
          const totalAmountInvested = yearData.valueEndOfYear - totalIntrest;
          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalIntrest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
