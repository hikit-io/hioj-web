import{d as e,a,o as t,c as l,F as s,m as i,h as r,t as n,j as u,i as o,p as c,k as d,r as p,H as v,u as m}from"./vendor.a8dd9754.js";import{p as g,_ as h}from"./layout.d02740b5.js";const f=o();c("data-v-631f1b08");const w={class:"t-h-scale-0_5s"},b={class:"flex-row-start"},x={class:"flex-row-start flex-wrap-wrap"},z={class:"flex-row-start"},_={class:"font-size-1_5em"},y=u("进行中"),C={class:"flex-row-start"},k={class:"p_line_hidden margin-right-1em",style:{"text-align":"start"}},L={class:"flex-col-center"},T={style:{"white-space":"nowrap"}},j={class:"flex-row-between flex-wrap-wrap width-100per"},V={class:"main-comment-font",style:{"white-space":"nowrap"}},q={class:"main-comment-font",style:{"white-space":"nowrap"}};d();var I=e({expose:[],props:{data:{type:Array,required:!1}},setup:e=>(o,c)=>{const d=a("router-link"),p=a("el-tag"),v=a("el-button"),m=a("el-card"),g=a("el-space");return t(),l(g,{direction:"vertical"},{default:f((()=>[(t(!0),l(s,null,i(e.data,((e,a)=>(t(),l("div",w,[r(m,{class:"box-card border-all-radius-1em"},{default:f((()=>[r("div",b,[r("img",{class:"hidden-xs-only",src:e.avatar,alt:"contest picture",style:{"margin-right":"10px",height:"110px",width:"200px","border-radius":"10px"}},null,8,["src"]),r("div",x,[r("div",z,[r(d,{to:{path:"/competition/detail",query:{id:e.id}}},{default:f((()=>[r("span",_,n(e.title),1)])),_:2},1032,["to"]),r(p,{type:"danger",style:{"margin-top":"auto","margin-bottom":"auto"},size:"small"},{default:f((()=>[y])),_:1})]),r("div",C,[r("p",k,n(e.description),1),r("div",L,[r("span",T,"已报名:"+n(e.numberPeople)+"人",1),r(v,{style:{"white-space":"nowrap"},size:"small",plain:"",type:"primary",disabled:1===e.finish},{default:f((()=>[u(n(e.finish?"报名截止":"立即报名"),1)])),_:2},1032,["disabled"])])]),r("div",j,[r("span",V,"竞赛时间："+n(e.startTime),1),r("span",q,"竞赛时间："+n(e.startTime),1)])])])])),_:2},1024)])))),256))])),_:1})}});function P(){const e=p([]);return{list:e,getList:(a,t)=>{const l=[];for(let e=0;e<a;e++)l.push({id:0,title:"Nekilc的比赛",href:"content",description:"这个比赛呢，啥也没有，就是测试字符串长度足够长的时候，会不会隐藏文字，啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦",startTime:"2020-02-02",endTime:"2020-02-02",numberPeople:t,avatar:"https://www.baidu.com/img/flexible/logo/pc/result.png",finish:0});return e.value=l,l}}}I.__scopeId="data-v-631f1b08";const S=o();var A=e({expose:[],setup(e){const s=P(),i=P(),n=P(),u=P(),o=p({cur:1,size:10,sizeChange:e=>{d()},currentChange:e=>{o.cur.value=e,d()}}),c=p(""),d=()=>{switch(c.value){case"all":s.getList(o.size.value,o.cur.value);break;case"will":i.getList(o.size.value,o.cur.value);break;case"running":n.getList(o.size.value,o.cur.value);break;case"finish":u.getList(o.size.value,o.cur.value)}},f=e=>{o.cur.value=1,o.size.value=10,d()};return v((()=>{c.value="all",s.getList(o.value.size,o.value.size)})),(e,d)=>{const p=a("el-tab-pane"),v=a("el-tabs"),w=a("el-pagination");return t(),l(h,{layout:m(g)},{default:S((()=>[r(v,{modelValue:c.value,"onUpdate:modelValue":d[1]||(d[1]=e=>c.value=e),stretch:!0,onTabClick:f},{default:S((()=>[r(p,{label:"全部",name:"all"},{default:S((()=>[r(I,{class:"width-90per",data:m(s).list.value},null,8,["data"])])),_:1}),r(p,{label:"即将发布",name:"will"},{default:S((()=>[r(I,{class:"width-90per",data:m(i).list.value},null,8,["data"])])),_:1}),r(p,{label:"进行中",name:"running"},{default:S((()=>[r(I,{class:"width-90per",data:m(n).list.value},null,8,["data"])])),_:1}),r(p,{label:"往期比赛",name:"finish"},{default:S((()=>[r(I,{class:"width-90per",data:m(u).list.value},null,8,["data"])])),_:1})])),_:1},8,["modelValue"]),r(w,{"current-page":o.value.cur,onSizeChange:o.value.sizeChange,onCurrentChange:o.value.currentChange,"page-size":o.value.size,"page-sizes":[10,20,30,50],layout:"total, prev, pager, next, jumper,sizes"},null,8,["current-page","onSizeChange","onCurrentChange","page-size"])])),_:1},8,["layout"])}}});A.__scopeId="data-v-a9ce18e4";export default A;
