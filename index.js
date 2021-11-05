function onLoad() {
    var min = 00;
    var sec = 00;
    var milisec = 00;
    var minText = document.getElementById("minutes");
    var secText = document.getElementById("seconds");
    var milisecText = document.getElementById("milisec");
    var startButton = document.getElementById("start-button");
    var stopButton = document.getElementById("stop-button");
    var resetButton = document.getElementById("reset-button");
  
    var interval;
  
    startButton.onclick = function () {
      clearInterval(interval);
      interval = setInterval(startTimer, 10);
    };
  
    function startTimer() {
      milisec++;
      if (milisec <= 9) {
        milisecText.innerHTML = "0" + milisec;
      } else {
        milisecText.innerHTML = milisec;
      }
  
      if (milisec > 99) {
        sec++;
        secText.innerHTML = "0" + sec;
        milisec = 0;
        milisecText.innerHTML = "0" + milisec;
      }
  
      if (sec > 9) {
        secText.innerHTML = sec;
      }
      if(sec > 59) {
        min++;
        minText.innerHTML = "0" + min;
        sec = 0;
        secText.innerHTML = "0" + sec;
      }

      if (min > 9) {
        minText.innerHTML = min;
      }

      if (sec > 9) {
        secText.innerHTML = sec;
      }
    }
  
    stopButton.onclick = function () {
      clearInterval(interval);
    };
  
    resetButton.onclick = function () {
      clearInterval(interval);
      min = "00";
      sec = "00";
      milisec = "00";
      minText.innerHTML = min;
      secText.innerHTML = sec;
      milisecText.innerHTML = milisec;
    };
  }
  
onLoad();
  