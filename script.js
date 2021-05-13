const controles = document.getElementById('controles');
const cssText = document.querySelector('.css');
const botao = document.querySelector('.btn');

controles.addEventListener('change', handleChange)


const handleStyle = {
    element: botao,
    height(value) {
        this.element.style.height = value + 'px'
    },
    backgroundColor(value) {
        this.element.style.backgroundColor = value
    },
    color(value) {
        this.element.style.color = value
    },
    width(value) {
        this.element.style.width = value + 'px'
    },
    border(value) {
        this.element.style.border = value
    },
    borderRadius(value) {
        this.element.style.borderRadius = value + 'px'
    },
    texto(value) {
        this.element.innerText = value;
    },
    fontSize(value) {
        this.element.style.fontSize = value + 'rem';
    },
    fontFamily(value) {
        this.element.style.fontFamily = value;
    }
}


function handleChange(event) {
    const name = event.target.name
    const value = event.target.value // retorno padrão do browser;

    handleStyle[name](value);// é a mesma coisa que percorrer um objeto e executar uma função;
    //OBS: o nome do target é o mesmo nome da propriedade;

    console.log(name, value)
}