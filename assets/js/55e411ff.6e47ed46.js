"use strict";(self.webpackChunkqtrobot_documentation=self.webpackChunkqtrobot_documentation||[]).push([[3129],{26819:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return d},assets:function(){return u},toc:function(){return m},default:function(){return b}});var o=a(87462),s=a(63366),i=(a(67294),a(3905)),n=a(55381),r=a(14702),l=["components"],c={id:"studio_ros",title:"Using ROS blocks",hide_table_of_contents:!0},p=void 0,d={unversionedId:"tutorials/graphical/studio_ros",id:"tutorials/graphical/studio_ros",title:"Using ROS blocks",description:"signalcellularalt &nbsp;Level:&nbsp; Advanced",source:"@site/docs/tutorials/graphical/studio_ros.md",sourceDirName:"tutorials/graphical",slug:"/tutorials/graphical/studio_ros",permalink:"/docs/tutorials/graphical/studio_ros",tags:[],version:"current",frontMatter:{id:"studio_ros",title:"Using ROS blocks",hide_table_of_contents:!0},sidebar:"graphical_tutorial_sidebar",previous:{title:"QTrobot Studio's data collection and analytics",permalink:"/docs/tutorials/graphical/studio_reporting"},next:{title:"Human facial expression detection using ROS blocks",permalink:"/docs/tutorials/graphical/studio_emotion"}},u={},m=[{value:"Why using ROS with blockly?",id:"why-using-ros-with-blockly",level:2},{value:"LuxAI blocks for ROS",id:"luxai-blocks-for-ros",level:2},{value:"Message object blocks",id:"message-object-blocks",level:3},{value:"ROS Publisher, Subscriber and Service blocks",id:"ros-publisher-subscriber-and-service-blocks",level:2}],h={toc:m};function b(e){var t=e.components,c=(0,s.Z)(e,l);return(0,i.kt)("wrapper",(0,o.Z)({},h,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Overview")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)(n.Z,{mdxType:"Icon"},"signal_cellular_alt")," ",(0,i.kt)(r.Z,{mdxType:"Markdown"},"\xa0**Level:**\xa0 *Advanced*"),(0,i.kt)("br",null)," ",(0,i.kt)(n.Z,{mdxType:"Icon"}," track_changes ")," ",(0,i.kt)(r.Z,{mdxType:"Markdown"},"\xa0**Goal:**\xa0 *learn how to program using ROS blocks in QTrobot studio*"),(0,i.kt)("br",null)," ",(0,i.kt)(n.Z,{mdxType:"Icon"}," task_alt ")," ",(0,i.kt)(r.Z,{mdxType:"Markdown"},"\xa0**Requirements:**"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"\xa0","\xa0",(0,i.kt)("a",{parentName:"li",href:"/docs/intro_graphical"},"Quick start with graphical programming"),"  "),(0,i.kt)("li",{parentName:"ul"},"\xa0","\xa0",(0,i.kt)("a",{parentName:"li",href:"/docs/tutorials/intro_ros"},"Basic understanding of ROS framework"))))),(0,i.kt)("h2",{id:"why-using-ros-with-blockly"},"Why using ROS with blockly?"),(0,i.kt)("p",null,"ROS provides a rich sets of software components and libraries which are accessible via ROS messages or service calls. Other programs (e.g. written in Python or C++) can easily make use of functionality provided by these third-party software components. When using blockly (e.g. QTrobot Studio) to program a robot, we also want to be part of this ecosystem and benefits from its limitless functionalities. QTrobot dedicated blocks already leverage ROS to communicate with the robot via messages and services for playing gestures, speaking or interact with the user via tablet. In fact, hundreds of sophisticated and interactive applications (games) have been developed using these blocks. However, we want to have more generic way to"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"benefits from QTrobot full functionalities such as human gesture or emotion recognition"),(0,i.kt)("li",{parentName:"ul"},"and interact with other custom ROS software written in other programming languages.")),(0,i.kt)("p",null,"Imagine we want to implement a voice interaction application using blockly which needs a sophisticated speech recognition (e.g. Google speech) or Amazon chatbot AI. In this case, we need to interact with the third-party ROS software from our blockly application."),(0,i.kt)("h2",{id:"luxai-blocks-for-ros"},"LuxAI blocks for ROS"),(0,i.kt)("p",null,"QTrobot studio offers very flexible and powerful blocks to handle complex ROS messages and interact with other publishers, subscribers and services. These blocks enable developers to extend their application beyond the capabilities of blockly and add limitless functionalities to their programs."),(0,i.kt)("h3",{id:"message-object-blocks"},"Message object blocks"),(0,i.kt)("p",null,"To provide a generic way to interact with ROS software, we need to handle every type of ROS messages and parameters of services. There are two different blocks in QTrobot studio: one creates generic message object and the other extracts field values from a message object."),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Create object"))," block uses key-value pairs to construct ROS message and service parameters. Key is simply the name of an item in a message or parameter of a service. Value can be simple string, number, list or even another object. Following examples show how to use QTrobot Studio Create object block to represent some ROS messages and service parameters."),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"create object",src:a(12206).Z,width:"674",height:"170"})),(0,i.kt)("p",null,"To extract specific value from an object, we can use ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Get element"))," block. It extracts the value of a given key. Let's take a look at the following examples."),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"get element",src:a(66078).Z,width:"632",height:"213"})),(0,i.kt)("p",null,"As you can see in the above examples, to get the value of an item, we simply need to specify its key in our Get element block."),(0,i.kt)("h2",{id:"ros-publisher-subscriber-and-service-blocks"},"ROS Publisher, Subscriber and Service blocks"),(0,i.kt)("p",null,"Now that we know how to create ROS messages in Blockly, we can use ",(0,i.kt)("strong",{parentName:"p"},"ROS Publisher")," and ",(0,i.kt)("strong",{parentName:"p"},"ROS Subscriber")," blocks to respectively publish and receive ROS messages. Let's see first how we can publish a message using ",(0,i.kt)("strong",{parentName:"p"},"ROS Publisher")," block via some examples. Imagine we want to publish 'Hello QT!' message to /qt_robot/speech/say topic. We also know that the required message type is std_msgs/String. Therefore, we can use the ROS Publisher block as follows:"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"block publish",src:a(31448).Z,width:"675",height:"152"})),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The aim of above example is to show how we can use ROS Publisher block to publish a simple string message. However for QTrobot speech interface, you need to use the dedicated QTrobot ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Show Says Act"))," block!"))),(0,i.kt)("p",null,"Let's see how we can use our ",(0,i.kt)("strong",{parentName:"p"},"ROS Subscriber")," blocks to read a specific robots' joint position:"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"block subscribe",src:a(55393).Z,width:"624",height:"201"})),(0,i.kt)("p",null,"The following example shows how we can configure QTrobot to speak slower (e.g. 50% of its normal speed) with using ",(0,i.kt)("strong",{parentName:"p"},"ROS Service")," call block."),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"block service",src:a(61477).Z,width:"678",height:"174"})))}b.isMDXComponent=!0},31448:function(e,t,a){t.Z=a.p+"assets/images/ros_block_pub-eea768fe3fff7336684c9a47bf3968f0.png"},61477:function(e,t,a){t.Z=a.p+"assets/images/ros_block_service-19c890e164ef6dbe17dc95cdcf6633f5.png"},55393:function(e,t,a){t.Z=a.p+"assets/images/ros_block_sub-12f846b2a362c3965f999d60727a10bd.png"},12206:function(e,t,a){t.Z=a.p+"assets/images/ros_create_obj-7d33802c2a950d78c212fff17a095043.png"},66078:function(e,t,a){t.Z=a.p+"assets/images/ros_get_key-f50a1a52ecabf4f56c9c1c550ba9fda9.png"}}]);