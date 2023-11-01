export default function TextAnimation() {
   const text = document.querySelector('.second-text');

   const industria = 'Industria!';
   const ango = `Ango`;
   const agua = `Agua`;

   function show() {
      const textLoad = () => {
         setTimeout(() => {
            text.textContent = industria;
         }, 0);
         setTimeout(() => {
            text.textContent = `${ango}${agua}`;
         }, 2000);
      }

      textLoad();
      setInterval(textLoad, 2000);
   }

   return show();
};
