(this.webpackJsonpbudalangi=this.webpackJsonpbudalangi||[]).push([[0],{38:function(e,t,i){},40:function(e,t,i){},41:function(e,t,i){},52:function(e,t,i){},60:function(e,t,i){},61:function(e,t,i){},62:function(e,t,i){},63:function(e,t,i){},64:function(e,t,i){},65:function(e,t,i){},66:function(e,t,i){},67:function(e,t,i){},68:function(e,t,i){},69:function(e,t,i){},70:function(e,t,i){"use strict";i.r(t);var a=i(1),s=i.n(a),n=i(29),c=i.n(n),o=(i(38),function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,72)).then((function(t){var i=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,c=t.getTTFB;i(e),a(e),s(e),n(e),c(e)}))}),r=i(8),l=i.n(r),u=i(16),d=i(14),m=i(17),j=i(18),b=i(20),h=i(19),p=(i(40),i(41),i(9)),v=i(0),x=function(e){Object(b.a)(i,e);var t=Object(h.a)(i);function i(){return Object(m.a)(this,i),t.apply(this,arguments)}return Object(j.a)(i,[{key:"render",value:function(){return Object(v.jsxs)(p.motion.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:1,easing:"ease-in-out"},exit:{opacity:0},className:"splash",children:[Object(v.jsx)("div",{className:"logo",children:"Logo Area"}),Object(v.jsxs)("div",{className:"scroll-effect",children:[Object(v.jsx)("div",{className:"line"}),Object(v.jsx)("div",{className:"left-tint"}),Object(v.jsx)("div",{className:"right-tint"}),Object(v.jsxs)("div",{className:"balls",children:[Object(v.jsx)("div",{className:"ball"}),Object(v.jsx)("div",{className:"ball"}),Object(v.jsx)("div",{className:"ball"}),Object(v.jsx)("div",{className:"ball"})]})]})]})}}]),i}(a.Component),f=(i(52),i(2)),O=i(7),g="http://localhost:2000",y={appName:"budalang'i adage",phrase:"All about Budalangi",backendUrl:g,jsonGet:function(e,t){return fetch("".concat(g).concat(e),{method:"GET",headers:{bunyala_token:t,"Content-Type":"application/json"}})}},N=i(13),k=function(e){Object(b.a)(i,e);var t=Object(h.a)(i);function i(){var e;return Object(m.a)(this,i),(e=t.call(this)).Links=[{name:"Home",icon:O.g,desc:"",to:"/"},{name:"History",icon:O.e,desc:"",to:"/history"},{name:"Leadership & Politics",icon:O.n,desc:"",to:"/leadership"},{name:"Education",icon:O.f,desc:"",to:"/education"},{name:"Travel",icon:O.k,desc:"",to:"/travel"},{name:"Social",icon:O.c,desc:"",to:"/social"}],e.state={},e}return Object(j.a)(i,[{key:"componentDidMount",value:function(){this.props.setRoutes(this.Links)}},{key:"render",value:function(){var e=this,t=this.Links;return Object(v.jsxs)("div",{className:"navbar",children:[Object(v.jsxs)("div",{className:"menu",children:[Object(v.jsx)("div",{className:"close",onClick:this.props.closeMe,children:Object(v.jsx)(f.a,{icon:O.m})}),Object(v.jsxs)("div",{className:"content",children:[Object(v.jsx)("div",{className:"title",children:y.appName}),Object(v.jsx)("div",{className:"menuitems",children:t.map((function(t){return Object(v.jsxs)(N.b,{exact:!0,to:t.to,activeClassName:"activenav",className:"navitem",onClick:e.props.closeMe,children:[Object(v.jsx)("div",{className:"navtitle",children:t.name}),Object(v.jsx)(f.a,{size:"10x",icon:t.icon})]})}))})]})]}),Object(v.jsx)("div",{className:"slider"}),Object(v.jsx)("div",{className:"footer",children:Object(v.jsxs)("span",{style:{textTransform:"capitalize"},children:["\xa9 ",(new Date).getFullYear(),"\xa0",y.appName]})})]})}}]),i}(a.Component),q=i(4),S=i(5),w=i(6);i(60);var I=function(e){var t=e.setBg,i=Object(a.useState)(0),s=Object(w.a)(i,2),n=s[0],c=s[1];Object(a.useEffect)((function(){!function(e){if("video"===o[e].type){var i,a=document.querySelectorAll("video.carousel-video"),s=Object(u.a)(a);try{for(s.s();!(i=s.n()).done;){var c=i.value;c.pause(),c.currentTime=0}}catch(l){s.e(l)}finally{s.f()}document.querySelector("video#c-video".concat(n)).play()}var r=o[e].media;t(r),setTimeout((function(){document.querySelectorAll(".carousel-selector").forEach((function(e){return e.classList.remove("current")})),document.querySelector("#carousel-selector-".concat(e)).classList.add("current")}),100),setTimeout((function(){q.a.fromTo("#carousel-item-".concat(n," .carousel-title"),2,{x:0,opacity:1},{x:"100%",opacity:0}),q.a.fromTo("#carousel-item-".concat(n," .carousel-details"),1,{opacity:1,y:0},{opacity:0,y:"100%"}),q.a.fromTo("#carousel-item-".concat(n," .carousel-more"),1,{opacity:1},{opacity:0},"-=5")}),1e3*o[e].duration),document.querySelectorAll(".carousel-item").forEach((function(e){return e.style.opacity=0})),document.querySelector("#carousel-item-".concat(e)).style.opacity=1}(n),q.a.fromTo("#carousel-item-".concat(n," .carousel-title"),2,{x:"-100%",opacity:0},{x:0,opacity:1}),q.a.fromTo("#carousel-item-".concat(n," .carousel-details"),1,{opacity:0,y:"100%"},{opacity:1,y:"0"},"+=0.3"),q.a.fromTo("#carousel-item-".concat(n," .carousel-more"),.5,{opacity:0},{opacity:1},"+=0.2");var e=setInterval((function(){return r()}),1e3*o[n].duration);return function(){return clearInterval(e)}}),[n]);var o=[{title:"Our Education",description:"This is a short description of our education item. It should appear on carousel.",media:"/images/africastudents.jpg",type:"image",duration:"14"},{title:"Wonderful Island",description:"This is a short description of wonderful island item. It should appear on carousel.",media:"/videos/island.mp4",type:"video",duration:"14"},{title:"Gallery",description:"This is a short description of this carousel item. It should appear on carousel.",media:"/images/nicepic.jpg",type:"image",duration:"14"},{title:"Environment",description:"This is a short description of environment item. It should appear on carousel.",media:"/videos/sunsetocean.mp4",type:"video",duration:"30"}];function r(){c(n===o.length-1?0:n+1)}return Object(v.jsxs)("div",{className:"carousel",children:[o.map((function(e,t){var i=e.title,a=e.media,s=e.description,l=e.type;return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{id:"carousel-item-".concat(t),className:"carousel-item",style:{backgroundImage:"url(".concat(a,")"),backgroundSize:"cover",backgroundPosition:"center",backgroundAttachment:"fixed"},children:["video"===l?Object(v.jsx)("video",{className:"carousel-video",id:"c-video".concat(t),style:{width:"100vw",height:"100vh",objectFit:"cover",objectPosition:"center"},loop:!0,muted:!0,src:a}):Object(v.jsx)(v.Fragment,{}),Object(v.jsxs)("div",{className:"carousel-tint",children:[Object(v.jsxs)("div",{className:"carousel-mn",children:[Object(v.jsx)("div",{className:"carousel-title",children:i}),Object(v.jsx)("div",{className:"carousel-details",children:s}),Object(v.jsxs)("div",{className:"carousel-more",children:[Object(v.jsx)("span",{children:"Read More"}),Object(v.jsx)(f.a,{icon:O.b})]})]}),Object(v.jsxs)("div",{className:"carousel-manual-nav",children:[Object(v.jsx)(f.a,{className:"mnn",style:{zIndex:9},onClick:function(){c(0===n?o.length-1:n-1)},icon:O.a,size:"3x"}),Object(v.jsx)(f.a,{className:"mnn",style:{zIndex:9},onClick:function(){return r()},icon:O.b,size:"3x"})]})]})]})})})),Object(v.jsx)("div",{className:"carousel-selectors",children:o.map((function(e,t){e.title;return Object(v.jsx)("div",{onClick:function(){c(t)},className:"carousel-selector",id:"carousel-selector-".concat(t)})}))})]})};i(61);function C(){return Object(v.jsxs)("div",{className:"in-content",children:[Object(v.jsxs)("div",{className:"title",children:["Budalang'i Constituency",Object(v.jsx)(f.a,{icon:O.h,style:{fontSize:10,marginLeft:5,transform:"translateY(-150%)"}})]}),Object(v.jsxs)("div",{className:"details",children:[Object(v.jsxs)("p",{children:["Located in the southern part of Busia County, Western Region of Kenya, comes a beautiful land with beautiful and jovial beings,"," ",Object(v.jsx)("span",{children:"Budalang'i Constituency (Budalang'i)"})," the current BUnyala Sub-County."]}),Object(v.jsxs)("p",{children:["It was established for the 1997 elections and it currently comprises of six locations with an approximate population of above 85,600.",Object(v.jsxs)("ul",{children:[Object(v.jsx)("li",{children:"Bunyala West"}),Object(v.jsx)("li",{children:"Bunyala East"}),Object(v.jsx)("li",{children:"Bunyala West"}),Object(v.jsx)("li",{children:"Bunyala North"}),Object(v.jsx)("li",{children:"Bunyala Central"}),Object(v.jsx)("li",{children:"Khajula"})]})]}),Object(v.jsx)("p",{children:"The Constituency borders Siaya County to the west and Samia sub-county to the North."})]})]})}function L(){return Object(v.jsxs)("div",{className:"in-content",children:[Object(v.jsxs)("div",{className:"title",children:["The Beauty of Budalang'i",Object(v.jsx)(f.a,{icon:O.l,style:{fontSize:10,marginLeft:5,transform:"translateY(-150%)"}})]}),Object(v.jsxs)("div",{className:"details",children:[Object(v.jsx)("p",{children:"Despite its small area in coverage, its population is rapidly growing and not forgetting the vast development that has been experience in the past few years. This is with inclination to the growth in tourism sector."}),Object(v.jsxs)("p",{children:["The land is all blessed with water everywhere. Talk of",Object(v.jsxs)("ul",{children:[Object(v.jsx)("li",{children:"Lake Victoria"}),Object(v.jsx)("li",{children:"Rivers"})]}),"The beauty of Budalang'i"]})]})]})}function T(){return Object(v.jsxs)("div",{className:"in-content",children:[Object(v.jsxs)("div",{className:"title",children:["Talk of Budalang'i to anyone...",Object(v.jsx)(f.a,{style:{fontSize:10,marginLeft:5,transform:"translateY(-150%)"}})]}),Object(v.jsxs)("div",{className:"details",children:[Object(v.jsx)("p",{children:"What pops in everyones' mind is"}),Object(v.jsx)("p",{children:"Yeah definitely, I agree, we can't talk of Budalang'i without mentioning floods."}),Object(v.jsx)("p",{children:"It has been a menace for a while now, which is said to be due to the backflow of waters from Lake Victoria."})]})]})}function E(){return Object(v.jsxs)("div",{className:"in-content",children:[Object(v.jsx)("p",{children:"Despite all this, the beauty of Budalang'i is so stunning. The history of this beautiful land is captivating. The politics in this area is so interesting to the inhabitants."}),Object(v.jsx)("p",{children:"Not forgetting of the myths behind the intelligence and good brains of people hailing from this area..."}),Object(v.jsx)("button",{className:"explore-button",children:"Read More"})]})}var F=function(e){var t=e.bg;return Object(v.jsx)("div",{className:"inspiration",style:{backgroundImage:"url(".concat(t,")"),boxShadow:"inset 0 0 100px black"},children:Object(v.jsx)("div",{className:"tint",children:Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("div",{className:"mrr",style:{minWidth:"30vw"}}),Object(v.jsx)(C,{}),Object(v.jsx)(L,{}),Object(v.jsx)(T,{}),Object(v.jsx)(E,{})]})})})};i(62);var z=function(){var e=Object(a.useState)([{name:"Mzungu Fulani",title:"Researcher - University of Columbia",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. \n            Consequuntur ducimus quam tempora commodi illum soluta pariatur at expedita minima dignissimos? \n            Quidem nostrum harum dolores quis quasi itaque id quos enim.",image:"images/contributors/mzungu.jpg"},{name:"Job Obiri",title:"Software Developer - Obisoft",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. \n        Consequuntur ducimus quam tempora commodi illum soluta pariatur at expedita minima dignissimos? \n        Quidem nostrum harum dolores quis quasi itaque id quos enim.",image:"images/contributors/job.jpg"},{name:"Sharon Isabella",title:"Student - Kisii University",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. \n        Consequuntur ducimus quam tempora commodi illum soluta pariatur at expedita minima dignissimos? \n        Quidem nostrum harum dolores quis quasi itaque id quos enim.",image:"images/contributors/mama.jpg"}]),t=Object(w.a)(e,2),i=t[0],s=(t[1],Object(a.useState)(null)),n=Object(w.a)(s,2),c=n[0],o=n[1];function r(e){document.querySelectorAll(".cont-sel").forEach((function(e){return e.classList.remove("cont-s")}));var t=i[e];o(t)}return Object(a.useEffect)((function(){r(0)}),[]),Object(v.jsxs)("div",{className:"contributors",children:[c?Object(v.jsxs)("div",{className:"contributor",children:[Object(v.jsx)("img",{className:"cont-img",alt:"curimg",src:c.image}),Object(v.jsx)(f.a,{icon:O.i,className:"cont-quote"}),Object(v.jsx)("div",{className:"cont-content",children:c.content}),Object(v.jsx)(f.a,{icon:O.j,className:"cont-quote"}),Object(v.jsx)("div",{className:"cont-name",children:c.name}),Object(v.jsx)("div",{className:"cont-title",children:c.title}),Object(v.jsx)("div",{className:"cont-sels",children:i.map((function(e,t){return Object(v.jsx)("div",{className:"cont-sel",onClick:function(){return r(t)}})}))})]}):Object(v.jsx)(v.Fragment,{}),Object(v.jsx)("div",{className:"heading",children:"Elders' View"})]})};var B=function(){var e=Object(a.useState)(""),t=Object(w.a)(e,2),i=t[0],s=t[1];return Object(v.jsxs)(p.motion.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1,delay:0,easing:"ease-in-out"},children:[Object(v.jsx)(I,{setBg:function(e){return s(e)}}),Object(v.jsx)(F,{bg:i}),Object(v.jsx)(z,{})]})};i(63);var A=function(e){var t=e.routes;return Object(v.jsxs)("div",{className:"footer",children:[Object(v.jsxs)("div",{className:"footer-title",children:[Object(v.jsx)("div",{className:"tit",children:y.appName}),Object(v.jsxs)("div",{className:"phr",children:["\xa9 2021 | ",y.phrase]})]}),Object(v.jsx)("div",{className:"footer-links",children:Object(v.jsx)("ul",{children:t.map((function(e){return Object(v.jsx)(N.b,{class:"footer-link",exact:!0,to:"".concat(e.to),children:Object(v.jsxs)("li",{style:{listStyle:"none"},children:[Object(v.jsx)(f.a,{icon:e.icon})," ",e.name]})})}))})}),Object(v.jsx)("div",{className:"footer-social",children:y.appName})]})},P=(i(64),i(10));var M=function(){var e=Object(a.useState)(null),t=Object(w.a)(e,2),i=t[0],s=t[1];function n(){y.jsonGet("/destinations/random","").then(function(){var e=Object(d.a)(l.a.mark((function e(t){var i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.ok){e.next=6;break}return e.next=3,t.json();case 3:i=e.sent,console.log(i),s(i);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}return Object(a.useEffect)((function(){n()}),[]),Object(v.jsx)("div",{className:"travel",style:{backgroundImage:"url(images/nicepic.jpg)"},children:Object(v.jsx)("div",{className:"tint",children:Object(v.jsx)("div",{className:"tint2",children:i?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("div",{className:"destination",children:[Object(v.jsx)("div",{className:"d-title",children:i?i.name:""}),Object(v.jsx)("div",{className:"d-description",children:i?i.description:""}),Object(v.jsxs)("form",{className:"d-filter",children:[Object(v.jsx)("input",{type:"search",placeholder:"Filter Destinations"}),Object(v.jsx)(f.a,{icon:P.j})]}),Object(v.jsxs)("div",{className:"d-actions",children:[Object(v.jsx)("div",{className:"d-action",onClick:function(){return n()},children:Object(v.jsx)(f.a,{icon:P.k})}),Object(v.jsxs)("div",{className:"d-action",children:[Object(v.jsx)("span",{children:"Read More"}),Object(v.jsx)(f.a,{icon:P.a})]})]})]}),Object(v.jsxs)("div",{className:"dfac2",children:[Object(v.jsx)("div",{className:"d-facility",children:i?i.nearbyFacilities||i.nearbyFacilities.length<1?i.nearbyFacilities.map((function(e){return Object(v.jsxs)("div",{className:"d-fac",children:[Object(v.jsx)("div",{className:"f-title",children:e.name}),Object(v.jsxs)("div",{className:"f-rating",children:[Object(v.jsx)("div",{className:"f-f"}),Object(v.jsx)("div",{className:"f-f"}),Object(v.jsx)("div",{className:"f-f"}),Object(v.jsx)("div",{className:"f-h"}),Object(v.jsx)("div",{className:"f-h"})]}),Object(v.jsx)("img",{src:"".concat(e.gallery[0]),alt:"ii"}),Object(v.jsx)("div",{className:"f-bookmark",children:Object(v.jsx)(f.a,{icon:P.c})})]})})):"No Facilities Found":""}),Object(v.jsxs)("div",{className:"d-fac-actions",children:[Object(v.jsx)("div",{className:"d-fac-action",children:Object(v.jsx)(f.a,{icon:P.d,size:"2x"})}),Object(v.jsx)("div",{className:"d-fac-action",children:Object(v.jsx)(f.a,{icon:P.e,size:"2x"})})]})]})]}):Object(v.jsx)(v.Fragment,{})})})})};i(65),i(66);var R=function(e){var t=e.clan;return Object(v.jsxs)("div",{className:"clan-tile",style:{backgroundImage:"images/crack.png"},children:[Object(v.jsx)("div",{className:"clan-title",children:t.name}),Object(v.jsxs)("div",{className:"naming",children:[Object(v.jsxs)("div",{className:"male",children:[Object(v.jsx)(f.a,{icon:P.i}),Object(v.jsx)("span",{children:t.naming.male})]}),Object(v.jsxs)("div",{className:"male",children:[Object(v.jsx)(f.a,{icon:P.g}),Object(v.jsx)("span",{children:t.naming.female})]})]}),Object(v.jsxs)("div",{className:"clan-detail",children:["Location: ",t.location]}),Object(v.jsxs)("div",{className:"clan-detail",children:["Exaltation Phrase: ",t.phrase]}),Object(v.jsxs)("div",{className:"clan-detail",children:["Taboos:"," ",t.taboos.map((function(e){return Object(v.jsx)("span",{style:{margin:10},children:e})}))]}),Object(v.jsxs)("div",{className:"clan-detail",children:["Praise Song: ",t.song]}),Object(v.jsx)("div",{className:"lct",children:"History"}),Object(v.jsx)("div",{className:"cl-history",children:t.history.map((function(e){return Object(v.jsx)("p",{children:e})}))})]})};i(67);var D=function(){var e=Object(a.useState)([{name:"Abanyekera",location:"Siginga, Bulemia, Rukala",naming:{male:"mnyakera",female:"namnyekera"},phrase:"Phrase",taboos:["imbongo","Likanga","Intestines","Ligugu"],song:"Identification of the origin of a Child's Mother (Unya)",history:["Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, quisquam libero. In omnis eveniet vel sapiente cupiditate delectus. Necessitatibus, cum?","Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, quisquam libero. In omnis eveniet vel sapiente cupiditate delectus. Necessitatibus, cum?","Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, quisquam libero. In omnis eveniet vel sapiente cupiditate delectus. Necessitatibus, cum?"]},{name:"Abamulembo",location:"Bomadea, Siginga, Bulemia, Rukala",naming:{male:"mumulembo",female:"namurembo"},phrase:"Phrase",taboos:["imbongo","Likanga","Intestines","Ligugu"],song:"Identification of the origin of a Child's Mother (Unya)",history:["Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, quisquam libero. In omnis eveniet vel sapiente cupiditate delectus. Necessitatibus, cum?","Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, quisquam libero. In omnis eveniet vel sapiente cupiditate delectus. Necessitatibus, cum?","Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, quisquam libero. In omnis eveniet vel sapiente cupiditate delectus. Necessitatibus, cum?"]},{name:"Abawanga",location:"Siginga, Bulemia, Rukala",naming:{male:"muwanga",female:"naanga"},phrase:"Phrase",taboos:["imbongo","Likanga","Intestines","Ligugu"],song:"Identification of the origin of a Child's Mother (Unya)",history:["Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, quisquam libero. In omnis eveniet vel sapiente cupiditate delectus. Necessitatibus, cum?","Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, quisquam libero. In omnis eveniet vel sapiente cupiditate delectus. Necessitatibus, cum?","Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, quisquam libero. In omnis eveniet vel sapiente cupiditate delectus. Necessitatibus, cum?"]},{name:"Abafofoyo",location:"Siginga, Bulemia, Rukala",naming:{male:"mufofoyo",female:"nafofoyo"},phrase:"Phrase",taboos:["imbongo","Likanga","Intestines","Ligugu"],song:"Identification of the origin of a Child's Mother (Unya)",history:["Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, quisquam libero. In omnis eveniet vel sapiente cupiditate delectus. Necessitatibus, cum?","Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, quisquam libero. In omnis eveniet vel sapiente cupiditate delectus. Necessitatibus, cum?","Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, quisquam libero. In omnis eveniet vel sapiente cupiditate delectus. Necessitatibus, cum?"]}]),t=Object(w.a)(e,2),i=t[0];return t[1],Object(v.jsxs)("div",{className:"clans",children:[Object(v.jsx)("div",{className:"cl-title",children:"Clans"}),Object(v.jsx)("div",{className:"cl-desc",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ut doloremque quod corporis asperiores, nostrum animi vel quae nihil earum corrupti suscipit, eius praesentium assumenda autem unde culpa architecto ab nisi temporibus officiis ipsa laborum pariatur! Corporis asperiores, amet quia id nam cumque quidem totam architecto perspiciatis ipsam necessitatibus earum! Error natus suscipit aliquam. Vero eum molestias nostrum atque delectus, vitae velit reiciendis reprehenderit facere laudantium! Similique quas reiciendis molestiae recusandae nesciunt, nihil accusantium deserunt unde, quibusdam natus voluptatibus ab, minima laudantium! Et libero ipsum delectus sunt dignissimos iste obcaecati? Perferendis eligendi excepturi quia culpa natus quidem ipsam harum quasi."}),Object(v.jsx)("div",{className:"cl-list",children:i.map((function(e){return Object(v.jsx)(R,{clan:e})}))})]})};i(68);var G=function(){var e=Object(a.useState)([{name:"one",description:"first description",image:"images/luhyalady.jpg"},{name:"two",description:"second description",image:"images/africastudents.jpg"},{name:"three",description:"third description",image:"images/luhyamum.jpg"},{name:"fourth",description:"fourth description",image:"images/wrestling.jpg"}]),t=Object(w.a)(e,2),i=t[0];return t[1],Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("div",{className:"col",children:[Object(v.jsx)("div",{className:"col-title",children:"Collections"}),Object(v.jsxs)(v.Fragment,{children:[i.map((function(e,t){return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{className:"col-book",style:{zIndex:i.length-t},children:[Object(v.jsx)("div",{className:"outside",onClick:function(e){return function(e){e.classList.add("flipped"),setTimeout((function(){e.style.zIndex=i.length-parseInt(e.style.zIndex),e.childNodes[1].style.pointerEvents="all",e.childNodes[0].style.pointerEvents="none"}),50)}(document.querySelectorAll(".col-book")[t])}},"page-out".concat(t)),Object(v.jsxs)("div",{className:"inside",style:{pointerEvents:"none"},onClick:function(e){return function(e,t){e.style.pointerEvents="none",e.parentNode.style.zIndex=i.length-t,e.parentNode.childNodes[0].style.pointerEvents="all",setTimeout((function(){return e.parentNode.classList.remove("flipped")}),100)}(e.target,t)},children:[Object(v.jsx)("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,backgroundImage:"url(images/textures/17.png)",pointerEvents:"none",opacity:.7,zIndex:4}}),Object(v.jsx)("img",{src:e.image,alt:""})]},"page-in".concat(t))]},"page-".concat(t))})})),Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{className:"col-book",style:{zIndex:0},children:[Object(v.jsx)("div",{className:"outside"}),Object(v.jsx)("div",{className:"inside",style:{pointerEvents:"none"}})]})})]})]}),Object(v.jsx)("div",{className:"foods",children:Object(v.jsx)("div",{className:"foods-title",children:"Popular Foods"})})]})};var U=function(){var e=Object(a.useState)([{label:"Budalang'i Floods and its Consequenses",by:"Job Obiri",image:"images/luhyalady.jpg"},{label:"Ecological Origin of Political System & Leadership",by:"Davis Okello",image:"images/luhyachildren.jpg"},{label:"Heros and Heroines",by:"Rev. Fr. Mandela",image:"images/luhyamum.jpg"}]),t=Object(w.a)(e,2),i=t[0],s=(t[1],Object(a.useState)([])),n=Object(w.a)(s,2),c=n[0],o=n[1],r=Object(a.useState)([]),m=Object(w.a)(r,2),j=m[0],b=m[1],h=Object(a.useState)(0),x=Object(w.a)(h,2),O=x[0],g=x[1];function k(e,t){var i,a=document.querySelectorAll(".h-nav-item"),s=Object(u.a)(a);try{for(s.s();!(i=s.n()).done;){i.value.classList.remove("sel")}}catch(r){s.e(r)}finally{s.f()}t.target.classList.add("sel");var n,c=document.querySelectorAll(".history > .h-content"),o=Object(u.a)(c);try{for(o.s();!(n=o.n()).done;){n.value.style.display="none"}}catch(r){o.e(r)}finally{o.f()}document.querySelector("#".concat(e)).style.display="flex"}function S(e){if(O===e);else{var t=document.querySelectorAll(".h-legend");t.forEach((function(e){return e.classList.remove("sel")})),t[e].classList.add("sel"),q.a.to(".h-label",1,{opacity:0,x:"100%"}),q.a.to(".h-carousel",.3,{opacity:0,scale:.99}).then((function(){return g(e)})).then((function(e){q.a.fromTo(".h-label",1,{x:"-100%",opacity:0},{x:0,opacity:1}),q.a.to(".h-carousel",.3,{opacity:1,scale:1})}))}}return Object(a.useEffect)((function(){var e=setInterval((function(){O>=i.length-1?S(0):S(O+1)}),1e4);return function(){return clearInterval(e)}}),[O]),Object(a.useEffect)((function(){var e;e=10,y.jsonGet("/stories/limited/".concat(e),"").then(function(){var e=Object(d.a)(l.a.mark((function e(t){var i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.ok){e.next=5;break}return e.next=3,t.json();case 3:i=e.sent,b(i);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch(),y.jsonGet("/sports","").then(function(){var e=Object(d.a)(l.a.mark((function e(t){var i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.ok){e.next=5;break}return e.next=3,t.json();case 3:i=e.sent,o(i);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch()}),[]),Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("div",{className:"ti",style:{backgroundImage:'url("/images/africastudents.jpg")',backgroundSize:"cover",backgroundPosition:"center",boxShadow:"inset var(--black) 0 0 200px",backgroundAttachment:"fixed"},children:"Our History"}),Object(v.jsxs)("div",{className:"h-nav",children:[Object(v.jsx)("div",{className:"h-nav-item sel",onClick:function(e){return k("introduction",e)},children:Object(v.jsx)(f.a,{icon:P.h})}),Object(v.jsx)("div",{className:"h-nav-item",onClick:function(e){return k("origin",e)},children:"Origin"}),Object(v.jsx)("div",{className:"h-nav-item",onClick:function(e){return k("clans",e)},children:"Clans"}),Object(v.jsx)("div",{className:"h-nav-item",onClick:function(e){return k("collections",e)},children:"Collections"})]}),Object(v.jsxs)("div",{className:"history",children:[Object(v.jsxs)("div",{className:"h-content",style:{display:"flex"},id:"introduction",children:[Object(v.jsxs)("div",{className:"h-carousel",style:{backgroundImage:"url(".concat(i[O].image,")"),backgroundSize:"cover",backgroundPosition:"center"},children:[Object(v.jsxs)(N.b,{exact:!0,to:"/stories/headline/"+i[O].label,className:"h-label",children:[Object(v.jsx)("div",{className:"h-title",children:i[O].label}),Object(v.jsxs)("div",{className:"h-more",children:["By ",i[O].by]})]}),Object(v.jsx)("div",{className:"h-legends",children:i.map((function(e,t){return Object(v.jsx)("div",{onClick:function(){return S(t)},className:0===t?"h-legend sel":"h-legend",style:{backgroundImage:"url(".concat(e.image,")")}})}))})]}),Object(v.jsxs)("div",{className:"h-intro",children:[Object(v.jsx)("div",{className:"h-main",children:c.map((function(e,t){var i=e._id,a=e.label,s=e.image;e.link;return Object(v.jsx)(N.b,{style:{color:"inherit"},exact:!0,to:"/stories/sport/".concat(i),children:Object(v.jsx)(p.motion.div,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},whileHover:{scale:1.05},className:"h-item",transition:{type:"spring",stiffness:300},style:{backgroundImage:"url(".concat(s,")"),backgroundSize:"cover"},children:Object(v.jsx)("div",{className:"h-item-label",children:a})})})}))}),Object(v.jsxs)("div",{className:"h-side",children:[Object(v.jsx)("div",{className:"h-side-title",children:"Popular Stories"}),Object(v.jsx)("div",{className:"h-side-content",children:j.map((function(e,t){return Object(v.jsxs)("div",{className:"h-side-item",children:[Object(v.jsx)("div",{className:"h-side-i",children:t+1}),Object(v.jsx)(N.b,{style:{textDecoration:"none"},exact:!0,to:"stories/story/".concat(e._id),children:Object(v.jsx)("div",{className:"h-side-l",children:e.title})})]})}))})]})]})]}),Object(v.jsx)("div",{className:"h-content",style:{display:"none"},id:"origin",children:"Origin"}),Object(v.jsx)("div",{className:"h-content",style:{display:"none"},id:"clans",children:Object(v.jsx)(D,{})}),Object(v.jsx)("div",{className:"h-content",style:{display:"none"},id:"collections",children:Object(v.jsx)(G,{})})]})]})};i(69);var H=function(){var e=Object(a.useState)(null),t=Object(w.a)(e,2),i=t[0],s=t[1],n=Object(a.useState)(!0),c=Object(w.a)(n,2),o=c[0],r=c[1],u=Object(S.f)(),m=u.story,j=u.type;return Object(a.useEffect)((function(){var e;e=j,r(!0),"story"===e?y.jsonGet("/stories/one/".concat(m),"").then(function(){var e=Object(d.a)(l.a.mark((function e(t){var i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r(!1),!t.ok){e.next=6;break}return e.next=4,t.json();case 4:i=e.sent,s({type:"story",data:i});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch():"sport"===e?y.jsonGet("/sports/".concat(m),"").then(function(){var e=Object(d.a)(l.a.mark((function e(t){var i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r(!1),!t.ok){e.next=6;break}return e.next=4,t.json();case 4:i=e.sent,s({type:"sport",data:i});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch():(r(!1),s(null))}),[]),o?Object(v.jsxs)(p.motion.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:1},className:"story-not-found",style:{backgroundColor:"var(--default)"},children:[Object(v.jsx)(p.motion.div,{style:{margin:10},initial:{opacity:0,x:-100},animate:{opacity:1,x:0},transition:{delay:1,type:"spring",stiffness:300},className:"rotating",children:Object(v.jsx)(f.a,{icon:P.f,size:"2x"})}),Object(v.jsx)(p.motion.div,{initial:{opacity:0,x:100},animate:{opacity:1,x:0},transition:{delay:1,type:"spring",stiffness:300},className:"error",children:"Please Wait..."})]}):i?Object(v.jsxs)(p.motion.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:1},className:"story",children:[Object(v.jsx)("div",{className:"story-head",style:{backgroundImage:"url(/".concat(i.data.image,")")||!1,backgroundSize:"cover",backgroundPosition:"center"},children:i.data.title||i.data.label}),Object(v.jsx)("div",{className:"story-content",onClick:function(){return console.log(i.data.image)},children:"Content"})]}):Object(v.jsxs)(p.motion.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:1},className:"story-not-found",children:[Object(v.jsx)(p.motion.div,{initial:{opacity:0,x:-100},animate:{opacity:1,x:0},transition:{delay:1,type:"spring",stiffness:300},children:Object(v.jsx)(f.a,{icon:P.b,size:"4x"})}),Object(v.jsxs)(p.motion.div,{initial:{opacity:0,x:100},animate:{opacity:1,x:0},transition:{delay:1,type:"spring",stiffness:300},className:"error",style:{textTransform:"capitalize"},children:[j," Not Found"]})]})},W=function(e){Object(b.a)(i,e);var t=Object(h.a)(i);function i(){var e;return Object(m.a)(this,i),(e=t.call(this)).state={loading:!0,routes:[]},e}return Object(j.a)(i,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState((function(e){return e.loading=!1}))}),2e3)}},{key:"closeMenu",value:function(){var e=Object(d.a)(l.a.mark((function e(t){var i,a,s,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(27!==t.keyCode){e.next=21;break}i=document.querySelectorAll(".navbar .navitem"),a=Object(u.a)(i),e.prev=3,a.s();case 5:if((s=a.n()).done){e.next=11;break}return n=s.value,e.next=9,q.b.fromTo(n,.1,{opacity:1,x:0},{opacity:0,x:50});case 9:e.next=5;break;case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(3),a.e(e.t0);case 16:return e.prev=16,a.f(),e.finish(16);case 19:q.b.to(".navbar",{backdropFilter:"blur(0px)"}),q.b.to(".navbar > *",.6,{opacity:0}).then((function(){q.b.to(".nv",.6,{bottom:"100vh"})}));case 21:case"end":return e.stop()}}),e,null,[[3,13,16,19]])})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(v.jsxs)(N.a,{children:[Object(v.jsx)("div",{children:this.state.loading?Object(v.jsx)(x,{}):Object(v.jsxs)("div",{onClick:function(){window.addEventListener("keyup",e.closeMenu)},children:[Object(v.jsxs)("div",{style:{position:"fixed",padding:"2vw 5vw",zIndex:1,display:"flex",alignItems:"center",flexDirection:"row",top:0,left:0,right:0},children:[Object(v.jsx)(f.a,{style:{cursor:"pointer"},icon:O.d,size:"2x",onClick:function(){q.b.to(".nv",.6,{bottom:"0vh"}).then(Object(d.a)(l.a.mark((function e(){var t,i,a,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:q.b.to(".navbar",1,{backdropFilter:"blur(10px)"}),q.b.to(".navbar > *",.6,{opacity:1}),t=document.querySelectorAll(".navbar .navitem"),i=Object(u.a)(t),e.prev=4,i.s();case 6:if((a=i.n()).done){e.next=12;break}return s=a.value,e.next=10,q.b.fromTo(s,.1,{opacity:0,x:50},{opacity:1,x:0});case 10:e.next=6;break;case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(4),i.e(e.t0);case 17:return e.prev=17,i.f(),e.finish(17);case 20:case"end":return e.stop()}}),e,null,[[4,14,17,20]])}))))}}),Object(v.jsxs)("div",{onClick:function(){return console.log(e.state.routes)},className:"info",style:{flex:1},children:[Object(v.jsx)(N.b,{className:"title",to:"/",children:y.appName}),Object(v.jsx)("div",{className:"phrase",children:y.phrase})]})]}),Object(v.jsx)(p.AnimatePresence,{exitBeforeEnter:!0,children:Object(v.jsxs)(S.c,{children:[Object(v.jsx)(S.a,{path:"/",exact:!0,component:B}),Object(v.jsx)(S.a,{path:"/history",exact:!0,component:U}),Object(v.jsx)(S.a,{exact:!0,path:"/travel",component:M}),Object(v.jsx)(S.a,{exact:!0,path:"/stories/:type/:story",component:H})]})}),Object(v.jsx)(A,{routes:this.state.routes})]})}),Object(v.jsx)("div",{className:"nv",children:Object(v.jsx)(k,{setRoutes:function(t){e.setState((function(e){return e.routes=t}))},closeMe:Object(d.a)(l.a.mark((function t(){var i,a,s,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:window.removeEventListener("keyup",e.closeMenu),i=document.querySelectorAll(".navbar .navitem"),a=Object(u.a)(i),t.prev=3,a.s();case 5:if((s=a.n()).done){t.next=11;break}return n=s.value,t.next=9,q.b.fromTo(n,.1,{opacity:1,x:0},{opacity:0,x:50});case 9:t.next=5;break;case 11:t.next=16;break;case 13:t.prev=13,t.t0=t.catch(3),a.e(t.t0);case 16:return t.prev=16,a.f(),t.finish(16);case 19:q.b.to(".navbar",{backdropFilter:"blur(0px)"}),q.b.to(".navbar > *",.6,{opacity:0}).then((function(){q.b.to(".nv",.6,{bottom:"100vh"})}));case 21:case"end":return t.stop()}}),t,null,[[3,13,16,19]])})))})})]})}}]),i}(a.Component),Y=W;c.a.render(Object(v.jsx)(s.a.StrictMode,{children:Object(v.jsx)(Y,{})}),document.getElementById("root")),o()}},[[70,1,2]]]);
//# sourceMappingURL=main.ded644df.chunk.js.map