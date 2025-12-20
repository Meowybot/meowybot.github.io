class MeowyPagesNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav style="background-color: #222222;">
      <a href="/" style="color: white;">Main Page</a>
      <a href="/games" style="color: white;">My Games</a>
      <a href="/csstest" style="color: white;">CSS Tests</a>
      </nav>
    `;
  }
}

class MeowyUnfinished extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div style="background-color: #363736;">
      <b style="color: red;">WARNING</b>
      <p style="color: #FF0000;">
      THIS SITE IS UNFINISHED
      </p>
      </div>
    `;
  }
}

customElements.define('meowy-pagenav', MeowyPagesNav);
customElements.define('meowy-unfinish', MeowyUnfinished);