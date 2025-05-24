/*outra maneira de fazer
function toggleMode() {
    const html = document.documentElement
    if(html.classList.contains('light')) {
        html.classList.contains('ligth') }
    else { html.classList.add('light')}
    }
*/
function toggleMode() {
   const html = document.documentElement
   html.classList.toggle("light")
   const img = document.querySelector("#profile img")
   if(html.classList.contains('light')) {
    img.setAttribute("src", "./assets/avatarclaro.png.png")}
    else{
    img.setAttribute("src", "./assets/avatarescuro.png.png")
    }
}
