const formulario=document.getElementById("formulario")
const dni=document.getElementById("dni")
const nombre=document.getElementById("nombre")
const apellido=document.getElementById("apellido")
const edad=document.getElementById("edad")
const boton=document.getElementById("boton")


nombre.style="margin: 0.3rem"

apellido.style="margin: 0.3rem"
edad.style="margin: 0.3rem"
boton.style="margin: 0.3rem"

class Clientes{
    constructor(id, nombre, apellido, edad){
        this.id=id
        this.nombre=nombre
        this.apellido=apellido
        this.edad=edad
    }
}

const clientes=[]||JSON.parse(localStorage.getItem("clientes"))

const getAll=()=>{
    return clientes
}

const create=(cliente)=>{
    clientes.push(cliente)

    localStorage.setItem("clientes",JSON.stringify(clientes))
}




formulario.addEventListener(`submit`, (event)=>{
    const dni=dni.value
    const nombre=nombre.value
    const apellido=apellido.value
    const edad=edad.value

    const cliente= new Clientes(dni, nombre, apellido, edad)

    create(cliente)
   
})



