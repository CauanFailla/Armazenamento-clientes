let historicoClientes = []
let concluidoClientes = []
let pendenteClientes = []
class Pedido {
    constructor(nome,tipo,quantidade,data) {
        this.nomeCliente = nome
        this.tipoPedido = tipo
        this.quantidade = quantidade
        this.data = data
        this.dia = data.slice(8,10)
        this.mes = data.slice(5,7)
        this.ano = data.slice(0,4)
    }

    criarVisual() {
        let div_mes = document.querySelectorAll('.div-mes')
        console.log(div_mes)
        let tr = document.createElement('tr')
        let tds = []
        for (let i = 0; i < 4; i++) {
            tds.push(document.createElement('td'))
        }
        console.log(tds)
        tds[0].innerHTML = this.dia
        tds[1].innerHTML = this.nomeCliente
        tds[2].innerHTML = this.tipoPedido
        tds[3].innerHTML = this.quantidade
        tds.forEach((t)=>{
            tr.appendChild(t)
        })
        switch (this.mes) {
            case '01':
                console.log('passou')
                div_mes.forEach((m)=>{
                    if (m.firstElementChild.innerHTML == 'Janeiro') {
                        m.style.display = 'flex'
                        m.lastElementChild.lastElementChild.appendChild(tr)
                    }
                })
                break;
            case '02':
                console.log('passou')
                div_mes.forEach((m)=>{
                    if (m.firstElementChild.innerHTML == 'Fevereiro') {
                        m.style.display = 'flex'
                        m.lastElementChild.lastElementChild.appendChild(tr)
                    }
                })
                break;
            case '03':
                console.log('passou')
                div_mes.forEach((m)=>{
                    if (m.firstElementChild.innerHTML == 'Março') {
                        m.style.display = 'flex'
                        m.lastElementChild.lastElementChild.appendChild(tr)
                    }
                })
                break;
            case '04':
                console.log('passou')
                div_mes.forEach((m)=>{
                    if (m.firstElementChild.innerHTML == 'Abril') {
                        m.style.display = 'flex'
                        m.lastElementChild.lastElementChild.appendChild(tr)
                    }
                })
                break;
            case '05':
                console.log('passou')
                div_mes.forEach((m)=>{
                    if (m.firstElementChild.innerHTML == 'Maio') {
                        m.style.display = 'flex'
                        m.lastElementChild.lastElementChild.appendChild(tr)
                    }
                })
                break;
            case '06':
                console.log('passou')
                div_mes.forEach((m)=>{
                    if (m.firstElementChild.innerHTML == 'Junho') {
                        m.style.display = 'flex'
                        m.lastElementChild.lastElementChild.appendChild(tr)
                    }
                })
                break;
            case '07':
                console.log('passou')
                div_mes.forEach((m)=>{
                    if (m.firstElementChild.innerHTML == 'Julho') {
                        m.style.display = 'flex'
                        m.lastElementChild.lastElementChild.appendChild(tr)
                    }
                })
                break;
            case '08':
                console.log('passou')
                div_mes.forEach((m)=>{
                    if (m.firstElementChild.innerHTML == 'Agosto') {
                        m.style.display = 'flex'
                        m.lastElementChild.lastElementChild.appendChild(tr)
                    }
                })
                break;
            case '09':
                console.log('passou')
                div_mes.forEach((m)=>{
                    if (m.firstElementChild.innerHTML == 'Setembro') {
                        m.style.display = 'flex'
                        m.lastElementChild.lastElementChild.appendChild(tr)
                    }
                })
                break;
            case '10':
                console.log('passou')
                div_mes.forEach((m)=>{
                    if (m.firstElementChild.innerHTML == 'Outubro') {
                        m.style.display = 'flex'
                        m.lastElementChild.lastElementChild.appendChild(tr)
                    }
                })
                break;
            case '11':
                console.log('passou')
                div_mes.forEach((m)=>{
                    if (m.firstElementChild.innerHTML == 'Novembro') {
                        m.style.display = 'flex'
                        m.lastElementChild.lastElementChild.appendChild(tr)
                    }
                })
                break;
            case '12':
                console.log('passou')
                div_mes.forEach((m)=>{
                    if (m.firstElementChild.innerHTML == 'Dezembro') {
                        m.style.display = 'flex'
                        m.lastElementChild.lastElementChild.appendChild(tr)
                    }
                })
                break;
            default:
                break;
        }
    }
}

const sec_formulario = document.querySelector('.sec-formularioAdd')
const btn_add = document.querySelector('.external-btnAdd')
const btn_cancelarForm = document.querySelector('.btn-cancelarForm')
const btn_addForm = document.querySelector('.btn-addForm')
let contagemEncomendas = document.querySelectorAll('.contagem')
let inps = document.querySelectorAll('.formulario input')
const btn_abrirCaixaHistorico = document.querySelectorAll('.btn-abrirCaixaHistorico')
const btn_historico = document.querySelector('.btn-historico')
const sec_btns = document.querySelector('.sec-btns')
const sec_historico = document.querySelector('.sec-historico')
const btn_voltar = document.querySelector('.btn-voltar')
let div_mes = document.querySelectorAll('.div-mes')
btn_add.addEventListener('click',()=>{
    sec_formulario.showModal()
    sec_formulario.style.display = 'flex'
    inps.forEach((i)=>{
        i.value = ''
    })
})

btn_addForm.addEventListener('click',()=>{
    historicoClientes.push(new Pedido(inps[0].value,inps[1].value,inps[2].value,inps[3].value))
    sec_formulario.close()
    sec_formulario.style.display = ''
    console.log(historicoClientes)
    contagemEncomendas[0].innerHTML = historicoClientes.length
    sec_historico.style.display = 'none'
    sec_btns.style.display = 'flex'
    div_mes.forEach((m)=>{
        m.lastElementChild.lastElementChild.innerHTML = ''
    })
})

btn_cancelarForm.addEventListener('click',()=>{
    sec_formulario.close()
    sec_formulario.style.display = ''
})

btn_abrirCaixaHistorico.forEach((b)=>{
    b.addEventListener('click',()=>{
        if (b.nextElementSibling.style.display == 'block') {
            b.nextElementSibling.style.display = 'none'
        } else {
            b.nextElementSibling.style.display = 'block'
        }
    })
})

btn_historico.addEventListener('click',()=>{
    sec_btns.style.display = 'none'
    sec_historico.style.display = 'block'
    historicoClientes.map((h)=>{
        h.criarVisual()
    })
})

btn_voltar.addEventListener('click',()=>{
    div_mes.forEach((m)=>{
        m.lastElementChild.lastElementChild.innerHTML = ''
    })
    sec_historico.style.display = 'none'
    sec_btns.style.display = 'flex'

})