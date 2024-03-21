import Breadcrumbs from './shared/ui/Breadcrums/Breadcrums';
import Header from './widgets/Header/Header';
import Navbar from './widgets/Navbar/Navbar';

function App() {
    return (
        <div className="App">
            <Header />
            <Navbar />
            <Breadcrumbs />
        </div>
    );
}

export default App;
