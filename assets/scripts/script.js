// interceptando o click do usuario
function changeActive(element){
     // Remove a classe "active" de todos os links do menu
    var links = document.querySelectorAll('nav ul li a')
    links.forEach(function (link){
        link.classList.remove('active');
    });
    // adciona a classe "active" ao link clicado
    element.classList.add('active');
    console.log(links)
}