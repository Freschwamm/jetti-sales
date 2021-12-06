import React, {useState, useEffect} from "react";
import "./SalesData.css"

const SalesData = () => {


    const [allSales, setAllSales] = useState([]);


    const jettiSales = async () => {
        const response = await fetch("http://localhost:4000")
        let jettiSalesData = await response.json();
        setAllSales(jettiSalesData)
    }

    useEffect(() => {
        jettiSales()
    }, [])


    console.log(allSales[0])


    return (
        <div>
            <div>
                <table>
                    <tr>
                        <th>Reference</th>
                        <th>Status</th>
                        <th>Billing Full Name</th>
                        <th>Inventory Status</th>
                        <th>Tags</th>
                        <th>Created at</th>
                        <th>Payment Status</th>

                    </tr>
                {allSales.map((sales, index) => {
                    return (
                        <tr value={index}>
                            <td>{sales.reference}</td>
                            <td>{sales.status}</td>
                            <td>{sales.billingFullName}</td>
                            <td>{sales.inventoryStatus}</td>
                            <td>{sales.tags}</td>
                            <td>{sales.createdAt}</td>
                            <td>{sales.paymentStatus}</td>
                        </tr>

                    )
                })}
                </table>
            </div>
        </div>
    );
}
export default SalesData
