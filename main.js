img="";
status="";
function modelLoaded(){
    console.log("modelLoaded");
    status=true;
    objectDetector.detect(img,gotResult);
}
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting objects";
}
function preload(){
    img=loadImage('phone and laptop.jpeg');
}
function draw(){
    image(img,0,0,640,420);
    fill("#FF0000");
    text("laptop",65,100);
    noFill();
    stroke("FF0000");
    rect(100,60,350,300);
    fill("#FF0000");
    text("phone", 350, 180);
    noFill();
    stroke("#FF0000");
    rect(350,180,240,200);
}
function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
    }
}