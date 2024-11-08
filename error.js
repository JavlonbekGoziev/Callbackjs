// 3-error-firstCallback

function readFile(filePath, callback){
    const error = Math.random > 0.5 ? null: "File not found";
    const data = "File contents: Hello world";
    callback(error,data)
};



readFile("example.txt", function(error,data){
    if(error) {
        console.error("Error: ", error)
    } else {
        console.log("File: ", data)
    }
})