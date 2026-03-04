const fs=require("fs"),p=require("path"),B=__dirname;
function w(n,c){fs.writeFileSync(p.join(B,n),c,"utf8");console.log("Created "+n+" ("+c.length+"b)");}
const css=[];const js=[];const html=[];
