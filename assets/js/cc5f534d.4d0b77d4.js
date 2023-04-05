"use strict";(self.webpackChunkqtrobot_documentation=self.webpackChunkqtrobot_documentation||[]).push([[6512],{14949:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return d},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return h},toc:function(){return u},default:function(){return _}});var a=n(87462),o=n(63366),i=(n(67294),n(3905)),r=n(55381),s=n(14702),p=["components"],d={id:"python_ros_hands",title:"Human hands detection",hide_table_of_contents:!0},l="Human hands detection",c={unversionedId:"tutorials/python/python_ros_hands",id:"tutorials/python/python_ros_hands",title:"Human hands detection",description:"signalcellularalt &nbsp;Level:&nbsp; Intermediate",source:"@site/docs/tutorials/python/python_ros_hands_detection.md",sourceDirName:"tutorials/python",slug:"/tutorials/python/python_ros_hands",permalink:"/docs/tutorials/python/python_ros_hands",tags:[],version:"current",frontMatter:{id:"python_ros_hands",title:"Human hands detection",hide_table_of_contents:!0},sidebar:"code_tutorials_sidebar",previous:{title:"Human gesture detection",permalink:"/docs/tutorials/python/python_ros_gestures"},next:{title:"Synchronizing QTrobot Behaviors",permalink:"/docs/tutorials/python/python_ros_sync_robot_behaviors"}},h={},u=[{value:"Create a python project",id:"create-a-python-project",level:2},{value:"Code",id:"code",level:2}],m={toc:u};function _(t){var e=t.components,n=(0,o.Z)(t,p);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"human-hands-detection"},"Human hands detection"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Overview")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)(r.Z,{mdxType:"Icon"},"signal_cellular_alt")," ",(0,i.kt)(s.Z,{mdxType:"Markdown"},"\xa0**Level:**\xa0 *Intermediate*"),(0,i.kt)("br",null)," ",(0,i.kt)(r.Z,{mdxType:"Icon"}," track_changes ")," ",(0,i.kt)(s.Z,{mdxType:"Markdown"},"\xa0**Goal:**\xa0 *learn how to detect human hands status with QTrobot Nuitrack interface*"),(0,i.kt)("br",null)," ",(0,i.kt)(r.Z,{mdxType:"Icon"}," task_alt ")," ",(0,i.kt)(s.Z,{mdxType:"Markdown"},"\xa0**Requirements:**"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"\xa0","\xa0",(0,i.kt)("a",{parentName:"li",href:"/docs/intro_code"},"Quick start with coding on QTrobot")),(0,i.kt)("li",{parentName:"ul"},"\xa0","\xa0",(0,i.kt)("a",{parentName:"li",href:"/docs/tutorials/python/python_ros_project"},"Create a ROS python project")),(0,i.kt)("li",{parentName:"ul"},"\xa0","\xa0",(0,i.kt)("a",{parentName:"li",href:"/docs/tutorials/python/python_ros_publish"},"QTrobot interfaces using ROS Topics")),(0,i.kt)("li",{parentName:"ul"},"\xa0","\xa0",(0,i.kt)("a",{parentName:"li",href:"/docs/tutorials/python/python_ros_subscribe"},"QTrobot interfaces using ROS Subscribers"))))),(0,i.kt)("p",null,"In this tutorial we will learn how to detect human hands status with ",(0,i.kt)("a",{parentName:"p",href:"/docs/api_ros#human-3d-tracking-interface"},"QTrobot Nuitrack interface")," using ROS Subscribes. "),(0,i.kt)("h2",{id:"create-a-python-project"},"Create a python project"),(0,i.kt)("p",null,"First we create a python project for our tutorial. let's call it ",(0,i.kt)("inlineCode",{parentName:"p"},"tutorial_qt_hands")," and add the required python file: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'cd ~/catkin_ws/src\ncatkin_create_pkg tutorial_qt_hands std_msgs rospy roscpp -D "Reading human hands status"\ncd tutorial_qt_hands/src\ntouch tutorial_qt_hands_node.py\nchmod +x tutorial_qt_hands_node.py\n')),(0,i.kt)("h2",{id:"code"},"Code"),(0,i.kt)("p",null,"Open the ",(0,i.kt)("inlineCode",{parentName:"p"},"tutorial_qt_hands_node.py")," file and add the following code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"#!/usr/bin/env python\nimport sys\nimport rospy\nfrom std_msgs.msg import String\nfrom qt_nuitrack_app.msg import Hands\nfrom qt_robot_interface.srv import *\n\n\ndef hands_callback(msg):\n    if msg.hands[0].right_click:\n        speech_pub.publish(\"Right hand\")\n        rospy.sleep(2)\n    elif msg.hands[0].left_click:\n        speech_pub.publish(\"Left hand\")\n        rospy.sleep(2)\n\nif __name__ == '__main__':\n    rospy.init_node('my_tutorial_node')\n    rospy.loginfo(\"my_tutorial_node started!\")\n\n    emotionShow = rospy.ServiceProxy('/qt_robot/emotion/show', emotion_show)\n    speech_pub = rospy.Publisher('/qt_robot/speech/say', String, queue_size=1)\n\n    # define ros subscriber\n    rospy.Subscriber('/qt_nuitrack_app/hands', Hands, hands_callback)\n   \n    try:\n        rospy.spin()\n    except KeyboardInterrupt:\n        pass\n\n    rospy.loginfo(\"finsihed!\")\n\n")),(0,i.kt)("p",null,"First we imported ",(0,i.kt)("inlineCode",{parentName:"p"},"Hands")," message type from ",(0,i.kt)("inlineCode",{parentName:"p"},"qt_nuitrack_app.msg")," message library. This message type is used in communication with ",(0,i.kt)("inlineCode",{parentName:"p"},"/qt_nuitrack_app/hands"),". "),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"How do we know which messages an interface uses? well, There is a useful command in ROS which tells you that: "),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre"},"rostopic info /qt_nuitrack_app/hands\nType: qt_nuitrack_app/Hands\n...\n")))),(0,i.kt)("p",null,"Then we created a subscriber for",(0,i.kt)("inlineCode",{parentName:"p"},"/qt_nuitrack_app/hands")," with callback function ",(0,i.kt)("inlineCode",{parentName:"p"},"hands_callback"),'.\nIn the callback we react accordingly to what is detected. If we detect "right_click" QTrobot will say "Right hand". That will make QTrobot react to your hands.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'def hands_callback(msg):\n    if msg.hands[0].right_click:\n        speech_pub.publish("Right hand")\n        rospy.sleep(2)\n    elif msg.hands[0].left_click:\n        speech_pub.publish("Left hand")\n        rospy.sleep(2)\n')),(0,i.kt)("p",null,'Stand in front of QTrobot and lift up your right arm pointing towards QTrobot with open hand. When you close your right hand the "right_click" will be detected.'))}_.isMDXComponent=!0}}]);