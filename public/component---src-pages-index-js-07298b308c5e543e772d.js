webpackJsonp([35783957827783],{"./components/AgencyTile.js":function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var o=a("./node_modules/react/index.js"),i=l(o),c=function(e){function t(){return n(this,t),s(this,e.apply(this,arguments))}return r(t,e),t.prototype.render=function(){return i.default.createElement("div",{className:"tile"},i.default.createElement("img",{className:"img-responsive",src:this.props.data.imgUrl}),i.default.createElement("div",{className:"inner-tile"},i.default.createElement("h3",{style:{color:"#555555"}},this.props.data.title),i.default.createElement("p",{style:{color:"#999999","padding-bottom":"20px"}},this.props.data.location),i.default.createElement("div",{className:"row container-fluid"},i.default.createElement("p",{className:"pull-left",style:{color:"#999999"}},"Details:"),i.default.createElement("p",{className:"pull-left",style:{"margin-left":"5px"}},this.props.data.area)),i.default.createElement("div",{className:"row container-fluid"},i.default.createElement("p",{className:"pull-left",style:{color:"#999999"}},"Status: "),i.default.createElement("p",{className:"pull-left",style:{"margin-left":"5px"}},this.props.data.status)),i.default.createElement("div",{className:"row common-details",style:{"padding-top":"20px"}},i.default.createElement("div",{className:"col-sm-4"},i.default.createElement("img",{src:"images/bed-icon.png",style:{width:"25px"}}),i.default.createElement("p",{style:{"margin-left":"10px"}},this.props.data.bed," beds")),i.default.createElement("div",{className:"col-sm-4"},i.default.createElement("img",{src:"images/bath-icon.png",style:{width:"24px"}}),i.default.createElement("p",{style:{"margin-left":"10px"}},this.props.data.bath," baths")),i.default.createElement("div",{className:"col-sm-4"},i.default.createElement("img",{src:"images/garage-icon.png",style:{width:"20px"}}),i.default.createElement("p",{style:{"margin-left":"8px"}},this.props.data.garage," garage"))),i.default.createElement("a",{className:"details-link",style:{"line-height":"500%"}},"View details")))},t}(i.default.Component);t.default=c,e.exports=t.default},'./node_modules/babel-loader/lib/index.js?{"plugins":["/home/i4md34th/Desktop/projects/NOOBS/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/home/i4md34th/Desktop/projects/NOOBS/node_modules/babel-plugin-add-module-exports/lib/index.js","/home/i4md34th/Desktop/projects/NOOBS/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/home/i4md34th/Desktop/projects/NOOBS/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/home/i4md34th/Desktop/projects/NOOBS/node_modules/babel-preset-stage-0/lib/index.js","/home/i4md34th/Desktop/projects/NOOBS/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/index.js':function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var o=a("./node_modules/react/index.js"),i=l(o),c=a("./components/AgencyTile.js"),u=l(c),d=function(e){function t(a){n(this,t);var l=s(this,e.call(this,a));return l.navigate=function(){window.location="/page-3"},console.log("abc"),l.state={listingsData:[]},l}return r(t,e),t.prototype.componentDidMount=function(){var e=[{title:"12 Marla House for sale",location:"Dha 2",area:"12 Marla",status:"Sold",bed:2,bath:2,garage:1,imgUrl:"https://static1.squarespace.com/static/53690146e4b094e1f0fb2239/t/58fe960a197aea4f7f27993b/1493324448380/"},{title:"10 Marla House for sale",location:"Bahria",area:"10 Marla",status:"Available",bed:3,bath:3,garage:0,imgUrl:"https://static1.squarespace.com/static/53690146e4b094e1f0fb2239/t/58fe960a197aea4f7f27993b/1493324448380/"}];this.setState({listingsData:e})},t.prototype.render=function(){return i.default.createElement("div",null,i.default.createElement("section",{className:"search-section",style:{height:"100vh","background-color":"#75ce69","background-image":"url(images/header_background.jpg)","background-position":"bottom","z-index":"2"}},i.default.createElement("div",{className:"text-center"},i.default.createElement("h1",{className:"search-section-heading-1",style:{"margin-top":"0px","padding-top":"30vh",color:"white","letter-spacing":"-2px"}},i.default.createElement("strong",null,"Looking for a Home? - We can Help!")),i.default.createElement("h1",{className:"search-section-heading-2 text-center",style:{"margin-top":"0px","padding-top":"20vh",color:"white","letter-spacing":"-2px"}},i.default.createElement("strong",null,"Looking for a Home? ",i.default.createElement("br",null)," We can Help!")),i.default.createElement("p",{className:"search-section-para",style:{color:"white",margin:"auto","line-height":"150%","letter-spacing":"4px","word-spacing":"4px","font-weight":"300"}},"Pakistan’s Leading Real Estate Brand"),i.default.createElement("div",{className:"input-field",style:{"font-size":"18px"}},i.default.createElement("input",{type:"search",placeholder:"City",style:{"border-radius":"5px 0px 0px 5px",width:"200px"}}),i.default.createElement("input",{type:"search",placeholder:"Area",style:{"border-left":"1px solid #d8d8d8",width:"250px"}}),i.default.createElement("input",{type:"search",placeholder:"Type",style:{"border-left":"1px solid #d8d8d8",width:"250px"}}),i.default.createElement("button",{onClick:this.navigate,className:"input-submit",type:"submit",style:{"border-left":"1px solid #d8d8d8",width:"150px"}},"Buy"),i.default.createElement("button",{onClick:this.navigate,className:"input-submit",type:"submit",style:{"border-left":"1px solid #8e8e8e","border-radius":"0px 5px 5px 0px",width:"150px"}},"Rent")))),i.default.createElement("section",{id:"AboutUs",className:"about-section text-center"},i.default.createElement("h1",{className:"about-heading",style:{"letter-spacing":"3px",color:"#595959"}},i.default.createElement("strong",null,"ABOUT US")),i.default.createElement("p",{className:"about-para",style:{color:"#5b5b5b",width:"75vw",margin:"auto","line-height":"180%"}},"Agency21 International is Pakistan’s first leading real estate brand, and is the only real estate chain in the twin cities. Being a sister company of Steptons International UK, Agency21 is the only brand to set global trends in Pakistan’s real estate sector. With an aim to revolutionise Pakistan's real estate and the conviction of changing the way of business, Agency21has introduced unparalleled standards of professionalism and transparency. We aim to provide you with an unmatched quality of service, clarity of transaction and complete legal cover which is being introduced for the first time in Pakistan."),i.default.createElement("img",{className:"about-img",src:"images/about_img.png"}),i.default.createElement("h1",{id:"HowItWorks",className:"work-heading",style:{"letter-spacing":"3px",color:"#595959"}},i.default.createElement("strong",null,"OUR SERVICES")),i.default.createElement("div",{className:"work-steps"},i.default.createElement("figure",null,i.default.createElement("img",{className:"col-sm-3 tick",src:"images/tick.png"}),i.default.createElement("div",{className:"col-sm-9"},i.default.createElement("h3",null,i.default.createElement("strong",null,"Comparative Market Analysis (CMA)")),i.default.createElement("p",null,"A comparative and comprehensive estimate of your property’s value to help you in planning your future buying or selling."))),i.default.createElement("figure",null,i.default.createElement("img",{className:"col-sm-3 tick",src:"images/tick.png"}),i.default.createElement("div",{className:"col-sm-9"},i.default.createElement("h3",null,i.default.createElement("strong",null,"Exposure & Facilitation")),i.default.createElement("p",null,"Marketing your property to potential buyers and facilitating you through the whole property purchasing & selling process."))),i.default.createElement("figure",null,i.default.createElement("img",{className:"col-sm-3 tick",src:"images/tick.png"}),i.default.createElement("div",{className:"col-sm-9"},i.default.createElement("h3",null,i.default.createElement("strong",null,"Document & Legal cover")),i.default.createElement("p",null,"Providing you with complete legal cover and consultation through a certified legal firm, and preparing necessary paperwork for property transaction.")))),i.default.createElement("div",{className:"container-fluid graded",style:{padding:"3vh 10vw 3vh 10vw",color:"white","margin-top":"50px"}},i.default.createElement("h1",null,i.default.createElement("strong",null,"A Game Changer - In Real Estate Agency of Pakistan")),i.default.createElement("button",{className:"contact-btn"},i.default.createElement("strong",null,"Contact Us")))),i.default.createElement("section",{style:{margin:"20px 0px 20px 0px"}}),i.default.createElement("section",{className:"container-fluid",style:{padding:"0px",display:"none"}},i.default.createElement("h1",{className:"tile-heading text-center"},i.default.createElement("strong",null,"LISTED PROPERTIES")),i.default.createElement("div",{className:"container-fluid tiles",style:{display:"flex","flex-wrap":"wrap","margin-left":"auto","margin-right":"auto","margin-bottom":"70px"}},this.state.listingsData.map(function(e,t){return i.default.createElement("div",{className:"tile-1",style:{"margin-left":"auto","margin-right":"auto"}},i.default.createElement(u.default,{data:e}))}))))},t}(i.default.Component);t.default=d,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-index-js-07298b308c5e543e772d.js.map