import Nav from './components/Nav';
import { useState } from 'react';

function App() {
  
  const [tabs] = useState(['Home', 'Services', 'Schedule a Service', 'Leave a Review']);
  const [currentTab, setCurrentTab] = useState(tabs[0]);

  return (
    <div className="App">
      <Nav 
        tabs={tabs}
        setCurrentTab={setCurrentTab}
        currentTab={currentTab}
      />
    </div>
  );
}

export default App;
