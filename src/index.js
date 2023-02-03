import { post ,get} from "./modules/API";
import "./style.css";

const name = document.querySelector(".name");
const score = document.querySelector(".score");
const btn = document.querySelector(".btn");
const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
  e.preventDefault()
  post(name.value,score.value)
});

btn.addEventListener("click", get);
