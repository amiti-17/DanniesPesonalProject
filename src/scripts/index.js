// function generateCalendar(month, year) {
//     const daysInMonth = new Date(year, month + 1, 0).getDate();
//     const firstDayOfMonth = new Date(year, month, 1).getDay();

//     document.write('<h3>' + new Date(year, month, 1).toLocaleString('default', { month: 'long' }) + '</h3>');
//     document.write('<table>');
//     document.write('<thead><tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr></thead>');
//     document.write('<tbody>');

//     let dayCounter = 1;

//     for (let row = 0; row < 6; row++) {
//       document.write('<tr>');
//       for (let col = 0; col < 7; col++) {
//         if ((row === 0 && col < firstDayOfMonth) || dayCounter > daysInMonth) {
//           document.write('<td></td>');
//         } else {
//           document.write('<td>' + dayCounter + '</td>');
//           dayCounter++;
//         }
//       }
//       document.write('</tr>');
//     }

//     document.write('</tbody></table>');
//   }

//   for (let month = 0; month < 12; month++) {
//     generateCalendar(month, 2023);
//   }