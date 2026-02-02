import { Route, Routes } from 'react-router-dom';
import { PATH } from '@/utils/path';

import PageRoutes from '@/pages';

import '@/App.css';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route index element={<PageRoutes.Dashboard/>}/>
        <Route path={PATH.LOGIN} element={<PageRoutes.Login/>}/>
        <Route path={PATH.INDEX} element={<PageRoutes.IndexPage/>}/>
      </Routes>
    </div>
  )
}

export default App