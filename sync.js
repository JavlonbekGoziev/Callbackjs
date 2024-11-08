// 1. Sync callback

function greet(name,callback) {
    console.log("Hello " + name)
    callback()
}

greet("Javlon", function(){
    console.log("It is synchronous callback")
})

// synchronous callback takes no time and displays two responses at the same time
