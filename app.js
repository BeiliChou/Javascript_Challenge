// from data.js
var tableData = data;

// Identify the table and tbody
var tbody = d3.select('#ufo-table>tbody');

function buildTable(tableData){
tableData.forEach(record => {
    var row = tbody.append('tr')

Object.values(record).forEach(col =>{
    row.append('td').text(col)
})

})
}
//DATE SEARCH
function filterTable(elem){

    // var changedElem = d3.select.target;

    var dateElem = d3.select('#datetime');
    var filterDate = dateElem.property('value');

    filteredData = tableData.filter(rec => rec['datetime'] == filterDate);
    console.log(filteredData);

    tbody.html('');

    buildTable(filteredData);

};

btn = d3.select('#filter-btn')
datetimefield = d3.select('#datetime')

btn.on('click', filterTable);
datetimefield.on('change',filterTable)

buildTable(tableData)