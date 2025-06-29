import './App.css';
import { PriceCalculator } from './components/PriceCalculator';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-2">
      <PriceCalculator />
    </div>
  );
}

export default App;
