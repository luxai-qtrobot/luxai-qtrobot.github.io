"use strict";(self.webpackChunkqtrobot_documentation=self.webpackChunkqtrobot_documentation||[]).push([[6919],{96759:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return l},assets:function(){return d},toc:function(){return m},default:function(){return b}});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),i=n(55381),s=n(14702),c=["components"],p={id:"python_ros_subscribe",title:"QTrobot interfaces using ROS Subscribe",hide_table_of_contents:!0},u="QTrobot interfaces using ROS Subscribe",l={unversionedId:"tutorials/python/python_ros_subscribe",id:"tutorials/python/python_ros_subscribe",title:"QTrobot interfaces using ROS Subscribe",description:"signalcellularalt &nbsp;Level:&nbsp; Basic",source:"@site/docs/tutorials/python/python_ros_subscribe.md",sourceDirName:"tutorials/python",slug:"/tutorials/python/python_ros_subscribe",permalink:"/docs/tutorials/python/python_ros_subscribe",tags:[],version:"current",frontMatter:{id:"python_ros_subscribe",title:"QTrobot interfaces using ROS Subscribe",hide_table_of_contents:!0},sidebar:"code_tutorials_sidebar",previous:{title:"QTrobot interfaces using ROS Services",permalink:"/docs/tutorials/python/python_ros_services"},next:{title:"Configure QTrobot TTS language",permalink:"/docs/tutorials/python/python_ros_speech"}},d={},m=[{value:"Create a python project",id:"create-a-python-project",level:2},{value:"QTrobot nuitrack interface - Gestures",id:"qtrobot-nuitrack-interface---gestures",level:2}],h={toc:m};function b(t){var e=t.components,n=(0,r.Z)(t,c);return(0,a.kt)("wrapper",(0,o.Z)({},h,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"qtrobot-interfaces-using-ros-subscribe"},"QTrobot interfaces using ROS Subscribe"),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Overview")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)(i.Z,{mdxType:"Icon"},"signal_cellular_alt")," ",(0,a.kt)(s.Z,{mdxType:"Markdown"},"\xa0**Level:**\xa0 *Basic*"),(0,a.kt)("br",null)," ",(0,a.kt)(i.Z,{mdxType:"Icon"}," track_changes ")," ",(0,a.kt)(s.Z,{mdxType:"Markdown"},"\xa0**Goal:**\xa0 *learn how to read QTrobot interfaces in python via ROS Subscribers*"),(0,a.kt)("br",null)," ",(0,a.kt)(i.Z,{mdxType:"Icon"}," task_alt ")," ",(0,a.kt)(s.Z,{mdxType:"Markdown"},"\xa0**Requirements:**"),(0,a.kt)("ul",{parentName:"div"},(0,a.kt)("li",{parentName:"ul"},"\xa0","\xa0",(0,a.kt)("a",{parentName:"li",href:"/docs/intro_code"},"Quick start with coding on QTrobot")),(0,a.kt)("li",{parentName:"ul"},"\xa0","\xa0",(0,a.kt)("a",{parentName:"li",href:"/docs/tutorials/python/python_ros_project"},"Create a ROS python project"))))),(0,a.kt)("p",null,"If you have followed our previous tutorials, you should know how to start coding on QTrobot with python and got the basic knowledge of ROS framework. In this tutorial we will learn about how to read some of ",(0,a.kt)("a",{parentName:"p",href:"/docs/api_ros#list-of-available-interfaces"},"QTrobot interfaces")," using ROS Subscribe. "),(0,a.kt)("h2",{id:"create-a-python-project"},"Create a python project"),(0,a.kt)("p",null,"First we create a python project for our tutorial. let's call it ",(0,a.kt)("inlineCode",{parentName:"p"},"tutorial_qt_subscribe")," and add the required python file: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'cd ~/catkin_ws/src\ncatkin_create_pkg tutorial_qt_subscribe rospy roscpp -D "Read QTrobot data with ROS Subscribe"\ncd tutorial_qt_subscribe/src\ntouch tutorial_qt_subscribe_node.py\nchmod +x tutorial_qt_subscribe_node.py\n')),(0,a.kt)("h2",{id:"qtrobot-nuitrack-interface---gestures"},"QTrobot nuitrack interface - Gestures"),(0,a.kt)("p",null,"Open the ",(0,a.kt)("inlineCode",{parentName:"p"},"tutorial_qt_subscribe_node.py")," file and the add the following code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"#!/usr/bin/env python\nimport sys\nimport rospy\nfrom qt_nuitrack_app.msg import Gestures\n\ndef gesture_callback(msg):\n    rospy.loginfo(msg)\n\nif __name__ == '__main__':\n    rospy.init_node('my_tutorial_node')\n    rospy.loginfo(\"my_tutorial_node started!\")\n\n    # define ros subscriber\n    rospy.Subscriber('/qt_nuitrack_app/gestures', Gestures, gesture_callback)\n   \n    try:\n        rospy.spin()\n    except KeyboardInterrupt:\n        pass\n\n    rospy.loginfo(\"finsihed!\")\n\n")),(0,a.kt)("p",null,"First we imported ",(0,a.kt)("inlineCode",{parentName:"p"},"Gestures")," message type from ",(0,a.kt)("inlineCode",{parentName:"p"},"qt_nuitrack_app.msg")," message library. This message type is used in communication with ",(0,a.kt)("inlineCode",{parentName:"p"},"/qt_nuitrack_app/gestures"),". "),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"How do we know which messages an interface uses? well, There is a useful command in ROS which tells you that: "),(0,a.kt)("pre",{parentName:"div"},(0,a.kt)("code",{parentName:"pre"},"rostopic info /qt_nuitrack_app/gestures\nType: qt_nuitrack_app/Gestures\n...\n")))),(0,a.kt)("p",null,"Then we created a subscriber for ",(0,a.kt)("inlineCode",{parentName:"p"},"/qt_nuitrack_app/gestures")," with callback function ",(0,a.kt)("inlineCode",{parentName:"p"},"gesture_callback"),' to print any data that comes from that topic.\nStand in front of QTrobot and do one of this gestures ("SWIPE UP", "SWIPE DOWN", "SWIPE LEFT", "SWIPE RIGHT").\nWhen QTrobot detects you, the script should print something like this:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'[INFO] [1629900965.371938]: gestures:\n  -\n    id: 2\n    name: "SWIPE UP"\n')))}b.isMDXComponent=!0}}]);