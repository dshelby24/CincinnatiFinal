(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{43:function(e,t,a){},61:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},72:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},81:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),i=a(36),c=a.n(i),l=(a(43),a(6)),r=a(7),o=a(9),d=a(8),j=a(4),h=a(16),b=a.n(h),m=(a(61),a(37));a.n(m).a.config();var x=a(0),O=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).onChangeName=s.onChangeName.bind(Object(j.a)(s)),s.onChangeEmail=s.onChangeEmail.bind(Object(j.a)(s)),s.onChangeMessage=s.onChangeMessage.bind(Object(j.a)(s)),s.onChangePhoneNumber=s.onChangePhoneNumber.bind(Object(j.a)(s)),s.onSubmit=s.onSubmit.bind(Object(j.a)(s)),s.state={name:" ",email:" ",message:" ",phone:" ",contactInfo:[]},s}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.getContactPost()}},{key:"getContactPost",value:function(){var e=this;b.a.get("falsecontact").then((function(t){var a=t.data;console.log(t.data),e.setState({contactInfo:a}),console.log("Yay it works")})).catch((function(e){console.log("error ABANDON SHIP!!!")}))}},{key:"onChangeName",value:function(e){this.setState({name:e.target.value})}},{key:"onChangeEmail",value:function(e){this.setState({email:e.target.value})}},{key:"onChangeMessage",value:function(e){this.setState({message:e.target.value})}},{key:"onChangePhoneNumber",value:function(e){this.setState({phone:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={name:this.state.name,email:this.state.email,message:this.state.message,phone:this.state.phone};console.log(t),b.a.post("falsecontact/add",t).then((function(e){return console.log(e.data)})),this.props.history.push("/home"),this.setState({name:"",email:"",message:"",phone:""}),window.alert("Thank you sending us a message"),console.log(t)}},{key:"render",value:function(){return Object(x.jsx)("div",{children:Object(x.jsx)("div",{className:"body3",children:Object(x.jsxs)("form",{id:"contact-form",onSubmit:this.onSubmit,children:[Object(x.jsxs)("div",{className:"titlecontact",children:[Object(x.jsx)("h3",{className:"text-center",children:"Let's Chat!"}),Object(x.jsx)("h4",{children:"Leave us a message below"})]}),Object(x.jsxs)("div",{className:"containerContact",children:[Object(x.jsxs)("div",{class:"container",children:[Object(x.jsxs)("div",{class:"row header",children:[Object(x.jsx)("h1",{children:"CONTACT US"}),Object(x.jsx)("h3",{children:"Fill out the form below to learn more!"})]}),Object(x.jsxs)("div",{class:"row body",children:[Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{children:" Name"}),Object(x.jsx)("input",{type:"text",required:!0,className:"form-controls",value:this.state.name,onChange:this.onChangeName})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{children:"Email"}),Object(x.jsx)("input",{type:"email",required:!0,className:"form-controls",value:this.state.email,onChange:this.onChangeEmail})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{children:"Leave us a short message! "}),Object(x.jsx)("input",{type:"text",required:!0,className:"form-controls ",value:this.state.message,onChange:this.onChangeMessage})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{children:"Phone Number"}),Object(x.jsx)("input",{type:"tel",required:!0,className:"form-controls",value:this.state.phone,onChange:this.onChangePhoneNumber})]}),Object(x.jsx)("div",{className:"form-group",children:Object(x.jsx)("input",{type:"submit",value:"Sumbit",className:"btn-add"})})]})]}),"            "]})]})})})}}]),a}(s.Component),u=(a(65),function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return Object(x.jsx)("div",{children:Object(x.jsx)("div",{children:Object(x.jsxs)("div",{id:"parallax-world-of-ugg",children:[Object(x.jsx)("section",{className:"title",id:"about-header",children:Object(x.jsx)("div",{className:"title",children:Object(x.jsx)("h1",{children:"Sing the Queen City"})})}),Object(x.jsx)("section",{children:Object(x.jsxs)("div",{className:"parallax-one",children:[Object(x.jsx)("h2",{children:"Welcome Home"}),Object(x.jsx)("h2",{children:"Love, Cincy"})]})}),Object(x.jsx)("section",{children:Object(x.jsxs)("div",{className:"block",children:[Object(x.jsx)("p",{className:"header1",children:"A Gem of the Midwest"}),Object(x.jsx)("p",{className:"text1",children:"Cincinnati has so much to offer. We can't stop talking about her."})]})}),Object(x.jsx)("section",{children:Object(x.jsx)("div",{className:"parallax-two",children:Object(x.jsx)("h2",{children:"Explore the Seven Hills"})})}),Object(x.jsxs)("div",{className:"block",children:[Object(x.jsx)("p",{className:"header2",children:"Wanderlust Welcome Here"}),Object(x.jsx)("p",{className:"",children:"Explore fifty two neighborhoods in our expansive city limits. There is so much to see and experience. Each neighborhood is unique and special with its attractions, businesses, and histories; go on and find your new home away from home. "}),Object(x.jsx)("section",{})]}),Object(x.jsx)("section",{children:Object(x.jsx)("div",{className:"parallax-three",children:Object(x.jsx)("h2",{children:"On the Banks"})})}),Object(x.jsxs)("div",{className:"block",children:[Object(x.jsx)("p",{className:"header3",children:"Down to the River to Play"}),Object(x.jsx)("p",{children:"Cincinnati has beautiful riverfront parks, walkable paths, fun businesses and attractions, and amazing views on the banks of the Ohio River. Enjoy the cool breezes, open air, and some of the best sights Cincinnati has to offer."}),Object(x.jsx)("section",{})]}),Object(x.jsx)("section",{children:Object(x.jsx)("div",{className:"parallax-four",children:Object(x.jsx)("h2",{children:"Arts & Culture"})})}),Object(x.jsxs)("div",{className:"block",children:[Object(x.jsx)("p",{className:"header3",children:"Sophistication for the Refined Traveler"}),Object(x.jsx)("p",{children:"From Music Hall to our art museums, galleries, theaters, and playhouses, Cincinnat's vibrant arts' scene is alive and well."}),Object(x.jsx)("section",{})]}),Object(x.jsx)("section",{children:Object(x.jsx)("div",{className:"parallax-five",children:Object(x.jsx)("h2",{children:"Sports and Entertainment"})})}),Object(x.jsx)("section",{children:Object(x.jsxs)("div",{className:"block",children:[Object(x.jsx)("p",{className:"header3",children:"Hey, Batter Batter"}),Object(x.jsx)("p",{children:"Home of the first professional baseball team, the Cincinnati Reds, as well as the Bengals professional football and FC Cincinnati soccer, in addition to our numerous college teams, Cincinnati is ideal for the sports lover."})]})}),Object(x.jsx)("section",{children:Object(x.jsx)("div",{className:"parallax-six",children:Object(x.jsx)("h2",{children:"Love the Outdoors"})})}),Object(x.jsx)("section",{children:Object(x.jsxs)("div",{className:"block",children:[Object(x.jsx)("p",{className:"header3",children:"Unparalled Natural Beauty"}),Object(x.jsx)("p",{children:"From its verdant hills and valleys to shining river, Cincinnati is a natural wonder. The city boasts of numerous public parks with extensive grounds, hiking trails, as well as the largest interconnected biking trails in the United States. Go on, adventure is out there."})]})}),Object(x.jsx)("section",{children:Object(x.jsx)("div",{className:"parallax-seven",children:Object(x.jsx)("h2",{children:"Cincinnati Is For Lovers"})})}),Object(x.jsx)("section",{children:Object(x.jsxs)("div",{className:"block",children:[Object(x.jsx)("p",{className:"header3",children:"Romantic Getaways and Wedding Destinations"}),Object(x.jsx)("p",{children:"Make memories for a lifetime here in Cincinnati. With wedding venues to suit all tastes and scenic locations for photographs, Cincinnati is perfect for your dream wedding. Want to get away from it all with your special someone? Look no further than here."})]})}),Object(x.jsx)("section",{className:"text"}),Object(x.jsxs)("section",{id:"hero",children:[Object(x.jsx)("div",{id:"cincy1"}),Object(x.jsx)("div",{id:"cincy2"})]}),Object(x.jsx)("section",{className:"text"})]})})})}}]),a}(s.Component)),p=(a(66),a(19),a(67),a(14)),g=a(15),v=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return Object(x.jsx)("footer",{children:Object(x.jsxs)("div",{className:"footer-area",children:[Object(x.jsxs)("div",{className:"footer-columns",children:[Object(x.jsxs)("div",{ClassName:"footeroptions",id:"footer-left",children:[Object(x.jsx)("ul",{className:"nav-item",children:Object(x.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})}),Object(x.jsx)("ul",{className:"nav-item",children:Object(x.jsx)("a",{className:"nav-link",href:"",children:"About"})}),Object(x.jsx)("ul",{className:"nav-item",children:Object(x.jsx)("a",{className:"nav-link",href:"#",children:"Contact"})}),Object(x.jsx)("ul",{className:"nav-item",children:Object(x.jsx)("a",{className:"nav-link",href:"#",children:"Add Attractions"})})]}),Object(x.jsxs)("div",{className:"dropdown-container",children:[Object(x.jsxs)("ul",{className:"nav-item dropdown",children:[Object(x.jsx)("a",{className:"nav-link dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:"Seasons"}),Object(x.jsxs)("ul",{className:"dropdown-menu","aria-labelledby":"navbarDropdown1",children:[Object(x.jsx)("ul",{children:Object(x.jsx)("a",{className:"dropdown-item",href:"#",children:"Spring"})}),Object(x.jsx)("ul",{children:Object(x.jsx)("a",{className:"dropdown-item",href:"#",children:"Summer"})}),Object(x.jsx)("ul",{children:Object(x.jsx)("a",{className:"dropdown-item",href:"#",children:"Autumn"})}),Object(x.jsx)("ul",{children:Object(x.jsx)("a",{className:"dropdown-item",href:"#",children:"Winter"})})]})]}),Object(x.jsxs)("ul",{className:"nav-item dropdown",children:[Object(x.jsx)("a",{className:"nav-link dropdown-toggle",href:"#",id:"navbarDropdown2",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:"Destinations"}),Object(x.jsxs)("ul",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:[Object(x.jsx)("ul",{children:Object(x.jsx)("a",{className:"dropdown-item",href:"#",children:"Over the Rhine"})}),Object(x.jsx)("ul",{children:Object(x.jsx)("a",{className:"dropdown-item",href:"#",children:"Smale Riverfront Park"})}),Object(x.jsx)("ul",{children:Object(x.jsx)("a",{className:"dropdown-item",href:"#",children:"Downtown"})}),Object(x.jsx)("ul",{children:Object(x.jsx)("a",{className:"dropdown-item",href:"#",children:"Covington/Northern Kentucky"})})]})]}),Object(x.jsxs)("ul",{className:"nav-item dropdown",children:[Object(x.jsx)("a",{className:"nav-link dropdown-toggle",href:"#",id:"navbarDropdown3",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:"Experiences"}),Object(x.jsxs)("ul",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:[Object(x.jsx)("ul",{children:Object(x.jsx)("a",{className:"dropdown-item",href:"#",children:"Culture"})}),Object(x.jsx)("ul",{children:Object(x.jsx)("a",{className:"dropdown-item",href:"#",children:"Outdoors"})}),Object(x.jsx)("ul",{children:Object(x.jsx)("a",{className:"dropdown-item",href:"#",children:"Food"})}),Object(x.jsx)("ul",{children:Object(x.jsx)("a",{className:"dropdown-item",href:"#",children:"Luxury"})})]})]}),Object(x.jsx)("ul",{className:"nav-item",children:Object(x.jsx)("a",{className:"nav-link",href:"#",children:"View Attractions"})}),Object(x.jsx)("h3",{id:"kable-title"})]})]}),Object(x.jsxs)("div",{className:"media-container",id:"mediaIcons",children:[Object(x.jsx)(p.a,{icon:g.f}),Object(x.jsx)(p.a,{icon:g.c}),Object(x.jsx)(p.a,{icon:g.e}),Object(x.jsx)(p.a,{icon:g.a})]}),Object(x.jsxs)("div",{className:"shelby-container",id:"shelby-footer",children:[Object(x.jsx)("h3",{id:"dom-title",children:"Domynique Shelby"}),Object(x.jsxs)("div",{className:"shelby-icons",children:[Object(x.jsx)("a",{href:"https://github.com/dshelby24",children:Object(x.jsx)(p.a,{icon:g.b})}),Object(x.jsx)("a",{href:"https://www.linkedin.com/in/domynique-v-shelby/",children:Object(x.jsx)(p.a,{icon:g.d})})]})]}),Object(x.jsxs)("div",{className:"watson-container",children:[Object(x.jsx)("div",{className:"watson-title",children:Object(x.jsx)("h3",{id:"phil-title",children:"Philicia Watson"})}),Object(x.jsxs)("div",{className:"watson-icons",children:[Object(x.jsx)("a",{href:"https://github.com/PhiliciaWatson",children:Object(x.jsx)(p.a,{icon:g.b})}),Object(x.jsx)("a",{href:"https://www.linkedin.com/in/philicia-watson-b26bba1b1/",children:Object(x.jsx)(p.a,{icon:g.d})})]})]}),Object(x.jsxs)("div",{className:"hall-container",children:[Object(x.jsx)("div",{className:"hall-title",children:Object(x.jsx)("h3",{id:"all-title",children:"Allison Hall"})}),Object(x.jsxs)("div",{className:"hall-icons",children:[Object(x.jsx)("a",{href:"https://github.com/hallallisongrace",children:Object(x.jsx)(p.a,{icon:g.b})}),Object(x.jsx)("a",{href:"https://linkedin.com/in/hallallisongrace",children:Object(x.jsx)(p.a,{icon:g.d})})]})]}),Object(x.jsxs)("div",{className:"legalinfo",children:[Object(x.jsx)("p",{children:"Site by TGR Agency"}),Object(x.jsx)("p",{children:"Copyright TGR Agency 2021"}),Object(x.jsx)("p",{children:"Terms & Conditions | Privacy | Legal Notice"})]})]})})}}]),a}(n.a.Component),f=(a(72),a(73),a.p+"static/media/cityHall.b63aa12b.jpg"),N=a.p+"static/media/bridge.9af1e7a9.jpg",y=a.p+"static/media/Museum.c75f5168.jpg",w=a.p+"static/media/Night.dc8cb855.jpg",C=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return Object(x.jsxs)("div",{id:"body",children:[Object(x.jsx)("section",{className:"container-fluid position-relative",id:"section",children:Object(x.jsxs)("h1",{className:"position-absolute top-50 start-50 translate-middle text-light",children:["WELCOME ",Object(x.jsx)("br",{}),"COME TRAVEL WITH US"]})}),Object(x.jsx)("section",{className:"container-fluid d-flex justify-content-end text-center mt-4",children:Object(x.jsxs)("div",{className:"col-sm-8",children:[Object(x.jsx)("img",{src:f,className:"img-thumbnail border border-light rounded"}),Object(x.jsx)("p",{className:"mt-4 p-3 text-light",children:"ndlightjendijneindine"})]})}),Object(x.jsx)("section",{className:"container-fluid d-flex justify-content-start text-center mt-4",children:Object(x.jsxs)("div",{className:"col-sm-8",children:[Object(x.jsx)("img",{src:y,className:"img-fluid border border-light rounded"}),Object(x.jsx)("p",{className:"mt-4 p-3 text-light",children:"ndjendijneindine"})]})}),Object(x.jsx)("section",{className:"container-fluid d-flex justify-content-end text-center mt-4",children:Object(x.jsxs)("div",{className:"col-sm-8",children:[Object(x.jsx)("img",{src:N,className:"img-fluid border border-light rounded"}),Object(x.jsx)("p",{className:"mt-4 p-3 text-light",children:"ndjendijneindine"})]})}),Object(x.jsx)("section",{className:"container-fluid d-flex justify-content-start text-center mt-4",children:Object(x.jsxs)("div",{className:"col-sm-8",children:[Object(x.jsx)("img",{src:w,className:"img-fluid border border-light rounded"}),Object(x.jsx)("p",{className:"mt-4 p-3 text-light",children:"ndjendijneindine"})]})})]})}}]),a}(n.a.Component),k=a(25),S=a(3),D=(a(74),function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return Object(x.jsx)("div",{className:"attraction-cards",children:Object(x.jsxs)("div",{className:"card-body",children:[Object(x.jsx)("img",{alt:"",className:"img",src:this.props.img}),Object(x.jsx)("h2",{className:"attraction-h2",children:this.props.title}),Object(x.jsxs)("p",{className:"attraction-p",children:[this.props.paragraph,"."]}),Object(x.jsx)("h5",{className:"attraction-h5",children:this.props.stars}),Object(x.jsx)("a",{href:this.props.link,target:"_blank",rel:"noreferrer",children:Object(x.jsx)("div",{className:"button",children:this.props.btn})})]})})}}]),a}(s.Component)),A=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{id:"parallax-world-of-ugg"}),Object(x.jsxs)("div",{className:"cards",children:[Object(x.jsx)(D,{img:"https://cincinnatiusa.com/sites/default/files/styles/Array/public/attractionphotos/Union%20Terminal%20Robert%20Webber.jpg",title:"Cincinnati Museum Center",paragraph:"Cincinnati Museum Center or Union Terminal,as some may call it, is a museum complex operating out of the Cincinnati Union Terminal in the Queensgate neighborhood of Cincinnati, Ohio. It houses museums, theaters, a library, and a symphonic pipe organ, as well as special traveling exhibitions",stars:"4.5/5 stars",btn:"Visit Website",link:"https://www.cincymuseum.org/"}),Object(x.jsx)("div",{class:"parrallax-content2",children:Object(x.jsx)("div",{class:"parrallax2"})}),Object(x.jsx)(D,{img:"https://images.unsplash.com/photo-1465779171454-aa85ccf23be6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mnw0OTg4MjI5fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",title:"Kings Island",paragraph:"Kings Island is a 364-acre amusement park located 24 miles northeast of Cincinnati in Mason, Ohio. Owned and operated by Cedar Fair, the park first opened in 1972 by the Taft Broadcasting Company.",stars:"4/5 stars",btn:"Visit Website",link:"https://www.visitkingsisland.com/"}),Object(x.jsx)("div",{class:"parrallax-content3",children:Object(x.jsx)("div",{class:"parrallax3"})}),Object(x.jsx)(D,{img:"https://3nwec1qd4zy21zftr339bla3-wpengine.netdna-ssl.com/wp-content/uploads/2019/10/03_Smale-Riverfront-Park_website-1800x1196.jpg ",title:"The Banks",paragraph:"The Banks is an electrifying cityscape, buzzing and bustling with thousands of people reigniting their passion, by day and night, for the City we all love.",stars:"4.5/5 stars",btn:"Visit Website",link:"http://thebankscincy.com/"}),Object(x.jsx)("div",{class:"parrallax-content4",children:Object(x.jsx)("div",{class:"parrallax4"})}),Object(x.jsx)(D,{img:"https://images.squarespace-cdn.com/content/v1/5c094a9725bf026a08cb9f9f/1584034029640-L2S48JS90472UKQCWKAD/ke17ZwdGBToddI8pDm48kF2qYZC9TsAyDXOBJpYiDRoUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcqnp59hRngHm1gGB_D5aR4mYvjnSitYzC8sD-2FKZxEJ_URRrhB8CzNfPRZ5O8gKc/home_FindlayMarket.jpg?format=2500w",title:"Findlay Market",paragraph:" Findlay Market is Ohio's oldest continuously operated public market and one of Cincinnati's most cherished institutions, welcoming more than one million visitors each year. At Findaly Market you can find tons of fresh fruit, vegtables, seafoo, meat and more. There are tons of vendors and something for everyone to engage in.",stars:"4.8/5 stars",btn:"Visit Website",link:"https://www.findlaymarket.org/"}),Object(x.jsx)("div",{class:"parrallax-content5",children:Object(x.jsx)("div",{class:"parrallax5"})}),Object(x.jsx)(D,{img:"https://fowlingwarehouse.com/wp-content/uploads/2018/09/fw-lanes-home3.jpg",title:"Fowling",paragraph:"Football plus bowling equals tons of fun. Fowling is a new growing attraction in the Cincinnati area. Fowling is great for a night outing with fmaily and friends.",stars:"4.5/5 stars",btn:"Visit Website",link:"https://fowlingwarehouse.com/cincinnati-oh/"}),Object(x.jsx)("div",{class:"parrallax-content6",children:Object(x.jsx)("div",{class:"parrallax6"})}),Object(x.jsx)(D,{img:"https://static.wixstatic.com/media/a860b7_7a69b78e5a3a4d9f8fd6f93037e7e7be~mv2.jpg/v1/fill/w_1366,h_761,al_c,q_85/a860b7_7a69b78e5a3a4d9f8fd6f93037e7e7be~mv2.webp",title:"Selfie City",paragraph:"Selfie City is a one of kind art studio. Filled with 6 exhbits all different themed. Selfie City is the place to come for a fmaily outing, birthday parties, or just to take picutres!",stars:"5/5 stars",btn:"Visit Website",link:"http://www.selfiecitycincy.com/"})]})]})}}]),a}(s.Component),F=a(18),R=(a(75),function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).onChangeName=s.onChangeName.bind(Object(j.a)(s)),s.onChangeDescription=s.onChangeDescription.bind(Object(j.a)(s)),s.onChangeWebsite=s.onChangeWebsite.bind(Object(j.a)(s)),s.onChangeImageURL=s.onChangeImageURL.bind(Object(j.a)(s)),s.onChangeAddress=s.onChangeAddress.bind(Object(j.a)(s)),s.onChangeCity=s.onChangeCity.bind(Object(j.a)(s)),s.onChangeState=s.onChangeState.bind(Object(j.a)(s)),s.onChangeZipcode=s.onChangeZipcode.bind(Object(j.a)(s)),s.onChangeIndoors=s.onChangeIndoors.bind(Object(j.a)(s)),s.onChangeChild=s.onChangeChild.bind(Object(j.a)(s)),s.onSubmit=s.onSubmit.bind(Object(j.a)(s)),s.state={name:"",description:"",website:"",imageURL:"",indoors:0,childFriendly:0},s}return Object(r.a)(a,[{key:"onChangeName",value:function(e){this.setState({name:e.target.value})}},{key:"onChangeDescription",value:function(e){this.setState({description:e.target.value})}},{key:"onChangeWebsite",value:function(e){this.setState({website:e.target.value})}},{key:"onChangeImageURL",value:function(e){this.setState({imageURL:e.target.value})}},{key:"onChangeAddress",value:function(e){this.setState({location:{address:e.target.value}})}},{key:"onChangeCity",value:function(e){this.setState({location:Object(F.a)(Object(F.a)({},this.state.location),{},{city:e.target.value})})}},{key:"onChangeState",value:function(e){this.setState({location:Object(F.a)(Object(F.a)({},this.state.location),{},{state:e.target.value})})}},{key:"onChangeZipcode",value:function(e){this.setState({location:Object(F.a)(Object(F.a)({},this.state.location),{},{state:e.target.value})})}},{key:"onChangeIndoors",value:function(e){this.setState({indoors:e.target.value})}},{key:"onChangeChild",value:function(e){this.setState({childFriendly:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault();this.state.name,this.state.description,this.state.website,this.state.imageURL,this.state.location,this.state.address,this.state.city,this.state.state,this.state.indoors,this.state.childFriendly;console.log(a),b.a.post("http://localhost:5000/attractions",a).then((function(e){return console.log(e.data)})),window.location="/attractions"}},{key:"render",value:function(){return Object(x.jsx)("div",{children:Object(x.jsxs)("div",{className:"containerAddPage",children:[Object(x.jsx)("h2",{className:"text-center",id:"header-text",children:"Add a New Attraction"}),Object(x.jsxs)("form",{className:"add",onSubmit:this.onSubmit,children:[Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{children:"Name: "}),Object(x.jsx)("input",{type:"text",required:!0,className:"form-control inputs",value:this.state.name,onChange:this.onChangeName})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{children:"Description: "}),Object(x.jsx)("input",{type:"text",required:!0,className:"form-control",value:this.state.description,onChange:this.onChangeDescription})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{children:"Website: "}),Object(x.jsx)("input",{type:"text",required:!0,className:"form-control",value:this.state.website,onChange:this.onChangeWebsite})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{children:"Image URL: "}),Object(x.jsx)("input",{type:"text",required:!0,className:"form-control",value:this.state.imageURL,onChange:this.onChangeImageURL})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{children:"Adress: "}),Object(x.jsx)("input",{type:"text",required:!0,className:"form-control",value:this.state.address,onChange:this.onChangeAddress})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{children:"City: "}),Object(x.jsx)("input",{type:"text",required:!0,className:"form-control",value:this.state.city,onChange:this.onChangeCity})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{children:"State: "}),Object(x.jsx)("input",{type:"text",required:!0,className:"form-control",value:this.state.state,onChange:this.onChangeState})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{children:"Indoors: "}),Object(x.jsx)("div",{className:"select-style",children:Object(x.jsxs)("select",{required:!0,className:"form-control",onChange:this.onChangeIndoors,id:"please-move",children:[Object(x.jsx)("option",{value:"",children:"Select"}),Object(x.jsx)("option",{value:"1",children:"Indoor"}),Object(x.jsx)("option",{value:"0",children:"Outdoor"})]})})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{children:"Child Friendly: "}),Object(x.jsx)("div",{className:"select-style",children:Object(x.jsxs)("select",{required:!0,className:"form-control move ",onChange:this.onChangeChild,id:"also-move",children:[Object(x.jsx)("option",{id:"marginL",value:"",children:"Select"}),Object(x.jsx)("option",{value:"1",children:"Child Friendly"}),Object(x.jsx)("option",{value:"0",children:"21 and over"})]})})]}),Object(x.jsx)("div",{className:"form-group",children:Object(x.jsx)("input",{type:"submit",value:"Add Attraction",className:"btn-add"})})]})]})})}}]),a}(s.Component)),I=Object(S.e)(R),L=(a(81),function(){return Object(x.jsx)("div",{children:Object(x.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light fixed-top",children:Object(x.jsxs)("div",{className:"container-fluid bg-light",children:[Object(x.jsx)("a",{className:"navbar-brand",href:"#",children:"Cincy Travels"}),Object(x.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(x.jsx)("span",{className:"navbar-toggler-icon"})}),Object(x.jsxs)("div",{className:"collapse navbar-collapse text-center navbar-nav-scroll",id:"navbarSupportedContent",children:[Object(x.jsxs)("ul",{className:"navbar-nav mx-auto mb-2 mb-lg-0 bg-light",children:[Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsx)("a",{className:"nav-link active","aria-current":"page",href:"/home",children:"Home"})}),Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsx)("a",{className:"nav-link",href:"/about",children:"About"})}),Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsx)("a",{className:"nav-link",href:"/contact",children:"Contact"})}),Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsx)("a",{className:"nav-link",href:"/add",children:"Add Attractions"})}),Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsx)("a",{className:"nav-link",href:"/attractions",children:"View Attractions"})}),Object(x.jsxs)("li",{className:"nav-item dropdown",children:[Object(x.jsx)("a",{className:"nav-link dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:"Seasons"}),Object(x.jsxs)("ul",{className:"dropdown-menu","aria-labelledby":"navbarDropdown1",children:[Object(x.jsx)("li",{children:Object(x.jsx)("a",{className:"dropdown-item",href:"#",children:"Spring"})}),Object(x.jsx)("li",{children:Object(x.jsx)("a",{className:"dropdown-item",href:"#",children:"Summer"})}),Object(x.jsx)("li",{children:Object(x.jsx)("a",{className:"dropdown-item",href:"#",children:"Autumn"})}),Object(x.jsx)("li",{children:Object(x.jsx)("a",{className:"dropdown-item",href:"#",children:"Winter"})})]})]}),Object(x.jsxs)("li",{className:"nav-item dropdown",children:[Object(x.jsx)("a",{className:"nav-link dropdown-toggle",href:"#",id:"navbarDropdown2",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:"Destinations"}),Object(x.jsxs)("ul",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:[Object(x.jsx)("li",{children:Object(x.jsx)("a",{className:"dropdown-item",href:"#",children:"Over the Rhine"})}),Object(x.jsx)("li",{children:Object(x.jsx)("a",{className:"dropdown-item",href:"#",children:"Smale Riverfront Park"})}),Object(x.jsx)("li",{children:Object(x.jsx)("a",{className:"dropdown-item",href:"#",children:"Downtown"})}),Object(x.jsx)("li",{children:Object(x.jsx)("a",{className:"dropdown-item",href:"#",children:"Covington/Northern Kentucky"})})]})]}),Object(x.jsxs)("li",{className:"nav-item dropdown",children:[Object(x.jsx)("a",{className:"nav-link dropdown-toggle",href:"#",id:"navbarDropdown3",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:"Experiences"}),Object(x.jsxs)("ul",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:[Object(x.jsx)("li",{children:Object(x.jsx)("a",{className:"dropdown-item",href:"#",children:"Culture"})}),Object(x.jsx)("li",{children:Object(x.jsx)("a",{className:"dropdown-item",href:"#",children:"Outdoors"})}),Object(x.jsx)("li",{children:Object(x.jsx)("a",{className:"dropdown-item",href:"#",children:"Food"})}),Object(x.jsx)("li",{children:Object(x.jsx)("a",{className:"dropdown-item",href:"#",children:"Luxury"})})]})]})]}),Object(x.jsxs)("form",{className:"d-flex",children:[Object(x.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(x.jsx)("button",{className:"btn btn-outline-success bg-light",type:"submit",children:"Search"})]})]})]})})})}),W=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).state={name:"",description:"",website:"",imageURL:"",location:{address:"",city:"",state:"",zipcode:""},indoors:!1,childFriendly:!1,loading:!0},s}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;b.a.post("falseattractions/"+this.props.match.params.id).then((function(t){e.setState({name:t.data.name,description:t.data.description,website:t.data.website,imageURL:t.data.imageURL,indoors:t.data.indoors.toString(),childFriendly:t.data.childFriendly.toString(),loading:!1})})).catch((function(e){console.log(e)})),console.log(this.state.name)}},{key:"render",value:function(){return!1===this.state.loading?Object(x.jsx)("div",{children:Object(x.jsx)("div",{className:"singleContainer",children:Object(x.jsxs)("div",{className:"singleHeaderContainer",children:[Object(x.jsx)("div",{className:"singleHeaderInfo",children:Object(x.jsx)("div",{className:"singleName",children:this.state.name})}),Object(x.jsx)("div",{className:"singleHeaderImage",children:Object(x.jsx)("img",{className:"singleImage",src:this.state.imageURL,alt:""})}),Object(x.jsxs)("div",{className:"singleDescriptionContainer",children:[Object(x.jsx)("div",{className:"singleDescription",children:this.state.description}),Object(x.jsxs)("div",{className:"singleBooleans",children:[Object(x.jsxs)("div",{id:"singleIndoors",children:[Object(x.jsx)("span",{children:"Indoors?"})," ",Object(x.jsx)("br",{})," ",this.state.indoors]}),Object(x.jsxs)("div",{id:"singleFamily",children:[Object(x.jsx)("span",{children:"Family Friendly?"})," ",Object(x.jsx)("br",{})," ",this.state.childFriendly]})]}),Object(x.jsx)("div",{children:Object(x.jsx)("a",{href:this.state.website,className:"attractionLink",target:"_blank",rel:"noreferrer",children:"Visit Website"})})]})]})})}):Object(x.jsx)("div",{children:Object(x.jsx)("h1",{className:"loading-spinner",children:"Loading..."})})}}]),a}(s.Component),q=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return Object(x.jsx)(k.a,{children:Object(x.jsxs)("div",{className:"maincontainer",children:[Object(x.jsx)(L,{}),Object(x.jsx)(S.a,{exact:!0,path:"/home",component:C}),Object(x.jsx)(S.a,{exact:!0,path:"/about",component:u}),Object(x.jsx)(S.a,{exact:!0,path:"/Contact",component:O}),Object(x.jsx)(S.a,{exact:!0,path:"/attractions",component:A}),Object(x.jsx)(S.a,{exact:!0,path:"/add",component:I}),Object(x.jsx)(S.a,{exact:!0,path:"/attractions/:id",component:W}),Object(x.jsx)(v,{})]})})}}]),a}(n.a.Component),T=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,85)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,i=t.getLCP,c=t.getTTFB;a(e),s(e),n(e),i(e),c(e)}))};a(82);c.a.render(Object(x.jsx)(n.a.StrictMode,{children:Object(x.jsx)(q,{})}),document.getElementById("root")),T()}},[[83,1,2]]]);
//# sourceMappingURL=main.57875a16.chunk.js.map