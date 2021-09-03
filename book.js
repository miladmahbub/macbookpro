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
            .then(data => displaybookresult(data))
    }

}
// book found 
const foundBookNamber = document.getElementById('founded-book-namber');
// --- Function: Show Result's Number of Matched 
const showResultNam = (number) =>{
  if( number === 0){
    errorMassage.innerHTML =
    "<h5 class='text-center text-white p-3 bg-info'><b>No Result Found</b></h5>";
  }
  else{
    foundBookNamber.innerHTML =`
    <h4 class='text-center text-white p-3 m-3 bg-info'>${number} Result Found</h4>
   
    `
  }
}
// display book info 
const displaybookresult = (books) => {
  showResultNam(books.numFound);
  const slice = books.docs.slice(0,20)
  const searchresult = document.getElementById('search-result');
  //  searchresult.textContent = '';
  searchresult.innerHTML = '';
  slice.forEach(book => {
    console.log(book);
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `<div class="card h-100">
        <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
        <div class="card-body text-center">
          <h5 class="card-title">Book Name:${book.title}</h5>
          <h5 class="card-title"> Author:${book.author_name[0]}</h5>
          <h6 class="card-title"> First Publish on:${book.first_publish_year}</h6>
          <h6 class="card-title">Publisher Name:${book.publisher[0]}</h6>
          <p class="card-text">.</p>
        </div>
      </div>`;
    searchresult.appendChild(div);

  });

}