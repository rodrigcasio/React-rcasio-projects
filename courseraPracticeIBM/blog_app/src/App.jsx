import React from 'react';
import NovelBlog from './Components/NovelBlog';
import './App.css';
function App() {
  const novel = {   // this is justa local variable variable that holds appropiate data for title, author, description, and type components 
    title: 'Harry Potter',
    author: 'J. K. Rowling',
    description: 'A world full of wizards and magic',
    type: 'Fiction',
    body: "The Harry Potter series follows the journey of an orphaned boy named Harry Potter, who discovers on his eleventh birthday that he is a wizard. He is invited to attend Hogwarts School of Witchcraft and Wizardry, where he makes two loyal friends, Ron Weasley and Hermione Granger. As the series progresses, Harry learns about his past and the events that led to his parents' deaths at the hands of the evil dark wizard, Lord Voldemort. With the help of his friends and allies, Harry grows more powerful, all while uncovering the truth about his destiny and preparing for a final, climactic confrontation with Voldemort. The books explore deep themes of love, loss, courage, and the power of friendship in the face of immense darkness." 
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
