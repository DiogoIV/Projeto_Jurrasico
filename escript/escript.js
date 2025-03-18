// página para carnivoros
const but1 = document.getElementById("click01")

const main = document.querySelector('main')

// Definindo os dados em um array de objetos


const total = [
    {tipo: 'h2', conteudo: 'Dinossauros carnivoros'},
    {tipo: 'p', conteudo: "Dinossauros carnívoros pertenciam a uma classe chamada terópodes, com grandes espécimes em todos os continentes. Eles eram bípedes, com crânios massivos e dentes poderosos. Na África, o espinossauro era o maior. Na América do Norte, o tiranossauro reinava no topo da cadeia alimentar. Já na América do Sul, o gigantossauro era o predador no ápice da cadeia alimentar."},
    {tipo: 'h3', conteudo: "Espinossauro"},
    {tipo: 'p', conteudo: "O Spinossauro foi um dinossauro carnívoro do Cretáceo, que viveu entre 112 e 93 milhões de anos atrás na região que hoje é o Norte da África. Ele se destacou por seu tamanho gigantesco, podendo medir até 15 metros de comprimento, e por sua vela nas costas, formada por longas espinhas de sua coluna vertebral. Esse dinossauro tinha uma dieta diversificada, caçando principalmente peixes em ambientes aquáticos, devido às suas mandíbulas adaptadas para isso. Era um dinossauro semi-aquático, com corpo robusto e cauda longa para nadar. Sua descoberta foi feita em 1912, mas seu comportamento e aparência só foram melhor compreendidos com o tempo. O Spinossauro ficou famoso também por sua representação exagerada no filme Jurassic Park III."},
    {tipo: 'img', conteudo: "../imagens/espinossauro.jpg", alt: 'Imagem do espinossauro'},
    {tipo: 'h3', conteudo: "Tyrannosaurus rex"},
    {tipo: 'p', conteudo: "O Tyrannosaurus rex foi um dos maiores predadores terrestres, vivendo no Cretáceo, entre 68 e 66 milhões de anos atrás, na América do Norte. Com cerca de 12 metros de comprimento e pesando entre 7 e 9 toneladas, ele se destacava pela sua enorme cabeça, repleta de dentes afiados de até 20 cm, e pela sua mordida extremamente poderosa, capaz de esmagar ossos. Embora tivesse braços pequenos, eles eram fortes e, possivelmente, desempenhavam algum papel durante a caça ou luta."},
    {tipo: 'img', conteudo: "../imagens/t-rex.jpg", alt:'imagem do Tiranossauro rex'},
    {tipo: 'h3', conteudo: "Megalodonte"},
    {tipo: 'p', conteudo: 'O Megalodonte (nome científico Carcharocles megalodon) foi um tubarão pré-histórico que viveu entre 23 e 3,6 milhões de anos atrás, durante o período Cenozoico. Considerado o maior tubarão e um dos maiores predadores marinhos que já existiram, o Megalodonte podia medir até 18 metros de comprimento e pesar até 60 toneladas. Ele se alimentava de grandes mamíferos marinhos, como baleias e focas, graças à sua mandíbula imensa e dentes afiados, que podiam chegar a 18 cm de comprimento. Seu nome científico, Carcharocles megalodon, vem do grego: "Carcharos" significa "afiado", "ocles" refere-se a "dente", e "megalodon" significa "dente grande", refletindo sua enorme dentição. O Megalodonte é frequentemente retratado na cultura popular como um monstro marinho, embora tenha sido extinto há milhões de anos.'},
    {tipo: 'img', conteudo:'../imagens/megalodon.jpg', alt: 'Imagem do megalodon'}
]

but1.addEventListener('click', () => {
    main.textContent = ''

    total.forEach(el => {
        if(el.tipo === 'img') {
            const img = document.createElement('img')
            img.setAttribute('src', el.conteudo)
            img.setAttribute('alt', el.alt)
            main.appendChild(img)
        } else if(el.tipo == 'h3') {
                const h3 = document.createElement('h3')
                h3.textContent = el.conteudo
                h3.setAttribute('class', 't3')

                main.appendChild(h3)
        } else {
            const elemento = document.createElement(el.tipo)
            elemento.textContent = el.conteudo
            if (el.tipo === 'h2') {
                elemento.setAttribute('id', 'principal')
            }

            main.appendChild(elemento)
        }
    })
})