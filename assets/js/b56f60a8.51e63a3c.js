"use strict";(self.webpackChunkqtrobot_documentation=self.webpackChunkqtrobot_documentation||[]).push([[2285],{5378:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var n=s(5893),o=s(1151),i=s(9656);const r={id:"cpp_ros_interfaces",title:"Using QTrobot interfaces",hide_table_of_contents:!0},a=void 0,c={id:"tutorials/cpp/cpp_ros_interfaces",title:"Using QTrobot interfaces",description:"signalcellularalt &nbsp;Level:&nbsp; Intermediate",source:"@site/versioned_docs/version-QTRD_v1/tutorials/cpp/cpp_ros_interfaces.mdx",sourceDirName:"tutorials/cpp",slug:"/tutorials/cpp/cpp_ros_interfaces",permalink:"/docs/v1/tutorials/cpp/cpp_ros_interfaces",draft:!1,unlisted:!1,tags:[],version:"QTRD_v1",frontMatter:{id:"cpp_ros_interfaces",title:"Using QTrobot interfaces",hide_table_of_contents:!0},sidebar:"code_tutorials_sidebar",previous:{title:"Create a ROS C++ project",permalink:"/docs/v1/tutorials/cpp/cpp_ros_project"},next:{title:"ROS motor controller for QTrobot",permalink:"/docs/v1/tutorials/cpp/cpp_motor_controller"}},l={},d=[{value:"Create a C++ project",id:"create-a-c-project",level:2},{value:"Using ROS publishers",id:"using-ros-publishers",level:2},{value:"QTrobot text to speech interface",id:"qtrobot-text-to-speech-interface",level:3},{value:"QTrobot talk text interface",id:"qtrobot-talk-text-interface",level:3},{value:"QTrobot emotion interface",id:"qtrobot-emotion-interface",level:3},{value:"QTrobot gesture interface",id:"qtrobot-gesture-interface",level:3},{value:"QTrobot audio interface",id:"qtrobot-audio-interface",level:3},{value:"Using ROS services",id:"using-ros-services",level:2},{value:"Using ROS subscribers",id:"using-ros-subscribers",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.admonition,{title:"Overview",type:"info",children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(i.Z,{children:"signal_cellular_alt"})," \xa0",(0,n.jsx)(t.strong,{children:"Level:"}),"\xa0 ",(0,n.jsx)(t.em,{children:"Intermediate"}),"\n",(0,n.jsx)("br",{})," ",(0,n.jsx)(i.Z,{children:" track_changes "})," \xa0",(0,n.jsx)(t.strong,{children:"Goal:"}),"\xa0 ",(0,n.jsx)(t.em,{children:"learn how to access QTrobot interfaces such as speech, emotion, gesture, etc in C++ via ROS publishers and services"}),"\n",(0,n.jsx)("br",{})," ",(0,n.jsx)(i.Z,{children:" task_alt "})," \xa0",(0,n.jsx)(t.strong,{children:"Requirements:"})]}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\xa0\xa0",(0,n.jsx)(t.a,{href:"/docs/intro_code",children:"Quick start with coding on QTrobot"})]}),"\n",(0,n.jsxs)(t.li,{children:["\xa0\xa0",(0,n.jsx)(t.a,{href:"/docs/tutorials/cpp/cpp_ros_project",children:"Create a ROS C++ project"})]}),"\n"]})]}),"\n",(0,n.jsxs)(t.p,{children:["If you have followed our previous tutorials, you should know how to start coding on QTrobot with C++ and got the basic knowledge of ROS framework.  In this tutorial we will learn about how to access ",(0,n.jsx)(t.a,{href:"/docs/api_ros#list-of-available-interfaces",children:"QTrobot interfaces"})," such as speech and audio interface using ROS publishers and service calls."]}),"\n",(0,n.jsx)(t.h2,{id:"create-a-c-project",children:"Create a C++ project"}),"\n",(0,n.jsxs)(t.p,{children:["First we create a C++ project for our tutorial. let's call it ",(0,n.jsx)(t.code,{children:"tutorial_qt_interfaces"})," and add the required C++ file:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'cd ~/catkin_ws/src\ncatkin_create_pkg tutorial_qt_interfaces std_msgs roscpp -D "Command QTrobot via ROS"\ncd tutorial_qt_interfaces/src\ntouch tutorial_qt_interfaces_node.cpp\n'})}),"\n",(0,n.jsxs)(t.p,{children:["Remember to update the ",(0,n.jsx)(t.code,{children:"tutorial_qt_interfaces/CMakeLists.txt"})," file correspondingly:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-cmake",children:"add_executable(${PROJECT_NAME}_node src/tutorial_qt_interfaces_node.cpp)\n# ... \ntarget_link_libraries(${PROJECT_NAME}_node ${catkin_LIBRARIES} )\n"})}),"\n",(0,n.jsx)(t.h2,{id:"using-ros-publishers",children:"Using ROS publishers"}),"\n",(0,n.jsx)(t.p,{children:"Most of  QTrobot\u2019s functionalities can be accessed in both blocking and non-blocking modes using ROS publish/subscribe and Service/Client interfaces. First we see how we can access those interfaces using ROS publishers."}),"\n",(0,n.jsx)(t.h3,{id:"qtrobot-text-to-speech-interface",children:"QTrobot text to speech interface"}),"\n",(0,n.jsxs)(t.p,{children:["Open the ",(0,n.jsx)(t.code,{children:"tutorial_qt_publisher_node.cpp"})," file and the add the following code:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-c++",children:'#include "ros/ros.h"\n#include "std_msgs/String.h"\n\nint main(int argc, char **argv) {\n    ros::init(argc, argv, "my_cpp_tutorial_node");    \n    ROS_INFO_STREAM("my_cpp_tutorial_node is started");\n    ros::NodeHandle n;\n\n    ros::Publisher speechSay_pub = n.advertise<std_msgs::String>("/qt_robot/speech/say", 10);\n    ros::Duration(3.0).sleep();\n\n    std_msgs::String msg;\n    msg.data = "Hello! I am Q.T!";\n    speechSay_pub.publish(msg);\n\n    ros::spin();    \n    return 0;\n}\n\n'})}),"\n",(0,n.jsxs)(t.p,{children:["First we included ",(0,n.jsx)(t.code,{children:"std_msgs/String.h"})," from ROS standard message library. This message is used in ",(0,n.jsx)(t.code,{children:"/qt_robot/speech/say"})," to communicate with QTrobot speech (TTS) interface."]}),"\n",(0,n.jsxs)(t.admonition,{title:"Tip",type:"tip",children:[(0,n.jsx)(t.p,{children:"How do we know which message type an interface uses? well, There is a useful command in ROS which tells you that:"}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"rostopic info /qt_robot/speech/say\nType: std_msgs/String\n...\n"})})]}),"\n",(0,n.jsx)(t.p,{children:"Then we created a publisher to '/qt_robot/speech/say' topic and wait for few seconds to establish the connection with the interface."}),"\n",(0,n.jsxs)(t.admonition,{title:"Tip",type:"tip",children:[(0,n.jsxs)(t.p,{children:["In the above example, for simplicity we used few seconds of delay using ",(0,n.jsx)(t.code,{children:"sleep"})," function. A more appropriate way is to wait and check until the connection with a subscriber is established using ",(0,n.jsx)(t.code,{children:"speechSay_pub.getNumSubscribers()"}),"!"]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{})})]}),"\n",(0,n.jsx)(t.p,{children:"Finally we published a text message to QTrobot speech interface which make the robot read that message."}),"\n",(0,n.jsx)(t.h3,{id:"qtrobot-talk-text-interface",children:"QTrobot talk text interface"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"/qt_robot/behavior/talkText"})," interface is similar to ",(0,n.jsx)(t.code,{children:"/qt_robot/speech/say"})," interface with the only different that the talkText interface asks QTrobot to move his lips while reading the text messages. To try it, just add the following lines to our code:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-c++",children:'ros::Publisher behaviorTalkText_pub = n.advertise<std_msgs::String>("/qt_robot/behavior/talkText", 10);\nmsg.data = "Hello! I am Q.T!";\nbehaviorTalkText_pub.publish(msg);\n'})}),"\n",(0,n.jsx)(t.h3,{id:"qtrobot-emotion-interface",children:"QTrobot emotion interface"}),"\n",(0,n.jsxs)(t.p,{children:["Now lets show an emotion on QTrobot face. QTrobot comes with plenty of predefined emotion animations. You can find the complete list of the available emotions either using the ",(0,n.jsx)(t.em,{children:"QTrobot Educator app"})," or by looking into the ",(0,n.jsx)(t.code,{children:"~/robot/data/emotions"})," folder in ",(0,n.jsx)(t.strong,{children:"QTRP"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"Add the following lines to our code to show the 'happy' emotion under 'QT' category on QTrobot face:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-c++",children:'ros::Publisher emotionShow_pub = n.advertise<std_msgs::String>("/qt_robot/emotion/show", 10);\nmsg.data = "QT/happy";\nemotionShow_pub.publish(msg);\n'})}),"\n",(0,n.jsx)(t.admonition,{title:"Note",type:"note",children:(0,n.jsxs)(t.p,{children:["As it shown in the above example, you should ",(0,n.jsx)(t.strong,{children:"not"})," give the emotion's file extention (",(0,n.jsx)(t.code,{children:".avi"}),") to the interface!"]})}),"\n",(0,n.jsx)(t.h3,{id:"qtrobot-gesture-interface",children:"QTrobot gesture interface"}),"\n",(0,n.jsxs)(t.p,{children:["Now lets play a gesture by QTrobot. QTrobot comes with plenty of predefined gestures. You can find the complete list of the available gestures either using the ",(0,n.jsx)(t.em,{children:"QTrobot Educator app"})," or by looking into the ",(0,n.jsx)(t.code,{children:"~/robot/data/gestures"})," folder in ",(0,n.jsx)(t.strong,{children:"QTRP"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"Add the following lines to our code to play the 'clapping' gesture under 'QT' category:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-c++",children:'ros::Publisher gesturePlay_pub = n.advertise<std_msgs::String>("/qt_robot/gesture/play", 10);\nmsg.data = "QT/clapping";\ngesturePlay_pub.publish(msg);\n'})}),"\n",(0,n.jsx)(t.admonition,{title:"Note",type:"note",children:(0,n.jsxs)(t.p,{children:["As it shown in the above example, you should ",(0,n.jsx)(t.strong,{children:"not"})," give the gestures's file extention (",(0,n.jsx)(t.code,{children:".xml"}),") to the interface!"]})}),"\n",(0,n.jsx)(t.h3,{id:"qtrobot-audio-interface",children:"QTrobot audio interface"}),"\n",(0,n.jsxs)(t.p,{children:["Now lets play an audio file on QTrobot. QTrobot comes with some audio examples. You can find the complete list of the available audios either using the ",(0,n.jsx)(t.em,{children:"QTrobot Educator app"})," or by looking into the ",(0,n.jsx)(t.code,{children:"~/robot/data/audios"})," folder in ",(0,n.jsx)(t.strong,{children:"QTRP"}),".  QTrobot can play both audio ",(0,n.jsx)(t.em,{children:"wave"})," and ",(0,n.jsx)(t.em,{children:"mp3"})," files."]}),"\n",(0,n.jsx)(t.p,{children:"Add the following lines to our code to play the 'Komiku_Glouglou' audio file under 'QT' category:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'ros::Publisher audioPlay_pub = n.advertise<std_msgs::String>("/qt_robot/audio/play", 10);\nmsg.data = "QT/Komiku_Glouglou";\naudioPlay_pub.publish(msg);\n'})}),"\n",(0,n.jsx)(t.admonition,{title:"Note",type:"note",children:(0,n.jsxs)(t.p,{children:["As it shown in the above example, you do not need to give the audio's file extention (",(0,n.jsx)(t.code,{children:".wav"})," or ",(0,n.jsx)(t.code,{children:".mp3"}),") to the interface!"]})}),"\n",(0,n.jsx)(t.h2,{id:"using-ros-services",children:"Using ROS services"}),"\n",(0,n.jsx)(t.p,{children:"In the above examples, we have seen how we could access those interfaces using ROS publishers. In the following sections, we will learn how to call those interfaces using ROS service calls. The difference is that using service call, our code access the QTrobot interfaces in blocking mode; meaning that, for example, if we ask QTrobot to play a gesture, our code wait untill the gesture is commpleted before moving to the next line of the code."}),"\n",(0,n.jsx)(t.p,{children:"Now let's try some of QTrobot services using ROS service call."}),"\n",(0,n.jsxs)(t.p,{children:["Update ",(0,n.jsx)(t.code,{children:"include_directories"})," of ",(0,n.jsx)(t.code,{children:"tutorial_qt_interfaces/CMakeLists.txt"})," as follows:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-cmake",children:"include_directories(\n  ${CATKIN_DEVEL_PREFIX}/include\n  ${catkin_INCLUDE_DIRS}\n)\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Modify the ",(0,n.jsx)(t.code,{children:"tutorial_qt_publisher_node.cpp"})," with the following code:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-c++",children:'#include "ros/ros.h"\n#include "qt_robot_interface/speech_say.h"\n\nint main(int argc, char **argv) {\n    ros::init(argc, argv, "my_cpp_tutorial_node");\n    ROS_INFO_STREAM("my_cpp_tutorial_node is started");\n    ros::NodeHandle n;\n\n    ros::ServiceClient speechSay = n.serviceClient<qt_robot_interface::speech_say>("/qt_robot/speech/say");\n    speechSay.waitForExistence();\n    qt_robot_interface::speech_say cmd;\n    cmd.request.message = "Hello! I am QT!";\n    ROS_INFO_STREAM("calling speechSay...");\n    speechSay.call(cmd);\n    ROS_INFO("speechSay return status: %s", (cmd.response.status) ? "okay" : "error");\n\n    ros::spin();\n    return 0;\n}\n'})}),"\n",(0,n.jsxs)(t.p,{children:["ROS Services are defined by srv files, which contains a request and a response objects. These objects are already compiled in C++ classes by catkin build system. All we need to do is to include them in our C++ code (e.g. ",(0,n.jsx)(t.code,{children:'#include "qt_robot_interface/speech_say.h"'}),"). Then we created a client instant of ",(0,n.jsx)(t.code,{children:"speech_say"})," service. The optional ",(0,n.jsx)(t.code,{children:"waitForExistence()"})," waits fot he speech service to be available for the first time. We also created a request command with our desired message; and finally called the service and checked its return status values. The ",(0,n.jsx)(t.code,{children:"speech_say"})," service request has only one paramter which is ",(0,n.jsx)(t.code,{children:"meesage"})," to be read by QTrobot."]}),"\n",(0,n.jsxs)(t.admonition,{title:"Tip",type:"tip",children:[(0,n.jsx)(t.p,{children:"How do we know which paramters a service needs? well, There is a useful command in ROS which tells you that:"}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"rosservice info /qt_robot/speech/say\nType: qt_robot_interface/speech_say\nArgs: message\n...\n"})})]}),"\n",(0,n.jsx)(t.h2,{id:"using-ros-subscribers",children:"Using ROS subscribers"}),"\n",(0,n.jsxs)(t.p,{children:["Let's see how we can use ROS susbcribers to read some data from QTrobot. For this example, we will read the output of the Nuitrack gesture detecor. This data is published by QTrobot nuitrack interface on ",(0,n.jsx)(t.code,{children:"/qt_nuitrack_app/gestures"})," topic. You can read more about all availables data from nuitrak on ",(0,n.jsx)(t.a,{href:"/docs/api_ros#human-3d-tracking-interface",children:"Human 3D Tracking Interface"}),". The QTrobot gesture mesasge has the following fields:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"qt_nuitrack_app/GestureInfo[] gestures\n  int32 id\n  string name\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Modify the ",(0,n.jsx)(t.code,{children:"tutorial_qt_publisher_node.cpp"})," with the following code:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-c++",children:'#include "ros/ros.h"\n#include "qt_robot_interface/speech_say.h"\n#include "qt_nuitrack_app/Gestures.h"\n\nvoid callback(const qt_nuitrack_app::Gestures::ConstPtr& gestures) {\n    for(int i=0; i<gestures->gestures.size(); i++) {\n        ROS_INFO_STREAM("Detected gesture: " <<gestures->gestures[i].name << " by user : "<< gestures->gestures[i].id);\n    }\n}\n\nint main(int argc, char **argv) {\n    ros::init(argc, argv, "my_cpp_tutorial_node");\n    ROS_INFO_STREAM("my_cpp_tutorial_node is started");\n    ros::NodeHandle n;\n\n    ros::Subscriber subGestures = n.subscribe("/qt_nuitrack_app/gestures", 10, callback);\n    ROS_INFO_STREAM("Stay in front of QTrobot around 1-2m away and raise your arm!");\n\n    ros::spin();\n    return 0;\n}\n'})}),"\n",(0,n.jsxs)(t.p,{children:["First we defined a callback to receive the gestures message and print out the gesture name and the user identification. Then in our main code, we subscribed to the ",(0,n.jsx)(t.code,{children:"/qt_nuitrack_app/gestures"})," topic. If we run the code and stay in front of the QTrobot (approcimately 2m away from its camera) and raise one arm and lower it, our code will print out the ",(0,n.jsx)(t.em,{children:"SWIPE UP"})," and * SWIPE DOWN*.  You can see an example of more gestures in ",(0,n.jsx)(t.a,{href:"https://www.youtube.com/watch?v=AilQdxJQeIA",children:"QTrobot - 3D Camera - Gesture recognition"})," demo or check the ",(0,n.jsx)(t.a,{href:"https://download.3divi.com/Nuitrack/doc/group__GestureRecognizer__group.html",children:"list of available gestures"})," on Nuitrack offcial website."]})]})}function u(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}}}]);