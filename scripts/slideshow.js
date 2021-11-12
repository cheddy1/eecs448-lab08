function next() {
    var imgs = ["kubball.jpg", "castillo.jpg", "skc.jpg", "toledo.jpg", "valencia.jpg"]
    var cur_img = document.getElementById("img").src.split("/").pop()
    var next_img = ""
    if (cur_img == imgs[0]){
        next_img = imgs[1]
    }
    else if (cur_img == imgs[1]){
        next_img = imgs[2]
    }
    else if (cur_img == imgs[2]){
        next_img = imgs[3]
    }
    else if (cur_img == imgs[3]){
        next_img = imgs[4]
    }
    else if (cur_img == imgs[4]){
        next_img = imgs[0]
    }
    document.getElementById('img').src = "images/"+next_img
    
}
function back() {
    var imgs = ["kubball.jpg", "castillo.jpg", "skc.jpg", "toledo.jpg", "valencia.jpg"]
    var cur_img = document.getElementById("img").src.split("/").pop()
    var next_img = ""
    if (cur_img == imgs[0]){
        next_img = imgs[4]
    }
    else if (cur_img == imgs[1]){
        next_img = imgs[0]
    }
    else if (cur_img == imgs[2]){
        next_img = imgs[1]
    }
    else if (cur_img == imgs[3]){
        next_img = imgs[2]
    }
    else if (cur_img == imgs[4]){
        next_img = imgs[3]
    }
    document.getElementById('img').src = "images/"+next_img
}