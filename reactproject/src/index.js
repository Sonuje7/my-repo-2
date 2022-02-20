import React from 'react';
import ReactDOM from 'react-dom';

import './main.css';

function BookList() {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}
const Book = () => {
  return (
    <article className='book'>
      <Image></Image>
      <Title />
      <Author />
    </article>
  );
};
const Image = () => {
  return (
    <img
      src='https://images-na.ssl-images-amazon.com/images/I/51p2SDOCV9L._AC_SX368_.jpg'
      alt='image'
    />
  );
};
const Title = () => {
  return <h1>I Love You to the Moon and Back</h1>;
};
const Author = () => {
  return <h4>by Amelia Hepworth</h4>;
};
ReactDOM.render(<BookList />, document.getElementById('root'));
