import MainContent from './components/MainContent';
import logo from './assets/images/logo.png';

function App() {

  // only comments added
  // another comment here

  return (
    <>
      <header>
        <div id="logo-img">
          <img src={logo} />
        </div>
        <h1>Learn & Master GitHub Actions</h1>
      </header>
      <MainContent />
    </>
  ); 
}

export default App;
