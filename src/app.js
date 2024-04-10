// import _ from 'lodash';
import onChange from 'on-change';
import axios from 'axios';

export default () => {
  const formHTML = `
    <div class="col-auto">
      <i class="fas fa-search h4 text-body mr-2"></i>
    </div>
    <div class="col">
    <input class="form-control form-control-lg form-control-borderless" type="search"
      placeholder="Search topics or keywords">
    </div>
    <div class="col-auto">
      <button class="btn btn-lg btn-success" type="submit">Search</button>
    </div>`;

    const searchContainer = document.querySelector('.search-form-container');
    const submit = document.querySelector('button[type="submit"]');
    const form = document.querySelector('form')
    searchContainer.innerHTML = formHTML;

    form.addEventListener('submit', (e) => {
      e.preventDefault()
      axios.get('/goods')
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    })
};