/*
let video = document.getElementById('video');

// Получаем доступ к камере
if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    // Не включаем аудио опцией `{ audio: true }` поскольку сейчас мы работаем только с изображениями
    navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
        video.srcObject = stream;
        video.play();
    });
}

let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');
let video = document.getElementById('video');

// Обработчик события нажатия на кнопку "Сделать снимок"
document.getElementById("snap").addEventListener("click", function() {
    context.drawImage(video, 0, 0, 640, 480);
});*/
// Grab elements, create settings, etc.
