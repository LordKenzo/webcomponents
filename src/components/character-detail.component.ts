const template = document.createElement("template");
template.innerHTML = `
  <h1>Detail Component</h1>
`;
export class CharacterDetailComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}
