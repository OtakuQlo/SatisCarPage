var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (isMobile) {
    
    document.getElementById("link").innerHTML = '<a href="https://drive.google.com/file/d/1i707vrcLlpw2PFkXrZijBfj0N6YbH8E9/view?usp=sharing" class="my-button">¡Descarga ya SatisCar!</a>';
    
} else {
    document.getElementById("link").innerHTML = '<img src="../../static/apk/img/qrapk.jpeg" alt="" class="foto">';
}






