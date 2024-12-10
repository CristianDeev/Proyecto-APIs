document.addEventListener("DOMContentLoaded", function() {
    fetchRickAndMortyData();
});

function fetchRickAndMortyData() {
    const url = 'https://rickandmortyapi.com/api/character/';
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const dataAlbum = document.getElementById('dataAlbumRickAndMorty');
            data.results.forEach(character => {
                const characterCard = `
                    <div class="col">
                        <div class="card">
                            <img src="${character.image}" class="card-img-top" alt="${character.name}">
                            <div class="card-body">
                                <h5 class="card-title">${character.name}</h5>
                                <p class="card-text">${character.species}</p>
                            </div>
                        </div>
                    </div>
                `;
                dataAlbum.innerHTML += characterCard;
            });
        })
        .catch(error => console.error('Error fetching data:', error));
}

