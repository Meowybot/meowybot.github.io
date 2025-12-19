class MeowyPagesNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav>
      <a href="/">Main Page</a>
      </nav>
    `;
  }
}

customElements.define('meowy-pagenav', MeowyPagesNav);