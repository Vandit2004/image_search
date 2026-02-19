let accessKey = "UfpoAo15RLF0QnLfgfbKgAFu5zyqMOUnqyReplXtJ_U"
let searchInput = document.querySelector("#search-input")
let searchBtn = document.querySelector(".search-btn")
let showMore = document.querySelector(".second-btn")
let showResult = document.querySelector('.show-result')
page = 1;
async function searchImages(){
   let  keyword = searchInput.value
      showResult.innerHTML = "";
    const url = `https://api.unsplash.com/search/photos?page=${page}&per_page=30&query=${keyword}&client_id=${accessKey}`
    let response = await fetch(url)
    let data = await response.json()
    console.log(data)
    const results = data.results;
    results.map((result)=>{
        const image = document.createElement("img");
        image.src = result.urls.small;

        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        showResult.appendChild(imageLink);
    })
}
searchBtn.addEventListener('click',(e)=>{
    e.preventDefault()
   page =1;
    searchImages()
})
showMore.addEventListener('click',()=>{
    page++;
    searchImages();
})
