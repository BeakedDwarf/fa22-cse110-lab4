


function printTime(){
    var counter = 0;
    var i = setInterval(function(){
        let d = new Date();
        let time = d.toLocaleTimeString();
        console.log(time);
        counter++;
        if(counter===20){
            clearInterval(i);
        }
    }, 1000);
}

printTime();


