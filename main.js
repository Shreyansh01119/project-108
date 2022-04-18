function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/8QG4zs1Jx/model.json',modelready);
}
function modelready(){
    classifier.classify(gotresults);
}
function gotresults(error,results){
    
    if(error){
        console.error(error);
    }
    else{
        console.log(results);

        red = Math.floor(Math.random()*255)+1;
        green = Math.floor(Math.random()*255)+1;
        blue = Math.floor(Math.random()*255)+1;

        document.getElementById("result_label").innerHTML = 'I Can Hear - '+results[0].label;
        document.getElementById("result_confiedence").innerHTML = 'Accuracy - '+
        (results[0].confidence*100).toFixed(0)+" %";

        document.getElementById("result_label").style.color = "rgb("+red+","+green+","+blue+")";
        document.getElementById("result_confiedence").style.color = "rgb("+red+","+green+","+blue+")";

        one = document.getElementById('lion');
        two = document.getElementById('cat');
        three = document.getElementById('cow');
        four = document.getElementById('dog');

        if(results[0].label == "Roar"){
            one.src = 'lion.jpg';
        }
        else if(results[0].label == "Meowing"){
            two.src = 'cat.jpg';
        }
        else if(results[0].label == "Mooing"){
            three.src = 'cow.jpg';
        }
        else{
            four.src = 'dog.jpg';
        }
    }

}
    