"use strict";(self.webpackChunkqtrobot_documentation=self.webpackChunkqtrobot_documentation||[]).push([[2568,6565],{58215:function(e,t,n){n.d(t,{Z:function(){return a}});var o=n(67294);function a(e){var t=e.children,n=e.hidden,a=e.className;return o.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return c}});var o=n(87462),a=n(67294),r=n(72389),i=n(63777),s=n(86010),l="tabItem_LplD";function p(e){var t,n,r,p=e.lazy,c=e.block,d=e.defaultValue,m=e.values,u=e.groupId,h=e.className,k=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=m?m:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),f=(0,i.lx)(v,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===d?d:null!=(t=null!=d?d:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=k[0])?void 0:r.props.value;if(null!==g&&!v.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,i.UB)(),N=w.tabGroupChoices,T=w.setTabGroupChoices,b=(0,a.useState)(g),y=b[0],Q=b[1],C=[],P=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=u){var R=N[u];null!=R&&R!==y&&v.some((function(e){return e.value===R}))&&Q(R)}var _=function(e){var t=e.currentTarget,n=C.indexOf(t),o=v[n].value;o!==y&&(P(t),Q(o),null!=u&&T(u,o))},S=function(e){var t,n=null;switch(e.key){case"ArrowRight":var o=C.indexOf(e.currentTarget)+1;n=C[o]||C[0];break;case"ArrowLeft":var a=C.indexOf(e.currentTarget)-1;n=C[a]||C[C.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":c},h)},v.map((function(e){var t=e.value,n=e.label,r=e.attributes;return a.createElement("li",(0,o.Z)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:function(e){return C.push(e)},onKeyDown:S,onFocus:_,onClick:_},r,{className:(0,s.Z)("tabs__item",l,null==r?void 0:r.className,{"tabs__item--active":y===t})}),null!=n?n:t)}))),p?(0,a.cloneElement)(k.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}function c(e){var t=(0,r.Z)();return a.createElement(p,(0,o.Z)({key:String(t)},e))}},80688:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return m},metadata:function(){return u},assets:function(){return h},toc:function(){return k},default:function(){return f}});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),i=n(9877),s=n(58215),l=n(63970),p=n(55381),c=["components"],d={id:"intro_code",title:"Quick start with coding on QTrobot",sidebar_position:1,tags:["Getting Started","Code","Programming"],hide_table_of_contents:!1},m=void 0,u={unversionedId:"intro_code",id:"version-QTRD_v1/intro_code",title:"Quick start with coding on QTrobot",description:"This document guides you towards quick start coding on the QTrobot using programming languages. If you are looking for graphical programming, please take a look at Quick start with QTrobot studio.",source:"@site/versioned_docs/version-QTRD_v1/intro_code.md",sourceDirName:".",slug:"/intro_code",permalink:"/docs/v1/intro_code",tags:[{label:"Getting Started",permalink:"/docs/v1/tags/getting-started"},{label:"Code",permalink:"/docs/v1/tags/code"},{label:"Programming",permalink:"/docs/v1/tags/programming"}],version:"QTRD_v1",sidebarPosition:1,frontMatter:{id:"intro_code",title:"Quick start with coding on QTrobot",sidebar_position:1,tags:["Getting Started","Code","Programming"],hide_table_of_contents:!1},sidebar:"version-QTRD_v1/codding_sidebard"},h={},k=[{value:"1. Understanding QTrobot architecture",id:"1-understanding-qtrobot-architecture",level:2},{value:"Internal Setup",id:"internal-setup",level:3},{value:"2. Prepare your setup",id:"2-prepare-your-setup",level:2},{value:"Step 1. Turn on QTrobot",id:"step-1-turn-on-qtrobot",level:3},{value:"Step 2. Connect keyboard/mouse and monitor to QTPC",id:"step-2-connect-keyboardmouse-and-monitor-to-qtpc",level:3},{value:"Step 3. Wait for QTPC to boot",id:"step-3-wait-for-qtpc-to-boot",level:3},{value:"3. Connect QTrobot to a home network and Internet",id:"qt_to_internet",level:2},{value:"4. Optional ways of working with QTrobot",id:"4-optional-ways-of-working-with-qtrobot",level:2},{value:"Step 1. Setup your ROS environment",id:"step-1-setup-your-ros-environment",level:3},{value:"Step 2. Test your setup",id:"step-2-test-your-setup",level:3}],v={toc:k};function f(e){var t=e.components,n=(0,a.Z)(e,c);return(0,r.kt)("wrapper",(0,o.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This document guides you towards quick start ",(0,r.kt)("strong",{parentName:"p"},"coding")," on the QTrobot using programming languages. If you are looking for ",(0,r.kt)("strong",{parentName:"p"},"graphical programming"),", please take a look at ",(0,r.kt)("a",{parentName:"p",href:"intro_graphical"},(0,r.kt)("strong",{parentName:"a"},"Quick start with QTrobot studio")),".  "),(0,r.kt)("h2",{id:"1-understanding-qtrobot-architecture"},"1. Understanding QTrobot architecture"),(0,r.kt)("p",null,"QTrobot is a high-end research platform with powerful computers and state-of-the-art hardware such as 3D camera and far-field microphone array. It comes with two computers: ",(0,r.kt)("em",{parentName:"p"},"i)")," QTRP, a Raspberry Pi based computer to control the main hardware and ",(0,r.kt)("em",{parentName:"p"},"ii)")," QTPC, an Intel\xae NUC i5/i7 PC to provide more computational power and to accelerate software development cycle. Both computers run on Ubuntu/Debian Linux operating systems and leverage ",(0,r.kt)("a",{parentName:"p",href:"https://www.ros.org/"},(0,r.kt)("strong",{parentName:"a"},"ROS"))," to offer easy-to-use yet very flexible software architecture. QTrobot's hardware is easily extendable via USB-C and USB adaptors, for example, to connect external monitor, keyboard and mouse. QTrobot also provides a rich set of ",(0,r.kt)("a",{parentName:"p",href:"api_ros"},(0,r.kt)("strong",{parentName:"a"},"APIs"))," for several programing languages such as C++, Python and JavaScript. "),(0,r.kt)("center",null,(0,r.kt)("img",{src:"/img/QTrobot.PNG",alt:"qtrobot"})),(0,r.kt)("h3",{id:"internal-setup"},"Internal Setup"),(0,r.kt)("p",null,"As it is shown in the following diagram, QTrobot consists of two computers, one in the QTrobot head (QTRP) and the other in the body (QTPC), which are internally connected via ethernet cable. All of the QTrobot devices such as display, speakers, microphone and motors are connected to QTRP except the 3D Camera which is connected directly to QTPC. The Wi-Fi of the QTRP is used to create the QTrobot hotspot with the same SSID as the robot\u2019s serial number (e.g. QTRD000101).  "),(0,r.kt)("center",null,(0,r.kt)("img",{width:"800",src:"/img/architecture.png",alt:"architecture"})),(0,r.kt)("p",null,"Both computers are configured to interact in one ROS environment. Upon starting the QTrobot, QTRP runs the roscore and initializes the ROS environment. It also turn on QTPC via wake-on-lan when the ROS environment is up. You will also find two USB port at the back of the QTrobot. One of the is attached to QTRP and the second one (USB-C) is connected to QTPC. This USB-C port can be used to connect keyboard,mouse and monitor via a USB-C extension hub to QTPC. "),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Notice")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"QTPC is already prepared and configured to work with roscore which is running on QTRP and you can access all QTrobot ROS services ands topics."))),(0,r.kt)("h2",{id:"2-prepare-your-setup"},"2. Prepare your setup"),(0,r.kt)("p",null,"There are few ways of developing code for QTrobot. We ",(0,r.kt)("em",{parentName:"p"},"strongly recommend")," you to start developing directly on QTrobot's integrated QTPC. As it is shown in the following picture, you need to prepare:"),(0,r.kt)("p",null,"\xa0",(0,r.kt)(p.Z,{mdxType:"Icon"},"keyboard")," a keyboard,",(0,r.kt)("br",null),"\n","\xa0",(0,r.kt)(p.Z,{mdxType:"Icon"},"mouse")," a mouse,",(0,r.kt)("br",null),"\n","\xa0",(0,r.kt)(p.Z,{mdxType:"Icon"},"desktop_windows")," and a monitor with HDMI cable."),(0,r.kt)("center",null,(0,r.kt)("img",{src:"/img/robot_rd_setup.png",alt:"rdsetup"})),(0,r.kt)("h3",{id:"step-1-turn-on-qtrobot"},"Step 1. Turn on QTrobot"),(0,r.kt)("p",null,"To power the QTrobot on, simply connect the QTrobot's power supply",(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),".This triggers the power on process and your QTrobot becomes ready less than a minute. After powering on, you can see the QTrobot face is on and the motors are in their home position. If the QTrobot is already connected to the power supply simply\npush the power button to turn on the QTrobot."),(0,r.kt)("h3",{id:"step-2-connect-keyboardmouse-and-monitor-to-qtpc"},"Step 2. Connect keyboard/mouse and monitor to QTPC"),(0,r.kt)("p",null,"Connect keyboard, mouse and HDMI Monitor to your USB-C extension then plug it in the USB-C port at the back of QTrobot. "),(0,r.kt)("h3",{id:"step-3-wait-for-qtpc-to-boot"},"Step 3. Wait for QTPC to boot"),(0,r.kt)("p",null,"After you turned on your QTrobot it will need some time until your QTPC turns on, because QTRP will turn on QTPC after ROS environment is up. You will see the Ubuntu desktop of QTPC and you can use in the same way you use a standard desktop for development."),(0,r.kt)("center",null," ",(0,r.kt)("img",{src:"/img/qtpc.png",alt:"QTPC"})),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Powering off QTrobot")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"To power off the QTrobot simply press the power button on the back of the QTrobot. This will turn off both QTRP and QTPC. Wait enough for QTrobot to turn off before unplugging it from power supply: a blue screen shows up immediately goes off. "))),(0,r.kt)("p",null,"Now you should be all settled and ready for coding.  However, in most cases you need to have access to the internet. So let's follow the next section to connect your QTrobot to your home/office router and the Internet."),(0,r.kt)("h2",{id:"qt_to_internet"},"3. Connect QTrobot to a home network and Internet"),(0,r.kt)("p",null,"The older version of QTrobot's (which had been released before May 2021) have different operating system for QTRP. Those set of robots (with QTRP version older than ",(0,r.kt)("inlineCode",{parentName:"p"},"QTRDTP2105"),") require slightly different set of steps for connecting them to the Internet. Please carefully do the following steps to find the version of your QTRP. "),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Finding the version of QTRP")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("em",{parentName:"p"},"1.")," ssh to QTRP and run the following command to check the codename of its operating system: "),(0,r.kt)("p",{parentName:"div"},"From the Ubuntu desktop of QTPC, open a terminal and access QTRP via ssh: "),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ssh developer@192.168.100.1\n# or ssh developer@QTRP\n")),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("em",{parentName:"p"},"For the password use ",(0,r.kt)("inlineCode",{parentName:"em"},"qtrobot"),".")),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"lsb_release -c\n")),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("em",{parentName:"p"},"2.")," if the codename is ",(0,r.kt)("inlineCode",{parentName:"p"},"xenial")," then the version of your QTRP is older than QTRDTP2105."))),(0,r.kt)(i.Z,{defaultValue:"QTRDTP2105",values:[{label:"Recent QTrobots",value:"QTRDTP2105"},{label:"QTrobots older than QTRDTP2105",value:"QTRDTP2102"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"QTRDTP2105",mdxType:"TabItem"},(0,r.kt)(l.default,{mdxType:"QTrobotRecent"})),(0,r.kt)(s.Z,{value:"QTRDTP2102",mdxType:"TabItem"},(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Do not use the QTRP Wi-Fi to connect to a network for QTrobot older than QTRDTP2105.")),"\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Instead, use Wi-Fi from QTPC as explained bellow!"))))),(0,r.kt)("p",null,"The following diagram demonstrates a common scenario where different devices (e.g. laptops) are connected to the QTrobot via it's Wi-Fi hotspot. To have access to the internet on all these machines, the Wi-Fi of QTPC should be connected to the home router. The internet from the home router, therefore is shared to all other machines via QTPC. The green arrows shows the direction and how internet shared between QTPC, QTRP and any other devices connected to QTrobot hotspot."),(0,r.kt)("center",null,(0,r.kt)("img",{width:"800",src:"/img/network1.png",alt:"network"})),(0,r.kt)("p",null,"Therefore, all you need to do is to connect the ",(0,r.kt)("strong",{parentName:"p"},"QTPC")," to your home router's Wi-Fi. After your QTPC gets internet connection, it will automatically share it with QTRP and any other devices connected to QTrobot Wi-FI hotspot. "),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Connect to a wireless network from Ubuntu desktop")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"Access the QTPC ubuntu desktop (see ",(0,r.kt)("a",{parentName:"li",href:"intro_code#2-prepare-your-setup"},"Working on QTPC"),")"),(0,r.kt)("li",{parentName:"ul"},"Open the system menu from the right side of the top bar ."),(0,r.kt)("li",{parentName:"ul"},"Select Wi-Fi and click Select Network."),(0,r.kt)("li",{parentName:"ul"},"Click the name of the network you want, then click Connect. ..."),(0,r.kt)("li",{parentName:"ul"},"If the network is protected by a password (encryption key), enter the password when prompted and click Connect.")))))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"4-optional-ways-of-working-with-qtrobot"},"4. Optional ways of working with QTrobot"),(0,r.kt)(i.Z,{defaultValue:"Computer",values:[{label:"Working with your ROS Setup",value:"Computer"},{label:"Working via SSH",value:"SSH"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"Computer",mdxType:"TabItem"},(0,r.kt)("h3",{id:"step-1-setup-your-ros-environment"},"Step 1. Setup your ROS environment"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Notice")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"For this steps you will need ROS installed on your computer. If you don't have it please follow this installation ",(0,r.kt)("a",{parentName:"p",href:"http://wiki.ros.org/ROS/Installation"},"instructions")," "))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Install QTrobot ROS headers files on your laptop")),(0,r.kt)("p",{parentName:"li"},"Clone ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},(0,r.kt)("a",{parentName:"em",href:"https://github.com/luxai-qtrobot/software"},"QTrobot Software")))," repository."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~/\ngit clone https://github.com/luxai-qtrobot/software.git\n")),(0,r.kt)("p",{parentName:"li"},"Copy the ",(0,r.kt)("inlineCode",{parentName:"p"},"headers")," folder or make a link in your Catkin source workspace:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~/catkin_ws/src\nln -s ~/software/headers ./\n")),(0,r.kt)("p",{parentName:"li"},"Build the messages in your Catkin worksapce "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~/catkin_ws\ncatkin_make\n    ```\n\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Configure ROS environment for QTrobot")),(0,r.kt)("p",{parentName:"li"},"Connect to the QTrobot Wi-Fi hotspot. Then open a terminal on your PC and run the following command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ifconfig\n")),(0,r.kt)("p",{parentName:"li"},"Write down or copy IP address that is written of WiFi ",(0,r.kt)("strong",{parentName:"p"},"inet")," (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"inet 10.42.0.55"),")"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wifi0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500\n    inet 10.42.0.55  netmask 255.255.255.0  broadcast 10.42.0.255\n    inet6 fe80::c5ab:2083:f0c2:daa3  prefixlen 64  scopeid 0xfd<compat,link,site,host>\n    ether e4:b3:18:dd:87:31  (Ethernet)\n    RX packets 0  bytes 0 (0.0 B)\n    RX errors 0  dropped 0  overruns 0  frame 0\n    TX packets 0  bytes 0 (0.0 B)\n    TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0\n")),(0,r.kt)("p",{parentName:"li"},"Edit ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.bash_aliases")," on your laptop/PC and add following lines. Change ",(0,r.kt)("strong",{parentName:"p"},"ROS_IP")," to your IP from last step."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"source /opt/ros/noetic/setup.bash\nsource ~/catkin_ws/devel/setup.bash\n\n## QTrobot\nexport ROS_IP=<your PC IP address>\nexport ROS_MASTER_URI=http://192.168.100.1:11311    \n")),(0,r.kt)("p",{parentName:"li"},"To apply this configuration run this command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"source ~/.bash_aliases\n")))),(0,r.kt)("h3",{id:"step-2-test-your-setup"},"Step 2. Test your setup"),(0,r.kt)("p",null,"Last step is to connect to the QTrobot Wi-Fi hotspot and test your ROS environment.\nOne option is to list all ROS topics that are running on QTRobot:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"rostopic list\n")),(0,r.kt)("p",null,"If everything is working you should see output similar to this one."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/rosout    \n/qt_robot/audio/play\n/qt_robot/behavior/talkAudio\n/qt_robot/emotion/show\n/qt_robot/gesture/play\n/qt_robot/head_position/command\n/qt_robot/joints/state\n...\n")),(0,r.kt)("p",null,"or call some of the QTrobot ROS interfaces:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"rosservice call /qt_robot/speech/say \"message: 'Hello.'\"\n")),(0,r.kt)("p",null,"You will hear QTrobot say ",(0,r.kt)("inlineCode",{parentName:"p"},"Hello"),".")),(0,r.kt)(s.Z,{value:"SSH",mdxType:"TabItem"},(0,r.kt)("p",null,"Alternatively you can directly SSH to QTPC from your laptop to develop code on the QTrobot."),(0,r.kt)(i.Z,{defaultValue:"QTRP",values:[{label:"SSH to QTRP",value:"QTRP"},{label:"SSH to QTPC",value:"QTPC"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"QTRP",mdxType:"TabItem"},(0,r.kt)("p",null,"To ssh to QTRP, first connect your laptop to the QTrobot Wi-Fi hotspot and run the following command",(0,r.kt)("sup",{parentName:"p",id:"fnref-3"},(0,r.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3")),". You can alternatively run the following command from QTPC's terminal. For the password use ",(0,r.kt)("inlineCode",{parentName:"p"},"qtrobot"),".   "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ssh developer@192.168.100.1\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Notice")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"For some older version of QTrobot's you need to ssh with ",(0,r.kt)("inlineCode",{parentName:"p"},"qtrobot")," user instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"developer")," (i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"ssh qtrobot@192.168.100.1"),"). For the password use ",(0,r.kt)("inlineCode",{parentName:"p"},"qtrobot"),".")))),(0,r.kt)(s.Z,{value:"QTPC",mdxType:"TabItem"},(0,r.kt)("p",null,"To ssh to QTPC, first connect your laptop to the QTrobot Wi-Fi hotspot and run the following command",(0,r.kt)("sup",{parentName:"p",id:"fnref-3"},(0,r.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3")),". For the password use ",(0,r.kt)("inlineCode",{parentName:"p"},"qtrobot"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ssh qtrobot@192.168.100.2\n")),(0,r.kt)("p",null,"Alternatively you can ssh to QTPC via QTRP with the same command. "))))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"All done \ud83d\ude09")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Congratulation. You are all settled and ready to start programming with QTrobot. Now you can follow plenty of exciting ",(0,r.kt)("a",{parentName:"p",href:"/docs/tutorials/intro_ros"},"Tutorials"),". "))),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},"Only use the provided power supply with your QTrobot.",(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-3"},"Windows users can use Putty (",(0,r.kt)("a",{parentName:"li",href:"http://www.putty.org"},"www.putty.org"),")",(0,r.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")))))}f.isMDXComponent=!0},63970:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},assets:function(){return c},toc:function(){return d},default:function(){return u}});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),i=["components"],s={},l=void 0,p={unversionedId:"recent_qtrobots",id:"version-QTRD_v1/recent_qtrobots",title:"recent_qtrobots",description:"The following diagram demonstrates a common scenario where different devices (e.g. laptops) are connected to the QTrobot via it's Wi-Fi hotspot. The Wi-Fi of QTRP is setup to operate in AP/STA mode. That means the QTRP's Wi-Fi can be connected to a home router (as Wi-Fi client) and at the same time operates as hotspot (access point). To have access to the internet on all machines (as shown in the diagram), the Wi-Fi of QTRP should be connected to the home router. The internet from the home router, therefore is shared to all other machines (including QTPC) via QTRP. The green arrows shows the direction and how internet shared between QTRP, QTPC and any other devices connected to QTrobot hotspot.",source:"@site/versioned_docs/version-QTRD_v1/recent_qtrobots.md",sourceDirName:".",slug:"/recent_qtrobots",permalink:"/docs/v1/recent_qtrobots",tags:[],version:"QTRD_v1",frontMatter:{}},c={},d=[{value:"Step 1. Access QTRP via ssh",id:"step-1-access-qtrp-via-ssh",level:2},{value:"Step 2. configure the wpa_suplicant for wlan0",id:"step-2-configure-the-wpa_suplicant-for-wlan0",level:2},{value:"Step 3. Restart wpa_supplicant@wlan0 service and check the connectivity",id:"step-3-restart-wpa_supplicantwlan0-service-and-check-the-connectivity",level:2}],m={toc:d};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The following diagram demonstrates a common scenario where different devices (e.g. laptops) are connected to the QTrobot via it's Wi-Fi hotspot. The Wi-Fi of QTRP is setup to operate in AP/STA mode. That means the QTRP's Wi-Fi can be connected to a home router (as Wi-Fi client) and at the same time operates as hotspot (access point). To have access to the internet on all machines (as shown in the diagram), the Wi-Fi of QTRP should be connected to the home router. The internet from the home router, therefore is shared to all other machines (including QTPC) via QTRP. The green arrows shows the direction and how internet shared between QTRP, QTPC and any other devices connected to QTrobot hotspot."),(0,r.kt)("center",null,(0,r.kt)("img",{src:"/img/network2.png",width:"50%"})),(0,r.kt)("p",null,"Therefore, you need to connect the ",(0,r.kt)("strong",{parentName:"p"},"QTRP")," to your home router's Wi-Fi. To do that do the following steps: "),(0,r.kt)("h2",{id:"step-1-access-qtrp-via-ssh"},"Step 1. Access QTRP via ssh"),(0,r.kt)("p",null,"From the Ubuntu desktop of QTPC, open a terminal and access QTRP via ssh: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ssh developer@192.168.100.1\n# or ssh developer@QTRP\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"For the password use ",(0,r.kt)("inlineCode",{parentName:"em"},"qtrobot"),".")),(0,r.kt)("h2",{id:"step-2-configure-the-wpa_suplicant-for-wlan0"},"Step 2. configure the wpa_suplicant for wlan0"),(0,r.kt)("p",null,"Edit the ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/wpa_supplicant/wpa_supplicant-wlan0.conf")," file to update ",(0,r.kt)("inlineCode",{parentName:"p"},"ssid")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"psk")," accordingly."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd /etc/wpa_supplicant\nsudo nano wpa_supplicant-wlan0.conf\n")),(0,r.kt)("p",null,"set the ",(0,r.kt)("inlineCode",{parentName:"p"},"ssid")," (your router ssid) and ",(0,r.kt)("inlineCode",{parentName:"p"},"psk")," (your router passphrase) of your home router setup:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'country=LU\nctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev\nupdate_config=1\n\nnetwork={\n    ssid="<your router SSID>"\n    psk="<your router passphrase>"         \n}\n')),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Pay attention that the values for ",(0,r.kt)("em",{parentName:"strong"},"ssid")," and ",(0,r.kt)("em",{parentName:"strong"},"psk")," are wrapped with double quotation marks!")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Pay attention to the ",(0,r.kt)("inlineCode",{parentName:"strong"},"<TAB>")," before ",(0,r.kt)("em",{parentName:"strong"},"ssid")," and ",(0,r.kt)("em",{parentName:"strong"},"psk"),"!")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Do not create or change any other files related to wpa_supplicant or systemd network! this may break your QTrobot network setup!")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Ensure that you are modifying the ",(0,r.kt)("inlineCode",{parentName:"strong"},"wpa_supplicant-wlan0.conf")," file and NOT ",(0,r.kt)("inlineCode",{parentName:"strong"},"wpa_supplicant.conf")))))),(0,r.kt)("h2",{id:"step-3-restart-wpa_supplicantwlan0-service-and-check-the-connectivity"},"Step 3. Restart wpa_supplicant@wlan0 service and check the connectivity"),(0,r.kt)("p",null,"from the ssh terminal of QTRP type: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl restart wpa_supplicant@wlan0.service\n")),(0,r.kt)("p",null,"Alternatively, you can restart your QTrobot. After following the above steps, your QTrobot should be connected to your home/office network and have access to the Internet (i.e. you should be able to ping ",(0,r.kt)("inlineCode",{parentName:"p"},"www.google.com")," for example). "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ping www.google.com\n")),(0,r.kt)("p",null,"You are all settled! QTRP gets internet connection from your router and will automatically share it with QTPC and any other devices connected to QTrobot Wi-FI hotspot.         "),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Troubleshooting")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"Check if QTrobot is connected to your home/office network. Run the following command on QTRP via ssh:\n",(0,r.kt)("inlineCode",{parentName:"li"},"sudo wpa_cli -i wlan0 status"),". You should see ",(0,r.kt)("inlineCode",{parentName:"li"},"wpa_state=COMPLETED")," and the correct ",(0,r.kt)("inlineCode",{parentName:"li"},"ssid")," is reported. "),(0,r.kt)("li",{parentName:"ul"},"Double check that you have entered correct values for ",(0,r.kt)("inlineCode",{parentName:"li"},"ssid")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"psk")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"/etc/wpa_supplicant/wpa_supplicant-wlan0.conf"),"!"),(0,r.kt)("li",{parentName:"ul"},"See the status of the ",(0,r.kt)("em",{parentName:"li"},"wpa_supplicant@wlan0 service")," for any typo or misformatted lines in ",(0,r.kt)("inlineCode",{parentName:"li"},"/etc/wpa_supplicant/wpa_supplicant-wlan0.conf"),". To do that, run the following command on QTRP:",(0,r.kt)("inlineCode",{parentName:"li"},"sudo systemctl status wpa_supplicant@wlan0.service")," this should shows that the service is running and ",(0,r.kt)("strong",{parentName:"li"},"active"),". If not, follow the error messages reported by the service. "),(0,r.kt)("li",{parentName:"ul"},"If you are connected to your home/office network (by checking the previous command) but still does not have access to the internet (e.g. cannot ping google), please double check that your home/office network providing any internet connection! ")))))}u.isMDXComponent=!0}}]);