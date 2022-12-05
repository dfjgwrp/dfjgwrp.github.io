

var i = 0;
window.addEventListener('load', function(){
    if (i == 0) {
        i = 1;
        var Container = document.getElementById("myProgress");
        var elem = document.getElementById("myBar");
        var percentageNum = document.getElementById("percentage");
        var spiner = document.getElementById("spiner");
        var afterLoad = document.getElementById("socket");
        var enteringContent = document.getElementById("enteringContent");
        var width = 0;
        var id = setInterval(frame, 0);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
                i = 0;
                setTimeout(function () {
                    spiner.classList.add('complete');
                    elem.classList.add('complete');
                    percentageNum.classList.add('complete');
                    afterLoad.style.backgroundColor = "transparent";
                },2000);
                afterLoad.style.display = "grid";
                afterLoad.style.backgroundColor = "black";
                Container.appendChild(enteringContent);
                enteringContent.style.display = "block";
            } else {
                width++;
                elem.style.width = width + "%";
                percentageNum.innerHTML = width  + "%";
            }
        }
    }


});







