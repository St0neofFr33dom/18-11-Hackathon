import { useState } from 'react';
import Searchbar from './components/searchbar';
import reactLogo from './assets/react.svg';
import.meta.env;
import './App.css';

function App() {
    const [count, setCount] = useState(0);

    console.log(import.meta.env.VITE_SECRET);

    return (
        <div className='App'>
            <Searchbar />
        </div>
    );
}

export default App;
