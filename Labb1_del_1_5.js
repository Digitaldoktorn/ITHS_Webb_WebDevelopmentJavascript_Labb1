/* ----------- Del 1 ------------ */
addEventListener('load', function(){
  var jan = 0; var feb = 0; var mar = 0; var apr = 0; var may = 0; var jun = 0; var jul = 0; var aug = 0; var sep = 0; var oct = 0; var nov = 0; var dec = 0;

  fetch('fixamingata-goteborgs-kommun-2017.json')
    .then(function (response) { return response.json(); })
    .then(function (result) {
      var reports = result.requests[0].request;

      for (var i=0; i < reports.length; i++){
        var month = reports[i].agency_sent_datetime.split('-')[1];
        if(month == '01'){ jan++; }
        if(month == '02'){ feb++; }
        if(month == '03'){ mar++; }
        if(month == '04'){ apr++; }
        if(month == '05'){ may++; }
        if(month == '06'){ jun++; }
        if(month == '07'){ jul++; }
        if(month == '08'){ aug++; }
        if(month == '09'){ sep++; }
        if(month == '10'){ oct++; }
        if(month == '11'){ nov++; }
        if(month == '12'){ dec++; }
      }
      var reportsPerMonth = [ ['Januari', jan], ['Februari', feb], ['Mars', mar], ['April', apr], ['Maj', may], ['Juni', jun], ['Juli', jul], ['Augusti', aug], ['September', sep], ['Oktober', oct], ['November', nov], ['December', dec]  ];

      /* ----------- Del 2 ------------ */

      var reportsPerCategory = {};

      for (var i = 0; i < reports.length; i++){
        var Category = reports[i].service_code;

        if (reportsPerCategory[Category] === undefined) {
          reportsPerCategory[Category] = 1;
        } else {
          reportsPerCategory[Category]++;
        }
      };
      console.log(reportsPerCategory);

      /* ----------- Del 3 Månad------------ */
      var tableReportsMonth = document.createElement('table');
      var tr = document.createElement('tr');
      var th1 = document.createElement('th');
      var th2 = document.createElement('th');
      th1.appendChild(document.createTextNode('Månad'));
      th2.appendChild(document.createTextNode('Antal rapporter'));
      tr.appendChild(th1);
      tr.appendChild(th2);
      tableReportsMonth.appendChild(tr);
      document.body.appendChild(tableReportsMonth);

      reportsPerMonth.forEach(function (month){
        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        td1.appendChild(document.createTextNode(month[0]));
        td2.appendChild(document.createTextNode(month[1]));
        tr.appendChild(td1);
        tr.appendChild(td2);
        tableReportsMonth.appendChild(tr);
        /* ----------- Del 4 Månad ------------ */
        tr.addEventListener('mouseover', function(){
          var myTableRows = document.querySelector('td');
          myTableRows = document.querySelectorAll('td');
          tr.style.backgroundColor = 'beige';
        });
        tr.addEventListener('mouseout', function(){
          var myTableRows = document.querySelector('td');
          myTableRows = document.querySelectorAll('td');
          tr.style.backgroundColor = 'white';
        });


      })
      /* ----------- Del 5 Månad------------ */
          var w = 1200;
          var h = 400;
          var padding = 2;
          var reportsPerMonth2 = [jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec];
          var svg = d3.select('body')
            .append('svg')
            .attr('width', w)
            .attr('height', h);

          svg.selectAll('rect')
            .data(reportsPerMonth2)
            .enter()
            .append('rect')
              .attr('x', function(d, i){
                return (i * (w/reportsPerMonth2.length));
              })
              .attr('y', function(d){
                return h - d * 4;
              })
              .attr('width', w/reportsPerMonth2.length - padding)
              .attr('height', function(d){
                return d * 4;
              });

      /* ----------- Del 3 Kategori------------ */
      var tableReportsCategory = document.createElement('table');
      var tr = document.createElement('tr');
      var th1 = document.createElement('th');
      var th2 = document.createElement('th');
      th1.appendChild(document.createTextNode('Kategori'));
      th2.appendChild(document.createTextNode('Antal rapporter'));
      tr.appendChild(th1);
      tr.appendChild(th2);
      tableReportsCategory.appendChild(tr);
      document.body.appendChild(tableReportsCategory);

      // gör till forEach-lägg in Eventlistener precis som ovan
      var categoryVal = Object.values(reportsPerCategory);
      var categoryKey = Object.keys(reportsPerCategory);

      for (var i = 0; i < categoryVal.length; i++) {

        var tr = document.createElement('tr');
        // tr = document.createElement('tr');
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        td1.appendChild(document.createTextNode(categoryKey[i]));
        td2.appendChild(document.createTextNode(categoryVal[i]));
        tr.appendChild(td1);
        tr.appendChild(td2);
        tableReportsCategory.appendChild(tr);

        /* ----------- Del 4 Kategori------------ */

        // Lösning 1: Använd forEach istället för for
        // Lösning 2: Ta emot event-parameter nedan, och använd event.target - Kolla Jons videor som visar detta
        tr.addEventListener('mouseover', function(event){
          console.log('target:', event.target);
          tr = event.target.parentElement;
          var myTableRows = document.querySelector('td');
          myTableRows = document.querySelectorAll('td');
          console.log(tr);
          tr.style.backgroundColor = 'beige';
        });
        tr.addEventListener('mouseout', function(){
          var myTableRows = document.querySelector('td');
          myTableRows = document.querySelectorAll('td');
          tr.style.backgroundColor = 'white';
        });
      }




/* ----------- Del 5 Kategori ------------ */

    var w = 1600;
    var h = 400;
    var padding = 2;
    var reportsPerCategoryArray = [
      { x: categoryKey[0], y: categoryVal[0] },
      { x: categoryKey[1], y: categoryVal[1] },
      { x: categoryKey[2], y: categoryVal[2] },
      { x: categoryKey[3], y: categoryVal[3] },
      { x: categoryKey[4], y: categoryVal[4] },
      { x: categoryKey[5], y: categoryVal[5] },
      { x: categoryKey[6], y: categoryVal[6] },
      { x: categoryKey[7], y: categoryVal[7] },
      { x: categoryKey[8], y: categoryVal[8] },
      { x: categoryKey[9], y: categoryVal[9] },
      { x: categoryKey[10], y: categoryVal[10] },
      { x: categoryKey[11], y: categoryVal[11] },
      { x: categoryKey[12], y: categoryVal[12] },
      { x: categoryKey[13], y: categoryVal[13] },
      { x: categoryKey[14], y: categoryVal[14] },
      { x: categoryKey[15], y: categoryVal[15] }
    ];

      d3.select('body')
        .append('svg')
        .attr('height', h)
        .attr('width', w)
        .selectAll('g')
        .data(reportsPerCategoryArray)
        .enter()
        .append('g')
        .call(function(g) {
          g.append('rect')
            .attr('x', function(d, i) {
              return i * (w/reportsPerCategoryArray.length);
            })
            .attr('y', function(d) {
              return 380 - d.y / 0.202; // 77 (Klotter) dividerat m 380 = 0.202
            })
            .attr('width', w/reportsPerCategoryArray.length - padding)
            .attr('height', function(d) {
              return d.y / 0.202
            })

          g.append('text')
            .attr('x', function(d, i) {
              return i * 100 + 50;
            })
            .attr('y', 390)
            .attr('font-family', 'sans-serif')
            .attr('fill', 'black')
            .attr('font-size', '11')
            .attr('text-anchor', 'middle')
            .text(function(d) {
              return d.x;
            });

          return g;

        });

    });

});
