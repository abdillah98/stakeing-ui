import React from 'react'

export default function StakingOptions({icon, time, percent}) {
	return (
		<div className="d-flex align-items-center">
			<div className="box-icon me-2 cursor-pointer">
				<img src={icon} alt="icons" width="24"/>
			</div>
			<div className="box-text">
				<strong className="d-block text-white">{time}</strong>
				<small className="d-block text-white-light">{percent}%</small>
			</div>
		</div>
	)
}