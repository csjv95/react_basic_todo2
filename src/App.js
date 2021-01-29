import Header from './components/headers/header';
import Input from './components/input/input';
import Todos from './components/todos/todos';
import './app.css';

function App() {
  return (
    <main>
      <Header />
      <Input />
      <Todos />
    </main>
  );
}

export default App;
