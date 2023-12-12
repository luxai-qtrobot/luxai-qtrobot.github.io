"use strict";(self.webpackChunkqtrobot_documentation=self.webpackChunkqtrobot_documentation||[]).push([[1502],{3565:(o,t,e)=>{e.r(t),e.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var n=e(5893),r=e(1151),l=e(9656);const s={id:"cpp_motor_controller",title:"ROS motor controller for QTrobot",hide_table_of_contents:!0},i=void 0,c={id:"tutorials/cpp/cpp_motor_controller",title:"ROS motor controller for QTrobot",description:"signalcellularalt &nbsp;Level:&nbsp; Advanced",source:"@site/docs/tutorials/cpp/cpp_motor_controller.mdx",sourceDirName:"tutorials/cpp",slug:"/tutorials/cpp/cpp_motor_controller",permalink:"/docs/tutorials/cpp/cpp_motor_controller",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"cpp_motor_controller",title:"ROS motor controller for QTrobot",hide_table_of_contents:!0},sidebar:"code_tutorials_sidebar",previous:{title:"Using QTrobot interfaces",permalink:"/docs/tutorials/cpp/cpp_ros_interfaces"},next:{title:"Using QTrobot with JavaScript",permalink:"/docs/tutorials/javascript/js_ros_interfaces"}},a={},d=[{value:"What it does?",id:"what-it-does",level:2},{value:"Compilation and build",id:"compilation-and-build",level:2},{value:"Configuration and launching",id:"configuration-and-launching",level:2},{value:"Re-launch qt_motor node",id:"re-launch-qt_motor-node",level:2},{value:"Testing",id:"testing",level:2}];function h(o){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...o.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.admonition,{title:"Overview",type:"info",children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(l.Z,{children:"signal_cellular_alt"})," \xa0",(0,n.jsx)(t.strong,{children:"Level:"}),"\xa0 ",(0,n.jsx)(t.em,{children:"Advanced"}),"\n",(0,n.jsx)("br",{})," ",(0,n.jsx)(l.Z,{children:" track_changes "})," \xa0",(0,n.jsx)(t.strong,{children:"Goal:"}),"\xa0 ",(0,n.jsx)(t.em,{children:"learn how to implement ROS motor controller for QTrobot"}),"\n",(0,n.jsx)("br",{})," ",(0,n.jsx)(l.Z,{children:" task_alt "})," \xa0",(0,n.jsx)(t.strong,{children:"Requirements:"})]}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\xa0\xa0",(0,n.jsx)(t.a,{href:"/docs/intro_code",children:"Quick start with coding on QTrobot"})]}),"\n",(0,n.jsxs)(t.li,{children:["\xa0\xa0",(0,n.jsx)(t.a,{href:"/docs/tutorials/cpp/cpp_ros_project",children:"Create a ROS C++ project"})]}),"\n"]})]}),"\n",(0,n.jsxs)(t.p,{children:["This example shows how to write a new ROS controller for QTrobot on ",(0,n.jsx)(t.strong,{children:"QTRP"}),". Before getting into that, make sure you know and understand what is ",(0,n.jsx)(t.a,{href:"http://wiki.ros.org/ros_control",children:"ROS Control"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"what-it-does",children:"What it does?"}),"\n",(0,n.jsx)(t.p,{children:"this controller simply play a predefined trajectory directly by commanding the QTrobot motors at hardware level. You can use it as a simple template to implement more sophisticate controllers."}),"\n",(0,n.jsx)(t.h2,{id:"compilation-and-build",children:"Compilation and build"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["copy ",(0,n.jsx)(t.code,{children:"motors_custom_controller"})," to the ",(0,n.jsx)(t.code,{children:"~/catckin_ws"}),"on the RPI of QTrobot"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"build the example code:"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"cd ~/catckin_ws\ncatkin_make --pkg motors_custom_controller\n"})}),"\n",(0,n.jsx)(t.h2,{id:"configuration-and-launching",children:"Configuration and launching"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["modify the qt_motor config file to define your new controller. to do that open ",(0,n.jsx)(t.code,{children:"/opt/ros/noetic/share/qt_motor/config/qtrobot-controller.yaml"})," file and add the following lines to the end of the file."]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"  custom:\n    type: motors_custom_controller/QTCustomController\n    myparam: bar\n\n"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["modify qt_motor launch file to load and run your controller. to do that, open ",(0,n.jsx)(t.code,{children:"/opt/ros/noetic/share/qt_motor/launch/qt_motor.launch"})," and add ",(0,n.jsx)(t.code,{children:"/qt_robot/custom"})," controller to ",(0,n.jsx)(t.code,{children:"controller_manager"})," node. it should look like this:"]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'\x3c!-- load the controllers --\x3e\n <node pkg="controller_manager" name="controller" type="spawner" launch-prefix="bash -c \'sleep 15; $0 $@\' " respawn="false"\n       output="screen" clear_params="true"  args="/qt_robot/head_position\n                             /qt_robot/right_arm_position\n                             /qt_robot/left_arm_position\n                             /qt_robot/joints_state\n                             /qt_robot/motors\n                             /qt_robot/gesture\n                             /qt_robot/custom"/>\n'})}),"\n",(0,n.jsx)(t.h2,{id:"re-launch-qt_motor-node",children:"Re-launch qt_motor node"}),"\n",(0,n.jsxs)(t.p,{children:["you can simply reboot the robot or launch the ",(0,n.jsx)(t.code,{children:"qt_motor"})," node from terminal to see its output."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"stop the running instance:"}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"ps -aux | grep qt_motor | grep SCREEN\n...\nkill xxx\n"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["launch ",(0,n.jsx)(t.code,{children:"qt_motor"})," node"]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"roslaunch qt_motor qt_motor.launch\n"})}),"\n",(0,n.jsxs)(t.p,{children:["you should see your controller (",(0,n.jsx)(t.code,{children:"QTCustomController"}),") running by checking the terminal output:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"...\n[INFO] [1576498210.924577]: Controller Spawner: Loaded controllers: /qt_robot/head_position, /qt_robot/right_arm_position, /qt_robot/left_arm_position, /qt_robot/joints_state, /qt_robot/motors, /qt_robot/gesture, /qt_robot/custom\n[ INFO] [1576498210.984396566]: QTMotorsController: starting\n[ INFO] [1576498210.985034385]: QTGestureController: starting\n[ INFO] [1576498210.985518609]: QTCustomController: starting\n...\n"})}),"\n",(0,n.jsx)(t.h2,{id:"testing",children:"Testing"}),"\n",(0,n.jsx)(t.p,{children:"your custom controller implement a service to Start/Stop it."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"to start the trajectory player, open another terminal and"}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'rosservice call /qt_robot/custom/startstop "command: true"\n'})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"to stop the trajectory player:"}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'rosservice call /qt_robot/custom/startstop "command: false"\n'})})]})}function p(o={}){const{wrapper:t}={...(0,r.a)(),...o.components};return t?(0,n.jsx)(t,{...o,children:(0,n.jsx)(h,{...o})}):h(o)}}}]);