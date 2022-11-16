import React from 'react'

export default function StakingTables({data}) {
	return (
		<table className="table text-white">
		  <TableHead />
		  <TableBody data={data} />
		</table>
	)
}

function TableHead() {
	return (
		<thead>
		  <tr>
		    <th scope="col">Assets</th>
		    <th scope="col">Percent Interest</th>
		    <th scope="col">Staked</th>
		    <th scope="col">Interest</th>
		    <th scope="col">Days Remaining</th>
		    <th scope="col"></th>
		  </tr>
		</thead>
	)
}

function TableBody({data}) {
	return (
	  <tbody>
	  	{
	  		data.map((item, index) => 
			    <tr>
			      <th>
			      	<img src={item.assets} alt="icons"/>
			      </th>
			      <td>{item.percentInterest}%</td>
			      <td>{item.staked}</td>
			      <td>{item.interest}</td>
			      <td>{item.daysRemaining}</td>
			      <td>
			      	<button className="btn bg-white text-custom rounded-pill text-white fw-bold" type="submit">Withdraw</button>
			      </td>
			    </tr>
	  		)
	  	}
		</tbody>
	)
}