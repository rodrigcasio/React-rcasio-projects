import React from 'react';
import NovelBlog from './Components/NovelBlog';

function App() {
  const novel = {   // this is justa local variable variable that holds appropiate data for title, author, description, and type components 
    title: 'Harry Potter',
    author: 'J. K. Rowling',
    description: 'A world full of wizards and magic',
    type: 'Fiction',
    body: "Harry Potter is about an orphaned boy who discovers he's a wizard and attends a magical school called Hogwarts. He and his friends navigate their studies while uncovering secrets about his past and facing off against the dark wizard who killed his parents."
  };

  return (
    <>
      <div className="app">
        <NovelBlog title={novel.title} author={novel.author}
          type={novel.type} description={novel.description} body={novel.body}/>
      </div>
    </>
  );
}
export default App
