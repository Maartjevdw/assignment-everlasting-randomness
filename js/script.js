const svg = d3.select('body').append('svg')
  .attr('width', '800')
  .attr('height', '100');

let arrData = deData();


//oranje cirkels
svg.selectAll('circle')
  .data(arrData).enter()
  .append('circle')
  .attrs({
    cx: (d, i) => {
      return (i * 90) + 40
    },
    cy: 50,
    r: (d) => d,
    fill: 'orange'
  });

d3.interval(function () {
  update(svg);
}, 1200);


// groene cirkels
function update(d3) {
  let data = deData();

  const circles = d3.selectAll('circle')
    .data(data);
  let enter = circles.enter()
    .append('circle')
    .attrs({
      cx: (d, i) => {
        return (i * 90) + 40
      },
      cy: 50,
      r: 0,
      fill: 'green'
    }).transition()
    .duration(1000)
    .attrs({
      r: (d) => d
    });


  //oranje cirkels
  let update = circles
    .attrs({
      cx: (d, i) => {
        return (i * 90) + 40
      },
      cy: 50
    })
    .transition().
    duration(1000)
    .attrs({
      r: (d) => d,
      fill: 'orange'
    });



  //rode cirkels
  let exit = circles.exit()
    .transition()
    .attrs({
      fill: 'red'
    })
    .duration(1000)
    .transition()
    .duration(1000)
    .style('opacity', 0)
    .remove();
}



function deData() {
  let data = [];
  let numberCircles = randomInteger(0, 11);
  for (i = 0; i < numberCircles; i++) {
    let num = randomInteger(20, 40);
    data[i] = num;
  }
  return data
}

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}