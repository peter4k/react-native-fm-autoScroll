var DeviceEventEmitter = require('react-native').DeviceEventEmitter;
var dismissKeyboard = require('dismissKeyboard');

var React = require('react-native');
var SCREEN_HEIGHT = require('Dimensions').get('window').height;

var AutoScroll = function(){}

AutoScroll.prototype.init = function(scrollView, options){
    var self = this;
    this.height = 0;
    this.previousScrollOffset = 0;
    this.scrollView = scrollView;
}

AutoScroll.prototype.onScroll = function(event){
    this.previousScrollOffset = event.nativeEvent.contentOffset.y;
    console.log(this.previousScrollOffset, event.nativeEvent.contentOffset.y);
}

AutoScroll.prototype.scrollAboveKeyBoard = function(view){
    var self = this;
    setTimeout(function(){
        view.measure((ox, oy, width, height, px, py) => {
            var marginToBottom = SCREEN_HEIGHT - (py + height);
            if(marginToBottom < self.height){
                self.scrollView.scrollTo(self.height - marginToBottom);
            }
        });
    }, 50)
}

AutoScroll.prototype.scrollAboveKeyBoardWithOffset = function(view, offset){
    var self = this;
    setTimeout(function(){
        console.log('called scroll');
        view.measure((ox, oy, width, height, px, py) => {
            var marginToBottom = SCREEN_HEIGHT - (py + height);
            if(marginToBottom < self.height + offset){
                var scrollOffset = self.height - marginToBottom + offset;
                self.scrollView.scrollTo(self.previousScrollOffset + scrollOffset);
                console.log('keyboard height', self.height, 'scrollOffset', scrollOffset, 'prev', self.previousScrollOffset)
            }
        });
    }, 200);
}

module.exports = AutoScroll;
