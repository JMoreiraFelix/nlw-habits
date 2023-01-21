const form = document.querySelector("form")
const setup = new NLWSetup(form)
const button = document.querySelector('header button')

button.addEventListener('click', add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString('pt-br').slice(0,5)
  const dayExists = setup.dayExists(today)
  if (dayExists) {
    alert("Dia já incluso")
    return
  }
  setup.addDay(today)
}

function save () {
  console.log(setup.data)
  localStorage.setItem("NLW@habits", JSON.stringify(setup.data))
}

const data = JSON.parse(localStorage.getItem("NLW@habits")) || {}

setup.setData(data)
setup.load()