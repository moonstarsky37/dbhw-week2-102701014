/**
 * Created by ziyu(Do not delete) on 2016/3/17.
 */
var t;

function whatnumber(){
    document.getElementById("y").innerHTML=parseInt(6*(document.getElementById("t1").value)+(document.getElementById("t2").value));
    document.getElementById("inputtime").style="display:none";
    document.getElementById("Showtime").style="ont-size:13px";
    document.getElementById("restartbutton").style="1";
    count();
}

function restart(){
    document.getElementById("inputtime").style="1";
    document.getElementById("y").innerHTML="Count from?";
    document.getElementById("restartbutton").style="display:none";
    document.getElementById("stopbutton").style="display:none";
    clearTimeout(t);
}

function stop(){
    clearTimeout(t);
}

function count(){
    document.getElementById("stopbutton").style="display:inline-block";
    var time=parseInt(document.getElementById("y").innerHTML);

    if(time && time <= document.getElementById("y").innerHTML){
        if(time <= 10){
            document.getElementById("y").innerHTML="0"+(time-1);
        }else{
            document.getElementById("y").innerHTML=time-1;
        }
    }else{
        document.getElementById("y").innerHTML="Time out!!!";
    }

    t=setTimeout(function() {
        count();
    },1000);

}

