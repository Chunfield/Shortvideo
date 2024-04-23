import './style.css';
import Toparea from './top';
import Asidearea from './aside';
import Mainarea from './main';

function App() {
  return (
    <div className="container">
      <Asidearea />
      <div className="content">
        <Toparea />
        <Mainarea />
      </div>
    </div>
  );
}
export default App;
