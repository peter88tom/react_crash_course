import Button from './Button'

const Header = (props) => {

	const onClick = () => {
		console.log('Clicked from header')
	}


	return (
		<header className='header'>
			<h1>{props.title}</h1>
			<Button color='green' text='Add' onClick={onClick} />
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