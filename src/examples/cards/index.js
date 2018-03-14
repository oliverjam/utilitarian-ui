import React from 'react';
import './index.css';

export const CardWeight = () => (
  <div className="cards">
    <article className="card">
      <header className="card__header">
        <img
          alt=""
          className="card__img"
          src="https://pbs.twimg.com/profile_images/757633434500161536/k0j_K-Kl_400x400.jpg"
        />
        <div>
          <h2 className="card__title">Oliver Phillips</h2>
          <p className="card__subtitle">@_oliverjam</p>
        </div>
        <span className="card__btn">Action</span>
      </header>
      <p className="card__bio">
        Frontend engineer at Ticketmaster. Graduate of Founders & Coders
        bootcamp.
      </p>
      <ul className="card__list">
        <li>twitter.com/_oliverjam</li>
        <li>github.com/oliverjam</li>
      </ul>
    </article>

    <article className="card">
      <header className="card__header">
        <img
          alt=""
          className="card__img"
          src="https://pbs.twimg.com/profile_images/757633434500161536/k0j_K-Kl_400x400.jpg"
        />
        <div>
          <h2 className="card__title fixed">Oliver Phillips</h2>
          <p className="card__subtitle fixed">@_oliverjam</p>
        </div>
        <span className="card__btn">Action</span>
      </header>
      <p className="card__bio fixed">
        Frontend engineer at Ticketmaster. Graduate of Founders & Coders
        bootcamp.
      </p>
      <ul className="card__list fixed">
        <li>twitter.com/_oliverjam</li>
        <li>github.com/oliverjam</li>
      </ul>
    </article>
  </div>
);

export const CardFooter = () => (
  <div class="cards">
    <article class="card">
      <header class="card__header">
        <img
          alt=""
          class="card__img"
          src="https://pbs.twimg.com/profile_images/757633434500161536/k0j_K-Kl_400x400.jpg"
        />
        <div>
          <h2 class="card__title fixed">Oliver Phillips</h2>
          <p class="card__subtitle fixed">@_oliverjam</p>
        </div>
        <span class="card__btn">Action</span>
      </header>
      <p class="card__bio fixed">
        Frontend engineer at Ticketmaster. Graduate of Founders & Coders
        bootcamp.
      </p>
      <footer class="card__footer">
        <span>Twitter</span>
        <span>LinkedIn</span>
        <span>Github</span>
      </footer>
    </article>
    <article class="card">
      <header class="card__header">
        <img
          alt=""
          class="card__img"
          src="https://pbs.twimg.com/profile_images/757633434500161536/k0j_K-Kl_400x400.jpg"
        />
        <div>
          <h2 class="card__title fixed">Oliver Phillips</h2>
          <p class="card__subtitle fixed">@_oliverjam</p>
        </div>
        <span class="card__btn">Action</span>
      </header>
      <p class="card__bio fixed">
        Frontend engineer at Ticketmaster. Graduate of Founders & Coders
        bootcamp.
      </p>
      <footer class="card__footer fixed">
        <span>Twitter</span>
        <span>LinkedIn</span>
        <span>Github</span>
      </footer>
    </article>
  </div>
);

export const CardShadow = () => (
  <div className="cards">
    <article className="card card--no-shadow">
      <header className="card__header">
        <img
          alt=""
          className="card__img"
          src="https://pbs.twimg.com/profile_images/757633434500161536/k0j_K-Kl_400x400.jpg"
        />
        <div>
          <h2 className="card__title fixed">Oliver Phillips</h2>
          <p className="card__subtitle fixed">@_oliverjam</p>
        </div>
        <span className="card__btn">Action</span>
      </header>
      <p className="card__bio fixed">
        Frontend engineer at Ticketmaster. Graduate of Founders & Coders
        bootcamp.
      </p>
      <footer className="card__footer fixed">
        <span>Twitter</span>
        <span>LinkedIn</span>
        <span>Github</span>
      </footer>
    </article>
    <article className="card">
      <header className="card__header">
        <img
          alt=""
          className="card__img"
          src="https://pbs.twimg.com/profile_images/757633434500161536/k0j_K-Kl_400x400.jpg"
        />
        <div>
          <h2 className="card__title fixed">Oliver Phillips</h2>
          <p className="card__subtitle fixed">@_oliverjam</p>
        </div>
        <span className="card__btn">Action</span>
      </header>
      <p className="card__bio fixed">
        Frontend engineer at Ticketmaster. Graduate of Founders & Coders
        bootcamp.
      </p>
      <footer className="card__footer fixed">
        <span>Twitter</span>
        <span>LinkedIn</span>
        <span>Github</span>
      </footer>
    </article>
  </div>
);

export const CardOffset = () => (
  <div class="cards">
    <article class="card fixed card--wrong-shadow">
      <header class="card__header">
        <img
          alt=""
          class="card__img"
          src="https://pbs.twimg.com/profile_images/757633434500161536/k0j_K-Kl_400x400.jpg"
        />
        <div>
          <h2 class="card__title fixed">Oliver Phillips</h2>
          <p class="card__subtitle fixed">@_oliverjam</p>
        </div>
        <span class="card__btn">Action</span>
      </header>
      <p class="card__bio fixed">
        Frontend engineer at Ticketmaster. Graduate of Founders & Coders
        bootcamp.
      </p>
      <footer class="card__footer fixed">
        <span>Twitter</span>
        <span>LinkedIn</span>
        <span>Github</span>
      </footer>
    </article>
    <article class="card fixed">
      <header class="card__header">
        <img
          alt=""
          class="card__img"
          src="https://pbs.twimg.com/profile_images/757633434500161536/k0j_K-Kl_400x400.jpg"
        />
        <div>
          <h2 class="card__title fixed">Oliver Phillips</h2>
          <p class="card__subtitle fixed">@_oliverjam</p>
        </div>
        <span class="card__btn">Action</span>
      </header>
      <p class="card__bio fixed">
        Frontend engineer at Ticketmaster. Graduate of Founders & Coders
        bootcamp.
      </p>
      <footer class="card__footer fixed">
        <span>Twitter</span>
        <span>LinkedIn</span>
        <span>Github</span>
      </footer>
    </article>
  </div>
);
