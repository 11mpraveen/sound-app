function startdetecting(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/wg4Cb_UkY/model.json",modelready);
}

function modelready(){
    console.log("model has been loaded correctly");
    classifier.classify(gotResult);
}
var d_count = 0;
var e_count = 0;
var c_count = 0;
var g_count = 0;
function gotResult(error,results){
    console.log("got results")
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        red = Math.floor(Math.random()*255) + 1;
        green = Math.floor(Math.random()*255) + 1;
        blue = Math.floor(Math.random()*255) + 1;
        document.getElementById("times_heard").style.color = "rgb(" + red + "," + green + "," + blue + ")";
        document.getElementById("animal_name").style.color = "rgb(" + red + "," + green + "," + blue + ")";
        document.getElementById("animal_name").innerHTML = "I heard the sound of" + results[0].label;
        if(results[0].label=="Elephant"){
            document.getElementById("image").src = "elephant.jpeg";
            e_count = e_count + 1;
            console.log("The elephant count: " + e_count);
            document.getElementById("times_heard").innerHTML = "I heard the " + e_count + "times";
        }
        if(results[0].label=="Dolphin"){
            document.getElementById("image").src = "dolphin.jpeg";
            d_count = d_count + 1;
            console.log("The dolphin count: " + d_count);
            document.getElementById("times_heard").innerHTML = "I heard the " + d_count + "times";
        }
        if(results[0].label=="Gorilla"){
            document.getElementById("image").src = "gorilla.jpeg";
            g_count = g_count + 1;
            console.log("The gorilla count: " + g_count);
            document.getElementById("times_heard").innerHTML = "I heard the " + g_count + "times";
        }
        if(results[0].label=="Chimpanzee"){
            document.getElementById("image").src = "chimpanzee.jpeg";
            c_count = c_count + 1;
            console.log("The chimpanzee count: " + c_count);
            document.getElementById("times_heard").innerHTML = "I heard the " + c_count + "times";
        }

    }
    
}

