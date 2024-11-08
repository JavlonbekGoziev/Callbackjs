// 2. async callback

function Fetchdata1(callback){
    setTimeout(() => {
        const data = { name: "John", age:30 } 
        callback(data)
    }, 3000);
}

function Fetchdata2(callback){
    setTimeout(() => {
        const data = { name: "Javlon", age:20, home:"Uzbekistan", language: "Uzbek" } 
        callback(data)
    }, 4000);
}


Fetchdata1(function(data) {
    console.log("User data: ", data)
})


Fetchdata2(function(data) {
    console.log("User data: ", data)
})
