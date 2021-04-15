let inputArr = [-1, 0, 4, 5, -3, 2]

function process(data) {
  data.sort((a, b) => a - b);

  let max = Math.max(...data);
  let min = Math.min(...data);
  let num_line = "";
  let ws = {};
  for (let i = min; i <= max; i++) {
    ws[i] = num_line.length;
    num_line += i.toString() + " ";
  }
  // console.log(ws)
  num_line = num_line.trim();
  min = min > 0 ? 0 : min;

  if (max < 0) console.log(num_line);
  for (let i = max; i >= min; i--) {
    let line = "";
    if (i === 0) {
      console.log(num_line);
      continue;
    }
    for (const j of data) {
      if (j === 0) {
        continue;
      }
      if (i <= j && i > 0) {
        let space = ws[j] - line.length;
        line += " ".repeat(space) + "*";
      } 
      else if (i < 0 && i >= j) {
        let space = ws[j] - line.length;
        line += " ".repeat(space) + "*";
      }
    }
    console.log(line);
  }
}

process(inputArr);
