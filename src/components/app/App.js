import '../../style/style.scss'

import AppHeader from '../appHeader/AppHeader';
import RandomChar from '../randomChar/RandomChar';
import CharInfo from '../charinfo/CharInfo';
import CharCards from '../charCards/CharCards'

function App() {
  return (
    <div className="app">
      <AppHeader />
      <main>
        <RandomChar name={'NAME'} />
        <div className='char__info'>
          <CharInfo />
          <CharCards />
        </div>
      </main>
    </div>
  );
}

export default App;
