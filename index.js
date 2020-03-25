d3.select('body').attr('class', 'container')

d3.select('#container')
  .insert('h1', ':first-child') //append would add it to the bottom of the graph
  .text('Awsome D3 Graph!')
  .style('color', 'lightgreen')
  .style('font-family', 'verdana')

let myData = [100, 125, 320, 440, 200, 100, 125, 320, 440, 200, 300, 490],
  width = 500,
  height = 500,
  barWidth = 35,
  barOffset = 5
let myChart = d3
  .select('#chart')
  .append('svg')
  .attr('width', width)
  .attr('height', height)
  .style('background', '#f3f3f3')
  .selectAll('rect')
  .data(myData)
  .enter()
  .append('rect')
  .style('fill', 'lightgreen')
  .attr('width', barWidth)
  .attr('height', d => d)
  .attr('x', (data, index) => {
    return index * (barWidth + barOffset)
  })
  .attr('y', data => height - data)
