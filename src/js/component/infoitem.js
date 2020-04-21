class InfoItem extends HTMLElement {
  constructor(){
    super();
  }

  set anime(anime) {
    this._anime = anime;
    this.render();
  }
 
  render() {
    let studios;

    if (this._anime.format === "MOVIE") {

      studios = this._anime.studios.nodes.map((el) => {
        return el["name"]
      })
      studios = studios.join(', ');


      this.innerHTML = `
 
        <div class="jumbotron card rounded-0 p-0 m-0 animated fadeInUp d-none" id="${this._anime.id}">
          <div class="card card-image z-depth-0 mb-0 anime-bn" style="background-image: url(${this._anime.bannerImage});">
            <div class="card col-md-2 anime-cv">
                <img src="${this._anime.coverImage.large}" class="card-img">
            </div>
            <img src="${this._anime.bannerImage}" class="img-fluid anime-bn-fill" />
          </div>
          <div class="card-body text-left p-0">
            <div class="col d-flex p-0">
              <div class="col-md-2 anime-info-left">
                <div class="p-0">
                  <div class="info-title">Jenis
                    <div class="info-text p-0">${this._anime.format}</div>
                  </div>
                  <div class="info-title">Jumlah Episode
                    <div class="info-text p-0">${this._anime.episodes}</div>
                  </div>
                  <div class="info-title">Durasi
                    <div class="info-text p-0">${this._anime.duration} Menit</div>
                  </div>
                  <div class="info-title">Studio
                    <div class="info-text p-0">${studios}</div>
                  </div>
                </div>
              </div>
              <div class="col anime-info-right">
                <div id="ai-r-title">
                  <h4 id="jumbotron-title">${this._anime.title.romaji}</h4>
                </div>
                <div id="ai-r-text">
                  <p class="jumbotron-text">${this._anime.description}</p>
                </div>
                <div class="ai-r-genre align-self-end">
                  <p class="jumbotron-text"><span class="info-title">Genre</span> : ${this._anime.genres}</p>
                </div>
              </div>
            </div>
            <!-- Button -->
            <div class="row justify-content-end mb-3 mr-3">
              <button class="btn btn-dark btn-rounded btn-back-anime" target="${this._anime.id}">Back</button>
            </div>
          </div>
        </div>

      `;
    } else {

      studios = this._anime.media.studios.nodes.map((el) => {
        return el["name"]
      })

      studios = studios.join(', ');

      this.innerHTML = `
   
        <div class="jumbotron card rounded-0 p-0 m-0 animated fadeInUp d-none" id="${this._anime.mediaId}">
          <div class="card card-image z-depth-0 mb-0 anime-bn" style="background-image: url(${this._anime.media.bannerImage});">
            <div class="card col-md-2 anime-cv">
                <img src="${this._anime.media.coverImage.large}" class="card-img">
            </div>
            <img src="${this._anime.media.bannerImage}" class="img-fluid anime-bn-fill" />
          </div>
          <div class="card-body text-left p-0">
            <div class="col d-flex p-0">
              <div class="col-md-2 anime-info-left">
                <div class="p-0">
                  <div class="info-title">Jenis
                    <div class="info-text p-0">${this._anime.media.format}</div>
                  </div>
                  <div class="info-title">Jumlah Episode
                    <div class="info-text p-0">${this._anime.media.episodes}</div>
                  </div>
                  <div class="info-title">Durasi
                    <div class="info-text p-0">${this._anime.media.duration} Menit</div>
                  </div>
                  <div class="info-title">Studio
                    <div class="info-text p-0">${studios}</div>
                  </div>
                </div>
              </div>
              <div class="col anime-info-right">
                <div id="ai-r-title">
                  <h4 id="jumbotron-title">${this._anime.media.title.romaji}</h4>
                </div>
                <div id="ai-r-text">
                  <p class="jumbotron-text">${this._anime.media.description}</p>
                </div>
                <div class="ai-r-genre align-self-end">
                  <p class="jumbotron-text"><span class="info-title">Genre</span> : ${this._anime.media.genres}</p>
                </div>
              </div>
            </div>
            <!-- Button -->
            <div class="row justify-content-end mb-3 mr-3">
              <button class="btn btn-dark btn-rounded btn-back-anime" target="${this._anime.mediaId}">Back</button>
            </div>
          </div>
        </div>

      `;
    }
  }
}
 
customElements.define("info-item", InfoItem);