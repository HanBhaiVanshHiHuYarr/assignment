import React, {FC} from 'react';
import BottomPane from './Components/BottomPane';
import TopPane from './Components/TopPane';

const App: FC = () => {
  //some random comment to check ngrok 3
  return (
    <div className="w-screen bg-slate-50 h-full flex flex-col">
      <h1 className="p-4 py-2 font-semibold text-3xl text-neutral-800">
        Company Settings
      </h1>
      <TopPane />
      <BottomPane />
    </div>
  );
};

export default App;
