import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/global.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './components/Home/home'
import { About } from './components/About/about'
import { Menu } from './components/Menu/menu'
import { Post } from './components/Post/post'
import { Posts } from './components/Posts/posts'
import { Redirect } from './components/Redirect/redirect'
import { NotFound } from './components/NotFound/notfound'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <Menu />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      {/* <Route path='/posts/:id' element={<Posts />} />  */}
      <Route path='/posts' element={<Posts />}>
        <Route path=':id' element={<Post />} />
        </Route>
        <Route path='/posts' element={<Posts />} />
      <Route path='/redirect' element={<Redirect />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
