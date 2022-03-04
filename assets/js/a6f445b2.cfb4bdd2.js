"use strict";(self.webpackChunkqtrobot_documentation=self.webpackChunkqtrobot_documentation||[]).push([[6235],{7128:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return d},contentTitle:function(){return c},metadata:function(){return p},assets:function(){return m},toc:function(){return u},default:function(){return k}});var n=a(87462),o=a(63366),i=(a(67294),a(3905)),r=a(55381),s=a(14702),l=["components"],d={id:"camera",title:"QTrobot Vision and 3D Camera",hide_table_of_contents:!1},c=void 0,p={unversionedId:"modules/camera",id:"modules/camera",title:"QTrobot Vision and 3D Camera",description:"QTrobot has an integrated 3D camera in the head. It is a Intel\xae RealSense\u2122 Depth Camera D455. It is connected to NUC mini PC (QTPC) via USB-C port and it is open for developers to configure and use it.",source:"@site/docs/modules/camera.md",sourceDirName:"modules",slug:"/modules/camera",permalink:"/docs/modules/camera",tags:[],version:"current",frontMatter:{id:"camera",title:"QTrobot Vision and 3D Camera",hide_table_of_contents:!1},sidebar:"modules",previous:{title:"QTrobot Audio processing and Microphone",permalink:"/docs/modules/microphone"},next:{title:"QTrobot Motion and Actuators",permalink:"/docs/modules/motors"}},m={},u=[{value:"Software Interfaces",id:"software-interfaces",level:2},{value:"Human 3D body and facial tracking",id:"human-3d-body-and-facial-tracking",level:2},{value:"Using QT Nuitrack interface from terminal",id:"using-qt-nuitrack-interface-from-terminal",level:3},{value:"Using QT Nuitrack interface from code",id:"using-qt-nuitrack-interface-from-code",level:3},{value:"Using QT Nuitrack interface from visual studio blocks",id:"using-qt-nuitrack-interface-from-visual-studio-blocks",level:3},{value:"<strong>Tips</strong> for better skeleton and facial emotion recognition",id:"tips-for-better-skeleton-and-facial-emotion-recognition",level:3},{value:"Image recognition with QTrobot",id:"image-recognition-with-qtrobot",level:2},{value:"Detecting a custom object",id:"detecting-a-custom-object",level:3},{value:"<strong>Tips</strong> for better object recognition",id:"tips-for-better-object-recognition",level:3},{value:"How to use Intel RealSense SDK with QTrobot",id:"how-to-use-intel-realsense-sdk-with-qtrobot",level:2},{value:"How to use standard ROS usb_cam with QTrobot",id:"how-to-use-standard-ros-usb_cam-with-qtrobot",level:2}],h={toc:u};function k(e){var t=e.components,d=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},h,d,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"QTrobot has an integrated 3D camera in the head. It is a ",(0,i.kt)("a",{parentName:"p",href:"https://store.intelrealsense.com/buy-intel-realsense-depth-camera-d455.html"},(0,i.kt)("strong",{parentName:"a"},"Intel\xae RealSense\u2122 Depth Camera D455")),". It is connected to NUC mini PC (QTPC) via USB-C port and it is open for developers to configure and use it. "),(0,i.kt)("center",null,(0,i.kt)("img",{width:"80%",src:"/img/camera.svg",alt:"architecture"})),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"software-interfaces"},"Software Interfaces"),(0,i.kt)("p",null,"Like any other standard camera, the QTrobot 3D camera is an standard Linux video capture device. Bellow you can see the example output of ",(0,i.kt)("inlineCode",{parentName:"p"},"v4l2-ctl --list-devices")," command which lists all video capture devices in QTPC: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"Intel(R) RealSense(TM) 430: Int (usb-0000:00:14.0-4):\n        /dev/video0\n        /dev/video1\n        /dev/video2\n        /dev/video3\n        /dev/video4\n        /dev/video5        \n")),(0,i.kt)("p",null,"QTrobot comes with the pre-installed software for human 3D body and facial tracking, image recognition and ros usb camera driver. This is installed on QTPC, because direct access to the 3D camera is required."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/luxai-qtrobot/software/tree/master/apps/qt_nuitrack_app"},(0,i.kt)("strong",{parentName:"a"},"qt_nuitrack_app")),": implements different human 3D body and facial tracking including human full body skeleton, hands position and gestures, facial and emotion recognition using ",(0,i.kt)("a",{parentName:"li",href:"https://nuitrack.com"},(0,i.kt)("strong",{parentName:"a"},"Nuitrack SDK")),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://wiki.ros.org/find_object_2d"},(0,i.kt)("strong",{parentName:"a"},"find_object_2d")),": implements object recognition"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://wiki.ros.org/usb_cam"},(0,i.kt)("strong",{parentName:"a"},"usb_cam")),": ROS camera driver for V4L USB Cameras")),(0,i.kt)("h2",{id:"human-3d-body-and-facial-tracking"},"Human 3D body and facial tracking"),(0,i.kt)("p",null,"QTrobot uses ",(0,i.kt)("inlineCode",{parentName:"p"},"qt_nuitrack_app")," for human 3D body and facial tracking. The ",(0,i.kt)("inlineCode",{parentName:"p"},"qt_nuitrack_app")," is installed in QTPC ",(0,i.kt)("inlineCode",{parentName:"p"},"~/catkin_ws")," and it is running by default.\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"qt_nuitrack_app")," uses ",(0,i.kt)("strong",{parentName:"p"},"Nuitrack\u2122")," which is a 3D tracking middleware developed by ",(0,i.kt)("strong",{parentName:"p"},"3DiVi Inc"),". This is a solution for skeleton tracking and gesture recognition that enables capabilities of Natural User Interface (NUI). ",(0,i.kt)("strong",{parentName:"p"},"Nuitrack\u2122 framework")," is multi-language and cross-platform. ",(0,i.kt)("strong",{parentName:"p"},"Nuitrack\u2122 API"),"s include the set of interfaces for developing applications, which utilize Natural Interaction."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Key Features"),(0,i.kt)("th",{parentName:"tr",align:null},"Application Areas"),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("ul",null,(0,i.kt)("li",null,"Full Body Skeletal Tracking (19 Joints)"),(0,i.kt)("li",null,"3D Point Cloud"),(0,i.kt)("li",null,"Face tracking and facial features"),(0,i.kt)("li",null,"Gesture Recognition"),(0,i.kt)("li",null,"Unity and Unreal Engine Plugins"),(0,i.kt)("li",null,"OpenNI 1.5 compatible"))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("ul",null,(0,i.kt)("li",null,"Robot Vision"),(0,i.kt)("li",null,"Medical Rehabilitation"),(0,i.kt)("li",null,"Full Body Tracking for AR / VR"),(0,i.kt)("li",null,"Audience Analytics"),(0,i.kt)("li",null,"Smart Home"),(0,i.kt)("li",null,"Games and Training (Fitness, Dance Lessons)"))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("center",null,(0,i.kt)("img",{style:{maxWidth:300},src:"/img/facial_feature.png"})))))),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"qt_nuitrack_app")," extracts data from ",(0,i.kt)("inlineCode",{parentName:"p"},"Nuitrack SDK")," and publishes human skeletons, hands, gestures and faces information to its ROS topics:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"/qt_nuitrack_app/faces\n/qt_nuitrack_app/gestures\n/qt_nuitrack_app/hands\n/qt_nuitrack_app/skeletons\n")),(0,i.kt)("h3",{id:"using-qt-nuitrack-interface-from-terminal"},"Using QT Nuitrack interface from terminal"),(0,i.kt)("p",null,"Like many other ROS topics, you can subscribe to ",(0,i.kt)("inlineCode",{parentName:"p"},"/qt_nuitrack_app/gestures")," to read detected gesture."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"rostopic echo /qt_nuitrack_app/gestures\n")),(0,i.kt)("p",null,"Stand in front of QTrobot and do one of following gestures ",(0,i.kt)("inlineCode",{parentName:"p"},"SWIPE UP"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"SWIPE DOWN"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"SWIPE LEFT")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"SWIPE RIGHT"),".\nIf the gesture is detected you will see something like this example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'[INFO] [1629900965.371938]: gestures:\n  -\n    id: 2\n    name: "SWIPE UP"\n')),(0,i.kt)("h3",{id:"using-qt-nuitrack-interface-from-code"},"Using QT Nuitrack interface from code"),(0,i.kt)("p",null,"Take a look at our ",(0,i.kt)("a",{parentName:"p",href:"/docs/tutorials/python/python_ros_gestures"},(0,i.kt)("strong",{parentName:"a"},"Python Human gesture detection"))," tutorial to learn how to read gesture data from ",(0,i.kt)("inlineCode",{parentName:"p"},"qt_nuitrack_app")," from a Python code. Here is a snippet:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from qt_nuitrack_app.msg import Gestures\n\ndef gesture_callback(msg):\n    if msg.gestures[0].name == "SWIPE UP":\n        print("I got: %s", msg.gestures[0].name)\n\nrospy.Subscriber(\'/qt_nuitrack_app/gestures\', Gestures, gesture_callback)\n')),(0,i.kt)("p",null,"We have also other python tutorials using ",(0,i.kt)("inlineCode",{parentName:"p"},"qt_nuitrack_app"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/tutorials/python/python_ros_expression"},(0,i.kt)("strong",{parentName:"a"},"Python - Human facial expression detection"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/tutorials/python/python_ros_hands"},(0,i.kt)("strong",{parentName:"a"},"Python - Human hands detection")))),(0,i.kt)("h3",{id:"using-qt-nuitrack-interface-from-visual-studio-blocks"},"Using QT Nuitrack interface from visual studio blocks"),(0,i.kt)("p",null,"QTrobot studio offers very flexible and powerful blocks to handle complex ROS messages and interact with other publishers, subscribers and services. You can follow ",(0,i.kt)("a",{parentName:"p",href:"/docs/tutorials/graphical/studio_ros"},(0,i.kt)("strong",{parentName:"a"},"Using ROS blocks"))," tutorial to learn about ROS blocs."),(0,i.kt)("p",null,"Take a look at our ",(0,i.kt)("a",{parentName:"p",href:"/docs/tutorials/graphical/studio_gesture_mem_game"},"Create an interactive memory game using human gestures")," tutorials to learn how to call ",(0,i.kt)("inlineCode",{parentName:"p"},"qt_nuitrack_app")," using QTrobot visual studio blocks."),(0,i.kt)("h3",{id:"tips-for-better-skeleton-and-facial-emotion-recognition"},(0,i.kt)("strong",{parentName:"h3"},"Tips")," for better skeleton and facial emotion recognition"),(0,i.kt)(r.Z,{mdxType:"Icon"}," lightbulb ")," ",(0,i.kt)(s.Z,{mdxType:"Markdown"}," Use QTrobot in a fairly well luminated environment. Intel Realsense 3D cameras are design for mostly indoor applications and in general they are sensitive to lights. "),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)(r.Z,{mdxType:"Icon"}," lightbulb ")," ",(0,i.kt)(s.Z,{mdxType:"Markdown"}," When using QTrobot with camera applications, do not put the robot against window or any other source of light (i.e. robot should not look towards window). That may create blurry and unclear camera image and decreases performance of 3D software. "),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)(r.Z,{mdxType:"Icon"}," lightbulb ")," ",(0,i.kt)(s.Z,{mdxType:"Markdown"},"Stay in front of the QTrobot camera so that camera can see most parts of your body (around 1.5m-2m away from the robot). For skeletong, gesture, facial expression, etc. to work properly, nuitrack SDK requires first to see almost whole body (standing position) to detect it first. then you can move closer if it's needed. "),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)(r.Z,{mdxType:"Icon"}," lightbulb ")," ",(0,i.kt)(s.Z,{mdxType:"Markdown"}," Similarly, to have facial data recognized by `/qt_nuitrack_app/faces`, first almost your whole body should be visible to QTrobot's camera. If you are in sitting position, just stand up and stay few steps away from QTrobot so that it can see your whole body. After detecting your face, you may walk closer and even sit in front of its camera."),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"image-recognition-with-qtrobot"},"Image recognition with QTrobot"),(0,i.kt)("p",null,"QTrobot uses ROS ",(0,i.kt)("a",{parentName:"p",href:"http://wiki.ros.org/find_object_2d"},"find_object_2d")," module for easy and flexible image recognition.  Using a camera, objects are detected and published on a ROS topic with ID and position. Take a look at our ",(0,i.kt)("a",{parentName:"p",href:"/docs/tutorials/graphical/studio_card_mem_game"},(0,i.kt)("strong",{parentName:"a"},"Create an interactive memory game using cards"))," tutorial to learn how to read data from ",(0,i.kt)("inlineCode",{parentName:"p"},"find_objects_2d"),"."),(0,i.kt)("p",null,"Using QTrobot's camera, the find_object_2d simply detect whatever images that are in ",(0,i.kt)("inlineCode",{parentName:"p"},"~/robot/data/images")," folder on QTPC. For example, we can use the following images. These images already exist in the corresponding folder to be recognized by find_object_2d."),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"emotion cards",src:a(6421).Z,width:"1663",height:"478"})," "),(0,i.kt)("p",null,"If we show one of the above card to QTrobot, the find_object_2d recognizes it and publishes the corresponding id (number in the filename) along with other information to ",(0,i.kt)("inlineCode",{parentName:"p"},"/find_object/objects")," topic. The topic uses a message of standard type std_msgs/Float32MultiArray. The first element in the list is the id of the image which is of our interest for this scenario. "),(0,i.kt)("p",null,"Like many other ROS topics, you can subscribe to ",(0,i.kt)("inlineCode",{parentName:"p"},"/find_object/objects")," to read detected objects."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"rostopic echo /find_object/objects\n")),(0,i.kt)("p",null,"For example, if we show the T card image (i.e 2.jpg), the following message will be published. The first element in data field (2.0) is the id of the 2.jpg image."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{4}","{4}":!0},"layout:\n  dim: []\n  data_offset: 0\ndata: [2.0, 553.0, 553.0, 0.582885205745697, -0.03982475772500038, ...\n---\n")),(0,i.kt)("h3",{id:"detecting-a-custom-object"},"Detecting a custom object"),(0,i.kt)("p",null,"Simply add images to ",(0,i.kt)("inlineCode",{parentName:"p"},"~/robot/data/images")," folder on QTPC and re-run ",(0,i.kt)("inlineCode",{parentName:"p"},"find_object_2d"),". Subscribe to the ",(0,i.kt)("inlineCode",{parentName:"p"},"/find_object/objects")," topic and read the data.\nTake a look at this example how to read data from ",(0,i.kt)("inlineCode",{parentName:"p"},"find_object_2d")," from a Python code. Here is a snippet:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from std_msgs.msg import Float32MultiArray\n\ndef image_callback(msg):\n    print(msg.data)\n\nrospy.Subscriber('/find_object/objects', Float32MultiArray, image_callback)\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"ROS find_object_2d is already pre-installed on QTPC. To enable it you need to add ",(0,i.kt)("inlineCode",{parentName:"p"},"run_script start_find_object.sh;")," to the ",(0,i.kt)("inlineCode",{parentName:"p"},"~/robot/autostart/autostart_screens.sh"),". It needs to access ",(0,i.kt)("inlineCode",{parentName:"p"},"/camera/color/image_raw")," topic to work. "))),(0,i.kt)("h3",{id:"tips-for-better-object-recognition"},(0,i.kt)("strong",{parentName:"h3"},"Tips")," for better object recognition"),(0,i.kt)(r.Z,{mdxType:"Icon"}," lightbulb ")," ",(0,i.kt)(s.Z,{mdxType:"Markdown"}," When using QTrobot with camera applications such as image recogntion, do not put the robot against window or any other source of light (i.e. robot should **not** look towards window light). That may create blurry and unclear camera image and decreases performance of 3D software. "),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)(r.Z,{mdxType:"Icon"}," lightbulb ")," ",(0,i.kt)(s.Z,{mdxType:"Markdown"}," Print your image to be recognized on fairly big and visible card/paper. Don no use very thin paper (transparent) or print the image very small and invisible."),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)(r.Z,{mdxType:"Icon"}," lightbulb ")," ",(0,i.kt)(s.Z,{mdxType:"Markdown"}," Show the image fully and clearly to the robot. move the card/paper slightly back and forward in front of the QTrobot camera to find the idle distance with respect to your image card size. "),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)(r.Z,{mdxType:"Icon"}," lightbulb ")," ",(0,i.kt)(s.Z,{mdxType:"Markdown"}," Do not use very simple image such as simply colored circle or other simple shapes. By default the `find_object_2d` uses image Detectors/descriptors engine which requires images with lots of features and details in that. In simple words, more complex images are better for this type of recognition. You can learn more about [Find Object image recognition](http://introlab.github.io/find-object/) here. "),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)(r.Z,{mdxType:"Icon"}," lightbulb ")," ",(0,i.kt)(s.Z,{mdxType:"Markdown"},"Use simple names for your images such as `15.jpg` and place them in `~/robot/data/images` folder on QTPC. Do not forget to relaunch the `find_object_2d` or reboot the robot to load your images. "),(0,i.kt)("h2",{id:"how-to-use-intel-realsense-sdk-with-qtrobot"},"How to use Intel RealSense SDK with QTrobot"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/IntelRealSense/librealsense/"},"Intel\xae RealSense\u2122 SDK 2.0")," is a cross-platform library for Intel\xae RealSense\u2122 depth cameras, which allows depth and color streaming, and provides intrinsic and extrinsic calibration information. The library also offers synthetic streams (pointcloud, depth aligned to color and vise-versa), and a built-in support for record and playback of streaming sessions."),(0,i.kt)("p",null,"The SDK comes with:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Intel\xae RealSense\u2122 Viewer"),": With this application, you can quickly access your Intel\xae RealSense\u2122 Depth Camera to view the depth stream, visualize point clouds, record and playback streams, configure your camera settings, modify advanced controls, enable depth visualization and post processing and much more."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Depth Quality Tool"),": This application allows you to test the camera\u2019s depth quality, including: standard deviation from plane fit, normalized RMS \u2013 the subpixel accuracy, distance accuracy and fill rate. You should be able to easily get and interpret several of the depth quality metrics and record and save the data for offline analysis."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Debug Tools"),": Device enumeration, FW logger, etc as can be seen at the tools directory"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Code Samples"),": These simple examples demonstrate how to easily use the SDK to include code snippets that access the camera into your applications. Check some of the C++ examples including capture, pointcloud and more and basic C examples"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Wrappers"),": \tPython, C#/.NET, Node.js API, as well as integration with the following 3rd-party technologies: ROS, ROS2, LabVIEW, OpenCV, PCL, Unity, Matlab, OpenNI, UnrealEngine4 and more to come.")),(0,i.kt)("p",null,"You can follow this ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/IntelRealSense/librealsense/blob/master/doc/distribution_linux.md"},"instalation process")," for QTPC. Most of these interfaces/softwares ",(0,i.kt)("strong",{parentName:"p"},"exclusively")," need access to the camera. That means, for example, one should first stop ",(0,i.kt)("inlineCode",{parentName:"p"},"qt_nuitrack_app")," or any other running software that is using camera, and run its own software. "),(0,i.kt)("p",null,"To disable the ",(0,i.kt)("inlineCode",{parentName:"p"},"qt_nuitrack_app")," you need to edit autostart script (",(0,i.kt)("inlineCode",{parentName:"p"},"~/robot/autostart/autostart_screens.sh"),") on ",(0,i.kt)("strong",{parentName:"p"},"QTPC"),", which runs on boot of the QTrobot."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"nano ~/robot/autostart/autostart_screens.sh\n")),(0,i.kt)("p",null,"and comment this line below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'#run_script "start_qt_nuitrack_app.sh"\n')),(0,i.kt)("p",null,"After that on every next reboot of the QTrobot ",(0,i.kt)("inlineCode",{parentName:"p"},"qt_nuitrack_app")," will not run by default."),(0,i.kt)("h2",{id:"how-to-use-standard-ros-usb_cam-with-qtrobot"},"How to use standard ROS usb_cam with QTrobot"),(0,i.kt)("p",null,"ROS ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.ros.org/usb_cam"},(0,i.kt)("strong",{parentName:"a"},"usb_cam"))," is ROS driver for generic USB cameras. It uses libusb_cam and publishes images as type of sensor_msgs::Image and uses ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.ros.org/image_transport"},"image_transport")," library to allow compressed image transport."),(0,i.kt)("p",null,"The usb_cam publishes raw image data from camera to ",(0,i.kt)("inlineCode",{parentName:"p"},"/camera/color/image_raw")," topic. The message type is ",(0,i.kt)("inlineCode",{parentName:"p"},"sensor_msgs/Image"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"Header header        # Header timestamp, etc\nuint32 height         # image height, that is, number of rows\nuint32 width          # image width, that is, number of columns\nstring encoding       # Encoding of pixels -- channel meaning, ordering, size\nuint8 is_bigendian    # is this data bigendian?\nuint32 step           # Full row length in bytes\nuint8[] data          # actual matrix data, size is (step * rows)\n")),(0,i.kt)("p",null,"Some cameras (particularly webcams) output their image data already in JPEG format (compressed image). When running the ",(0,i.kt)("inlineCode",{parentName:"p"},"usb_cam")," you can read also ",(0,i.kt)("inlineCode",{parentName:"p"},"/camera/color/image_raw/compressed")," which publises compressed image format ",(0,i.kt)("inlineCode",{parentName:"p"},"sensor_msgs/CompressedImage"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"Header header        # Header timestamp, etc \nstring format        # Specifies the format of the data (jpeg, png)\nuint8[] data         # Compressed image buffer\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"ROS usb_cam is already pre-installed on QTPC. To enable it you need to add ",(0,i.kt)("inlineCode",{parentName:"p"},"run_script start_ros_usb_cam.sh;")," to the ",(0,i.kt)("inlineCode",{parentName:"p"},"~/robot/autostart/autostart_screens.sh")," and disable the other interfaces that are using the camera."))))}k.isMDXComponent=!0},6421:function(e,t,a){t.Z=a.p+"assets/images/mem_game_images-be51e4d25a5e8528fa19aa7e6868e844.png"}}]);