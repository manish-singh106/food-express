import ReactDOM from 'react-dom/client';
import Header from './src/components/Header/Header';
import Restaurants from './src/components/Restaurants/Restaurants';

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

