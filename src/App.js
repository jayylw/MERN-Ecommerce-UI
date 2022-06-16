import './App.css';
import Navbar from './components/Navbar';
import Announcements from './components/Announcements';
import Silder from './components/Silder';

function App() {
    return (
        <div className="App">
            <Announcements />
            <Navbar />
            <Silder />
        </div>
    );
}

export default App;
