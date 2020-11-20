import './App.css';
import { useState } from 'react';

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false)
  return (
    <div className="App">
      {!isSignedIn &&
        <button onClick={() => setIsSignedIn(true)}>
          Sign in
        </button>
      }

      {isSignedIn &&
        <button onClick={() => setIsSignedIn(false)}>
          Sign out
        </button>
      }
    </div>
  );
}

export default App;
