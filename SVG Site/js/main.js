function updateChart() {
  let dataset = document
    .getElementById('dataset')
    .value
    .split(',')
  
  let selection = d3.select('#chart')
    .selectAll('div')
    .data(dataset)
  
  selection
    .text((d) => (d))
    .style('width', (d) => (`${d}px`))
 
  selection.enter()
    .append('div')
      .text((d) => (d))
      .style('width', (d) => (`${d}px`))
  
  selection.exit()
    .remove()
}