fetch('https://raw.githubusercontent.com/ricardogouveia3/rcrd-portfolio/master/data/portfolio.json')
.then(function(response){
  response.json().then(function(data){

    for (var project of data.projects) {
      buildPortfolioCard(
        project.link,
        project.image,
        project.type,
        project.title,
        project.date,
        project.color
      );
    }

  });
})
.catch(function(err){ console.error('Failed retrieving portfolio information', err); });

function buildPortfolioCard (link, img, type, title, date, color) {
  img = "url('https://raw.githubusercontent.com/ricardogouveia3/rcrd-portfolio/master/" + img + "')"

  let card = `
  <li class="portfolio__card-grid__card-container">
    <a class="portfolio__card-grid__card-container__card" id="PortfolioItemLink" href="${link}">
      <div class="portfolio__card-grid__card-container__card__img" id="PortfolioItemImage" style="background-image: ${img}">
      </div>
      <div class="portfolio__card-grid__card-container__card__info">
        <span class="portfolio__card-grid__card-container__card__info__job-type" id="PortfolioItemType" style="border-color: ${color};">${type}</span>
        <h4 class="portfolio__card-grid__card-container__card__info__job-title" id="PortfolioItemTitle">${title}</h4>
        <span class="portfolio__card-grid__card-container__card__info__job-date" id="PortfolioItemDate">${date}</span>
      </div>
    </a>
  </li>
  `

  document.getElementById('portfolioCardGrid').innerHTML += card
}

