noseX = 0;
noseY = 0;

function preload() {
    image_load = loadImage("https://i.postimg.cc/c1Tjz6NZ/cn.png");

}

function setup() {
    canvas = createCanvas(350, 350);
    canvas.center();
    capture = createCapture(VIDEO);
    capture.hide();

    pN = ml5.poseNet(capture, videoLoaded);
    pN.on('pose', gotPoses);

}

function gotPoses(pose_r) {
    console.log(pose_r);

    noseX = pose_r[0].pose.nose.x;
    noseY = pose_r[0].pose.nose.y;

}

function draw() {
    image(capture, 0, 0, 350, 350);
   // fill(255, 10, 10);
    //stroke(0,0,0);
   // circle(noseX - 150, noseY - 80, 25);
    image(image_load, noseX - 170, noseY - 90, 40, 40);
    
}

function videoLoaded() {
    console.log("Your video is loaded!");
}


