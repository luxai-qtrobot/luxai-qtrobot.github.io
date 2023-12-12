"use strict";(self.webpackChunkqtrobot_documentation=self.webpackChunkqtrobot_documentation||[]).push([[8856,8292],{3290:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>f,frontMatter:()=>c,metadata:()=>h,toc:()=>p});var n=o(5893),r=o(1151),s=o(4866),i=o(5162),a=o(8800),l=o(9656);const c={id:"intro_code",title:"Quick start with coding on QTrobot",sidebar_position:1,tags:["Getting Started","Code","Programming"],hide_table_of_contents:!1},d=void 0,h={id:"intro_code",title:"Quick start with coding on QTrobot",description:"This document guides you towards quick start coding on the QTrobot using programming languages. If you are looking for graphical programming, please take a look at Quick start with QTrobot studio.",source:"@site/versioned_docs/version-QTRD_v1/intro_code.mdx",sourceDirName:".",slug:"/intro_code",permalink:"/docs/v1/intro_code",draft:!1,unlisted:!1,tags:[{label:"Getting Started",permalink:"/docs/v1/tags/getting-started"},{label:"Code",permalink:"/docs/v1/tags/code"},{label:"Programming",permalink:"/docs/v1/tags/programming"}],version:"QTRD_v1",sidebarPosition:1,frontMatter:{id:"intro_code",title:"Quick start with coding on QTrobot",sidebar_position:1,tags:["Getting Started","Code","Programming"],hide_table_of_contents:!1},sidebar:"codding_sidebard"},u={},p=[{value:"1. Understanding QTrobot architecture",id:"1-understanding-qtrobot-architecture",level:2},{value:"Internal Setup",id:"internal-setup",level:3},{value:"2. Prepare your setup",id:"2-prepare-your-setup",level:2},{value:"Step 1. Turn on QTrobot",id:"step-1-turn-on-qtrobot",level:3},{value:"Step 2. Connect keyboard/mouse and monitor to QTPC",id:"step-2-connect-keyboardmouse-and-monitor-to-qtpc",level:3},{value:"Step 3. Wait for QTPC to boot",id:"step-3-wait-for-qtpc-to-boot",level:3},{value:"3. Connect QTrobot to a home network and Internet",id:"qt_to_internet",level:2},{value:"4. Optional ways of working with QTrobot",id:"4-optional-ways-of-working-with-qtrobot",level:2},{value:"Step 1. Setup your ROS environment",id:"step-1-setup-your-ros-environment",level:3},{value:"Step 2. Test your setup",id:"step-2-test-your-setup",level:3}];function m(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",section:"section",strong:"strong",sup:"sup",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["This document guides you towards quick start ",(0,n.jsx)(t.strong,{children:"coding"})," on the QTrobot using programming languages. If you are looking for ",(0,n.jsx)(t.strong,{children:"graphical programming"}),", please take a look at ",(0,n.jsx)(t.a,{href:"intro_graphical",children:(0,n.jsx)(t.strong,{children:"Quick start with QTrobot studio"})}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"1-understanding-qtrobot-architecture",children:"1. Understanding QTrobot architecture"}),"\n",(0,n.jsxs)(t.p,{children:["QTrobot is a high-end research platform with powerful computers and state-of-the-art hardware such as 3D camera and far-field microphone array. It comes with two computers: ",(0,n.jsx)(t.em,{children:"i)"})," QTRP, a Raspberry Pi based computer to control the main hardware and ",(0,n.jsx)(t.em,{children:"ii)"})," QTPC, an Intel\xae NUC i5/i7 PC to provide more computational power and to accelerate software development cycle. Both computers run on Ubuntu/Debian Linux operating systems and leverage ",(0,n.jsx)(t.a,{href:"https://www.ros.org/",children:(0,n.jsx)(t.strong,{children:"ROS"})})," to offer easy-to-use yet very flexible software architecture. QTrobot's hardware is easily extendable via USB-C and USB adaptors, for example, to connect external monitor, keyboard and mouse. QTrobot also provides a rich set of ",(0,n.jsx)(t.a,{href:"api_ros",children:(0,n.jsx)(t.strong,{children:"APIs"})})," for several programing languages such as C++, Python and JavaScript."]}),"\n",(0,n.jsx)("center",{children:(0,n.jsx)("img",{src:"/img/QTrobot.PNG",alt:"qtrobot"})}),"\n",(0,n.jsx)(t.h3,{id:"internal-setup",children:"Internal Setup"}),"\n",(0,n.jsx)(t.p,{children:"As it is shown in the following diagram, QTrobot consists of two computers, one in the QTrobot head (QTRP) and the other in the body (QTPC), which are internally connected via ethernet cable. All of the QTrobot devices such as display, speakers, microphone and motors are connected to QTRP except the 3D Camera which is connected directly to QTPC. The Wi-Fi of the QTRP is used to create the QTrobot hotspot with the same SSID as the robot\u2019s serial number (e.g. QTRD000101)."}),"\n",(0,n.jsx)("center",{children:(0,n.jsx)("img",{width:"800",src:"/img/architecture.png",alt:"architecture"})}),"\n",(0,n.jsx)(t.p,{children:"Both computers are configured to interact in one ROS environment. Upon starting the QTrobot, QTRP runs the roscore and initializes the ROS environment. It also turn on QTPC via wake-on-lan when the ROS environment is up. You will also find two USB port at the back of the QTrobot. One of the is attached to QTRP and the second one (USB-C) is connected to QTPC. This USB-C port can be used to connect keyboard,mouse and monitor via a USB-C extension hub to QTPC."}),"\n",(0,n.jsx)(t.admonition,{title:"Notice",type:"info",children:(0,n.jsx)(t.p,{children:"QTPC is already prepared and configured to work with roscore which is running on QTRP and you can access all QTrobot ROS services ands topics."})}),"\n",(0,n.jsx)(t.h2,{id:"2-prepare-your-setup",children:"2. Prepare your setup"}),"\n",(0,n.jsxs)(t.p,{children:["There are few ways of developing code for QTrobot. We ",(0,n.jsx)(t.em,{children:"strongly recommend"})," you to start developing directly on QTrobot's integrated QTPC. As it is shown in the following picture, you need to prepare:"]}),"\n",(0,n.jsxs)(t.p,{children:["\xa0",(0,n.jsx)(l.Z,{children:"keyboard"})," a keyboard,",(0,n.jsx)("br",{}),"\n\xa0",(0,n.jsx)(l.Z,{children:"mouse"})," a mouse,",(0,n.jsx)("br",{}),"\n\xa0",(0,n.jsx)(l.Z,{children:"desktop_windows"})," and a monitor with HDMI cable."]}),"\n",(0,n.jsx)("center",{children:(0,n.jsx)("img",{src:"/img/robot_rd_setup.png",alt:"rdsetup"})}),"\n",(0,n.jsx)(t.h3,{id:"step-1-turn-on-qtrobot",children:"Step 1. Turn on QTrobot"}),"\n",(0,n.jsxs)(t.p,{children:["To power the QTrobot on, simply connect the QTrobot's power supply",(0,n.jsx)(t.sup,{children:(0,n.jsx)(t.a,{href:"#user-content-fn-1",id:"user-content-fnref-1","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})}),".This triggers the power on process and your QTrobot becomes ready less than a minute. After powering on, you can see the QTrobot face is on and the motors are in their home position. If the QTrobot is already connected to the power supply simply\npush the power button to turn on the QTrobot."]}),"\n",(0,n.jsx)(t.h3,{id:"step-2-connect-keyboardmouse-and-monitor-to-qtpc",children:"Step 2. Connect keyboard/mouse and monitor to QTPC"}),"\n",(0,n.jsx)(t.p,{children:"Connect keyboard, mouse and HDMI Monitor to your USB-C extension then plug it in the USB-C port at the back of QTrobot."}),"\n",(0,n.jsx)(t.h3,{id:"step-3-wait-for-qtpc-to-boot",children:"Step 3. Wait for QTPC to boot"}),"\n",(0,n.jsx)(t.p,{children:"After you turned on your QTrobot it will need some time until your QTPC turns on, because QTRP will turn on QTPC after ROS environment is up. You will see the Ubuntu desktop of QTPC and you can use in the same way you use a standard desktop for development."}),"\n",(0,n.jsx)("center",{children:(0,n.jsx)("img",{src:"/img/qtpc.png",alt:"QTPC"})}),"\n",(0,n.jsx)(t.admonition,{title:"Powering off QTrobot",type:"info",children:(0,n.jsx)(t.p,{children:"To power off the QTrobot simply press the power button on the back of the QTrobot. This will turn off both QTRP and QTPC. Wait enough for QTrobot to turn off before unplugging it from power supply: a blue screen shows up immediately goes off."})}),"\n",(0,n.jsx)(t.p,{children:"Now you should be all settled and ready for coding.  However, in most cases you need to have access to the internet. So let's follow the next section to connect your QTrobot to your home/office router and the Internet."}),"\n",(0,n.jsx)(t.h2,{id:"qt_to_internet",children:"3. Connect QTrobot to a home network and Internet"}),"\n",(0,n.jsxs)(t.p,{children:["The older version of QTrobot's (which had been released before May 2021) have different operating system for QTRP. Those set of robots (with QTRP version older than ",(0,n.jsx)(t.code,{children:"QTRDTP2105"}),") require slightly different set of steps for connecting them to the Internet. Please carefully do the following steps to find the version of your QTRP."]}),"\n",(0,n.jsxs)(t.admonition,{title:"Finding the version of QTRP",type:"note",children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.em,{children:"1."})," ssh to QTRP and run the following command to check the codename of its operating system:"]}),(0,n.jsx)(t.p,{children:"From the Ubuntu desktop of QTPC, open a terminal and access QTRP via ssh:"}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"ssh developer@192.168.100.1\n# or ssh developer@QTRP\n"})}),(0,n.jsx)(t.p,{children:(0,n.jsxs)(t.em,{children:["For the password use ",(0,n.jsx)(t.code,{children:"qtrobot"}),"."]})}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"lsb_release -c\n"})}),(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.em,{children:"2."})," if the codename is ",(0,n.jsx)(t.code,{children:"xenial"})," then the version of your QTRP is older than QTRDTP2105."]})]}),"\n",(0,n.jsxs)(s.Z,{defaultValue:"QTRDTP2105",values:[{label:"Recent QTrobots",value:"QTRDTP2105"},{label:"QTrobots older than QTRDTP2105",value:"QTRDTP2102"}],children:[(0,n.jsx)(i.Z,{value:"QTRDTP2105",children:(0,n.jsx)(a.default,{})}),(0,n.jsxs)(i.Z,{value:"QTRDTP2102",children:[(0,n.jsx)(t.admonition,{title:"Warning",type:"warning",children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.em,{children:(0,n.jsx)(t.strong,{children:"Do not use the QTRP Wi-Fi to connect to a network for QTrobot older than QTRDTP2105."})}),"\n",(0,n.jsx)(t.em,{children:(0,n.jsx)(t.strong,{children:"Instead, use Wi-Fi from QTPC as explained bellow!"})})]})}),(0,n.jsx)(t.p,{children:"The following diagram demonstrates a common scenario where different devices (e.g. laptops) are connected to the QTrobot via it's Wi-Fi hotspot. To have access to the internet on all these machines, the Wi-Fi of QTPC should be connected to the home router. The internet from the home router, therefore is shared to all other machines via QTPC. The green arrows shows the direction and how internet shared between QTPC, QTRP and any other devices connected to QTrobot hotspot."}),(0,n.jsx)("center",{children:(0,n.jsx)("img",{width:"800",src:"/img/network1.png",alt:"network"})}),(0,n.jsxs)(t.p,{children:["Therefore, all you need to do is to connect the ",(0,n.jsx)(t.strong,{children:"QTPC"})," to your home router's Wi-Fi. After your QTPC gets internet connection, it will automatically share it with QTRP and any other devices connected to QTrobot Wi-FI hotspot."]}),(0,n.jsx)(t.admonition,{title:"Connect to a wireless network from Ubuntu desktop",type:"tip",children:(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Access the QTPC ubuntu desktop (see ",(0,n.jsx)(t.a,{href:"intro_code#2-prepare-your-setup",children:"Working on QTPC"}),")"]}),"\n",(0,n.jsx)(t.li,{children:"Open the system menu from the right side of the top bar ."}),"\n",(0,n.jsx)(t.li,{children:"Select Wi-Fi and click Select Network."}),"\n",(0,n.jsx)(t.li,{children:"Click the name of the network you want, then click Connect. ..."}),"\n",(0,n.jsx)(t.li,{children:"If the network is protected by a password (encryption key), enter the password when prompted and click Connect."}),"\n"]})})]})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"4-optional-ways-of-working-with-qtrobot",children:"4. Optional ways of working with QTrobot"}),"\n",(0,n.jsxs)(s.Z,{defaultValue:"Computer",values:[{label:"Working with your ROS Setup",value:"Computer"},{label:"Working via SSH",value:"SSH"}],children:[(0,n.jsxs)(i.Z,{value:"Computer",children:[(0,n.jsx)(t.h3,{id:"step-1-setup-your-ros-environment",children:"Step 1. Setup your ROS environment"}),(0,n.jsx)(t.admonition,{title:"Notice",type:"note",children:(0,n.jsxs)(t.p,{children:["For this steps you will need ROS installed on your computer. If you don't have it please follow this installation ",(0,n.jsx)(t.a,{href:"http://wiki.ros.org/ROS/Installation",children:"instructions"})]})}),(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Install QTrobot ROS headers files on your laptop"})}),"\n",(0,n.jsxs)(t.p,{children:["Clone ",(0,n.jsx)(t.em,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:"https://github.com/luxai-qtrobot/software",children:"QTrobot Software"})})})," repository."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"cd ~/\ngit clone https://github.com/luxai-qtrobot/software.git\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Copy the ",(0,n.jsx)(t.code,{children:"headers"})," folder or make a link in your Catkin source workspace:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"cd ~/catkin_ws/src\nln -s ~/software/headers ./\n"})}),"\n",(0,n.jsx)(t.p,{children:"Build the messages in your Catkin worksapce"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"cd ~/catkin_ws\ncatkin_make\n"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Configure ROS environment for QTrobot"})}),"\n",(0,n.jsx)(t.p,{children:"Connect to the QTrobot Wi-Fi hotspot. Then open a terminal on your PC and run the following command:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"ifconfig\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Write down or copy IP address that is written of WiFi ",(0,n.jsx)(t.strong,{children:"inet"})," (e.g. ",(0,n.jsx)(t.code,{children:"inet 10.42.0.55"}),")"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"wifi0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500\n    inet 10.42.0.55  netmask 255.255.255.0  broadcast 10.42.0.255\n    inet6 fe80::c5ab:2083:f0c2:daa3  prefixlen 64  scopeid 0xfd<compat,link,site,host>\n    ether e4:b3:18:dd:87:31  (Ethernet)\n    RX packets 0  bytes 0 (0.0 B)\n    RX errors 0  dropped 0  overruns 0  frame 0\n    TX packets 0  bytes 0 (0.0 B)\n    TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Edit ",(0,n.jsx)(t.code,{children:"~/.bash_aliases"})," on your laptop/PC and add following lines. Change ",(0,n.jsx)(t.strong,{children:"ROS_IP"})," to your IP from last step."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"source /opt/ros/noetic/setup.bash\nsource ~/catkin_ws/devel/setup.bash\n\n## QTrobot\nexport ROS_IP=<your PC IP address>\nexport ROS_MASTER_URI=http://192.168.100.1:11311    \n"})}),"\n",(0,n.jsx)(t.p,{children:"To apply this configuration run this command:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"source ~/.bash_aliases\n"})}),"\n"]}),"\n"]}),(0,n.jsx)(t.h3,{id:"step-2-test-your-setup",children:"Step 2. Test your setup"}),(0,n.jsx)(t.p,{children:"Last step is to connect to the QTrobot Wi-Fi hotspot and test your ROS environment.\nOne option is to list all ROS topics that are running on QTRobot:"}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"rostopic list\n"})}),(0,n.jsx)(t.p,{children:"If everything is working you should see output similar to this one."}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"/rosout    \n/qt_robot/audio/play\n/qt_robot/behavior/talkAudio\n/qt_robot/emotion/show\n/qt_robot/gesture/play\n/qt_robot/head_position/command\n/qt_robot/joints/state\n...\n"})}),(0,n.jsx)(t.p,{children:"or call some of the QTrobot ROS interfaces:"}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"rosservice call /qt_robot/speech/say \"message: 'Hello.'\"\n"})}),(0,n.jsxs)(t.p,{children:["You will hear QTrobot say ",(0,n.jsx)(t.code,{children:"Hello"}),"."]})]}),(0,n.jsxs)(i.Z,{value:"SSH",children:[(0,n.jsx)(t.p,{children:"Alternatively you can directly SSH to QTPC from your laptop to develop code on the QTrobot."}),(0,n.jsxs)(s.Z,{defaultValue:"QTRP",values:[{label:"SSH to QTRP",value:"QTRP"},{label:"SSH to QTPC",value:"QTPC"}],children:[(0,n.jsxs)(i.Z,{value:"QTRP",children:[(0,n.jsxs)(t.p,{children:["To ssh to QTRP, first connect your laptop to the QTrobot Wi-Fi hotspot and run the following command",(0,n.jsx)(t.sup,{children:(0,n.jsx)(t.a,{href:"#user-content-fn-3",id:"user-content-fnref-3","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"2"})}),". You can alternatively run the following command from QTPC's terminal. For the password use ",(0,n.jsx)(t.code,{children:"qtrobot"}),"."]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"ssh developer@192.168.100.1\n"})}),(0,n.jsx)(t.admonition,{title:"Notice",type:"info",children:(0,n.jsxs)(t.p,{children:["For some older version of QTrobot's you need to ssh with ",(0,n.jsx)(t.code,{children:"qtrobot"})," user instead of ",(0,n.jsx)(t.code,{children:"developer"})," (i.e. ",(0,n.jsx)(t.code,{children:"ssh qtrobot@192.168.100.1"}),"). For the password use ",(0,n.jsx)(t.code,{children:"qtrobot"}),"."]})})]}),(0,n.jsxs)(i.Z,{value:"QTPC",children:[(0,n.jsxs)(t.p,{children:["To ssh to QTPC, first connect your laptop to the QTrobot Wi-Fi hotspot and run the following command",(0,n.jsx)(t.sup,{children:(0,n.jsx)(t.a,{href:"#user-content-fn-3",id:"user-content-fnref-3-2","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"2"})}),". For the password use ",(0,n.jsx)(t.code,{children:"qtrobot"}),"."]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"ssh qtrobot@192.168.100.2\n"})}),(0,n.jsx)(t.p,{children:"Alternatively you can ssh to QTPC via QTRP with the same command."})]})]})]})]}),"\n",(0,n.jsx)(t.admonition,{title:"All done \ud83d\ude09",type:"tip",children:(0,n.jsxs)(t.p,{children:["Congratulation. You are all settled and ready to start programming with QTrobot. Now you can follow plenty of exciting ",(0,n.jsx)(t.a,{href:"/docs/tutorials/intro_ros",children:"Tutorials"}),"."]})}),"\n",(0,n.jsxs)(t.section,{"data-footnotes":!0,className:"footnotes",children:[(0,n.jsx)(t.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{id:"user-content-fn-1",children:["\n",(0,n.jsxs)(t.p,{children:["Only use the provided power supply with your QTrobot. ",(0,n.jsx)(t.a,{href:"#user-content-fnref-1","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{id:"user-content-fn-3",children:["\n",(0,n.jsxs)(t.p,{children:["Windows users can use Putty (",(0,n.jsx)(t.a,{href:"http://www.putty.org",children:"www.putty.org"}),") ",(0,n.jsx)(t.a,{href:"#user-content-fnref-3","data-footnote-backref":"","aria-label":"Back to reference 2",className:"data-footnote-backref",children:"\u21a9"})," ",(0,n.jsxs)(t.a,{href:"#user-content-fnref-3-2","data-footnote-backref":"","aria-label":"Back to reference 2-2",className:"data-footnote-backref",children:["\u21a9",(0,n.jsx)(t.sup,{children:"2"})]})]}),"\n"]}),"\n"]}),"\n"]})]})}function f(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},8800:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var n=o(5893),r=o(1151);const s={},i=void 0,a={id:"recent_qtrobots",title:"recent_qtrobots",description:"The following diagram demonstrates a common scenario where different devices (e.g. laptops) are connected to the QTrobot via it's Wi-Fi hotspot. The Wi-Fi of QTRP is setup to operate in AP/STA mode. That means the QTRP's Wi-Fi can be connected to a home router (as Wi-Fi client) and at the same time operates as hotspot (access point). To have access to the internet on all machines (as shown in the diagram), the Wi-Fi of QTRP should be connected to the home router. The internet from the home router, therefore is shared to all other machines (including QTPC) via QTRP. The green arrows shows the direction and how internet shared between QTRP, QTPC and any other devices connected to QTrobot hotspot.",source:"@site/versioned_docs/version-QTRD_v1/recent_qtrobots.mdx",sourceDirName:".",slug:"/recent_qtrobots",permalink:"/docs/v1/recent_qtrobots",draft:!1,unlisted:!1,tags:[],version:"QTRD_v1",frontMatter:{}},l={},c=[{value:"Step 1. Access QTRP via ssh",id:"step-1-access-qtrp-via-ssh",level:2},{value:"Step 2. configure the wpa_suplicant for wlan0",id:"step-2-configure-the-wpa_suplicant-for-wlan0",level:2},{value:"Step 3. Restart wpa_supplicant@wlan0 service and check the connectivity",id:"step-3-restart-wpa_supplicantwlan0-service-and-check-the-connectivity",level:2}];function d(e){const t={admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"The following diagram demonstrates a common scenario where different devices (e.g. laptops) are connected to the QTrobot via it's Wi-Fi hotspot. The Wi-Fi of QTRP is setup to operate in AP/STA mode. That means the QTRP's Wi-Fi can be connected to a home router (as Wi-Fi client) and at the same time operates as hotspot (access point). To have access to the internet on all machines (as shown in the diagram), the Wi-Fi of QTRP should be connected to the home router. The internet from the home router, therefore is shared to all other machines (including QTPC) via QTRP. The green arrows shows the direction and how internet shared between QTRP, QTPC and any other devices connected to QTrobot hotspot."}),"\n",(0,n.jsx)("center",{children:(0,n.jsx)("img",{src:"/img/network2.png",width:"50%"})}),"\n",(0,n.jsxs)(t.p,{children:["Therefore, you need to connect the ",(0,n.jsx)(t.strong,{children:"QTRP"})," to your home router's Wi-Fi. To do that do the following steps:"]}),"\n",(0,n.jsx)(t.h2,{id:"step-1-access-qtrp-via-ssh",children:"Step 1. Access QTRP via ssh"}),"\n",(0,n.jsx)(t.p,{children:"From the Ubuntu desktop of QTPC, open a terminal and access QTRP via ssh:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"ssh developer@192.168.100.1\r\n# or ssh developer@QTRP\n"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsxs)(t.em,{children:["For the password use ",(0,n.jsx)(t.code,{children:"qtrobot"}),"."]})}),"\n",(0,n.jsx)(t.h2,{id:"step-2-configure-the-wpa_suplicant-for-wlan0",children:"Step 2. configure the wpa_suplicant for wlan0"}),"\n",(0,n.jsxs)(t.p,{children:["Edit the ",(0,n.jsx)(t.code,{children:"/etc/wpa_supplicant/wpa_supplicant-wlan0.conf"})," file to update ",(0,n.jsx)(t.code,{children:"ssid"})," and ",(0,n.jsx)(t.code,{children:"psk"})," accordingly."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"cd /etc/wpa_supplicant\r\nsudo nano wpa_supplicant-wlan0.conf\n"})}),"\n",(0,n.jsxs)(t.p,{children:["set the ",(0,n.jsx)(t.code,{children:"ssid"})," (your router ssid) and ",(0,n.jsx)(t.code,{children:"psk"})," (your router passphrase) of your home router setup:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'country=LU\r\nctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev\r\nupdate_config=1\r\n\r\nnetwork={\r\n    ssid="<your router SSID>"\r\n    psk="<your router passphrase>"         \r\n}\n'})}),"\n",(0,n.jsx)(t.admonition,{title:"Warning",type:"warning",children:(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsxs)(t.strong,{children:["Pay attention that the values for ",(0,n.jsx)(t.em,{children:"ssid"})," and ",(0,n.jsx)(t.em,{children:"psk"})," are wrapped with double quotation marks!"]})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsxs)(t.strong,{children:["Pay attention to the ",(0,n.jsx)(t.code,{children:"<TAB>"})," before ",(0,n.jsx)(t.em,{children:"ssid"})," and ",(0,n.jsx)(t.em,{children:"psk"}),"!"]})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.strong,{children:"Do not create or change any other files related to wpa_supplicant or systemd network! this may break your QTrobot network setup!"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsxs)(t.strong,{children:["Ensure that you are modifying the ",(0,n.jsx)(t.code,{children:"wpa_supplicant-wlan0.conf"})," file and NOT ",(0,n.jsx)(t.code,{children:"wpa_supplicant.conf"})]})}),"\n"]})}),"\n",(0,n.jsx)(t.h2,{id:"step-3-restart-wpa_supplicantwlan0-service-and-check-the-connectivity",children:"Step 3. Restart wpa_supplicant@wlan0 service and check the connectivity"}),"\n",(0,n.jsx)(t.p,{children:"from the ssh terminal of QTRP type:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"sudo systemctl restart wpa_supplicant@wlan0.service\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Alternatively, you can restart your QTrobot. After following the above steps, your QTrobot should be connected to your home/office network and have access to the Internet (i.e. you should be able to ping ",(0,n.jsx)(t.code,{children:"www.google.com"})," for example)."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"ping www.google.com\n"})}),"\n",(0,n.jsx)(t.p,{children:"You are all settled! QTRP gets internet connection from your router and will automatically share it with QTPC and any other devices connected to QTrobot Wi-FI hotspot."}),"\n",(0,n.jsx)(t.admonition,{title:"Troubleshooting",type:"tip",children:(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Check if QTrobot is connected to your home/office network. Run the following command on QTRP via ssh:\r\n",(0,n.jsx)(t.code,{children:"sudo wpa_cli -i wlan0 status"}),". You should see ",(0,n.jsx)(t.code,{children:"wpa_state=COMPLETED"})," and the correct ",(0,n.jsx)(t.code,{children:"ssid"})," is reported."]}),"\n",(0,n.jsxs)(t.li,{children:["Double check that you have entered correct values for ",(0,n.jsx)(t.code,{children:"ssid"})," and ",(0,n.jsx)(t.code,{children:"psk"})," in ",(0,n.jsx)(t.code,{children:"/etc/wpa_supplicant/wpa_supplicant-wlan0.conf"}),"!"]}),"\n",(0,n.jsxs)(t.li,{children:["See the status of the ",(0,n.jsx)(t.em,{children:"wpa_supplicant@wlan0 service"})," for any typo or misformatted lines in ",(0,n.jsx)(t.code,{children:"/etc/wpa_supplicant/wpa_supplicant-wlan0.conf"}),". To do that, run the following command on QTRP:",(0,n.jsx)(t.code,{children:"sudo systemctl status wpa_supplicant@wlan0.service"})," this should shows that the service is running and ",(0,n.jsx)(t.strong,{children:"active"}),". If not, follow the error messages reported by the service."]}),"\n",(0,n.jsx)(t.li,{children:"If you are connected to your home/office network (by checking the previous command) but still does not have access to the internet (e.g. cannot ping google), please double check that your home/office network providing any internet connection!"}),"\n"]})})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},5162:(e,t,o)=>{o.d(t,{Z:()=>i});o(7294);var n=o(512);const r={tabItem:"tabItem_Ymn6"};var s=o(5893);function i(e){let{children:t,hidden:o,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.Z)(r.tabItem,i),hidden:o,children:t})}},4866:(e,t,o)=>{o.d(t,{Z:()=>y});var n=o(7294),r=o(512),s=o(2466),i=o(6550),a=o(469),l=o(1980),c=o(7392),d=o(12);function h(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:o}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:o,attributes:n,default:r}}=e;return{value:t,label:o,attributes:n,default:r}}))}(o);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,o])}function p(e){let{value:t,tabValues:o}=e;return o.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:o}=e;const r=(0,i.k6)(),s=function(e){let{queryString:t=!1,groupId:o}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!o)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return o??null}({queryString:t,groupId:o});return[(0,l._X)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function f(e){const{defaultValue:t,queryString:o=!1,groupId:r}=e,s=u(e),[i,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:o}=e;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:o}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${o.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=o.find((e=>e.default))??o[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[c,h]=m({queryString:o,groupId:r}),[f,b]=function(e){let{groupId:t}=e;const o=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,d.Nk)(o);return[r,(0,n.useCallback)((e=>{o&&s.set(e)}),[o,s])]}({groupId:r}),x=(()=>{const e=c??f;return p({value:e,tabValues:s})?e:null})();(0,a.Z)((()=>{x&&l(x)}),[x]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),b(e)}),[h,b,s]),tabValues:s}}var b=o(2389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=o(5893);function j(e){let{className:t,block:o,selectedValue:n,selectValue:i,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),d=e=>{const t=e.currentTarget,o=l.indexOf(t),r=a[o].value;r!==n&&(c(t),i(r))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const o=l.indexOf(e.currentTarget)+1;t=l[o]??l[0];break}case"ArrowLeft":{const o=l.indexOf(e.currentTarget)-1;t=l[o]??l[l.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":o},t),children:a.map((e=>{let{value:t,label:o,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:h,onClick:d,...s,className:(0,r.Z)("tabs__item",x.tabItem,s?.className,{"tabs__item--active":n===t}),children:o??t},t)}))})}function w(e){let{lazy:t,children:o,selectedValue:r}=e;const s=(Array.isArray(o)?o:[o]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function T(e){const t=f(e);return(0,g.jsxs)("div",{className:(0,r.Z)("tabs-container",x.tabList),children:[(0,g.jsx)(j,{...e,...t}),(0,g.jsx)(w,{...e,...t})]})}function y(e){const t=(0,b.Z)();return(0,g.jsx)(T,{...e,children:h(e.children)},String(t))}}}]);