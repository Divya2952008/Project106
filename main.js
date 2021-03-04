Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90,
    });
    
    camera=document.getElementById("camera");
    Webcam.attach('#camera');
    
    function take_snapshot(){
    webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="capture_image" src="'+data_uri+'"/>';
    });
    }
    
    console.log('ml5 version:', ml5.version);
    classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/2kTYG3It6/model.json',modelLoaded);
    
    function modelLoaded(){
        console.log('modelLoaded');
    }
    
    function speak(){
        var synth=window.synthSynthesis;
        speak_data_1= "the first Prediction is "+prediction_1;
        speak_data_2="the secont Prediction is"+prediction_2;
        var utterThis=new SpeechSynthesisUtterance(speak_data_1+speack_data_2);
        synth.speak(utterThis);
    
        
    }
    