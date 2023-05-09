import './App.css';
import AppHeader from './appHeader/AppHeader';
import RandomChar from './randomChar/RandomChar';


let plugImg = <img src="https://i.pinimg.com/564x/b9/11/db/b911dbd417c2eac3fa7b02db2da7446a.jpg" alt="" />


function App() {
  return (
    <div className="App">
      <div className="body">
        <AppHeader />
        <main>


          <RandomChar img={plugImg} />

        </main>
      </div>
    </div>
  );
}

export default App;
