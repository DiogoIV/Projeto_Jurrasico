const main = document.querySelector('#conteudo')
const btn = document.getElementById('btn_menu')
const nav = document.querySelector('.menu')
const overlay = document.querySelector('.overlay')


function menu () {
    btn.addEventListener('click', ()=> {
        nav.classList.toggle("menu_ativo")
        overlay.classList.toggle("ativo")
        
    })
    
    overlay.addEventListener("click", ()=>{
        nav.classList.remove("menu_ativo")
        overlay.classList.remove("ativo")
    })
}

async function carregarPagina (paginas) {
    const res = await fetch(paginas)
    const html = await res.text()

    main.innerHTML = html
}


document.querySelector('#btnCarnivoros').addEventListener('click', (e) => {
    e.preventDefault()
    carregarPagina('paginas/pagina-carnivoros.html')
})



menu()



