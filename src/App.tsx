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

        <Route path={PATH.PLAN} element={<PageRoutes.Plan/>}/>
        <Route path={PATH.EDITOR} element={<PageRoutes.Editor/>}/>
        <Route path={PATH.GUESTBOOK} element={<PageRoutes.Guestbook/>}/>
        <Route path={PATH.GALLERY} element={<PageRoutes.Gallery/>}/>
        <Route path={PATH.NOTICE} element={<PageRoutes.Notice/>}/>
        <Route path={PATH.SETTING} element={<PageRoutes.Setting/>}/>
      </Routes>
    </div>
  )
}

export default App