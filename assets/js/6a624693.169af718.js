"use strict";(self.webpackChunkqtrobot_documentation=self.webpackChunkqtrobot_documentation||[]).push([[3461],{97619:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return d},metadata:function(){return c},assets:function(){return u},toc:function(){return m},default:function(){return y}});var o=r(87462),n=r(63366),s=(r(67294),r(3905)),a=r(55381),i=r(14702),l=["components"],p={id:"python_ros_record",title:"QTrobot recording new gesture",hide_table_of_contents:!0},d=void 0,c={unversionedId:"tutorials/python/python_ros_record",id:"version-QTRD_v1/tutorials/python/python_ros_record",title:"QTrobot recording new gesture",description:"signalcellularalt &nbsp;Level:&nbsp; Intermediate",source:"@site/versioned_docs/version-QTRD_v1/tutorials/python/python_ros_gestures.md",sourceDirName:"tutorials/python",slug:"/tutorials/python/python_ros_record",permalink:"/docs/v1/tutorials/python/python_ros_record",tags:[],version:"QTRD_v1",frontMatter:{id:"python_ros_record",title:"QTrobot recording new gesture",hide_table_of_contents:!0},sidebar:"version-QTRD_v1/code_tutorials_sidebar",previous:{title:"Configure QTrobot TTS language",permalink:"/docs/v1/tutorials/python/python_ros_speech"},next:{title:"Commanding QTrobot motors",permalink:"/docs/v1/tutorials/python/python_ros_motors"}},u={},m=[{value:"Create a python project",id:"create-a-python-project",level:2},{value:"Code",id:"code",level:2},{value:"Explanation",id:"explanation",level:2}],h={toc:m};function y(e){var t=e.components,r=(0,n.Z)(e,l);return(0,s.kt)("wrapper",(0,o.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Overview")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)(a.Z,{mdxType:"Icon"},"signal_cellular_alt")," ",(0,s.kt)(i.Z,{mdxType:"Markdown"},"\xa0**Level:**\xa0 *Intermediate*"),(0,s.kt)("br",null)," ",(0,s.kt)(a.Z,{mdxType:"Icon"}," track_changes ")," ",(0,s.kt)(i.Z,{mdxType:"Markdown"},"\xa0**Goal:**\xa0 *learn how to record and play custom gesture with QTrobot Gesture interface*"),(0,s.kt)("br",null)," ",(0,s.kt)(a.Z,{mdxType:"Icon"}," task_alt ")," ",(0,s.kt)(i.Z,{mdxType:"Markdown"},"\xa0**Requirements:**"),(0,s.kt)("ul",{parentName:"div"},(0,s.kt)("li",{parentName:"ul"},"\xa0","\xa0",(0,s.kt)("a",{parentName:"li",href:"/docs/intro_code"},"Quick start with coding on QTrobot")),(0,s.kt)("li",{parentName:"ul"},"\xa0","\xa0",(0,s.kt)("a",{parentName:"li",href:"/docs/tutorials/python/python_ros_project"},"Create a ROS python project")),(0,s.kt)("li",{parentName:"ul"},"\xa0","\xa0",(0,s.kt)("a",{parentName:"li",href:"/docs/tutorials/python/python_ros_services"},"QTrobot interfaces using ROS Services"))))),(0,s.kt)("p",null,"In this tutorial you will learn how to record and play custom gesture with ",(0,s.kt)("a",{parentName:"p",href:"/docs/api_ros#gesture-interface"},"QTrobot Gesture interface")," using python."),(0,s.kt)("h2",{id:"create-a-python-project"},"Create a python project"),(0,s.kt)("p",null,"First we create a python project for our tutorial. let's call it ",(0,s.kt)("inlineCode",{parentName:"p"},"tutorial_qt_record")," and add the required python file: "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'cd ~/catkin_ws/src\ncatkin_create_pkg tutorial_qt_record rospy roscpp -D "Record new gestures"\ncd tutorial_qt_record/src\ntouch tutorial_qt_record_node.py\nchmod +x tutorial_qt_record_node.py\n')),(0,s.kt)("h2",{id:"code"},"Code"),(0,s.kt)("p",null,"Lets see how we can record and play a new gesture. "),(0,s.kt)("p",null,"Open the ",(0,s.kt)("inlineCode",{parentName:"p"},"tutorial_qt_record_node.py")," file and the add the following code:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"#!/usr/bin/env python\nimport sys\nimport rospy\nfrom qt_robot_interface.srv import *\nfrom qt_gesture_controller.srv import *\nfrom qt_motors_controller.srv import *\n\nif __name__ == '__main__':\n    rospy.init_node('my_tutorial_node')\n    rospy.loginfo(\"my_tutorial_node started!\")\n\n    speechSay = rospy.ServiceProxy('/qt_robot/speech/say', speech_say)\n    gestureRecord = rospy.ServiceProxy('/qt_robot/gesture/record', gesture_record)\n    gestureSave = rospy.ServiceProxy('/qt_robot/gesture/save', gesture_save)\n    setControlMode = rospy.ServiceProxy('/qt_robot/motors/setControlMode', set_control_mode)\n    gesturePlay = rospy.ServiceProxy('/qt_robot/gesture/play', gesture_play)\n\n\n    try:\n        name = \"my_gesture\"\n        parts = [\"left_arm\"]\n        input('Press enter to START recording ...\\n')\n        speechSay('Press enter to START recording.')\n        res = gestureRecord(parts, True, 0, 0)\n        if not res.status:\n            rospy.logfatal(\"Could not start recording gesture '%s' using '%s'.\" % (name, parts))\n        speechSay('When you want to STOP recording, just press enter again')\n        input('Press enter to STOP recording ...\\n')\n        res = gestureSave(name, \"\")\n        if not res.status:\n            rospy.logfatal(\"Could not save gesture '%s'.\" % name)\n        else:\n            rospy.loginfo(\"Gesture '%s' was recorded.\" % name)\n            speechSay(\"Your gesture was recorded.\" % name)\n        res = setControlMode(parts, 1)\n        if not res.status:\n            rospy.logfatal(\"Could not set control mode of '%s'.\" % parts)\n        else:\n            speechSay(\"Let's see what did you record.\")\n            gesturePlay(name, 0)\n\n    except KeyboardInterrupt:\n        pass\n\n    rospy.loginfo(\"finsihed!\")\n")),(0,s.kt)("h2",{id:"explanation"},"Explanation"),(0,s.kt)("p",null,"Let's dissect the code. First we import all from ",(0,s.kt)("inlineCode",{parentName:"p"},"qt_robot_interface.srv"),", because we need ",(0,s.kt)("inlineCode",{parentName:"p"},"speech_say"),". We also import ",(0,s.kt)("inlineCode",{parentName:"p"},"qt_gesture_controller.srv")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"qt_motors_controller.srv")," for all gesture and motor services."),(0,s.kt)("p",null,"We define all services that we need to use. We will need services for recording, saving and playing gestures. Also we will use speech service and control mode to set the mode of QTrobot motors."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"speechSay = rospy.ServiceProxy('/qt_robot/speech/say', speech_say)\ngestureRecord = rospy.ServiceProxy('/qt_robot/gesture/record', gesture_record)\ngestureSave = rospy.ServiceProxy('/qt_robot/gesture/save', gesture_save)\nsetControlMode = rospy.ServiceProxy('/qt_robot/motors/setControlMode', set_control_mode)\ngesturePlay = rospy.ServiceProxy('/qt_robot/gesture/play', gesture_play)\n")),(0,s.kt)("p",null,"Next we name the gesture and in we select which body part we want to record. You can write ",(0,s.kt)("inlineCode",{parentName:"p"},'["left_arm","right_arm","head"]')," to record with entire QTrobot. In this tutorial we will use just ",(0,s.kt)("inlineCode",{parentName:"p"},"left_arm"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'name = "my_gesture"\nparts = ["left_arm"]\n')),(0,s.kt)("p",null,"Next we use ",(0,s.kt)("inlineCode",{parentName:"p"},"speechSay")," service to let the user decide when to start the recording. After user pressed enter, With ",(0,s.kt)("inlineCode",{parentName:"p"},"gestureRecord")," call we start recording the gesture with the ",(0,s.kt)("inlineCode",{parentName:"p"},"parts")," that we selected. If there is any error on recording we print out and error message."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"input('Press enter to START recording ...\\n')\nspeechSay('Press enter to START recording.')\nres = gestureRecord(parts, True, 0, 0)\nif not res.status:\n    rospy.logfatal(\"Could not start recording gesture '%s' using '%s'.\" % (name, parts))\n")),(0,s.kt)("p",null,"We use the same ",(0,s.kt)("inlineCode",{parentName:"p"},"speech_say")," service for user interaction and when user decides to stop the recording we stop it using ",(0,s.kt)("inlineCode",{parentName:"p"},"gestureSave"),", which saves the gesture with selected name on ",(0,s.kt)("em",{parentName:"p"},"QTRP")," in folder ",(0,s.kt)("inlineCode",{parentName:"p"},"~/robot/data/gestures/"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"speechSay('When you want to STOP recording, just press enter again')\ninput('Press enter to STOP recording ...\\n')\nres = gestureSave(name, \"\")\nif not res.status:\n    rospy.logfatal(\"Could not save gesture '%s'.\" % name)\nelse:\n    rospy.loginfo(\"Gesture '%s' was recorded.\" % name)\n    speechSay(\"Your gesture was recorded.\" % name)\n")),(0,s.kt)("p",null,"At the end we enable back the motors used for recording with ",(0,s.kt)("inlineCode",{parentName:"p"},"setControlMode")," and if everything is ok we play the gesture that we recorded with ",(0,s.kt)("inlineCode",{parentName:"p"},"gesturePlay"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'res = setControlMode(parts, 1)\nif not res.status:\n    rospy.logfatal("Could not set control mode of \'%s\'." % parts)\nelse:\n    speechSay("Let\'s see what did you record.")\n    gesturePlay(name, 0)\n')))}y.isMDXComponent=!0}}]);