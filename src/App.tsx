import { Link } from 'react-router';
import './App.css';

function App() {
  return (
    <>
      <h1> Good luck! </h1>
      <p> Instructions in "README.md" file</p>
      <Link to="/products">Go to product list page</Link>
    </>
  );
}

export default App;
