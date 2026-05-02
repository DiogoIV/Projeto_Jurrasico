const main = document.querySelector('conteudo')
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

async function carregarPagina (pagina) {
    
}




menu()



