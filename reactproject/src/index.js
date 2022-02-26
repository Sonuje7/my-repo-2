import React from 'react';
import ReactDOM from 'react-dom';

import './main.css';

const Books = [
  {
    id: 1,
    img: 'https://images-na.ssl-images-amazon.com/images/I/51p2SDOCV9L._AC_SX368_.jpg',
    title: 'I Love You to the Moon and Back',
    author: 'by Amelia Hepworth',
  },
  {
    id: 2,
    img: 'https://images-na.ssl-images-amazon.com/images/I/81qHEkVVniL._AC_UL254_SR254,254_.jpg',
    title: 'Family Money',
    author: 'by Chad',
  },
  {
    id: 3,
    img: 'https://images-na.ssl-images-amazon.com/images/I/911cmGSgcvL._AC_UL127_SR127,127_.jpg',
    title: 'Will',
    author: 'by Chad',
  },
];
function BookList() {
  return (
    <section className='booklist'>
      {Books.map((book) => {
        return <Book key={book.id} book={book}></Book>;
        // return <Book key={book.id} {...book}></Book>; || method 2
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props.book;
  // const { img, title, author } = props; || method 2
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById('root'));
