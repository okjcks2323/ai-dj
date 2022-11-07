
song="";
scoreleftwrist=0;
leftWristx=0;
leftWristy=0;
rightWristx=0;
rightWristy=0;
function preload() {
    song=loadSound("music.mp3");
}


function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    posenet=ml5.poseNet(video,modelloaded);
    posenet.on('pose',kanda);
}

function draw() {
    image(video, 0, 0, 600, 500);
    fill("#000000");
    stroke("#000000");
    if (scoreleftwrist>0.2) {
        circle(leftWristx,leftWristy,20);
    innumberleftwristy=Number(leftWristy);
    removedecimal=floor(innumberleftwristy);
    volume=removedecimal/500;
    document.getElementById("H3VOLUME").innerHTML="VOLUME="+volume;
    song.setVolume(volume);
    console.log(volume);
    }
    
}
function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}
function STOP(){
song.stop();
}
function modelloaded(){
    console.log("model is loaded");
}
function kanda(results){
    if (results.length>0) {
        console.log(results);
        scoreleftwrist=results[0].pose.keypoints[9].score;
        console.log("scoreleftwrist="+scoreleftwrist);
        leftWristx=results[0].pose.leftWrist.x;
        leftWristy=results[0].pose.leftWrist.y;
        rightWristx=results[0].pose.rightWrist.x;
        rightWristy=results[0].pose.rightWrist.y;
        console.log("leftWristx= "+leftWristx+"leftWristy= "+leftWristy );
        console.log("rightWristx= "+rightWristx+"rightWristy= "+rightWristy);
    }
}