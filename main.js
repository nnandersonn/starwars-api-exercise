

const getResButton = document.querySelector(`button`)

getResButton.addEventListener(`click`, buttonClicked)

function buttonClicked(){
    console.log(`my function is working`)
    axios.get(`http://swapi.dev/api/planets/?search=alder`)
        .then(response => {
            const { residents } = response.data.results[0]
            console.log(residents)
            residents.forEach(element => {
                axios.get(element)
                    .then(response => {
                        const { name } = response.data
                        console.log(name)
                        var newName = document.createElement("h2")
                        newName.textContent = name
                        document.body.appendChild(newName)
                    })
            });
        })
        .catch(error => {
            console.log(error)
        })
}

