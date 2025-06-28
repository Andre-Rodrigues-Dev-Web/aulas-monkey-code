// Array de álbuns, cada um com suas fotos
const albuns = [
    {
        nome: "Viagem de Primavera",
        dataCadastro: "2025-06-28",
        descricao: "Fotos da viagem pela Europa.",
        fotoCapa: "https://plus.unsplash.com/premium_photo-1661878589476-bcad7fe1b8c5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        zoomImage: function() {
            zoomImage(this.fotoCapa);
        }
    }
];

// Função para abrir o modal de zoom
function zoomImage(imgUrl) {
    const modalImg = document.getElementById("modal-img");
    modalImg.src = imgUrl;
    const zoomModal = new bootstrap.Modal(document.getElementById("zoomModal"));
    zoomModal.show();
}

// Função que renderiza os álbuns e suas fotos
function renderAlbuns() {
    const container = document.getElementById("album-container");
    container.innerHTML = "";

    albuns.forEach((album) => {
        // Cria um título para o álbum
        const albumTitle = document.createElement("h3");
        albumTitle.textContent = album.nome;
        container.appendChild(albumTitle);

        // Cria um card único para o álbum (apenas a capa)
        const card = document.createElement("div");
        card.className = "card m-2";
        card.style.width = "18rem";

        card.innerHTML = `
            <img src="${album.fotoCapa}" class="card-img-top" alt="Foto do Álbum" />
            <div class="card-body">
                <h5 class="card-title">${album.nome}</h5>
                <p class="card-text">${album.descricao}</p>
                <button class="btn btn-primary zoom-btn">Ampliar</button>
            </div>
        `;

        card.querySelector(".zoom-btn")
            .addEventListener("click", () => zoomImage(album.fotoCapa));

        // Adiciona o card ao container
        container.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    renderAlbuns();
});
