// página para carnivoros
const but1 = document.getElementById("click01")

const main = document.querySelector('main')
   


but1.addEventListener("click", function () {
    main.innerHTML = ''
    let h2 = document.createElement('h2')
    h2.id = 'principal'
    h2.textContent = 'Dinossauros carnivoros'
    main.appendChild(h2)
    
    const texto = ["Dinossauros carnívoros pertenciam a uma classe chamada terópodes, com grandes espécimes em todos os continentes. Eles eram bípedes, com crânios massivos e dentes poderosos. Na África, o espinossauro era o maior. Na América do Norte, o tiranossauro reinava no topo da cadeia alimentar. Já na América do Sul, o gigantossauro era o predador no ápice da cadeia alimentar.",]  
    texto.forEach(function(text) {
        const p = document.createElement('p')
        p.textContent = text
        main.appendChild(p)
    })

    
})

