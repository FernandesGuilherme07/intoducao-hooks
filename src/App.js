import { HookUseCallback } from './hooks/useCallback';
import { HookUseEffect } from './hooks/useEffect';
import { HookUseState } from './hooks/useState';

import './App.css'

function App() {
  return (
    <>
      <h1 className='haeders-components'>HookUseState</h1>
      <HookUseState/>
      <h1 className='haeders-components'>HookUseEffect</h1>
      <HookUseEffect/>
      <h1 className='haeders-components'>HookUseCallback</h1>
      <HookUseCallback/>
    </>
  );
}

export default App;
