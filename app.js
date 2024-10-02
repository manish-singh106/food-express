import ReactDOM from 'react-dom';
import Header from './src/components/Header/Header';


const App = () => {
  return (
    <div>
      <Header/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)

