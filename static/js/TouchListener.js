class TouchListener {
    constructor(direction, callback) {
        this.direction = direction;
        this.callback = callback;
    
        this.touchStartX = 0;
        this.touchStartY = 0;
    
        this.registerTouchEvents();
      }
    
      registerTouchEvents() {
        document.addEventListener("touchstart", this.handleTouchStart.bind(this));
      }
    
      handleTouchStart(evt) {
        const touch = evt.touches[0];
        this.touchStartX = touch.clientX;
        this.touchStartY = touch.clientY;
        document.addEventListener("touchmove", this.handleTouchMove.bind(this));
        document.addEventListener("touchend", this.handleTouchEnd.bind(this));
      }
    
      handleTouchMove(evt) {
        const touch = evt.touches[0];
        const touchX = touch.clientX;
        const touchY = touch.clientY;
        const dx = touchX - this.touchStartX;
        const dy = touchY - this.touchStartY;
    
        if (Math.abs(dx) > Math.abs(dy)) {
          if (dx > 0) {
            if (this.direction === "Right") {
              this.callback();
            }
          } else {
            if (this.direction === "Left") {
              this.callback();
            }
          }
        } else {
          if (dy > 0) {
            if (this.direction === "Down") {
              this.callback();
            }
          } else {
            if (this.direction === "Up") {
              this.callback();
            }
          }
        }
      }
    
      handleTouchEnd() {
        document.removeEventListener("touchmove", this.handleTouchMove);
        document.removeEventListener("touchend", this.handleTouchEnd);
      }
}