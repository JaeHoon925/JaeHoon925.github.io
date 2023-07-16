(function(){"use strict";var t={4082:function(t,e,i){var s=i(144),a=i(1096),o=i(5378),r=i(8983),n=i(1828),l=i(3974),c=i(3584),d=i(5057),m=i(248),h=i(1908),u=i(7833),p=i(12),v=i(3551),f=i(7135),g=i(5234),w=i(2370),x=function(){var t=this,e=t._self._c;return e(a.Z,[e(o.Z,{attrs:{app:"",color:"#000000"}},[e(r.Z,{staticStyle:{color:"#fff"},on:{click:function(e){e.stopPropagation(),t.navDrawer=!t.navDrawer}}}),e(w.qW,[e("router-link",{staticStyle:{"text-decoration":"none",color:"#fff"},attrs:{to:"/"}},[t._v("Shutter")])],1),e(g.Z),e("router-link",{directives:[{name:"show",rawName:"v-show",value:!t.isLoggedIn,expression:"!isLoggedIn"}],attrs:{to:"login"}},[e(n.Z,[t._v("로그인")])],1),e("router-link",{directives:[{name:"show",rawName:"v-show",value:!t.isLoggedIn,expression:"!isLoggedIn"}],attrs:{to:"signUp"}},[e(n.Z,{staticClass:"ml-2"},[t._v("회원가입")])],1),e("strong",{directives:[{name:"show",rawName:"v-show",value:t.isLoggedIn,expression:"isLoggedIn"}],staticClass:"white--text"},[t._v(t._s(t.$store.state.userEmail))]),e(n.Z,{directives:[{name:"show",rawName:"v-show",value:t.isLoggedIn,expression:"isLoggedIn"}],staticClass:"ml-2",on:{click:t.logout}},[t._v("로그아웃")])],1),e(f.Z,{attrs:{app:"",temporary:"",color:"#999999",dark:""},model:{value:t.navDrawer,callback:function(e){t.navDrawer=e},expression:"navDrawer"}},[e(m.Z,t._l(t.navItems,(function(i){return e("router-link",{key:i.title,staticStyle:{"text-decoration":"none"},attrs:{to:i.to},on:{click:function(t){}}},[e(h.Z,[e(u.Z,[e(d.Z,{class:i.icon_style},[t._v(" "+t._s(i.icon)+" ")])],1),e(p.km,[e(p.V9,[t._v(" "+t._s(i.content)+" ")])],1)],1)],1)})),1)],1),e(v.Z,[e(l.Z,{attrs:{fluid:""}},[e("router-view")],1)],1),e(c.Z,{attrs:{color:"#000"}},[e("div",{staticClass:"mx-auto white--text"},[t._v("copyright ©")])])],1)},Z=[],k=i(629),b=i(4866),C=(i(8522),{name:"App",data:()=>({navDrawer:!1,navItems:[{icon:"mdi-camera-flip",content:"추천 & 질문 게시판",to:"board"},{icon:"mdi-camera-iris",content:"촬영 기법",to:"technique"},{icon:"mdi-thumb-up",content:"꿀팁 모음",to:"thumbUp"}]}),methods:{logout(){b.Z.auth().signOut().then((()=>{this.$store.commit("setLoggedIn",!1),this.$store.commit("changeEmail",""),alert("로그아웃되었습니다.")})).catch((t=>{console.error("로그아웃 중에 오류가 발생했습니다.",t)}))}},computed:{...(0,k.rn)({isLoggedIn:t=>t.isLoggedIn})}}),_=C,y=i(1001),E=(0,y.Z)(_,x,Z,!1,null,null,null),I=E.exports,B=i(5205);(0,B.z)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(t){console.error("Error during service worker registration:",t)}});var S=i(8345),L=i(3058),P=i(5223),j=i(7915),U=i(9789),D=i(2469),T=i(7615),q=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home"},[t._m(0),e("div",{staticClass:"mx-auto techniqueBox"},[e("h2",[t._v("촬영 기법")]),e("div",{staticStyle:{position:"relative","padding-bottom":"60px"}},[e(T.Z,{staticClass:"mt-3",attrs:{row:"",wrap:"","justify-center":"",relative:""}},[e(L.Z,{staticClass:"mr-6 ml-6 mb-6",attrs:{xs12:"",sm6:"",md4:"",xl4:"",width:"33.3%","max-width":"300","min-width":"230"}},[e(D.Z,{attrs:{src:i(8448),height:"250"}}),e(P.EB,[e("div",[e("h3",[t._v("반영")])])]),e(P.ZB,[e("p",{staticClass:"text-left"},[t._v("사물의 본 모습 그대로가 아닌 물이나 창문 등에 반사되거나 비쳐진 모습을 담아 낸 사진을 말합니다. 일상 속에서 쉽게 발견할 수 있지만, 새롭고 특별한 느낌을 줄 수 있고 초현실적인 장면들도 연출될 수 있기에 더욱 매력적인 기법입니다.")])])],1),e(L.Z,{staticClass:"mr-6 ml-6 mb-6",attrs:{xs12:"",sm6:"",md4:"",xl4:"",width:"33.3%","max-width":"300","min-width":"230"}},[e(D.Z,{attrs:{src:i(3622),height:"250"}}),e(P.EB,[e("div",[e("h3",[t._v("실루엣")])])]),e(P.ZB,[e("p",{staticClass:"text-left"},[t._v(" 인물 등의 피사체를 일부러 역광 상태에서 노출을 적게 주고 촬영하여 그 피사체의 형태만이 검게 나오게 한 사진을 말합니다. 실루엣 촬영은 일반적인 촬영과 방법에 차이가 있습니다. 역광으로 비치는 피사체를 직접 찍어야 하기에 빛이 강하게 비치는 배경에 노출을 측정하고 피사체를 촬영합니다. 실루엣 촬영은 빛의 원리를 잘 알아야 구사할 수 있는 고급 사진 기법입니다. ")])])],1),e(L.Z,{staticClass:"mr-6 ml-6 mb-6",attrs:{xs12:"",sm12:"",md4:"",xl4:"",width:"33.3%","max-width":"300","min-width":"230"}},[e(D.Z,{attrs:{src:i(830),height:"250"}}),e(P.EB,[e("div",[e("h3",[t._v("장노출")])])]),e(P.ZB,[e("p",{staticClass:"text-left"},[t._v(" 카메라 렌즈에 빛을 받아들이는 시간을 상대적으로 길게 하여, 즉 저속 셔터(1초를 나누는 숫자가 적음)로 촬영하는 사진을 장노출 사진이라 합니다. ")])])],1),e(n.Z,{attrs:{absolute:"",bottom:""}},[e("router-link",{staticStyle:{"text-decoration":"none",color:"#000"},attrs:{to:"technique"}},[t._v("더 알아보기")])],1)],1)],1),e(L.Z,[e(P.EB,[t._v("추천 & 질문 게시판")]),e(j.Z,{attrs:{headers:t.headers,items:t.items}}),e(U.Z,{attrs:{"max-width":"500"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}})],1)],1),e("div",{staticClass:"boardBox"})])},A=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"mainImgBox"},[e("img",{attrs:{src:i(5487),alt:""}}),e("div",{staticClass:"miniTextBox"},[e("h2",{staticClass:"pl-2 white--text"},[t._v(" The one you have been"),e("br"),t._v(" waiting for you"),e("br"),e("br"),t._v(" Record your"),e("br"),t._v(" butiful moment ")])])])}],O=(i(4673),{name:"HomeView",data(){return{headers:[{value:"title",text:"제목"},{value:"content",text:"내용"},{value:"email",text:"작성자"},{value:"id",text:""}],items:[],form:{title:"",content:"",email:""},dialog:!1,selectedItem:null}},created(){this.read()},methods:{openDialog(t){this.isLoggedIn?(this.selectedItem=t,this.dialog=!0,t?(this.form.title=t.title,this.form.content=t.content,this.form.email=t.email):(this.form.title="",this.form.content="",this.form.email=this.userEmail)):alert("로그인이 필요한 서비스입니다.")},add(){const t=b.Z.firestore();t.collection("boards").add(this.form),this.dialog=!1,this.read()},update(){const t=b.Z.firestore();t.collection("boards").doc(this.selectedItem.id).update(this.form),this.dialog=!1,this.read()},async read(){const t=b.Z.firestore(),e=await t.collection("boards").get();e.empty||(this.items=e.docs.map((t=>{const e=t.data();return{title:e.title,content:e.content,email:e.email}})))},remove(t){const e=b.Z.firestore();e.collection("boards").doc(t.id).delete(),this.dialog=!1,this.read()}},computed:{...(0,k.rn)({isLoggedIn:t=>t.isLoggedIn,userEmail:t=>t.userEmail})}}),$=O,N=(0,y.Z)($,q,A,!1,null,null,null),z=N.exports,Q=i(4437),V=i(3243),F=i(6904),G=i(5294),J=i(5251),M=function(){var t=this,e=t._self._c;return e("div",{staticClass:"login"},[e(T.Z,{staticClass:"text-xs-center",attrs:{row:"",wrap:""}},[e(V.Z,[e(L.Z,{staticClass:"mx-auto",attrs:{flat:"","max-width":"500"}},[e(G.Z,{staticStyle:{"margin-top":"40%"}},[e(Q.Z,[e(F.Z,{staticStyle:{width:"100%",height:"300px"}},[e("div",{staticClass:"mx-3"},[t._v(" 이메일 "),e("div",{staticClass:"mx-1"},[e(J.Z,{attrs:{placeholder:"이메일",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)]),e("div",{staticClass:"mx-3"},[t._v(" 비밀번호 "),e("div",{staticClass:"mx-1"},[e(J.Z,{attrs:{placeholder:"비밀번호",type:"password",required:""},model:{value:t.pw,callback:function(e){t.pw=e},expression:"pw"}})],1)]),e(P.h7,[e(n.Z,{attrs:{color:"#2c4f91",dark:"",large:"",block:""},on:{click:t.login}},[t._v("로그인")])],1)],1)],1)],1)],1)],1)],1)],1)},W=[],H=i(1259),K={data(){return{email:"",pw:""}},methods:{login(){var t=this;const e=(0,H.v0)();b.Z.auth().signInWithEmailAndPassword(this.email,this.pw).then((function(i){(0,H.Aj)(e,(e=>{if(e){t.loginok();const e=b.Z.auth().currentUser;return t.changeEmail(e.email),void t.$router.replace("/")}console.log("logout")}))}),(function(t){"auth/invalid-email"===t.code||"auth/user-not-found"===t.code?alert("이메일이 없거나 비밀번호가 틀렸습니다."):alert("에러: "+t.message)}))},loginok(){this.$store.commit("setLoggedIn",!0)},changeEmail(t){this.$store.commit("changeEmail",t)}}},R=K,X=(0,y.Z)(R,M,W,!1,null,null,null),Y=X.exports,tt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"signUp"},[e(T.Z,{staticClass:"text-xs-center",attrs:{row:"",wrap:""}},[e(V.Z,[e(L.Z,{staticClass:"mx-auto",attrs:{flat:"","max-width":"500"}},[e(G.Z,{staticStyle:{"margin-top":"40%"}},[e(Q.Z,[e(F.Z,{staticStyle:{width:"100%",height:"300px"}},[e("div",{staticClass:"mx-3"},[t._v(" 이메일 "),e("div",{staticClass:"mx-1"},[e(J.Z,{attrs:{placeholder:"ex) shutter@naver.com",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),e("p",{directives:[{name:"show",rawName:"v-show",value:!t.check.emailCk,expression:"!check.emailCk"}],staticClass:"checkText"},[t._v(" 이메일 주소를 정확히 입력해주세요. ")])]),e("div",{staticClass:"mx-3"},[t._v(" 비밀번호 "),e("div",{staticClass:"mx-1"},[e(J.Z,{attrs:{placeholder:"비밀번호",type:"password",required:""},model:{value:t.pw,callback:function(e){t.pw=e},expression:"pw"}})],1),e("p",{directives:[{name:"show",rawName:"v-show",value:!t.check.pwCk,expression:"!check.pwCk"}],staticClass:"checkText"},[t._v(" 영문, 숫자, 특수문자를 조합하여 입력해주세요. (8-16자) ")])]),e("div",{staticClass:"mx-3"},[t._v(" 비밀번호 확인 "),e("div",{staticClass:"mx-1"},[e(J.Z,{attrs:{placeholder:"비밀번호",type:"password",required:""},model:{value:t.pwCk,callback:function(e){t.pwCk=e},expression:"pwCk"}})],1),e("p",{directives:[{name:"show",rawName:"v-show",value:!t.check.pwCk2,expression:"!check.pwCk2"}],staticClass:"checkText"},[t._v(" 비밀번호가 일치하지 않습니다. ")])]),e(P.h7,[e(n.Z,{attrs:{color:"#2c4f91",dark:"",large:"",block:""},on:{click:t.signUp}},[t._v("가입하기")])],1)],1)],1)],1)],1)],1)],1)],1)},et=[],it={data(){return{email:"",pw:"",pwCk:"",check:{emailCk:!0,pwCk:!0,pwCk2:!0},checkSign:{emailCk:!1,pwCk:!1,pwCk2:!1}}},watch:{email:function(){this.checkEmail()},pw:function(){this.checkPassword()},pwCk:function(){this.checkPassword2()}},methods:{signUp(){if(this.checkSign.emailCk&&this.checkSign.pwCk&&this.checkSign.pwCk2){var t=this;b.Z.auth().createUserWithEmailAndPassword(this.email,this.pw).then((function(e){alert("회원가입 완료!"),t.$router.replace("/login")}),(function(t){"auth / email - already -in -use"===t.code?alert("이미 사용 중인 이메일입니다."):alert("에러: "+t.message)}))}else this.checkSign.emailCk?this.checkSign.pwCk?this.checkSign.pwCk2||alert("비밀번호가 일치하지 않습니다"):alert("비밀번호를 영문, 숫자, 특수문자를 조합하여 입력해주세요. (8-16자)"):alert("이메일 주소를 정확히 입력해주세요")},checkEmail(){const t=/^[A-Za-z0-9_\\.\\-]+@[A-Za-z0-9\\-]+\.[A-Za-z0-9\\-]+/;t.test(this.email)?(this.check.emailCk=!0,this.checkSign.emailCk=!0):(this.check.emailCk=!1,this.checkSign.emailCk=!1)},checkPassword(){const t=/^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;t.test(this.pw)?(this.check.pwCk=!0,this.checkSign.pwCk=!0):(this.check.pwCk=!1,this.checkSign.pwCk=!1)},checkPassword2(){console.log(this.checkSign.pwCk2),this.pw==this.pwCk?(this.check.pwCk2=!0,this.checkSign.pwCk2=!0):(this.check.pwCk2=!1,this.checkSign.pwCk2=!1)}}},st=it,at=(0,y.Z)(st,tt,et,!1,null,null,null),ot=at.exports,rt=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"board"}},[e(L.Z,[e(P.EB,[t._v("추천 & 질문 게시판")]),e(j.Z,{attrs:{headers:t.headers,items:t.items},scopedSlots:t._u([{key:"item.id",fn:function({item:i}){return[e(n.Z,{attrs:{icon:""},on:{click:function(e){return t.openDialog(i)}}},[e(d.Z,[t._v("mdi-pencil")])],1),e(n.Z,{attrs:{icon:""},on:{click:function(e){return t.remove(i)}}},[e(d.Z,[t._v("mdi-delete")])],1)]}}])}),e(P.h7,[e(n.Z,{on:{click:t.read}},[e(d.Z,{attrs:{left:""}},[t._v("mdi-page-next")])],1),e(n.Z,{on:{click:function(e){return t.openDialog(null)}}},[e(d.Z,{attrs:{left:""}},[t._v("mdi-pencil")])],1)],1),e(U.Z,{attrs:{"max-width":"500"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e(L.Z,[e(F.Z,[e(P.ZB,[e(J.Z,{attrs:{label:"제목"},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}}),e(J.Z,{attrs:{label:"내용"},model:{value:t.form.content,callback:function(e){t.$set(t.form,"content",e)},expression:"form.content"}})],1),e(P.h7,[e(g.Z),t.selectedItem?e(n.Z,{on:{click:t.update}},[t._v("수정 완료")]):e(n.Z,{on:{click:t.add}},[t._v("저장하기")])],1)],1)],1)],1)],1)],1)},nt=[],lt={data(){return{headers:[{value:"title",text:"제목"},{value:"content",text:"내용"},{value:"email",text:"작성자"},{value:"id",text:""}],items:[],form:{title:"",content:"",email:""},dialog:!1,selectedItem:null}},created(){this.read()},methods:{openDialog(t){this.isLoggedIn?(this.selectedItem=t,this.dialog=!0,t?(this.form.title=t.title,this.form.content=t.content,this.form.email=t.email):(this.form.title="",this.form.content="",this.form.email=this.userEmail)):alert("로그인이 필요한 서비스입니다.")},add(){const t=b.Z.firestore();t.collection("boards").add(this.form),this.dialog=!1,this.read()},update(){const t=b.Z.firestore();t.collection("boards").doc(this.selectedItem.id).update(this.form),this.dialog=!1,this.read()},async read(){const t=b.Z.firestore(),e=await t.collection("boards").get();e.empty||(this.items=e.docs.map((t=>{const e=t.data();return{id:t.id,title:e.title,content:e.content,email:e.email}})))},remove(t){if(this.userEmail==t.email||"admin2@naver.com"==this.userEmail){const e=b.Z.firestore();e.collection("boards").doc(t.id).delete(),this.dialog=!1,this.read()}else""==this.userEmail?alert("로그인 이후에 가능한 서비스입니다."):alert("작성자가 일치하지 않습니다")}},computed:{...(0,k.rn)({isLoggedIn:t=>t.isLoggedIn,userEmail:t=>t.userEmail})}},ct=lt,dt=(0,y.Z)(ct,rt,nt,!1,null,null,null),mt=dt.exports,ht=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"board"}},[e(L.Z,[e(P.EB,[t._v("추천 & 질문 게시판")]),e(j.Z,{attrs:{headers:t.headers,items:t.items},scopedSlots:t._u([{key:"item.id",fn:function({item:i}){return[e(n.Z,{attrs:{icon:""},on:{click:function(e){return t.openDialog(i)}}},[e(d.Z,[t._v("mdi-pencil")])],1),e(n.Z,{attrs:{icon:""},on:{click:function(e){return t.remove(i)}}},[e(d.Z,[t._v("mdi-delete")])],1)]}}])}),e(P.h7,[e(n.Z,{on:{click:t.read}},[e(d.Z,{attrs:{left:""}},[t._v("mdi-page-next")])],1),e(n.Z,{on:{click:function(e){return t.openDialog(null)}}},[e(d.Z,{attrs:{left:""}},[t._v("mdi-pencil")])],1)],1),e(U.Z,{attrs:{"max-width":"500"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e(L.Z,[e(F.Z,[e(P.ZB,[e(J.Z,{attrs:{label:"제목"},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}}),e(J.Z,{attrs:{label:"내용"},model:{value:t.form.content,callback:function(e){t.$set(t.form,"content",e)},expression:"form.content"}})],1),e(P.h7,[e(g.Z),t.selectedItem?e(n.Z,{on:{click:t.update}},[t._v("수정 완료")]):e(n.Z,{on:{click:t.add}},[t._v("저장하기")])],1)],1)],1)],1)],1)],1)},ut=[],pt={data(){return{headers:[{value:"title",text:"제목"},{value:"content",text:"내용"},{value:"email",text:"작성자"},{value:"id",text:""}],items:[],form:{title:"",content:"",email:""},dialog:!1,selectedItem:null}},created(){this.read()},methods:{openDialog(t){this.isLoggedIn?(this.selectedItem=t,this.dialog=!0,t?(this.form.title=t.title,this.form.content=t.content,this.form.email=t.email):(this.form.title="",this.form.content="",this.form.email=this.userEmail)):alert("로그인이 필요한 서비스입니다.")},add(){const t=b.Z.firestore();t.collection("thumbUp").add(this.form),this.dialog=!1,this.read()},update(){const t=b.Z.firestore();t.collection("thumbUp").doc(this.selectedItem.id).update(this.form),this.dialog=!1,this.read()},async read(){const t=b.Z.firestore(),e=await t.collection("thumbUp").get();e.empty||(this.items=e.docs.map((t=>{const e=t.data();return{id:t.id,title:e.title,content:e.content,email:e.email}})))},remove(t){if(this.userEmail==t.email||"admin2@naver.com"==this.userEmail){const e=b.Z.firestore();e.collection("thumbUp").doc(t.id).delete(),this.dialog=!1,this.read()}else""==this.userEmail?alert("로그인 이후에 가능한 서비스입니다."):alert("작성자가 일치하지 않습니다")}},computed:{...(0,k.rn)({isLoggedIn:t=>t.isLoggedIn,userEmail:t=>t.userEmail})}},vt=pt,ft=(0,y.Z)(vt,ht,ut,!1,null,null,null),gt=ft.exports,wt=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"technique"}},[e("div",{staticClass:"mx-auto techniqueBox"},[e("h2",[t._v("촬영 기법")]),e(T.Z,{staticClass:"mt-7",attrs:{row:"",wrap:"","justify-center":""}},[e(L.Z,{staticClass:"mr-6 ml-6 mb-6",attrs:{xs12:"",sm6:"",md4:"",xl4:"",width:"33.3%","max-width":"300","min-width":"230"}},[e(D.Z,{attrs:{src:i(8448),height:"250"}}),e(P.EB,[e("div",[e("h3",[t._v("반영")])])]),e(P.ZB,[e("p",{staticClass:"text-left"},[t._v("사물의 본 모습 그대로가 아닌 물이나 창문 등에 반사되거나 비쳐진 모습을 담아 낸 사진을 말합니다. 일상 속에서 쉽게 발견할 수 있지만, 새롭고 특별한 느낌을 줄 수 있고 초현실적인 장면들도 연출될 수 있기에 더욱 매력적인 기법입니다.")])])],1),e(L.Z,{staticClass:"mr-6 ml-6 mb-6",attrs:{xs12:"",sm6:"",md4:"",xl4:"",width:"33.3%","max-width":"300","min-width":"230"}},[e(D.Z,{attrs:{src:i(3622),height:"250"}}),e(P.EB,[e("div",[e("h3",[t._v("실루엣")])])]),e(P.ZB,[e("p",{staticClass:"text-left"},[t._v(" 인물 등의 피사체를 일부러 역광 상태에서 노출을 적게 주고 촬영하여 그 피사체의 형태만이 검게 나오게 한 사진을 말합니다. 실루엣 촬영은 일반적인 촬영과 방법에 차이가 있습니다. 역광으로 비치는 피사체를 직접 찍어야 하기에 빛이 강하게 비치는 배경에 노출을 측정하고 피사체를 촬영합니다. 실루엣 촬영은 빛의 원리를 잘 알아야 구사할 수 있는 고급 사진 기법입니다. ")])])],1),e(L.Z,{staticClass:"mr-6 ml-6 mb-6",attrs:{xs12:"",sm12:"",md4:"",xl4:"",width:"33.3%","max-width":"300","min-width":"230"}},[e(D.Z,{attrs:{src:i(830),height:"250"}}),e(P.EB,[e("div",[e("h3",[t._v("장노출")])])]),e(P.ZB,[e("p",{staticClass:"text-left"},[t._v(" 카메라 렌즈에 빛을 받아들이는 시간을 상대적으로 길게 하여, 즉 저속 셔터(1초를 나누는 숫자가 적음)로 촬영하는 사진을 장노출 사진이라 합니다. ")])])],1),e(L.Z,{staticClass:"mr-6 ml-6 mb-6",attrs:{xs12:"",sm12:"",md4:"",xl4:"",width:"33.3%","max-width":"300","min-width":"230"}},[e(D.Z,{attrs:{src:i(5271),height:"250"}}),e(P.EB,[e("div",[e("h3",[t._v("할레이션")])])]),e(P.ZB,[e("p",{staticClass:"text-left"},[t._v(" 사진 감광 재료의 감광층을 투과한 빛이 감광층과 지지체의 경계면이나 지지체의 이면에서 반사하여 다시 감광층에 입사하여 감광시키는 현상. 빛이 최초에 입사한 위치와 다른 위치를 감광시키는 셈이 되므로 특히 강한 빛이 쬐인 영역의 주변을 바라게 한다. 할레이션을 방지하려면 감광층과 지지체 사이, 혹은 지지체 뒷면에 할레이션 방지층을 설치하여 감광층을 투과한 빛을 흡수시킨다. ")])])],1),e(L.Z,{staticClass:"mr-6 ml-6 mb-6",attrs:{xs12:"",sm12:"",md4:"",xl4:"",width:"33.3%","max-width":"300","min-width":"230"}},[e(D.Z,{attrs:{src:i(9050),height:"250"}}),e(P.EB,[e("div",[e("h3",[t._v("매직 아워")])])]),e(P.ZB,[e("p",{staticClass:"text-left"},[t._v(" 매직아워(magic hour)는 일출 또는 일몰 후 수십분 정도 체험할 수 있는 황혼 때 촬영을 하면 광원이 되는 태양이 사라지고 있기 때문에 그림자가 없는 상태여서, 색상이 부드럽고 따뜻하고 금색으로 빛나는 상태가 되는 시간을 의미한다. 영화나 다큐멘터리를 촬영할 때 촬영감독들은 이런 매직아워를 종종 촬영하곤 한다. ")])])],1),e(L.Z,{staticClass:"mr-6 ml-6 mb-6",attrs:{xs12:"",sm12:"",md4:"",xl4:"",width:"33.3%","max-width":"300","min-width":"230"}},[e(D.Z,{attrs:{src:i(3643),height:"250"}}),e(P.EB,[e("div",[e("h3",[t._v("보케")])])]),e(P.ZB,[e("p",{staticClass:"text-left"},[t._v(" 보케(bokeh)는 일본어에 기원을 둔 용어로, '렌즈에 초점 밖의 빛을 렌더링하는 방식'이라고 정의됩니다. 그 어원이 된 일본어 단어 보케(暈け 또는 ボケ)는 '안개' 또는 '흐림'이라는 뜻을 가지고 있습니다. ")])])],1),e(L.Z,{staticClass:"mr-6 ml-6 mb-6",attrs:{xs12:"",sm12:"",md4:"",xl4:"",width:"33.3%","max-width":"300","min-width":"230"}},[e(D.Z,{attrs:{src:i(4021),height:"250"}}),e(P.EB,[e("div",[e("h3",[t._v("패닝")])])]),e(P.ZB,[e("p",{staticClass:"text-left"},[t._v(" 배경은 흐르는 듯 흐리고 움직이는 파사체는 정지된 듯 선명하게 담는 사진촬영기법을 ‘패닝(Panning) 샷’이라고 한다. 패닝샷은 움직이는 피사체를 멈추고 배경을 흐리게 효과를 주는 기법으로 운동감을 주는 것을 주목적으로 한다. ")])])],1),e(L.Z,{staticClass:"mr-6 ml-6 mb-6",attrs:{xs12:"",sm12:"",md4:"",xl4:"",width:"33.3%","max-width":"300","min-width":"230"}},[e(D.Z,{attrs:{src:i(7508),height:"250"}}),e(P.EB,[e("div",[e("h3",[t._v("파노라마")])])]),e(P.ZB,[e("p",{staticClass:"text-left"},[t._v(" 360°방향의 모든 경치를 담아내는 기법을 말한다. 참고로 비슷한 단어로 전경(全景)이란 단어가 있는데 이것은 180°방향의 모든 경치를 담아내는 기법이다.참고로 이 기법은 주로 사진기의 시야에 비하여 비교적 긴 피사체나 사람들이 대규모로 모인 곳을 담을 필요가 있을 때 쓰는 기법이다. 현실에서는 꼭 360도가 아니더라도 그냥 가로나 세로로 여러장 찍어서 합치면 파노라마라고 부른다. 광각렌즈로 충분히 커버가 가능하지만 고화질로 찍기 위해서 일부로 사용하기도 한다. ")])])],1),e(L.Z,{staticClass:"mr-6 ml-6 mb-6",attrs:{xs12:"",sm12:"",md4:"",xl4:"",width:"33.3%","max-width":"300","min-width":"230"}},[e(D.Z,{attrs:{src:i(5649),height:"250"}}),e(P.EB,[e("div",[e("h3",[t._v("로우 앵글")])])]),e(P.ZB,[e("p",{staticClass:"text-left"},[t._v(" 낮은 위치에서 피사체를 위에 둔 구도로 촬영하는 기법. 삼각대에 내장되어있는 센터 칼럼의 높이 조절을 이용해 촬영할 수 있으며, 극적이고 역동적인 분위기를 나타낼 수 있는 촬영기법. 풍경 사진을 촬영하거나 접사촬영 시 유용하다. ")])])],1),e(L.Z,{staticClass:"mr-6 ml-6 mb-6",attrs:{xs12:"",sm12:"",md4:"",xl4:"",width:"33.3%","max-width":"300","min-width":"230"}},[e(D.Z,{attrs:{src:i(8118),height:"250"}}),e(P.EB,[e("div",[e("h3",[t._v("하이 앵글")])])]),e(P.ZB,[e("p",{staticClass:"text-left"},[t._v(" 하이 앵글은 카메라가 피사체보다 높은 데 위치해서 화면에는 위에서 아래를 내려다보는 느낌이 든다. 가장 대표적인 하이 앵글은 헬리콥터 위에서 잡는 것이다. 하이 앵글에 나타나는 화면은 피사체가 작게 보인다. 하이 앵글에 나타나는 피사체는 외로운 느낌, 무력감, 약화된 지배력 등의 느낌을 보여 준다. ")])])],1)],1)],1)])},xt=[],Zt={},kt=(0,y.Z)(Zt,wt,xt,!1,null,null,null),bt=kt.exports,Ct=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"test"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.boardTitle,expression:"boardTitle"}],attrs:{type:"text",placeholder:"제목"},domProps:{value:t.boardTitle},on:{input:function(e){e.target.composing||(t.boardTitle=e.target.value)}}}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.boardCont,expression:"boardCont"}],attrs:{type:"text",placeholder:"내용"},domProps:{value:t.boardCont},on:{input:function(e){e.target.composing||(t.boardCont=e.target.value)}}}),e(n.Z,{on:{click:t.writeUserData}},[t._v("작성")])],1)},_t=[],yt=i(9355),Et={data(){return{boardTitle:"",boardCont:""}},created(){this.fetchPosts()},methods:{writeUserData(t,e){const i=(0,yt.N8)();set(ref(i,"users/"+userId),{boardTitle:t,boardCont:e})}}},It=Et,Bt=(0,y.Z)(It,Ct,_t,!1,null,null,null),St=Bt.exports;s.ZP.use(S.ZP);const Lt=[{path:"/",name:"home",component:z},{path:"/login",name:"login",component:Y},{path:"/signUp",name:"signUp",component:ot},{path:"/board",name:"board",component:mt},{path:"/technique",name:"technique",component:bt},{path:"/thumbUp",name:"thumbUp",component:gt},{path:"/test",name:"test",component:St}],Pt=new S.ZP({mode:"history",base:"/",routes:Lt,scrollBehavior(t,e,i){return{x:0,y:0}}});var jt=Pt;s.ZP.use(k.ZP);var Ut=new k.ZP.Store({state:{isLoggedIn:!1,userEmail:""},mutations:{setLoggedIn(t,e){t.isLoggedIn=e},setLoggedOut(t,e){t.isLoggedIn=e},changeEmail(t,e){return t.userEmail=e}},actions:{},getters:{},modules:{}}),Dt=i(2250);s.ZP.use(Dt.Z);var Tt=new Dt.Z({});const qt={apiKey:"AIzaSyA4pkG0mtVQ8QQAPgsJz8EBz762q8QCljc",authDomain:"shutter-750b6.firebaseapp.com",projectId:"shutter-750b6",storageBucket:"shutter-750b6.appspot.com",messagingSenderId:"1071054973584",appId:"1:1071054973584:web:bf0a43c4359621e3e30615",measurementId:"G-GSPJQ7LJHV"};b.Z.initializeApp(qt),s.ZP.config.productionTip=!1,new s.ZP({router:jt,store:Ut,vuetify:Tt,render:t=>t(I)}).$mount("#app")},5487:function(t,e,i){t.exports=i.p+"img/main.2c34caf8.jpeg"},5649:function(t,e,i){t.exports=i.p+"img/로우 앵글.113f273a.jpeg"},9050:function(t,e,i){t.exports=i.p+"img/매직 아워.463e7867.jpeg"},8448:function(t,e,i){t.exports=i.p+"img/반영.ceaafd84.jpeg"},3643:function(t,e,i){t.exports=i.p+"img/보케.d7a82181.png"},3622:function(t,e,i){t.exports=i.p+"img/실루엣.12bdb0c8.jpeg"},830:function(t,e,i){t.exports=i.p+"img/장노출3.f4844d07.jpeg"},7508:function(t,e,i){t.exports=i.p+"img/파노라마.5b87cae1.jpeg"},4021:function(t,e,i){t.exports=i.p+"img/패닝.362e7cf6.jpeg"},8118:function(t,e,i){t.exports=i.p+"img/하이 앵글.3e0c659c.jpeg"},5271:function(t,e,i){t.exports=i.p+"img/할레이션.6df26400.png"}},e={};function i(s){var a=e[s];if(void 0!==a)return a.exports;var o=e[s]={exports:{}};return t[s].call(o.exports,o,o.exports,i),o.exports}i.m=t,function(){var t=[];i.O=function(e,s,a,o){if(!s){var r=1/0;for(d=0;d<t.length;d++){s=t[d][0],a=t[d][1],o=t[d][2];for(var n=!0,l=0;l<s.length;l++)(!1&o||r>=o)&&Object.keys(i.O).every((function(t){return i.O[t](s[l])}))?s.splice(l--,1):(n=!1,o<r&&(r=o));if(n){t.splice(d--,1);var c=a();void 0!==c&&(e=c)}}return e}o=o||0;for(var d=t.length;d>0&&t[d-1][2]>o;d--)t[d]=t[d-1];t[d]=[s,a,o]}}(),function(){i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,{a:e}),e}}(),function(){i.d=function(t,e){for(var s in e)i.o(e,s)&&!i.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){i.p="/"}(),function(){var t={143:0};i.O.j=function(e){return 0===t[e]};var e=function(e,s){var a,o,r=s[0],n=s[1],l=s[2],c=0;if(r.some((function(e){return 0!==t[e]}))){for(a in n)i.o(n,a)&&(i.m[a]=n[a]);if(l)var d=l(i)}for(e&&e(s);c<r.length;c++)o=r[c],i.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return i.O(d)},s=self["webpackChunkshutter"]=self["webpackChunkshutter"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=i.O(void 0,[998],(function(){return i(4082)}));s=i.O(s)})();
//# sourceMappingURL=app.cde49fc0.js.map