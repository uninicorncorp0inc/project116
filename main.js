noseX = 0;
noseY = 0;
function setup(){
    canvas = createCanvas(500,500);
    canvas.position(500,300);
    
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("Model, OK!");

}

function gotPoses(results){
if(results.length > 0){
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
}
}

function preload(){
dog_img = loadImage('unicorn_filter.png')
}

function draw(){
image(video ,0,0,500,500);
image(dog_img, noseX - 215  , noseY - 280,300,300);
}

function take_pic(){
    save("picture.png");

}