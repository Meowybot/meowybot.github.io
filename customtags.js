// customtags.js

class MeowyPagesNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav style="background-color: #222222;">
      <a href="/" style="color: white;">Main Page</a>
      <a href="/games" style="color: white;">My Games</a>
      <a href="/csstest" style="color: white;">CSS Tests</a>
      <a href="/oldA" style="color: white;">first version</a>
      </nav>
    `;
  }
}

class MeowyUnfinished extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div style="background-color: #363736;">
      <b style="color: red; font-size: 30px;">🚨 WARNING</b>
      <p style="color: #FF0000;">
      THIS SITE IS UNFINISHED
      </p>
      </div>
    `;
  }
}

class MeowyInPageLinkNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav style="background-color: #333333;">
      <slot></slot>
      </nav>
    `;
  }
}

class MeowyInPageShortNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav style="background-color: #444444;">
      <slot></slot>
      </nav>
    `;
  }
}

// TODO:
// Add switch to spanish button
// Add footer
// Learn js

customElements.define('meowy-pagenav', MeowyPagesNav);
customElements.define('meowy-unfinish', MeowyUnfinished);
customElements.define('meowy-linknav', MeowyInPageLinkNav);
customElements.define('meowy-shortnav', MeowyInPageShortNav);

// what this does is it defines custom headers for page