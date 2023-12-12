"use strict";(self.webpackChunkqtrobot_documentation=self.webpackChunkqtrobot_documentation||[]).push([[6797],{9651:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>t,toc:()=>l});var a=n(5893),s=n(1151);const i={id:"speakers",title:"QTrobot Sound and Speech",hide_table_of_contents:!1},r=void 0,t={id:"modules/speakers",title:"QTrobot Sound and Speech",description:"QTrobot has double speakers powered by 2.8W stereo amplifier. The speakers are connected to Raspberry PI (QTRP) audio analog output via the amplifier.",source:"@site/versioned_docs/version-QTRD_v1/modules/speakers.mdx",sourceDirName:"modules",slug:"/modules/speakers",permalink:"/docs/v1/modules/speakers",draft:!1,unlisted:!1,tags:[],version:"QTRD_v1",frontMatter:{id:"speakers",title:"QTrobot Sound and Speech",hide_table_of_contents:!1},sidebar:"modules",previous:{title:"QTrobot Emotion and Face",permalink:"/docs/v1/modules/display"},next:{title:"QTrobot Audio processing and Microphone",permalink:"/docs/v1/modules/microphone"}},d={},l=[{value:"Software Interface",id:"software-interface",level:2},{value:"Speech",id:"speech",level:3},{value:"Audio",id:"audio",level:3},{value:"How to play custom audio?",id:"how-to-play-custom-audio",level:3},{value:"How to adjust the volume?",id:"how-to-adjust-the-volume",level:3}];function c(e){const o={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.p,{children:"QTrobot has double speakers powered by 2.8W stereo amplifier. The speakers are connected to Raspberry PI (QTRP) audio analog output via the amplifier.\r\nThat provides a standard Linux audio device which you can use freely for playing sounds."}),"\n",(0,a.jsx)("center",{children:(0,a.jsx)("img",{width:"800",src:"/img/speakers.png",alt:"architecture"})}),"\n",(0,a.jsx)(o.hr,{}),"\n",(0,a.jsx)(o.h2,{id:"software-interface",children:"Software Interface"}),"\n",(0,a.jsxs)(o.p,{children:["The ",(0,a.jsx)(o.code,{children:"qt_robot_interface"})," ROS node is the QTrobot's driver for speech and audio. This node implements varieties of ROS interfaces including ",(0,a.jsx)(o.a,{href:"/docs/api_ros#speech-interface",children:"Speech Interface"})," for Text-to-Speech and the ",(0,a.jsx)(o.a,{href:"/docs/api_ros#audio-interface",children:"Audio Interface"})," for playing any audio files."]}),"\n",(0,a.jsx)(o.h3,{id:"speech",children:"Speech"}),"\n",(0,a.jsxs)(o.p,{children:["The QTrobot's Text-to-Speech service is based on ",(0,a.jsx)(o.a,{href:"https://www.acapela-group.com",children:"Acapela"})," software. Depends on your robot and purchased languages/voices, the Acapela pre-installed voice data can be found in ",(0,a.jsx)(o.code,{children:"~/robot/acapela/voices"})," folder. The default language along with other properties such as speed and pitch are configured using ",(0,a.jsx)(o.code,{children:"/opt/ros/noetic/share/qt_robot_interface/config/qtrobot-interface.yaml"})," config file. Under speech section you will see corresponding lines."]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-bash",metastring:"{4-7}",children:"  speech:\r\n        engine: acapela\r\n        acapela:\r\n            path: '/home/qtrobot/robot/acapela/'\r\n            language: en_US\r\n            speed: 80\r\n            pitch: 150\r\n            voices:\r\n                en_US: enu_ella_22k_ns.qvcu\r\n                en_SP: enu_valeriaenglish_22k_ns.qvcu\r\n                de_DE: ged_lea_22k_ns.qvcu  \r\n                fr_FR: frf_valentin_22k_ns.qvcu\r\n                ...\n"})}),"\n",(0,a.jsx)(o.h3,{id:"audio",children:"Audio"}),"\n",(0,a.jsxs)(o.p,{children:["QTrobot audio interface can play standard audio files with ",(0,a.jsx)(o.code,{children:"mp3"})," or ",(0,a.jsx)(o.code,{children:"wav"})," format. The default folder where the interface looks for the audio files is ",(0,a.jsx)(o.code,{children:"~/robot/data/audios"}),". QTrobot comes with some audio examples. You can play any audio file that is in the ",(0,a.jsx)(o.code,{children:"audios"})," folder using service call or ROS publish command as shown bellow. You can also play audio files using ",(0,a.jsx)(o.a,{href:"/docs/intro_graphical",children:"Educator tablet"}),"."]}),"\n",(0,a.jsx)(o.p,{children:"Publisher:"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-bash",children:"rostopic pub /qt_robot/audio/play std_msgs/String \"data: 'QT/Komiku_Glouglou'\"\n"})}),"\n",(0,a.jsx)(o.p,{children:"Service call:"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-bash",children:"rosservice call /qt_robot/audio/play \"filename: 'QT/Komiku_Glouglou'\r\nfilepath: ''\"\n"})}),"\n",(0,a.jsx)(o.admonition,{title:"Note",type:"note",children:(0,a.jsxs)(o.p,{children:["As it shown in the above example, you do not need to give the audio's file extension (",(0,a.jsx)(o.code,{children:".wav"})," or ",(0,a.jsx)(o.code,{children:".mp3"}),") to the interface!"]})}),"\n",(0,a.jsx)(o.h3,{id:"how-to-play-custom-audio",children:"How to play custom audio?"}),"\n",(0,a.jsxs)(o.p,{children:["To play custom audio file, you first need to copy it in the default audios data folder (",(0,a.jsx)(o.code,{children:"~/robot/data/audios"}),") on QTRP. Next you can repeat any of above shown command to play your audio on QTrobot speakers. Let's look at the example."]}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsx)(o.li,{children:'Audio name: "song.wav"'}),"\n",(0,a.jsx)(o.li,{children:'Audio path: "~/robot/data/audios/song.wav"'}),"\n"]}),"\n",(0,a.jsx)(o.p,{children:"Example:"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-bash",children:"rostopic pub /qt_robot/audio/play std_msgs/String \"data: 'song'\"\n"})}),"\n",(0,a.jsx)(o.h3,{id:"how-to-adjust-the-volume",children:"How to adjust the volume?"}),"\n",(0,a.jsx)(o.p,{children:"You can change the volume of the speaker in different way:"}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsxs)(o.li,{children:["Using ",(0,a.jsx)(o.a,{href:"/docs/intro_graphical",children:(0,a.jsx)(o.strong,{children:"Educator tablet"})})," app"]}),"\n",(0,a.jsxs)(o.li,{children:["Calling ",(0,a.jsx)(o.code,{children:"/qt_robot/setting/setVolume"})," ROS service (via coding, command line ROS commands or QTrobot Visual scripting)"]}),"\n",(0,a.jsxs)(o.li,{children:["Using standard Linux tools such as ",(0,a.jsx)(o.code,{children:"alsamixer"})]}),"\n"]}),"\n",(0,a.jsx)(o.p,{children:(0,a.jsx)(o.strong,{children:"Adjusting volume using ROS service call:"})}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-bash",children:'rosservice call /qt_robot/setting/setVolume "volume: 60"\n'})}),"\n",(0,a.jsx)(o.p,{children:(0,a.jsx)(o.strong,{children:"Adjusting volume using alsamixer of QTRP:"})}),"\n",(0,a.jsxs)(o.p,{children:["Access QTRP terminal via SSH and run ",(0,a.jsx)(o.code,{children:"alsamixer"})," command. Select the ",(0,a.jsx)(o.em,{children:"bcm2835 Headphone"})," sound card by pressing ",(0,a.jsx)(o.code,{children:"F6"})," and finally use keyboard arrows up/down to change the volume."]}),"\n",(0,a.jsx)("center",{children:(0,a.jsx)("img",{src:"/img/alsamixer.png",alt:"qtrobot",width:"400"})})]})}function h(e={}){const{wrapper:o}={...(0,s.a)(),...e.components};return o?(0,a.jsx)(o,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}}}]);