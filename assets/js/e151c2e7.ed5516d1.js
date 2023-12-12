"use strict";(self.webpackChunkqtrobot_documentation=self.webpackChunkqtrobot_documentation||[]).push([[9741],{4431:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var n=o(5893),r=o(1151),s=o(9656);const i={id:"js_ros_interfaces",title:"Using QTrobot with JavaScript",hide_table_of_contents:!0},c=void 0,a={id:"tutorials/javascript/js_ros_interfaces",title:"Using QTrobot with JavaScript",description:"signalcellularalt &nbsp;Level:&nbsp; Intermediate",source:"@site/docs/tutorials/javascript/js_ros_interfaces.mdx",sourceDirName:"tutorials/javascript",slug:"/tutorials/javascript/js_ros_interfaces",permalink:"/docs/tutorials/javascript/js_ros_interfaces",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"js_ros_interfaces",title:"Using QTrobot with JavaScript",hide_table_of_contents:!0},sidebar:"code_tutorials_sidebar",previous:{title:"ROS motor controller for QTrobot",permalink:"/docs/tutorials/cpp/cpp_motor_controller"}},l={},d=[{value:"Setting up rosbridge_server for QTrobot",id:"setting-up-rosbridge_server-for-qtrobot",level:2},{value:"Download qtrobot.js and its dependencies",id:"download-qtrobotjs-and-its-dependencies",level:2},{value:"Write a simple code using qtrobot.js",id:"write-a-simple-code-using-qtrobotjs",level:2},{value:"Run and check the code",id:"run-and-check-the-code",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.admonition,{title:"Overview",type:"info",children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(s.Z,{children:"signal_cellular_alt"})," \xa0",(0,n.jsx)(t.strong,{children:"Level:"}),"\xa0 ",(0,n.jsx)(t.em,{children:"Intermediate"}),"\n",(0,n.jsx)("br",{})," ",(0,n.jsx)(s.Z,{children:" track_changes "})," \xa0",(0,n.jsx)(t.strong,{children:"Goal:"}),"\xa0 ",(0,n.jsx)(t.em,{children:"learn how to access QTrobot interfaces such as speech, emotion, gesture, etc. in JavaScript and HTML"}),"\n",(0,n.jsx)("br",{})," ",(0,n.jsx)(s.Z,{children:" task_alt "})," \xa0",(0,n.jsx)(t.strong,{children:"Requirements:"})]}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\xa0\xa0",(0,n.jsx)(t.a,{href:"/docs/intro_code",children:"Quick start with coding on QTrobot"})]}),"\n",(0,n.jsx)(t.li,{children:"\xa0\xa0Good knowledge of JavaScript and HTML"}),"\n"]}),(0,n.jsxs)(t.p,{children:[(0,n.jsx)(s.Z,{children:"code"})," \xa0",(0,n.jsx)(t.strong,{children:"Code:"}),"\xa0 ",(0,n.jsx)(t.a,{href:"https://github.com/luxai-qtrobot/software/blob/master/sdk/jscript/examples/simple/index.html",children:"view source"})]})]}),"\n",(0,n.jsxs)(t.p,{children:["In this tutorial we will learn about how to access ",(0,n.jsx)(t.a,{href:"/docs/api_ros#list-of-available-interfaces",children:"QTrobot interfaces"})," such as speech and audio interface from a JavaScript code. There are different scenarios in which you may need to access ROS topics and services from a web browser-based application. In this tutorial we will show you how to setup Rosbridge to communicate with other ROS nodes in JavaScript. We also explain how easily you can access QTrobot interfaces such as speech and motor control from HTML using JavaScript."]}),"\n",(0,n.jsxs)(t.p,{children:["Our JavaScript code will communicates with QTrobot via Rosbridge suite. Rosbridge is a meta package which connect ROS nodes to the applications outside ROS networks by providing  JSON APIs to ROS functionality. There are a variety of front ends that interface with Rosbridge , including a WebSocket server for web browsers (i.e. rosbridge_server). However, for the sake of simplicity and to facilitate code development, we have developed the ",(0,n.jsx)(t.strong,{children:"qtrobot.js"})," ",(0,n.jsx)(t.a,{href:"/docs/api_js",children:"SDK for QTrobot"}),". It is a wrapper over roslibjs which facilitate establishing connection with QTrobot rosbridge and expose simple APIs to interact with the robot."]}),"\n",(0,n.jsx)(t.h2,{id:"setting-up-rosbridge_server-for-qtrobot",children:"Setting up rosbridge_server for QTrobot"}),"\n",(0,n.jsxs)(t.p,{children:["In most cases, a rosbridge_server is already running on your QTrobot. However, for many recent versions of the QTrobot, the rosbridge_server is configured with SSL and dedicated authentication mechanism. However, for the sake of the simplicity, we configure and launch a new instance of the rosbridge_server on ",(0,n.jsx)(t.strong,{children:"QTPC"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"Open a terminal on QTPC and install the rosbridge-suite package:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"sudo apt install ros-`rosversion -d`-rosbridge-suite\n"})}),"\n",(0,n.jsxs)(t.p,{children:["To avoid conflict with any running Rosbridge, we create a new launch file and overwrite some parameters. Create a launch file in QTPC home folder (",(0,n.jsx)(t.code,{children:"~/rosbridge_websocket_qtpc.launch"}),") with the following content:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-xml",children:'<launch> \n   <include ns="qtpc" file="$(find rosbridge_server)/launch/rosbridge_websocket.launch"> \n      <arg name="port" value="9091" /> \n   </include> \n</launch>\n'})}),"\n",(0,n.jsxs)(t.p,{children:["Launch the ",(0,n.jsx)(t.code,{children:"rosbridge_websocket_qtpc.launch"})," and check the setup:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"roslaunch ~/rosbridge_websocket_qtpc.launch\n"})}),"\n",(0,n.jsx)(t.p,{children:"You should see similar messages printed out as the following output after launching our instance of Rosbridge:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"...\n2021-08-26 16:05:06+0200 [-] [INFO] [1629986706.721006]: Rosbridge WebSocket server started at ws://0.0.0.0:9091\n"})}),"\n",(0,n.jsx)(t.h2,{id:"download-qtrobotjs-and-its-dependencies",children:"Download qtrobot.js and its dependencies"}),"\n",(0,n.jsxs)(t.p,{children:["To keep our code clean, lets create some folders and download the required ",(0,n.jsx)(t.em,{children:"js"})," files:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"mkdir -p ~/tutorial_qt_jscript/js\ncd ~/tutorial_qt_jscript/js\nwget https://raw.githubusercontent.com/luxai-qtrobot/software/master/sdk/jscript/qtrobot-1.0.min.js\nwget https://raw.githubusercontent.com/luxai-qtrobot/software/master/sdk/jscript/roslib.min.js\nwget https://raw.githubusercontent.com/luxai-qtrobot/software/master/sdk/jscript/eventemitter2.min.js\n"})}),"\n",(0,n.jsx)(t.h2,{id:"write-a-simple-code-using-qtrobotjs",children:"Write a simple code using qtrobot.js"}),"\n",(0,n.jsxs)(t.p,{children:["Now we have our qtrobot.js in place, lets write a simple code to communicate with QTrobot interfaces. Create a html file (",(0,n.jsx)(t.code,{children:"index.html"}),") in our project directory:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"touch ~/tutorial_qt_jscript/index.html\n"})}),"\n",(0,n.jsx)(t.p,{children:"and add the following content:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-html",children:'<!DOCTYPE html>\n<html lang="en">\n<head>    \n    <meta charset="UTF-8">\n    <script src="js/roslib.min.js"><\/script>\n    <script src="js/eventemitter2.min.js"><\/script>\n    <script src="js/qtrobot-1.0.min.js"><\/script>\n</head>\n\n<body>\n<script>    \nvar url = prompt("Please enter QTrobot rosbridge url:", "ws://192.168.100.2:9091");\nurl = (url == null) ? \'ws://127.0.0.1:9091\' : url;\nvar qtrobot = null;\ndocument.addEventListener(\'DOMContentLoaded\', function () {\n    console.log("connecting to QTrobot (please wait...)");\n    qtrobot = new QTrobot({\n        url : url,\n        connection: function(){            \n            console.log("connected to " + url);\n            qtrobot.talk_text(\'Hello! my name is QT!\', function(){\n                qtrobot.show_emotion(\'QT/happy\');\n            });        \n        },\n        error: function(error){\n            console.log(error);\n        },\n        close: function(){\n            console.log("disconnected.");\n        }\n    }); //end of qtrobot\n\n}); // end of DOMContentLoaded\n<\/script>\n\n<p style="text-align: center;"> Open your browser console to see the output!</p>\n</body>\n</html>\n'})}),"\n",(0,n.jsxs)(t.p,{children:["Before running the code, let's take a look at what we have wrote. We created an html file and added our JavaScript code to be executed on html document onload event. Our JavaScript code first asks us to enter the URL of our Rosbridge instance. Because we are running it on QTPC, we can confirm its default value which is ",(0,n.jsx)(t.code,{children:"ws://192.168.100.2:9091"}),". Notice that ",(0,n.jsx)(t.code,{children:"192.168.100.2"})," is the IP of QTPC and '9091' is the port number which we had already set it up for Rosbridge in our launch file."]}),"\n",(0,n.jsxs)(t.p,{children:["Then we created an instance of \u2018QTrobot\u2019 object with the correct URL of our rosbridge websocket server. The QTrobot instance connects to the given URL and upon success the \u2018connection\u2019 callback is called. The qtrobot.js library automatically tries to reconnect to the server if for any reason the connection goes down. After\nconnecting to the QTrobot rosbridge_server, we called ",(0,n.jsx)(t.code,{children:"talk_text"}),' method which asks QTrobot to say "Hello!...". After QTrobot finishes playing our message, it shows the happy emotion. This is because we called ',(0,n.jsx)(t.code,{children:"show_emotion"})," method in the callback of ",(0,n.jsx)(t.code,{children:"talk_text"})," method. Thus, the ",(0,n.jsx)(t.code,{children:"show_emotion"})," method will be executed after finishing the ",(0,n.jsx)(t.code,{children:"talk_text"})," method."]}),"\n",(0,n.jsx)(t.h2,{id:"run-and-check-the-code",children:"Run and check the code"}),"\n",(0,n.jsxs)(t.p,{children:["To run our code, simply open the ",(0,n.jsx)(t.code,{children:"index.html"}),' file in a browser on QTPC. You should hear that QTrobot says "Hello!..." and then shows the happy face. To see the output of log messages in console, open the browser console.']}),"\n",(0,n.jsx)(t.admonition,{title:"Tip",type:"tip",children:(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["In Google chrome you can press ",(0,n.jsx)(t.code,{children:"CTRL+SHIFT+C"})," to open the developer console and navigate to console message window."]}),"\n",(0,n.jsxs)(t.li,{children:["In Firefox, simply right-click on the browser content and choose ",(0,n.jsx)(t.em,{children:"Inspect"})," or press ",(0,n.jsx)(t.code,{children:"Q"}),". Then navigate to console message window."]}),"\n"]})}),"\n",(0,n.jsxs)(t.p,{children:["You can find more complex examples (e.g. using Vue.js) on ",(0,n.jsx)(t.a,{href:"https://github.com/luxai-qtrobot/software/tree/master/sdk/jscript/examples/vue.js",children:"QTrobot JavaScript repository"}),"."]})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}}}]);