import ReactDOM from 'react-dom/client';
import Header from './components/Header/Header';
import Restaurants from './components/Restaurants/Restaurants';

const App = () => {
  return (
    <div>
      <Header/>
      <Restaurants/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)

