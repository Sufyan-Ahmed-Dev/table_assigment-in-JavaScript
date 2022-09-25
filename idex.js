pop_up = parseInt(prompt("Enter Your Number"));
var div = document.getElementById("contianer");
table_tag = document.createElement("table");
div.appendChild(table_tag);
// i = 0;
for (let i = 1;i < 11; i++) {
  // for Row 1
  table_row = document.createElement("tr");
  table_tag.appendChild(table_row);

  // table-data for first row1

  table_data_1 = document.createElement("td");
  table_data_1.innerHTML = pop_up;
  table_row.appendChild(table_data_1);

  table_data_2 = document.createElement("td");
  table_data_2.innerHTML = "x";
  table_row.appendChild(table_data_2);

  table_data_3 = document.createElement("td");
  table_data_3.innerHTML = i ;
  table_row.appendChild(table_data_3);

  table_data_4 = document.createElement("td");
  table_data_4.innerHTML = "=";
  table_row.appendChild(table_data_4);

  table_data_5 = document.createElement("td");
  table_data_5.innerHTML = pop_up*i;
  table_row.appendChild(table_data_5);
}
    

// pop_up = parseInt(prompt("Enter Your Number"));
// var div = document.getElementById("contianer");
// table_tag = document.createElement("table");
// div.appendChild(table_tag);

// // table row
// // for (i =0; i>11; i++ );
// //    table_row = document.createElement("tr");
// //    table_tag.appendChild(table_row);
// //    table_row.innerHTML = pop_up;

// // for Row 1
// table_row = document.createElement("tr");
// table_tag.appendChild(table_row);

// // table-data for first row1

// table_data_1 = document.createElement("td");
// table_data_1.innerHTML = pop_up;
// table_row.appendChild(table_data_1);

// table_data_2 = document.createElement("td");
// table_data_2.innerHTML = "x";
// table_row.appendChild(table_data_2);

// table_data_3 = document.createElement("td");
// table_data_3.innerHTML = "1";
// table_row.appendChild(table_data_3);

// table_data_4 = document.createElement("td");
// table_data_4.innerHTML = "=";
// table_row.appendChild(table_data_4);

// table_data_5 = document.createElement("td");
// table_data_5.innerHTML = pop_up * 1;
// table_row.appendChild(table_data_5);

// // row 2

// table_row = document.createElement("tr");
// table_tag.appendChild(table_row);

// // table-data for first row3

// table_data_1 = document.createElement("td");
// table_data_1.innerHTML = pop_up;
// table_row.appendChild(table_data_1);

// table_data_2 = document.createElement("td");
// table_data_2.innerHTML = "x";
// table_row.appendChild(table_data_2);

// table_data_3 = document.createElement("td");
// table_data_3.innerHTML = "2";
// table_row.appendChild(table_data_3);

// table_data_4 = document.createElement("td");
// table_data_4.innerHTML = "=";
// table_row.appendChild(table_data_4);

// table_data_5 = document.createElement("td");
// table_data_5.innerHTML = pop_up * 2;
// table_row.appendChild(table_data_5);

// // row 3

// table_row = document.createElement("tr");
// table_tag.appendChild(table_row);

// // table-data for first row3

// table_data_1 = document.createElement("td");
// table_data_1.innerHTML = pop_up;
// table_row.appendChild(table_data_1);

// table_data_2 = document.createElement("td");
// table_data_2.innerHTML = "x";
// table_row.appendChild(table_data_2);

// table_data_3 = document.createElement("td");
// table_data_3.innerHTML = "3";
// table_row.appendChild(table_data_3);

// table_data_4 = document.createElement("td");
// table_data_4.innerHTML = "=";
// table_row.appendChild(table_data_4);

// table_data_5 = document.createElement("td");
// table_data_5.innerHTML = pop_up * 3;
// table_row.appendChild(table_data_5);

// // row4

// table_row = document.createElement("tr");
// table_tag.appendChild(table_row);

// // table-data for first row4

// table_data_1 = document.createElement("td");
// table_data_1.innerHTML = pop_up;
// table_row.appendChild(table_data_1);

// table_data_2 = document.createElement("td");
// table_data_2.innerHTML = "x";
// table_row.appendChild(table_data_2);

// table_data_3 = document.createElement("td");
// table_data_3.innerHTML = "4";
// table_row.appendChild(table_data_3);

// table_data_4 = document.createElement("td");
// table_data_4.innerHTML = "=";
// table_row.appendChild(table_data_4);

// table_data_5 = document.createElement("td");
// table_data_5.innerHTML = pop_up * 4;
// table_row.appendChild(table_data_5);

// // row5

