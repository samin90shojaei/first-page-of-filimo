$("document").ready(
    function(){
        $(".cardp").mousedown(function(){
            $(this).css("border", "2px solid gray");
        });
        $(".cardp").mouseup(function(){
            $(this).css("border", "none");
        });
        $("#serial").click(function(){
            $("#pserial").show();
            $("#pfilm").hide();
        });
        $("#film").click(function(){
            $("#pfilm").show();
            $("#pserial").hide();
        });
        $("#darkm").click(function(){
            $("body").css("background-color", "#c2c2c2").css("color", "black");
        });
        $("#darkm").dblclick(function(){
            $("body").css("background-color", "#151515").css("color", "white");
        });
        $("a").css("text-decoration", "none");
    }
)
function DarkLight() {
    var body = document.body;
    body.classList.toggle("light-mode");
}