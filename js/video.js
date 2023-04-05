var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video=document.querySelector("#player1")
	video.autoplay=false
	console.log("autoplay is set to " +video.autoplay)
	video.loop=false
	console.log("loop is set to  "+ video.loop)
});

document.querySelector("#play").addEventListener("click", function() {
	video.play()
	document.querySelector("#volume").innerHTML = video.volume *100 + "%"
	console.log("Play Video");
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause()
console.log("Pause Video");
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.90
console.log("speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= 0.90
console.log("speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime +=10
	if( video.currentTime >= video.duration)
	video.currentTime = 0

console.log("current time is " + video.currentTime);
});


sliderButton = document.querySelector("#slider")
function setVolume(){
    video.volume = slider.value / 100;
    document.querySelector("#volume").innerHTML = slider.value;
    console.log("Current volume is " + video.volume);
};
sliderButton.addEventListener("change",setVolume);


mute = document.getElementById('mute')
function videoMute(){
    if (video.muted==true){
      video.muted=false;
      document.getElementById("mute").innerHTML='Mute';
      document.getElementById("slider").value=100;
      document.getElementById("volume").innerHTML=`${document.getElementById("slider").value/100}`;
      console.log(document.getElementById("slider").value);
    }

    else if (video.muted==false){
      video.muted=true;
      document.getElementById("mute").innerHTML='Umute';
      document.getElementById("slider").value=0;
      document.getElementById("volume").innerHTML=`${document.getElementById('slider').value/100}`;
    }}
mute.addEventListener("click", videoMute);

document.querySelector("#vintage").addEventListener("click", function(){
	video.classList.add('oldSchool');
});

document.querySelector("#orig").addEventListener("click", function(){
	video.classList.remove('oldSchool');
});
