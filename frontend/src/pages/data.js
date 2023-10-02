import React from "react";
import {useState} from "react";
import {useEffect} from "react";


function Data() {
	const [data, setData] = useState([])
	useEffect(()=> {
		fetch('http://localhost:8081/ingredients')
		.then(res => res.json())
		.then(data => setData(data))
		.catch(err => console.log(err));
	}, [])
	//console.log(data);
	return (
		<div style={{padding: "40px"}}>
			<h1>
				The database entries can be seen below
			</h1>
			<table>
				<thread>
					<th>Ingredient</th>
					<th>Quantity</th>
					<th>Expiry</th>
					{/* <th>Customer ID</th> */}
				</thread>
				<tbody>
					{data.map((d, i) => (
						<tr key={i}>
							<td>{d.ingredient}</td>
							<td>{d.quantity}</td>
							<td>{d.expiry}</td>
							{/* <td>{d.customerID}</td> */}
						</tr>	
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Data;
