video ="";
 function preload(){
    video = createVideo ('video.mp4');
    video.hide();
 }
 function setup(){
    canvas = createCanvas(480,380);
    canvas.center();
 }
 function draw(){
    image(video,0,0,480,380);
    if(status !="")
    {
      objectDetector.detect(video, gotResult );
    }
 }
 function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
 }
 function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
    video.loop();
    video.speed(0);
    video.volume(1);
 }
 function gotResult(error,results){
if(error){
   console.log(error);
}
console.log(results);
 }