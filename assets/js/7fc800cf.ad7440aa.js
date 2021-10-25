"use strict";(self.webpackChunkqtrobot_documentation=self.webpackChunkqtrobot_documentation||[]).push([[8329],{52693:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return m},toc:function(){return d},default:function(){return u}});var o=a(87462),n=a(63366),i=(a(67294),a(3905)),s=a(18477),r=a(14702),l=["components"],p={id:"intro_ros",title:"Intoduction to ROS",hide_table_of_contents:!0},c=void 0,m={unversionedId:"tutorials/intro_ros",id:"tutorials/intro_ros",isDocsHomePage:!1,title:"Intoduction to ROS",description:"signalcellularalt &nbsp;Level:&nbsp; Basic",source:"@site/docs/tutorials/ros_basics.md",sourceDirName:"tutorials",slug:"/tutorials/intro_ros",permalink:"/docs/tutorials/intro_ros",tags:[],version:"current",frontMatter:{id:"intro_ros",title:"Intoduction to ROS",hide_table_of_contents:!0},sidebar:"code_tutorials_sidebar",next:{title:"Create a ROS python project",permalink:"/docs/tutorials/python/python_ros_project"}},d=[{value:"What is ROS?",id:"what-is-ros",children:[],level:2},{value:"Topics and Messages",id:"topics-and-messages",children:[],level:2},{value:"Publishers and Subscribers",id:"publishers-and-subscribers",children:[],level:2},{value:"Service calls",id:"service-calls",children:[],level:2},{value:"QTrobot ROS Topics and Services",id:"qtrobot-ros-topics-and-services",children:[],level:2},{value:"QTrobot speech interface",id:"qtrobot-speech-interface",children:[],level:2},{value:"QTrobot talk text interface",id:"qtrobot-talk-text-interface",children:[],level:2},{value:"QTrobot emotion interface",id:"qtrobot-emotion-interface",children:[],level:2},{value:"QTrobot gesture interface",id:"qtrobot-gesture-interface",children:[],level:2},{value:"QTrobot audio interface",id:"qtrobot-audio-interface",children:[],level:2}],h={toc:d};function u(e){var t=e.components,a=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,o.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Overview")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)(s.Z,{mdxType:"Icon"},"signal_cellular_alt")," ",(0,i.kt)(r.Z,{mdxType:"Markdown"},"\xa0**Level:**\xa0 *Basic*"),(0,i.kt)("br",null)," ",(0,i.kt)(s.Z,{mdxType:"Icon"}," track_changes ")," ",(0,i.kt)(r.Z,{mdxType:"Markdown"},"\xa0**Goal:**\xa0 *Understanding the general concept of ROS framework*"))),(0,i.kt)("h2",{id:"what-is-ros"},"What is ROS?"),(0,i.kt)("p",null,"If you ever had any chance to develop code for robot or taking part in a robotic team, you have definitely heard of ",(0,i.kt)("a",{parentName:"p",href:"https://www.ros.org/about-ros/"},"ROS"),". The Robot Operating System (ROS) is the most used and flexible framework for writing robot software. It is a collection of tools, libraries, and best practices to simplify the task of creating complex and robust robot application. In a nutshell, ROS uses distributed publish and subscribe architecture where different software components communicate with each other via messages. Distributed architecture means that your program which is running on a machine (e.g. your PC or a Tablet) can communicate with and commands a second program running on another machine (e.g. on the robot). Taking a deep dive into ROS software architecture is beyond the objective of this blog. Nevertheless I will explain its main concepts using simpler words and examples in the following sections."),(0,i.kt)("h2",{id:"topics-and-messages"},"Topics and Messages"),(0,i.kt)("p",null,"You may still recall online chatrooms from some late 90s chat programs. People, who were interested in specific ",(0,i.kt)("strong",{parentName:"p"},"topic")," used to show up in a relevant chat room and talk with each other by exchanging ",(0,i.kt)("strong",{parentName:"p"},"messages"),". ROS topics and messages work in a similar manner. A software program can show interest in a specific topic by subscribing to its channel or advertising a channel on a new topic. Via these channels, programs then can communicate by exchanging messages."),(0,i.kt)("center",null,(0,i.kt)("img",{src:"/img/ros_pub_sub.png",width:"60%"})),(0,i.kt)("p",null,"To understand each other, people must speak the same language in a common chatroom. Likewise, ROS programs must also know the ",(0,i.kt)("strong",{parentName:"p"},"type")," of the message used in specific topic. For example, QTrobot advertises a topic called ",(0,i.kt)("inlineCode",{parentName:"p"},"/qt_robot/speech/say")," which uses message of type ",(0,i.kt)("inlineCode",{parentName:"p"},"std_msgs/String"),". It is very common and standard message type in ROS which represents simple String (text) message. Messages can have more complex type which composed of different simpler messages. For example, ",(0,i.kt)("inlineCode",{parentName:"p"},"/qt_nuitrack_app/faces")," topic uses a custom message of type ",(0,i.kt)("inlineCode",{parentName:"p"},"qt_nuitrack_app/FaceInfo"),". This message represents a collection of human facial features such as emotions (e.g. happy, angry, surprised), the person estimated age, eyes gazing angles, etc. You may want to take a look at the ",(0,i.kt)("a",{parentName:"p",href:"/docs/api_ros#list-of-available-interfaces"},"List of available topics")," which are advertised by QTrobot. "),(0,i.kt)("h2",{id:"publishers-and-subscribers"},"Publishers and Subscribers"),(0,i.kt)("p",null,"Consider again our chatroom example. The person who is writing a message is the ",(0,i.kt)("strong",{parentName:"p"},"publisher")," and those who are reading the message are ",(0,i.kt)("strong",{parentName:"p"},"subscribers"),". One or multiple publishers can send (publish) messages on the same topic. Similarly multiple subscribers can receive messages from the same topic."),(0,i.kt)("h2",{id:"service-calls"},"Service calls"),(0,i.kt)("p",null,"The publish-subscribe model that we have explained is a very flexible communication paradigm. However, it is a on-way communication: one talks and the others listen. Indeed, it is possible to establish two way communication by letting each entity becomes publisher and subscriber at the same time, but as you can imagine this may get  chaotic (especially when everyone wants to talk simultaneously) and become tedious to be synchronized with each other. We need something like request-response model: one requests something from an entity and wait until the other replies.\nLet's consider pizza ordering scenario: there is a restaurant which provides pizza delivery ",(0,i.kt)("strong",{parentName:"p"},"service"),". the ",(0,i.kt)("strong",{parentName:"p"},"name")," of this restaurant is Pizzeria. We make a ",(0,i.kt)("strong",{parentName:"p"},"call")," and request for a pizza. If the restaurant offers only one type of pizza, then we do not need to provide them any more information, but in most cases we need to let them know at least which ",(0,i.kt)("strong",{parentName:"p"},"type")," of pizza we would like. We may even want to further customize our order by choosing among different topping options (",(0,i.kt)("strong",{parentName:"p"},"parameters"),") they offer. Then all we need is to wait until the restaurant send us our pizza."),(0,i.kt)("p",null,"ROS services works in similar fashion. A software program provides and advertise specific type of service along with required parameters. Others programs can call that service and get the response. For example, QTrobot provides a service called ",(0,i.kt)("inlineCode",{parentName:"p"},"/qt_robot/speech/config")," to configure the robot speaking language. The type of this service is ",(0,i.kt)("inlineCode",{parentName:"p"},"qt_robot_interface/speech_config")," and has some parameters such as ",(0,i.kt)("inlineCode",{parentName:"p"},"language")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"speed"),". Another programs can call this service to change the robot's speaking language and talking speed at the run time. "),(0,i.kt)("h2",{id:"qtrobot-ros-topics-and-services"},"QTrobot ROS Topics and Services"),(0,i.kt)("p",null,"To get the list off all Topics or Services you can run one of this commands:"),(0,i.kt)("p",null,"Topics:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"rostopic list\n")),(0,i.kt)("p",null,"Services:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"rosservice list\n")),(0,i.kt)("h2",{id:"qtrobot-speech-interface"},"QTrobot speech interface"),(0,i.kt)("p",null,"Let's start with QTrobot Speech interface. If you do ",(0,i.kt)("inlineCode",{parentName:"p"},"rostopic list")," you will see that one of the topics is ",(0,i.kt)("inlineCode",{parentName:"p"},"/qt_robot/speech/say"),". If we publish to that topic QTrobot will say the text message that we wrote. Open the terminal and try this:"),(0,i.kt)("p",null,"Publisher:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"rostopic pub /qt_robot/speech/say std_msgs/String \"data: 'Hello I am QT'\"\n")),(0,i.kt)("p",null,"Service call:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"rosservice call /qt_robot/speech/say \"message: 'Hello I am QT'\"\n")),(0,i.kt)("h2",{id:"qtrobot-talk-text-interface"},"QTrobot talk text interface"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"/qt_robot/behavior/talkText")," interface is similar to ",(0,i.kt)("inlineCode",{parentName:"p"},"/qt_robot/speech/say")," interface with the only different that the talkText interface asks QTrobot to move his lips while reading the text messages. To try it, just add the following lines to our code and look at the QTrobot's face:"),(0,i.kt)("p",null,"Publisher:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"rostopic pub /qt_robot/behavior/talkText std_msgs/String \"data: 'Hello I am QT'\"\n")),(0,i.kt)("p",null,"Service call:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"rosservice call /qt_robot/behavior/talkText \"message: 'Hello I am QT'\"\n")),(0,i.kt)("h2",{id:"qtrobot-emotion-interface"},"QTrobot emotion interface"),(0,i.kt)("p",null,"Now lets show an emotion on QTrobot face. QTrobot comes with plenty of predefined emotion animations. You can find the complete list of the available emotions either using the ",(0,i.kt)("em",{parentName:"p"},"QTrobot Educator app")," or by looking into the ",(0,i.kt)("inlineCode",{parentName:"p"},"~/robot/data/emotions")," folder in ",(0,i.kt)("strong",{parentName:"p"},"QTRP"),".  "),(0,i.kt)("p",null,"Publisher:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"rostopic pub /qt_robot/emotion/show std_msgs/String \"data: 'QT/happy'\"\n")),(0,i.kt)("p",null,"Service call:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"rosservice call /qt_robot/emotion/show \"name: 'QT/happy'\"\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"As it shown in the above example, you should ",(0,i.kt)("strong",{parentName:"p"},"not")," give the emotion's file extension (",(0,i.kt)("inlineCode",{parentName:"p"},".avi"),") to the interface! "))),(0,i.kt)("h2",{id:"qtrobot-gesture-interface"},"QTrobot gesture interface"),(0,i.kt)("p",null,"Now lets play a gesture with QTrobot. QTrobot comes with plenty of predefined gestures. You can find the complete list of the available gestures either using the ",(0,i.kt)("em",{parentName:"p"},"QTrobot Educator app")," or by looking into the ",(0,i.kt)("inlineCode",{parentName:"p"},"~/robot/data/gestures")," folder in ",(0,i.kt)("strong",{parentName:"p"},"QTRP"),".  "),(0,i.kt)("p",null,"Publisher:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"rostopic pub /qt_robot/gesture/play std_msgs/String \"data: 'QT/happy'\"\n")),(0,i.kt)("p",null,"Service call:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"rosservice call /qt_robot/gesture/play \"name: 'QT/happy'\nspeed: 0.0\"\n")),(0,i.kt)("p",null,"rosservice call /qt_robot/gesture/play \"name: ''\nspeed: 0.0\""),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"As it shown in the above example, you should ",(0,i.kt)("strong",{parentName:"p"},"not")," give the gestures's file extension (",(0,i.kt)("inlineCode",{parentName:"p"},".xml"),") to the interface! "))),(0,i.kt)("h2",{id:"qtrobot-audio-interface"},"QTrobot audio interface"),(0,i.kt)("p",null,"Now lets play an audio file on QTrobot. QTrobot comes with some audio examples. You can find the complete list of the available audios either using the ",(0,i.kt)("em",{parentName:"p"},"QTrobot Educator app")," or by looking into the ",(0,i.kt)("inlineCode",{parentName:"p"},"~/robot/data/audios")," folder in ",(0,i.kt)("strong",{parentName:"p"},"QTRP"),".  QTrobot can play both audio ",(0,i.kt)("em",{parentName:"p"},"wave")," and ",(0,i.kt)("em",{parentName:"p"},"mp3")," files. "),(0,i.kt)("p",null,"Publisher:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"rostopic pub /qt_robot/audio/play std_msgs/String \"data: 'QT/Komiku_Glouglou'\"\n")),(0,i.kt)("p",null,"Service call:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"rosservice call /qt_robot/audio/play \"filename: 'QT/Komiku_Glouglou'\nfilepath: ''\"\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"As it shown in the above example, you do not need to give the audio's file extension (",(0,i.kt)("inlineCode",{parentName:"p"},".wav")," or ",(0,i.kt)("inlineCode",{parentName:"p"},".mp3"),") to the interface! "))))}u.isMDXComponent=!0}}]);