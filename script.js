//init
var container = document.getElementById('background');
var inner = document.getElementById('inner');
//mouse
var mouse = {
    _x:0,
    _y:0,
    x:0,
    y:0,

    updatePosition: function(event) {
        var e = event || window.event;
        this.x = e.clientX - this._x;
        this.y = (e.clienty - this._y) * -1;
    },

    setOrigin: function(e) {
        this._x = e.offsetLeft + Math.floor(e.offsetWidth/2);
        this._y = e.offsetTop + Math.floor(e.offsetHeight/2);

    },
    show: function() {
        return '(' + this.x + ',' + this.y + 
    }
}
var counter = 0;
var updateRate = 10;

var isTimeToUpdate = function() {
    return counter++ % updateRate === 0;
};

var onMouseEventHandler = function(event) {
    update(event);
};

var onMouseLeaveHandler = function() {
inner.style = '';
};

var onMouseMoveHandler = function(event) {
    if (isTimeToUpdate()) {
        update(event);
    }
};

container.onmouseenter = onMouseEventHandler;
container.onmouseleave = onMouseLeaveHandler;
container.onmousemove = onMouseMoveHandler;
