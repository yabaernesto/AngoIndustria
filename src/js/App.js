import Modal from "./components/Modal.js";
import TextAnimation from "./animations/TextAnimation.js";
import ScrollAnimation from "./animations/ScrollAnimation.js";

const modal = Modal();
const textAnimation = TextAnimation();
const scrollAnimation = ScrollAnimation();

const modalActive = document.querySelector('#open');
const modalClose = document.querySelector('#close');

export default function App() {
   textAnimation;
   scrollAnimation;

   modalActive.onclick = () => {
      modal.open();
   };
   modalClose.onclick = () => {
      modal.close();
   };
};

App();
