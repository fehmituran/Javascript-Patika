//javascript ödev1

let username = prompt("Adınızı Bağışlarmısınız Bize ....")

let myName = document.querySelector("#myName")

if (username){
    username = username[0].toUpperCase()+username.slice(1)
    myName.innerHTML = username
} else {
    myName.innerHTML = "Girecektin Girmedin  ????"
    myName.classList.add("text-danger")
}

function hours(){
    let date = new Date();

    let day = date.getDay()
    
    let days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
    
    let tarih = `${date.getHours()}:${date.getSeconds()}:${date.getMinutes()}`
    
    //let hours = date.getHours()
    //let seconds = date.getSeconds()
    //let minutes = date.getMinutes
    let myClock = document.querySelector("#myClock")
    
    myClock.innerHTML = `${tarih} ${days[day]}`

}
hours()

setInterval(hours, 1000);