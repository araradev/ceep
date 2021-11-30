import {handleNovoItem} from "./criaTarefa.js";
import {carregaTarefa} from "./carregaTarefa.js";
const novaTarefa = document.querySelector("[data-form-button]");
novaTarefa.addEventListener('click', handleNovoItem)

carregaTarefa()