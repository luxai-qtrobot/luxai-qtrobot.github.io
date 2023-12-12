"use strict";(self.webpackChunkqtrobot_documentation=self.webpackChunkqtrobot_documentation||[]).push([[2147],{5660:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var s=t(5893),o=t(1151),r=t(9656);const i={id:"python_ros_hands",title:"Human hands detection",hide_table_of_contents:!0},a=void 0,c={id:"tutorials/python/python_ros_hands",title:"Human hands detection",description:"signalcellularalt &nbsp;Level:&nbsp; Intermediate",source:"@site/docs/tutorials/python/python_ros_hands_detection.mdx",sourceDirName:"tutorials/python",slug:"/tutorials/python/python_ros_hands",permalink:"/docs/tutorials/python/python_ros_hands",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"python_ros_hands",title:"Human hands detection",hide_table_of_contents:!0},sidebar:"code_tutorials_sidebar",previous:{title:"Human gesture detection",permalink:"/docs/tutorials/python/python_ros_gestures"},next:{title:"Synchronizing QTrobot Behaviors",permalink:"/docs/tutorials/python/python_ros_sync_robot_behaviors"}},d={},h=[{value:"Create a python project",id:"create-a-python-project",level:2},{value:"Code",id:"code",level:2}];function l(n){const e={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.admonition,{title:"Overview",type:"info",children:[(0,s.jsxs)(e.p,{children:[(0,s.jsx)(r.Z,{children:"signal_cellular_alt"})," \xa0",(0,s.jsx)(e.strong,{children:"Level:"}),"\xa0 ",(0,s.jsx)(e.em,{children:"Intermediate"}),"\n",(0,s.jsx)("br",{})," ",(0,s.jsx)(r.Z,{children:" track_changes "})," \xa0",(0,s.jsx)(e.strong,{children:"Goal:"}),"\xa0 ",(0,s.jsx)(e.em,{children:"learn how to detect human hands status with QTrobot Nuitrack interface"}),"\n",(0,s.jsx)("br",{})," ",(0,s.jsx)(r.Z,{children:" task_alt "})," \xa0",(0,s.jsx)(e.strong,{children:"Requirements:"})]}),(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\xa0\xa0",(0,s.jsx)(e.a,{href:"/docs/intro_code",children:"Quick start with coding on QTrobot"})]}),"\n",(0,s.jsxs)(e.li,{children:["\xa0\xa0",(0,s.jsx)(e.a,{href:"/docs/tutorials/python/python_ros_project",children:"Create a ROS python project"})]}),"\n",(0,s.jsxs)(e.li,{children:["\xa0\xa0",(0,s.jsx)(e.a,{href:"/docs/tutorials/python/python_ros_publish",children:"QTrobot interfaces using ROS Topics"})]}),"\n",(0,s.jsxs)(e.li,{children:["\xa0\xa0",(0,s.jsx)(e.a,{href:"/docs/tutorials/python/python_ros_subscribe",children:"QTrobot interfaces using ROS Subscribers"})]}),"\n"]})]}),"\n",(0,s.jsxs)(e.p,{children:["In this tutorial we will learn how to detect human hands status with ",(0,s.jsx)(e.a,{href:"/docs/api_ros#human-3d-tracking-interface",children:"QTrobot Nuitrack interface"})," using ROS Subscribes."]}),"\n",(0,s.jsx)(e.h2,{id:"create-a-python-project",children:"Create a python project"}),"\n",(0,s.jsxs)(e.p,{children:["First we create a python project for our tutorial. let's call it ",(0,s.jsx)(e.code,{children:"tutorial_qt_hands"})," and add the required python file:"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:'cd ~/catkin_ws/src\ncatkin_create_pkg tutorial_qt_hands std_msgs rospy roscpp -D "Reading human hands status"\ncd tutorial_qt_hands/src\ntouch tutorial_qt_hands_node.py\nchmod +x tutorial_qt_hands_node.py\n'})}),"\n",(0,s.jsx)(e.h2,{id:"code",children:"Code"}),"\n",(0,s.jsxs)(e.p,{children:["Open the ",(0,s.jsx)(e.code,{children:"tutorial_qt_hands_node.py"})," file and add the following code:"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"#!/usr/bin/env python\nimport sys\nimport rospy\nfrom std_msgs.msg import String\nfrom qt_nuitrack_app.msg import Hands\nfrom qt_robot_interface.srv import *\n\n\ndef hands_callback(msg):\n    if msg.hands[0].right_click:\n        speech_pub.publish(\"Right hand\")\n        rospy.sleep(2)\n    elif msg.hands[0].left_click:\n        speech_pub.publish(\"Left hand\")\n        rospy.sleep(2)\n\nif __name__ == '__main__':\n    rospy.init_node('my_tutorial_node')\n    rospy.loginfo(\"my_tutorial_node started!\")\n\n    emotionShow = rospy.ServiceProxy('/qt_robot/emotion/show', emotion_show)\n    speech_pub = rospy.Publisher('/qt_robot/speech/say', String, queue_size=1)\n\n    # define ros subscriber\n    rospy.Subscriber('/qt_nuitrack_app/hands', Hands, hands_callback)\n   \n    try:\n        rospy.spin()\n    except KeyboardInterrupt:\n        pass\n\n    rospy.loginfo(\"finsihed!\")\n\n"})}),"\n",(0,s.jsxs)(e.p,{children:["First we imported ",(0,s.jsx)(e.code,{children:"Hands"})," message type from ",(0,s.jsx)(e.code,{children:"qt_nuitrack_app.msg"})," message library. This message type is used in communication with ",(0,s.jsx)(e.code,{children:"/qt_nuitrack_app/hands"}),"."]}),"\n",(0,s.jsxs)(e.admonition,{title:"Tip",type:"tip",children:[(0,s.jsx)(e.p,{children:"How do we know which messages an interface uses? well, There is a useful command in ROS which tells you that:"}),(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"rostopic info /qt_nuitrack_app/hands\nType: qt_nuitrack_app/Hands\n...\n"})})]}),"\n",(0,s.jsxs)(e.p,{children:["Then we created a subscriber for",(0,s.jsx)(e.code,{children:"/qt_nuitrack_app/hands"})," with callback function ",(0,s.jsx)(e.code,{children:"hands_callback"}),'.\nIn the callback we react accordingly to what is detected. If we detect "right_click" QTrobot will say "Right hand". That will make QTrobot react to your hands.']}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:'def hands_callback(msg):\n    if msg.hands[0].right_click:\n        speech_pub.publish("Right hand")\n        rospy.sleep(2)\n    elif msg.hands[0].left_click:\n        speech_pub.publish("Left hand")\n        rospy.sleep(2)\n'})}),"\n",(0,s.jsx)(e.p,{children:'Stand in front of QTrobot and lift up your right arm pointing towards QTrobot with open hand. When you close your right hand the "right_click" will be detected.'})]})}function p(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(l,{...n})}):l(n)}}}]);