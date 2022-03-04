"use strict";(self.webpackChunkqtrobot_documentation=self.webpackChunkqtrobot_documentation||[]).push([[1788],{39778:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return d},toc:function(){return u},default:function(){return m}});var o=t(87462),n=t(63366),i=(t(67294),t(3905)),r=["components"],l={id:"speakers",title:"QTrobot Sound and Speech",hide_table_of_contents:!1},s=void 0,p={unversionedId:"modules/speakers",id:"modules/speakers",title:"QTrobot Sound and Speech",description:"QTrobot has double speakers powered by 2.8W stereo amplifier. The speakers are connected to Raspberry PI (QTRP) audio analog output via the amplifier.",source:"@site/docs/modules/speakers.md",sourceDirName:"modules",slug:"/modules/speakers",permalink:"/docs/modules/speakers",tags:[],version:"current",frontMatter:{id:"speakers",title:"QTrobot Sound and Speech",hide_table_of_contents:!1},sidebar:"modules",previous:{title:"QTrobot Emotion and Face",permalink:"/docs/modules/display"},next:{title:"QTrobot Audio processing and Microphone",permalink:"/docs/modules/microphone"}},d={},u=[{value:"Software Interface",id:"software-interface",level:2},{value:"Speech",id:"speech",level:3},{value:"Audio",id:"audio",level:3},{value:"How to play custom audio?",id:"how-to-play-custom-audio",level:3},{value:"How to adjust the volume?",id:"how-to-adjust-the-volume",level:3}],c={toc:u};function m(e){var a=e.components,t=(0,n.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"QTrobot has double speakers powered by 2.8W stereo amplifier. The speakers are connected to Raspberry PI (QTRP) audio analog output via the amplifier.\nThat provides a standard Linux audio device which you can use freely for playing sounds."),(0,i.kt)("center",null,(0,i.kt)("img",{width:"800",src:"/img/speakers.png",alt:"architecture"})),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"software-interface"},"Software Interface"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"qt_robot_interface")," ROS node is the QTrobot's driver for speech and audio. This node implements varieties of ROS interfaces including ",(0,i.kt)("a",{parentName:"p",href:"/docs/api_ros#speech-interface"},"Speech Interface")," for Text-to-Speech and the ",(0,i.kt)("a",{parentName:"p",href:"/docs/api_ros#audio-interface"},"Audio Interface")," for playing any audio files. "),(0,i.kt)("h3",{id:"speech"},"Speech"),(0,i.kt)("p",null,"The QTrobot's Text-to-Speech service is based on ",(0,i.kt)("a",{parentName:"p",href:"https://www.acapela-group.com"},"Acapela")," software. Depends on your robot and purchased languages/voices, the Acapela pre-installed voice data can be found in ",(0,i.kt)("inlineCode",{parentName:"p"},"~/robot/acapela/voices")," folder. The default language along with other properties such as speed and pitch are configured using ",(0,i.kt)("inlineCode",{parentName:"p"},"/opt/ros/noetic/share/qt_robot_interface/config/qtrobot-interface.yaml")," config file. Under speech section you will see corresponding lines."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{4-7}","{4-7}":!0},"  speech:\n        engine: acapela\n        acapela:\n            path: '/home/qtrobot/robot/acapela/'\n            language: en_US\n            speed: 80\n            pitch: 150\n            voices:\n                en_US: enu_ella_22k_ns.qvcu\n                en_SP: enu_valeriaenglish_22k_ns.qvcu\n                de_DE: ged_lea_22k_ns.qvcu  \n                fr_FR: frf_valentin_22k_ns.qvcu\n                ...\n")),(0,i.kt)("h3",{id:"audio"},"Audio"),(0,i.kt)("p",null,"QTrobot audio interface can play standard audio files with ",(0,i.kt)("inlineCode",{parentName:"p"},"mp3")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"wav")," format. The default folder where the interface looks for the audio files is ",(0,i.kt)("inlineCode",{parentName:"p"},"~/robot/data/audios"),". QTrobot comes with some audio examples. You can play any audio file that is in the ",(0,i.kt)("inlineCode",{parentName:"p"},"audios")," folder using service call or ROS publish command as shown bellow. You can also play audio files using ",(0,i.kt)("a",{parentName:"p",href:"/docs/intro_graphical"},"Educator tablet"),". "),(0,i.kt)("p",null,"Publisher:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"rostopic pub /qt_robot/audio/play std_msgs/String \"data: 'QT/Komiku_Glouglou'\"\n")),(0,i.kt)("p",null,"Service call:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"rosservice call /qt_robot/audio/play \"filename: 'QT/Komiku_Glouglou'\nfilepath: ''\"\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"As it shown in the above example, you do not need to give the audio's file extension (",(0,i.kt)("inlineCode",{parentName:"p"},".wav")," or ",(0,i.kt)("inlineCode",{parentName:"p"},".mp3"),") to the interface! "))),(0,i.kt)("h3",{id:"how-to-play-custom-audio"},"How to play custom audio?"),(0,i.kt)("p",null,"To play custom audio file, you first need to copy it in the default audios data folder (",(0,i.kt)("inlineCode",{parentName:"p"},"~/robot/data/audios"),") on QTRP. Next you can repeat any of above shown command to play your audio on QTrobot speakers. Let's look at the example."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Audio name: "song.wav"'),(0,i.kt)("li",{parentName:"ul"},'Audio path: "~/robot/data/audios/song.wav"')),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"rostopic pub /qt_robot/audio/play std_msgs/String \"data: 'song'\"\n")),(0,i.kt)("h3",{id:"how-to-adjust-the-volume"},"How to adjust the volume?"),(0,i.kt)("p",null,"You can change the volume of the speaker in different way: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Using ",(0,i.kt)("a",{parentName:"li",href:"/docs/intro_graphical"},(0,i.kt)("strong",{parentName:"a"},"Educator tablet"))," app"),(0,i.kt)("li",{parentName:"ul"},"Calling ",(0,i.kt)("inlineCode",{parentName:"li"},"/qt_robot/setting/setVolume")," ROS service (via coding, command line ROS commands or QTrobot Visual scripting)"),(0,i.kt)("li",{parentName:"ul"},"Using standard Linux tools such as ",(0,i.kt)("inlineCode",{parentName:"li"},"alsamixer")," ")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Adjusting volume using ROS service call:")," "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'rosservice call /qt_robot/setting/setVolume "volume: 60"\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Adjusting volume using alsamixer of QTRP:")," "),(0,i.kt)("p",null,"Access QTRP terminal via SSH and run ",(0,i.kt)("inlineCode",{parentName:"p"},"alsamixer")," command. Select the ",(0,i.kt)("em",{parentName:"p"},"bcm2835 Headphone")," sound card by pressing ",(0,i.kt)("inlineCode",{parentName:"p"},"F6")," and finally use keyboard arrows up/down to change the volume. "),(0,i.kt)("center",null,(0,i.kt)("img",{src:"/img/alsamixer.png",alt:"qtrobot",width:"400"})))}m.isMDXComponent=!0}}]);