import{r as l}from"./vendor.a8dd9754.js";function a(a){const n=l(a);let e=!1;const r=l=>{if(n.value.disabled=!0,!n.value.interval)return v(),e=!1,void(null==l||l());const a=setInterval((()=>{if(!n.value.interval||n.value.interval&&n.value.interval<0)return v(),e=!1,null==l||l(),void clearInterval(a);n.value.interval&&n.value.interval--}),1e3)},v=()=>{n.value=a},u=(l,a)=>{var n,e,r;return{loading:!1,type:a,name:null!=(n=l.name)?n:"loading",icon:null!=(e=l.icon)?e:"",interval:null!=(r=l.interval)?r:0}};return{data:n,reset:v,loading:l=>{var a,r,v;e||(null==(a=null==l?void 0:l.callback)||a.call(l),n.value={loading:!0,name:null!=(r=l.name)?r:"loading",interval:null!=(v=l.interval)?v:0})},warning:l=>{e||(e=!0,n.value=u(l,"warning"),r(l.callback))},error:l=>{e||(e=!0,n.value=u(l,"danger"),r(l.callback))},success:l=>{e||(e=!0,n.value=u(l,"success"),r(l.callback))}}}export{a as u};