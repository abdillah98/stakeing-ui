
export default function Navbar({menu}) {
	return (
		<nav className="navbar navbar-expand-lg bg-custom mb-5">
		  <div className="container">
		    <a className="navbar-brand fw-bold text-white" href="#">Staking Coins</a>
		    <ButtonToggle />
		    <Menu menu={menu}/>
		  	<button className="btn btn-info rounded-pill text-white fw-bold" type="submit">Connnect</button>
		  </div>
		</nav>
	)
}

function ButtonToggle() {
	return (
		<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		  <span className="navbar-toggler-icon"></span>
		</button>
	)
}

function Menu({menu}) {
	return (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        {
        	menu.map((item, index) => 
        		<li className="nav-item" key={index}>
        		  <a className="nav-link fw-bold text-white" href="#">{item}</a>
        		</li>
        	)
        }
  		</ul>
  	</div>
	)
}