function process(data) {
  data.sort();
  let mx = Math.max(...data);
  let mn = Math.min(...data);
  let num_line = "";
  let ws = {};
  for (let i = mn; i <= mx; i++) {
    ws[i] = num_line.length;
    num_line += i.toString() + " ";
  }
  
  num_line = num_line.trim();
  for (let i = mx; i >= mn; i--) {
    let line = "";
    if (i === 0) continue;
    if (i < 0) console.log(num_line);
   
    for (const j of data) {
      if (j === 0) {
        continue;
      }

      if (i <= j && i > 0) {
        let space = ws[j] - line.length;
       
        line += " ".repeat(space) + "*";
      } else if (i < 0 && i >= j) {
        let space = ws[j] - line.length;
       
        line += " ".repeat(space) + "*";
      }
    }
    console.log(line);
  }
}

process([-1, 0, 4, 5, 3, 2]);