let images = document.querySelectorAll('.imnage-container img');

document.querySelector('#search-box').oninput = () =>{
    var value = document.querySelector('#search-box').value.toLowerCase();
    images.forEach(img => {
        var dataSearch = img.getAttribute('data-search');
        if(dataSearch.indexOf(value) > -1){
            img.style.display = 'inline-block';
        }else{
            img.style.display = 'none';
        }
    })
}

let categoryBtn = document.querySelectorAll('.category .btn');

categoryBtn.forEach(btn =>{
    btn.onclick = () =>{
        dataCategory = btn.getAttribute('data-category');
        if(dataCategory == 'all'){
            img.style.display = 'inline-block';
        }else if(dataCategory == 'dataCat'){
            img.style.display = 'inline-block';
        }else{
            img.style.display = 'none';
        }
    }
})