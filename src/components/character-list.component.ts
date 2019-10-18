const template = document.createElement("template");
template.innerHTML = `
  <h1>List Component...</h1>
`;
export class CharacterListComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}
