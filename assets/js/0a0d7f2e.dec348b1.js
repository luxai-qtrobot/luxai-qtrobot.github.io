"use strict";(self.webpackChunkqtrobot_documentation=self.webpackChunkqtrobot_documentation||[]).push([[9794],{29859:function(t,o,e){e.r(o),e.d(o,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return m},assets:function(){return u},toc:function(){return d},default:function(){return _}});var n=e(87462),r=e(63366),l=(e(67294),e(3905)),a=e(55381),i=e(14702),p=["components"],s={id:"cpp_motor_controller",title:"ROS motor controller for QTrobot",hide_table_of_contents:!0},c=void 0,m={unversionedId:"tutorials/cpp/cpp_motor_controller",id:"version-QTRD_v1/tutorials/cpp/cpp_motor_controller",title:"ROS motor controller for QTrobot",description:"signalcellularalt &nbsp;Level:&nbsp; Advanced",source:"@site/versioned_docs/version-QTRD_v1/tutorials/cpp/cpp_motor_controller.md",sourceDirName:"tutorials/cpp",slug:"/tutorials/cpp/cpp_motor_controller",permalink:"/docs/v1/tutorials/cpp/cpp_motor_controller",tags:[],version:"QTRD_v1",frontMatter:{id:"cpp_motor_controller",title:"ROS motor controller for QTrobot",hide_table_of_contents:!0},sidebar:"version-QTRD_v1/code_tutorials_sidebar",previous:{title:"Using QTrobot interfaces",permalink:"/docs/v1/tutorials/cpp/cpp_ros_interfaces"},next:{title:"Using QTrobot with JavaScript",permalink:"/docs/v1/tutorials/javascript/js_ros_interfaces"}},u={},d=[{value:"What it does?",id:"what-it-does",level:2},{value:"Compilation and build",id:"compilation-and-build",level:2},{value:"Configuration and launching",id:"configuration-and-launching",level:2},{value:"Re-launch qt_motor node",id:"re-launch-qt_motor-node",level:2},{value:"Testing",id:"testing",level:2}],k={toc:d};function _(t){var o=t.components,e=(0,r.Z)(t,p);return(0,l.kt)("wrapper",(0,n.Z)({},k,e,{components:o,mdxType:"MDXLayout"}),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Overview")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)(a.Z,{mdxType:"Icon"},"signal_cellular_alt")," ",(0,l.kt)(i.Z,{mdxType:"Markdown"},"\xa0**Level:**\xa0 *Advanced*"),(0,l.kt)("br",null)," ",(0,l.kt)(a.Z,{mdxType:"Icon"}," track_changes ")," ",(0,l.kt)(i.Z,{mdxType:"Markdown"},"\xa0**Goal:**\xa0 *learn how to implement ROS motor controller for QTrobot*"),(0,l.kt)("br",null)," ",(0,l.kt)(a.Z,{mdxType:"Icon"}," task_alt ")," ",(0,l.kt)(i.Z,{mdxType:"Markdown"},"\xa0**Requirements:**"),(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"\xa0","\xa0",(0,l.kt)("a",{parentName:"li",href:"/docs/intro_code"},"Quick start with coding on QTrobot")),(0,l.kt)("li",{parentName:"ul"},"\xa0","\xa0",(0,l.kt)("a",{parentName:"li",href:"/docs/tutorials/cpp/cpp_ros_project"},"Create a ROS C++ project"))))),(0,l.kt)("p",null,"This example shows how to write a new ROS controller for QTrobot on ",(0,l.kt)("strong",{parentName:"p"},"QTRP"),". Before getting into that, make sure you know and understand what is ",(0,l.kt)("a",{parentName:"p",href:"http://wiki.ros.org/ros_control"},"ROS Control"),"."),(0,l.kt)("h2",{id:"what-it-does"},"What it does?"),(0,l.kt)("p",null,"this controller simply play a predefined trajectory directly by commanding the QTrobot motors at hardware level. You can use it as a simple template to implement more sophisticate controllers.  "),(0,l.kt)("h2",{id:"compilation-and-build"},"Compilation and build"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"copy ",(0,l.kt)("inlineCode",{parentName:"p"},"motors_custom_controller")," to the ",(0,l.kt)("inlineCode",{parentName:"p"},"~/catckin_ws"),"on the RPI of QTrobot")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"build the example code:"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"cd ~/catckin_ws\ncatkin_make --pkg motors_custom_controller\n")),(0,l.kt)("h2",{id:"configuration-and-launching"},"Configuration and launching"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"modify the qt_motor config file to define your new controller. to do that open ",(0,l.kt)("inlineCode",{parentName:"li"},"/opt/ros/noetic/share/qt_motor/config/qtrobot-controller.yaml")," file and add the following lines to the end of the file.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"  custom:\n    type: motors_custom_controller/QTCustomController\n    myparam: bar\n\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"modify qt_motor launch file to load and run your controller. to do that, open ",(0,l.kt)("inlineCode",{parentName:"li"},"/opt/ros/noetic/share/qt_motor/launch/qt_motor.launch")," and add ",(0,l.kt)("inlineCode",{parentName:"li"},"/qt_robot/custom")," controller to ",(0,l.kt)("inlineCode",{parentName:"li"},"controller_manager")," node. it should look like this:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'\x3c!-- load the controllers --\x3e\n <node pkg="controller_manager" name="controller" type="spawner" launch-prefix="bash -c \'sleep 15; $0 $@\' " respawn="false"\n       output="screen" clear_params="true"  args="/qt_robot/head_position\n                             /qt_robot/right_arm_position\n                             /qt_robot/left_arm_position\n                             /qt_robot/joints_state\n                             /qt_robot/motors\n                             /qt_robot/gesture\n                             /qt_robot/custom"/>\n')),(0,l.kt)("h2",{id:"re-launch-qt_motor-node"},"Re-launch qt_motor node"),(0,l.kt)("p",null,"you can simply reboot the robot or launch the ",(0,l.kt)("inlineCode",{parentName:"p"},"qt_motor")," node from terminal to see its output."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"stop the running instance:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"ps -aux | grep qt_motor | grep SCREEN\n...\nkill xxx\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"launch ",(0,l.kt)("inlineCode",{parentName:"li"},"qt_motor")," node")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"roslaunch qt_motor qt_motor.launch\n")),(0,l.kt)("p",null,"you should see your controller (",(0,l.kt)("inlineCode",{parentName:"p"},"QTCustomController"),") running by checking the terminal output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"...\n[INFO] [1576498210.924577]: Controller Spawner: Loaded controllers: /qt_robot/head_position, /qt_robot/right_arm_position, /qt_robot/left_arm_position, /qt_robot/joints_state, /qt_robot/motors, /qt_robot/gesture, /qt_robot/custom\n[ INFO] [1576498210.984396566]: QTMotorsController: starting\n[ INFO] [1576498210.985034385]: QTGestureController: starting\n[ INFO] [1576498210.985518609]: QTCustomController: starting\n...\n")),(0,l.kt)("h2",{id:"testing"},"Testing"),(0,l.kt)("p",null,"your custom controller implement a service to Start/Stop it."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"to start the trajectory player, open another terminal and")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'rosservice call /qt_robot/custom/startstop "command: true"\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"to stop the trajectory player:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'rosservice call /qt_robot/custom/startstop "command: false"\n')))}_.isMDXComponent=!0}}]);