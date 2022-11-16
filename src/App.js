import React from 'react';
import './App.css';
import EthLogo from './images/eth-logo.png';
import IconCoin from './icons/icon-coin.png';
import Navbar from './components/Navbar';
import StakingOptions from './components/StakingOptions';
import StakingTables from './components/StakingTables';

const menuData = [
	"Market",
	"Exchange",
	"Tutorials",
	"Wallets",
];

const stakingOptions = [
	{id: 1, time: "1 Months", percent: 7, icon: IconCoin},
	{id: 2, time: "3 Months", percent: 10, icon: IconCoin},
	{id: 1, time: "6 Months", percent: 12, icon: IconCoin},
]

const stakingData = [
	{
		id: 1, 
		assets: EthLogo, 
		percentInterest: 7, 
		staked: 0.5, 
		interest: 0.35, 
		daysRemaining: 30
	},
	{
		id: 1, 
		assets: EthLogo, 
		percentInterest: 7, 
		staked: 0.5, 
		interest: 0.35, 
		daysRemaining: 30
	}
];

const App = () => {
	return (
		<>
			<Navbar menu={menuData} />
			<div className="container">
				<div className="row justify-content-center mb-5">
					<div className="col-md-8">
						<div className="card bg-custom">
							<div className="card-body">
								<h5 className="text-white text-center mb-4">Ethereum Market</h5>
								<div className="row justify-content-center">
									{
										stakingOptions.map((item, index) =>
											<div className="col-md-3" key={index}>
												<StakingOptions 
													icon={item.icon}
													time={item.time}
													percent={item.percent}
												/>
											</div>
										)
									}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-md-8">
						<div className="card bg-custom">
							<div className="card-body">
								<h5 className="text-white text-center mb-4">Staked Assets</h5>
								<StakingTables data={stakingData}/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default App