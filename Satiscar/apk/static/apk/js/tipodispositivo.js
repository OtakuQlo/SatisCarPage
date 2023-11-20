var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (isMobile) {
    
    document.getElementById("link").innerHTML = '<a href="https://drive.google.com/file/d/1-98KBcALdE8BCT_gNnWpeweSFcd5W20Q/view?usp=drive_link" class="my-button">¡Descarga ya SatisCar!</a>';
    
} else {
    document.getElementById("link").innerHTML = '<img src="../../static/apk/img/APK.png" alt="" class="foto">';
}






