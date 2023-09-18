const apiEP = "https://randomuser.me/api/?results=20"

let userList = []

const listElm = document.getElementById("list")


const fetchUser = async (url) => {

    try {
         // promise using fetch to fetch data from any server, fetch()

    // fetch(url).then((dt) => {
    //     // console.log(dt)

    //     return dt.json()
    // }).then(
    //     (data) => {
    //         // console.log(data)
    //         userList = data.results
    //         // console.log(userList)
    //         display(userList)
    //     }
    // )


// Async / Await 
const dt = await fetch(url)
const data = await dt.json()
userList = data.results   // accesing the array of result inide the data object 
display(userList)
// console.log(data)
    }
    catch(error){
        console.log(error)
    
    }
}

fetchUser(apiEP)


const display = (users) => {
    // console.log(users)

    let str = ``
    users.map((item, i) => {

        // console.log(item)
        str += `
        <div class="card flex-grow-1" style="width: 16rem;">
                    <img src="${item?.picture?.large}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${item.name.title} ${item.name.first} ${item.name.last} </h5>
                      
                      <ul class = "list-unstyled">
                        <li><i class="fa-solid fa-phone"></i> ${item.phone}</li>
                        <li><i class="fa-solid fa-envelope"></i> ${item.email}</li>
                        <li><i class="fa-solid fa-address-book"></i> ${item.location.street.number} ${item.location.street.name} ${item.location.city} ${item.location.postcode} ${item.location.state} ${item.location.country}</li>
                      </ul>
                      
                    </div>
                  </div>
        `
    })
listElm.innerHTML = str
}


const handleOnGenderSelect = (e) => {
    const g = e.value
    // console.log(g)
    const url = `${apiEP}&gender=${g}`
    fetchUser(url)
}


// const func = (e) => {
    
//     const {value} = e.target 
//     console.log(e)
// }


document.getElementById("search").
addEventListener("keyup", (e) => {
    const {value} = e.target
    // console.log(value)

    const filteredArg = userList.filter((usr) => {
        const fullName = `${usr.name.title} ${usr.name.first} ${usr.name.last}`.toLowerCase()

        if(fullName.includes(value.toLowerCase())){
            return true

        }
    })
    display(filteredArg)
})