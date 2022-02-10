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
            elements.push(ball);
            return elements;
        }
    }
})();

//Creación de la vista
(function(){
    self.BoardView = function(canvas, board){
        this.canvas = canvas;
        this.canvas.width = board.width;
        this.canvas.height = board.height;
        this.board = board;
        this.ctx = canvas.getContext("2d");
    }
})


window.addEventListener("load",main);

//Accedemos a la clase que esta dentro de la función anonima 
function main(){
    var board = new Board(800,400);
    var canvas = document.getElementById('canvas');
    var board_view = new BoardView(canvas, board);
}