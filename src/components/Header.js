import Button from './Button'

const Header = (props) => {
	return (
		<header className='header'>
			<h1>{props.title}</h1>
			<Button />
		</header>
	)
}

Header.defaultProps = {
	title: 'Task Tracker',
}

// CSS in js

// const HeaderStyle = {
// 	color:'red',
// 	backgroundColor:'black'
// }

export default Header