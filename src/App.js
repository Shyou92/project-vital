import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import BugTracker from './components/BugTracker/BugTracker';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route path='/bugtracker' element={<BugTracker />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
