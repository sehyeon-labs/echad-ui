import { Route, Routes } from 'react-router-dom';
import { PATH } from '@/utils/path';

import PageRoutes from '@/pages';

import '@/App.css';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route index element={<PageRoutes.IndexPage/>}/>
        <Route path={PATH.INVITATION} element={<PageRoutes.Invitation/>}/>
      </Routes>
    </div>
  )
}

export default App