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

customElements.define('meowy-pagenav', MeowyPagesNav);