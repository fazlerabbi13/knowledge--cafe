import { useState } from 'react'  
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'
import Bookmarks from './components/Bookmarks/bookmarks'
function App() {
  const [bookmarks ,setBookmarks] =useState([]);

  const handleAddToBookmark = blog => {
       const newBookmarks = [...bookmarks,blog];
       setBookmarks(newBookmarks);

}

  return (
    <>
    <Header></Header>
    <div className='md:flex p-4 max-w-7xl mx-auto'>
    <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
    <Bookmarks bookmarks={bookmarks} ></Bookmarks>
    </div>
    </>
  )
}

export default App
