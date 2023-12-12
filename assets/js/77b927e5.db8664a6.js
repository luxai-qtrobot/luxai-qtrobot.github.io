"use strict";(self.webpackChunkqtrobot_documentation=self.webpackChunkqtrobot_documentation||[]).push([[3926],{8146:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var t=r(5893),o=r(1151),a=r(9656);const i={id:"cpp_ros_project",title:"Create a ROS C++ project",hide_table_of_contents:!0},c=void 0,s={id:"tutorials/cpp/cpp_ros_project",title:"Create a ROS C++ project",description:"signalcellularalt &nbsp;Level:&nbsp; Basic",source:"@site/versioned_docs/version-QTRD_v1/tutorials/cpp/cpp_ros_pkg.mdx",sourceDirName:"tutorials/cpp",slug:"/tutorials/cpp/cpp_ros_project",permalink:"/docs/v1/tutorials/cpp/cpp_ros_project",draft:!1,unlisted:!1,tags:[],version:"QTRD_v1",frontMatter:{id:"cpp_ros_project",title:"Create a ROS C++ project",hide_table_of_contents:!0},sidebar:"code_tutorials_sidebar",previous:{title:"Controlling QTrobot arms using MoveIt",permalink:"/docs/v1/tutorials/python/python_ros_moveit"},next:{title:"Using QTrobot interfaces",permalink:"/docs/v1/tutorials/cpp/cpp_ros_interfaces"}},l={},d=[{value:"What is catkin?",id:"what-is-catkin",level:2},{value:"Structure of catkin workspace folder",id:"structure-of-catkin-workspace-folder",level:3},{value:"Our first C++ project",id:"our-first-c-project",level:2},{value:"Create project&#39;s structure",id:"create-projects-structure",level:3},{value:"Create C++ code file",id:"create-c-code-file",level:3},{value:"Update Cmake file",id:"update-cmake-file",level:3},{value:"Build and configure our C++ project",id:"build-and-configure-our-c-project",level:3},{value:"Run and check our C++ project",id:"run-and-check-our-c-project",level:3},{value:"Adding parameters to our C++ project",id:"adding-parameters-to-our-c-project",level:2},{value:"Preparing ROS launch file",id:"preparing-ros-launch-file",level:2},{value:"Running our C++ project using launch file",id:"running-our-c-project-using-launch-file",level:3},{value:"Setting parameters using launch file",id:"setting-parameters-using-launch-file",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",section:"section",strong:"strong",sup:"sup",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.admonition,{title:"Overview",type:"info",children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(a.Z,{children:"signal_cellular_alt"})," \xa0",(0,t.jsx)(n.strong,{children:"Level:"}),"\xa0 ",(0,t.jsx)(n.em,{children:"Basic"}),"\n",(0,t.jsx)("br",{})," ",(0,t.jsx)(a.Z,{children:" track_changes "})," \xa0",(0,t.jsx)(n.strong,{children:"Goal:"}),"\xa0 ",(0,t.jsx)(n.em,{children:"learn how to structure your C++ code using catkin package manager"}),"\n",(0,t.jsx)("br",{})," ",(0,t.jsx)(a.Z,{children:" task_alt "})," \xa0",(0,t.jsx)(n.strong,{children:"Requirements:"})]}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\xa0\xa0",(0,t.jsx)(n.a,{href:"/docs/intro_code",children:"Quick start with coding on QTrobot"})]}),"\n",(0,t.jsxs)(n.li,{children:["\xa0\xa0",(0,t.jsx)(n.a,{href:"/docs/tutorials/intro_ros",children:"Basic understanding of ROS framework"})]}),"\n",(0,t.jsx)(n.li,{children:"\xa0\xa0Good knowledge of C++ and Cmake build system"}),"\n"]})]}),"\n",(0,t.jsxs)(n.p,{children:["This tutorial guides you towards creating and structuring your C++ code for QTrobot. You will learn, how to create a ROS package for your C++ code, how to build it and how to run your code using ",(0,t.jsx)(n.code,{children:"rosrun"})," and ",(0,t.jsx)(n.code,{children:"roslaunch"}),". We will also show you how to configure your code using ROS parameters and launch file."]}),"\n",(0,t.jsx)(n.h2,{id:"what-is-catkin",children:"What is catkin?"}),"\n",(0,t.jsxs)(n.p,{children:["Catkin is the official build system of ROS. In some simple words, catkin helps you to better structure you code, its dependencies within an isolated workspace known as catkin workspace (e.g. ",(0,t.jsx)(n.code,{children:"~/catkin_ws"})," folder). Catkin offers different commands to create a ROS package, build and manage its dependencies.\nYou can ",(0,t.jsx)(n.a,{href:"http://wiki.ros.org/catkin/conceptual_overview",children:"read more about catkin"})," on official ROS website."]}),"\n",(0,t.jsx)(n.h3,{id:"structure-of-catkin-workspace-folder",children:"Structure of catkin workspace folder"}),"\n",(0,t.jsxs)(n.p,{children:["Catkin folder usually consists of ",(0,t.jsx)(n.code,{children:"src"}),", ",(0,t.jsx)(n.code,{children:"devel"})," and ",(0,t.jsx)(n.code,{children:"build"})," folder. The ",(0,t.jsx)(n.code,{children:"src"})," folder is the place where the your codes are hosted. the ",(0,t.jsx)(n.code,{children:"devel"})," and ",(0,t.jsx)(n.code,{children:"build"})," folder are automatically created and updated by catkin commands to configure and build your codes."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"~/catkin_ws\n    - src\n    - devel\n    - build\n"})}),"\n",(0,t.jsx)(n.admonition,{title:"Reminder",type:"warning",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Ensure that you have already read carefully the ",(0,t.jsx)(n.a,{href:"/docs/intro_code",children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"Quick start guide"})})})," for coding and have your setup ready to follow this tutorial on QTPC."]}),"\n",(0,t.jsxs)(n.li,{children:["Both QTRP and QTPC has its own catkin folder which are located in the home folder: ",(0,t.jsx)(n.code,{children:"~/catkin_ws"}),"! We are running this tutorial (and the most following tutorials) on the QTPC."]}),"\n"]})}),"\n",(0,t.jsx)(n.h2,{id:"our-first-c-project",children:"Our first C++ project"}),"\n",(0,t.jsxs)(n.p,{children:["In the following steps, we will create a package called ",(0,t.jsx)(n.code,{children:"my_cpp_tutorial"})," with the following information. Then step by step we fill it with our C++ code."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"package name"}),": ",(0,t.jsx)(n.code,{children:"my_cpp_tutorial"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"package dependencies"}),": ",(0,t.jsx)(n.code,{children:"std_msgs"}),", and ",(0,t.jsx)(n.code,{children:"roscpp"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"package description"}),": ",(0,t.jsx)(n.code,{children:"My first C++ tutorial"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"package version"}),": ",(0,t.jsx)(n.code,{children:"1.0.0"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"package author name"}),": ",(0,t.jsx)(n.code,{children:"my name"})]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"create-projects-structure",children:"Create project's structure"}),"\n",(0,t.jsxs)(n.p,{children:["Open a terminal on QTPC, switch to ",(0,t.jsx)(n.code,{children:"~/catkin_ws/src"})," folder and run the following commands:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'cd ~/catkin_ws/src\ncatkin_create_pkg my_cpp_tutorial std_msgs roscpp -D "My first C++ tutorial" -V "1.0.0" -a "my name"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["That creates a new package called ",(0,t.jsx)(n.code,{children:"my_cpp_tutorial"})," in the ",(0,t.jsx)(n.code,{children:"src"})," folder of our catkin workspace on QTPC:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Created file my_cpp_tutorial/package.xml\nCreated file my_cpp_tutorial/CMakeLists.txt\nCreated folder my_cpp_tutorial/include/my_tutorial\nCreated folder my_cpp_tutorial/src\nSuccessfully created files in /home/qtrobot/catkin_ws/src/my_cpp_tutorial. Please adjust the values in package.xml.\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You can open open the ",(0,t.jsx)(n.code,{children:"package.xml"})," file and update its content such as description, version, authors name, emails etc."]}),"\n",(0,t.jsx)(n.h3,{id:"create-c-code-file",children:"Create C++ code file"}),"\n",(0,t.jsx)(n.p,{children:"The above command only creates an empty structure for our project. We need to add our C++ files by ourselves as follows:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"cd my_cpp_tutorial/src touch my_cpp_tutorial_node.cpp"})}),"\n",(0,t.jsxs)(n.p,{children:["open the ",(0,t.jsx)(n.code,{children:"my_cpp_tutorial_node.cpp"})," file using your favorite editor",(0,t.jsx)(n.sup,{children:(0,t.jsx)(n.a,{href:"#user-content-fn-1",id:"user-content-fnref-1","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})})," and add the following content to it:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c++",children:'#include "ros/ros.h"\n\nint main(int argc, char **argv) {\n    ros::init(argc, argv, "my_cpp_tutorial_node");    \n    ROS_INFO_STREAM("my_cpp_tutorial_node is started");\n    ros::NodeHandle n;\n\n    ros::spin();    \n    return 0;\n}\n\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The above code simply starts a ROS node called ",(0,t.jsx)(n.em,{children:"my_cpp_tutorial_node"})," which does nothing until we press ",(0,t.jsx)(n.code,{children:"<CTRL+C>"})," to stop it."]}),"\n",(0,t.jsx)(n.h3,{id:"update-cmake-file",children:"Update Cmake file"}),"\n",(0,t.jsxs)(n.p,{children:["We also need to tell catkin to compile and build our C++ files. To do that, open ",(0,t.jsx)(n.code,{children:"my_cpp_tutorial/CMakeLists.txt"})," file and modify the following lines:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cmake",children:"## Declare a C++ executable\n## With catkin_make all packages are built within a single CMake context\n## The recommended prefix ensures that target names across packages don't collide\nadd_executable(${PROJECT_NAME}_node src/my_cpp_tutorial_node.cpp)\n\n## Specify libraries to link a library or executable target against\ntarget_link_libraries(${PROJECT_NAME}_node\n  ${catkin_LIBRARIES}\n)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["We have simply uncommented few lines in the original Cmake file. The ",(0,t.jsx)(n.code,{children:"add_executable(..."})," tells cmake to compile our ",(0,t.jsx)(n.code,{children:"my_cpp_tutorial_node.cpp"})," within ",(0,t.jsx)(n.code,{children:"src"})," folder and the ",(0,t.jsx)(n.code,{children:"target_link_libraries(..."})," command tells cmake to build an executable called ",(0,t.jsx)(n.code,{children:"my_cpp_tutorial_node"}),"!"]}),"\n",(0,t.jsxs)(n.p,{children:["You can ",(0,t.jsx)(n.a,{href:"https://cmake.org/cmake/help/latest/guide/tutorial/index.html",children:"read more about Cmake build system"})," on official Cmake website."]}),"\n",(0,t.jsx)(n.h3,{id:"build-and-configure-our-c-project",children:"Build and configure our C++ project"}),"\n",(0,t.jsxs)(n.p,{children:["Before adding an actual action to our C++ code, let's just first build and run it and check if everything is fine. To build a catkin package, we need to run ",(0,t.jsx)(n.code,{children:"catkin_make"})," command within catkin workspace."]}),"\n",(0,t.jsx)(n.admonition,{title:"Note",type:"note",children:(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"catkin_make"})," command must be run within the top most level of catkin workspace, that is in ",(0,t.jsx)(n.code,{children:"~/catkin_ws"})," and ",(0,t.jsx)(n.strong,{children:"NOT"})," in ",(0,t.jsx)(n.code,{children:"~/catkin_ws/src"}),"."]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd ~/catkin_ws\ncatkin_make\n"})}),"\n",(0,t.jsxs)(n.p,{children:["the above command compiles and builds our ",(0,t.jsx)(n.em,{children:"my_cpp_tutorial"})," package along with other packages in catkin source directory."]}),"\n",(0,t.jsx)(n.admonition,{title:"Tip",type:"tip",children:(0,t.jsxs)(n.p,{children:["To build a single package (e.g. ",(0,t.jsx)(n.em,{children:"my_cpp_tutorial"}),") from source directory, you can call ",(0,t.jsx)(n.code,{children:"catkin_make --pkg my_cpp_tutorial"}),"!"]})}),"\n",(0,t.jsx)(n.h3,{id:"run-and-check-our-c-project",children:"Run and check our C++ project"}),"\n",(0,t.jsxs)(n.p,{children:["There are different way to run a C++ project in ROS. You can simply run the executable file from command line. However, the most standard way of running a C++ project in ROS is to use ",(0,t.jsx)(n.code,{children:"rosrun"})," or ",(0,t.jsx)(n.code,{children:"roslaunch"})," command. Let's start with ",(0,t.jsx)(n.code,{children:"rosrun"})," command. The interesting fact of these two commands is that you do not need to be in the same folder or use the absolute path to run your C++ executable. You can run it from anywhere on QTPC as follows:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:" rosrun my_cpp_tutorial my_cpp_tutorial_node\n"})}),"\n",(0,t.jsxs)(n.p,{children:["the first parameter of ",(0,t.jsx)(n.em,{children:"rosrun"})," command is the name of our package and the second on is the name of our executable. That should creates a new ROS node called ",(0,t.jsx)(n.code,{children:"my_cpp_tutorial_node"})," in the ROS network. we can see it using ",(0,t.jsx)(n.code,{children:"rosnode list"})," command from another terminal:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:"{2}",children:"/controller\n/my_cpp_tutorial_node       <---\n/qt_motor\n/qt_nuitrack_app\n/qt_robot_interface\n/qt_setting_interface\n/qt_vosk_app\n/rosapi\n/rosauth\n/rosbridge_websocket\n/rosout\n"})}),"\n",(0,t.jsxs)(n.p,{children:["To stop the code, just press ",(0,t.jsx)(n.code,{children:"<CTRL+C>"})," in the same terminal where we run our code."]}),"\n",(0,t.jsx)(n.h2,{id:"adding-parameters-to-our-c-project",children:"Adding parameters to our C++ project"}),"\n",(0,t.jsxs)(n.p,{children:["ROS framework offers parameter Server where strings, integers, floats, Booleans, lists and etc. can be stored as key-value objects. The parameter server can be accessed via command line and within all ROS supported programing languages such as our C++ code. We can also sets the parameters within our code.  Lets first modify our C++ code and add a line to read a parameters called ",(0,t.jsx)(n.code,{children:"param1"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c++",children:'#include "ros/ros.h"\n\nint main(int argc, char **argv) {\n    ros::init(argc, argv, "my_cpp_tutorial_node");\n    ROS_INFO_STREAM("my_cpp_tutorial_node is started");\n    ros::NodeHandle n;\n\n    std::string param1;\n    n.param<std::string>("/my_cpp_tutorial_node/param1", param1, "default_value");\n    ROS_INFO_STREAM("value of param1 is "<< param1);\n\n    ros::spin();\n    return 0;\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The above code looks for ",(0,t.jsx)(n.code,{children:"param1"})," key within our node namespace ",(0,t.jsx)(n.code,{children:"/my_cpp_tutorial_node/"}),". Notice that, we already specified the node namespace name in our C++ code when we were initializing it: ",(0,t.jsx)(n.code,{children:'ros::init(argc, argv, "my_cpp_tutorial_node");'})]}),"\n",(0,t.jsxs)(n.p,{children:["Since we have not set any value for ",(0,t.jsx)(n.code,{children:"param1"})," in parameter server yet, the above code should print the ",(0,t.jsx)(n.code,{children:"default_value"}),"!  Now let's set a value for ",(0,t.jsx)(n.code,{children:"param1"})," using ",(0,t.jsx)(n.code,{children:"rosparam"})," command from command line. open a terminal and type:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'  rosparam set /my_cpp_tutorial_node/param1 "QT"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["This set a ",(0,t.jsx)(n.code,{children:"param1"})," key specifically for our ",(0,t.jsx)(n.code,{children:"my_cpp_tutorial_node"}),'. Now if we rebuild and run our C++ code, it will get the value (i.e. "QT") of the ',(0,t.jsx)(n.code,{children:"param1"})," and print it out. You can ",(0,t.jsx)(n.a,{href:"http://wiki.ros.org/roscpp/Overview/Parameter%20Server",children:"read more about rosparam in C++"})," on official ROS website."]}),"\n",(0,t.jsx)(n.h2,{id:"preparing-ros-launch-file",children:"Preparing ROS launch file"}),"\n",(0,t.jsxs)(n.p,{children:["Launch files are very common in ROS. They provide a convenient way to start up multiple nodes, setting up parameters for nodes and etc. Let's create our first launch file.\nFirst we need to create the ",(0,t.jsx)(n.code,{children:"launch"})," folder within our C++ project folder. Catkin does not do this automatically. Then we need to create a launch file:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd ~/catkin_ws/src/my_cpp_tutorial\nmkdir launch\ncd launch\ntouch my_cpp_tutorial.launch\n"})}),"\n",(0,t.jsxs)(n.p,{children:["now open ",(0,t.jsx)(n.code,{children:"my_cpp_tutorial.launch"})," and add the following content:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:'<launch>\n  <node name="my_cpp_tutorial_node" pkg="my_cpp_tutorial" type="my_cpp_tutorial_node" output="screen">\n  </node>\n</launch>\n\n'})}),"\n",(0,t.jsxs)(n.p,{children:["This is the very basic setting of a ROS launch file. we just indicated that we would like to run one node which is located in ",(0,t.jsx)(n.code,{children:"my_cpp_tutorial"})," package. Within this package, we want to run our executable which is given as ",(0,t.jsx)(n.code,{children:'type="my_cpp_tutorial_node"'}),". The optional output parameter indicate where our code's log output should be printed."]}),"\n",(0,t.jsx)(n.h3,{id:"running-our-c-project-using-launch-file",children:"Running our C++ project using launch file"}),"\n",(0,t.jsxs)(n.p,{children:["Now we have our launch file ready we can launch it from everywhere on QTPC using the ",(0,t.jsx)(n.code,{children:"roslaunch"})," command:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"roslaunch my_cpp_tutorial my_cpp_tutorial.launch\n"})}),"\n",(0,t.jsx)(n.h3,{id:"setting-parameters-using-launch-file",children:"Setting parameters using launch file"}),"\n",(0,t.jsxs)(n.p,{children:["Modify  ",(0,t.jsx)(n.code,{children:"my_cpp_tutorial.launch"})," file as follow to set a value for ",(0,t.jsx)(n.code,{children:"param1"})," key."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:'<launch>\n  <node name="my_cpp_tutorial_node" pkg="my_cpp_tutorial" type="my_cpp_tutorial_node" output="screen">\n    <param name="param1" value="QTrobot :)" />\n  </node>\n</launch>\n\n'})}),"\n",(0,t.jsx)(n.admonition,{title:"Congratulations! \ud83d\ude09",type:"tip",children:(0,t.jsxs)(n.p,{children:["You have just created your first C++ project in ROS. In the next tutorial, you will learn how to extend this tutorial to ",(0,t.jsx)(n.a,{href:"/docs/tutorials/cpp/cpp_ros_interfaces",children:"access QTrobot interfaces"}),"."]})}),"\n",(0,t.jsxs)(n.section,{"data-footnotes":!0,className:"footnotes",children:[(0,t.jsx)(n.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{id:"user-content-fn-1",children:["\n",(0,t.jsxs)(n.p,{children:["you can simply use Ubuntu gedit text editor or install ",(0,t.jsx)(n.a,{href:"https://atom.io/",children:"Atom"})," or ",(0,t.jsx)(n.a,{href:"https://code.visualstudio.com/",children:"Visual Studio Code"})," whichever comes as your favorite. ",(0,t.jsx)(n.a,{href:"#user-content-fnref-1","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}}}]);