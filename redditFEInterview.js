const formElement = document.getElementById('beta-form');
const submitElement = document.getElementById('submit')
const sortName = document.querySelector('.sort-name');
const sortEmail = document.querySelector('.sort-email');
const sortId = document.querySelector('.sort-id');
let currentlySortedBy = "id"

let numberOfPeople = 1
let people = []

const renderTable = () => {
    const entriesBody = document.querySelector('#entries-body')
    
    entriesBody.innerHTML = ""
    
    for(let person of people){
        let {id, name, email} = person
        
        const trElement = document.createElement("tr")
    
        const tdId = document.createElement("td")    
        const tdName = document.createElement("td")
        const tdEmail = document.createElement("td")
        
        tdId.innerHTML = id
        tdName.innerHTML = name
        tdEmail.innerHTML = email
        
        trElement.appendChild(tdId)
        trElement.appendChild(tdName)
        trElement.appendChild(tdEmail)
        entriesBody.appendChild(trElement)
    }
}
sortId.addEventListener('click', e => {
    e.preventDefault()
    people = people.sort((a, b) => {
        return a.id > b.id ? 1 : -1
    })
    currentlySortedBy = "id"
    renderTable()
})

sortName.addEventListener('click', e => {
    e.preventDefault()
    people = people.sort((a, b) => {
        return a.name > b.name ? 1 : -1
    })
    currentlySortedBy = "name"
    renderTable()
})

sortEmail.addEventListener('click', e => {
    e.preventDefault()
    people = people.sort((a, b) => {
        return a.email > b.email ? 1 : -1
    })
    currentlySortedBy = "email"
    renderTable()
})

const sortPeopleBy = (type) => {
     people = people.sort((a, b) => {
        return a[type] > b[type] ? 1 : -1
    })
}

formElement.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.querySelector('.name')
    const email = document.querySelector('.email')
    
    people.push({id: numberOfPeople,name: name.value, email: email.value})
    
    name.value = ""
    email.value = ""
    
    name.focus()
    
    numberOfPeople += 1
    sortPeopleBy(currentlySortedBy)
    renderTable()
})

submitElement.addEventListener('submit', (e) => {
    e.preventDefault()
    
    console.log(JSON.stringify(people))
})
