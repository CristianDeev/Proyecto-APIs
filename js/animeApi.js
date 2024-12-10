document.getElementById('searchButton').addEventListener('click', function() {
    const query = document.getElementById('searchAnime').value;
    
    // Limpiar los resultados previos antes de hacer una nueva búsqueda
    const dataAlbum = document.getElementById('dataAlbumAnime');
    dataAlbum.innerHTML = '';
    
    if (query) {
        fetchAnimeData(query);
    } else {
        alert("Por favor, escribe el nombre de un anime para buscar.");
    }
});

function fetchAnimeData(query) {
    const url = `https://api.jikan.moe/v4/anime?q=${query}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const dataAlbum = document.getElementById('dataAlbumAnime');
            
            if (data.data.length === 0) {
                dataAlbum.innerHTML = '<p>No se encontraron resultados para esta búsqueda.</p>';
            } else {
                // Almacenar y mostrar los resultados en formato de card más pequeña
                data.data.forEach(anime => {
                    const animeCard = `
                        <div class="col-6 col-md-3 col-lg-2">
                            <div class="card h-100 shadow-sm">
                                <img src="${anime.images.jpg.large_image_url}" class="card-img-top" alt="${anime.title}" style="height: 150px; object-fit: cover;">
                                <div class="card-body p-2">
                                    <h6 class="card-title">${anime.title}</h6>
                                    <p class="card-text" style="font-size: 0.8rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${anime.synopsis}</p>
                                    <a href="${anime.url}" target="_blank" class="btn btn-primary btn-sm">Ver más</a>
                                </div>
                            </div>
                        </div>
                    `;
                    dataAlbum.innerHTML += animeCard;
                });
            }
        })
        .catch(error => console.error('Error fetching data:', error));
}
