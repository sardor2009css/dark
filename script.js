const lightBtn = document.getElementById('lightBtn');
const darkBtn = document.getElementById('darkBtn');
const contentDiv = document.getElementById('content');
const title = document.getElementById('title');
const description = document.getElementById('description');
const getMoreBtn = document.getElementById('moreBtn');

lightBtn.addEventListener('click', () => {
  document.body.style.backgroundColor = '#f5f5dc'; 
  document.body.style.color = '#000'; 
  
  title.style.color = '#000';
  description.style.color = '#000';
  getMoreBtn.style.backgroundColor = '#ffba33';
  getMoreBtn.style.color = '#000';
});


darkBtn.addEventListener('click', () => {
  document.body.style.backgroundColor = '#222'; 
  document.body.style.color = '#fff'; 
  
  title.style.color = '#fff';
  description.style.color = '#fff';
  getMoreBtn.style.backgroundColor = '#555';
  getMoreBtn.style.color = '#fff';
});