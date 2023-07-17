import{p as ne,aG as se,aH as Ve,aI as xe,g as re,D as ue,aJ as ie,aK as be,o as G,u as de,aL as ce,aM as L,aN as ee,c as t,H as q,aO as ye,aP as he,x as i,s as ke,I as we,A as Ce,z as E,B as Pe,aQ as Fe,aR as Se,a6 as j,U as ae,aS as Be,aT as Ie,aU as Ue,aV as Me,aE as Y,aW as Ae,v as Re,y as De,Y as Te,ae as J,a0 as te,a1 as le,a2 as _e,a4 as u,aX as Ne,aq as He,K,ab as O,as as Q,aY as ze,V as Ee,a3 as $e,a5 as Ge,a8 as s,ar as qe,al as Ke,ag as Oe,af as je,ai as Le,aZ as Xe,ak as Ye,ad as Je,aj as Qe,X as We}from"./index-b6418769.js";import{c as Ze,a as W,e as ea,f as aa,u as ta,d as $,V as la}from"./index.esm-af02d6e3.js";import{V as oa}from"./VContainer-e04266d6.js";import{a as na,V as oe}from"./VRow-155039a7.js";import"./_commonjsHelpers-39b5b250.js";const sa=ne({...se(),...Ve(xe(),["inline"])},"VCheckbox"),ra=re()({name:"VCheckbox",inheritAttrs:!1,props:sa(),emits:{"update:modelValue":e=>!0,"update:focused":e=>!0},setup(e,I){let{attrs:k,slots:b}=I;const r=ue(e,"modelValue"),{isFocused:d,focus:w,blur:U}=ie(e),R=be(),P=G(()=>e.id||`checkbox-${R}`);return de(()=>{const[D,y]=ce(k),[T,f]=L.filterProps(e),[g,M]=ee.filterProps(e);return t(L,q({class:["v-checkbox",e.class]},D,T,{modelValue:r.value,"onUpdate:modelValue":F=>r.value=F,id:P.value,focused:d.value,style:e.style}),{...b,default:F=>{let{id:S,messagesId:_,isDisabled:N,isReadonly:A}=F;return t(ee,q(g,{id:S.value,"aria-describedby":_.value,disabled:N.value,readonly:A.value},y,{modelValue:r.value,"onUpdate:modelValue":H=>r.value=H,onFocus:w,onBlur:U}),b)}})}),{}}});const ua=ne({autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,...se(),...ye()},"VTextarea"),ia=re()({name:"VTextarea",directives:{Intersect:he},inheritAttrs:!1,props:ua(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,I){let{attrs:k,emit:b,slots:r}=I;const d=ue(e,"modelValue"),{isFocused:w,focus:U,blur:R}=ie(e),P=G(()=>typeof e.counterValue=="function"?e.counterValue(d.value):(d.value||"").toString().length),D=G(()=>{if(k.maxlength)return k.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function y(o,v){var c,x;!e.autofocus||!o||(x=(c=v[0].target)==null?void 0:c.focus)==null||x.call(c)}const T=i(),f=i(),g=ke(""),M=i(),F=G(()=>e.persistentPlaceholder||w.value||e.active);function S(){var o;M.value!==document.activeElement&&((o=M.value)==null||o.focus()),w.value||U()}function _(o){S(),b("click:control",o)}function N(o){b("mousedown:control",o)}function A(o){o.stopPropagation(),S(),Y(()=>{d.value="",Ae(e["onClick:clear"],o)})}function H(o){var c;const v=o.target;if(d.value=v.value,(c=e.modelModifiers)!=null&&c.trim){const x=[v.selectionStart,v.selectionEnd];Y(()=>{v.selectionStart=x[0],v.selectionEnd=x[1]})}}const p=i(),C=i(+e.rows),B=G(()=>["plain","underlined"].includes(e.variant));we(()=>{e.autoGrow||(C.value=+e.rows)});function V(){e.autoGrow&&Y(()=>{if(!p.value||!f.value)return;const o=getComputedStyle(p.value),v=getComputedStyle(f.value.$el),c=parseFloat(o.getPropertyValue("--v-field-padding-top"))+parseFloat(o.getPropertyValue("--v-input-padding-top"))+parseFloat(o.getPropertyValue("--v-field-padding-bottom")),x=p.value.scrollHeight,n=parseFloat(o.lineHeight),a=Math.max(parseFloat(e.rows)*n+c,parseFloat(v.getPropertyValue("--v-input-control-height"))),z=parseFloat(e.maxRows)*n+c||1/0,h=De(x??0,a,z);C.value=Math.floor((h-c)/n),g.value=Re(h)})}Ce(V),E(d,V),E(()=>e.rows,V),E(()=>e.maxRows,V),E(()=>e.density,V);let m;return E(p,o=>{o?(m=new ResizeObserver(V),m.observe(p.value)):m==null||m.disconnect()}),Pe(()=>{m==null||m.disconnect()}),de(()=>{const o=!!(r.counter||e.counter||e.counterValue),v=!!(o||r.details),[c,x]=ce(k),[{modelValue:n,...a}]=L.filterProps(e),[z]=Fe(e);return t(L,q({ref:T,modelValue:d.value,"onUpdate:modelValue":h=>d.value=h,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-text-field--plain-underlined":B.value},e.class],style:e.style},c,a,{centerAffix:C.value===1&&!B.value,focused:w.value}),{...r,default:h=>{let{isDisabled:l,isDirty:X,isReadonly:ve,isValid:me}=h;return t(Se,q({ref:f,style:{"--v-textarea-control-height":g.value},onClick:_,onMousedown:N,"onClick:clear":A,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:"textbox"},z,{active:F.value||X.value,centerAffix:C.value===1&&!B.value,dirty:X.value||e.dirty,disabled:l.value,focused:w.value,error:me.value===!1}),{...r,default:fe=>{let{props:{class:Z,...ge}}=fe;return t(j,null,[e.prefix&&t("span",{class:"v-text-field__prefix"},[e.prefix]),ae(t("textarea",q({ref:M,class:Z,value:d.value,onInput:H,autofocus:e.autofocus,readonly:ve.value,disabled:l.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:S,onBlur:R},ge,x),null),[[Be("intersect"),{handler:y},null,{once:!0}]]),e.autoGrow&&ae(t("textarea",{class:[Z,"v-textarea__sizer"],"onUpdate:modelValue":pe=>d.value=pe,ref:p,readonly:!0,"aria-hidden":"true"},null),[[Ie,d.value]]),e.suffix&&t("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:v?h=>{var l;return t(j,null,[(l=r.details)==null?void 0:l.call(r,h),o&&t(j,null,[t("span",null,null),t(Ue,{active:e.persistentCounter||w.value,value:P.value,max:D.value},r.counter)])])}:void 0})}),Me({},T,f,M)}}),da=Qe("h1",{class:"text-center"},"商品管理",-1),pa={__name:"ProductsView",setup(e){const I=Te(),k=i(5),b=i([{key:"name",order:"asc"}]),r=i(1),d=i([]),w=[{title:"圖片",align:"center",sortable:!1,key:"image"},{title:"名稱",align:"center",sortable:!0,key:"name"},{title:"價格",align:"center",sortable:!0,key:"price"},{title:"說明",align:"center",sortable:!1,key:"description"},{title:"分類",align:"center",sortable:!0,key:"category"},{title:"上架",align:"center",sortable:!0,key:"sell"},{title:"編輯",align:"center",sortable:!1,key:"edit"}],U=i(!1),R=i(0),P=i(""),D=()=>{r.value=1,y()},y=async()=>{U.value=!0;try{const{data:n}=await J.get("/products/all",{params:{page:r.value,itemsPerPage:k.value,sortBy:b.value[0].key,sortOrder:b.value[0].order,search:P.value}});d.value.splice(0,d.value.length,...n.result.data),R.value=n.result.count}catch(n){I({text:n.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}U.value=!1};y();const T=n=>{g.value=n._id,p.value.value=n.name,C.value.value=n.price,B.value.value=n.description,V.value.value=n.category,m.value.value=n.sell,f.value=!0},f=i(!1),g=i(""),M=()=>{g.value="",f.value=!0},F=()=>{f.value=!1,H(),c.value.deleteFileRecord()},S=["衣服","食品","3C","遊戲"],_=Ze({name:W().required("缺少名稱"),price:ea().typeError("缺少價格").required("缺少價格").min(0,"價格錯誤"),description:W().required("缺少說明"),category:W().required("缺少分類").test("isCategory",n=>S.includes(n)),sell:aa()}),{handleSubmit:N,isSubmitting:A,resetForm:H}=ta({validationSchema:_,initialValues:{name:"",price:0,description:"",category:"",sell:!1}}),p=$("name"),C=$("price"),B=$("description"),V=$("category"),m=$("sell"),o=i([]),v=i([]),c=i(null),x=N(async n=>{if(!(g.value.length===0&&o.value.length===0))try{const a=new FormData;a.append("name",n.name),a.append("price",n.price),a.append("description",n.description),a.append("category",n.category),a.append("sell",n.sell),o.value.length>0&&a.append("image",o.value[0].file),g.value.length>0?await J.patch("/products/"+g.value,a):await J.post("/products",a),I({text:"新增成功",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"bottom"}}),F(),y()}catch(a){console.log(a),I({text:a.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}});return(n,a)=>{const z=te("VDataTableServer"),h=te("VueFileAgent");return le(),_e(j,null,[t(oa,null,{default:u(()=>[t(na,null,{default:u(()=>[t(oe,{cols:"12"},{default:u(()=>[da]),_:1}),t(He),t(oe,{cols:"12"},{default:u(()=>[t(K,{color:"green",onClick:M},{default:u(()=>[O("新增商品")]),_:1}),t(z,{"items-per-page":k.value,"onUpdate:itemsPerPage":[a[1]||(a[1]=l=>k.value=l),y],"sort-by":b.value,"onUpdate:sortBy":[a[2]||(a[2]=l=>b.value=l),y],page:r.value,"onUpdate:page":[a[3]||(a[3]=l=>r.value=l),y],items:d.value,headers:w,loading:U.value,"items-length":R.value,hover:"",search:P.value},{top:u(()=>[t(Q,{label:"搜尋","append-icon":"mdi-magnify","onClick:append":D,onKeydown:ze(D,["enter"]),modelValue:P.value,"onUpdate:modelValue":a[0]||(a[0]=l=>P.value=l)},null,8,["onKeydown","modelValue"])]),["item.image"]:u(({item:l})=>[t(Ee,{src:l.raw.image,height:"50px"},null,8,["src"])]),["item.sell"]:u(({item:l})=>[l.raw.sell?(le(),$e(We,{key:0,icon:"mdi-check"})):Ge("",!0)]),["item.edit"]:u(({item:l})=>[t(K,{icon:"mdi-pencil",onClick:X=>T(l.raw),variant:"text"},null,8,["onClick"])]),_:2},1032,["items-per-page","sort-by","page","items","loading","items-length","search"])]),_:1})]),_:1})]),_:1}),t(Ne,{persistent:"",scrollable:"",width:"500",modelValue:f.value,"onUpdate:modelValue":a[11]||(a[11]=l=>f.value=l)},{default:u(()=>[t(la,{disabled:s(A),onSubmit:qe(s(x),["prevent"])},{default:u(()=>[t(Ke,null,{default:u(()=>[t(Oe,null,{default:u(()=>[O(je(g.value.length>0?"編輯商品":"新增商品"),1)]),_:1}),t(Le,{style:{height:"75vh"}},{default:u(()=>[t(Q,{label:"名稱",modelValue:s(p).value.value,"onUpdate:modelValue":a[4]||(a[4]=l=>s(p).value.value=l),"error-messages":s(p).errorMessage.value},null,8,["modelValue","error-messages"]),t(Q,{label:"價格",modelValue:s(C).value.value,"onUpdate:modelValue":a[5]||(a[5]=l=>s(C).value.value=l),modelModifiers:{number:!0},"error-messages":s(C).errorMessage.value,min:"0"},null,8,["modelValue","error-messages"]),t(ia,{label:"說明",modelValue:s(B).value.value,"onUpdate:modelValue":a[6]||(a[6]=l=>s(B).value.value=l),"error-messages":s(B).errorMessage.value},null,8,["modelValue","error-messages"]),t(Xe,{label:"分類",modelValue:s(V).value.value,"onUpdate:modelValue":a[7]||(a[7]=l=>s(V).value.value=l),"error-messages":s(V).errorMessage.value,items:S},null,8,["modelValue","error-messages"]),t(ra,{label:"上架",modelValue:s(m).value.value,"onUpdate:modelValue":a[8]||(a[8]=l=>s(m).value.value=l),"error-messages":s(m).errorMessage.value},null,8,["modelValue","error-messages"]),t(h,{modelValue:o.value,"onUpdate:modelValue":a[9]||(a[9]=l=>o.value=l),"raw-model-value":v.value,"onUpdate:rawModelValue":a[10]||(a[10]=l=>v.value=l),"max-files":1,"max-size":"1MB",accept:"image/jpg, image/jpeg, image/png, image/gif",multiple:!1,"error-text":{type:"檔案格式錯誤",size:"檔案太大"},"help-text":"選擇檔案或拖放到這裡",deletable:"true",ref_key:"fileAgent",ref:c},null,8,["modelValue","raw-model-value"])]),_:1}),t(Ye,null,{default:u(()=>[t(Je),t(K,{color:"red",onClick:F,loading:s(A)},{default:u(()=>[O("取消")]),_:1},8,["loading"]),t(K,{color:"green",type:"submit",loading:s(A)},{default:u(()=>[O("送出")]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1},8,["disabled","onSubmit"])]),_:1},8,["modelValue"])],64)}}};export{pa as default};