// table_row = document.createElement("tr");
// table_tag.appendChild(table_row);

// // table-data for first row5

// table_data_1 = document.createElement("td");
// table_data_1.innerHTML = pop_up;
// table_row.appendChild(table_data_1);

// table_data_2 = document.createElement("td");
// table_data_2.innerHTML = "x";
// table_row.appendChild(table_data_2);

// table_data_3 = document.createElement("td");
// table_data_3.innerHTML = "5";
// table_row.appendChild(table_data_3);

// table_data_4 = document.createElement("td");
// table_data_4.innerHTML = "=";
// table_row.appendChild(table_data_4);

// table_data_5 = document.createElement("td");
// table_data_5.innerHTML = pop_up * 5;
// table_row.appendChild(table_data_5);

// // row 6

// table_row = document.createElement("tr");
// table_tag.appendChild(table_row);

// // table-data for first row6

// table_data_1 = document.createElement("td");
// table_data_1.innerHTML = pop_up;
// table_row.appendChild(table_data_1);

// table_data_2 = document.createElement("td");
// table_data_2.innerHTML = "x";
// table_row.appendChild(table_data_2);

// table_data_3 = document.createElement("td");
// table_data_3.innerHTML = "6";
// table_row.appendChild(table_data_3);

// table_data_4 = document.createElement("td");
// table_data_4.innerHTML = "=";
// table_row.appendChild(table_data_4);

// table_data_5 = document.createElement("td");
// table_data_5.innerHTML = pop_up * 6;
// table_row.appendChild(table_data_5);

// // row7

// table_row = document.createElement("tr");
// table_tag.appendChild(table_row);

// // table-data for first row7

// table_data_1 = document.createElement("td");
// table_data_1.innerHTML = pop_up;
// table_row.appendChild(table_data_1);

// table_data_2 = document.createElement("td");
// table_data_2.innerHTML = "x";
// table_row.appendChild(table_data_2);

// table_data_3 = document.createElement("td");
// table_data_3.innerHTML = "7";
// table_row.appendChild(table_data_3);

// table_data_4 = document.createElement("td");
// table_data_4.innerHTML = "=";
// table_row.appendChild(table_data_4);

// table_data_5 = document.createElement("td");
// table_data_5.innerHTML = pop_up * 7;
// table_row.appendChild(table_data_5);

// // row8

// table_row = document.createElement("tr");
// table_tag.appendChild(table_row);

// // table-data for first row8

// table_data_1 = document.createElement("td");
// table_data_1.innerHTML = pop_up;
// table_row.appendChild(table_data_1);

// table_data_2 = document.createElement("td");
// table_data_2.innerHTML = "x";
// table_row.appendChild(table_data_2);

// table_data_3 = document.createElement("td");
// table_data_3.innerHTML = "8";
// table_row.appendChild(table_data_3);

// table_data_4 = document.createElement("td");
// table_data_4.innerHTML = "=";
// table_row.appendChild(table_data_4);

// table_data_5 = document.createElement("td");
// table_data_5.innerHTML = pop_up * 8;
// table_row.appendChild(table_data_5);

// // row 9

// table_row = document.createElement("tr");
// table_tag.appendChild(table_row);

// // table-data for first row9

// table_data_1 = document.createElement("td");
// table_data_1.innerHTML = pop_up;
// table_row.appendChild(table_data_1);

// table_data_2 = document.createElement("td");
// table_data_2.innerHTML = "x";
// table_row.appendChild(table_data_2);

// table_data_3 = document.createElement("td");
// table_data_3.innerHTML = "9";
// table_row.appendChild(table_data_3);

// table_data_4 = document.createElement("td");
// table_data_4.innerHTML = "=";
// table_row.appendChild(table_data_4);

// table_data_5 = document.createElement("td");
// table_data_5.innerHTML = pop_up * 9;
// table_row.appendChild(table_data_5);

// // row10

// table_row = document.createElement("tr");
// table_tag.appendChild(table_row);

// // table-data for first row10

// table_data_1 = document.createElement("td");
// table_data_1.innerHTML = pop_up;
// table_row.appendChild(table_data_1);

// table_data_2 = document.createElement("td");
// table_data_2.innerHTML = "x";
// table_row.appendChild(table_data_2);

// table_data_3 = document.createElement("td");
// table_data_3.innerHTML = "10";
// table_row.appendChild(table_data_3);

// table_data_4 = document.createElement("td");
// table_data_4.innerHTML = "=";
// table_row.appendChild(table_data_4);

// table_data_5 = document.createElement("td");
// table_data_5.innerHTML = pop_up * 10;
// table_row.appendChild(table_data_5);
