import React from 'react';

const arr = [];

// this can block the main thread!
for (let i = 0; i < 1e4; i++) {
  arr.push(1);
}

export default () => (
  <table>
    <tbody>
      {arr.map(() => {
        <tr><td>row</td></tr>
      })}
    </tbody>
  </table>
);