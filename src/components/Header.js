const Header = (props) => {
	return (
		<header>
			<h1 style={{color:'red', backgroundColor:'black'}}>{props.title}</h1>
		</header>
	)
}

Header.defaultProps = {
	title: 'Task Tracker',
}

export default Header