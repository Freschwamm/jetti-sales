import React, {useState, useEffect} from "react";


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
            {allSales.map((sales, index) => {
                return (
                    <option value={index}>{sales.reference}</option>
                )
            })}
        </div>
    );
}
export default SalesData
