import logo from './assets/images/logo.png';
import MainContent from './components/MainContent';

function App() {
	return (
		<>
			<header>
				<div id='logo-img'>
					<img src={logo} />
				</div>
				<h1>Muhammadqodir Muminov</h1>
			</header>
			<MainContent />
		</>
	);
}

export default App;
