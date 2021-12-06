import { HookUseCallback } from './hooks/useCallback';
import { HookUseEffect } from './hooks/useEffect';
import { HookUseState } from './hooks/useState';
import HookUseMemo from './hooks/useMemo';
import HookUseRef from './hooks/useRef';

import './App.css';

function App() {
  return (
    <>
      <h1 className='haeders-components'>HookUseState</h1>
      <HookUseState/>
      <h1 className='haeders-components'>HookUseEffect</h1>
      <HookUseEffect/>
      <h1 className='haeders-components'>HookUseCallback</h1>
      <HookUseCallback/>
      <h1 className='haeders-components'>HookUseMemo</h1>
      <HookUseMemo/>
      <h1 className='haeders-components'>HookUseRef</h1>
      <HookUseRef/>

    </>
  );
}

export default App;
