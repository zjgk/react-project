import React, { Component } from "react";

// 笔画
export default class Canvas01 extends React.PureComponent {
  componentDidMount() {
    this.draw();
  }
  draw = () => {
    var canvas = document.getElementById('canvas01');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');
      // ctx.fillRect(25, 25, 100, 100);
      // ctx.clearRect(45, 45, 60, 60);
      // ctx.strokeRect(50, 50, 50, 50);
      // ctx.stroke();

      ctx.fillStyle = '#FD0';
      ctx.fillRect(0,0,75,75);
      ctx.fillStyle = '#6C0';
      ctx.fillRect(75,0,75,75);
      ctx.fillStyle = '#09F';
      ctx.fillRect(0,75,75,75);
      ctx.fillStyle = '#F30';
      ctx.fillRect(75,75,75,75);
      ctx.fillStyle = '#FFF';
    
      // 设置透明度值
      ctx.globalAlpha = 0.2;
    
      // 画半透明圆
      for (var i=0;i<7;i++){
          ctx.beginPath();
          ctx.arc(75,75,10+10*i,0,Math.PI*2,true);
          ctx.fill();
      }
    }
  }
  render() {

    return (

      <div >
        <canvas id="canvas01" width="200" height="200"></canvas>
      </div>
    );
  }
}
