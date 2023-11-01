export default function ScrollAnimation() {
   const servicos = document.querySelector('#servicos');
   const painel = document.querySelector('.painel');
   const heightY = servicos.offsetHeight;
   const magic = 100;

   window.addEventListener('scroll', ()=> {
      
      if (window.scrollY > heightY || window.scrollY < magic) {
         painel.classList.remove('show');
      } else {
         painel.classList.add('show');
      }
   });
}
