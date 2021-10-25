"use strict";(self.webpackChunkqtrobot_documentation=self.webpackChunkqtrobot_documentation||[]).push([[7556],{85522:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return h},toc:function(){return d},default:function(){return m}});var n=o(87462),r=o(63366),i=(o(67294),o(3905)),a=o(18477),s=o(14702),l=["components"],p={id:"python_ros_vosk",title:"Offline speech recognition",hide_table_of_contents:!0},c="QTrobot Offline speech recognition",h={unversionedId:"tutorials/python/python_ros_vosk",id:"tutorials/python/python_ros_vosk",isDocsHomePage:!1,title:"Offline speech recognition",description:"signalcellularalt &nbsp;Level:&nbsp; Advanced",source:"@site/docs/tutorials/python/python_ros_vosk.md",sourceDirName:"tutorials/python",slug:"/tutorials/python/python_ros_vosk",permalink:"/docs/tutorials/python/python_ros_vosk",tags:[],version:"current",frontMatter:{id:"python_ros_vosk",title:"Offline speech recognition",hide_table_of_contents:!0},sidebar:"code_tutorials_sidebar",previous:{title:"Using QTrobot microphone",permalink:"/docs/tutorials/python/python_ros_respeaker"},next:{title:"Controlling QTrobot arms using MoveIt",permalink:"/docs/tutorials/python/python_ros_moveit"}},d=[{value:"Create a python project",id:"create-a-python-project",children:[],level:2},{value:"QTrobot speech service",id:"qtrobot-speech-service",children:[],level:2},{value:"Tips",id:"tips",children:[],level:2}],u={toc:d};function m(e){var t=e.components,o=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"qtrobot-offline-speech-recognition"},"QTrobot Offline speech recognition"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Overview")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)(a.Z,{mdxType:"Icon"},"signal_cellular_alt")," ",(0,i.kt)(s.Z,{mdxType:"Markdown"},"\xa0**Level:**\xa0 *Advanced*"),(0,i.kt)("br",null)," ",(0,i.kt)(a.Z,{mdxType:"Icon"}," track_changes ")," ",(0,i.kt)(s.Z,{mdxType:"Markdown"},"\xa0**Goal:**\xa0 *learn how to use QTrobot Offline speech recognition*"),(0,i.kt)("br",null)," ",(0,i.kt)(a.Z,{mdxType:"Icon"}," task_alt ")," ",(0,i.kt)(s.Z,{mdxType:"Markdown"},"\xa0**Requirements:**"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"\xa0","\xa0",(0,i.kt)("a",{parentName:"li",href:"/docs/intro_code"},"Quick start with coding on QTrobot")),(0,i.kt)("li",{parentName:"ul"},"\xa0","\xa0",(0,i.kt)("a",{parentName:"li",href:"/docs/tutorials/python/python_ros_project"},"Create a ROS python project")),(0,i.kt)("li",{parentName:"ul"},"\xa0","\xa0",(0,i.kt)("a",{parentName:"li",href:"/docs/tutorials/python/python_ros_services"},"QTrobot interfaces using ROS Services"))))),(0,i.kt)("p",null,"In this tutorial we will learn about how to use ",(0,i.kt)("inlineCode",{parentName:"p"},"QTrobot Offline speech recognition"),". "),(0,i.kt)("h2",{id:"create-a-python-project"},"Create a python project"),(0,i.kt)("p",null,"First we create a python project for our tutorial. let's call it ",(0,i.kt)("inlineCode",{parentName:"p"},"tutorial_qt_vosk")," and add the required python file: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'cd ~/catkin_ws/src\ncatkin_create_pkg tutorial_qt_vosk rospy roscpp -D "Command QTrobot via ROS Services"\ncd tutorial_qt_vosk/src\ntouch tutorial_qt_vosk_node.py\nchmod +x tutorial_qt_vosk_node.py\n')),(0,i.kt)("h2",{id:"qtrobot-speech-service"},"QTrobot speech service"),(0,i.kt)("p",null,"Following are some standard supported languages:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\xa0",(0,i.kt)("strong",{parentName:"li"},"en_US"),"\xa0(English)"),(0,i.kt)("li",{parentName:"ul"},"\xa0",(0,i.kt)("strong",{parentName:"li"},"fr_FR"),"\xa0(French)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"de_DE"),"\xa0(German)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"es_ES")," (Spanish)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"it_IT")," (Italian)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"pt_PT")," (Portuguese)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"nl_NL")," (Dutch)")),(0,i.kt)("p",null,"Open the ",(0,i.kt)("inlineCode",{parentName:"p"},"tutorial_qt_service_node.py")," file and the add the following code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"#!/usr/bin/env python\nimport sys\nimport rospy\nfrom qt_robot_interface.srv import *\nfrom qt_vosk_app.srv import *\n\nif __name__ == '__main__':\n\n    rospy.init_node('my_tutorial_node')\n    rospy.loginfo(\"my_tutorial_node started!\")\n\n    # define a ros service\n    speechSay = rospy.ServiceProxy('/qt_robot/speech/say', speech_say)\n    recognize = rospy.ServiceProxy('/qt_robot/speech/recognize', speech_recognize)\n    # block/wait for ros service\n    rospy.wait_for_service('/qt_robot/speech/say')\n    rospy.wait_for_service('/qt_robot/speech/recognize')\n\n    try:\n        # call a ros service with text message\n        speechSay(\"Say something after the beep.\")\n        speechSay('#CAR HORN#')\n        resp = recognize(\"en_US\", ['blue', 'green', 'red'], 10)\n        rospy.loginfo(\"I got: %s\", resp.transcript)\n        speechSay(\"You said %s \" % resp.transcript)\n    except KeyboardInterrupt:\n        pass\n\n    rospy.loginfo(\"finsihed!\")\n\n")),(0,i.kt)("h2",{id:"tips"},"Tips"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"When you run the code or when you call the service from command line always wait a least 1 second before saying something, so that microphone has time to open."),(0,i.kt)("li",{parentName:"ol"},"It might not work on the first call when you switch the language, second one will be ok."),(0,i.kt)("li",{parentName:"ol"},"Using options for better detection of words. If you want to get exactly 'yes' or 'no', you just need to call the service with this options ","['yes','no']",". Even if you say some really long sentence, it will detect just 'yes' or 'no'.")))}m.isMDXComponent=!0}}]);