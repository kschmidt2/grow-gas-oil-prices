let subhead=document.getElementsByClassName("chart-subhead"),headline=document.getElementById("chart-head");if(!headline)for(var i=0;i<subhead.length;i++)subhead[i].style.fontWeight="600";Highcharts.setOptions({lang:{thousandsSep:","}}),document.addEventListener("DOMContentLoaded",function(){Highcharts.chart("chart-container",{chart:{type:"line",styledMode:!0,spacingBottom:25,spacingRight:100},title:{text:null},data:{googleSpreadsheetKey:"1Hud66_g57ih4UP07Nis_t7MbPUg0_VSNRC8bUGNz3eY"},plotOptions:{series:{lineWidth:1,marker:{enabled:!1,symbol:"circle",fillColor:"#ffffff",states:{hover:{fillColor:"#ffffff"}}}}},legend:{align:"right",symbolRadius:0,verticalAlign:"top",x:10,itemMarginTop:-10},xAxis:{labels:{style:{whiteSpace:"nowrap"}},tickLength:5},yAxis:{title:!1,labels:{useHTML:!0,overflow:"allow"},tickAmount:4},credits:{enabled:!1},tooltip:{shadow:!1,padding:10,valueDecimals:1,valueSuffix:"%",formatter:function(){var e=new Date(this.point.x);console.log(e,this.point.x,this.point.y)}},annotations:[{labels:[{point:{x:15678144e5,y:-9.857323587,xAxis:0,yAxis:0},text:"Attacks in <br> Saudi Arabia",y:-30,shape:"connector",x:0}],shapes:[{point:{x:15678144e5,y:-9.857323587,xAxis:0,yAxis:0},type:"circle",r:5},{point:{x:15678144e5,y:-20.79487179,xAxis:0,yAxis:0},type:"circle",r:5}]}],responsive:{rules:[{condition:{maxWidth:500},chartOptions:{chart:{spacingRight:10},legend:{align:"left",x:-18,itemDistance:12},tooltip:{enabled:!1}}}]}})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsic3ViaGVhZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImhlYWRsaW5lIiwiZ2V0RWxlbWVudEJ5SWQiLCJpIiwibGVuZ3RoIiwic3R5bGUiLCJmb250V2VpZ2h0IiwiSGlnaGNoYXJ0cyIsInNldE9wdGlvbnMiLCJsYW5nIiwidGhvdXNhbmRzU2VwIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNoYXJ0IiwidHlwZSIsInN0eWxlZE1vZGUiLCJzcGFjaW5nQm90dG9tIiwic3BhY2luZ1JpZ2h0IiwidGl0bGUiLCJ0ZXh0IiwiZGF0YSIsImdvb2dsZVNwcmVhZHNoZWV0S2V5IiwicGxvdE9wdGlvbnMiLCJzZXJpZXMiLCJsaW5lV2lkdGgiLCJtYXJrZXIiLCJlbmFibGVkIiwic3ltYm9sIiwiZmlsbENvbG9yIiwic3RhdGVzIiwiaG92ZXIiLCJsZWdlbmQiLCJhbGlnbiIsInN5bWJvbFJhZGl1cyIsInZlcnRpY2FsQWxpZ24iLCJ4IiwiaXRlbU1hcmdpblRvcCIsInhBeGlzIiwibGFiZWxzIiwid2hpdGVTcGFjZSIsInRpY2tMZW5ndGgiLCJ5QXhpcyIsInVzZUhUTUwiLCJvdmVyZmxvdyIsInRpY2tBbW91bnQiLCJjcmVkaXRzIiwidG9vbHRpcCIsInNoYWRvdyIsInBhZGRpbmciLCJ2YWx1ZURlY2ltYWxzIiwidmFsdWVTdWZmaXgiLCJmb3JtYXR0ZXIiLCJkIiwiRGF0ZSIsInRoaXMiLCJwb2ludCIsImNvbnNvbGUiLCJsb2ciLCJ5IiwiYW5ub3RhdGlvbnMiLCJzaGFwZSIsInNoYXBlcyIsInIiLCJyZXNwb25zaXZlIiwicnVsZXMiLCJjb25kaXRpb24iLCJtYXhXaWR0aCIsImNoYXJ0T3B0aW9ucyIsIml0ZW1EaXN0YW5jZSJdLCJtYXBwaW5ncyI6IkFBUUEsSUFBQUEsUUFBQUMsU0FBQUMsdUJBQUEsaUJBQ0FDLFNBQUFGLFNBQUFHLGVBQUEsY0FDQSxJQUFBRCxTQUNBLElBQUEsSUFBQUUsRUFBQSxFQUFBQSxFQUFBTCxRQUFBTSxPQUFBRCxJQUNBTCxRQUFBSyxHQUFBRSxNQUFBQyxXQUFBLE1BSUFDLFdBQUFDLFdBQUEsQ0FDQUMsS0FBQSxDQUNBQyxhQUFBLE9BSUFYLFNBQUFZLGlCQUFBLG1CQUFBLFdBQ0FKLFdBQUFLLE1BQUEsa0JBQUEsQ0FDQUEsTUFBQSxDQUNBQyxLQUFBLE9BQ0FDLFlBQUEsRUFDQUMsY0FBQSxHQUNBQyxhQUFBLEtBRUFDLE1BQUEsQ0FDQUMsS0FBQSxNQUVBQyxLQUFBLENBQ0FDLHFCQUFBLGdEQUVBQyxZQUFBLENBQ0FDLE9BQUEsQ0FDQUMsVUFBQSxFQUVBQyxPQUFBLENBQ0FDLFNBQUEsRUFDQUMsT0FBQSxTQUNBQyxVQUFBLFVBQ0FDLE9BQUEsQ0FDQUMsTUFBQSxDQUNBRixVQUFBLGVBTUFHLE9BQUEsQ0FDQUMsTUFBQSxRQUNBQyxhQUFBLEVBQ0FDLGNBQUEsTUFDQUMsRUFBQSxHQUNBQyxlQUFBLElBRUFDLE1BQUEsQ0FDQUMsT0FBQSxDQUNBaEMsTUFBQSxDQUNBaUMsV0FBQSxXQUdBQyxXQUFBLEdBRUFDLE1BQUEsQ0FDQXZCLE9BQUEsRUFDQW9CLE9BQUEsQ0FDQUksU0FBQSxFQUNBQyxTQUFBLFNBRUFDLFdBQUEsR0FFQUMsUUFBQSxDQUNBbkIsU0FBQSxHQUVBb0IsUUFBQSxDQUNBQyxRQUFBLEVBQ0FDLFFBQUEsR0FDQUMsY0FBQSxFQUNBQyxZQUFBLElBQ0FDLFVBQUEsV0FDQSxJQUFBQyxFQUFBLElBQUFDLEtBQUFDLEtBQUFDLE1BQUFwQixHQUVBcUIsUUFBQUMsSUFBQUwsRUFBQUUsS0FBQUMsTUFBQXBCLEVBQUFtQixLQUFBQyxNQUFBRyxLQUdBQyxZQUFBLENBQUEsQ0FDQXJCLE9BQUEsQ0FBQSxDQUNBaUIsTUFBQSxDQUNBcEIsRUFBQSxXQUNBdUIsR0FBQSxZQUNBckIsTUFBQSxFQUNBSSxNQUFBLEdBRUF0QixLQUFBLCtCQUNBdUMsR0FBQSxHQUNBRSxNQUFBLFlBQ0F6QixFQUFBLElBRUEwQixPQUFBLENBQUEsQ0FDQU4sTUFBQSxDQUNBcEIsRUFBQSxXQUNBdUIsR0FBQSxZQUNBckIsTUFBQSxFQUNBSSxNQUFBLEdBRUEzQixLQUFBLFNBQ0FnRCxFQUFBLEdBQ0EsQ0FDQVAsTUFBQSxDQUNBcEIsRUFBQSxXQUNBdUIsR0FBQSxZQUNBckIsTUFBQSxFQUNBSSxNQUFBLEdBRUEzQixLQUFBLFNBQ0FnRCxFQUFBLE1BR0FDLFdBQUEsQ0FDQUMsTUFBQSxDQUFBLENBQ0FDLFVBQUEsQ0FDQUMsU0FBQSxLQUVBQyxhQUFBLENBQ0F0RCxNQUFBLENBQ0FJLGFBQUEsSUFFQWMsT0FBQSxDQUNBQyxNQUFBLE9BQ0FHLEdBQUEsR0FDQWlDLGFBQUEsSUFFQXRCLFFBQUEsQ0FDQXBCLFNBQUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGFkZHMgc29jaWFsIGNsYXNzIHRvIGdldCBzb2NpYWwgY2hhcnRcbi8vIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNoYXJ0LWFyZWFcIik7XG4vLyBmb3IodmFyIGkgPSAwOyBpIDwgZWxlbWVudC5sZW5ndGg7IGkrKylcbi8vIHtcbi8vICAgICBlbGVtZW50W2ldLmNsYXNzTmFtZSArPSBcIiBzb2NpYWxcIjtcbi8vIH1cblxuLy8gYm9sZHMgdGhlIHN1YmhlYWQgaWYgdGhlcmUgaXMgbm8gaGVhZGxpbmVcbmxldCBzdWJoZWFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNoYXJ0LXN1YmhlYWRcIiksXG4gICAgaGVhZGxpbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoYXJ0LWhlYWRcIik7XG4gICAgaWYgKCFoZWFkbGluZSkge1xuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgc3ViaGVhZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgc3ViaGVhZFtpXS5zdHlsZS5mb250V2VpZ2h0ID0gXCI2MDBcIjtcbiAgICAgICAgfSAgICAgICBcbiAgICAgfVxuXG5IaWdoY2hhcnRzLnNldE9wdGlvbnMoe1xuICAgIGxhbmc6IHtcbiAgICAgIHRob3VzYW5kc1NlcDogJywnXG4gICAgfVxufSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgbXlDaGFydCA9IEhpZ2hjaGFydHMuY2hhcnQoJ2NoYXJ0LWNvbnRhaW5lcicsIHtcbiAgICAgICAgY2hhcnQ6IHtcbiAgICAgICAgICAgIHR5cGU6ICdsaW5lJyxcbiAgICAgICAgICAgIHN0eWxlZE1vZGU6IHRydWUsXG4gICAgICAgICAgICBzcGFjaW5nQm90dG9tOiAyNSxcbiAgICAgICAgICAgIHNwYWNpbmdSaWdodDogMTAwXG4gICAgICAgIH0sIFxuICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgdGV4dDogbnVsbFxuICAgICAgICB9LFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBnb29nbGVTcHJlYWRzaGVldEtleTogJzFIdWQ2Nl9nNTdpaDRVUDA3TmlzX3Q3TWJQVWcwX1ZTTlJDOGJVR056M2VZJ1xuICAgICAgICB9LFxuICAgICAgICBwbG90T3B0aW9uczoge1xuICAgICAgICAgICAgc2VyaWVzOiB7XG4gICAgICAgICAgICAgICAgbGluZVdpZHRoOiAxLFxuICAgICAgICAgICAgICAgIC8vIGNsaXA6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG1hcmtlcjoge1xuICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgc3ltYm9sOiAnY2lyY2xlJyxcbiAgICAgICAgICAgICAgICAgICAgZmlsbENvbG9yOiAnI2ZmZmZmZicsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaG92ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsQ29sb3I6ICcjZmZmZmZmJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgIGFsaWduOiAncmlnaHQnLFxuICAgICAgICAgICAgc3ltYm9sUmFkaXVzOiAwLFxuICAgICAgICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgICAgICAgICB4OiAxMCxcbiAgICAgICAgICAgIGl0ZW1NYXJnaW5Ub3A6IC0xMFxuICAgICAgICB9LFxuICAgICAgICB4QXhpczoge1xuICAgICAgICAgICAgbGFiZWxzOiB7XG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRpY2tMZW5ndGg6IDUsXG4gICAgICAgIH0sXG4gICAgICAgIHlBeGlzOiB7XG4gICAgICAgICAgICB0aXRsZTogZmFsc2UsXG4gICAgICAgICAgICBsYWJlbHM6IHtcbiAgICAgICAgICAgICAgICB1c2VIVE1MOiB0cnVlLFxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnYWxsb3cnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGlja0Ftb3VudDogNFxuICAgICAgICB9LFxuICAgICAgICBjcmVkaXRzOiB7XG4gICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICB0b29sdGlwOiB7XG4gICAgICAgICAgICBzaGFkb3c6IGZhbHNlLFxuICAgICAgICAgICAgcGFkZGluZzogMTAsXG4gICAgICAgICAgICB2YWx1ZURlY2ltYWxzOiAxLFxuICAgICAgICAgICAgdmFsdWVTdWZmaXg6ICclJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIGQgPSBuZXcgRGF0ZSh0aGlzLnBvaW50LngpOyAvLyBUaGUgMCB0aGVyZSBpcyB0aGUga2V5LCB3aGljaCBzZXRzIHRoZSBkYXRlIHRvIHRoZSBlcG9jaFxuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZCwgdGhpcy5wb2ludC54LCB0aGlzLnBvaW50LnkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBhbm5vdGF0aW9uczogW3tcbiAgICAgICAgICAgIGxhYmVsczogW3tcbiAgICAgICAgICAgICAgICBwb2ludDoge1xuICAgICAgICAgICAgICAgICAgICB4OiAxNTY3ODE0NDAwMDAwLCAvLyB0aW1lc3RhbXBcbiAgICAgICAgICAgICAgICAgICAgeTogLTkuODU3MzIzNTg3LCAvLyB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICB4QXhpczogMCwgLy8geUF4aXMgSU5ERVhcbiAgICAgICAgICAgICAgICAgICAgeUF4aXM6IDAgLy8geEF4aXMgSU5ERVhcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRleHQ6ICdBdHRhY2tzIGluIDxicj4gU2F1ZGkgQXJhYmlhJyxcbiAgICAgICAgICAgICAgICB5OiAtMzAsXG4gICAgICAgICAgICAgICAgc2hhcGU6ICdjb25uZWN0b3InLFxuICAgICAgICAgICAgICAgIHg6IDAgICBcbiAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgc2hhcGVzOiBbe1xuICAgICAgICAgICAgICAgIHBvaW50OiB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDE1Njc4MTQ0MDAwMDAsIC8vIHRpbWVzdGFtcFxuICAgICAgICAgICAgICAgICAgICB5OiAtOS44NTczMjM1ODcsIC8vIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIHhBeGlzOiAwLCAvLyB5QXhpcyBJTkRFWFxuICAgICAgICAgICAgICAgICAgICB5QXhpczogMCAvLyB4QXhpcyBJTkRFWFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0eXBlOiAnY2lyY2xlJyxcbiAgICAgICAgICAgICAgICByOiA1XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgcG9pbnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgeDogMTU2NzgxNDQwMDAwMCwgLy8gdGltZXN0YW1wXG4gICAgICAgICAgICAgICAgICAgIHk6IC0yMC43OTQ4NzE3OSwgLy8gdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgeEF4aXM6IDAsIC8vIHlBeGlzIElOREVYXG4gICAgICAgICAgICAgICAgICAgIHlBeGlzOiAwIC8vIHhBeGlzIElOREVYXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHR5cGU6ICdjaXJjbGUnLFxuICAgICAgICAgICAgICAgIHI6IDVcbiAgICAgICAgICAgIH1dLFxuICAgICAgICB9XSxcbiAgICAgICAgcmVzcG9uc2l2ZToge1xuICAgICAgICAgICAgcnVsZXM6IFt7XG4gICAgICAgICAgICAgIGNvbmRpdGlvbjoge1xuICAgICAgICAgICAgICAgIG1heFdpZHRoOiA1MDBcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgY2hhcnRPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgY2hhcnQ6IHtcbiAgICAgICAgICAgICAgICAgIHNwYWNpbmdSaWdodDogMTBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgICAgICBhbGlnbjogJ2xlZnQnLFxuICAgICAgICAgICAgICAgICAgICB4OiAtMTgsXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1EaXN0YW5jZTogMTJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRvb2x0aXA6IHtcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XVxuICAgICAgICB9XG4gICAgfSk7XG59KTsiXX0=