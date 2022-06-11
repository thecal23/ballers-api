document.querySelector('button').addEventListener('click',apiRequest)

async function apiRequest(){
    const ballerName = document.querySelector('input').value.toLowerCase()
    console.log(ballerName)
    try{
        const res = await fetch(`/api/${ballerName}`)
        const data = await res.json()

        console.log(data)
        document.querySelector('#name').innerHTML = data.name
        document.querySelector('#team').innerHTML = data.team
        document.querySelector('#position').innerHTML = data.position
        document.querySelector('#height').innerHTML = data.height
        document.querySelector('#weight').innerHTML = data.weight
        document.querySelector('#age').innerHTML = data.age
    }
    catch(error){
        console.log(error)
    }
}