import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DeafultLayout';
import { Card } from './pages/CardPost/Card';
import { PostPage } from './pages/PostPage/Post';

export function Router() {
    return(
        <Routes>
            <Route path='/' element={<DefaultLayout />}>
                <Route path='/' element={<Card />}/>
                <Route path='/Post' element={<PostPage/>}/>
            </Route>
        </Routes>
    );
}