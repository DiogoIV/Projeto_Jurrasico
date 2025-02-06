const but = window.document.getElementById('click01')

const main = window.document.querySelector('main')


but.addEventListener('click', function() {
    main.innerHTML = ''
    let texto = document.createTextNode('Dinossauros Carnivoros')
    let t1 = document.createElement('h1')
    t1.appendChild(texto)
    main.appendChild(t1)

})
