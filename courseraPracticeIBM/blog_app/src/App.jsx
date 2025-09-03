import React from 'react';
import NovelBlog from './Components/NovelBlog';
import './App.css';
function App() {
  const novel = {   // this is justa local variable variable that holds appropiate data for title, author, description, and type components 
    title: 'Harry Potter',
    author: 'J. K. Rowling',
    description: 'A world full of wizards and magic',
    type: 'Fiction',
    body: "Harry Potter is about an orphaned boy who discovers he's a wizard and attends a magical school called Hogwarts. He and his friends navigate their studies while uncovering secrets about his past and facing off against the dark wizard who killed his parents.\n Harry Potter is a seven-book fantasy series about a young wizard named Harry Potter and his friends Hermione Granger and Ron Weasley. The story follows their years at Hogwarts School of Witchcraft and Wizardry, where they face the growing threat of Lord Voldemort, the dark wizard who murdered Harry's parents. The series explores themes of love, friendship, loss, and the eternal battle between good and evil as Harry uncovers the truth about his past and prepares for his final confrontation with Voldemort."
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
