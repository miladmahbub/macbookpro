const searchbook = () => {
  const searchfield = document.getElementById('search-field');
  const searchtext = searchfield.value;
  searchfield.value = '';
  if (searchtext === '') {
        const foundBooks = document.getElementById('foundBooks');
        foundBooks.innerHTML = ` <h1 class="text-red">Please Search Valid Books</h1>`;
    } else {
        const url = `https://openlibrary.org/search.json?q=${searchtext}`;
        fetch(url)
            .then(res => res.json())
            .then(data => displaybookresult(data.docs))
    }

}
// book found 

// display book info 
const displaybookresult = (docs) => {
  const searchresult = document.getElementById('search-result');
  //  searchresult.textContent = '';
  searchresult.innerHTML = '';
  docs.forEach(book => {
    console.log(book);
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `<div class="card h-100">
        <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
        <div class="card-body text-center">
          <h5 class="card-title">book name:${book.title}</h5>
          <h5 class="card-title"> author:${book.author_name[0]}</h5>
          <h6 class="card-title"> first publish on:${book.first_publish_year}</h6>
          <h6 class="card-title">publisher name:${book.publisher[0]}</h6>
          <p class="card-text">.</p>
        </div>
      </div>`;
    searchresult.appendChild(div);

  });

}