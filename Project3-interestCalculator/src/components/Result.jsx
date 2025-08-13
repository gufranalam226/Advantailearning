import React from 'react'
import {calculateInvestmentResults, formatter} from '../util/investment.js'

function Result({input}) {
    const resultData = calculateInvestmentResults(input)
    console.log(resultData)
  return (
    <table id='result'>
        <thead>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest(Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
        </thead>
        <tbody>
            {
                resultData.map((yearData)=>{
                    return <tr key={yearData.year}>
                        <td>{yearData.year}</td>
                        <td>{formatter.format(yearData.valueEndOfYear)}</td>
                        <td>{formatter.format(yearData.interest)}</td>
                        <td>{yearData.annualInvestment}</td>
                    </tr>
                })
            }
        </tbody>
      
    </table>
  )
}

export default Result
