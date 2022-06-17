import './App.css';
import Navbar from './components/Navbar';
import Announcements from './components/Announcements';
import Silder from './components/Silder';
import Categories from './components/Categories';
import Products from './components/Products';

function App() {
    return (
        <div className="App">
            <Announcements />
            <Navbar />
            <Silder />
            <Categories />
            <Products />
        </div>
    );
}

export default App;
