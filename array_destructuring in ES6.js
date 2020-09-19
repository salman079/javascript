let proglang = ['JS', 'Python', 'React', 'Rust', 'Docker', 'Kubernetes'];
let [lan1, lan2, lan3, lan4, lan5, lan6] = proglang;
document.write(`My 5th language is ${lan5}`);
document.write("<br>");
document.getElementById('return1').innerHTML=(`My 2nd language is ${lan2}`);
document.write(`and last one is ${lan6}`);
// for(var i=0; i<100000000000;i++){};
document.getElementById('return1').innerHTML=(`and changed from 2nd language to 1st ${lan1}`);
