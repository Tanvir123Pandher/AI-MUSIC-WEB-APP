song = "";
scoreleftwrist= 0
leftWristx= 0
leftWristy= 0
rightWristx= 0 
rightWristy= 0 
function preload(){
    song = loadSound("music.mp3")
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video,modelloaded)
    poseNet.on("pose",gotposes )
}

function gotposes(results){
   if (results.length > 0) {
      console.log(results)
      scoreleftwrist = results[0].pose.keypoints[9].score
      console.log("scoreleftwrist = " +scoreleftwrist);

      leftWristx=results[0].pose.leftWrist.x
      leftWristy=results[0].pose.leftWrist.y
      console.log("leftWristX =" + leftWristx +" leftWristY = " + leftWristy);
      
      rightWristx=results[0].pose.rightWrist.x
      rightWristy=results[0].pose.rightWrist.y
      console.log("rightWristX =" + rightWristx +" rightWristY = " + rightWristy);
   }
}

function modelloaded(){
   console.log("model is loaded")
}

function draw() {
	image(video, 0, 0, 600, 500);
if (scoreleftwrist > 0.2) {
   
	fill("#FF0000");
	stroke("#FF0000");
	circle(rightWristx,rightWristy,20);
	
      }
}	

 function play() {
    song.play();
    song.setVolume(1)
    song.rate(1)
 }

 function stop() {
    song.stop();
 }
 

