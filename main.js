canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
nasa_mars_images_array = ["mars.jpg"];
random_number = Math.floor(Math.random() * 1);
console.log(random_number);
rover_width = 100;
rover_height = 90;
background_image = nasa_mars_images_array[random_number];
console.log("background_image = " + background_image);
rover_image = "rover.png";
rover_x = 10;
rover_y = 10;


function add() {
	background_imgTag = new Image(); //defining a variable with a new image
	background_imgTag.onload = uploadBackground; // setting a function, onloading this variable
	background_imgTag.src = background_image;   // load image

	rover_imgTag = new Image(); //defining a variable with a new image
	rover_imgTag.onload = uploadrover; // setting a function, onloading this variable
	rover_imgTag.src = rover_image;   // load image
}

    function uploadBackround() {
        ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.heigth);
    }

    function uploadrover() {
        ctx.drawImage(rover_imgTag, rover_x, rover_y, rover.width, rover_heigth);
    }

    window.addEventListener("keydown", my_keydown);

    function my_keydown(e); {

        KeyPressed = e.keyCode;
        console.log(KeyPressed);
        if (KeyPressed == '38') {
            up();
            console.log("up");
        }
        if (KeyPressed == '40') {
            down();
            console.log("down");
        }
        if (KeyPressed == '37') {
            left();
            console.log("left");
        }
        if (KeyPressed == '39') {
            rigth();
            console.log("rigth");
        }
    }

    function up(){
        if(rover_y >=0){
            rover_y -=10;
            console.log("When up arrow is pressed = " + rover_x +"-" +rover_y);
            uploadBackround();
            uploadrover();
        }
    }

    function down(){
        if(rover_y <=500){
            rover_y +=10;
            console.log("When down arrow is pressed, x= " +rover_x + "y = " +rover_y);
            uploadBackround();
            uploadrover();
        }
    }

    function left(){
        if(rover_x >=0){
            rover_x -=10;
            console.log("When left arrow is pressed, x= " +rover_x + "y = " +rover_y);
            uploadBackround();
            uploadrover();
        }
    }
    function rigth(){
        if(rover_x <=700){
            rover_x +=10;
            console.log("When rigth arrow is pressed, x= " +rover_x + "y = " +rover_y);
            uploadBackround();
            uploadrover();
        }
    }











