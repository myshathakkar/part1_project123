    function setup(){
    video=createCapture(VIDEO)
    video.size(550, 400)
    canvas=createCanvas(550,400)
    canvas.position(590,190)

    poseNet=ml5.poseNet(video,model_loaded)
    poseNet.on("pose",got_poses)
}
function model_loaded(){
    console.log("model loaded")
}
function got_poses(results){
if(results.length>0){
    console.log(results)
}
}