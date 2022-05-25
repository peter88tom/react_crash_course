const Header = (props) => {
	return (
		<header>
			<h1 style={HeaderStyle}>{props.title}</h1>
		</header>
	)
}

Header.defaultProps = {
	title: 'Task Tracker',
}

const HeaderStyle = {
	color:'red',
	backgroundColor:'black'
}

export default Header