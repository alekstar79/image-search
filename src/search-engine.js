// noinspection JSDeprecatedSymbols,JSValidateTypes

const { VITE_ACCESS_KEY: ACCESS_KEY } = import.meta.env

let searchForm, searchBox, searchResult, showMoreBtn, page, keyword = ''

async function searchImages()
{
  keyword = searchBox.value

  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${ACCESS_KEY}&per_page=12`

  const response = await fetch(url)
  const data = await response.json()

  if (page === 1) {
    searchResult.innerHTML = ''
  }

  const results = data.results || []

  results.forEach(result => {
    const image = document.createElement('img')
    const link = document.createElement('a')

    image.src = result.urls.small
    link.href = result.urls.full
    link.target = '_blank'

    link.appendChild(image)
    searchResult.appendChild(link)
  })

  showMoreBtn.style.display = page < data.total_pages ? 'block' : 'none'
}

export function setup()
{
  searchForm = document.getElementById('search-form')
  searchBox = document.getElementById('search-box')
  searchResult = document.getElementById('search-result')
  showMoreBtn = document.getElementById('show-more-btn')

  searchForm.addEventListener('submit', async e => {
    e.preventDefault()

    page = 1

    try {

      await searchImages()

    } catch (e) {
    }

  })

  showMoreBtn.addEventListener('click', async () => {
    page++

    try {

      await searchImages()

    } catch (e) {
    }

  })
}
