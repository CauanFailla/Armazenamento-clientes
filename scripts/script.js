let historicoClientes = []
let concluidoClientes = []
let pendenteClientes = []
class Pedido {
    constructor(nome,tipo,quantidade,data) {
        this.nomeCliente = nome
        this.tipoPedido = tipo
        this.quantidade = quantidade
        this.data = data
    }
}

const sec_formulario = document.querySelector('.sec-formularioAdd')
const btn_add = document.querySelector('.external-btnAdd')
const btn_cancelarForm = document.querySelector('.btn-cancelarForm')
const btn_addForm = document.querySelector('.btn-addForm')
let inps = document.querySelectorAll('.formulario input')
btn_add.addEventListener('click',()=>{
    sec_formulario.showModal()
    sec_formulario.style.display = 'flex'
})

btn_addForm.addEventListener('click',()=>{
    historicoClientes.push(new Pedido(inps[0].value,inps[1].value,inps[2].value,inps[3].value))
    sec_formulario.close()
    sec_formulario.style.display = ''
    console.log(historicoClientes)
})

btn_cancelarForm.addEventListener('click',()=>{
    sec_formulario.close()
    sec_formulario.style.display = ''
})