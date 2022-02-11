// Creación modelo
(function(){
    //Creación de clase dentro de función anonima
        self.Board = function(width,height){
        //Creación propiedades del objeto
        this.width = width;
        this.height = height;
        this.playing = false;
        this.game_over = false;
        this.bars = [];
        this.ball = null;
    }
    //Modificiación del prototipo para colocar los metodos de la misma 
    self.Board.prototype = {
        get elements(){
            //Barras laterales del juego
            var elements = this.bars;
            elements.push(this.ball);
            return elements;
        }
    }
})();

//Creación barras 
(function(){
    self.Bar = function(x,y,width,height,board){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.board = board;
        //Agregar nuevo elemento
        this.board.bars.push(this);
        this.kind = "rectangle";
        this.speed = 10;
    }
    //Movimiento del objeto
    self.Bar.prototype = {
        down: function(){
            this.y += this.speed;
        },
        up: function(){
            this.y -= this.speed;
        },
        toString: function(){
            return "x: "+ this.x +" y: "+ this.y;
        }
    }
})();

//Creación de la vista
(function(){
    self.BoardView = function(canvas,board){
        this.canvas = canvas;
        this.canvas.width = board.width;
        this.canvas.height = board.height;
        this.board = board;
        this.ctx = canvas.getContext("2d");
    }

    self.BoardView.prototype = {
        draw: function(){
            for (var i = this.board.elements.length - 1; i >= 0; i--){
                 var el = this.board.elements[i];

            draw(this.ctx,el);
            };
        }
    }

    function draw(ctx,element){
        if(element !== null && element.hasOwnProperty("Kind")){
            switch(element.kind){
                case "rectangle":
                    ctx.fillRect(element.x,element.y,element.width,element.height); 
                    break;
            }
        }
    }
})();

    var board = new Board(800,400);
    var bar = new Bar (20,100,40,100,board);
    var bar = new Bar (735,100,40,100,board);
    var canvas = document.getElementById('canvas');
    var board_view = new BoardView(canvas,board);


document.addEventListener("keydown",function(ev){
    console.log(ev.keyCode);
    if(ev.keyCode == 38){
        bar.up();
    }
    else if(ev.keyCode == 40){
        bar.down();
    }


});


self.addEventListener("load",main);

//Accedemos a la clase que esta dentro de la función anonima 
//Controlador 
function main(){
    board_view.draw();
}