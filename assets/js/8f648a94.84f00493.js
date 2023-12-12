"use strict";(self.webpackChunkqtrobot_documentation=self.webpackChunkqtrobot_documentation||[]).push([[363],{207:(e,s,o)=>{o.r(s),o.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>b,frontMatter:()=>n,metadata:()=>c,toc:()=>h});var t=o(5893),i=o(1151),r=o(9656);const n={id:"studio_ros",title:"Using ROS blocks",hide_table_of_contents:!0},a=void 0,c={id:"tutorials/graphical/studio_ros",title:"Using ROS blocks",description:"signalcellularalt &nbsp;Level:&nbsp; Advanced",source:"@site/versioned_docs/version-QTRD_v1/tutorials/graphical/studio_ros.mdx",sourceDirName:"tutorials/graphical",slug:"/tutorials/graphical/studio_ros",permalink:"/docs/v1/tutorials/graphical/studio_ros",draft:!1,unlisted:!1,tags:[],version:"QTRD_v1",frontMatter:{id:"studio_ros",title:"Using ROS blocks",hide_table_of_contents:!0},sidebar:"graphical_tutorial_sidebar",previous:{title:"QTrobot Studio's data collection and analytics",permalink:"/docs/v1/tutorials/graphical/studio_reporting"},next:{title:"Human facial expression detection using ROS blocks",permalink:"/docs/v1/tutorials/graphical/studio_emotion"}},l={},h=[{value:"Why using ROS with blockly?",id:"why-using-ros-with-blockly",level:2},{value:"LuxAI blocks for ROS",id:"luxai-blocks-for-ros",level:2},{value:"Message object blocks",id:"message-object-blocks",level:3},{value:"ROS Publisher, Subscriber and Service blocks",id:"ros-publisher-subscriber-and-service-blocks",level:2}];function d(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.admonition,{title:"Overview",type:"info",children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(r.Z,{children:"signal_cellular_alt"})," \xa0",(0,t.jsx)(s.strong,{children:"Level:"}),"\xa0 ",(0,t.jsx)(s.em,{children:"Advanced"}),"\n",(0,t.jsx)("br",{})," ",(0,t.jsx)(r.Z,{children:" track_changes "})," \xa0",(0,t.jsx)(s.strong,{children:"Goal:"}),"\xa0 ",(0,t.jsx)(s.em,{children:"learn how to program using ROS blocks in QTrobot studio"}),"\n",(0,t.jsx)("br",{})," ",(0,t.jsx)(r.Z,{children:" task_alt "})," \xa0",(0,t.jsx)(s.strong,{children:"Requirements:"})]}),(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\xa0\xa0",(0,t.jsx)(s.a,{href:"/docs/intro_graphical",children:"Quick start with graphical programming"})]}),"\n",(0,t.jsxs)(s.li,{children:["\xa0\xa0",(0,t.jsx)(s.a,{href:"/docs/tutorials/intro_ros",children:"Basic understanding of ROS framework"})]}),"\n"]})]}),"\n",(0,t.jsx)(s.h2,{id:"why-using-ros-with-blockly",children:"Why using ROS with blockly?"}),"\n",(0,t.jsx)(s.p,{children:"ROS provides a rich sets of software components and libraries which are accessible via ROS messages or service calls. Other programs (e.g. written in Python or C++) can easily make use of functionality provided by these third-party software components. When using blockly (e.g. QTrobot Studio) to program a robot, we also want to be part of this ecosystem and benefits from its limitless functionalities. QTrobot dedicated blocks already leverage ROS to communicate with the robot via messages and services for playing gestures, speaking or interact with the user via tablet. In fact, hundreds of sophisticated and interactive applications (games) have been developed using these blocks. However, we want to have more generic way to"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"benefits from QTrobot full functionalities such as human gesture or emotion recognition"}),"\n",(0,t.jsx)(s.li,{children:"and interact with other custom ROS software written in other programming languages."}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Imagine we want to implement a voice interaction application using blockly which needs a sophisticated speech recognition (e.g. Google speech) or Amazon chatbot AI. In this case, we need to interact with the third-party ROS software from our blockly application."}),"\n",(0,t.jsx)(s.h2,{id:"luxai-blocks-for-ros",children:"LuxAI blocks for ROS"}),"\n",(0,t.jsx)(s.p,{children:"QTrobot studio offers very flexible and powerful blocks to handle complex ROS messages and interact with other publishers, subscribers and services. These blocks enable developers to extend their application beyond the capabilities of blockly and add limitless functionalities to their programs."}),"\n",(0,t.jsx)(s.h3,{id:"message-object-blocks",children:"Message object blocks"}),"\n",(0,t.jsx)(s.p,{children:"To provide a generic way to interact with ROS software, we need to handle every type of ROS messages and parameters of services. There are two different blocks in QTrobot studio: one creates generic message object and the other extracts field values from a message object."}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.em,{children:(0,t.jsx)(s.strong,{children:"Create object"})})," block uses key-value pairs to construct ROS message and service parameters. Key is simply the name of an item in a message or parameter of a service. Value can be simple string, number, list or even another object. Following examples show how to use QTrobot Studio Create object block to represent some ROS messages and service parameters."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"create object",src:o(2206).Z+"",width:"674",height:"170"})}),"\n",(0,t.jsxs)(s.p,{children:["To extract specific value from an object, we can use ",(0,t.jsx)(s.em,{children:(0,t.jsx)(s.strong,{children:"Get element"})})," block. It extracts the value of a given key. Let's take a look at the following examples."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"get element",src:o(6078).Z+"",width:"632",height:"213"})}),"\n",(0,t.jsx)(s.p,{children:"As you can see in the above examples, to get the value of an item, we simply need to specify its key in our Get element block."}),"\n",(0,t.jsx)(s.h2,{id:"ros-publisher-subscriber-and-service-blocks",children:"ROS Publisher, Subscriber and Service blocks"}),"\n",(0,t.jsxs)(s.p,{children:["Now that we know how to create ROS messages in Blockly, we can use ",(0,t.jsx)(s.strong,{children:"ROS Publisher"})," and ",(0,t.jsx)(s.strong,{children:"ROS Subscriber"})," blocks to respectively publish and receive ROS messages. Let's see first how we can publish a message using ",(0,t.jsx)(s.strong,{children:"ROS Publisher"})," block via some examples. Imagine we want to publish 'Hello QT!' message to /qt_robot/speech/say topic. We also know that the required message type is std_msgs/String. Therefore, we can use the ROS Publisher block as follows:"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"block publish",src:o(1448).Z+"",width:"675",height:"152"})}),"\n",(0,t.jsx)(s.admonition,{title:"Note",type:"note",children:(0,t.jsxs)(s.p,{children:["The aim of above example is to show how we can use ROS Publisher block to publish a simple string message. However for QTrobot speech interface, you need to use the dedicated QTrobot ",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"Show Says Act"})})," block!"]})}),"\n",(0,t.jsxs)(s.p,{children:["Let's see how we can use our ",(0,t.jsx)(s.strong,{children:"ROS Subscriber"})," blocks to read a specific robots' joint position:"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"block subscribe",src:o(5393).Z+"",width:"624",height:"201"})}),"\n",(0,t.jsxs)(s.p,{children:["The following example shows how we can configure QTrobot to speak slower (e.g. 50% of its normal speed) with using ",(0,t.jsx)(s.strong,{children:"ROS Service"})," call block."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"block service",src:o(1477).Z+"",width:"678",height:"174"})})]})}function b(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1448:(e,s,o)=>{o.d(s,{Z:()=>t});const t=o.p+"assets/images/ros_block_pub-eea768fe3fff7336684c9a47bf3968f0.png"},1477:(e,s,o)=>{o.d(s,{Z:()=>t});const t=o.p+"assets/images/ros_block_service-19c890e164ef6dbe17dc95cdcf6633f5.png"},5393:(e,s,o)=>{o.d(s,{Z:()=>t});const t=o.p+"assets/images/ros_block_sub-12f846b2a362c3965f999d60727a10bd.png"},2206:(e,s,o)=>{o.d(s,{Z:()=>t});const t=o.p+"assets/images/ros_create_obj-7d33802c2a950d78c212fff17a095043.png"},6078:(e,s,o)=>{o.d(s,{Z:()=>t});const t=o.p+"assets/images/ros_get_key-f50a1a52ecabf4f56c9c1c550ba9fda9.png"}}]);