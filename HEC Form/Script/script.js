function display(){
    var imgcanvas = document.getElementById("imgd");
    var fileinput = document.getElementById("myFile");
    var image = new SimpleImage(fileinput);
    image.drawTo(imgcanvas);
}