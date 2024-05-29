var c = 1
var button = document.getElementById ('botão-clicks').addEventListener('click', function() {
    var contador = document.getElementById('contador-cliques')
    contador.innerHTML = `vezes de clique: ${c++}`

})
