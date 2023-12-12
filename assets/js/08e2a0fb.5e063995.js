"use strict";(self.webpackChunkqtrobot_documentation=self.webpackChunkqtrobot_documentation||[]).push([[7098],{7262:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var r=t(5893),n=t(1151),s=t(9656);const i={id:"python_ros_motors",title:"Commanding QTrobot motors",hide_table_of_contents:!0},a="Commanding QTrobot motors",d={id:"tutorials/python/python_ros_motors",title:"Commanding QTrobot motors",description:"signalcellularalt &nbsp;Level:&nbsp; Intermediate",source:"@site/versioned_docs/version-QTRD_v1/tutorials/python/python_ros_motors.mdx",sourceDirName:"tutorials/python",slug:"/tutorials/python/python_ros_motors",permalink:"/docs/v1/tutorials/python/python_ros_motors",draft:!1,unlisted:!1,tags:[],version:"QTRD_v1",frontMatter:{id:"python_ros_motors",title:"Commanding QTrobot motors",hide_table_of_contents:!0},sidebar:"code_tutorials_sidebar",previous:{title:"QTrobot recording new gesture",permalink:"/docs/v1/tutorials/python/python_ros_record"},next:{title:"Human facial expression detection",permalink:"/docs/v1/tutorials/python/python_ros_expression"}},l={},c=[{value:"Create a python project",id:"create-a-python-project",level:2},{value:"Code",id:"code",level:2},{value:"Explanation",id:"explanation",level:2}];function h(e){const o={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.h1,{id:"commanding-qtrobot-motors",children:"Commanding QTrobot motors"}),"\n","\n","\n",(0,r.jsxs)(o.admonition,{title:"Overview",type:"info",children:[(0,r.jsxs)(o.p,{children:[(0,r.jsx)(s.Z,{children:"signal_cellular_alt"})," \xa0",(0,r.jsx)(o.strong,{children:"Level:"}),"\xa0 ",(0,r.jsx)(o.em,{children:"Intermediate"}),"\r\n",(0,r.jsx)("br",{})," ",(0,r.jsx)(s.Z,{children:" track_changes "})," \xa0",(0,r.jsx)(o.strong,{children:"Goal:"}),"\xa0 ",(0,r.jsx)(o.em,{children:"learn how to command and read motors with QTrobot Motor interface"}),"\r\n",(0,r.jsx)("br",{})," ",(0,r.jsx)(s.Z,{children:" task_alt "})," \xa0",(0,r.jsx)(o.strong,{children:"Requirements:"})]}),(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:["\xa0\xa0",(0,r.jsx)(o.a,{href:"/docs/intro_code",children:"Quick start with coding on QTrobot"})]}),"\n",(0,r.jsxs)(o.li,{children:["\xa0\xa0",(0,r.jsx)(o.a,{href:"/docs/tutorials/python/python_ros_project",children:"Create a ROS python project"})]}),"\n",(0,r.jsxs)(o.li,{children:["\xa0\xa0",(0,r.jsx)(o.a,{href:"/docs/tutorials/python/python_ros_publish",children:"QTrobot interfaces using ROS Topics"})]}),"\n"]})]}),"\n",(0,r.jsxs)(o.p,{children:["In this tutorial you will learn how to command and read motors with ",(0,r.jsx)(o.a,{href:"/docs/api_ros#motor-interface",children:"QTrobot Motor interface"})," using python."]}),"\n",(0,r.jsx)(o.h2,{id:"create-a-python-project",children:"Create a python project"}),"\n",(0,r.jsxs)(o.p,{children:["First we create a python project for our tutorial. let's call it ",(0,r.jsx)(o.code,{children:"tutorial_qt_motors"})," and add the required python file:"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{children:'cd ~/catkin_ws/src\r\ncatkin_create_pkg tutorial_qt_motors sensor_msgs std_msgs rospy roscpp -D "Command QTrobot motors"\r\ncd tutorial_qt_motors/src\r\ntouch tutorial_qt_motors_node.py\r\nchmod +x tutorial_qt_motors_node.py\n'})}),"\n",(0,r.jsx)(o.h2,{id:"code",children:"Code"}),"\n",(0,r.jsxs)(o.p,{children:['In this tutorial we will focus on reading and moving just one motor "HeadYaw".\r\nOpen the ',(0,r.jsx)(o.code,{children:"tutorial_qt_motors_node.py"})," file and the add the following code:"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-python",children:"#!/usr/bin/env python\r\nimport sys\r\nimport rospy\r\nfrom std_msgs.msg import Float64MultiArray\r\nfrom sensor_msgs.msg import JointState\r\n\r\nhead_yaw_pos = 0\r\nrospy.init_node('my_tutorial_node')\r\nrospy.loginfo(\"my_tutorial_node started!\")\r\n\r\nhead_pub = rospy.Publisher('/qt_robot/head_position/command', Float64MultiArray, queue_size=10)\r\nrospy.sleep(3.0)\r\n\r\ndef state_callback(msg):\r\n    global head_yaw_pos\r\n    head_yaw_pos = msg.position[msg.name.index(\"HeadYaw\")]\r\n\r\nrospy.Subscriber('/qt_robot/joints/state', JointState, state_callback)\r\n\r\nif __name__ == '__main__':\r\n    head_yaw_ref = 15.0\r\n    while not rospy.is_shutdown():\r\n        try:\r\n            href = Float64MultiArray()\r\n            href.data = [head_yaw_ref, 0]\r\n            head_pub.publish(href)\r\n            rospy.sleep(4)\r\n            rospy.loginfo(\"Current position : %.2f\" ,head_yaw_pos)\r\n            head_yaw_ref = -15 if head_yaw_ref == 15 else 15\r\n        except KeyboardInterrupt:\r\n            pass\r\n    rospy.loginfo(\"finsihed!\")\n"})}),"\n",(0,r.jsx)(o.h2,{id:"explanation",children:"Explanation"}),"\n",(0,r.jsxs)(o.p,{children:["First we imported ",(0,r.jsx)(o.code,{children:"Float64MultiArray"})," from ROS standard message library. This message is used in ",(0,r.jsx)(o.code,{children:"/qt_robot/head_position/command"})," to command the motors. Next we imported ",(0,r.jsx)(o.code,{children:"JointState"}),", which we will need to read the joint positions. We define one global variable to save latest position of motor and we initialize ROS node."]}),"\n",(0,r.jsxs)(o.p,{children:["We define a ROS publisher for ",(0,r.jsx)(o.code,{children:"/qt_robot/head_position/command"}),", which we will use to command the motors."]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-python",children:"head_pub = rospy.Publisher('/qt_robot/head_position/command', Float64MultiArray, queue_size=10)\n"})}),"\n",(0,r.jsxs)(o.p,{children:["Next we define a callback function ",(0,r.jsx)(o.code,{children:"state_callback"}),', which will be reading position of "HeadYaw" motor. With that we also define a ROS subscriber ',(0,r.jsx)(o.code,{children:"/qt_robot/joints/state"})," to read this data."]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-python",children:"def state_callback(msg):\r\n    global head_yaw_pos\r\n    head_yaw_pos = msg.position[msg.name.index(\"HeadYaw\")]\r\n\r\nrospy.Subscriber('/qt_robot/joints/state', JointState, state_callback)\n"})}),"\n",(0,r.jsxs)(o.p,{children:["In the main we define starting reference position and new ",(0,r.jsx)(o.code,{children:"Float64MultiArray"})," message, which includes reference position. We publish new position with ",(0,r.jsx)(o.code,{children:"head_pub"}),' and after some delay we print the current position and we change the reference position. The "HeadYaw" will move from 15 to -15 on repeat.']}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-python",children:'if __name__ == \'__main__\':\r\n    while not rospy.is_shutdown():\r\n        try:\r\n            href = Float64MultiArray()\r\n            href.data = [head_yaw_ref, 0]\r\n            head_pub.publish(href)\r\n            rospy.sleep(4)\r\n            rospy.loginfo("Current position : %.2f" ,head_yaw_pos)\r\n            head_yaw_ref = -15 if head_yaw_ref == 15 else 15\r\n        except KeyboardInterrupt:\r\n            pass\r\n    rospy.loginfo("finsihed!")\n'})})]})}function p(e={}){const{wrapper:o}={...(0,n.a)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}}}]);