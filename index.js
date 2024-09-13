let r=document.querySelector(".display input");
let baval="";
let d=0;

let disp=(val)=>{
  r.removeAttribute("id");
  if(d==1){
    r.value="";
    baval="";
    d=0;
  }
  if(val=="*"){
    r.value=r.value+"x";
  }
  else{
  r.value=r.value+val;}
  baval=baval+val;
}
let delonevalue=()=>{
r.value=r.value.slice(0,-1);
baval.slice(0,-1);
r.removeAttribute("id");
}
let restvalue=()=>{
  r.value="0";
d=1;

  baval="";
 /* r.removeAttribute("id");*/
}

let res=()=>{
  if(baval[0]=="." || baval[0]=="/"|| baval[0]=="*" || baval[0]=="+"){
    d=1;
    r.setAttribute("id","spclass");
    return r.value="error";
    
  }
  if(baval[baval.length-1]=="+"||baval[baval.length-1]=="-"||baval[baval.length-1]=="*"||baval[baval.length-1]=="/"||baval[baval.length-1]=="."){
    d=1;

    r.setAttribute("id","spclass");
    return r.value="error";
    

    
  }
  let rs=eval(baval);
  if((rs-Math.floor(rs))!==0){
    rs = Math.floor(rs* 1000) / 1000;
  }
  r.value=rs;
  r.setAttribute("id","spclass")

}
