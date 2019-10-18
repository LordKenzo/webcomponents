import { CharacterListComponent } from "./components/character-list.component";
import { CharacterDetailComponent } from "./components/character-detail.component";
import { APIService } from "./services/api";

const apiService = new APIService("https://swapi.co/api/people");
apiService.getData().subscribe(data => console.log(data));

customElements.define("lf-character-detail", CharacterDetailComponent);
customElements.define("lf-character-list", CharacterListComponent);
