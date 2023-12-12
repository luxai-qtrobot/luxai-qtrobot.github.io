"use strict";(self.webpackChunkqtrobot_documentation=self.webpackChunkqtrobot_documentation||[]).push([[6406],{8851:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>h,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var s=t(5893),i=t(1151),n=t(9656);const r={id:"python_ros_publish",title:"QTrobot interfaces using ROS Publishers",hide_table_of_contents:!0},l=void 0,a={id:"tutorials/python/python_ros_publish",title:"QTrobot interfaces using ROS Publishers",description:"signalcellularalt &nbsp;Level:&nbsp; Basic",source:"@site/docs/tutorials/python/python_ros_publish.mdx",sourceDirName:"tutorials/python",slug:"/tutorials/python/python_ros_publish",permalink:"/docs/tutorials/python/python_ros_publish",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"python_ros_publish",title:"QTrobot interfaces using ROS Publishers",hide_table_of_contents:!0},sidebar:"code_tutorials_sidebar",previous:{title:"Create a ROS python project",permalink:"/docs/tutorials/python/python_ros_project"},next:{title:"QTrobot interfaces using ROS Services",permalink:"/docs/tutorials/python/python_ros_services"}},h={},c=[{value:"Create a python project",id:"create-a-python-project",level:2},{value:"QTrobot speech publisher",id:"qtrobot-speech-publisher",level:2},{value:"QTrobot talk text publisher",id:"qtrobot-talk-text-publisher",level:2},{value:"QTrobot emotion publisher",id:"qtrobot-emotion-publisher",level:2},{value:"QTrobot gesture publisher",id:"qtrobot-gesture-publisher",level:2},{value:"QTrobot audio publisher",id:"qtrobot-audio-publisher",level:2}];function d(e){const o={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(o.admonition,{title:"Overview",type:"info",children:[(0,s.jsxs)(o.p,{children:[(0,s.jsx)(n.Z,{children:"signal_cellular_alt"})," \xa0",(0,s.jsx)(o.strong,{children:"Level:"}),"\xa0 ",(0,s.jsx)(o.em,{children:"Basic"}),"\n",(0,s.jsx)("br",{})," ",(0,s.jsx)(n.Z,{children:" track_changes "})," \xa0",(0,s.jsx)(o.strong,{children:"Goal:"}),"\xa0 ",(0,s.jsx)(o.em,{children:"learn how to access QTrobot interfaces such as speech, emotion, gesture, etc. in python via ROS publishers"}),"\n",(0,s.jsx)("br",{})," ",(0,s.jsx)(n.Z,{children:" task_alt "})," \xa0",(0,s.jsx)(o.strong,{children:"Requirements:"})]}),(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:["\xa0\xa0",(0,s.jsx)(o.a,{href:"/docs/intro_code",children:"Quick start with coding on QTrobot"})]}),"\n",(0,s.jsxs)(o.li,{children:["\xa0\xa0",(0,s.jsx)(o.a,{href:"/docs/tutorials/python/python_ros_project",children:"Create a ROS python project"})]}),"\n"]})]}),"\n",(0,s.jsxs)(o.p,{children:["If you have followed our previous tutorials, you should know how to start coding on QTrobot with python and got the basic knowledge of ROS framework.  In this tutorial we will learn about how to access ",(0,s.jsx)(o.a,{href:"/docs/api_ros#list-of-available-interfaces",children:"QTrobot interfaces"})," such as speech and audio interface using ROS publishers."]}),"\n",(0,s.jsx)(o.h2,{id:"create-a-python-project",children:"Create a python project"}),"\n",(0,s.jsxs)(o.p,{children:["First we create a python project for our tutorial. let's call it ",(0,s.jsx)(o.code,{children:"tutorial_qt_publisher"})," and add the required python file:"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{children:'cd ~/catkin_ws/src\ncatkin_create_pkg tutorial_qt_publisher std_msgs rospy roscpp -D "Command QTrobot via ROS Publishers"\ncd tutorial_qt_publisher/src\ntouch tutorial_qt_publisher_node.py\nchmod +x tutorial_qt_publisher_node.py\n'})}),"\n",(0,s.jsx)(o.h2,{id:"qtrobot-speech-publisher",children:"QTrobot speech publisher"}),"\n",(0,s.jsxs)(o.p,{children:["Open the ",(0,s.jsx)(o.code,{children:"tutorial_qt_publisher_node.py"})," file and add the following code:"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-python",children:"#!/usr/bin/env python\nimport sys\nimport rospy\nfrom std_msgs.msg import String\n\nif __name__ == '__main__':\n    rospy.init_node('my_tutorial_node')\n    rospy.loginfo(\"my_tutorial_node started!\")\n\n   # creating a ros publisher\n   speechSay_pub = rospy.Publisher('/qt_robot/speech/say', String, queue_size=10)\n   rospy.sleep(3.0)\n\n   # publish a text message to TTS\n   speechSay_pub.publish(\"Hello! my name is QT!\")\n\n    try:\n        rospy.spin()\n    except KeyboardInterrupt:\n        pass\n\n    rospy.loginfo(\"finsihed!\")\n\n"})}),"\n",(0,s.jsxs)(o.p,{children:["First we imported ",(0,s.jsx)(o.code,{children:"std_msgs.msg"})," from ROS standard message library. This message is used in ",(0,s.jsx)(o.code,{children:"/qt_robot/speech/say"})," to communicate with QTrobot speech (TTS) interface."]}),"\n",(0,s.jsxs)(o.admonition,{title:"Tip",type:"tip",children:[(0,s.jsx)(o.p,{children:"How do we know which message type an interface uses? well, There is a useful command in ROS which tells you that:"}),(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-bash",children:"rostopic info /qt_robot/speech/say\nType: std_msgs/String\n...\n"})})]}),"\n",(0,s.jsx)(o.p,{children:"Then we created a publisher to '/qt_robot/speech/say' topic and wait for few seconds to establish the connection with the interface."}),"\n",(0,s.jsxs)(o.admonition,{title:"Tip",type:"tip",children:[(0,s.jsxs)(o.p,{children:["In the above example, for simplicity we used few seconds of delay using ",(0,s.jsx)(o.code,{children:"sleep"})," function. A more appropriate way is to wait and check until the connection with a subscriber is established:"]}),(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-python",children:'# wait for publisher/subscriber connections\nwtime_begin = rospy.get_time()\nwhile (speechSay_pub.get_num_connections()) :\n    rospy.loginfo("waiting for subscriber connections")\n    if rospy.get_time() - wtime_begin > 5.0:\n        rospy.logerr("Timeout while waiting for subscribers connection!")\n        sys.exit()\n    rospy.sleep(0.5)\n'})})]}),"\n",(0,s.jsx)(o.p,{children:"Finally we published a text message to QTrobot speech interface which make the robot read that message."}),"\n",(0,s.jsx)(o.h2,{id:"qtrobot-talk-text-publisher",children:"QTrobot talk text publisher"}),"\n",(0,s.jsxs)(o.p,{children:["The ",(0,s.jsx)(o.code,{children:"/qt_robot/behavior/talkText"})," interface is similar to ",(0,s.jsx)(o.code,{children:"/qt_robot/speech/say"})," interface with the only different that the talkText interface asks QTrobot to move his lips while reading the text messages. To try it, just add the following lines to our code:"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-python",children:"behaviorTalkText_pub = rospy.Publisher('/qt_robot/behavior/talkText', String, queue_size=10)\nbehaviorTalkText_pub.publish(\"Hello! my name is QT!\")\n"})}),"\n",(0,s.jsx)(o.h2,{id:"qtrobot-emotion-publisher",children:"QTrobot emotion publisher"}),"\n",(0,s.jsxs)(o.p,{children:["Now lets show an emotion on QTrobot face. QTrobot comes with plenty of predefined emotion animations. You can find the complete list of the available emotions either using the ",(0,s.jsx)(o.em,{children:"QTrobot Educator app"})," or by looking into the ",(0,s.jsx)(o.code,{children:"~/robot/data/emotions"})," folder in ",(0,s.jsx)(o.strong,{children:"QTRP"}),"."]}),"\n",(0,s.jsx)(o.p,{children:"Add the following lines to our code to show the 'happy' emotion under 'QT' category on QTrobot face:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-python",children:"emotionShow_pub = rospy.Publisher('/qt_robot/emotion/show', String, queue_size=10)\nemotionShow_pub.publish(\"QT/happy\")\n"})}),"\n",(0,s.jsx)(o.admonition,{title:"Note",type:"note",children:(0,s.jsxs)(o.p,{children:["As it shown in the above example, you should ",(0,s.jsx)(o.strong,{children:"not"})," give the emotion's file extension (",(0,s.jsx)(o.code,{children:".avi"}),") to the interface!"]})}),"\n",(0,s.jsx)(o.h2,{id:"qtrobot-gesture-publisher",children:"QTrobot gesture publisher"}),"\n",(0,s.jsxs)(o.p,{children:["Now lets play a gesture with QTrobot. QTrobot comes with plenty of predefined gestures. You can find the complete list of the available gestures either using the ",(0,s.jsx)(o.em,{children:"QTrobot Educator app"})," or by looking into the ",(0,s.jsx)(o.code,{children:"~/robot/data/gestures"})," folder in ",(0,s.jsx)(o.strong,{children:"QTRP"}),"."]}),"\n",(0,s.jsx)(o.p,{children:"Add the following lines to our code to play the 'clapping' gesture under 'QT' category:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-python",children:"gesturePlay_pub = rospy.Publisher('/qt_robot/gesture/play', String, queue_size=10)\ngesturePlay_pub.publish(\"QT/clapping\")\n"})}),"\n",(0,s.jsx)(o.admonition,{title:"Note",type:"note",children:(0,s.jsxs)(o.p,{children:["As it shown in the above example, you should ",(0,s.jsx)(o.strong,{children:"not"})," give the gestures's file extension (",(0,s.jsx)(o.code,{children:".xml"}),") to the interface!"]})}),"\n",(0,s.jsx)(o.h2,{id:"qtrobot-audio-publisher",children:"QTrobot audio publisher"}),"\n",(0,s.jsxs)(o.p,{children:["Now lets play an audio file on QTrobot. QTrobot comes with some audio examples. You can find the complete list of the available audios either using the ",(0,s.jsx)(o.em,{children:"QTrobot Educator app"})," or by looking into the ",(0,s.jsx)(o.code,{children:"~/robot/data/audios"})," folder in ",(0,s.jsx)(o.strong,{children:"QTRP"}),".  QTrobot can play both audio ",(0,s.jsx)(o.em,{children:"wave"})," and ",(0,s.jsx)(o.em,{children:"mp3"})," files."]}),"\n",(0,s.jsx)(o.p,{children:"Add the following lines to our code to play the 'Komiku_Glouglou' audio file under 'QT' category:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-python",children:"audioPlay_pub = rospy.Publisher('/qt_robot/audio/play', String, queue_size=10)\naudioPlay_pub.publish(\"QT/Komiku_Glouglou\")\n"})}),"\n",(0,s.jsx)(o.admonition,{title:"Note",type:"note",children:(0,s.jsxs)(o.p,{children:["As it shown in the above example, you do not need to give the audio's file extension (",(0,s.jsx)(o.code,{children:".wav"})," or ",(0,s.jsx)(o.code,{children:".mp3"}),") to the interface!"]})})]})}function p(e={}){const{wrapper:o}={...(0,i.a)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}}}]);