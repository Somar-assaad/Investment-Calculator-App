import {calculateInvestmentResults,formatter} from '../util/investment'
export default function Result({input}){
    const invesData=calculateInvestmentResults(input);
    const initialInvestment=invesData[0].valueEndOfYear-
            invesData[0].interest-
            invesData[0].annualInvestment;
    console.log(invesData)
    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {invesData.map((invesIndex)=>{
                    const totalIntterest=invesIndex.valueEndOfYear- invesIndex.annualInvestment*invesIndex.year - initialInvestment;
                    const totalAmountInvested=invesIndex.valueEndOfYear-totalIntterest;
                 return(  <tr key={invesIndex.year}>
                        <td>{invesIndex.year}</td>
                        <td>{formatter.format(invesIndex.valueEndOfYear)}</td>
                        <td>{formatter.format(invesIndex.interest)}</td>
                        <td>{formatter.format(totalIntterest)}</td>
                        <td>{formatter.format(totalAmountInvested)}</td>
                    </tr>)
                })}
            </tbody>
        </table>
    )
}