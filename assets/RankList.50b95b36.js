import{d as e,M as l,N as a,W as r,Z as t,O as n,P as u,a as s,o as d,c as i,j as o,t as v,h as c,u as p,F as f,m,i as g,p as b,k as _}from"./vendor.a8dd9754.js";import{b as x}from"./SplitPanel.bb0b235e.js";const y=g();b("data-v-50cdcfe0");const h={class:"flex-row-center"},w={class:"flex-row-center"},z={class:"flex-row-around margin-top-1em"};_();var j=e({expose:[],props:{list:{type:Array,required:!1},title:{type:String,required:!1}},setup(g){const b=g;console.log(b.list);const _=e({props:{index:{type:Number,default:()=>0},data:{type:Object,default:()=>({})}},setup:(e,s)=>()=>{var s,d,i,o,v;return l("div",{class:["flex-row-around","margin-top-1em"]},[l(a,{value:null!=(s=e.index.toString())?s:""},{default:()=>l(r,{trigger:"hover",placement:"top"},{reference(){var a,r;return l(t,{src:null!=(r=null==(a=e.data)?void 0:a.avatar)?r:"",size:"small"})},default:()=>l(n,{column:1,size:"small",border:!0},{default(){var a,r,t,n;return[l(u,{label:"用户名"},[l("span","sadasd")]),l(u,{label:"用户名"},null!=(r=null==(a=e.data)?void 0:a.username)?r:"123"),l(u,{label:"用户名"},null!=(n=null==(t=e.data)?void 0:t.username)?n:"")]}})})}),l("span",null!=(i=null==(d=e.data)?void 0:d.username)?i:""),l("span",null!=(v=null==(o=e.data)?void 0:o.number)?v:"")])}});return(e,l)=>{const b=s("el-col");return d(),i(p(x),{style:{"border-radius":"1em"}},{header:y((()=>{var e;return[o(v(null!=(e=g.title)?e:"default"),1)]})),default:y((()=>[c("div",h,[c(b,null,{default:y((()=>{var e,l;return[c("div",w,[c(p(a),{value:1,type:"danger"},{default:y((()=>[c(p(r),{trigger:"hover",placement:"top"},{reference:y((()=>{var e,l;return[c(p(t),{src:null!=(l=null==(e=g.list)?void 0:e[0].avatar)?l:"",size:"large",fit:"cover"},null,8,["src"])]})),default:y((()=>[c(p(n),{column:1},{default:y((()=>[c(p(u),{label:"用户名"},{default:y((()=>{var e;return[o(v(null==(e=g.list)?void 0:e[0].username),1)]})),_:1}),c(p(u),{label:"正确率"},{default:y((()=>{var e;return[o(v(null==(e=g.list)?void 0:e[0].percent),1)]})),_:1})])),_:1})])),_:1})])),_:1})]),c("div",z,[c(p(a),{value:2,type:"warning"},{default:y((()=>[c(p(r),{trigger:"hover",placement:"top"},{reference:y((()=>{var e,l;return[c(p(t),{src:null!=(l=null==(e=g.list)?void 0:e[1].avatar)?l:"",size:"large",fit:"cover"},null,8,["src"])]})),default:y((()=>{var e;return[o(v(null==(e=g.list)?void 0:e[1].username),1)]})),_:1})])),_:1}),c(p(a),{value:3,type:"primary"},{default:y((()=>[c(p(r),{trigger:"hover",placement:"top"},{reference:y((()=>{var e,l;return[c(p(t),{src:null!=(l=null==(e=g.list)?void 0:e[2].avatar)?l:"",size:"large",fit:"cover"},null,8,["src"])]})),default:y((()=>{var e;return[o(v(null==(e=g.list)?void 0:e[2].username),1)]})),_:1})])),_:1})]),(d(!0),i(f,null,m(null!=(l=null==(e=g.list)?void 0:e.slice(3,10))?l:[],((e,l)=>(d(),i(p(_),{index:l+4,data:e},null,8,["index","data"])))),256))]})),_:1})])])),_:1})}}});j.__scopeId="data-v-50cdcfe0";export{j as _};