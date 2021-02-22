'use strict';
goog.provide('Blockly.Blocks.qdprobotESP8266');
goog.require('Blockly.Blocks');
Blockly.Blocks.qdprobotESP8266.HUE = '#6c91ac'; 
Blockly.Blocks.qdprobotESP8266.sensor = '#27b6ac';
Blockly.Blocks.qdprobotESP8266.buttoncolour = 180;
Blockly.Blocks.qdprobotESP8266.GroyHUE = 200;
Blockly.Blocks.qdprobotESP8266.show= '#e36a69';
Blockly.Blocks.qdprobotESP8266.contor = '#AE8F00';
Blockly.Blocks.qdprobotESP8266.MP3 = '#B766AD';
Blockly.Blocks.qdprobotESP8266.hc = '#e386a1';
Blockly.Blocks.qdprobotESP8266.blynk = '#7B68EE';
Blockly.Blocks.qdprobotESP8266.display = '#6495ED';
Blockly.Blocks.qdprobotESP8266.display2='#DA70D6';
Blockly.Blocks.qdprobotESP8266.display_red ='#EE0000';
Blockly.Blocks.qdprobotESP8266.List =270;



//虚拟管脚选择
var BLYNK_VIRTUALPIN_SELECT = [
["V0", "V0"],
["V1", "V1"],
["V2", "V2"],
["V3", "V3"],
["V4", "V4"],
["V5", "V5"],
["V6", "V6"],
["V7", "V7"],
["V8", "V8"],
["V9", "V9"],
["V10", "V10"],
["V11", "V11"],
["V12", "V12"],
["V13", "V13"],
["V14", "V14"],
["V15", "V15"],
["V16", "V16"],
["V17", "V17"],
["V18", "V18"],
["V19", "V19"],
["V20", "V20"],
["V21", "V21"],
["V22", "V22"],
["V23", "V23"],
["V24", "V24"],
["V25", "V25"]
];
var BLYNK_VIRTUALPIN_CLASS_SELECT = [
["Int", 0],
["Str", 1],
["Double", 2],
["Float", 3],
];
var qdprobotESP8266_blynktime=[["#1", "1"],["#2", "2"],["#3", "3"],["#4", "4"],["#5", "5"],["#6", "6"],["#7", "7"],["#8", "8"],["#9", "9"],["#10", "10"],["#11", "11"],["#12", "12"],["#13", "13"],["#14", "14"],["#15", "15"],["#16", "16"]];
var qdprobotESP8266_display=[[(Blockly.MIXLY_QDP_displaysleep1), "1"],[(Blockly.MIXLY_QDP_displaysleep0), "0"]];
var qdprobotESP8266_displayroundtype=[[(Blockly.MIXLY_QDP_displaysolidround), "cirs"],[(Blockly.MIXLY_QDP_displayhollowround), "cir"]];
var qdprobotESP8266_displaycolor=[["RED","63488"],["BLUE","31"],["GRAY","33840"],["BLACK","0"],["WHITE","65535"],["GREEN","2016"],["BROWN","48192"],["YELLOW","65504"]]; 
var qdprobotESP8266_displayfunction1=[[(Blockly.MIXLY_QDP_displayfunction1line),"line"],[(Blockly.MIXLY_QDP_displayfunction1draw),"draw"],[(Blockly.MIXLY_QDP_displayfunction1fill),"fill"]];
var qdprobotESP8266_displaypic=[[(Blockly.MIXLY_QDP_displaypic1),"0"],[(Blockly.MIXLY_QDP_displaypic2),"1"],[(Blockly.MIXLY_QDP_displaypic3),"2"],[(Blockly.MIXLY_QDP_displaypic4),"3"],[(Blockly.MIXLY_QDP_displaypic5),"4"],[(Blockly.MIXLY_QDP_displaypic6),"5"],[(Blockly.MIXLY_QDP_displaypic7),"6"],[(Blockly.MIXLY_QDP_displaypic8),"7"],[(Blockly.MIXLY_QDP_displaypic9),"16"]];
var qdprobotESP8266_displaypage=[[(Blockly.QDPROBOT_displaypage1),"1"],[(Blockly.QDPROBOT_displaypage2),"2"],[(Blockly.QDPROBOT_displaypage3),"3"],[(Blockly.QDPROBOT_displaypage4),"4"],[(Blockly.QDPROBOT_displaypage5),"5"],[(Blockly.QDPROBOT_displaypage6),"6"],[(Blockly.QDPROBOT_displaypage7),"10"],[(Blockly.QDPROBOT_displaypage8),"8"],[(Blockly.QDPROBOT_displaypage9),"19"]];


var qdprobotESP8266_BUlor=[[(Blockly.MIXLY_QDP_RrightB), "1"],[(Blockly.MIXLY_QDP_LeftB), "0"]];
var qdprobotESP8266_BUlorr=[[(Blockly.MIXLY_QDP_RrightB), "1"],[(Blockly.MIXLY_QDP_LeftB1), "0"]];

var qdprobotESP8266_yscgq1=[["700", "700"],["2.4", "2_4"],["24", "24"],["50", "50"],["101", "101"],["154", "154"]];
var qdprobotESP8266_yscgq2=[["1", "1"],["4", "4"],["16", "16"],["60", "60"]];
var qdprobotESP8266_yscgq3=[[(Blockly.MIXLY_QDP_yscgq7), "0"],[(Blockly.MIXLY_QDP_yscgq6), "1"]];
var qdprobotESP8266_yscgq4=[["r", "r"],["g", "g"],["b", "b"],["c", "c"],["colorTemp", "colorTemp"],["lux", "lux"]];


var qdprobotESP8266MP3_T1=[[(Blockly.MIXLY_QDP_play1), "1"],[(Blockly.MIXLY_QDP_play2), "2"],[(Blockly.MIXLY_QDP_play3), "3"],[(Blockly.MIXLY_QDP_play4), "4"],[(Blockly.MIXLY_QDP_play5), "5"],[(Blockly.MIXLY_QDP_play6), "6"],[(Blockly.MIXLY_QDP_play7), "7"],[(Blockly.MIXLY_QDP_play8), "8"],[(Blockly.MIXLY_QDP_play9), "9"],[(Blockly.MIXLY_QDP_play10), "10"],[(Blockly.MIXLY_QDP_play11), "11"],[(Blockly.MIXLY_QDP_play12), "12"],[(Blockly.MIXLY_QDP_play13), "13"],[(Blockly.MIXLY_QDP_play14), "14"]];


var qdprobotESP8266_BT9=[["1", "1"],["2", "2"],["3", "3"],["4", "4"],["5", "5"]];
var qdprobotESP8266_BT99=[["1", "100"],["2", "101"],["3", "102"],["4", "103"],["5", "104"]];


var qdprobotESP8266_T21=[["把灯打开", "把灯打开"],["关闭灯", "关闭灯"],["开始走", "开始走"],["确定开始", "确定开始"],["停止执行", "停止执行"],["是假的", "是假的"],["真的", "真的"],["我同意", "我同意"],["不可以", "不可以"],["温度", "温度"],["这是哪儿", "这是哪儿"],["现在几点", "现在几点"],["今天几号", "今天几号"],["读信息", "读信息"],["来个表情", "来个表情"],["往后退", "往后退"],["向前走", "向前走"],["向左转", "向左转"],["右转弯", "右转弯"],["暂停播放", "暂停播放"],["打开音乐", "打开音乐"],["关掉音乐", "关掉音乐"],["再听一次", "再听一次"],["再读一遍", "再读一遍"],["网络情况", "网络情况"],["断开连接", "断开连接"],["暂停程序", "暂停程序"],["let me go", "let me go"],["yes ok", "yes ok"],["stop", "stop"]];

var qdprobotESP8266_PWMPCB=[["B0", "0"],["B1", "1"],["B2", "2"],["B3", "3"],["B4", "4"],["B5", "5"],["B6", "6"],["B7", "7"],["B8", "8"],["B9", "9"],["B10", "A"],["B11", "B"],["B12", "C"],["B13", "D"],["B14", "E"],["B15", "F"]];
var qdprobotESP8266_PWMPCB2=[["0", "0"],["1", "1"],["2", "2"],["3", "3"],["4", "4"],["5", "5"],["6", "6"],["7", "7"],["8", "8"],["9", "9"],["10", "10"],["11", "11"],["12", "12"],["13", "13"],["14", "14"],["15", "15"],[Blockly.MIXLY_QDP_RGBALL,"16"]];

var qdprobotESP8266_T3=[[(Blockly.MIXLY_QDP_Femalevoice1), "[m3]"],[(Blockly.MIXLY_QDP_Malevoice1), "[m51]"],[(Blockly.MIXLY_QDP_Malevoice2), "[m52]"],[(Blockly.MIXLY_QDP_Femalevoice2), "[m53]"],[(Blockly.MIXLY_QDP_DonaldDuck), "[m54]"],[(Blockly.MIXLY_QDP_Femalechildren), "[m55]"]];
var qdprobotESP8266_T6=[[(Blockly.MIXLY_QDP_Donotinterrupt), "1"],[(Blockly.MIXLY_QDP_Interruptible), "0"]];

var qdprobotESP8266_T51=[[(Blockly.MIXLY_QDP_Sayresult),"1"],[(Blockly.MIXLY_QDP_NoSayresult), "0"]];

var qdprobotESP8266_PWM360=[[(Blockly.MIXLY_QDP_servomotor34),"1"],[(Blockly.MIXLY_QDP_servomotor35), "0"]];

var qdprobotESP8266_BUTTON2=[[(Blockly.MIXLY_QDP_OFF), "0"],[(Blockly.MIXLY_QDP_ON), "1"]];
var qdprobotESP8266_BUTTONCLICK=[[(Blockly.MIXLY_QDP_BUTTONSingleClick),"0"],[(Blockly.MIXLY_QDP_BUTTONDoubleClick), "1"],[(Blockly.MIXLY_QDP_BUTTONTripleClick),"2"],[(Blockly.MIXLY_QDP_BUTTONSingleLongClick),"3"],[(Blockly.MIXLY_QDP_BUTTONDoubleLongClick),"4"],[(Blockly.MIXLY_QDP_BUTTONTripleLongClick),"5"]];
var qdprobotESP8266_IR=[["电源Power", "1"],["Menu", "2"],["静音NOSound", "3"],["Mode", "4"],["+", "5"],["返回Back", "6"],["上一Prev", "7"],["启/停Start/stop", "8"],["下一Next", "9"],["0", "10"],["-", "11"],["OK", "12"],
["1", "13"],["2", "14"],["3", "15"],["4", "16"],["5", "17"],["6", "18"],["7", "19"],["8", "20"],["9","21"]];
var qdprobotESP8266_OLED=[["page1","1"],["page2","2"],["page3","3"],["page4","4"],["page5","5"],["page6","6"],["page7","7"],["page8","8"],["page9","9"]];
var qdprobotESP8266_sound=[[(Blockly.MIXLY_QDP_QFsound1),"1"],[(Blockly.MIXLY_QDP_QFsound2),"2"],[(Blockly.MIXLY_QDP_QFsound3),"3"]];
var QDPTONE_NOTES=[["NOTE_C3", "131"],["NOTE_D3", "147"],["NOTE_E3", "165"],["NOTE_F3", "175"],["NOTE_G3", "196"],["NOTE_A3", "220"],["NOTE_B3", "247"],
           ["NOTE_C4", "262"],["NOTE_D4", "294"],["NOTE_E4", "330"],["NOTE_F4", "349"],["NOTE_G4", "392"],["NOTE_A4", "440"],["NOTE_B4", "494"],
           ["NOTE_C5", "532"],["NOTE_D5", "587"],["NOTE_E5", "659"],["NOTE_F5", "698"],["NOTE_G5", "784"],["NOTE_A5", "880"],["NOTE_B5", "988"]];
var QDPTONE_TONE_MUSIC=[["music1", "1"],["music2", "2"],["music3", "3"],["music4", "4"],["music5", "5"],["music6", "6"],["music7", "7"],["music8", "8"],["music9", "9"],["music10", "10"],];

var qdprobotESP8266_VARIABLES_DROP =[[Blockly.LANG_QDP_MATH_INT,'int'],[Blockly.LANG_QDP_MATH_UNSIGNEDLONG,'unsigned long'],[Blockly.LANG_QDP_MATH_LONG,'long'],
[Blockly.LANG_QDP_MATH_FLOAT,'float'],[Blockly.LANG_QDP_MATH_BOOLEAN,'boolean'],[Blockly.LANG_QDP_MATH_BYTE,'byte'],[Blockly.LANG_QDP_MATH_CHAR,'char'],[Blockly.LANG_QDP_MATH_STRING,'String']];
var QDP_TIME_Dropdown = [[Blockly.MIXLY_QDP_sysTime_millis,'millis()'],[Blockly.MIXLY_QDP_sysTime_micros,'micros()']];
var QDP_irpress = [[Blockly.MIXLY_QDP_IrPress,'0'],[Blockly.MIXLY_QDP_IrPressOn,'1']];
var SdisplayICO = [
  [{ 'src': '../../media/qdprobotESP8266/SdisplayICO/1.jpg', 'width': 30, 'height': 30, 'alt': '0' }, '0'],
  [{ 'src': '../../media/qdprobotESP8266/SdisplayICO/2.jpg', 'width': 30, 'height': 30, 'alt': '7' }, '1'],
  [{ 'src': '../../media/qdprobotESP8266/SdisplayICO/3.jpg', 'width': 30, 'height': 30, 'alt': '8' }, '2'],
  [{ 'src': '../../media/qdprobotESP8266/SdisplayICO/4.jpg', 'width': 30, 'height': 30, 'alt': '3' }, '3'],
  [{ 'src': '../../media/qdprobotESP8266/SdisplayICO/5.jpg', 'width': 30, 'height': 30, 'alt': '4' }, '4'],
  [{ 'src': '../../media/qdprobotESP8266/SdisplayICO/6.jpg', 'width': 30, 'height': 30, 'alt': '5' }, '5'],
  [{ 'src': '../../media/qdprobotESP8266/SdisplayICO/7.jpg', 'width': 30, 'height': 30, 'alt': '6' }, '6'],
  [{ 'src': '../../media/qdprobotESP8266/SdisplayICO/8.jpg', 'width': 30, 'height': 30, 'alt': '7' }, '7'],
  [{ 'src': '../../media/qdprobotESP8266/SdisplayICO/9.jpg', 'width': 30, 'height': 30, 'alt': '8' }, '8'],
  [{ 'src': '../../media/qdprobotESP8266/SdisplayICO/10.jpg', 'width': 30, 'height': 30, 'alt': '9' }, '9'],
  [{ 'src': '../../media/qdprobotESP8266/SdisplayICO/11.jpg', 'width': 30, 'height': 30, 'alt': '10' }, '10'],
  [{ 'src': '../../media/qdprobotESP8266/SdisplayICO/LOGO.jpg', 'width': 30, 'height': 30, 'alt': '11' }, '11']
  ];
  
var QDP_Esp8266_Single_Button_Pin_Dropdown = [['物联屏板载2','ButtonPin'],['IOTStart-板载L-0','PBL'],['IOTStart-板载R-16','PBR'],['P1-L-4','P1L'],['P1-R-5','P1R'],['物联屏P2-R-0','P2R'],['IOTStart P4-L-14','P4L'],['IOTStart P4-R-12','P4R']];

var QDP_Esp8266_Single_Output_Pin_Dropdown = [['P1-L-4','P1L'],['P1-R-5','P1R'],['物联屏P2-R-0','P2R'],['IOTStart P2-R-13','P2R_start'],['IOTStart P4-L-14','P4L'],['IOTStart P4-R-12','P4R']];

var QDP_Esp8266_Right_Digit_Pin_Dropdown = [['.IOTStart P2-R-13板载RGB','P2R_start'],['.P1-L-4','P1L'],['P1-R-5','P1R'],['.物联屏 P2-R-0','P2R'],['.IOTStart P4-L-14','P4L'],['IOTStart P4-R-12','P4R']];
var QDP_ESP8266_Left_Digit_Pin_Dropdown = [['物联屏 P2-R-0','P2R'],['.P1-L-4','P1L'],['P1-R-5','P1R'],['IOTStart P2-R-13','P2R_start'],['.IOTStart P4-L-14','P4L'],['IOTStart P4-R-12','P4R'],];

var QDP_Esp8266_Both_Button_Pin_Dropdown = [['P1-4-5','1'],['IOTStart P4-14-12','4'],['IOTStart-板载 PB-0-16','B']];
var QDP_Esp8266_Double_Digit_Pin_Dropdown = [['P1-4-5','1'],['IOTStart P4-14-12','4']];
var QDP_Esp8266_Buzzer_Pin_Dropdown = [['.物联板载15','BuzzerPin'],['.物联屏P2-R-0','P2R'],['P1-L-4','P1L'],['.P1-R-5','P1R'],['.IOTStart P2-R-13','13'],['IOTStart P4-L-14','P4L'],['.IOTStart P4-R-12','P4R']];
var QDP_Esp8266_Serial_Port_Pin_Dropdown = [['P1-4-5','1'],['IOTStart P4-14-12','4'],['IOTStart P3-3-1','Serial']];

//二维码
Blockly.Blocks.QDP_blink_8266 = {
  init: function() {
    this.setColour("#00CCCC");
    this.appendDummyInput("").appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/qx.png", 50, 50)).appendField(Blockly.blinker_QR_1);

    this.setTooltip("描码进入学习教程");
    this.setHelpUrl();
  }
};


Blockly.Blocks.qdp_ESP8266_yscgq = {
  init: function() {
    this.setColour(88);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/sensor/qdp_yscgq.png", 30, 20))
    .appendField(Blockly.MIXLY_QDP_yscgq1)
    
     .appendField(Blockly.MIXLY_QDP_yscgq2)
    .appendField(new Blockly.FieldDropdown(qdprobotESP8266_yscgq1), "PIN1")
    .appendField(Blockly.MIXLY_QDP_yscgq3)
    .appendField(new Blockly.FieldDropdown(qdprobotESP8266_yscgq2), "PIN2")
    
    .appendField(Blockly.MIXLY_QDP_yscgq5)
    .appendField(new Blockly.FieldDropdown(qdprobotESP8266_yscgq3), "PIN3")
    .appendField(Blockly.MIXLY_QDP_yscgq4)
     this.appendValueInput('num1',Number)
    .setCheck(Number)

    this.setPreviousStatement(true);
    this.setNextStatement(true);
      this.setInputsInline(true);
      this.setTooltip(Blockly.MIXLY_QDP_yscgqMARK1);//增加块的鼠标注释内容 
  }
};

//颜色传感器的值读取
Blockly.Blocks.qdp_yscgq2 = {
  init: function() {
    this.setColour(88);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/sensor/qdp_yscgq.png", 30, 20))
        .appendField(Blockly.MIXLY_QDP_yscgq8)

        .appendField(new Blockly.FieldDropdown(qdprobotESP8266_yscgq4), "PIN");
    this.setOutput(true, Number);
    this.setTooltip(Blockly.MIXLY_QDP_yscgqMARK2);//增加块的鼠标注释内容
  }
  };

  //颜色传感器值应用
Blockly.Blocks.qdp_yscgq3 = {
  init: function() {
    this.setColour(88);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/sensor/qdp_yscgq.png", 30, 20))
        .appendField(Blockly.MIXLY_QDP_yscgq9)
        .appendField(new Blockly.FieldDropdown(qdprobotESP8266_yscgq4), "PIN");

    this.appendValueInput('num1',Number)
        .setCheck(Number)
        .appendField(Blockly.MIXLY_QDP_yscgq11);
    this.appendValueInput('num2',Number)
        .setCheck(Number)
        .appendField(Blockly.MIXLY_QDP_yscgq10);
    this.setOutput(true, Number);
    this.setInputsInline(true);
    this.setTooltip(Blockly.MIXLY_QDP_yscgqMARK3);//增加块的鼠标注释内容 
  }
};


//传感器-MPU6050-更新数据
Blockly.Blocks.QDP_ESP8266_MPU6050_update= {
  init: function() {
   this.setColour(Blockly.Blocks.qdprobotESP8266.buttoncolour);
   this.appendDummyInput("")
   .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/sensor/qdp_gyro.png", 30, 20))
   .appendField(Blockly.MIXLY_QDP_gyro3)
   .appendField(new Blockly.FieldDropdown(qdprobotESP8266_yscgq3), "consoleModel");
   this.setPreviousStatement(true);
   this.setNextStatement(true);
   this.setInputsInline(true);
   this.setTooltip(Blockly.MIXLY_QDP_gyro4);//增加块的鼠标注释内容
 }
};

//传感器-MPU6050-角度复位
Blockly.Blocks.QDP_ESP8266_MPU6050_Angle_reset = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.buttoncolour);
    this.appendDummyInput("").appendField(Blockly.QDP_MPU6050_REST);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip("");
  }
};

//传感器-MPU6050-获取数据
Blockly.Blocks.QDP_ESP8266_MPU6050_GETDATA= {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.buttoncolour);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/sensor/qdp_gyro.png", 30, 20))
    .appendField(Blockly.MIXLY_QDP_gyro5);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(new Blockly.FieldDropdown([
      [Blockly.MIXLY_Accel_X, "mpu.getAccX()"], 
      [Blockly.MIXLY_Accel_Y, "mpu.getAccY()"], 
      [Blockly.MIXLY_Accel_Z, "mpu.getAccZ()"],
      [Blockly.MIXLY_Gyro_X, "mpu.getAccAngleX()"],
      [Blockly.MIXLY_Gyro_Y, "mpu.getAccAngleY()"],
      [Blockly.MIXLY_Gyro_Z, "mpu.getAngleZ()"],
      [Blockly.MIXLY_readTempC, "mpu.getTemp()"]
      ]), "MPU6050_TYPE");
    this.setInputsInline(true);
    this.setOutput(true);
    
  }
};




//蜂鸣器选单
Blockly.Blocks.qdp_buzzer_Dropdown={
 init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.contor);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown(QDPTONE_NOTES), "PIN2");
    this.setOutput(true, Number);

  }
};






//执行器定时器

Blockly.Blocks.qdp_timer = {
  init: function() {
    this.setColour(Blockly.Blocks.serial.HUE);
    this.appendDummyInput("").appendField(new Blockly.FieldDropdown(qdprobotESP8266_blynktime), "pinb")
    this.appendValueInput("TIME")
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.qdp_TIMER)
    this.appendDummyInput()
    .appendField("ms");
    this.appendStatementInput("DO")
    .appendField(Blockly.MIXLY_MSTIMER2_DO);
    this.setPreviousStatement(false);
    this.setNextStatement(false);
    this.setTooltip(Blockly.MIXLY_QDP_qdptimerMARK);//增加块的鼠标注释内容 
  }
};





//二维码
Blockly.Blocks.QDP_blynk_QR = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.blynk);
    this.appendDummyInput("").appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/blynk/qr.png", 50, 50)).appendField(Blockly.blynk_QR);
    this.setTooltip();
    this.setHelpUrl();
  }
};

//硬件连接服务器状态
Blockly.Blocks.QDP_blynk_iot_CONNECTED = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.blynk);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/blynk/iot.png", 30, 20))
        .appendField(Blockly.blynk_IOT_CONNECTED1)
        
        
       this.setOutput(true, Boolean);
       this.setTooltip(Blockly.MIXLY_QDP_IOT_CONNECTED1);//增加块的鼠标注释内容
  }
  };


//当设备连接到blynk
Blockly.Blocks.QDP_BLYNK_CONNECTED = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.blynk);
    this.appendDummyInput("").appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/blynk/iot.png", 30, 20)).appendField(Blockly.BLYNK_CONNECTED);
    this.appendStatementInput('DO').appendField('');
    this.setInputsInline(true);
    this.setTooltip("");
  }
};
//当连接上APP
Blockly.Blocks.QDP_BLYNK_APP_CONNECTED = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.blynk);
    this.appendDummyInput("").appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/blynk/iot.png", 30, 20)).appendField(Blockly.BLYNK_APP_CONNECTED);
    this.appendStatementInput('DO').appendField('');
    this.setInputsInline(true);
    this.setTooltip("");
  }
};
//当断开APP
Blockly.Blocks.QDP_BLYNK_APP_DISCONNECTED = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.blynk);
    this.appendDummyInput("").appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/blynk/iot.png", 30, 20)).appendField(Blockly.BLYNK_APP_DISCONNECTED);
    this.appendStatementInput('DO').appendField('');
    this.setInputsInline(true);
    this.setTooltip("");
  }
};



Blockly.Blocks.QDP_blynk_iot_get_data = {
  /**
 * Block for defining a procedure with no return value.
 * @this Blockly.Block
 */
 init: function () {
  this.setColour(Blockly.Blocks.qdprobotESP8266.blynk);
  this.appendDummyInput("")
  .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/blynk/iot.png", 20, 20))
  .appendField(Blockly.blynk_IOT_GET_DATA);
  this.appendDummyInput("")
  .appendField(new Blockly.FieldDropdown(BLYNK_VIRTUALPIN_SELECT), "Vpin");
  this.appendDummyInput()
  .appendField("", "PARAMS");
    this.setMutator(new Blockly.Mutator(["procedures_mutatorarg"]));//添加齿轮
    this.setTooltip();
    this.arguments_ = [];//新增参数名称
    this.argumentstype_ = [];//新增参数类型
    this.setStatements_(true);
    this.setInputsInline(true);
    this.setPreviousStatement(false, null);
    this.setNextStatement(false, null);
    this.statementConnection_ = null;
  },

  getVars: function () {
    return [this.getFieldValue("VAR")];
  },

  renameVar: function (oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue("VAR"))) {
      this.setTitleValue(newName, "VAR");
    }
  },

  /**
   * Add or remove the statement block from this function definition.
   * @param {boolean} hasStatements True if a statement block is needed.
   * @this Blockly.Block
   */
   setStatements_: function (hasStatements) {
    if (this.hasStatements_ === hasStatements) {
      return;
    }
    if (hasStatements) {
      this.appendStatementInput("STACK")
      .appendField(Blockly.Msg.CONTROLS_REPEAT_INPUT_DO);
      if (this.getInput("RETURN")) {
        this.moveInputBefore("STACK", "RETURN");
      }
    } else {
      this.removeInput("STACK", true);
    }
    this.hasStatements_ = hasStatements;
  },
  /**
   * Update the display of parameters for this procedure definition block.
   * Display a warning if there are duplicately named parameters.
   * @private
   * @this Blockly.Block
   */
   updateParams_: function () {
    // Check for duplicated arguments.
    var badArg = false;
    var hash = {};
    for (var i = 0; i < this.arguments_.length; i++) {
      if (hash["arg_" + this.arguments_[i].toLowerCase()]) {
        badArg = true;
        break;
      }
      hash["arg_" + this.arguments_[i].toLowerCase()] = true;
    }
    if (badArg) {
      this.setWarningText(Blockly.Msg.PROCEDURES_DEF_DUPLICATE_WARNING);
    } else {
      this.setWarningText(null);
    }
    // Merge the arguments into a human-readable list.
    var paramString = "";
    if (this.arguments_.length) {
      paramString = Blockly.Msg.PROCEDURES_BEFORE_PARAMS +
      " " + this.arguments_.join(", ");
    }
    // The params field is deterministic based on the mutation,
    // no need to fire a change event.
    Blockly.Events.disable();
    this.setFieldValue(paramString, "PARAMS");
    Blockly.Events.enable();
  },
  /**
   * Create XML to represent the argument inputs.
   * @param {=boolean} opt_paramIds If true include the IDs of the parameter
   *     quarks.  Used by Blockly.Procedures.mutateCallers for reconnection.
   * @return {!Element} XML storage element.
   * @this Blockly.Block
   */
   mutationToDom: function () {
    var container = document.createElement("mutation");
    for (var i = 0; i < this.arguments_.length; i++) {
      var parameter = document.createElement("arg");
      parameter.setAttribute("name", this.arguments_[i]);
      parameter.setAttribute("vartype", this.argumentstype_[i]);//新增
      container.appendChild(parameter);
    }

    // Save whether the statement input is visible.
    if (!this.hasStatements_) {
      container.setAttribute("statements", "false");
    }
    return container;
  },
  /**
  * Parse XML to restore the argument inputs.
  * @param {!Element} xmlElement XML storage element.
  * @this Blockly.Block
  */
  domToMutation: function (xmlElement) {
    this.arguments_ = [];
    this.argumentstype_ = [];//新增
    for (var i = 0, childNode; childNode = xmlElement.childNodes[i]; i++) {
      if (childNode.nodeName.toLowerCase() == "arg") {
        this.arguments_.push(childNode.getAttribute("name"));
        this.argumentstype_.push(childNode.getAttribute("vartype"));//新增
      }
    }
    this.updateParams_();
   // Blockly.Procedures.mutateCallers(this);

    // Show or hide the statement input.
    this.setStatements_(xmlElement.getAttribute("statements") !== "false");
  },
  /**
   * Populate the mutator"s dialog with this block"s components.
   * @param {!Blockly.Workspace} workspace Mutator"s workspace.
   * @return {!Blockly.Block} Root block in mutator.
   * @this Blockly.Block
   */
   decompose: function (workspace) {
    var containerBlock = workspace.newBlock("procedures_mutatorcontainer");
    containerBlock.initSvg();

    // Check/uncheck the allow statement box.
    if (this.getInput("RETURN")) {
      containerBlock.setFieldValue(this.hasStatements_ ? "TRUE" : "FALSE",
        "STATEMENTS");
    } else {
      containerBlock.getInput("STATEMENT_INPUT").setVisible(false);
    }

    // Parameter list.
    var connection = containerBlock.getInput("STACK").connection;
    for (var i = 0; i < this.arguments_.length; i++) {
      var paramBlock = workspace.newBlock("procedures_mutatorarg");
      paramBlock.initSvg();
      paramBlock.setFieldValue(this.arguments_[i], "NAME");
      paramBlock.setFieldValue(this.argumentstype_[i], "TYPEVAR");//新增
      // Store the old location.
      paramBlock.oldLocation = i;
      connection.connect(paramBlock.previousConnection);
      connection = paramBlock.nextConnection;
    }
    // Initialize procedure"s callers with blank IDs.
   // Blockly.Procedures.mutateCallers(this);
   return containerBlock;
 },
  /**
   * Reconfigure this block based on the mutator dialog"s components.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this Blockly.Block
   */
   compose: function (containerBlock) {
    // Parameter list.
    this.arguments_ = [];
    this.paramIds_ = [];
    this.argumentstype_ = [];//新增
    var paramBlock = containerBlock.getInputTargetBlock("STACK");
    while (paramBlock) {
      this.arguments_.push(paramBlock.getFieldValue("NAME"));
      this.argumentstype_.push(paramBlock.getFieldValue("TYPEVAR"));//新增
      this.paramIds_.push(paramBlock.id);
      paramBlock = paramBlock.nextConnection &&
      paramBlock.nextConnection.targetBlock();
    }
    this.updateParams_();
  //  Blockly.Procedures.mutateCallers(this);

    // Show/hide the statement input.
    var hasStatements = containerBlock.getFieldValue("STATEMENTS");
    if (hasStatements !== null) {
      hasStatements = hasStatements == "TRUE";
      if (this.hasStatements_ != hasStatements) {
        if (hasStatements) {
          this.setStatements_(true);
          // Restore the stack, if one was saved.
          Blockly.Mutator.reconnect(this.statementConnection_, this, "STACK");
          this.statementConnection_ = null;
        } else {
          // Save the stack, then disconnect it.
          var stackConnection = this.getInput("STACK").connection;
          this.statementConnection_ = stackConnection.targetConnection;
          if (this.statementConnection_) {
            var stackBlock = stackConnection.targetBlock();
            stackBlock.unplug();
            stackBlock.bumpNeighbours_();
          }
          this.setStatements_(false);
        }
      }
    }
  },
  /**
   * Dispose of any callers.
   * @this Blockly.Block
   */
   dispose: function () {
    var name = this.getFieldValue("NAME");
   // Blockly.Procedures.disposeCallers(name, this.workspace);
    // Call parent"s destructor.
    this.constructor.prototype.dispose.apply(this, arguments);
  },
  /**
   * Return the signature of this procedure definition.
   * @return {!Array} Tuple containing three elements:
   *     - the name of the defined procedure,
   *     - a list of all its arguments,
   *     - that it DOES NOT have a return value.
   * @this Blockly.Block
   */
  // getProcedureDef: function () {
  //   return ["ignoreProcedureIotGetData", this.arguments_, false];
  // },
  /**
   * Return all variables referenced by this block.
   * @return {!Array.<string>} List of variable names.
   * @this Blockly.Block
   */
   getVars: function () {
    return this.arguments_;
  },
  /**
   * Notification that a variable is renaming.
   * If the name matches one of this block"s variables, rename it.
   * @param {string} oldName Previous name of variable.
   * @param {string} newName Renamed variable.
   * @this Blockly.Block
   */
   renameVar: function (oldName, newName) {
    var change = false;
    for (var i = 0; i < this.arguments_.length; i++) {
      if (Blockly.Names.equals(oldName, this.arguments_[i])) {
        this.arguments_[i] = newName;
        change = true;
      }
    }
    if (change) {
      this.updateParams_();
      // Update the mutator"s variables if the mutator is open.
      if (this.mutator.isVisible()) {
        var blocks = this.mutator.workspace_.getAllBlocks();
        for (var i = 0, block; block = blocks[i]; i++) {
          if (block.type == "procedures_mutatorarg" &&
            Blockly.Names.equals(oldName, block.getFieldValue("NAME"))) {
            block.setFieldValue(newName, "NAME");
        }
      }
    }
  }
},
  /**
   * Add custom menu options to this block"s context menu.
   * @param {!Array} options List of menu options to add to.
   * @this Blockly.Block
   */
   customContextMenu: function (options) {
    // Add option to create caller.
    var option = { enabled: true };
    var name = this.getFieldValue("NAME");
    option.text = Blockly.Msg.PROCEDURES_CREATE_DO.replace("%1", name);
    var xmlMutation = goog.dom.createDom("mutation");
    xmlMutation.setAttribute("name", name);
    for (var i = 0; i < this.arguments_.length; i++) {
      var xmlArg = goog.dom.createDom("arg");
      xmlArg.setAttribute("name", this.arguments_[i]);
      xmlArg.setAttribute("type", this.argumentstype_[i]);//新增
      xmlMutation.appendChild(xmlArg);
    }
    var xmlBlock = goog.dom.createDom("block", null, xmlMutation);
    xmlBlock.setAttribute("type", this.callType_);
    option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
    options.push(option);

    // Add options to create getters for each parameter.
    if (!this.isCollapsed()) {
      for (var i = 0; i < this.arguments_.length; i++) {
        var option = { enabled: true };
        var name = this.arguments_[i];
        option.text = Blockly.Msg.VARIABLES_SET_CREATE_GET.replace("%1", name);
        var xmlField = goog.dom.createDom("field", null, name);
        xmlField.setAttribute("name", "VAR");
        xmlField.setAttribute("type", "TYPEVAR");//新增
        var xmlBlock = goog.dom.createDom("block", null, xmlField);
        xmlBlock.setAttribute("type", "variables_get");
        option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
        options.push(option);
      }
    }
  },
  callType_: "procedures_callnoreturn"
};

//物联网推送数据
Blockly.Blocks["QDP_blynk_iot_push_data_request"] = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.blynk);
    this.appendDummyInput("").appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/blynk/iot.png", 30, 20)).appendField(Blockly.blynk_IOT_PUSH_DATA_REQUEST);
    this.appendDummyInput("").appendField(new Blockly.FieldDropdown(BLYNK_VIRTUALPIN_SELECT), "Vpin");
    this.appendValueInput("Vname")
    .setCheck(Number)
    .appendField(Blockly.blynk_IOT_DATA);
    this.appendStatementInput('DO').appendField("");
    this.setInputsInline(true);
    this.setTooltip("更新时间在APP组件内设置，blynk向主机请求数据，适用于各种数据的显示，不用在主机端推送刷新，不会引发掉线。");
  }
};

//blynk定时器
Blockly.Blocks.QDP_Blynk_iot_timer = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.blynk);
    this.appendDummyInput("").appendField(new Blockly.FieldDropdown(qdprobotESP8266_blynktime), "pinb")
    this.appendValueInput("TIME")
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.blynk_TIMER)
    this.appendDummyInput()
    .appendField("ms");
    this.appendStatementInput("DO")
    .appendField(Blockly.MIXLY_MSTIMER2_DO);
    this.setPreviousStatement(false);
    this.setNextStatement(false);
    this.setTooltip("更新时间不能小于1秒，或两个之间不能小于1秒，不然会引发掉线，尽量不用这个功能或少用！");
  }
};

//物联网-发送数据到app
Blockly.Blocks.QDP_blynk_iot_push_data = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.blynk);
    this.appendDummyInput("").appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/blynk/iot.png", 30, 20)).appendField(Blockly.blynk_IOT_PUSH_DATA);
    this.appendDummyInput("").appendField(new Blockly.FieldDropdown(BLYNK_VIRTUALPIN_SELECT), "Vpin");
    this.appendValueInput("data").appendField(Blockly.blynk_IOT_DATA);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip("不要重复发送大量数据，会导致断线，谨慎使用！");
    this.setHelpUrl();
  }
};



//物联网-LED组件颜色&开关
Blockly.Blocks.QDP_blynk_iot_WidgetLED_COLOR = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.blynk);
    this.appendDummyInput("").appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/blynk/widget_led.png", 30, 20)).appendField(Blockly.blynk_IOT_WidgetLED);
    this.appendDummyInput("").appendField(new Blockly.FieldDropdown(BLYNK_VIRTUALPIN_SELECT), "Vpin").appendField(Blockly.blynk_iot_WidgetLED_COLOR);
    this.appendDummyInput("").setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldColour("#ff0000"), "RGB_LED_COLOR");
    this.appendDummyInput("").appendField(Blockly.MIXLY_STAT)
    .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_HIGH, "HIGH"], [Blockly.MIXLY_LOW, "LOW"]]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip(" ");
    this.setHelpUrl();
  }
};

//物联网-LED组件颜色&亮度
Blockly.Blocks.QDP_blynk_iot_WidgetLED_VALUE = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.blynk);
    this.appendDummyInput("").appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/blynk/widget_led.png", 30, 20)).appendField(Blockly.blynk_IOT_WidgetLED);
    this.appendDummyInput("").appendField(new Blockly.FieldDropdown(BLYNK_VIRTUALPIN_SELECT), "Vpin").appendField(Blockly.blynk_iot_WidgetLED_COLOR);
    this.appendDummyInput("").setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldColour("#ff0000"), "RGB_LED_COLOR");
    this.appendValueInput("NUM", Number)
    .appendField(Blockly.blynk_IOT_WidgetLED_VALUE)
    .setCheck(Number);
    //this.appendValueInput("data").appendField(Blockly.blynk_IOT_DATA);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip(" ");
    this.setHelpUrl();
  }
};

//物联网-发送邮件
Blockly.Blocks.QDP_blynk_email = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.blynk);
    this.appendDummyInput("").appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/blynk/widget_email.png", 30, 20)).appendField(Blockly.blynk_EMAIL);
    this.appendValueInput("email_add").appendField(Blockly.blynk_EMAIL_ADD).setCheck(String);
    this.appendValueInput("Subject").appendField(Blockly.blynk_EMAIL_SUBJECT).setCheck(String);
    this.appendValueInput("content").appendField(Blockly.blynk_EMAIL_CONTENT).setCheck(String);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip();
    this.setHelpUrl();
  }
};

//物联网-发送通知
Blockly.Blocks.QDP_blynk_notify = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.blynk);
    this.appendDummyInput("").appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/blynk/widget_push_notifications.png", 30, 20)).appendField(Blockly.blynk_NOTIFY);
    this.appendValueInput("content").appendField(Blockly.blynk_NOTIFY_CONTENT).setCheck([String,Number,Boolean]);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip();
    this.setHelpUrl();
  }
};

//从终端获取字符串
Blockly.Blocks.QDP_blynk_iot_terminal_get = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.blynk);
    this.appendDummyInput("").appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/blynk/widget_terminal.png", 30, 20)).appendField(Blockly.blynk_IOT_terminal_get);
    this.appendDummyInput("").appendField(new Blockly.FieldDropdown(BLYNK_VIRTUALPIN_SELECT), "Vpin");
    this.appendStatementInput('DO').appendField('');
    this.setInputsInline(true);
    this.setTooltip("");
  }
};
//Blynk终端清屏
Blockly.Blocks['QDP_blynk_terminal_clear'] = {
  init: function () {
    this.setColour(Blockly.Blocks.qdprobotESP8266.blynk);
    this.appendDummyInput()
    .appendField(Blockly.blynk_terminal_clear);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setHelpUrl("");
  }
};

//物联网-终端组件显示文本
Blockly.Blocks.QDP_blynk_terminal = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.blynk);
    this.appendDummyInput("").appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/blynk/widget_terminal.png", 30, 20)).appendField(Blockly.blynk_terminal);
    this.appendValueInput("content").appendField(Blockly.blynk_NOTIFY_CONTENT).setCheck([String,Number,Boolean]);
    this.appendDummyInput("").appendField(Blockly.BLYNK_VIRTUALPIN);
    this.appendDummyInput("").appendField(new Blockly.FieldDropdown(BLYNK_VIRTUALPIN_SELECT), "Vpin");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip();
    this.setHelpUrl();
  }
};

//Blynk LCD显示
Blockly.Blocks['QDP_blynk_lcd'] = {
  init: function () {
    this.setColour(Blockly.Blocks.qdprobotESP8266.blynk);
    this.appendDummyInput()
    .appendField(Blockly.blynk_lcd)
    .appendField(Blockly.BLYNK_VIRTUALPIN);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldDropdown(BLYNK_VIRTUALPIN_SELECT), "Vpin");
    this.appendDummyInput()
    .appendField(Blockly.MIXLY_ESP8266_MIXGO_MUSIC_SHOW_IN+Blockly.MIXLY_4DIGITDISPLAY_NOMBER1);
    this.appendValueInput("x")
    .setCheck(null);
    this.appendDummyInput()
    .appendField(Blockly.Msg.DATAFRAME_COLUMN+Blockly.MIXLY_4DIGITDISPLAY_NOMBER1);
    this.appendValueInput("y")
    .setCheck(null);
    this.appendDummyInput()
    .appendField(Blockly.Msg.DATAFRAME_RAW);
    this.appendValueInput("value")
    .appendField(Blockly.Msg.OLEDDISPLAY)
    .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setHelpUrl("");
    this.setInputsInline(true);
  }
};

//Blynk LCD清屏
Blockly.Blocks.QDP_blynk_lcd_clear = {
  init: function () {
    this.appendDummyInput()
    .appendField(Blockly.blynk_lcd)
    .appendField(Blockly.MIXLY_LCD_STAT_CLEAR);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.qdprobotESP8266.blynk);
    this.setHelpUrl("");
  }
};


//Blynk Table小部件添加数据
Blockly.Blocks['QDP_blynk_table'] = {
  init: function () {
    this.appendDummyInput()
    .appendField(Blockly.blynk_table)
    .appendField("ID");
    this.appendValueInput("id")
    .setCheck(null);
    this.appendDummyInput()
    .appendField(Blockly.Msg.HTML_NAME);
    this.appendValueInput("mingcheng")
    .setCheck(null);
    this.appendDummyInput()
    .appendField(Blockly.MIXLY_SD_DATA);
    this.appendValueInput("shujv")
    .setCheck(null);
    this.appendDummyInput()
    .appendField(Blockly.BLYNK_VIRTUALPIN);
    this.appendValueInput("xnyj")
    .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.qdprobotESP8266.blynk);
    this.setTooltip();
    this.setHelpUrl("");
  }
};

//Blynk Table小部件更新数据
Blockly.Blocks['QDP_blynk_table_update'] = {
  init: function () {
    this.appendDummyInput()
    .appendField(Blockly.blynk_table_update)
    .appendField("ID");
    this.appendValueInput("id")
    .setCheck(null);
    this.appendDummyInput()
    .appendField(Blockly.Msg.HTML_NAME);
    this.appendValueInput("mingcheng")
    .setCheck(null);
    this.appendDummyInput()
    .appendField(Blockly.MIXLY_SD_DATA);
    this.appendValueInput("shujv")
    .setCheck(null);
    this.appendDummyInput()
    .appendField(Blockly.BLYNK_VIRTUALPIN);
    this.appendValueInput("xnyj")
    .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.qdprobotESP8266.blynk);
    this.setTooltip();
    this.setHelpUrl("");
  }
};

//Blynk Table小部件高亮显示数据
Blockly.Blocks['QDP_blynk_table_highlight'] = {
  init: function () {
    this.appendDummyInput()
    .appendField(Blockly.blynk_table_highlight)
    .appendField("ID");
    this.appendValueInput("id")
    .setCheck(null);
    this.appendDummyInput()
    .appendField(Blockly.BLYNK_VIRTUALPIN);
    this.appendValueInput("xnyj")
    .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.qdprobotESP8266.blynk);
    this.setTooltip();
    this.setHelpUrl("");
  }
};

//Blynk Table小部件选择数据
Blockly.Blocks['QDP_blynk_table_select'] = {
  init: function () {
    this.appendDummyInput()
    .appendField(Blockly.blynk_table_select)
    .appendField("ID");
    this.appendValueInput("id")
    .setCheck(null);
    this.appendDummyInput()
    .appendField(Blockly.BLYNK_VIRTUALPIN);
    this.appendValueInput("xnyj")
    .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.qdprobotESP8266.blynk);
    this.setTooltip();
    this.setHelpUrl("");
  }
};

//Blynk Table小部件取消选择数据
Blockly.Blocks['QDP_blynk_table_unselect'] = {
  init: function () {
    this.appendDummyInput()
    .appendField(Blockly.blynk_table_unselect)
    .appendField("ID");
    this.appendValueInput("id")
    .setCheck(null);
    this.appendDummyInput()
    .appendField(Blockly.BLYNK_VIRTUALPIN);
    this.appendValueInput("xnyj")
    .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.qdprobotESP8266.blynk);
    this.setTooltip();
    this.setHelpUrl("");
  }
};

//Blynk Table小部件数据清除
Blockly.Blocks['QDP_blynk_table_cleardata'] = {
  init: function () {
    this.appendDummyInput()
    .appendField(Blockly.blynk_table_cleardata)
    .appendField("ID");
    this.appendValueInput("xnyj")
    .setCheck(null)
    .appendField(Blockly.BLYNK_VIRTUALPIN);
    this.appendDummyInput();
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.qdprobotESP8266.blynk);
    this.setTooltip();
    this.setHelpUrl("");
  }
};


//时间输入-简单
Blockly.Blocks.QDP_blynk_time_input_1 = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.blynk);
    this.appendDummyInput("").appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/blynk/widget_timeinput.png", 30, 20)).appendField(Blockly.blynk_time_input_1);
    this.appendDummyInput("").appendField(new Blockly.FieldDropdown(BLYNK_VIRTUALPIN_SELECT), "Vpin");
    this.appendStatementInput('DO').appendField('');
    this.setInputsInline(true);
    this.setTooltip(Blockly.blynk_ACC_tooltip);
  }
};

//物联网-视频流
Blockly.Blocks.QDP_blynk_videourl = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.blynk);
    this.appendDummyInput("").appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/blynk/widget_video.png", 30, 20));
    this.appendValueInput("url").appendField(Blockly.blynk_VIDEOURL).setCheck(String);
    this.appendDummyInput("").appendField(Blockly.BLYNK_VIRTUALPIN);
    this.appendDummyInput("").appendField(new Blockly.FieldDropdown(BLYNK_VIRTUALPIN_SELECT), "Vpin");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip();
    this.setHelpUrl();
  }
};

//物联网-桥接授权码
Blockly.Blocks.QDP_blynk_bridge_auth = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.blynk);
    this.appendDummyInput("").appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/blynk/widget_bridge.png", 30, 20));
    this.appendValueInput("auth").appendField(Blockly.blynk_BRIDGE_AUTH).setCheck(String);
    this.appendDummyInput("").appendField(Blockly.BLYNK_VIRTUALPIN);
    this.appendDummyInput("").appendField(new Blockly.FieldDropdown(BLYNK_VIRTUALPIN_SELECT), "Vpin");
    this.appendDummyInput("").appendField(Blockly.blynk_BRIDGE_NUM);
    this.appendDummyInput("").appendField(new Blockly.FieldDropdown(qdprobotESP8266_BT9), "num");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip();
    this.setHelpUrl();
  }
};
//物联网-桥接数字输出
Blockly.Blocks.QDP_blynk_bridge_digitalWrite = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.blynk);
    this.appendDummyInput("").appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/blynk/widget_bridge.png", 30, 20))
    .appendField(Blockly.blynk_bridge_digitalWrite);
    this.appendValueInput("PIN").setCheck(Number);
    this.appendValueInput("STAT").appendField(Blockly.MIXLY_STAT).setCheck([Number,Boolean]);
    this.appendDummyInput("").appendField(Blockly.blynk_BRIDGE_NUM);
    this.appendDummyInput("").appendField(new Blockly.FieldDropdown(qdprobotESP8266_BT9), "num");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip();
    this.setHelpUrl();
  }
};

//物联网-桥接模拟输出
Blockly.Blocks.QDP_blynk_bridge_AnaloglWrite = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.blynk);
    this.appendDummyInput("").appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/blynk/widget_bridge.png", 30, 20)).appendField(Blockly.blynk_bridge_AnaloglWrite);
    this.appendValueInput("PIN").setCheck(Number);
    this.appendValueInput("NUM", Number).appendField(Blockly.MIXLY_VALUE2).setCheck(Number); 
    this.appendDummyInput("").appendField(Blockly.blynk_BRIDGE_NUM);
    this.appendDummyInput("").appendField(new Blockly.FieldDropdown(qdprobotESP8266_BT9), "num");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip();
    this.setHelpUrl();
  }
};

//物联网-桥接虚拟管脚
Blockly.Blocks.QDP_blynk_bridge_VPin = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.blynk);
    this.appendDummyInput("").appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/blynk/widget_bridge.png", 30, 20)).appendField(Blockly.BLYNK_BRIDGE_VIRTUALPIN);
    this.appendDummyInput("").appendField(new Blockly.FieldDropdown(BLYNK_VIRTUALPIN_SELECT), "Vpin");
    this.appendValueInput("NUM").appendField(Blockly.MIXLY_VALUE2);  
    this.appendDummyInput("").appendField(Blockly.blynk_BRIDGE_NUM);
    this.appendDummyInput("").appendField(new Blockly.FieldDropdown(qdprobotESP8266_BT9), "num");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip();
    this.setHelpUrl();
  }
};

//物联网-RTC组件初始化
Blockly.Blocks.QDP_blynk_WidgetRTC_init = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.blynk);
    this.appendDummyInput("").appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/blynk/widget_rtc.png", 30, 20)).appendField(Blockly.blynk_WidgetRTC_init);
    this.appendValueInput("NUM", Number).appendField(Blockly.blynk_WidgetRTC_setSyncInterval).setCheck(Number); 
    this.appendDummyInput("").appendField(Blockly.blynk_WidgetRTC_mintues);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip();
    this.setHelpUrl();
  }
};



//传感器-实时时钟块_时间变量
var RTC_TIME_TYPE = [
[Blockly.MIXLY_YEAR, "year"],
[Blockly.MIXLY_MONTH, "month"],
[Blockly.MIXLY_DAY, "day"],
[Blockly.MIXLY_HOUR, "hour"],
[Blockly.MIXLY_MINUTE, "minute"],
[Blockly.MIXLY_SECOND, "second"],
[Blockly.MIXLY_WEEK, "weekday"]
];

//传感器-实时时钟块_获取时间
Blockly.Blocks.QDP_blynk_WidgetRTC_get_time = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.blynk);
    this.appendDummyInput("").appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/blynk/widget_rtc.png", 30, 20)).setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.blynk_WidgetRTC_get_time);

   // this.appendDummyInput("").setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldDropdown(RTC_TIME_TYPE), "TIME_TYPE");
    this.appendDummyInput("").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.adespblynk_WidgetRTC_get_time);
    this.appendDummyInput("").setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldDropdown(RTC_TIME_TYPE), "TIME_TYPE");
    this.setInputsInline(true);
    this.setOutput(true, Number);
  }
};



//播放音乐
Blockly.Blocks.QDP_blynk_iot_playmusic = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.blynk);
    this.appendDummyInput("").appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/blynk/widget_player.png", 30, 20)).appendField(Blockly.blynk_iot_playmusic);
    this.appendDummyInput("").appendField(new Blockly.FieldDropdown(BLYNK_VIRTUALPIN_SELECT), "Vpin");
    this.appendStatementInput('DO').appendField('');
    this.setInputsInline(true);
    this.setTooltip("");
  }
};

//光线传感器
Blockly.Blocks.QDP_blynk_light = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.blynk);
    this.appendDummyInput("").appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/blynk/widget_light_sensor.png", 30, 20)).appendField(Blockly.blynk_LIGHT);
    this.appendDummyInput("").appendField(new Blockly.FieldDropdown(BLYNK_VIRTUALPIN_SELECT), "Vpin");
    this.appendStatementInput('DO').appendField('');
    this.setInputsInline(true);
    this.setTooltip("");
  }
};

//重力传感器
Blockly.Blocks.QDP_blynk_gravity = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.blynk);
    this.appendDummyInput("").appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/blynk/widget_gravity_sensor.png", 30, 20)).appendField(Blockly.blynk_GRAVITY);
    this.appendDummyInput("").appendField(new Blockly.FieldDropdown(BLYNK_VIRTUALPIN_SELECT), "Vpin");
    this.appendStatementInput('DO').appendField('');
    this.setInputsInline(true);
    this.setTooltip("");
  }
};

//加速度传感器
Blockly.Blocks.QDP_blynk_acc = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.blynk);
    this.appendDummyInput("").appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/blynk/widget_accelerometer_sensor.png", 30, 20)).appendField(Blockly.blynk_ACC);
    this.appendDummyInput("").appendField(new Blockly.FieldDropdown(BLYNK_VIRTUALPIN_SELECT), "Vpin");
    this.appendStatementInput('DO').appendField('');
    this.setInputsInline(true);
    this.setTooltip(Blockly.blynk_ACC_tooltip);
  }
};

//物联网-服务器信息
Blockly.Blocks.QDP_blynk_usb_server = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.blynk);
    this.appendDummyInput("").appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/blynk/iot.png", 30, 20)).appendField(Blockly.blynk_USB_SERVER_INFO);
    this.appendValueInput("auth_key", String).appendField(Blockly.blynk_IOT_AUTH).setCheck([String, Number]);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip();
    this.setHelpUrl();
  }
};

 
//注释1
Blockly.Blocks.QDP_make_arduino_comment_text_1= {
  init: function() { 
  this.appendDummyInput()  
      .appendField("//")
      .appendField(new Blockly.FieldTextInput("info"), "data");
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour("#808080");
  this.setTooltip("");
  this.setHelpUrl("注释用无特殊意义");
  }
};

 //注释2  
Blockly.Blocks.QDP_make_arduino_comment_text_3= {
  init: function() { 
  this.appendDummyInput()  
      .appendField("/*")
      .appendField(new Blockly.FieldTextInput("info"), "data")
      .appendField("*/");
  this.appendStatementInput("input")
      .setCheck(null);
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour("#808080");
  this.setTooltip("");
  this.setHelpUrl("注释用无特殊意义");
  }
};



//系统运行时间
Blockly.Blocks.qdp_millis = {
  init: function() {
    this.setColour(Blockly.Blocks.serial.HUE);
    this.appendDummyInput()
    .appendField(Blockly.MIXLY_QDP_sysTime)
    .appendField(new Blockly.FieldDropdown(QDP_TIME_Dropdown), 'TYPE');
    this.setOutput(true);
    this.setTooltip(Blockly.MIXLY_QDP_sysTime);//增加块的鼠标注释内容 
  }
};

//全局变量
Blockly.Blocks.qdp_global_variables = {
  // Variable setter.
  init: function() {
    this.setColour(Blockly.Blocks.serial.HUE);
    this.appendValueInput('VALUE',null)
        .appendField(Blockly.MIXLY_QDP_DECLARE)
        .appendField(Blockly.MIXLY_QDP_GLOBAL_VARIABLES)  
        .appendField(new Blockly.FieldTextInput('item'), 'VAR')
        .appendField(Blockly.MIXLY_AS)
       .appendField(new Blockly.FieldDropdown(qdprobotESP8266_VARIABLES_DROP), 'TYPE')
      .appendField(Blockly.MIXLY_VALUE);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_VARIABLES_DECLARE);
  },
  getVars: function() {
    return [this.getFieldValue('VAR')];
  },
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
      this.setTitleValue(newName, 'VAR');
    }
  }

};


//局部变量
Blockly.Blocks.qdp_local_variables = {
  // Variable setter.
  init: function() {
    this.setColour(Blockly.Blocks.serial.HUE);
    this.appendValueInput('VALUE',null)
        .appendField(Blockly.MIXLY_QDP_DECLARE)
        .appendField(Blockly.MIXLY_QDP_LOCAL_VARIABLES)  
        .appendField(new Blockly.FieldTextInput('item'), 'VAR')
        .appendField(Blockly.MIXLY_AS)
       .appendField(new Blockly.FieldDropdown(qdprobotESP8266_VARIABLES_DROP), 'TYPE')
      .appendField(Blockly.MIXLY_VALUE);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_VARIABLES_DECLARE);
  },
  getVars: function() {
    return [this.getFieldValue('VAR')];
  },
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
      this.setTitleValue(newName, 'VAR');
    }
  }

};

//自增自减
Blockly.Blocks.qdp_Auto_increment = {
  init: function() {
    this.setColour(Blockly.Blocks.serial.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.LANG_QDP_MATH_INT+' '+Blockly.blynk_IOT_VAR_NAME);
    this.appendValueInput('NAME');
    this.appendDummyInput("")
     .appendField(' ')
     .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_QDP_auto_increasing,'++'],[Blockly.MIXLY_QDP_auto_decreasing,'--']]), "TYPE");
   

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};
//串口打印不带波特率
 Blockly.Blocks.QDP_serial_println= {
   init: function() {
    this.setColour(Blockly.Blocks.serial.HUE);
    this.appendValueInput("CONTENT", String)
        .appendField(Blockly.MIXLY_SERIAL_PRINTLN);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TEXT_PRINT_TOOLTIP);
  }
};



//blynk同步虚拟管脚状态
Blockly.Blocks.QDP_blynk_iot_syncVirtual = {
  init: function () {
    this.setColour(Blockly.Blocks.qdprobotESP8266.blynk);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/blynk/iot.png", 20, 20))
    .appendField(Blockly.blynk_IOT_syncVirtual);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldDropdown(BLYNK_VIRTUALPIN_SELECT), "Vpin");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip(" ");
    this.setHelpUrl();
  }
};

//blynk同步所有管脚状态
Blockly.Blocks.QDP_Blynk_iot_BLYNK_syncAll = {
  init: function () {
    this.setColour(Blockly.Blocks.qdprobotESP8266.blynk);
    this.appendDummyInput("")
    .appendField(Blockly.BLYNK_syncAll);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip("开机同步，其它时间尽量少用，可能引发掉线！");
  }
};

var qdprobotESP8266_ESP8266_CHANNEL=[["0", "0"],["1", "1"],["2", "2"],["3", "3"],["4", "4"],["5", "5"],["6", "6"],["7", "7"],["8", "8"],["9", "9"],["10", "10"],["11", "11"],["12", "12"],["13", "13"],["14", "14"],["15", "15"]];

var qdprobotESP8266_qdp_ESP8266_display_Dropdown = [[Blockly.qdp_ESP8266_display_no,'1'],[Blockly.qdp_ESP8266_display_no2,'0']];
//按钮
Blockly.Blocks.qdp_ESP8266_buttonl = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.sensor);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/sensor/qdp_button.png", 30, 20))
        .appendField(Blockly.MIXLY_QDP_BUTTON1)
        
        .appendField(Blockly.MIXLY_QDP_PIN)
        .appendField(new Blockly.FieldDropdown(QDP_Esp8266_Single_Button_Pin_Dropdown), "PIN");
       this.setOutput(true, Boolean);
       this.setTooltip("按钮输入");//增加块的鼠标注释内容
  }
  };

  //左右按钮
Blockly.Blocks.qdp_ESP8266_buttonx = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.sensor);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/sensor/qdp_button2.png", 30, 20))
      .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/sensor/qdp_button.png", 30, 20))
        .appendField(Blockly.MIXLY_QDP_BUTTONX)
       .appendField(Blockly.MIXLY_QDP_PIN)
        .appendField(new Blockly.FieldDropdown(QDP_Esp8266_Both_Button_Pin_Dropdown), "pin2");
    this.setOutput(true, Boolean);
    this.setTooltip(Blockly.MIXLY_QDP_buttonxMARK);//增加块的鼠标注释内容
    }
  };


  //启用多功能按钮
Blockly.Blocks.qdp_ESP8266_buttonfuction1 = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.buttoncolour);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/sensor/qdp_buttonfuction.png", 30, 20))
      .appendField(Blockly.MIXLY_QDP_BUTTONFUCTION1)
     .appendField(Blockly.MIXLY_QDP_PIN)
    .appendField(new Blockly.FieldDropdown(QDP_Esp8266_Single_Button_Pin_Dropdown), "PIN")
    this.setPreviousStatement(true);
     this.setNextStatement(true);
      this.setInputsInline(true);
      this.setTooltip(Blockly.MIXLY_QDP_buttonfuction1MARK);//增加块的鼠标注释内容
   }
 };


 //多功能按钮

 Blockly.Blocks.qdp_ESP8266_button1 = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.buttoncolour);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/sensor/qdp_buttonf.png", 30, 20))
    .appendField(Blockly.MIXLY_QDP_BUTTON11)
      .appendField(Blockly.MIXLY_QDP_PIN)
      .appendField(new Blockly.FieldDropdown(QDP_Esp8266_Single_Button_Pin_Dropdown), "PIN")
      .appendField(Blockly.MIXLY_QDP_BUTTONtriggermode)
      .appendField(new Blockly.FieldDropdown(qdprobotESP8266_BUTTONCLICK), "PIN2");
       this.setOutput(true, Boolean);
        this.setTooltip(Blockly.MIXLY_QDP_button1MARK);//增加块的鼠标注释内容
  }
};


//超声波
Blockly.Blocks.qdp_ESP8266_chaoshengbo = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.sensor);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/sensor/qdp_ultrasonic.png", 30, 20))
        .appendField(Blockly.MIXLY_QDP_CHAOSHENGBO)
        .appendField(Blockly.MIXLY_QDP_PIN)
        .appendField(new Blockly.FieldDropdown(QDP_Esp8266_Double_Digit_Pin_Dropdown), "PIN");
      this.setOutput(true, Number);
      this.setTooltip(Blockly.MIXLY_QDP_chaoshengboMARK);//增加块的鼠标注释内容
  }
  };


//巡线
  Blockly.Blocks.qdp_ESP8266_grayscale = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.sensor);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/sensor/qdp_light_grayscale.png", 30, 20))
    .appendField(Blockly.QDP_LINE_FOLLOWER)
      .appendField(Blockly.MIXLY_QDP_PIN)
      .appendField(new Blockly.FieldDropdown(QDP_Esp8266_Double_Digit_Pin_Dropdown), "PIN")
      .appendField(Blockly.MIXLY_QDP_Left)
      .appendField(new Blockly.FieldDropdown(qdprobotESP8266_BUTTON2), "PIN2")
      .appendField(Blockly.MIXLY_QDP_Right)
      .appendField(new Blockly.FieldDropdown(qdprobotESP8266_BUTTON2), "PIN3")
    this.setOutput(true, Boolean);
    this.setTooltip(Blockly.MIXLY_QDP_grayscaleMARK);//增加块的鼠标注释内容
    }
  };

  //光线
Blockly.Blocks.qdp_ESP8266_lightSensor = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.sensor);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/sensor/qdp_lightSensor.png", 30, 20))
        .appendField(Blockly.MIXLY_QDP_LIGHTSENSOR)
        .appendField(Blockly.MIXLY_QDP_PIN)
        .appendField(new Blockly.FieldDropdown([['.P2-L-A0','P2L']]), "PIN");
    this.setOutput(true, Number);
    this.setTooltip(Blockly.MIXLY_QDP_lightSensorMARK);//增加块的鼠标注释内容
  }
  };


  //声音
Blockly.Blocks.qdp_ESP8266_sound = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.sensor);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/sensor/qdp_sound.png", 30, 20))
        .appendField(Blockly.MIXLY_SOUND)
        .appendField(Blockly.MIXLY_QDP_PIN)
        .appendField(new Blockly.FieldDropdown([['P2-L-A0','P2L']]), "PIN");
    this.setOutput(true, Number);
    this.setTooltip(Blockly.MIXLY_QDP_soundMARK);//增加块的鼠标注释内容
  }
  };


  //电位器
Blockly.Blocks.qdp_ESP8266_potentiometer = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.sensor);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/sensor/qdp_potentiometer.png", 30, 20))
        .appendField(Blockly.MIXLY_POTENTIOMETER)
        .appendField(Blockly.MIXLY_QDP_PIN)
        .appendField(new Blockly.FieldDropdown([['P2-L-A0','P2L']]), "PIN");
    this.setOutput(true, Number);
    this.setTooltip(Blockly.MIXLY_QDP_potentiometerMARK);//增加块的鼠标注释内容
  }
  };

//土壤
Blockly.Blocks.qdp_ESP8266_Soilmoisture = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.sensor);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/sensor/qdp_Soilmoisture.png", 30, 20))
        .appendField(Blockly.MIXLY_QDP_SOIL)
        .appendField(Blockly.MIXLY_QDP_PIN)
        .appendField(new Blockly.FieldDropdown([['.P2-L-A0','P2L']]), "PIN");
    this.setOutput(true, Number);
    this.setTooltip(Blockly.MIXLY_QDP_SoilmoistureMARK);//增加块的鼠标注释内容
  }
  };


  //温湿度
Blockly.Blocks.qdp_ESP8266_dht11 = {
    init: function () {
        var WHAT = [[Blockly.qdp_MIXLY_DHT11_T, '0'], [Blockly.qdp_MIXLY_DHT11_H, '1']];
        this.setColour(Blockly.Blocks.qdprobotESP8266.sensor);//颜色
        this.appendDummyInput("")
        .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/sensor/qdp_dh11.png", 30, 20))
             .appendField(Blockly.MIXLY_QDP_wenshendu)
             
            .appendField(Blockly.MIXLY_QDP_PIN)
            // .setCheck(Number);
            .appendField(new Blockly.FieldDropdown(QDP_ESP8266_Left_Digit_Pin_Dropdown), "PIN");
        this.setOutput(true, Number);

        this.appendDummyInput("")
            .appendField(" ")
            .appendField(new Blockly.FieldDropdown(WHAT), "WHAT");
        this.setOutput(true, Number);
        this.setInputsInline(true);
       this.setTooltip(Blockly.MIXLY_QDP_Sdht11MARK);//增加块的鼠标注释内容
    }
  };


Blockly.Blocks.qdp_ESP8266_yscgq = {
  init: function() {
    this.setColour(88);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/sensor/qdp_yscgq.png", 30, 20))
    .appendField(Blockly.MIXLY_QDP_yscgq1)
    
     .appendField(Blockly.MIXLY_QDP_yscgq2)
    .appendField(new Blockly.FieldDropdown(qdprobotESP8266_yscgq1), "PIN1")
    .appendField(Blockly.MIXLY_QDP_yscgq3)
    .appendField(new Blockly.FieldDropdown(qdprobotESP8266_yscgq2), "PIN2")
    
    .appendField(Blockly.MIXLY_QDP_yscgq5)
    .appendField(new Blockly.FieldDropdown(qdprobotESP8266_yscgq3), "PIN3")
    .appendField(Blockly.MIXLY_QDP_yscgq4)
     this.appendValueInput('num1',Number)
    .setCheck(Number)

    this.setPreviousStatement(true);
    this.setNextStatement(true);
      this.setInputsInline(true);
      this.setTooltip(Blockly.MIXLY_QDP_yscgqMARK1);//增加块的鼠标注释内容 
  }
};






//LED灯

Blockly.Blocks.qdp_ESP8266_ledlight = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.contor);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/actuator/qdp_ledlight.png", 30, 20))
    .appendField(Blockly.MIXLY_QDP_LEDLIGHT)
    .appendField(Blockly.MIXLY_QDP_PIN)
    .appendField(new Blockly.FieldDropdown(QDP_Esp8266_Single_Output_Pin_Dropdown), "PIN");
       
    this.appendValueInput("STAT")
    .appendField(Blockly.MIXLY_STAT)
    .setCheck([Number,Boolean]);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.MIXLY_QDP_ledlightMARK);//增加块的鼠标注释内容
  }
};

//读取LED灯状态

Blockly.Blocks.qdp_ESP8266_read_ledlight = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.contor);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_QDP_LEDLIGHT)
    .appendField(Blockly.MIXLY_QDP_PIN)
    .appendField(new Blockly.FieldDropdown(QDP_Esp8266_Single_Output_Pin_Dropdown), "PIN");

    this.setOutput(true, Boolean);
    this.setInputsInline(true);
    this.setTooltip(Blockly.MIXLY_QDP_ledlightMARK);//增加块的鼠标注释内容
  }
};

//LED灯可调 亮度
Blockly.Blocks.qdp_ESP8266_ledlight3 = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.contor);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/actuator/qdp_ledlight.png", 30, 20))
        .appendField(Blockly.MIXLY_QDP_LEDLIGHT)
        
        .appendField(Blockly.MIXLY_QDP_PIN)
        
        .appendField(new Blockly.FieldDropdown(QDP_Esp8266_Single_Output_Pin_Dropdown), "PIN");
        
     this.appendValueInput('ledn')
          .setCheck(Number)
          .appendField(Blockly.blynk_IOT_WidgetLED_VALUE+'(0~1023)');
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.MIXLY_QDP_ledlight3MARK);//增加块的鼠标注释内容
  }
};


//继电器
Blockly.Blocks.qdp_ESP8266_relay = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.contor);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/actuator/qdp_relay.png", 30, 20))
    .appendField(Blockly.MIXLY_QDP_RELAY) 
    .appendField(Blockly.MIXLY_QDP_PIN)
    .appendField(new Blockly.FieldDropdown(QDP_Esp8266_Single_Output_Pin_Dropdown), "PIN");
       
    this.appendValueInput("STAT")
    .appendField(Blockly.MIXLY_STAT)
    .setCheck([Number,Boolean]);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.MIXLY_QDP_ledlightMARK);//增加块的鼠标注释内容
  }
};

//读取继电器状态
Blockly.Blocks.qdp_ESP8266_read_relay = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.contor);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_QDP_RELAY) 
    .appendField(Blockly.MIXLY_QDP_PIN)
    .appendField(new Blockly.FieldDropdown(QDP_Esp8266_Single_Output_Pin_Dropdown), "PIN");
    this.setOutput(true, Boolean);
    this.setInputsInline(true);
    this.setTooltip("");//增加块的鼠标注释内容
  }
};

//RGBLED1
Blockly.Blocks.rgb_ESP8266_led = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.contor);
     this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/actuator/qdp_rgb.png", 30, 20))
        .appendField("RGB LED")    
        .appendField(Blockly.MIXLY_QDP_PIN)    
        .appendField(new Blockly.FieldDropdown(QDP_Esp8266_Right_Digit_Pin_Dropdown), "PIN1")
        
        .appendField(Blockly.MIXLY_RGB_NUM8);


        
        this.appendValueInput("num8", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT);

        this.appendValueInput("num1", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.MIXLY_RGB_NUM+"0~4");

    this.appendValueInput("R", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("R");
    this.appendValueInput("G", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("G");
    this.appendValueInput("B", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("B");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip(Blockly.MIXLY_QDP_rgbledMARK);//增加块的鼠标注释内容
  }
};
//RGBLED2
Blockly.Blocks.ESP8266_rgbled2 = {
    init: function () {
        this.setColour(Blockly.Blocks.qdprobotESP8266.contor);
        this.appendDummyInput("")
        .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/actuator/qdp_rgb.png", 30, 20))
        .appendField("RGB LED")
        .appendField(Blockly.MIXLY_QDP_PIN)    
        .appendField(new Blockly.FieldDropdown(QDP_Esp8266_Right_Digit_Pin_Dropdown), "PIN1")
           .appendField(Blockly.MIXLY_RGB_NUM8);


        
        this.appendValueInput("num8", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT);

        this.appendValueInput("num1", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.MIXLY_RGB_NUM+"0~4");
           
            this.appendDummyInput("")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(new Blockly.FieldColour("#ff0000"), "RGB_LED_COLOR")
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.MIXLY_QDP_rgbled2MARK);//增加块的鼠标注释内容
    }
};


//蜂鸣器
Blockly.Blocks.qdp_ESP8266_buzzer3={
 init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.contor);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/actuator/qdp_buzzer.png", 30, 20))
        .appendField(Blockly.MIXLY_QDP_buzzer)
         .appendField(Blockly.MIXLY_QDP_PIN)
      .appendField(new Blockly.FieldDropdown(QDP_Esp8266_Buzzer_Pin_Dropdown), "PIN")
    
    .appendField(Blockly.MIXLY_FREQUENCY);
    
    this.appendValueInput('PIN2');
      this.appendValueInput('DURATION')
        .setCheck(Number)
        .appendField(Blockly.MIXLY_DURATION)
        .appendField(Blockly.MIXLY_DELAY_MS);

    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.MIXLY_QDP_buzzer3MARK);//增加块的鼠标注释内容

  }
};

//蜂鸣器停止发声
Blockly.Blocks.qdp_ESP8266_stop_buzzer3={
 init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.contor);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/actuator/qdp_buzzer.png", 30, 20))
        .appendField(Blockly.MIXLY_QDP_buzzer+Blockly.MIXLY_NOTONE)
      .appendField(new Blockly.FieldDropdown(QDP_Esp8266_Buzzer_Pin_Dropdown), "PIN")
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip("蜂鸣器停止发声");//增加块的鼠标注释内容

  }
};


//蜂鸣器音乐
Blockly.Blocks.qdp_ESP8266_buzzer_music={
 init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.contor);
    this.appendDummyInput("")
      .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/actuator/qdp_buzzer.png", 30, 20))
      .appendField(Blockly.MIXLY_QDP_buzzer)
      .appendField(Blockly.MIXLY_QDP_PIN)
      .appendField(new Blockly.FieldDropdown(QDP_Esp8266_Buzzer_Pin_Dropdown), "PIN")
      .appendField(Blockly.MIXLY_QDP_BUZZER_MUSIC+"(1~10)");
    this.appendValueInput("PIN2")
        .setCheck(null);
    this.appendDummyInput();
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip("对应播放系统内音乐，直到自动播完");//增加块的鼠标注释内容
  }
};

Blockly.Blocks['qdp_ESP8266_buzzer_musics'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(QDPTONE_TONE_MUSIC), "music");
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.qdprobotESP8266.contor);
 this.setTooltip("内置音乐");
 this.setHelpUrl("");
  }
};

//舵机360度
Blockly.Blocks.qdp_ESP8266_servomotor360 = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.contor);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/actuator/qdp_servomotor1.png", 30, 20))
    .appendField(Blockly.MIXLY_QDP_servomotor21+"0~360")
    .appendField(Blockly.MIXLY_QDP_PIN)
    .appendField(new Blockly.FieldDropdown(QDP_ESP8266_Left_Digit_Pin_Dropdown), "pin")
    .appendField(Blockly.MIXLY_QDP_servomotor36)
    .appendField(new Blockly.FieldDropdown(qdprobotESP8266_PWM360), "pin2");

    this.appendValueInput('num1')
    .setCheck(Number)
    .appendField(Blockly.MIXLY_QDP_servomotor37);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip(Blockly.MIXLY_QDP_servomotor24MARK);//增加块的鼠标注释内容
  }
};


//舵机
Blockly.Blocks.qdp_ESP8266_servomotor2 = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.contor);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/actuator/qdp_servomotor1.png", 30, 20))
      .appendField(Blockly.MIXLY_QDP_servomotor21)
    .appendField("180°")
    .appendField(Blockly.MIXLY_QDP_PIN)
    .appendField(new Blockly.FieldDropdown(QDP_ESP8266_Left_Digit_Pin_Dropdown), "pin");
  
    this.appendValueInput('num1')
    .setCheck(Number)
    .appendField(Blockly.MIXLY_QDP_servomotor23);

    this.appendValueInput('time')
    .appendField(Blockly.MIXLY_QDP_yscgq2);

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip("180度舵机");//增加块的鼠标注释内容
  }
};


//舵机角度
Blockly.Blocks.qdp_ESP8266_servomotorread = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.contor);
    this.appendDummyInput("")
     .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/actuator/qdp_servomotor2.png", 30, 20))
      .appendField(Blockly.MIXLY_QDP_servomotor22)
   
    .appendField(Blockly.MIXLY_QDP_PIN)
    .appendField(new Blockly.FieldDropdown(QDP_ESP8266_Left_Digit_Pin_Dropdown), "pin");
    this.setOutput(true, Number);
    this.setTooltip(Blockly.MIXLY_QDP_servomotorreadMARK);//增加块的鼠标注释内容 
  }
};


//物联网-服务器信息
Blockly.Blocks.QDP_ESP8266_blynk_server = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.blynk);
    this.appendDummyInput("").appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/blynk/iot.png", 30, 20)).appendField(Blockly.blynk_SERVER_INFO);
    this.appendValueInput("qdp_server_add").appendField(Blockly.blynk_SERVER_ADD).setCheck(String);
    this.appendValueInput("qdp_wifi_ssid").appendField(Blockly.blynk_WIFI_SSID).setCheck(String);
    this.appendValueInput("qdp_wifi_pass").appendField(Blockly.blynk_WIFI_PASS).setCheck(String);
    this.appendValueInput("qdp_auth_key", String).appendField(Blockly.blynk_IOT_AUTH).setCheck([String, Number]);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("wifi连接信息及blynk对应服务信息");
    this.setHelpUrl();
  }
};

//物联网-服务器信息带断网条件
Blockly.Blocks.QDP_ESP8266_blynk_server2 = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.display2);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/blynk/iot.png", 30, 20))
    .appendField(Blockly.blynk_SERVER_INFO+' '+Blockly.QDP_Blynk_offnet_sever);
    this.appendValueInput("qdp_server_add").appendField(Blockly.blynk_SERVER_ADD).setCheck(String);
    this.appendValueInput("qdp_wifi_ssid").appendField(Blockly.blynk_WIFI_SSID).setCheck(String);
    this.appendValueInput("qdp_wifi_pass").appendField(Blockly.blynk_WIFI_PASS).setCheck(String);
    this.appendValueInput("qdp_auth_key", String).appendField(Blockly.blynk_IOT_AUTH).setCheck([String, Number]);
    this.appendValueInput("qdp_wifi_Brokennetwork").appendField(Blockly.QDP_Blynk_offnet);
    this.appendValueInput("qdp_wifi_errCountSet").appendField(Blockly.QDP_Blynk_offnet_times1);
    this.appendValueInput("qdp_wifi_RstCount").appendField(Blockly.QDP_Blynk_offnet_RstCount);
    this.setPreviousStatement(true, null); 
    this.setNextStatement(true, null);
    this.setTooltip("1.参数\n"+
      '->[断开网络条件]:(bool)当条件满足时，Blynk将断开连接。否则如果未连接到Blynk将尝试连接.\n'+
      '->[连接次数限制]:(int)重连次数，当达到连接次数限制后将不再重连.(为0时为无限重连)\n'+
      '->[复位连接次数]:(bool)当条件满足复位连接次数，尝试重新连接Blynk.\n'+
      '2.注意事项\n'+
      '->WIFI连接超时为5S，Blynk连接超时为2S！');
    this.setHelpUrl();
  }
};

//物联网-服务器信息带达到连接次数后失效记录
Blockly.Blocks.QDP_ESP8266_blynk_server3 = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.display2);
    this.appendDummyInput("").appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/blynk/iot.png", 30, 20)).appendField(Blockly.blynk_SERVER_INFO+' '+Blockly.QDP_Blynk_offnet_times1);
    this.appendValueInput("qdp_server_add").appendField(Blockly.blynk_SERVER_ADD).setCheck(String);
    this.appendValueInput("qdp_wifi_ssid").appendField(Blockly.blynk_WIFI_SSID).setCheck(String);
    this.appendValueInput("qdp_wifi_pass").appendField(Blockly.blynk_WIFI_PASS).setCheck(String);
    this.appendValueInput("qdp_auth_key", String).appendField(Blockly.blynk_IOT_AUTH).setCheck([String, Number]);
    this.appendValueInput("qdp_wifi_Brokennetwork_times").appendField(Blockly.QDP_Blynk_offnet_times1);

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("wifi连接信息及blynk对应服务信息\n启动后在设定连接次数内无法连接网络将关闭blynk网络下所有功能，其它功能不影响！");
    this.setHelpUrl();
  }
};

//物联网-一键配网
Blockly.Blocks.QDP_ESP8266_blynk_smartconfig = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.blynk);
    this.appendDummyInput("").appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/blynk/smartconfig.png", 30, 20)).appendField(Blockly.blynk_smartconfig);
    this.appendValueInput("server_add").appendField(Blockly.blynk_SERVER_ADD).setCheck(String);
    this.appendValueInput("auth_key", String).appendField(Blockly.blynk_IOT_AUTH).setCheck([String, Number]);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip();
    this.setHelpUrl("");
  }
};


//掌控初始化
Blockly.Blocks.qdp_ESP8266_ZKDisplay_init = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.display);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/ZKdisplay/qdp_BT3.png", 30, 20))
    .appendField(Blockly.MIXLY_QDP_ZKdisplay_NAME+' '+MSG['catEthernet_init'])
    .appendField(Blockly.MIXLY_QDP_PIN)
    .appendField(new Blockly.FieldDropdown(QDP_Esp8266_Serial_Port_Pin_Dropdown), "PIN");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip("定义掌控屏端口（蓝牙模块）");//增加块的鼠标注释内容 
  }
};


//接收掌控屏数据
Blockly.Blocks.qdp_ESP8266_display_START = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.display);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/ZKdisplay/qdp_BT3.png", 30, 20))
    .appendField(Blockly.MIXLY_QDP_ZK3.replace('P5',''))
     this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
      this.setTooltip("屏上的滑动变量对应值,在“屏按键”和“屏滑动变量”前使用");//增加块的鼠标注释内容 
  }
};

//掌控屏按键
Blockly.Blocks.qdp_ESP8266_display_button = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.display);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/ZKdisplay/qdp_BT1.png", 30, 20))
    .appendField(Blockly.MIXLY_QDP_ZK1.replace('P5',''))
      this.appendValueInput("TEXT", String)
    .setCheck([String,Number])
     this.setOutput(true, Number);
     this.setInputsInline(true);
      this.setTooltip("接收到屏上对应输入的按键设定字符值（屏发送格式为“,发送的字符.”）,\n在“启用屏接收数据”后有效");//增加块的鼠标注释内容 
  }
};


//读掌控屏变量
Blockly.Blocks.qdp_ESP8266_display_variable = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.display);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/ZKdisplay/qdp_BT2.png", 30, 20))
    .appendField(Blockly.MIXLY_QDP_ZK2.replace('P5',''))
    .appendField(new Blockly.FieldDropdown(qdprobotESP8266_BT9), "pin");
     this.setOutput(true, Number);
     this.setInputsInline(true);
      this.setTooltip("屏上的滑动变量对应值,在“启用屏接收数据”后有效");//增加块的鼠标注释内容 
  }
};


//发送变量到掌控屏

    Blockly.Blocks.qdp_ESP8266_display_print = {
 init: function() {
  this.setColour(Blockly.Blocks.qdprobotESP8266.display);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/ZKdisplay/qdp_BT4.png", 30, 20))
        .appendField(Blockly.MIXLY_QDP_ZK4.replace('P5',''))
             
    .appendField(new Blockly.FieldDropdown(qdprobotESP8266_BT99), "pin");
  this.appendValueInput("N1") 
    .setAlign(Blockly.ALIGN_RIGHT)
          
     this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip("屏上V1~V5显示变量对应值,可以为传感器值或字符串，注：重复发送要加延时间隔约300毫秒!");
    
  }
};
//睡眠控制
Blockly.Blocks.qdp_ESP8266_zkpdisplay_sleep = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.display);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/ZKdisplay/sleep.png", 30, 20))
        .appendField(Blockly.MIXLY_QDP_displaysleep)
        .appendField(Blockly.MIXLY_QDP_PIN)
        .appendField(new Blockly.FieldDropdown(qdprobotESP8266_display), "pin2");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip(Blockly.MIXLY_QDP_zkpdisplay_sleep);//增加块的鼠标注释内容 
  }
};



//屏蜂鸣器
Blockly.Blocks.qdp_ESP8266_zkpdisplay_buzzer={
 init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.display);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/actuator/qdp_buzzer.png", 30, 20))
        .appendField(Blockly.MIXLY_QDP_displaybuzzer)
        .appendField(Blockly.MIXLY_QDP_PIN)
        .appendField(Blockly.MIXLY_FREQUENCY)
        .appendField(new Blockly.FieldDropdown(QDPTONE_NOTES), "pin2")
    this.appendValueInput('num1',Number)
        .appendField(Blockly.MIXLY_QDP_displaybuzzersound);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.MIXLY_QDP_zkpdisplay_buzzer);//增加块的鼠标注释内容
    }
  };


///颜色
Blockly.Blocks.qdp_ESP8266_zkpdisplay_color = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.display);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/ZKdisplay/colour.png", 30, 20))
        .appendField(Blockly.MIXLY_QDP_displaycolor)
        .appendField(new Blockly.FieldDropdown(qdprobotESP8266_displaycolor), "pin1");
    this.setOutput(true, Number);
    this.setTooltip(Blockly.MIXLY_QDP_zkpdisplay_color);//增加块的鼠标注释内容
  }
  };

//颜色刷屏
Blockly.Blocks.qdp_ESP8266_zkpdisplay_clscolor = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.display);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/ZKdisplay/colour99.png", 30, 20))
        .appendField(Blockly.MIXLY_QDP_clscolor)
        .appendField(Blockly.MIXLY_QDP_PIN)
        this.appendValueInput('num1',Number)
    .appendField(Blockly.MIXLY_QDP_displaycolor);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
      this.setInputsInline(true);
      this.setTooltip(Blockly.MIXLY_QDP_zkpdisplay_clscolor);//增加块的鼠标注释内容 
  }
  };

  //表情刷屏
Blockly.Blocks.qdp_ESP8266_zkpdisplay_pic = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.display);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/ZKdisplay/face.png", 30, 20))
        .appendField(Blockly.MIXLY_QDP_displaypic)
        .appendField(Blockly.MIXLY_QDP_PIN)
        .appendField(new Blockly.FieldDropdown(qdprobotESP8266_displaypic), "pin2")
    this.setPreviousStatement(true);
    this.setNextStatement(true);
      this.setInputsInline(true);
      this.setTooltip(Blockly.MIXLY_QDP_zkpdisplay_pic);//增加块的鼠标注释内容 
  }
  };

//页面跳转
Blockly.Blocks.qdp_ESP8266_zkpdisplay_page = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.display);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/ZKdisplay/page.png", 30, 20))
      .appendField(Blockly.MIXLY_QDP_displaypage)
       .appendField(Blockly.MIXLY_QDP_PIN)
  .appendField(new Blockly.FieldDropdown(qdprobotESP8266_displaypage), "pin2")
    this.setPreviousStatement(true);
    this.setNextStatement(true);
      this.setInputsInline(true);
      this.setTooltip(Blockly.MIXLY_qdp_zkpdisplay_page);//增加块的鼠标注释内容 
  }
};

//画圆
Blockly.Blocks.qdp_ESP8266_zkpdisplay_drawinground = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.display);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/ZKdisplay/round.png", 30, 20))
      .appendField(Blockly.MIXLY_QDP_displaydrawinground)
      .appendField(Blockly.MIXLY_QDP_displayroundtype)
      .appendField(new Blockly.FieldDropdown(qdprobotESP8266_displayroundtype), "pin2")
     this.appendValueInput('num1',Number)
    .appendField("X");
    this.appendValueInput('num2',Number)
    .appendField("Y");
    this.appendValueInput('num3',Number)
    .appendField(Blockly.MIXLY_QDP_displayroundR)
    this.appendValueInput('num4',Number)
    .appendField(Blockly.MIXLY_QDP_displayroundcolor);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
      this.setInputsInline(true);
      this.setTooltip(Blockly.MIXLY_QDP_zkpdisplay_drawinground);//增加块的鼠标注释内容 
  }
};

//画线矩形区域填充
Blockly.Blocks.qdp_ESP8266_zkpdisplay_function1 = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.display);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/ZKdisplay/drawing.png", 30, 20))
      .appendField(Blockly.MIXLY_QDP_displayfunction1)
      .appendField(Blockly.MIXLY_QDP_displayroundtype)
      .appendField(new Blockly.FieldDropdown(qdprobotESP8266_displayfunction1), "pin2")
     this.appendValueInput('num1',Number)
    .appendField("X");
    this.appendValueInput('num2',Number)
    .appendField("Y");
    this.appendValueInput('num3',Number)
    .appendField("X2W");
    this.appendValueInput('num4',Number)
    .appendField("Y2H");
    this.appendValueInput('num5',Number)
    .appendField(Blockly.MIXLY_QDP_displayroundcolor);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
      this.setInputsInline(true);
      this.setTooltip(Blockly.MIXLY_QDP_zkpdisplay_function1);//增加块的鼠标注释内容 
  }
};
//文字信息
var qdprobotESP8266_qdp_zkpTEXT=[[(Blockly.MIXLY_QDP_displaybackcolor3), "3"],[(Blockly.MIXLY_QDP_displaybackcolor0), "0"],[(Blockly.MIXLY_QDP_displaybackcolor1), "1"],[(Blockly.MIXLY_QDP_displaybackcolor2), "2"]];

Blockly.Blocks.qdp_ESP8266_zkpdisplay_TEXT = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.display);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/ZKdisplay/TEXT99.png", 30, 20))
      .appendField(Blockly.MIXLY_QDP_displayTEXT)
      .appendField(Blockly.MIXLY_QDP_displaybackcolor4)
    .appendField(new Blockly.FieldDropdown(qdprobotESP8266_qdp_zkpTEXT),"pinn")

     this.appendValueInput('num1',Number)
    .appendField("X");
    this.appendValueInput('num2',Number)
    .appendField("Y");
    this.appendValueInput('num3',Number)
    .appendField("W");
    this.appendValueInput('num4',Number)
    .appendField("H");
    this.appendValueInput('num5',Number)
    .appendField(Blockly.MIXLY_QDP_displayTEXTcolor);
    this.appendValueInput('num6',Number)
    .appendField(Blockly.MIXLY_QDP_displaybackcolor);
    this.appendValueInput('text3','String')
    
    .appendField(Blockly.MIXLY_QDP_displaystring);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
      this.setInputsInline(true);
      this.setTooltip(Blockly.MIXLY_QDP_zkpdisplay_TEXT);//增加块的鼠标注释内容 
  }
};

Blockly.Blocks.qdp_ESP8266_zkpdisplay_TEXT_CN = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.display);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/ZKdisplay/TEXT99.png", 30, 20))
      .appendField(Blockly.MIXLY_QDP_displayTEXT)
       .appendField(Blockly.MIXLY_QDP_PIN)
      .appendField(Blockly.MIXLY_QDP_displaybackcolor4)
    .appendField(new Blockly.FieldDropdown(qdprobotESP8266_qdp_zkpTEXT),"pinn")

     this.appendValueInput('num1',Number)
    .appendField("X");
    this.appendValueInput('num2',Number)
    .appendField("Y");
    this.appendValueInput('num3',Number)
    .appendField("W");
    this.appendValueInput('num4',Number)
    .appendField("H");
    this.appendValueInput('num5',Number)
    .appendField(Blockly.MIXLY_QDP_displayTEXTcolor);
    this.appendValueInput('num6',Number)
    .appendField(Blockly.MIXLY_QDP_displaybackcolor);
    this.appendValueInput('text3','String')
    
    .appendField(Blockly.MIXLY_QDP_displaystring);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
      this.setInputsInline(true);
      this.setTooltip(Blockly.MIXLY_QDP_zkpdisplay_TEXT);//增加块的鼠标注释内容 
  }
};

//自定义指令
Blockly.Blocks.qdp_ESP8266_zkpdisplay_order={
 init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.display);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/ZKdisplay/command.png", 30, 20))
        .appendField(Blockly.MIXLY_QDP_displayorder)
         .appendField(Blockly.MIXLY_QDP_PIN)
    this.appendValueInput('text',String);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.qdp_zkpdisplay_order);//增加块的鼠标注释内容
    }
  };



//ESP8266红外遥控器接收
Blockly.Blocks.qdp_ESP8266_ir_re2 = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.HUE);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/communicate/qdp_ir_ykq.png", 30, 20))
    .appendField(Blockly.MIXLY_QDP_YKQ)
    .appendField(Blockly.MIXLY_QDP_PIN)
    .appendField(new Blockly.FieldDropdown([['.P1-L-4','P1L'],['P1-R-5','P1R']]), "PIN1")
    .appendField(Blockly.MIXLY_QDP_YKQ)
    .appendField(new Blockly.FieldDropdown(qdprobotESP8266_IR), "PIN")
    .appendField(new Blockly.FieldDropdown(QDP_irpress), "TYPE");
    this.setOutput(true, Number);
    this.setTooltip(Blockly.MIXLY_QDP_irre2MARK8266);//增加块的鼠标注释内容
  }
};

//红外发射模块（NEC）
Blockly.Blocks.qdp_ESP8266_ir_send_nec={
  init:function(){
    var TYPE = [['RC5', 'RC5'],['NEC', 'NEC'],['Whynter', 'Whynter'],['Sony', 'Sony'],['RC6', 'RC6'],['DISH', 'DISH'],['SharpRaw', 'SharpRaw'],['SAMSUNG', 'SAMSUNG']];
    this.setColour(Blockly.Blocks.qdprobotESP8266.HUE);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/communicate/qdp_ir_send.png", 30, 20))
    .appendField(Blockly.MIXLY_QDP_infraredemission)
    .appendField(new Blockly.FieldDropdown(TYPE), 'TYPE')
    .appendField(Blockly.MIXLY_QDP_PIN)
    .appendField(new Blockly.FieldDropdown([['.P1-R-5','P1R'],['P1-L-4','P1L']]), "PIN");
    this.appendValueInput('data')
      .setCheck(Number)
      .appendField(' '+Blockly.MIXLY_DATA);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip(Blockly.MIXLY_QDP_irre2MARK8266);
  }
};

//红外解码(raw)
Blockly.Blocks.qdp_ESP8266_ir_recv_raw = {
    init: function () {
        this.setColour(Blockly.Blocks.communicate.HUE);
        this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/communicate/qdp_ir_ykq.png", 30, 20))
        
        .appendField(Blockly.MIXLY_QDP_infraredreceiver2)
        .appendField(Blockly.MIXLY_QDP_PIN)
        .appendField(new Blockly.FieldDropdown([['.P1-L-4','P1L'],['P1-R-5','P1R']]), "PIN1")
        
        
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
        this.setTooltip("红外解码对应遥控键值,并打印在串口（115200），请复制保存数组和长度值，用在发射数组中！");
    }
};

var QDPir_send_raw=[["#1", "1"],["#2", "2"],["#3", "3"],["#4", "4"],["#5", "5"],["#6", "6"],["#7", "7"],["#8", "8"],["#9", "9"],["#10", "10"],["#11", "11"],["#12", "12"],["#13", "13"],["#14", "14"],["#15", "15"],["#16", "16"]];

//红外发射数组

Blockly.Blocks.qdp_ESP8266_ir_send_raw={
    init: function () {
        this.setColour(Blockly.Blocks.communicate.HUE);
        this.appendDummyInput("")
         .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/communicate/qdp_ir_send.png", 30, 20))
         .appendField(Blockly.MIXLY_QDP_infraredemission)
        .appendField(Blockly.MIXLY_QDP_PIN)
       
          .appendField(new Blockly.FieldDropdown([['.P1-R-5','P1R'],['P1-L-4','P1L']]), "PIN")
      .appendField(new Blockly.FieldDropdown(QDPir_send_raw), "PIN2")
        .appendField(new Blockly.FieldTextInput('0,0,0'), 'TEXT');
        this.appendValueInput('length')
        .setCheck(Number)
        .appendField(' ' + Blockly.MIXLY_LIST_LENGTH);
        this.appendValueInput('freq')
        .setCheck(Number)
        .appendField(' ' + Blockly.MIXLY_FREQUENCY);
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip("将读取到的红外数组放入这里发送，一个主板只能用一个发送模块，注意数组长度要对应长度，不同数组时要改变编号！");
    }
};

//数码管显示
Blockly.Blocks.qdp_ESP8266_display = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.contor);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/NumericDisplay/qdp_display.png", 30, 20))
      .appendField(Blockly.MIXLY_QDP_DISPLAY)
    
    .appendField(Blockly.MIXLY_QDP_PIN)
      .appendField(new Blockly.FieldDropdown(QDP_Esp8266_Double_Digit_Pin_Dropdown), "PIN")
      .appendField(new Blockly.FieldDropdown(qdprobotESP8266_qdp_ESP8266_display_Dropdown), "PIN2");

  this.appendValueInput('VALUE')
    .appendField(Blockly.MIXLY_NUMBER);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  this.setInputsInline(true);
    this.setTooltip("数码管显示,选择对应的类型  注：多位小数变量时请选整数，否则不能正确显示！");//增加块的鼠标注释内容 
  }
};

//数码管清屏
Blockly.Blocks.qdp_ESP8266_display_clear = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.contor);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/NumericDisplay/qdp_display.png", 30, 20))
      .appendField(Blockly.qdp_ESP8266_display_clear)
    
    .appendField(Blockly.MIXLY_QDP_PIN)
      .appendField(new Blockly.FieldDropdown(QDP_Esp8266_Double_Digit_Pin_Dropdown), "PIN");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
  this.setInputsInline(true);
    this.setTooltip("清屏当前数码管");//增加块的鼠标注释内容 
  }
};

//关闭数码管

Blockly.Blocks.qdp_ESP8266_displayoff = {
  init: function() {
  this.setColour(Blockly.Blocks.qdprobotESP8266.contor);
    this.appendDummyInput("")
     .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/NumericDisplay/qdp_displayoff.png", 30, 20))
    .appendField(Blockly.MIXLY_QDP_Stopdisply)
   
    .appendField(Blockly.MIXLY_QDP_PIN)
      .appendField(new Blockly.FieldDropdown(QDP_Esp8266_Double_Digit_Pin_Dropdown), "pinn");

     this.setPreviousStatement(true);
    this.setNextStatement(true);
  this.setInputsInline(true);
      }
};


//蓝牙接收数据
Blockly.Blocks.qdp_ESP8266_BT_START = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.sensor);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/communicate/qdp_BT3.png", 30, 20))
    .appendField(Blockly.MIXLY_QDP_ESP8266_Start_BT+" ")
    .appendField(Blockly.MIXLY_PIN)
    .appendField(new Blockly.FieldDropdown(QDP_Esp8266_Serial_Port_Pin_Dropdown), "PIN");
    this.appendDummyInput("")
    .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_QDP_yscgq7, "false"], [Blockly.MIXLY_QDP_yscgq6, "true"]]), 'PRINT');
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
      this.setTooltip("");//增加块的鼠标注释内容 
  }
};

//蓝牙按键
Blockly.Blocks.qdp_ESP8266_BT_button = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.sensor);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/communicate/qdp_BT1.png", 30, 20))
    .appendField(Blockly.MIXLY_QDP_ESP8266_BT)
      this.appendValueInput("TEXT", String)
    .setCheck([String,Number])
     this.setOutput(true, Boolean);
     this.setInputsInline(true);
      this.setTooltip("接收到蓝牙模块在对应APP输入的按键设定字符值（APP发送格式为“,发送的字符.”）,\n在“启用蓝牙接收”后有效");//增加块的鼠标注释内容 
  }
};
//蓝牙变量
Blockly.Blocks.qdp_ESP8266_BT_variable = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.sensor);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/communicate/qdp_BT2.png", 30, 20))
    .appendField(Blockly.MIXLY_QDP_BT2_1)
    .appendField(new Blockly.FieldDropdown(qdprobotESP8266_BT9), "pin");
     this.setOutput(true, Number);
     this.setInputsInline(true);
      this.setTooltip("蓝牙APP上的滑动变量对应值,在“启用蓝牙接收”后有效");//增加块的鼠标注释内容 
  }
};

//蓝牙发送变量

    Blockly.Blocks['qdp_ESP8266_BT_print'] = {
 init: function() {
  this.setColour(Blockly.Blocks.qdprobotESP8266.sensor);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/communicate/qdp_BT4.png", 30, 20))
    .appendField(Blockly.MIXLY_QDP_BT4_1)
    .appendField(Blockly.MIXLY_PIN)
    .appendField(new Blockly.FieldDropdown(QDP_Esp8266_Double_Digit_Pin_Dropdown), "PIN");
        
    this.appendDummyInput()
        .appendField(Blockly.Msg.todisplay);      
    
  this.appendValueInput("N1") 
    .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.MIXLY_QDP_BT4_V1);   
         
  this.appendValueInput("N2")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.MIXLY_QDP_BT4_V2);   
      
  this.appendValueInput("N3")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.MIXLY_QDP_BT4_V3);   
      
  this.appendValueInput("N4")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.MIXLY_QDP_BT4_V4); 

  this.appendValueInput("N5")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.MIXLY_QDP_BT4_V5); 

    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setColour("#1B2944");
    this.setTooltip("V1~V5 显示变量对应值,可以为传感器值或字符串，注：重复发送要加延时间隔约30毫秒！");//增加块的鼠标注释内容
    
  }
};



//QF合成初始化
Blockly.Blocks.qdp_ESP8266_QF_hc_init = {
  init: function() {
    this.setColour(10);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/HC/qdp_hc.png", 30, 20))
    .appendField(Blockly.MIXLY_QDP_SFHC+' '+MSG['catEthernet_init'])
    .appendField(Blockly.MIXLY_QDP_PIN)
    .appendField(new Blockly.FieldDropdown(QDP_Esp8266_Serial_Port_Pin_Dropdown), "PIN");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
      this.setInputsInline(true);
      this.setTooltip("初始化语音合成/识别模块");//增加块的鼠标注释内容 
  }
};

//QF合成
Blockly.Blocks.qdp_ESP8266_QF_hc_en = {
  init: function() {
    this.setColour(10);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/HC/qdp_hc.png", 30, 20))
    .appendField(Blockly.MIXLY_QDP_SFHC)
 
    .appendField(Blockly.MIXLY_QDP_Pronunciationpeople)
    .appendField(new Blockly.FieldDropdown(qdprobotESP8266_T3), "PIN33")
    .appendField(Blockly.MIXLY_QDP_Interruptible)
     .appendField("?")
    .appendField(new Blockly.FieldDropdown(qdprobotESP8266_T6), "PIN44")

    this.appendValueInput('num',Number)
    .setCheck(Number)
    .appendField(Blockly.MIXLY_QDP_HCYL);

    this.appendValueInput('num2',Number)
    .setCheck(Number)
    .appendField(Blockly.MIXLY_QDP_YUSU);

    this.appendValueInput('num3',Number)
    .setCheck(Number)
    .appendField(Blockly.MIXLY_QDP_YUDIAO);

    this.appendValueInput("TEXT", String)
    .setCheck([String,Number])

    this.setPreviousStatement(true);
    this.setNextStatement(true);
      this.setInputsInline(true);
      this.setTooltip("只支持英文和变量");//增加块的鼠标注释内容 
  }
};

//QF合成
Blockly.Blocks.qdp_ESP8266_QF_hc = {
  init: function() {
    this.setColour(10);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/HC/qdp_hc.png", 30, 20))
    .appendField(Blockly.MIXLY_QDP_SFHC)
    
    .appendField(Blockly.MIXLY_QDP_Pronunciationpeople)
    .appendField(new Blockly.FieldDropdown(qdprobotESP8266_T3), "PIN33")
    .appendField(Blockly.MIXLY_QDP_Interruptible)
     .appendField("?")
    .appendField(new Blockly.FieldDropdown(qdprobotESP8266_T6), "PIN44")

    this.appendValueInput('num',Number)
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.MIXLY_QDP_HCYL);

    this.appendValueInput('num2',Number)
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.MIXLY_QDP_YUSU);

    this.appendValueInput('num3',Number)
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.MIXLY_QDP_YUDIAO);
    this.appendValueInput("TEXT", String)
    .setCheck([String,Number])
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.MIXLY_QDP_HCNR);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
      this.setInputsInline(true);
      this.setTooltip("不支持变量，可以直接输入中英文，拼音，标点可以使读音间断 等待完成 是指在合成发音完后才执行下一指令，否则是同时执行下一指令");//增加块的鼠标注释内容 
  }
};

//QF合成
Blockly.Blocks.qdp_ESP8266_QF_hc_chinese = {
  init: function() {
    this.setColour(10);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/HC/qdp_hc.png", 30, 20))
    .appendField(Blockly.MIXLY_QDP_SFHC)

    .appendField(Blockly.MIXLY_QDP_Pronunciationpeople)
    .appendField(new Blockly.FieldDropdown(qdprobotESP8266_T3), "PIN33")
    .appendField(Blockly.MIXLY_QDP_Interruptible)
     .appendField("?")
    .appendField(new Blockly.FieldDropdown(qdprobotESP8266_T6), "PIN44")

    this.appendValueInput('num',Number)
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.MIXLY_QDP_HCYL);

    this.appendValueInput('num2',Number)
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.MIXLY_QDP_YUSU);

    this.appendValueInput('num3',Number)
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.MIXLY_QDP_YUDIAO);

    this.appendValueInput("TEXT", String)
    .setCheck([String,Number])
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.MIXLY_QDP_HCNR);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
      this.setInputsInline(true);
      this.setTooltip("支持中文或中文变量字符串,英文或符号，运行占系统内存较大！");//增加块的鼠标注释内容 
  }
};

//QF提示音
Blockly.Blocks.qdp_ESP8266_QF_sound = {
  init: function() {
    this.setColour(10);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/HC/qdp_QFsoundQF.png", 30, 20))
    .appendField(Blockly.MIXLY_QDP_QFsound)

    .appendField(new Blockly.FieldDropdown(qdprobotESP8266_sound), "pin")
    .appendField(Blockly.MIXLY_QDP_QFsoundno);
    this.appendValueInput('num1',Number)
    .setCheck(Number)
    this.setPreviousStatement(true);
    this.setNextStatement(true);
      this.setInputsInline(true);
      this.setTooltip(Blockly.MIXLY_QDP_QFsoundMARK);//增加块的鼠标注释内容
  }
};

//QF停止合成
Blockly.Blocks.qdp_ESP8266_QF_stophc = {
  init: function() {
    this.setColour(10);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/HC/qdp_stophc.png", 30, 20))
    .appendField(Blockly.MIXLY_QDP_STOPHC)

    this.setPreviousStatement(true);
    this.setNextStatement(true);
      this.setInputsInline(true);
      this.setTooltip(Blockly.MIXLY_QDP_stophcMARK);//增加块的鼠标注释内容
  }
};


//QF识别
Blockly.Blocks.qdp_ESP8266_QF_startstopsb = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.hc);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/HC/qdp_sb.png", 30, 20))
    .appendField(Blockly.MIXLY_QDP_STARTSTOPSB)
    

    .appendField(Blockly.MIXLY_QDP_Sayresult)
    .appendField("?")
    .appendField(new Blockly.FieldDropdown(qdprobotESP8266_T51), "PIN33")
   
    this.setPreviousStatement(true);
    this.setNextStatement(true);
   this.setInputsInline(true);
   this.setTooltip(Blockly.MIXLY_QDP_startstopsbMARK);//增加块的鼠标注释内容
     }
};


//QF识别结果
Blockly.Blocks.qdp_ESP8266_QF_sbjg = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.hc);
    this.appendDummyInput(Blockly.MIXLY_QDP_sbsm)
    .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/HC/qdp_sbjg.png", 30, 20))
    .appendField(Blockly.MIXLY_QDP_sbjg)
    .appendField(Blockly.MIXLY_QDP_Ifrecognized)
    this.appendValueInput("TEXT", String)
    .setCheck([String,Number])
    .setAlign(Blockly.ALIGN_RIGHT);
    this.setOutput(true);
    this.setInputsInline(true);
    this.setTooltip(Blockly.MIXLY_QDP_sbsm);

   } 
  
};

//QF识别结果2
Blockly.Blocks.qdp_ESP8266_QF_sbjg2 = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.hc);
    this.appendDummyInput(Blockly.MIXLY_QDP_sbsm)
    .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/HC/qdp_sbjg.png", 30, 20))
    .appendField(Blockly.MIXLY_QDP_sbjg)
    .appendField(Blockly.MIXLY_QDP_Ifrecognized)
    .appendField(new Blockly.FieldDropdown(qdprobotESP8266_T21), "pinn2")
    .setAlign(Blockly.ALIGN_RIGHT);
    this.setOutput(true);
    this.setInputsInline(true);
    this.setTooltip(Blockly.MIXLY_QDP_sbsm2);

   } 
  
};

var qdprobotESP8266_display_samll_HV=[[(Blockly.QDP_display_samll_HV0), "2"],[(Blockly.QDP_display_samll_HV1), "3"],[(Blockly.QDP_display_samll_HV2), "1"],[(Blockly.QDP_display_samll_HV3), "0"]];
var qdprobotESP8266_display_samll_HVpiture=[[(Blockly.QDP_display_samll_HV10), "1"],[(Blockly.QDP_display_samll_HV11), "0"]];

var qdprobotESP8266_display_samll_clr=[[(Blockly.QDP_display_samll_clr1), "CLR"],[(Blockly.QDP_display_samll_clr2), "SBC"]];
var qdprobotESP8266_display_samll_pic=[[(Blockly.QDP_display_samll_pic0), "0"],[(Blockly.QDP_display_samll_pic1), "1"]];
var qdprobotESP8266_display_samll_PL=[[(Blockly.QDP_display_samll_pl1), "PL"],[(Blockly.QDP_display_samll_pl2), "BOX"],[(Blockly.QDP_display_samll_pl3), "BOXF"]];
var qdprobotESP8266_display_samll_CIR=[[(Blockly.MIXLY_QDP_displayhollowround), "CIR"],[(Blockly.MIXLY_QDP_displaysolidround), "CIRF"]];
var qdprobotESP8266_display_samll_DC=[["16", "16"],["24", "24"],["32", "32"]];
var qdprobotESP8266_display_samll_btl=[["9600", "9600"],["115200", "115200"],["19200", "19200"],["5600", "5600"]];

//MP3
//Mp3初始化


Blockly.Blocks.ESP8266_Mp3_init = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.MP3);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/MP3/qdp_stop.png", 30, 20))
    .appendField(Blockly.MIXLY_QDP_MP3+' '+MSG['catEthernet_init'])
    .appendField(Blockly.MIXLY_QDP_PIN)
    .appendField(new Blockly.FieldDropdown(QDP_Esp8266_Serial_Port_Pin_Dropdown), "PIN");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
      this.setInputsInline(true);
      this.setTooltip("MP3端口指定");//增加块的鼠标注释内容 
  }
};
//MP3指定
Blockly.Blocks.qdp_ESP8266_MP3_bofangx = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.MP3);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/MP3/qdp_playx.png", 30, 20))
      .appendField(Blockly.MIXLY_QDP_BOFANGX)
    


    this.appendValueInput('num',Number)
    .setCheck(Number)
    .appendField(Blockly.MIXLY_QDP_YINGLIANG);

    this.appendValueInput('num2',Number)
    .setCheck(Number)
    .appendField(Blockly.MIXLY_QDP_SHOU);

    this.setPreviousStatement(true);
    this.setNextStatement(true);
      this.setInputsInline(true);
   this.setTooltip(Blockly.MIXLY_QDP_MP3MARK1);//增加块的鼠标注释内容 


  }
};
//MP3音量
Blockly.Blocks.qdp_ESP8266_MP3_yingliang = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.MP3);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/MP3/qdp_yingliang.png", 30, 20))
      .appendField(Blockly.MIXLY_QDP_YLTJ)


    this.appendValueInput('num',Number)
    .setCheck(Number)
    .appendField(Blockly.MIXLY_QDP_YINGLIANG);

    this.setPreviousStatement(true);
    this.setNextStatement(true);
      this.setInputsInline(true);
  }
};
//MP3循环
Blockly.Blocks.qdp_ESP8266_MP3_loopplay = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.MP3);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/MP3/qdp_loopplay.png", 30, 20))
      .appendField(Blockly.MIXLY_QDP_LOOPPLAY)
    


    this.appendValueInput('num',Number)
    .setCheck(Number)
    .appendField(Blockly.MIXLY_QDP_YINGLIANG);

    this.appendValueInput('num2',Number)
    .setCheck(Number)
    .appendField(Blockly.MIXLY_QDP_SHOU);

    this.setPreviousStatement(true);
    this.setNextStatement(true);
      this.setInputsInline(true);
  }
};
//MP3播放暂停
Blockly.Blocks.qdp_ESP8266_MP3_startpause = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.MP3);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/MP3/qdp_stop.png", 30, 20))
    .appendField(Blockly.MIXLY_QDP_STARTPAUSE)

 this.appendDummyInput("")
    .appendField(Blockly.MIXLY_STAT)
        .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_QDP_START, "1"], [Blockly.MIXLY_QDP_PAUSE, "0"]]), "PIN22");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

//MP3上一首/下一首
Blockly.Blocks.qdp_ESP8266_MP3_previous_next = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.MP3);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/MP3/qdp_stop.png", 30, 20))
    .appendField(Blockly.MIXLY_QDP_PREVIOUS+'/')
    .appendField(Blockly.MIXLY_QDP_NEXT)

    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_STAT)
     .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_QDP_PREVIOUS, "0"], [Blockly.MIXLY_QDP_NEXT, "1"]]), "PIN22");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

//MP3播放音效
Blockly.Blocks.qdp_ESP8266_MP3_play = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.MP3);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/MP3/qdp_playXX.png", 30, 20))
      .appendField(Blockly.MIXLY_QDP_play)
    .appendField(new Blockly.FieldDropdown(qdprobotESP8266MP3_T1), "pin2")

   
    this.appendValueInput('num',Number)
    .setCheck(Number)
    .appendField(Blockly.MIXLY_QDP_YINGLIANG)
   
   
    this.setPreviousStatement(true);
    this.setNextStatement(true);
      this.setInputsInline(true);
    this.setTooltip(Blockly.MIXLY_QDP_MP3MARK2);//增加块的鼠标注释内容 


  }
};



//ESP8266 OLED

//显示-OLED-初始化(iic)
Blockly.Blocks.ESP8266_oled_init = {
  init: function () {
    this.setColour(Blockly.Blocks.qdprobotESP8266.show);
    this.appendDummyInput("")
      .appendField(Blockly.OLED_INIT2)
      .appendField(Blockly.MIXLY_PIN)
      .appendField(new Blockly.FieldDropdown(QDP_Esp8266_Double_Digit_Pin_Dropdown), "PIN");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.OLED_INIT2_TOOLTIP);
      }
};


//显示-OLED-新建页面
Blockly.Blocks.ESP8266_oled_page = {
  init: function () {
    this.setColour(Blockly.Blocks.qdprobotESP8266.show);
    this.appendDummyInput("")
      .appendField("OLED")
      .appendField(Blockly.OLED_PAGE);
    this.appendStatementInput('DO')
      .appendField('');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.oled_page_tooltip);
  }
};

//显示-OLED-设置字体
Blockly.Blocks.ESP8266_oled_set_EN_Font = {
  init: function () {
    this.setColour(Blockly.Blocks.qdprobotESP8266.show);
    this.appendDummyInput("")
      .appendField("OLED");
    this.appendDummyInput("")
      .appendField(Blockly.set_EN_Font)
      .appendField(new Blockly.FieldDropdown(EN_FONT_NAME), "FONT_NAME");
    this.appendDummyInput("")
      .appendField(Blockly.FontSize)
      .appendField(new Blockly.FieldDropdown(EN_FONT_SIZE), "FONT_SIZE");
    this.appendDummyInput("")
      .appendField(Blockly.Font_Style)
      .appendField(new Blockly.FieldDropdown(EN_FONT_STYLE), "FONT_STYLE");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.oled_setFont_tooltip);
  }
};
//显示-OLED-设置字体
Blockly.Blocks.ESP8266_oled_set_CN_Font = {
  init: function () {
    this.setColour(Blockly.Blocks.qdprobotESP8266.show);
    this.appendDummyInput("")
      .appendField("OLED");
    this.appendDummyInput("")
      .appendField(Blockly.set_CN_Font)
      .appendField(new Blockly.FieldDropdown(CN_FONT_NAME), "FONT_NAME");
    this.appendDummyInput("")
      .appendField(Blockly.FontSize)
      .appendField(new Blockly.FieldDropdown(CN_FONT_SIZE), "FONT_SIZE");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.oled_setFont_tooltip);
  }
};

//显示-OLED-显示字符串
Blockly.Blocks.ESP8266_oled_print = {
  init: function () {
    this.setColour(Blockly.Blocks.qdprobotESP8266.show);
    this.appendDummyInput("")
      .appendField("OLED")
      .appendField(Blockly.OLED_PRINT_VAR);
    this.appendValueInput("POS_X", Number)
      .appendField(Blockly.OLED_START_X)
      .setCheck(Number);
    this.appendValueInput("POS_Y", Number)
      .appendField(Blockly.OLED_START_Y)
      .setCheck(Number);
    this.appendValueInput("TEXT", String)
      .appendField(Blockly.OLED_STRING)
      .setCheck([Number, String]);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.oled_print_tooltip);
  }
};

//显示-OLED-定义图像名称和数据
Blockly.Blocks['ESP8266_oled_define_bitmap_data'] = {
  init: function () {
    this.setColour(Blockly.Blocks.qdprobotESP8266.show);
    this.appendDummyInput("")
      .appendField("OLED")
      .appendField(Blockly.OLED_BITMAP_NAME)
      .appendField(new Blockly.FieldTextInput('bitmap1'), 'VAR')
      .appendField(Blockly.OLED_BITMAP_DATA)
      // .appendField(new Blockly.FieldTextInput('0x80,0x00,0x84,0x10,0x88,0x10,0x90,0x08,0x90,0x04,0x80,0x00,0xFE,0x3F,0xC0,0x01, 0xA0,0x02,0xA0,0x02,0x90,0x04,0x88,0x08,0x84,0x10,0x83,0x60,0x80,0x00,0x80,0x00'), 'TEXT');
      .appendField(new Blockly.FieldTextInput('0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0xF8,0xFF,0xFF,0x00,0x00,0x00,0xFC,0xFF,0x3F,0x00,0x00,0x00,0xFE,0xFF,0xFF,0x03,0x00,0x80,0xFF,0xFF,0xFF,0x01,0x00,0x80,0xFF,0xFF,0xFF,0x0F,0x00,0xC0,0xFF,0xFF,0xFF,0x03,0x00,0xC0,0x07,0x00,0x00,0x1F,0x00,0xE0,0x03,0x00,0xC0,0x07,0x00,0xE0,0x01,0x00,0x00,0x3C,0x00,0xF0,0x00,0x00,0x00,0x0F,0x00,0xE0,0x00,0x00,0x00,0x38,0x00,0x78,0x00,0x00,0x00,0x1E,0x00,0x70,0x00,0x00,0x00,0x70,0x00,0x38,0x00,0x00,0x00,0x1C,0x00,0x70,0x00,0x00,0x00,0x70,0x00,0x1C,0x00,0x00,0x00,0x38,0x00,0x38,0x00,0x00,0x00,0xE0,0x00,0x1C,0x00,0x00,0x00,0x38,0x00,0x38,0x00,0x00,0x00,0xE0,0x00,0x1C,0x00,0x00,0x00,0x38,0x00,0x38,0x00,0x00,0x00,0xE0,0x00,0x0C,0x00,0x00,0x00,0x30,0x00,0x38,0x00,0x00,0x00,0xE0,0x00,0x0C,0x00,0x00,0x00,0x30,0x00,0x38,0x00,0x00,0x00,0xE0,0x00,0x0C,0x00,0x00,0x00,0x30,0x00,0x38,0x00,0x00,0x00,0xE0,0x00,0x0C,0x00,0x00,0x00,0x30,0x00,0x38,0x00,0x00,0x00,0xE0,0x00,0x0C,0x00,0x00,0x00,0x30,0x00,0x38,0x00,0x00,0x00,0xE0,0x00,0x0C,0x00,0x00,0x00,0x30,0x00,0x38,0x00,0x00,0x00,0xE0,0x00,0x0C,0x00,0x00,0x00,0x30,0x00,0x38,0x00,0x00,0x00,0xE0,0x00,0x0C,0x00,0x00,0x00,0x30,0x00,0x78,0x00,0x00,0x00,0xE0,0x00,0x0C,0x00,0x00,0x00,0x30,0x00,0xF8,0x01,0x00,0x00,0xE0,0x00,0x0C,0x00,0x00,0x00,0x30,0x00,0xF8,0x07,0x00,0x00,0xE0,0x00,0x0C,0x00,0x00,0x00,0x38,0x00,0xB8,0x1F,0x00,0x00,0xE0,0x00,0x0C,0x00,0x00,0x00,0x3E,0x00,0x38,0x7F,0x00,0x00,0xE0,0x00,0x0C,0x00,0x00,0x80,0x3F,0x00,0x38,0xFC,0x01,0x00,0xE0,0x00,0x0C,0x00,0x00,0xE0,0x3F,0x00,0x38,0xF0,0x07,0x00,0xE0,0x00,0x0C,0x00,0x00,0xF8,0x31,0x00,0x38,0xC0,0x1F,0x00,0xE0,0x00,0x0C,0x00,0x00,0x7E,0x30,0x00,0x38,0x00,0x7F,0x00,0xE0,0x00,0x0C,0x00,0x80,0x1F,0x30,0x00,0x38,0x00,0xFC,0x01,0xE0,0x00,0x0C,0x00,0xE0,0x07,0x30,0x00,0x38,0x00,0xF0,0x07,0xE0,0x00,0x0C,0x00,0xF8,0x01,0x30,0x00,0x38,0x00,0xE0,0x1F,0xE0,0x00,0x0C,0x00,0xFE,0x00,0x30,0x00,0x38,0x00,0xF0,0x7F,0xE0,0x00,0x0C,0x80,0x3F,0x00,0x30,0x00,0x38,0x00,0xF8,0xFF,0xE1,0x00,0x0C,0xE0,0x6F,0x01,0x30,0x00,0x38,0x00,0xFC,0xF9,0xE7,0x00,0x0C,0xF8,0x4F,0x00,0x30,0x00,0x38,0x00,0xFD,0xDD,0xFF,0x00,0x0C,0xFE,0xF7,0x00,0x30,0x00,0x38,0x00,0xFE,0x3F,0xFF,0x00,0x8C,0xFF,0xFF,0x02,0x30,0x00,0x38,0x00,0xFE,0x3F,0xFC,0x00,0xFC,0xFF,0xFF,0x00,0x30,0x00,0x38,0x00,0xFE,0x3F,0xF0,0x00,0xFC,0xF5,0xFF,0x02,0x30,0x00,0x38,0x00,0xFC,0x1F,0xE0,0x00,0x7C,0xF0,0xFF,0x00,0x30,0x00,0x38,0x00,0xFD,0x5F,0xE0,0x00,0x1C,0xE0,0x7F,0x00,0x38,0x00,0x70,0x00,0xF8,0x0F,0x70,0x00,0x1C,0xE8,0x7F,0x01,0x38,0x00,0x70,0x00,0xF0,0x07,0x70,0x00,0x3C,0xC0,0x3F,0x00,0x3C,0x00,0xF0,0x00,0xC0,0x01,0x78,0x00,0x38,0x20,0x4F,0x00,0x1C,0x00,0xE0,0x01,0x20,0x04,0x3C,0x00,0x78,0x80,0x10,0x00,0x1E,0x00,0xC0,0x03,0x00,0x00,0x1E,0x00,0xF0,0x01,0x00,0x80,0x0F,0x00,0x80,0x1F,0x00,0xC0,0x0F,0x00,0xE0,0x07,0x00,0xE0,0x07,0x00,0x00,0xFF,0xFF,0xFF,0x07,0x00,0xC0,0xFF,0xFF,0xFF,0x03,0x00,0x00,0xFC,0xFF,0xFF,0x01,0x00,0x00,0xFF,0xFF,0xFF,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00'), 'TEXT');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.OLED_DEF_BMP_DATA_TOOLTIP);
  }
}


//显示-OLED-清屏幕
Blockly.Blocks.ESP8266_oled_clear = {
  init: function () {
    this.setColour(Blockly.Blocks.qdprobotESP8266.show);
    this.appendDummyInput("")
      .appendField("OLED "+Blockly.OLED_CLEAR);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip();
  }
};

//OLED背光亮度
Blockly.Blocks['ESP8266_u8g2_setContrast'] = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.show);
    this.appendValueInput("Contrast")
        .setCheck(null)
        .appendField("OLED "+Blockly.TFT_Brightness+Blockly.MIXLY_BRIGHTNESS);
    this.appendDummyInput();
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip(Blockly.MIXLY_U8G2_SETCONTRAST_HELP);
 this.setHelpUrl("");
  }
};


//显示-OLED-设置图标（表情）
Blockly.Blocks.ESP8266_oled_face = {
  init: function () {
    this.setColour(Blockly.Blocks.qdprobotESP8266.show);
    this.appendDummyInput("")
      .appendField("OLED")
      .appendField(Blockly.OLED_BITMAP);
    this.appendValueInput("POS_X", Number)
      .appendField(Blockly.OLED_START_X)
      .setCheck(Number);
    this.appendValueInput("POS_Y", Number)
      .appendField(Blockly.OLED_START_Y)
      .setCheck(Number);
    this.appendDummyInput()
      .appendField(Blockly.OLED_ICON)
      .appendField(new Blockly.FieldDropdown(FACE_IMAGE), 'FACE_IMAGE');
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.oled_setFont_tooltip);
  }
};

//显示-OLED-设置图标
Blockly.Blocks.ESP8266_oled_icons = {
  init: function () {
    this.setColour(Blockly.Blocks.qdprobotESP8266.show);
    this.appendDummyInput("")
      .appendField("OLED")
      .appendField(Blockly.OLED_BITMAP);
    this.appendValueInput("POS_X", Number)
      .appendField(Blockly.OLED_START_X)
      .setCheck(Number);
    this.appendValueInput("POS_Y", Number)
      .appendField(Blockly.OLED_START_Y)
      .setCheck(Number);
    this.appendDummyInput("")
      .appendField(Blockly.MIXLY_MICROBIT_JS_NUMBER)
      .appendField(new Blockly.FieldDropdown(ICON_SIZE), "ICON_SIZE")
      .appendField("px");
    this.appendDummyInput()
      .appendField(Blockly.OLED_ICON)
      .appendField(new Blockly.FieldDropdown(ICON_IMAGE), 'ICON_IMAGE');
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.oled_setFont_tooltip);
  }
};

//显示-OLED-显示图像
Blockly.Blocks.ESP8266_oled_showBitmap = {
  init: function () {
    this.setColour(Blockly.Blocks.qdprobotESP8266.show);
    this.appendDummyInput("")
      .appendField("OLED")
      .appendField(Blockly.OLED_BITMAP);
    this.appendValueInput("START_X", Number)
      .appendField(Blockly.OLED_START_X)
      .setCheck(Number);
    this.appendValueInput("START_Y", Number)
      .appendField(Blockly.OLED_START_Y)
      .setCheck(Number);
    this.appendValueInput("WIDTH", Number)
      .appendField(Blockly.MIXLY_WIDTH)
      .setCheck(Number);
    this.appendValueInput("HEIGHT", Number)
      .appendField(Blockly.MIXLY_HEIGHT)
      .setCheck(Number);
    this.appendValueInput("bitmap_name", String)
      .appendField(Blockly.OLED_BITMAP_NAME)
      .setCheck(String);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.OLED_SHOW_BMP_TOOLTIP);
  }
};

//显示-OLED-画点
Blockly.Blocks.ESP8266_oled_drawPixel = {
  init: function () {
    this.setColour(Blockly.Blocks.qdprobotESP8266.show);
    this.appendDummyInput("")
      .appendField("OLED")
      .appendField(Blockly.OLED_DRAWPIXEL);
    this.appendValueInput("POS_X", Number)
      .appendField(Blockly.OLED_POSX)
      .setCheck(Number);
    this.appendValueInput("POS_Y", Number)
      .appendField(Blockly.OLED_POSY)
      .setCheck(Number);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.OLED_DRAW_PIXE_TOOLTIP);
  }
};

//显示-OLED-画线
Blockly.Blocks.ESP8266_oled_drawLine = {
  init: function () {
    this.setColour(Blockly.Blocks.qdprobotESP8266.show);
    this.appendDummyInput("")
      .appendField("OLED")
      .appendField(Blockly.OLED_DRAWLINE);
    this.appendValueInput("START_X", Number)
      .appendField(Blockly.OLED_START_X)
      .setCheck(Number);
    this.appendValueInput("START_Y", Number)
      .appendField(Blockly.OLED_START_Y)
      .setCheck(Number);
    this.appendValueInput("END_X", Number)
      .appendField(Blockly.OLED_END_X)
      .setCheck(Number);
    this.appendValueInput("END_Y", Number)
      .appendField(Blockly.OLED_END_Y)
      .setCheck(Number);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.OLED_DRAW_LINE_TOOLTIP);
  }
};

//显示-OLED-画直线
Blockly.Blocks.ESP8266_oled_draw_Str_Line = {
  init: function () {
    this.setColour(Blockly.Blocks.qdprobotESP8266.show);
    this.appendDummyInput("")
      .appendField("OLED")
      .appendField(Blockly.OLED_DRAWSTRLINE);
    this.appendValueInput("START_X", Number)
      .appendField(Blockly.OLED_START_X)
      .setCheck(Number);
    this.appendValueInput("START_Y", Number)
      .appendField(Blockly.OLED_START_Y)
      .setCheck(Number);
    this.appendValueInput("LENGTH", Number)
      .appendField(Blockly.OLED_LENGTH)
      .setCheck(Number);
    this.appendDummyInput("")
      .appendField(new Blockly.FieldDropdown(LINESELECT), "TYPE");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip("x(0~127),y(0~63)");
  }
};

//显示-OLED-画长方形
Blockly.Blocks.ESP8266_oled_drawFrame = {
  init: function () {
    this.setColour(Blockly.Blocks.qdprobotESP8266.show);
    this.appendDummyInput("")
      .appendField("OLED")
      .appendField(Blockly.OLED_DRAW_RECTANGLE);
    this.appendDummyInput("")
      .appendField(new Blockly.FieldDropdown(FRAMESELECT), "TYPE");
    this.appendValueInput("D0_X", Number)
      .appendField(Blockly.OLED_L_U_X)
      .setCheck(Number);
    this.appendValueInput("D0_Y", Number)
      .appendField(Blockly.OLED_L_U_Y)
      .setCheck(Number);
    this.appendValueInput("WIDTH", Number)
      .appendField(Blockly.MIXLY_WIDTH)
      .setCheck(Number);
    this.appendValueInput("HEIGHT", Number)
      .appendField(Blockly.MIXLY_HEIGHT)
      .setCheck(Number);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip("x(0~127),y(0~63)");
  }
};

//显示-OLED-画圆角矩形
Blockly.Blocks.ESP8266_oled_drawRFrame = {
  init: function () {
    this.setColour(Blockly.Blocks.qdprobotESP8266.show);
    this.appendDummyInput("")
      .appendField("OLED")
      .appendField(Blockly.OLED_DRAW_RAD_RECTANGLE);
    this.appendDummyInput("")
      .appendField(new Blockly.FieldDropdown(RADSELECT), "TYPE");
    this.appendValueInput("D0_X", Number)
      .appendField(Blockly.OLED_L_U_X)
      .setCheck(Number);
    this.appendValueInput("D0_Y", Number)
      .appendField(Blockly.OLED_L_U_Y)
      .setCheck(Number);
    this.appendValueInput("WIDTH", Number)
      .appendField(Blockly.MIXLY_WIDTH)
      .setCheck(Number);
    this.appendValueInput("HEIGHT", Number)
      .appendField(Blockly.MIXLY_HEIGHT)
      .setCheck(Number);
    this.appendValueInput("RADIUS", Number)
      .appendField(Blockly.OLED_RADIUS)
      .setCheck(Number);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip("x(0~127),y(0~63)");
  }
};

//显示-OLED-画圆（空心，实心）
Blockly.Blocks.ESP8266_oled_drawCircle = {
  init: function () {
    this.setColour(Blockly.Blocks.qdprobotESP8266.show);
    this.appendDummyInput("")
      .appendField("OLED")
      .appendField(Blockly.OLED_DRAW_CIRCLE);
    this.appendDummyInput("")
      .appendField(new Blockly.FieldDropdown(CIRCLESELECT), "TYPE");
    this.appendValueInput("D0_X", Number)
      .appendField(Blockly.OLED_CENTER_CIRCLE_X)
      .setCheck(Number);
    this.appendValueInput("D0_Y", Number)
      .appendField(Blockly.OLED_CENTER_CIRCLE_Y)
      .setCheck(Number);
    this.appendValueInput("RADIUS", Number)
      .appendField(Blockly.OLED_CIRCLE_RADIUS)
      .setCheck(Number);
    this.appendDummyInput("")
      .appendField(new Blockly.FieldDropdown(CIRCLEOPTELECT), "OPT");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip("x(0~127),y(0~63)");
  }
};

//显示-OLED-画椭圆（空心，实心）
Blockly.Blocks.ESP8266_oled_drawEllipse = {
  init: function () {
    this.setColour(Blockly.Blocks.qdprobotESP8266.show);
    this.appendDummyInput("")
      .appendField("OLED")
      .appendField(Blockly.OLED_DRAW_ELLIPSE);
    this.appendDummyInput("")
      .appendField(new Blockly.FieldDropdown(ELLIPSESELECT), "TYPE");
    this.appendValueInput("D0_X", Number)
      .appendField(Blockly.OLED_CENTER_CIRCLE_X)
      .setCheck(Number);
    this.appendValueInput("D0_Y", Number)
      .appendField(Blockly.OLED_CENTER_CIRCLE_Y)
      .setCheck(Number);
    this.appendValueInput("RADIUS_X", Number)
      .appendField(Blockly.OLED_ELLIPSE_RADIUS_X)
      .setCheck(Number);
    this.appendValueInput("RADIUS_Y", Number)
      .appendField(Blockly.OLED_ELLIPSE_RADIUS_Y)
      .setCheck(Number);
    this.appendDummyInput("")
      .appendField(new Blockly.FieldDropdown(CIRCLEOPTELECT), "OPT");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.OLED_DRAW_ELLIPSE_TOOLTIP);
  }
};

//显示-OLED-画三角
Blockly.Blocks.ESP8266_oled_drawTriangle = {
  init: function () {
    this.setColour(Blockly.Blocks.qdprobotESP8266.show);
    this.appendDummyInput("")
      .appendField("OLED")
      .appendField(Blockly.OLED_DRAW_TRIANGLE);
    this.appendValueInput("D0_X", Number)
      .appendField(Blockly.OLED_D0_X)
      .setCheck(Number);
    this.appendValueInput("D0_Y", Number)
      .appendField(Blockly.OLED_D0_Y)
      .setCheck(Number);
    this.appendValueInput("D1_X", Number)
      .appendField(Blockly.OLED_D1_X)
      .setCheck(Number);
    this.appendValueInput("D1_Y", Number)
      .appendField(Blockly.OLED_D1_Y)
      .setCheck(Number);
    this.appendValueInput("D2_X", Number)
      .appendField(Blockly.OLED_D2_X)
      .setCheck(Number);
    this.appendValueInput("D2_Y", Number)
      .appendField(Blockly.OLED_D2_Y)
      .setCheck(Number);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip("");
  }
};




//横坚屏设置
Blockly.Blocks.QDP_ESP8266_display_samll_HV = {
  init: function() {
    this.setColour(34);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/oled/qdp_oleddisp2.png", 30, 20))
    .appendField(Blockly.QDP_display_samll_HV)
    .appendField(Blockly.MIXLY_QDP_PIN)
    .appendField(new Blockly.FieldDropdown(QDP_Esp8266_Serial_Port_Pin_Dropdown), "PIN")
    .appendField(new Blockly.FieldDropdown(qdprobotESP8266_display_samll_HV), "pin")
    this.setPreviousStatement(true);
    this.setNextStatement(true);
      this.setInputsInline(true);
      this.setTooltip("横坚屏设置");//增加块的鼠标注释内容
  }
};

//屏亮度设置
Blockly.Blocks.QDP_ESP8266_display_samll_BL = {
  init: function() {
    this.setColour(34);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/oled/qdp_oleddisp2.png", 30, 20))
    .appendField(Blockly.QDP_display_samll_BL)
    .appendField(Blockly.MIXLY_QDP_PIN)
    .appendField(new Blockly.FieldDropdown(QDP_Esp8266_Serial_Port_Pin_Dropdown), "PIN")
    .appendField(Blockly.MIXLY_QDP_VLAUELED)
    this.appendValueInput("QDP_display_samll_bl_1")
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip("屏亮度设置");//增加块的鼠标注释内容
  }
};



//颜色输出—2020.01.25
  Blockly.Blocks.QDP_ESP8266_display_color_2020_01_25 = {
  init: function() {
    var led_color = ['#00008b','#dc143c','#7fff00','#3333ff','#ffd700','#87cefa','#ff00ff','#c0c0c0',
                     '#778899','#990000','#32cd32','#0000cd','#ffcc00','#66cccc','#cc33cc','#faf0e6',
                     '#ffffe0','#ff4500','#ffffff','#cccccc','#666666','#333333','#6b8e23','#00ff00',
                     '#33cc00','#006600','#7cfc00','#b22222','#adff2f','#33ff33','#ff0000','#daa520',
                     '#ffff00','#33ffff','#2f4f4f','#191970','#800000','#4b0082','#483d8b','#708090',
                     '#808080','#999999','#1e90ff','#ff6666','#663333','#00bfff','#cc9933','#ba55d3',
                     '#3cb371','#cc66cc','#000080','#336666','#003333','#cc0000','#90ee90','#7b68ee',
                     '#cc6600','#663366','#666600','#993399','#800080','#3366ff','#8b4513','#000000'
                     ];
    var color_detected = new Blockly.FieldColour('#00008b');
    color_detected.setColours(led_color).setColumns(8);

    this.setColour(34);
    this.appendDummyInput()
        .appendField(color_detected, "LEDColorDetect");
    this.setOutput(true, Number);
    this.setInputsInline(true);
  }
};

//小彩屏颜色刷屏/背景色
Blockly.Blocks.QDP_ESP8266_display_samll_clr = {
  init: function() {
    this.setColour(34);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/ZKdisplay/colour99.png", 30, 20))
    .appendField(Blockly.QDP_display_samll_clr)
    .appendField(Blockly.MIXLY_QDP_PIN)
    .appendField(new Blockly.FieldDropdown(QDP_Esp8266_Serial_Port_Pin_Dropdown), "PIN")
    .appendField(new Blockly.FieldDropdown(qdprobotESP8266_display_samll_clr), "pin")
    .appendField(Blockly.blynk_iot_WidgetLED_COLOR)
    .appendField("0~63")
    this.appendValueInput("QDP_display_samll_clr_1")
    this.setPreviousStatement(true);
    this.setNextStatement(true);
      this.setInputsInline(true);
      this.setTooltip("颜色刷屏或背景颜色设置");//增加块的鼠标注释内容
  }
};


//默认图片显示
Blockly.Blocks.QDP_ESP8266_display_samll_flash_pic = {
  init: function() {
    this.setColour(34);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/ZKdisplay/face.png", 30, 20))
    .appendField(Blockly.QDP_display_samll_pic)
    .appendField(Blockly.MIXLY_QDP_PIN)
    .appendField(new Blockly.FieldDropdown(QDP_Esp8266_Serial_Port_Pin_Dropdown), "PIN")
    .appendField(new Blockly.FieldDropdown(qdprobotESP8266_display_samll_HVpiture), "HV")
    .appendField(new Blockly.FieldDropdown(qdprobotESP8266_display_samll_pic), "model")
    .appendField(new Blockly.FieldDropdown(SdisplayICO), 'picNum');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip("图片显示");//增加块的鼠标注释内容
  }
};

//图片显示
Blockly.Blocks.QDP_ESP8266_display_samll_pic = {
  init: function() {
    this.setColour(34);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/ZKdisplay/face.png", 30, 20))
    .appendField(Blockly.QDP_display_samll_pic)
    .appendField(Blockly.MIXLY_QDP_PIN)
    .appendField(new Blockly.FieldDropdown(QDP_Esp8266_Serial_Port_Pin_Dropdown), "PIN")
    .appendField(new Blockly.FieldDropdown(qdprobotESP8266_display_samll_pic), "pin")
    this.appendValueInput("QDP_display_samll_pic_add")
    .appendField("addr");
    this.appendValueInput("QDP_display_samll_pic_X")
   .appendField(Blockly.QDP_display_samll_start)
    .appendField("X");
    this.appendValueInput("QDP_display_samll_pic_Y")
    .appendField("Y");
    this.appendValueInput("QDP_display_samll_pic_W")
   .appendField(Blockly.QDP_display_samll_WH)
   .appendField("W");
    this.appendValueInput("QDP_display_samll_pic_H")
    .appendField("H");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip("图片显示");//增加块的鼠标注释内容
  }
};

//画点指令
Blockly.Blocks.QDP_ESP8266_display_samll_PS = {
  init: function() {
    this.setColour(34);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/oled/qdp_oleddisp2.png", 30, 20))
    .appendField(Blockly.MIXLY_QDP_OLED45)
    .appendField(Blockly.MIXLY_QDP_PIN)
    .appendField(new Blockly.FieldDropdown(QDP_Esp8266_Serial_Port_Pin_Dropdown), "PIN");
    
    this.appendValueInput("QDP_display_samll_ps_X")
     .appendField("X");
    this.appendValueInput("QDP_display_samll_ps_Y")
    .appendField("Y");
    this.appendValueInput("QDP_display_samll_ps_colou")
   .appendField(Blockly.blynk_iot_WidgetLED_COLOR)
  .appendField("0~63");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip("画点");//增加块的鼠标注释内容
  }
};



//画线框指令
Blockly.Blocks.QDP_ESP8266_display_samll_PL = {
  init: function() {
    this.setColour(34);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/ZKdisplay/drawing.png", 30, 20))
    .appendField(Blockly.QDP_display_samll_pl)
    .appendField(Blockly.MIXLY_QDP_PIN)
    .appendField(new Blockly.FieldDropdown(QDP_Esp8266_Serial_Port_Pin_Dropdown), "PIN")
    .appendField(new Blockly.FieldDropdown(qdprobotESP8266_display_samll_PL), "pin")

    this.appendValueInput("QDP_display_samll_pl_X")
   .appendField(Blockly.QDP_display_samll_start)
    .appendField("X");
    this.appendValueInput("QDP_display_samll_pl_Y")
    .appendField("Y");
    this.appendValueInput("QDP_display_samll_pl_X2")
    .appendField(Blockly.QDP_display_samll_stop)
    .appendField("X");
    this.appendValueInput("QDP_display_samll_pl_Y2")
    .appendField("Y");
    this.appendValueInput("QDP_display_samll_pl_colou")
    .appendField(Blockly.blynk_iot_WidgetLED_COLOR)
    .appendField("0~63");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip("画线框");//增加块的鼠标注释内容
  }
};


//画圆指令
Blockly.Blocks.QDP_ESP8266_display_samll_CIR = {
  init: function() {
    this.setColour(34);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/ZKdisplay/round.png", 30, 20))
    .appendField(Blockly.MIXLY_QDP_displaydrawinground)
    .appendField(Blockly.MIXLY_QDP_PIN)
    .appendField(new Blockly.FieldDropdown(QDP_Esp8266_Serial_Port_Pin_Dropdown), "PIN")
    .appendField(new Blockly.FieldDropdown(qdprobotESP8266_display_samll_CIR), "pin")

    this.appendValueInput("QDP_display_samll_cir_X")
   .appendField(Blockly.MIXLY_QDP_OLED2);
     this.appendValueInput("QDP_display_samll_cir_Y")
    .appendField("Y");
    this.appendValueInput("QDP_display_samll_cir_R")
    .appendField(Blockly.MIXLY_QDP_displayroundR)
    .appendField("R");
    this.appendValueInput("QDP_display_samll_cir_colou")
    .appendField(Blockly.blynk_iot_WidgetLED_COLOR)
    .appendField("0~63");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip("画圆");//增加块的鼠标注释内容
  }
};



//显示文本
Blockly.Blocks.QDP_ESP8266_display_samll_DC = {
  init: function() {
    this.setColour(34);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/ZKdisplay/TEXT99.png", 30, 20))
    .appendField(Blockly.QDP_display_samll_DC)
    .appendField(Blockly.MIXLY_QDP_PIN)
    .appendField(new Blockly.FieldDropdown(QDP_Esp8266_Serial_Port_Pin_Dropdown), "PIN")

    .appendField(Blockly.MIXLY_QDP_OLED13)
    .appendField(new Blockly.FieldDropdown(qdprobotESP8266_display_samll_DC), "pin")
    
    this.appendValueInput("QDP_display_samll_dc_colou")
    .appendField(Blockly.blynk_iot_WidgetLED_COLOR)
    .appendField("0~63");
    this.appendValueInput("QDP_display_samll_dc_X")
    .appendField(Blockly.QDP_display_samll_start)
    .appendField("X");
    this.appendValueInput("QDP_display_samll_dc_Y")
    .appendField("Y");
    this.appendValueInput("QDP_display_samll_dc_text",'String')
    .appendField(Blockly.MIXLY_QDP_OLED30);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip("显示文本信息");//增加块的鼠标注释内容
  }
};

//显示文本
Blockly.Blocks.QDP_ESP8266_display_samll_CN = {
  init: function() {
    this.setColour(34);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/ZKdisplay/TEXT99.png", 30, 20))
    .appendField(Blockly.QDP_display_samll_DC)
    .appendField(Blockly.MIXLY_QDP_PIN)
    .appendField(new Blockly.FieldDropdown(QDP_Esp8266_Serial_Port_Pin_Dropdown), "PIN")

    .appendField(Blockly.MIXLY_QDP_OLED13)
    .appendField(new Blockly.FieldDropdown(qdprobotESP8266_display_samll_DC), "pin")
    
    this.appendValueInput("QDP_display_samll_dc_colou")
    .appendField(Blockly.blynk_iot_WidgetLED_COLOR)
    .appendField("0~63");
    this.appendValueInput("QDP_display_samll_dc_X")
    .appendField(Blockly.QDP_display_samll_start)
    .appendField("X");
    this.appendValueInput("QDP_display_samll_dc_Y")
    .appendField("Y");
    this.appendValueInput("QDP_display_samll_dc_text",'String')
    .appendField(Blockly.MIXLY_QDP_OLED30);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip("显示中文文本信息");//增加块的鼠标注释内容
  }
};

//显示文本
Blockly.Blocks.QDP_ESP8266_display_samll_CN_1 = {
  init: function() {
    this.setColour(34);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/ZKdisplay/TEXT99.png", 30, 20))
    .appendField(Blockly.QDP_display_samll_DC)
    .appendField(Blockly.MIXLY_QDP_PIN)
    .appendField(new Blockly.FieldDropdown(QDP_Esp8266_Serial_Port_Pin_Dropdown), "PIN")

    .appendField(Blockly.MIXLY_QDP_OLED13)
    .appendField(new Blockly.FieldDropdown(qdprobotESP8266_display_samll_DC), "pin")
    
    this.appendValueInput("QDP_display_samll_dc_colou")
    .appendField(Blockly.blynk_iot_WidgetLED_COLOR)
    .appendField("0~63");
    this.appendValueInput("QDP_display_samll_dc_X")
    .appendField(Blockly.QDP_display_samll_start)
    .appendField("X");
    this.appendValueInput("QDP_display_samll_dc_Y")
    .appendField("Y");

    this.appendValueInput("QDP_display_samll_dc_text",'String')
    .appendField(Blockly.MIXLY_QDP_OLED30);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip("支持中文或中文变量字符串,英文或符号，运行占系统内存较大！");//增加块的鼠标注释内容
  }
};

//显示文本
Blockly.Blocks.QDP_ESP8266_display_samll_SBCDC = {
  init: function() {
    this.setColour(34);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/oled/qdp_oleddisp2.png", 30, 20))
    .appendField(Blockly.QDP_display_samll_SBCDC)
    .appendField(Blockly.MIXLY_QDP_PIN)
    .appendField(new Blockly.FieldDropdown(QDP_Esp8266_Serial_Port_Pin_Dropdown), "PIN")

    .appendField(Blockly.MIXLY_QDP_OLED13)
    .appendField(new Blockly.FieldDropdown(qdprobotESP8266_display_samll_DC), "pin")
    
    this.appendValueInput("QDP_display_samll_sbcdc_colou2")
    .appendField(Blockly.QDP_display_samll_SBCDC1)
    .appendField("0~63");
    
    this.appendValueInput("QDP_display_samll_sbcdc_colou")
    .appendField(Blockly.blynk_iot_WidgetLED_COLOR)
    .appendField("0~63");
    this.appendValueInput("QDP_display_samll_sbcdc_X")
    .appendField(Blockly.QDP_display_samll_start)
    .appendField("X");
    this.appendValueInput("QDP_display_samll_sbcdc_Y")
    .appendField("Y");
    this.appendValueInput("QDP_display_samll_sbcdc_text",'String')
    .appendField(Blockly.MIXLY_QDP_OLED30);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip("显示带底色的文本信息");//增加块的鼠标注释内容
  }
};


//自定义指令
Blockly.Blocks.QDP_ESP8266_display_samll_order={
 init: function() {
    this.setColour(34);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/ZKdisplay/command.png", 30, 20))
    .appendField(Blockly.MIXLY_QDP_displayorder)
    .appendField(Blockly.MIXLY_QDP_PIN)
    .appendField(new Blockly.FieldDropdown(QDP_Esp8266_Serial_Port_Pin_Dropdown), "PIN");
      
    this.appendValueInput('text',String);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip("输入自定义指令");//增加块的鼠标注释内容
    }
  };



//小彩屏波特率设置
Blockly.Blocks.QDP_ESP8266_display_samll_btl = {
  init: function() {
    this.setColour(34);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/oled/qdp_oleddisp2.png", 30, 20))
    .appendField(Blockly.QDP_display_samll_btl)
    .appendField(Blockly.MIXLY_QDP_PIN)
    .appendField(new Blockly.FieldDropdown(QDP_Esp8266_Serial_Port_Pin_Dropdown), "PIN")

    .appendField(new Blockly.FieldDropdown(qdprobotESP8266_display_samll_btl), "pin");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
      this.setInputsInline(true);
      this.setTooltip("设置屏的通讯波特率，9600（出厂值），每次更改后要关电重启，不建议更改！");//增加块的鼠标注释内容
  }
};

//小彩屏
Blockly.Blocks.QDP_ESP8266_display_samll_init = {
  init: function() {
    this.setColour(34);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/oled/qdp_oleddisp2.png", 30, 20))
    .appendField(Blockly.QDP_display_samll_init)
     .appendField(Blockly.MIXLY_QDP_PIN)
    .appendField(new Blockly.FieldDropdown(QDP_Esp8266_Serial_Port_Pin_Dropdown), "PIN");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
      this.setInputsInline(true);
      this.setTooltip("屏坐标:X最大160，Y最大130");//增加块的鼠标注释内容 
  }
};


//串口收到的数据等于

 Blockly.Blocks.qdp_ESP8266_serial_jieshouzhi = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.HUE);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/communicate/qdp_txd3.png", 30, 20))
      .appendField(Blockly.MIXLY_QDP_JIESHOUzhi)
    
        .appendField(Blockly.MIXLY_QDP_PIN)
      .appendField(new Blockly.FieldDropdown(QDP_Esp8266_Serial_Port_Pin_Dropdown), "pin1")
    .appendField(Blockly.MIXLY_QDP_SUJUzhi);
    this.appendValueInput('text')
     this.setOutput(true, Boolean);
  this.setInputsInline(true);
  this.setTooltip(Blockly.MIXLY_QDP_serialjieshouMARKzhi);//增加块的鼠标注释内容 
   }
 };


//串口发送
Blockly.Blocks.qdp_ESP8266_serial_fasong = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.HUE);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/communicate/qdp_rxd.png", 30, 20))
    .appendField(Blockly.MIXLY_QDP_FASONG)
    .appendField(Blockly.MIXLY_QDP_PIN)
    .appendField(new Blockly.FieldDropdown(QDP_Esp8266_Serial_Port_Pin_Dropdown), "pin1");
    this.appendDummyInput("")
    .appendField(Blockly.blynk_IOT_IR_MODE)
    .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_SERIAL_WRITE,'write'],[Blockly.MIXLY_SERIAL_PRINT,'print'],[Blockly.MIXLY_SERIAL_PRINTLN,'println']]), 'OutputModel');
    this.appendValueInput('text')
    .appendField(Blockly.MIXLY_QDP_HCNR);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip("软串发送数据");//增加块的鼠标注释内容 
  }
};
 //串口接收
 Blockly.Blocks.qdp_ESP8266_serial_jieshou = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.HUE);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/communicate/qdp_txd2.png", 30, 20))
      .appendField(Blockly.MIXLY_QDP_JIESHOU)
    
        .appendField(Blockly.MIXLY_QDP_PIN)
      .appendField(new Blockly.FieldDropdown(QDP_Esp8266_Serial_Port_Pin_Dropdown), "pin1")
    .appendField(Blockly.MIXLY_BLUETOOTH_READ_STR);
     this.setOutput(true, String);
  this.setInputsInline(true);
  this.setTooltip(Blockly.MIXLY_QDP_serialjieshouMARK);//增加块的鼠标注释内容 
   }
 };

//串口有数据可读
Blockly.Blocks.qdp_ESP8266_serial_suju = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.HUE);
    this.appendDummyInput("")
      .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/communicate/qdp_txd.png", 30, 20))
      .appendField(Blockly.MIXLY_QDP_SUJU)
        .appendField(Blockly.MIXLY_QDP_PIN)
      .appendField(new Blockly.FieldDropdown(QDP_Esp8266_Serial_Port_Pin_Dropdown), "pin1")
         this.setOutput(true, Boolean);
  this.setInputsInline(true);
  this.setTooltip("软串有数据读取时");//增加块的鼠标注释内容 
   }
 };



Blockly.Blocks.QDProbot_comment_picture_change_3= {
  init: function() { 
  this.appendDummyInput()  
      .appendField("qdprobotESP8266_C02")
      .appendField(" W:")
      .appendField(new Blockly.FieldDropdown([["300","300"],["310","310"],["320","320"],["330","330"],["340","340"],["350","350"],["360","360"],["370","370"],["380","380"],["390","390"],["400","400"],["410","410"],["420","420"],["430","430"],["440","440"],["450","450"],["460","460"],["470","470"],["480","480"],["490","490"],["500","500"],["510","510"],["520","520"],["530","530"],["540","540"],["550","550"],["560","560"],["570","570"],["580","580"],["590","590"],["600","600"]]), "picture_width")
      .appendField(" H:")
      .appendField(new Blockly.FieldDropdown([["370","370"],["300","300"],["310","310"],["320","320"],["330","330"],["340","340"],["350","350"],["360","360"],["370","370"],["380","380"],["390","390"],["400","400"],["410","410"],["420","420"],["430","430"],["440","440"],["450","450"],["460","460"],["470","470"],["480","480"],["490","490"],["500","500"],["510","510"],["520","520"],["530","530"],["540","540"],["550","550"],["560","560"],["570","570"],["580","580"],["590","590"],["600","600"]]), "picture_height");
  this.appendDummyInput() 
      .appendField("Mixly：")
      .appendField(new Blockly.FieldTextInput("../../media/qdprobotESP8266/IOTscreen.jpg"), "picture_data");
  this.appendDummyInput('EMPTY')
      .setAlign(Blockly.ALIGN_CENTRE)  
      .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/IOTscreen.jpg", 250, 280, "*"), "picture_data1");
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(Blockly.Blocks.qdprobotESP8266.HUE);
  this.setTooltip();
  this.setHelpUrl("");
  },
  onchange: function(){
    var dropdown_picture_width = this.getFieldValue('picture_width');
    var dropdown_picture_height = this.getFieldValue('picture_height');
    var text_picture_data = this.getFieldValue('picture_data');
    if(text_picture_data)
    {
      if(text_picture_data.charAt(1) == ':' && text_picture_data.charAt(2) == '\\')
      {
        text_picture_data = text_picture_data.substring(2);
        var text_picture_data_1 = "";
        for(var i of text_picture_data)
        {
          if(i == '\\')
            text_picture_data_1+="/";
          else
            text_picture_data_1+=i;
        }
        text_picture_data = text_picture_data_1;
      }
      this.removeInput('EMPTY');
      var input = this.appendDummyInput('EMPTY');
      input.setAlign(Blockly.ALIGN_CENTRE);
      input.appendField(new Blockly.FieldImage(text_picture_data, dropdown_picture_width, dropdown_picture_height, "*"), "picture_data1");
    }
  }
};




Blockly.Blocks['QDP_colour_test'] = {
  init: function() {
    var field = new Blockly.FieldColour('#ff4040');
    field.setColours(
        ['#000000', '#ff0000', '#00ff00','#0000ff', '#ffff00', '#00ffff', '#ff00ff', '#c8c8c8',
        '#404040', '#c04040', '#40c040','#4040c0', '#c8c840', '#40c8c8', '#c840c8', '#ffffff',
        '#ffffff', '#fe0000', '#ffffff','#c8c8c8', '#404040', '#000000', '#286428', '#18ff18',
        '#18ff18', '#006400', '#00ff00','#ff0000', '#ffff00', '#00ff00', '#ff0000', '#ffff00',
        '#ffff00', '#00ffff', '#000000','#000000', '#000000', '#000000', '#000000', '#000000',
        '#004c58', '#70b8b8', '#3870a0','#d87058', '#986e58', '#7878b8', '#d09848', '#80487e',
        '#90ac58', '#ac6058', '#000000','#40a0a0', '#207484', '#d04828', '#80a028', '#5050a8',
        '#d07c10', '#600150', '#789828','#7030a0', '#000000', '#2070E8', '#000000' ,'#000000'
        ]);
    field.setColumns(8);
    this.appendDummyInput()
        .appendField('colour:')
        .appendField(field, 'COLOUR');
        
  }
};
//BMP180大气压强传感器(I2C) 采样频率类型
Blockly.Blocks.make_arduino_bmp180_oversampling= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([[Blockly.paj7620_ULTRALOWPOWER,"BMP085_ULTRALOWPOWER"],[Blockly.paj7620_STANDARD,"BMP085_STANDARD"],[Blockly.paj7620_HIGHRES,"BMP085_HIGHRES"],[Blockly.paj7620_ULTRAHIGHRES,"BMP085_ULTRAHIGHRES"]]), "type");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};
Blockly.Blocks.QDP_bmp180_begin= {
  init: function() { 
  this.appendValueInput("bmp180_oversampling")
      .setCheck(null)  
      .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/sensor/大气压力_1.png", 25, 25, "*"))
      .appendField(" BMP180(I2C)"+MSG['catEthernet_init'])
      .appendField(new Blockly.FieldTextInput("BMP"), "bmp180_name")
      .appendField(Blockly.MIXLY_FREQUENCY);
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(40);
  this.setTooltip(
    "1.功能:\n"
   +"->初始化BMP180、BMP085大气压强传感器(I2C)\n"
   +"2.I2C接线:\n"
   +"->SDA - A4，SCL - A5\n"
    );
  this.setHelpUrl("");
  }
};

Blockly.Blocks.QDP_bmp180_get_temperature_pressure= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/sensor/大气压力_1.png", 25, 25, "*"))
      .appendField("BMP180")
      .appendField(new Blockly.FieldTextInput("BMP"), "bmp180_name")
      .appendField(Blockly.paj7620_getdate)
      .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_TEMPERATURE,"Temperature"],[Blockly.MIXLY_Altitude,"Pressure"]]), "bmp180_get_temperature_pressure_data");
  this.setInputsInline(false);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip("BMP180大气压强传感器获取温度和气压，返回数据的类型为float和int32_t");
  this.setHelpUrl("");
  }
};


Blockly.Blocks.QDP_bmp180_get_altitude= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/sensor/大气压力_1.png", 25, 25, "*"))
      .appendField("BMP180")
      .appendField(new Blockly.FieldTextInput("BMP"), "bmp180_name")
      .appendField(Blockly.readAltitude);
  this.appendValueInput("bmp180_get_altitude_data")
      .setCheck(null)  
      .appendField(Blockly.sealevelPressure );
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(40);
  this.setTooltip("BMP180大气压强传感器获取高度，返回数据的类型为float\n海平面气压每天都会不同。如果要测得准确海拔高度请查询当日海平面的实际数值。");
  this.setHelpUrl("");
  }
};

//初始化PAJ7620手势传感器
Blockly.Blocks.QDP_paj7620_begin= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/sensor/手势识别.png", 25, 25, "*"))
      .appendField(Blockly.paj7620_sensor+MSG['catEthernet_init']+"PAJ7620(I2C)");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(60);
  this.setTooltip(
    "初始化PAJ7620手势传感器(I2C)\n"
   +"I2C接线:\n"
   +"①Arduino Uno:SDA - A4，SCL - A5\n"
   );
  this.setHelpUrl("");
  }
};

//PAJ7620手势传感器 手势数据
Blockly.Blocks.QDP_paj7620_data= {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([[Blockly.paj7620_FORWARD,'0'],[Blockly.paj7620_BACKWARD,'1'],[Blockly.paj7620_LEFT,'2'],[Blockly.paj7620_RIGHT,'3'],[Blockly.paj7620_UP,'4'],[Blockly.paj7620_DOWN ,'5'],[Blockly.paj7620_CLOCKWISE,'6'],[Blockly.paj7620_COUNT_CLOCKWISE,'7'],[Blockly.paj7620_WAVE,'8']]), "data");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(60);
  this.setTooltip("PAJ7620手势传感器 手势数据");
  this.setHelpUrl("");
  }
};
//点阵屏预设图案
Blockly.Blocks.QDP_Matrix_img = {
  init: function () {
    this.appendDummyInput("")
      .appendField(Blockly.MIXLY_MAX7219_IMG)
      .appendField(new Blockly.FieldDropdown([
        ["↑", "18181818db7e3c18"],
        ["↓", "183c7edb18181818"],
        ["←", "080c06ffff060c08"],
        ["→", "103060ffff603010"],
        ["♥", "183c7effffffe742"],
        ["▲", "00000000ff7e3c18"],
        ["▼", "183c7eff00000000"],
        ["◄", "080c0e0f0f0e0c08"],
        ["►", "103070f0f0703010"],
        ["△", "00000000ff422418"],
        ["▽", "182442ff00000000"],
        ["☺", "3c4299a581a5423c"],
        ["○", "3c4281818181423c"],
        ["◑", "3c72f1f1f1f1723c"],
        ["◐", "3c4e8f8f8f8f4e3c"],
        ["￥", "101010ff10ff2442"],
        ["Χ", "8142241818244281"],
        ["√", "0000010204885020"],
        ["□", "007e424242427e00"],
        ["▣", "007e425a5a427e00"],
        ["◇", "1824428181422418"],
        ["♀", "083e081c2222221c"],
        ["♂", "0e1b111b9ea0c0f0"],
        ["♪", "061f1e1010d07030"],
        ["✈", "203098ffff983020"],
        ["卍", "00f21212fe90909e"],
        ["卐", "009e9090fe1212f2"],
        ["|", "1010101010101010"],
        ["—", "000000ff00000000"],
        ["╱", "0102040810204080"],
        ["＼", "8040201008040201"],
        ["大", "41221408087f0808"],
        ["中", "1010fe9292fe1010"],
        ["小", "0e08492a2a080808"],
        ["米", "00925438fe385492"],
        ["正", "7f0a0a3a08087f00"],
        ["囧", "ffa5a5bdc3a5a5ff"]
      ]), "img_");
    this.setOutput(true);
    this.setTooltip('');
    this.setColour(Blockly.Blocks.display.HUE);
    this.setTooltip(Blockly.MIXLY_TOOPTIP_Matrix_MAX7219_PREDEFARR);
    this.setHelpUrl('');
  }
};

Blockly.Blocks['qdp_inout_highlow'] = {
 init: function() {
  this.setColour(Blockly.Blocks.qdprobotESP8266.contor);
  this.appendDummyInput("")
  .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_ON, "HIGH"], [Blockly.MIXLY_OFF, "LOW"]]), 'BOOL')
  this.setOutput(true, Boolean);
  this.setTooltip(Blockly.MIXLY_TOOLTIP_INOUT_HIGHLOW);
}
};


//彩屏刷新显示
Blockly.Blocks.QDP_ESP8266_display_samll_refresh_display = {
  init: function() {
    this.setColour(34);
    this.appendDummyInput("").appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/oled/qdp_oleddisp2.png", 30, 20))
    .appendField(Blockly.QDP_display_samll_refresh_display)
    .appendField(new Blockly.FieldDropdown(QDP_Esp8266_Double_Digit_Pin_Dropdown), "PIN");
    this.appendStatementInput('DO').appendField('');
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip("");
  }
};



Blockly.Blocks.qdp_ESP8266_display_TM1637_init = {
  init: function () {
    this.setColour(Blockly.Blocks.display.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_4DIGITDISPLAY_TM1637_INIT)
    .appendField(Blockly.MIXLY_PIN)
    .appendField(new Blockly.FieldDropdown(QDP_Esp8266_Double_Digit_Pin_Dropdown), "PIN");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip(Blockly.MIXLY_4DIGITDISPLAY_TM1637_TIP);
    this.setHelpUrl('');
  }
};

Blockly.Blocks.QDP_ESP8266_group_lcd_init2 = {
  init: function () {
    this.setColour(Blockly.Blocks.display.HUE);
    this.appendValueInput('device')
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.MIXLY_SETUP)
    .appendField(Blockly.MIXLY_DF_LCD)
    .appendField(new Blockly.FieldDropdown([['1602', '16,2'], ['2004', '20,4']]), 'TYPE')
    .appendField(new Blockly.FieldTextInput('mylcd'), 'VAR')
    .appendField(Blockly.MIXLY_LCD_ADDRESS);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_PIN)
    .appendField(new Blockly.FieldDropdown(QDP_Esp8266_Double_Digit_Pin_Dropdown), "PIN");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_LCD_INIT2);
  }
};

//列表
Blockly.Blocks['qdp_create_list'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.blockpy_MIXLY_SPLITBYDOU)
        .appendField(new Blockly.FieldTextInput("myList"), "list_name")
        .appendField(Blockly.MIXLY_MICROBIT_PY_CONTORL_GET_TYPE)
        .appendField(new Blockly.FieldDropdown([["int","int"], ["long","long"], ["float","float"], ["char","char"], ["String","String"]]), "type");
    this.setColour(Blockly.Blocks.qdprobotESP8266.List);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);   
    this.setTooltip("列表初始化，以指定的数据类型及列表名声明列表");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['qdp_list_length'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.MIXLY_MICROBIT_TYPE_LIST+Blockly.MIXLY_I2C_SLAVE_WRITE_ARRAY_ARRAYLENGTH)
        .appendField(new Blockly.FieldTextInput("myList"), "list_name");
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.qdprobotESP8266.List);
 this.setTooltip("返回列表的长度（即数据的项数）");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['qdp_list_item'] = {
  init: function() {
    this.appendValueInput("item")
        .setCheck(null)
        .appendField(Blockly.MIXLY_MICROBIT_TYPE_LIST)
        .appendField(new Blockly.FieldTextInput("myList"), "list_name")
        .appendField(Blockly.LANG_LISTS_GET_INDEX1);
    this.appendDummyInput()
        .appendField(Blockly.LANG_LISTS_GET_INDEX2);
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.qdprobotESP8266.List);
 this.setTooltip("返回指定列表项的值（0项为第一项）");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['qdp_list_assignment'] = {
  init: function() {
    this.appendValueInput("item")
        .setCheck(null)
        .appendField(Blockly.MIXLY_MICROBIT_TYPE_LIST)
        .appendField(new Blockly.FieldTextInput("myList"), "list_name")
        .appendField(Blockly.LANG_LISTS_GET_INDEX1);
    this.appendValueInput("value")
        .setCheck(null)
        .appendField(Blockly.LANG_LISTS_SET_INDEX2);
    this.appendDummyInput();
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.qdprobotESP8266.List);
 this.setTooltip("对指定的列表项赋值");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['qdp_add_data_to_the_list'] = {
  init: function() {
    this.appendValueInput("data")
        .setCheck(null)
        .appendField(Blockly.MIXLY_MICROBIT_TYPE_LIST)
        .appendField(new Blockly.FieldTextInput("myList"), "list_name")
        .appendField(Blockly.MIXLY_blockpy_set_add+Blockly.MIXLY_SD_DATA);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([[Blockly.STARTSWITH,"push_front"], [Blockly.ENDSWITH,"push_back"]]), "type");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.qdprobotESP8266.List);
 this.setTooltip("列表指定规则添加数据项（从首端或尾端添加）");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['qdp_list_clear'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.MIXLY_MICROBIT_JS_LIST_CLEAR+Blockly.MIXLY_MICROBIT_TYPE_LIST)
        .appendField(new Blockly.FieldTextInput("myList"), "list_name");    
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.qdprobotESP8266.List);
 this.setTooltip("清除整个列表");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['qdp_clear_list_item'] = {
  init: function() {
    this.appendValueInput("item")
        .setCheck(null)
        .appendField(Blockly.MIXLY_MICROBIT_JS_LIST_CLEAR+Blockly.MIXLY_MICROBIT_TYPE_LIST)
        .appendField(new Blockly.FieldTextInput("myList"), "list_name")
        .appendField(Blockly.LANG_LISTS_GET_INDEX1);
    this.appendDummyInput()
        .appendField(Blockly.LANG_LISTS_GET_INDEX2);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.qdprobotESP8266.List);
 this.setTooltip("删除指定的列表项");
 this.setHelpUrl("");
  }
};

//MAX7219点阵初始化
Blockly.Blocks['qdp_lattice_max7219'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.IOT_SCREEN+Blockly.MIXLY_SETUP);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("初始化点阵屏");
 this.setHelpUrl("");
  }
};

//MAX7219点阵显示
Blockly.Blocks['qdp_lattice_max7219_display'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.IOT_SCREEN+Blockly.Msg.OLEDDISPLAY);
    this.appendValueInput("display")
        .setCheck(null);
    this.appendDummyInput();
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("点阵屏居左显示文本");
 this.setHelpUrl("");
  }
};

//MAX7219点阵显示效果
Blockly.Blocks['qdp_lattice_effect'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("")
        .appendField(new Blockly.FieldDropdown([[Blockly.PA_PRINT,"PA_PRINT"],[Blockly.PA_MESH,"PA_MESH"], [Blockly.PA_SCROLL_LEFT,"PA_SCROLL_LEFT"], [Blockly.PA_RANDOM,"PA_RANDOM"], [Blockly.PA_OPENING,"PA_OPENING"], [Blockly.PA_OPENING_CURSOR,"PA_OPENING_CURSOR"], [Blockly.PA_CLOSING,"PA_CLOSING"], [Blockly.PA_CLOSING_CURSOR,"PA_CLOSING_CURSOR"], [Blockly.PA_BLINDS,"PA_BLINDS"], [Blockly.PA_DISSOLVE,"PA_DISSOLVE"], [Blockly.PA_SCROLL_UP,"PA_SCROLL_UP"], [Blockly.PA_SCROLL_DOWN,"PA_SCROLL_DOWN"], [Blockly.PA_SCROLL_UP_LEFT,"PA_SCROLL_UP_LEFT"], [Blockly.PA_SCROLL_UP_RIGHT,"PA_SCROLL_UP_RIGHT"], [Blockly.PA_SCROLL_DOWN_LEFT,"PA_SCROLL_DOWN_LEFT"], [Blockly.PA_SCROLL_DOWN_RIGHT,"PA_SCROLL_DOWN_RIGHT"], [Blockly.PA_SCAN_HORIZ,"PA_SCAN_HORIZ"], [Blockly.PA_SCAN_HORIZX,"PA_SCAN_HORIZX"], [Blockly.PA_SCAN_VERT,"PA_SCAN_VERT"], [Blockly.PA_SCAN_VERTX,"PA_SCAN_VERTX"], [Blockly.PA_GROW_UP,"PA_GROW_UP"], [Blockly.PA_GROW_DOWN,"PA_GROW_DOWN"], [Blockly.PA_NO_EFFECT,"PA_NO_EFFECT"], [Blockly.PA_SPRITE,"PA_SPRITE"]]), "effect");
    this.setOutput(true, null);
    this.setColour(270);
 this.setTooltip("点阵屏文本显示效果（其中精灵动画效果需指定精灵不能单独使用）");
 this.setHelpUrl("");
  }
};


//MAX7219点阵居中显示1
Blockly.Blocks['qdp_lattice_centered_display1'] = {
  init: function() {
    this.appendValueInput("Display_content")
        .setCheck(null)
        .appendField(Blockly.IOT_SCREEN+Blockly.Msg.OLEDDISPLAY);
    this.appendValueInput("Display_speed")
        .setCheck(null)
        .appendField(Blockly.mixpy_PYLAB_BAR_ALIGN)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.TEXT_CENTER,"PA_CENTER"], [Blockly.Msg.TEXT_LJUST,"PA_LEFT"], [Blockly.Msg.TEXT_RJUST,"PA_RIGHT"]]), "alignment")
        .appendField(Blockly.Msg.OLEDDISPLAY+Blockly.MIXLY_SPEED);
    this.appendValueInput("display_time")
        .setCheck(null)
        .appendField(Blockly.MIXLY_SHOW_FACE_TIME);
    this.appendValueInput("Enter_effect")
        .setCheck(null)
        .appendField(Blockly.ENTRY_EFFECT);
    this.appendValueInput("Exit_effect")
        .setCheck(null)
        .appendField(Blockly.EXIT_EFFECT);
    this.appendDummyInput();
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("以指定的显示效果及对齐方式显示文本（显示速度及显示时间可调）");
 this.setHelpUrl("");
  }
};

//MAX7219显示亮度
Blockly.Blocks['qdp_lattice_brightness'] = {
  init: function() {
    this.appendValueInput("brightness")
        .setCheck(null)
        .appendField(Blockly.IOT_SCREEN)
        .appendField(Blockly.MIXLY_SETTING+Blockly.MIXLY_BRIGHTNESS);
    this.appendDummyInput();
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("设置点阵屏显示亮度范围0-15");
 this.setHelpUrl("");
  }
};


//动画完成状态
Blockly.Blocks['qdp_lattice_finished_condition'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.ANIMATION_COMPLETION_STATUS);
    this.setOutput(true, null);
    this.setColour(270);
 this.setTooltip("返回动画或显示的状态（显示或动画完成返回1反之返回0）");
 this.setHelpUrl("");
  }
};

//点阵清屏
Blockly.Blocks['qdp_lattice_displayClear'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.IOT_SCREEN)
        .appendField(Blockly.MIXLY_DISPLAY_MATRIX_CLEAR);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("点阵屏清屏");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['qdp_area_clear_screen'] = {
  init: function() {
    this.appendValueInput("region")
        .setCheck(null)
        .appendField(Blockly.IOT_SCREEN)
        .appendField(Blockly.REGION);
    this.appendDummyInput()
        .appendField(Blockly.MIXLY_DISPLAY_MATRIX_CLEAR);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("清除指定区域");
 this.setHelpUrl("");
  }
};

//MAX7219点阵精灵
Blockly.Blocks['qdp_lattice_image_sprite'] = {
  init: function() {
    this.appendValueInput("width")
        .setCheck(null)
        .appendField(Blockly.SPRITE_WIDTH);
    this.appendValueInput("number_of_turns")
        .setCheck(null)
        .appendField(Blockly.SPRITE_FRAMES);
    this.appendDummyInput()
        .appendField(Blockly.ELF_NAME)
        .appendField(new Blockly.FieldTextInput("Image_sprite"), "name")
        .appendField(Blockly.SPRITE_DATA)
        .appendField(new Blockly.FieldTextInput("0x00, 0x81, 0xc3, 0xe7, 0xff, 0x7e, 0x7e, 0x3c,0x00, 0x42, 0xe7, 0xe7, 0xff, 0xff, 0x7e, 0x3c,0x24, 0x66, 0xe7, 0xff, 0xff, 0xff, 0x7e, 0x3c,0x3c, 0x7e, 0xff, 0xff, 0xff, 0xff, 0x7e, 0x3c,0x24, 0x66, 0xe7, 0xff, 0xff, 0xff, 0x7e, 0x3c,0x00, 0x42, 0xe7, 0xe7, 0xff, 0xff, 0x7e, 0x3c,"), "data");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("自定义精灵动画显示效果数据");
 this.setHelpUrl("https://arduinoplusplus.wordpress.com/2018/04/19/parola-a-to-z-sprite-text-effects/");
  }
};

//MAX7219点阵精灵动画
Blockly.Blocks['qdp_lattice_image_sprite_animation'] = {
  init: function() {
    this.appendValueInput("animation_start_wizard")
        .setCheck(null)
        .appendField(Blockly.INITIALIZE_SPRITE_ANIMATION)
        .appendField(Blockly.ANIMATION_START_SPRITE);
    this.appendValueInput("width")
        .setCheck(null)
        .appendField(Blockly.SPRITE_WIDTH);
    this.appendValueInput("number_of_turns")
        .setCheck(null)
        .appendField(Blockly.SPRITE_FRAMES);
    this.appendValueInput("animation_end_wizard")
        .setCheck(null)
        .appendField(Blockly.ANIMATION_END_SPRITE);
    this.appendValueInput("width1")
        .setCheck(null)
        .appendField(Blockly.SPRITE_WIDTH);
    this.appendValueInput("number_of_turns1")
        .setCheck(null)
        .appendField(Blockly.SPRITE_FRAMES);
    this.appendDummyInput();
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("初始化精灵动画");
 this.setHelpUrl("https://majicdesigns.github.io/MD_Parola/class_m_d___parola.html#a7407455c739aa60760b83d4f82142489");
  }
};


//MAX7219点阵滚动显示
Blockly.Blocks['qdp_lattice_max7219_Scroll_display'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.IOT_SCREEN+Blockly.MIXLY_MAX7219_PUTSTR);
    this.appendValueInput("str")
        .setCheck(null);
    this.appendValueInput("speed")
        .appendField(Blockly.MIXLY_SPEED)
        .setCheck(null);
    this.appendDummyInput();
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("以指定速度滚动显示文本");
 this.setHelpUrl("https://majicdesigns.github.io/MD_Parola/class_m_d___parola.html#a53b4c922a283ce2304a91e970e56c45d");
  }
};


//MAX7219点阵精灵动画
Blockly.Blocks['qdp_lattice_elf_animation'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.SPRITE_ANIMATION)
        .appendField(new Blockly.FieldDropdown([[Blockly.PACMAN1,"1"], [Blockly.PACMAN2,"2"], [Blockly.WAVE,"3"], [Blockly.ROLL1,"4"], [Blockly.ROLL2,"5"], [Blockly.LINES,"6"], [Blockly.ARROW1,"7"], [Blockly.ARROW2,"8"], [Blockly.SAILBOAT,"9"], [Blockly.STEAMBOAT,"10"], [Blockly.HEART,"11"], [Blockly.INVADER,"12"], [Blockly.ROCKET,"13"], [Blockly.FIREBALL,"14"]]), "animation");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("预设精灵动画数据");
 this.setHelpUrl("");
  }
};

//MAX7219点阵预设精灵动画
Blockly.Blocks['qdp_lattice_preset_animation'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.SPRITE_DISPLAY_EFFECT)
        .appendField(new Blockly.FieldDropdown([[Blockly.PACMAN1,"pacman1"], [Blockly.PACMAN2,"pacman2"], [Blockly.WAVE,"wave"], [Blockly.ROLL1,"roll1"], [Blockly.ROLL2,"roll2"], [Blockly.LINES,"lines"], [Blockly.ARROW1,"arrow1"], [Blockly.ARROW2,"arrow2"], [Blockly.SAILBOAT,"sailboat"], [Blockly.STEAMBOAT,"steamboat"], [Blockly.HEART,"heart"], [Blockly.INVADER,"invader"], [Blockly.ROCKET,"rocket"], [Blockly.FIREBALL,"fireball"]]), "animation");
    this.setOutput(true, null);
    this.setColour(270);
 this.setTooltip("预设精灵动画");
 this.setHelpUrl("");
  }
};

//max7219设置单个点状态
Blockly.Blocks['qdp_lattice_max7219_setpoint'] = {
  init: function() {
    this.appendValueInput("abscissa")
        .setCheck(null)
        .appendField(Blockly.IOT_SCREEN)
        .appendField(Blockly.OLED_DRAWPIXEL)
        .appendField(Blockly.OLED_POSX);
    this.appendValueInput("ordinate")
        .setCheck(null)
        .appendField(Blockly.OLED_POSY);
    this.appendValueInput("status")
        .setCheck(null)
        .appendField(Blockly.MIXLY_STAT);
    this.appendDummyInput();
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("设置点阵单个点的状态");
 this.setHelpUrl("https://majicdesigns.github.io/MD_MAX72XX/class_m_d___m_a_x72_x_x.html#a1aaabf8c4df556c3e9a04a1319234261");
  }
};

//max7219显示位图
Blockly.Blocks['qdp_lattice_max7219_bitmap'] = {
  init: function() {
    this.appendValueInput("abscissa")
        .setCheck(null)
        .appendField(Blockly.IOT_SCREEN)
        .appendField(Blockly.OLED_BITMAP)
        .appendField(Blockly.OLED_POSX);
    this.appendValueInput("number_of_columns")
        .setCheck(null)
        .appendField(Blockly.MIXLY_WIDTH);
    this.appendValueInput("bitmap")
        .setCheck(null)
        .appendField(Blockly.OLED_BITMAP_NAME);
    this.appendDummyInput();
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("点阵屏以指定的坐标及位图名称显示位图");
 this.setHelpUrl("https://majicdesigns.github.io/MD_MAX72XX/class_m_d___m_a_x72_x_x.html#a1aaabf8c4df556c3e9a04a1319234261");
  }
};

//定义位图
Blockly.Blocks['qdp_lattice_max7219_definition_bitmap'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://s2.ax1x.com/2020/01/04/lwTCa4.png",30, 40))
        .appendField(Blockly.OLED_BITMAP_NAME)
        .appendField(new Blockly.FieldTextInput("bitmap"), "name")
        .appendField(Blockly.OLED_BITMAP_DATA)
        .appendField(new Blockly.FieldTextInput("0x00,0x18,0x18,0x7E,0x7E,0x18,0x18,0x00"), "data");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("自定义点阵显示位图数据");
 this.setHelpUrl("https://pjrp.github.io/MDParolaFontEditor");
  }
};

//画线段
Blockly.Blocks['qdp_lattice_mx_drawline'] = {
  init: function() {
    this.appendValueInput("origin_abscissa")
        .setCheck(null)
        .appendField(Blockly.IOT_SCREEN)
        .appendField(Blockly.OLED_DRAWLINE)
        .appendField(Blockly.OLED_START_X);
    this.appendValueInput("starting_point_ordinate")
        .setCheck(null)
        .appendField(Blockly.OLED_START_Y);
    this.appendValueInput("end_abscissa")
        .setCheck(null)
        .appendField(Blockly.OLED_END_X);
    this.appendValueInput("end_ordinate")
        .setCheck(null)
        .appendField(Blockly.OLED_END_Y);
    this.appendValueInput("status")
        .setCheck(null)
        .appendField(Blockly.MIXLY_STAT);
    this.appendDummyInput();
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("点阵屏画线");
 this.setHelpUrl("");
  }
};
//点阵屏显示_图案数组
Blockly.Blocks.qdp_lattice_display_Matrix_LedArray1 = {
  init: function() {
    this.setColour(270);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_DISPLAY_MATRIX_ARRAYVAR)
    .appendField(new Blockly.FieldTextInput("bitmap"), "VAR");
    this.appendDummyInput("")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a81")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a82")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a83")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a84")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a85")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a86")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a87")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a88");
    this.appendDummyInput("")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a71")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a72")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a73")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a74")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a75")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a76")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a77")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a78");
    this.appendDummyInput("")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a61")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a62")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a63")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a64")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a65")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a66")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a67")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a68");
    this.appendDummyInput("")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a51")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a52")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a53")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a54")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a55")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a56")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a57")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a58");
    this.appendDummyInput("")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a41")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a42")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a43")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a44")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a45")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a46")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a47")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a48");
    this.appendDummyInput("")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a31")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a32")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a33")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a34")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a35")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a36")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a37")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a38");
    this.appendDummyInput("")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a21")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a22")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a23")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a24")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a25")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a26")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a27")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a28");
    this.appendDummyInput("")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a11")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a12")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a13")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a14")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a15")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a16")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a17")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a18");
    this.setOutput(true, Number);
    this.setTooltip("定义点阵显示位图数据");
}
};

//max7219获取点状态
Blockly.Blocks['qdp_max7219_point_status'] = {
  init: function() {
    this.appendValueInput("abscissa")
        .setCheck(null)
        .appendField(Blockly.IOT_SCREEN)
        .appendField(Blockly.POINT_STATUS)
        .appendField(Blockly.OLED_POSX);
    this.appendValueInput("ordinate")
        .setCheck(null)
        .appendField(Blockly.OLED_POSY);
    this.appendDummyInput()
        .appendField("");
    this.setOutput(true, null);
    this.setColour(270);
 this.setTooltip("获取点阵某点的显示状态，亮返回为1灭返回0");
 this.setHelpUrl("");
  }
};


//MAX7219点阵区域初始化
Blockly.Blocks['region_qdp_lattice_max7219'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.IOT_SCREEN+Blockly.MIXLY_SETUP)
        .appendField(Blockly.REGION);
    this.appendValueInput("region")
    .setCheck(null);
    this.appendDummyInput()
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("以指定的区域数量初始化点阵，用于划分点阵不同区域显示不同数据");
 this.setHelpUrl("");
  }
};

//MAX7219区域显示亮度
Blockly.Blocks['region_qdp_lattice_brightness'] = {
  init: function() {
    this.appendValueInput("region")
        .appendField(Blockly.IOT_SCREEN)
        .appendField(Blockly.REGION);
    this.appendValueInput("brightness")
        .appendField(Blockly.MIXLY_SETTING+Blockly.MIXLY_BRIGHTNESS);
    this.appendDummyInput();
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("设置点阵局部显示亮度范围0-15");
 this.setHelpUrl("");
  }
};

//区域动画完成状态
Blockly.Blocks['region_qdp_lattice_finished_condition'] = {
  init: function() {
    this.appendValueInput("region")
        .appendField(Blockly.REGION);
    this.appendDummyInput()
        .appendField(Blockly.ANIMATION_COMPLETION_STATUS)
    this.setOutput(true, null);
    this.setColour(270);
 this.setTooltip("返回点阵局部动画或显示的状态（显示或动画完成返回1反之返回0）");
 this.setHelpUrl("");
  }
};

//区域显示文本
Blockly.Blocks['region_qdp_lattice_centered_display'] = {
  init: function() {
    this.appendValueInput("Display_content")
        .setCheck(null)
        .appendField(Blockly.IOT_SCREEN+Blockly.Msg.OLEDDISPLAY);
    this.appendValueInput("region")
        .setCheck(null)
        .appendField(Blockly.REGION);
    this.appendValueInput("Display_speed")
        .appendField(Blockly.mixpy_PYLAB_BAR_ALIGN)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.TEXT_CENTER,"PA_CENTER"], [Blockly.Msg.TEXT_LJUST,"PA_LEFT"], [Blockly.Msg.TEXT_RJUST,"PA_RIGHT"]]), "alignment")
        .appendField(Blockly.Msg.OLEDDISPLAY+Blockly.MIXLY_SPEED);
    this.appendValueInput("display_time")
        .setCheck(null)
        .appendField(Blockly.MIXLY_SHOW_FACE_TIME);
    this.appendValueInput("Enter_effect")
        .setCheck(null)
        .appendField(Blockly.ENTRY_EFFECT);
    this.appendValueInput("Exit_effect")
        .setCheck(null)
        .appendField(Blockly.EXIT_EFFECT);
    this.appendDummyInput();
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("以指定的显示效果及对齐方式局部显示文本（显示速度及显示时间可调）");
 this.setHelpUrl("");
  }
};

//初始化区域精灵动画
Blockly.Blocks['region_qdp_lattice_image_sprite_animation'] = {
  init: function() {
    this.appendValueInput("region")
        .setCheck(null)
        .appendField(Blockly.INITIALIZE_SPRITE_ANIMATION)
        .appendField(Blockly.REGION);
    this.appendValueInput("animation_start_wizard")
        .setCheck(null)
        .appendField(Blockly.ANIMATION_START_SPRITE);
    this.appendValueInput("width")
        .setCheck(null)
        .appendField(Blockly.SPRITE_WIDTH);
    this.appendValueInput("number_of_turns")
        .setCheck(null)
        .appendField(Blockly.SPRITE_FRAMES);
    this.appendValueInput("animation_end_wizard")
        .setCheck(null)
        .appendField(Blockly.ANIMATION_END_SPRITE);
    this.appendValueInput("width1")
        .setCheck(null)
        .appendField(Blockly.SPRITE_WIDTH);
    this.appendValueInput("number_of_turns1")
        .setCheck(null)
        .appendField(Blockly.SPRITE_FRAMES);
    this.appendDummyInput();
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("初始化区域精灵动画");
 this.setHelpUrl("https://majicdesigns.github.io/MD_Parola/class_m_d___parola.html#a7407455c739aa60760b83d4f82142489");
  }
};

//MAX7219点阵分区初始化
Blockly.Blocks['region_qdp_partition_display_initialization'] = {
  init: function() {
    this.appendValueInput("region")
        .setCheck(null)
        .appendField(Blockly.MIXLY_SETUP+Blockly.REGION);
    this.appendValueInput("start")
        .setCheck(null)
        .appendField(Blockly.START+Blockly.MIXLY_MAX7219_NO);
    this.appendValueInput("end")
        .setCheck(null)
        .appendField(Blockly.END+Blockly.MIXLY_MAX7219_NO);
    this.appendDummyInput();
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("指定起始点阵序号和终止点阵序号进行多区域显示初始化");
 this.setHelpUrl("");
  }
};

//2020.5.16 BY ZK
//ESP一键配网
Blockly.Blocks.QDP_esp8266_smartConfig = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.blynk);
    this.appendDummyInput("").appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/webpage/axk.png", 60, 60)).appendField(Blockly.blynk_smartconfig );
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("需要关注安可信公众号进行一键配网，可以与网页编辑一起使用");
    this.setHelpUrl();
  }
};

Blockly.Blocks.QDP_esp8266_smartConfig_ = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.blynk);
    this.appendDummyInput("").appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/webpage/qdprobot Network Configuration.png", 60, 60)).appendField("Web"+Blockly.blynk_smartconfig );
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("连接配网热点自动打开网页配置无需关注公众号，不可与网页编辑一起使用。(仅单独使用！配网热点名qdprobot，密码12345678)");
    this.setHelpUrl("http://192.168.4.1");
  }
};

//配置访问点
Blockly.Blocks.QDP_esp8266_config_access_point = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.blynk);
    this.appendDummyInput("").appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/webpage/wifi.png", 20, 20)).appendField(Blockly.QDP_esp8266_config_access_point );
    this.appendValueInput("ssid").appendField(Blockly.blynk_WIFI_SSID).setCheck(String).setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput("pwd").appendField(Blockly.blynk_WIFI_PASS).setCheck(String).setAlign(Blockly.ALIGN_RIGHT);
    this.appendDummyInput();
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("开启指定名称和密码的WiFi热点，默认IP地址为192.168.4.1");
    this.setHelpUrl("http://192.168.4.1");
  }
};

//带IP配置访问点
Blockly.Blocks.QDP_esp8266_config_access_point_IP = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.blynk);
    this.appendDummyInput("").appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/webpage/wifi.png", 30, 30)).appendField(Blockly.QDP_esp8266_config_access_point + '&IP' ).setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput("ssid").appendField(Blockly.blynk_WIFI_SSID).setCheck(String).setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput("pwd").appendField(Blockly.blynk_WIFI_PASS).setCheck(String).setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput("ip").appendField('IP').setCheck(String).setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput("subnet").appendField(Blockly.blynk_WIFI_SUBNET).setCheck(String).setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput("gateway").appendField(Blockly.blynk_WIFI_GATEWAY).setCheck(String).setAlign(Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("");
    this.setHelpUrl();
  }
};

//配置站点模式
Blockly.Blocks.QDP_esp8266_config_station = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.blynk);
    this.appendDummyInput("").appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/webpage/wifi.png", 20, 20)).appendField(Blockly.QDP_esp8266_config_station );
    this.appendValueInput("ssid").appendField(Blockly.blynk_WIFI_SSID).setCheck(String).setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput("pwd").appendField(Blockly.blynk_WIFI_PASS).setCheck(String).setAlign(Blockly.ALIGN_RIGHT);
    this.appendDummyInput();
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("连接到指定的WiFi网络，IP由路由器自动分配");
    this.setHelpUrl();
  }
};

//配置站点模式IP
Blockly.Blocks.QDP_esp8266_config_station_IP = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.blynk);
    this.appendDummyInput("").appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/webpage/wifi.png", 30, 30)).appendField(Blockly.QDP_esp8266_config_station + '&IP' );
    this.appendValueInput("ssid").appendField(Blockly.blynk_WIFI_SSID).setCheck(String).setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput("pwd").appendField(Blockly.blynk_WIFI_PASS).setCheck(String).setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput("ip").appendField('IP').setCheck(String).setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput("subnet").appendField(Blockly.blynk_WIFI_SUBNET).setCheck(String).setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput("gateway").appendField(Blockly.blynk_WIFI_GATEWAY).setCheck(String).setAlign(Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("");
    this.setHelpUrl();
  }
};

//配置多站点模式
Blockly.Blocks.QDP_esp8266_config_multi_station = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.blynk);
    this.appendDummyInput("").appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/webpage/wifi.png", 30, 30)).appendField(Blockly.QDP_esp8266_config_multi_station );
    this.appendValueInput("ssid").appendField(Blockly.blynk_WIFI_SSID).setCheck(String).setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput("pwd").appendField(Blockly.blynk_WIFI_PASS).setCheck(String).setAlign(Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("");
    this.setHelpUrl();
  }
};

//配置站点模式IP
Blockly.Blocks.QDP_esp8266_config_multi_station_IP = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.blynk);
    this.appendDummyInput("").appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/webpage/wifi.png", 30, 30)).appendField(Blockly.QDP_esp8266_config_multi_station + '&IP' );
    this.appendValueInput("ssid").appendField(Blockly.blynk_WIFI_SSID).setCheck(String).setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput("pwd").appendField(Blockly.blynk_WIFI_PASS).setCheck(String).setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput("ip").appendField('IP').setCheck(String).setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput("subnet").appendField(Blockly.blynk_WIFI_SUBNET).setCheck(String).setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput("gateway").appendField(Blockly.blynk_WIFI_GATEWAY).setCheck(String).setAlign(Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("");
    this.setHelpUrl();
  }
};

//WIFI重连
Blockly.Blocks['QDP_esp8266_reconnect_wifi'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.QDP_esp8266_reconnect_wifi);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.qdprobotESP8266.blynk);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//配置wifi模式选单
Blockly.Blocks.QDP_esp8266_config_wifi_mode_dropdown = {
  init: function() { 
  this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown([['OFF','OFF'],['AP','AP'],['STA','STA']]), "mode");
  this.setInputsInline(true);
  this.setOutput(true, null);
  this.setColour(60);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

//WIFI模式
Blockly.Blocks['QDP_esp8266_config_wifi_mode'] = {
  init: function() {
    this.appendValueInput("mode")
        .appendField(Blockly.QDP_esp8266_config_wifi_mode);

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.qdprobotESP8266.blynk);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//配置域名
Blockly.Blocks['QDP_esp8266_config_domaine_name_mDNS'] = {
  init: function() {
    this.appendValueInput("domaine_name")
        .appendField(Blockly.QDP_esp8266_config_domaine_name_mDNS+' http://');
    this.appendDummyInput();  
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.qdprobotESP8266.blynk);
    this.setTooltip("配置域名通过域名访问硬件点击帮助可自动跳转到域名对应的网页");
  },
    onchange: function() {
    var data = Blockly.Arduino.valueToCode(this, 'domaine_name',Blockly.Arduino.ORDER_ASSIGNMENT) || 'qdprobot';
    data = data.replace(/\"/g, "")
    this.setHelpUrl("http://"+data);
  },
};

//WIFI IP
Blockly.Blocks['QDP_esp8266_wifi_IP'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('ESP IP Address');
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.qdprobotESP8266.blynk);
 this.setTooltip("返回所连接的路由器当前分配的IP地址");
 this.setHelpUrl("");
  }
};

//网页编辑初始化
Blockly.Blocks.QDP_ESP8266_web_page_init = {
  init: function() {
    this.setColour(34);
    this.appendDummyInput("").appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/webpage/webpage.png", 30, 30))
    .appendField(Blockly.QDP_ESP8266_web_page_init)
    this.appendStatementInput('DO').appendField('');
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip("注：请将ArduinoJson库更新到6.8bate版本，否则不能用！\n打开Mixly内的ArduinoIDE/工具/库管理/ArduinoJson/选6.8bate安装");
  }
};


var web_page_add_dropdown = [
[Blockly.NumberCard,'NumberCard'],
[Blockly.HumidityCard,'HumidityCard'],
[Blockly.StatusCard,'StatusCard'],
[Blockly.ButtonCard,'ButtonCard'],
[Blockly.GaugeChart,'GaugeChart']
];
//网页插入元素
Blockly.Blocks.QDP_ESP8266_web_page_add = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.blynk);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/webpage/webpage.png", 30, 30))
    .appendField(Blockly.QDP_web_page+Blockly.QDP_add );
    this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown(web_page_add_dropdown), "addType");
    this.appendValueInput("id").setCheck(Number).appendField('ID').setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput("name").setCheck(String).appendField(Blockly.QDP_name).setAlign(Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip("名称支持中文");
    this.setHelpUrl();
  }
};
//网页插入温度元素
Blockly.Blocks.QDP_ESP8266_web_page_addTemperatureCard = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.blynk);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/webpage/webpage.png", 30, 30))
    .appendField(Blockly.QDP_web_page+Blockly.QDP_add +Blockly.TemperatureCard);
    this.appendValueInput("id").setCheck(Number).appendField('ID').setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput("name").setCheck(String).appendField(Blockly.QDP_name).setAlign(Blockly.ALIGN_RIGHT);
    this.appendDummyInput()  
      .appendField(Blockly.QDP_type)
      .appendField(new Blockly.FieldDropdown([['°C','0'],['°F','1'],['K','2'],['°R','3'],['°De','4'],['°N','5']]), "type");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip("名称支持中文");
    this.setHelpUrl();
  }
};

//网页插入滑杆元素
Blockly.Blocks.QDP_ESP8266_web_page_addSliderCard = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.blynk);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/webpage/webpage.png", 30, 30))
    .appendField(Blockly.QDP_web_page+Blockly.QDP_add +Blockly.SliderCard);
    this.appendValueInput("id").setCheck(Number).appendField('ID').setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput("name").setCheck(String).appendField(Blockly.QDP_name).setAlign(Blockly.ALIGN_RIGHT);
    this.appendDummyInput()  
      .appendField(Blockly.QDP_type)
      .appendField(new Blockly.FieldDropdown([[Blockly.QDP_ESP8266_web_page_Slider_type0,'0'],[Blockly.QDP_ESP8266_web_page_Slider_type1,'1'],[Blockly.QDP_ESP8266_web_page_Slider_type2,'2'],[Blockly.QDP_ESP8266_web_page_Slider_type3,'3']]), "type");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip("名称支持中文");
    this.setHelpUrl();
  }
};

//网页链接滑杆变化事件
Blockly.Blocks.QDP_ESP8266_web_page_attachSliderChanged = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.blynk);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/webpage/webpage.png", 30, 30))
    .appendField(Blockly.QDP_web_page+Blockly.attachSliderChanged);

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip("");
    this.setHelpUrl();
  }
};

//网页滑杆变化事件
Blockly.Blocks.QDP_ESP8266_web_page_SliderChanged = {
  init: function() {
    this.setColour(34);
    this.appendDummyInput("").appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/webpage/webpage.png", 30, 30))
    .appendField(Blockly.QDP_web_page+Blockly.SliderChanged +' const char* id, int value')
    this.appendStatementInput('DO').appendField('');
    this.setInputsInline(true);
    this.setTooltip("");
  }
};

//网页滑杆ID
Blockly.Blocks.QDP_ESP8266_web_page_Slider_id = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.blynk);
    this.appendDummyInput("")
    .appendField(Blockly.QDP_web_page+Blockly.SliderCard);
    this.appendValueInput("id").setCheck(Number).appendField('ID').setAlign(Blockly.ALIGN_RIGHT);
    this.setOutput(true, Number);
    this.setInputsInline(true);
    this.setTooltip("");
    this.setHelpUrl();
  }
};

//网页链接按钮事件
Blockly.Blocks.QDP_ESP8266_web_page_attachButtonClick = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.blynk);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/webpage/webpage.png", 30, 30))
    .appendField(Blockly.QDP_web_page+Blockly.attachButtonClick);

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip("");
    this.setHelpUrl();
  }
};

//网页按钮事件
Blockly.Blocks.QDP_ESP8266_web_page_ButtonClick = {
  init: function() {
    this.setColour(34);
    this.appendDummyInput("").appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/webpage/webpage.png", 30, 30))
    .appendField(Blockly.QDP_web_page+Blockly.ButtonClick +' const char* id')
    this.appendStatementInput('DO').appendField('');
    this.setInputsInline(true);
    this.setTooltip("");
  }
};
//网页按钮ID
Blockly.Blocks.QDP_ESP8266_web_page_Button_id = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.blynk);
    this.appendDummyInput("")
    .appendField(Blockly.QDP_web_page+Blockly.ButtonCard);
    this.appendValueInput("id").setCheck(Number).appendField('ID').setAlign(Blockly.ALIGN_RIGHT);
    this.setOutput(true, Number);
    this.setInputsInline(true);
    this.setTooltip("");
    this.setHelpUrl();
  }
};

//网页插入折线图元素
Blockly.Blocks.QDP_ESP8266_web_page_addLineChart = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.blynk);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/webpage/webpage.png", 30, 30))
    .appendField(Blockly.QDP_web_page+Blockly.QDP_add +Blockly.LineChart);
    this.appendValueInput("id").setCheck(Number).appendField('ID').setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput("name").setCheck(String).appendField(Blockly.QDP_name).setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput("x_axis_value").appendField(Blockly.QDP_ESP8266_web_page_LineChart_x_axis_value).setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput("y_axis_name").setCheck(String).appendField(Blockly.QDP_ESP8266_web_page_LineChart_y_axis_name).setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput("y_axis_value").appendField(Blockly.QDP_ESP8266_web_page_LineChart_y_axis_value).setAlign(Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip("");
    this.setHelpUrl();
  }
};
//网页更新折线图元素
Blockly.Blocks.QDP_ESP8266_web_page_updateLineChart = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.blynk);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/webpage/webpage.png", 30, 30))
    .appendField(Blockly.QDP_web_page+Blockly.QDP_update +Blockly.LineChart);
    this.appendValueInput("id").setCheck(Number).appendField('ID').setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput("x_axis_value").appendField(Blockly.QDP_ESP8266_web_page_LineChart_x_axis_value).setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput("y_axis_value").appendField(Blockly.QDP_ESP8266_web_page_LineChart_y_axis_value).setAlign(Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip("");
    this.setHelpUrl();
  }
};
var web_page_update_dropdown = [
[Blockly.NumberCard,'NumberCard'],
[Blockly.TemperatureCard,'TemperatureCard'],
[Blockly.HumidityCard,'HumidityCard'],
[Blockly.StatusCard,'StatusCard'],
[Blockly.SliderCard,'SliderCard'],
[Blockly.GaugeChart,'GaugeChart']
];
//网页更新元素
Blockly.Blocks.QDP_ESP8266_web_page_update = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.blynk);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/webpage/webpage.png", 30, 30))
    .appendField(Blockly.QDP_web_page+Blockly.QDP_update );
    this.appendDummyInput()  
      .appendField(new Blockly.FieldDropdown(web_page_update_dropdown), "updateType");
    this.appendValueInput("id").setCheck(Number).appendField('ID').setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput("value").appendField(Blockly.QDP_value).setAlign(Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip("");
    this.setHelpUrl();
  }
};


Blockly.Blocks['QDP_web_print_data'] = {
  init: function() {
    this.appendValueInput("web_printing")
        .setCheck(null)
        .appendField("Web"+Blockly.Msg.MIXPY_SERIAL_WRITE)
        .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_SD_NEWLINE,"0"], [Blockly.Msg.LOGIC_NEGATE_TITLE+Blockly.MIXLY_SD_NEWLINE,"1"]]), "mode");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("Web串口打印数据（Web串口地址<IP Address>/webserial）");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['QDP_web_receive_data'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Web"+Blockly.MIXLY_SERIAL_READSTR);
    this.appendStatementInput("data")
        .setCheck(null);
    this.setColour(180);
 this.setTooltip("Web串口接收数据（Web串口地址<IP Address>/webserial）");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['QDP_priority_display'] = {
  init: function() {
    this.appendStatementInput("display")
        .setCheck(null)
        .appendField(Blockly.QDP_ESP8266_INCREASE_PRIORITY);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("点阵屏显示提高优先级");
 this.setHelpUrl("");
  }
};

//esp_now发送数据
Blockly.Blocks['QDP_esp_now_send'] = {
  init: function() {
    this.appendValueInput("mac")
        .setCheck(null)
        .appendField(Blockly.MIXLY_ETHERNET_MAC_ADDRESS);
    this.appendValueInput("data")
        .setCheck(null)
        .appendField(Blockly.MIXLY_SD_DATA);
    this.appendStatementInput("success")
        .setCheck(null)
        .appendField(Blockly.MIXLY_MICROPYTHON_SOCKET_SEND+Blockly.MIXLY_SUCCESS);
    this.appendStatementInput("failure")
        .setCheck(null)
        .appendField(Blockly.MIXLY_MICROPYTHON_SOCKET_SEND+Blockly.MIXLY_FAILED);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("ESPnow指定MAC地址发送数据");
 this.setHelpUrl("");
  }
};

//esp_now接收数据
Blockly.Blocks['QDP_esp_now_receive'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ESP NOW"+Blockly.MQTT_subscribe2+Blockly.MIXLY_SD_DATA);
    this.appendStatementInput("receive_data")
        .setCheck(null);
    this.setColour(0);
 this.setTooltip("ESPnow接收数据");
 this.setHelpUrl("");
  }
};

//Find MAC
Blockly.Blocks['QDP_find_mac'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.MIXLY_SERIAL_PRINT+Blockly.MIXLY_ETHERNET_MAC_ADDRESS);
    this.setColour(0);
 this.setTooltip("查找MAC地址");
 this.setHelpUrl("");
  }
};

//指针数组
Blockly.Blocks.QDP_pointer_array= {
  init: function() { 
  this.appendValueInput("list_data")
      .setCheck(null)  
      .appendField("指针数组")
      .appendField(new Blockly.FieldDropdown([["int","int"],["unsigned int","unsigned int"],["long","long"],["unsigned long","unsigned long"],["uint8_t","uint8_t"],["uint16_t","uint16_t"],["uint32_t","uint32_t"],["uint64_t","uint64_t"],["float","float"],["double","double"],["char","char"],["byte","byte"],["char *","char *"],["String","String"],["const unsigned char","const unsigned char"],["static const uint8_t","static const uint8_t"],["const unsigned short","const unsigned short"]]), "lists_create_type")
      .appendField(new Blockly.FieldTextInput("mylist"), "lists_create_name")
      .appendField("[");
  this.appendDummyInput()  
      .appendField("]");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(Blockly.Blocks.serial.HUE);
  this.setTooltip("指针数组存放变量通过指针数组访问变量");
  this.setHelpUrl("");
  }
};


//文本
Blockly.Blocks.QDP_txt = {
  /**
   * Block for creating a list with any number of elements of any type.
   * @this Blockly.Block
   */
   init: function() {
    this.setColour(Blockly.Blocks.serial.HUE);
    this.appendDummyInput("")
    //.appendField('文本')
    this.itemCount_ = 3;
    this.updateShape_();
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setMutator(new Blockly.Mutator(['link_text_create_with_item']));
    this.setTooltip("文本");
  },
  /**
   * Create XML to represent list inputs.
   * @return {Element} XML storage element.
   * @this Blockly.Block
   */
   mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('items', this.itemCount_);
    return container;
  },
  /**
   * Parse XML to restore the list inputs.
   * @param {!Element} xmlElement XML storage element.
   * @this Blockly.Block
   */
   domToMutation: function(xmlElement) {
    this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10);
    this.updateShape_();
  },
  /**
   * Populate the mutator's dialog with this block's components.
   * @param {!Blockly.Workspace} workspace Mutator's workspace.
   * @return {!Blockly.Block} Root block in mutator.
   * @this Blockly.Block
   */
   decompose: function(workspace) {
    var containerBlock =
    Blockly.Block.obtain(workspace, 'link_text_create_with_container');
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;
    for (var i = 0; i < this.itemCount_; i++) {
      var itemBlock = Blockly.Block.obtain(workspace, 'link_text_create_with_item');
      itemBlock.initSvg();
      connection.connect(itemBlock.previousConnection);
      connection = itemBlock.nextConnection;
    }
    return containerBlock;
  },
  /**
   * Reconfigure this block based on the mutator dialog's components.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this Blockly.Block
   */
   compose: function(containerBlock) {
    var itemBlock = containerBlock.getInputTargetBlock('STACK');
    // Count number of inputs.
    var connections = [];
    var i = 0;
    while (itemBlock) {
      connections[i] = itemBlock.valueConnection_;
      itemBlock = itemBlock.nextConnection &&
      itemBlock.nextConnection.targetBlock();
      i++;
    }
    this.itemCount_ = i;
    this.updateShape_();
    // Reconnect any child blocks.
    for (var i = 0; i < this.itemCount_; i++) {
      if (connections[i]) {
        this.getInput('ADD' + i).connection.connect(connections[i]);
      }
    }
  },
  /**
   * Store pointers to any connected child blocks.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this Blockly.Block
   */
   saveConnections: function(containerBlock) {
    var itemBlock = containerBlock.getInputTargetBlock('STACK');
    var i = 0;
    while (itemBlock) {
      var input = this.getInput('ADD' + i);
      itemBlock.valueConnection_ = input && input.connection.targetConnection;
      i++;
      itemBlock = itemBlock.nextConnection &&
      itemBlock.nextConnection.targetBlock();
    }
  },
  /**
   * Modify this block to have the correct number of inputs.
   * @private
   * @this Blockly.Block
   */
   updateShape_: function() {
    // Delete everything.
    if (this.getInput('EMPTY')) {
      this.removeInput('EMPTY');
    } else {
      var i = 0;
      while (this.getInput('ADD' + i)) {
        this.removeInput('ADD' + i);
        i++;
      }
    }
    // Rebuild block.
    if (this.itemCount_ == 0) {
      this.appendDummyInput('EMPTY')
      .appendField("没有数据");
    } else {
      for (var i = 0; i < this.itemCount_; i++) {
        var input = this.appendValueInput('ADD' + i);
        if (i > 0) {
          input.setAlign(Blockly.ALIGN_RIGHT)
          input.appendField(",");
        }
      }
    }
  }
};

Blockly.Blocks['link_text_create_with_item'] = {
  /**
   * Mutator bolck for adding items.
   * @this Blockly.Block
   */
   init: function() {
    this.setColour(Blockly.Blocks.texts.HUE);
    this.appendDummyInput()
    .appendField(Blockly.Msg.LISTS_CREATE_WITH_ITEM_TITLE);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_ITEM_TOOLTIP);
    this.contextMenu = false;
  }
};

Blockly.Blocks['link_text_create_with_container'] = {
  /**
   * Mutator block for list container.
   * @this Blockly.Block
   */
   init: function() {
    this.setColour(Blockly.Blocks.texts.HUE);
    this.appendDummyInput()
        .appendField("文本");
    this.appendStatementInput('STACK');
    this.setTooltip("");
    this.contextMenu = false;
  }
};

//wifi连接状态
Blockly.Blocks['QDP_WiFi_status'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.MIXLY_NETWORK_WIFI_CONNECT);
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.qdprobotESP8266.blynk);
 this.setTooltip("返回与路由器WiFi连接状态,已连接返回1未连接返回0");
 this.setHelpUrl("");
  }
};

//ESP8266重启
Blockly.Blocks['QDP_esp8266rst'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ESP8266 Reset");
    this.setPreviousStatement(true, null);
    this.setColour(Blockly.Blocks.qdprobotESP8266.blynk);
 this.setTooltip("ESP8266复位重启");
 this.setHelpUrl("");
  }
};

//Arduinojson数据解析
Blockly.Blocks.QDP_Arduinojson = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.QDP_JSON_STRING_PARSING); 
    this.appendDummyInput("")
        .appendField(new Blockly.FieldTextArea('const size_t capacity = JSON_ARRAY_SIZE(2) + JSON_OBJECT_SIZE(3) + 30;\nDynamicJsonDocument doc(capacity);\nconst char* json = "{\\"sensor\\":\\"gps\\",\\"time\\":1351824120,\\"data\\":[48.75608,2.302038]}";\ndeserializeJson(doc, json);\nconst char* sensor = doc["sensor"]; // "gps"\nlong time = doc["time"]; // 1351824120\nfloat data_0 = doc["data"][0]; // 48.75608\nfloat data_1 = doc["data"][1]; // 2.302038'), 'VALUE');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(270);
 this.setTooltip("json数据解析，将需要解析的字符串先通过Arduinojson助理解析后复制替换原来的字符串即可，详细用法参考Arduinojson库说明，解析数据后可获得关键数据，通过调用关键数据变量名调用数据");
 this.setHelpUrl("https://arduinojson.org/v6/assistant/");
  }
};

//初始化
Blockly.Blocks.QDP_base_setup = {
  init: function() {
    this.setColour(Blockly.Blocks.serial.HUE);
    this.appendDummyInput()
    .appendField(Blockly.MIXLY_SETUP);
    this.appendStatementInput('DO')
    .appendField('');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_CONTROL_SETUP);
    this.setHelpUrl("https://mixly.readthedocs.io/zh_CN/latest/arduino/03.Control.html#id2");
  }
};

//板载多功能按键
Blockly.Blocks.QDP_OneButton_interrupt = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.buttoncolour);
    this.appendDummyInput("")
    .appendField(Blockly.QDP_ONBOARD_BUTTONS)
    .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_CLICK, "attachClick"], [Blockly.MIXLY_DOUBLE_CLICK, "attachDoubleClick"], [Blockly.MIXLY_LONG_PRESS_START, "attachLongPressStart"], [Blockly.MIXLY_DURING_LONG_PRESS, "attachDuringLongPress"], [Blockly.MIXLY_LONG_PRESS_END, "attachLongPressStop"]]), "mode");
    this.appendStatementInput('DO')
    .appendField(Blockly.MIXLY_DO);
    this.setInputsInline(true);
    this.setTooltip("板载多功能按键，利用一个按键实现多种控制方式");
    this.setHelpUrl();
  }
};

Blockly.Blocks.QDP_ESP8266_Task = {
  init: function() {
    this.appendDummyInput()
        .appendField("ESP8266")
        .appendField("Task")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"]]), "task");
    this.appendStatementInput("setup")
        .setCheck(null)
        .appendField(Blockly.MIXLY_SETUP);
    this.appendStatementInput("loop")
        .setCheck(null)
        .appendField(Blockly.LANG_CONTROLS_FLOW_STATEMENTS_INPUT_OFLOOP);
    this.setColour(270);
 this.setTooltip("创建任务不同任务之间互不影响，可以使用延时函数delay()\n注意：禁止该块与网络相关的程序块一起使用例如blynk与网页\n编辑，因为该程序块会中断WiFi网络和WPS功能。");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['QDP_webhook_to_get_data'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Webhook "+Blockly.MIXLY_GET +Blockly.MIXLY_SD_DATA)
        .appendField(new Blockly.FieldDropdown(BLYNK_VIRTUALPIN_SELECT), "VPIN");
    this.appendValueInput("parameter")
        .setCheck(null)
        .appendField(Blockly.MIXLY_PARAMS+"     ");
    this.appendStatementInput("function")
        .setCheck(null)
        .appendField(Blockly.MIXLY_MSTIMER2_DO);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.qdprobotESP8266.blynk);
 this.setTooltip("blynk webhook组件指定API通过提交参数获取数据（参数可为空）");
 this.setHelpUrl("");
  }
};

//获取两个日期差值
Blockly.Blocks['QDP_get_the_number_of_days_between_the_two_dates'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.GET_THE_DIFFERENCE_BETWEEN_TWO_DATES);
    this.appendValueInput("year_start")
        .setCheck(null)
        .appendField(Blockly.START+Blockly.MIXLY_GPS_DATE_YEAR);
    this.appendValueInput("month_start")
        .setCheck(null)
        .appendField(Blockly.START+Blockly.MIXLY_GPS_DATE_MONTH);
    this.appendValueInput("day_start")
        .setCheck(null)
        .appendField(Blockly.START+Blockly.MIXLY_GPS_DATE_DAY );
    this.appendValueInput("year_end")
        .setCheck(null)
        .appendField(Blockly.END+Blockly.MIXLY_GPS_DATE_YEAR);
    this.appendValueInput("month_end")
        .setCheck(null)
        .appendField(Blockly.END+Blockly.MIXLY_GPS_DATE_MONTH);
    this.appendValueInput("day_end")
        .setCheck(null)
        .appendField(Blockly.END+Blockly.MIXLY_GPS_DATE_DAY );
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.tools.HUE);
 this.setTooltip("获取两个日期差值");
 this.setHelpUrl("");
  }
};

//返回UTF8字符串宽度
Blockly.Blocks['QDP_getutf8width'] = {
  init: function() {
    this.appendValueInput("str")
        .setCheck(null)
        .appendField("OLED")
        .appendField(' '+Blockly.OLED_DRAWSTR+Blockly.MIXLY_WIDTH);
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.qdprobotESP8266.show);
 this.setTooltip("返回OLED显示字符串像素宽度，宽度大小与字体有关");
 this.setHelpUrl("");
  }
};

//读取EEROM字符串
Blockly.Blocks['QDP_read_eerom_string'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.MIXLY_SERIAL_READ+"EEROM"+Blockly.MIXLY_MICROBIT_TYPE_STRING);
    this.setOutput(true, null);
    this.setColour(120);
 this.setTooltip("读取EEROM中的字符串，默认读取字符串最大长度64，地址0为起始位");
 this.setHelpUrl("");
  }
};

//EEROM字符串写入
Blockly.Blocks['QDP_eerom_string_write'] = {
  init: function() {
    this.appendValueInput("data")
        .setCheck(null)
        .appendField("EEROM"+Blockly.MIXLY_MICROBIT_TYPE_STRING+Blockly.MIXLY_ESP32_WRITE);
    this.appendDummyInput();
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("将字符串写入EEROM，默认写入字符串最大长度64，地址0为起始位");
 this.setHelpUrl("");
  }
};

//var mailType = [['sina.com.cn','0'],['vip.sina.com.cn','1'],['sohu.com','2'],['126.com','3'],['139.com','4'],['163.com','5'],['qq.com','6'],['exmail.qq.com','7'],['yahoo.com.cn','8'],['hotmail.com','9'],['263.net','10'],['x263.net','11'],['21cn.com','12'],['foxmail.com','13'],['tom.com','14'],['china.com','15']];
var mailType = [['163.com','5'],['139.com','4']];
//发送邮件初始化
Blockly.Blocks.QDP_EMailSender_init = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.blynk);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/blynk/widget_email.png", 30, 20))
        .appendField(Blockly.QDP_EMailSender_init)
        .appendField(new Blockly.FieldDropdown(mailType), "mailType");
    this.appendValueInput("email_login").appendField(Blockly.QDP_EMailSender_email_login).setCheck(String);
    this.appendValueInput("email_password").appendField(Blockly.QDP_EMailSender_email_password).setCheck(String);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("注册对应的邮箱开启IMAP/SMTP服务，填写对应的邮箱账号及\"授权码\"\n即可使用硬件发送邮件，鼠标右键点击帮助跳转到网易163邮箱页面");
    this.setHelpUrl("https://mail.163.com/");
  }
};

//发送邮件
Blockly.Blocks.QDP_EMailSender_send = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.blynk);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/blynk/widget_email.png", 30, 20))
        .appendField(Blockly.QDP_EMailSender_send);
    this.appendValueInput("subject").appendField(Blockly.QDP_EMailSender_email_subject);
    this.appendValueInput("message").appendField(Blockly.QDP_EMailSender_email_message);
    this.appendValueInput("email_to").appendField(Blockly.QDP_EMailSender_email_mail_to);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("指定收件人，主题及邮件内容发送邮件");
    this.setHelpUrl("");
  }
};

//定义DFRobotDFPlayerMini目录
Blockly.Blocks['qdp_ESP8266_define_mp3_directory'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.define_mp3_directory)
        .appendField(new Blockly.FieldTextInput("音频1.mp3 音频2.mp3 音频3.mp3"), "data");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.qdprobotESP8266.MP3);
 this.setTooltip("使用批处理命令获取SD卡文件目录");
 this.setHelpUrl("");
  }
};

//DFRobotDFPlayerMini指定播放
Blockly.Blocks['qdp_ESP8266_mp3_designated_play'] = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.MP3);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/MP3/qdp_playx.png", 30, 20))
    .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_QDP_BOFANGX,"myQDPPlayer.play"], [Blockly.MIXLY_QDP_LOOPPLAY,"myQDPPlayer.loop"]]), "mode");
    this.appendValueInput('num',Number)
    .appendField(Blockly.MIXLY_QDP_YINGLIANG);
    this.appendValueInput('NAME',Number)
    .appendField(Blockly.MIXLY_QDP_SHOU);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
   this.setTooltip("指定文件名播放音频");
  }
};

var QDP_ASR_keyword_dropdown =[
["退下/再见","ExitUni"],
["静音模式","soundoff"],
["回应模式","soundon"],
["打开设备/打开1号/开始1号","openequipment"],
["关闭设备/关闭1号/停止1号","closeequipment"],
["开灯/把灯打开/打开2号/开始2号","turnon2"],
["关闭2号/停止2号/关灯/关闭灯光","turnoff2"],
["打开3号/开启3号/开始3号","turnon3"],
["关闭3号/停止3号","turnoff3"],
["打开4号/开始4号","turnon4"],
["关闭4号/停止4号","turnoff4"],
["打开5号/开始5号","turnon5"],
["关闭5号/停止5号","turnoff5"],
["打开6号/开始6号","turnon6"],
["关闭6号/停止6号","turnoff6"],
["现在温度/今天温度","temperaturenow"],
["现在湿度/显示湿度","humiditynow"],
["你叫什么名字","myname"],
["左转/左转弯","leftturn"],
["右转/右转弯","rightturn"],
["前进/直行/进攻/出发","goforward"],
["后退/倒退/倒车","drawback"],
["停止/停了","stoprun"],
["打转/转圈","turnaround"],
["抬左手/举起左手","raisedlefthand"],
["抬右手/举起右手","raisedrighthand"],
["抬左脚/举起左脚","leftfoot"],
["抬右脚/举起右脚","rightfoot"],
["打开风扇","openElectricfan"],
["关闭风扇","closElectricfan"],
["风扇调到1档/风速调到最小","AdjustGearmin"],
["风扇调到3档/风速调到最大","AdjustGearmax"],
["定时一小时关灯","settiCLonehonor"],
["定时一小时开灯","settiOPonehonor"],
["打开空调","openairconditioner"],
["关闭空调","closeairconditioner"],
["自动模式","runautomatically"],
["制冷模式","coolingmode"],
["制热模式","heatingmode"],
["升高温度","raisetemperature"],
["降低温度","reducetemperature"],
["打开电视","turnontv"],
["关闭电视","turnofftv"],
["调到最亮","setmaxld"],
["调到最暗","setminld"],
["亮一点/增加亮度","increasebrightness"],
["调暗一点/减小亮度","reducebrightness"],
["灯调为红色/红色","setcolorred"],
["打开电源","turnonpower"],
["关闭电源","turnoffpower"],
["打开暖气","theheater"],
["关闭暖气","shutdownheat"],
["打开吹风","openblowing"],
["关闭吹风","closeblowing"],
["开始出水","thewater"],
["停止出水","closewater"],
["保温模式","heatpreservationmode"],
["打开开关","turnonswitch"],
["关闭开关","turnoffswitch"],
["温度设置为25度","tempSet25"],
["垃圾分类","garbageclassification"],
["干垃圾","drygarbage"],
["湿垃圾","wetgarbage"],
["玻璃","thisglass"],
["厨卫垃圾","hutchdefends"],
["废纸","wastepaper"],
["电池","thebattery"],
["塑料","theplastic"],
["金属","themetal"],
["打开客厅灯","turnonlivingroomlight"],
["关闭客厅灯","turnofflivingroomlight"],
["打开房间灯","turnonroomlight"],
["关闭房间灯","turnoffroomlight"],
["打开主卧灯","masterbedroomlight"],
["关闭主卧灯","offmasterbedroomlight"],
["打开阳台灯","turnonbalconylight"],
["关闭阳台灯","turnoffbalconylight"]
];
var QDP_ASR_keyword_dropdown2 =[
["唤醒","starton"],
["退出识别","startoff"],
["静音模式","soundoff"],
["回应模式","soundon"],
["打开设备/打开1号/开始1号","openequipment"],
["关闭设备/关闭1号/停止1号","closeequipment"],
["开灯/把灯打开/打开2号/开始2号","turnon2"],
["关闭2号/停止2号/关灯/关闭灯光","turnoff2"],
["打开3号/开启3号/开始3号","turnon3"],
["关闭3号/停止3号","turnoff3"],
["打开4号/开始4号","turnon4"],
["关闭4号/停止4号","turnoff4"],
["打开5号/开始5号","turnon5"],
["关闭5号/停止5号","turnoff5"],
["打开6号/开始6号","turnon6"],
["关闭6号/停止6号","turnoff6"]
];
//语音对比数据
Blockly.Blocks.QDP8266_ASR_CompareData= {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.buttoncolour);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/HC/qdp_hc.png", 30, 20))
    .appendField(Blockly.QDP_ASR_CompareData+' '+Blockly.MIXLY_QDP_PIN)
    .appendField(new Blockly.FieldDropdown(QDP_Esp8266_Double_Digit_Pin_Dropdown), "pinn");
    this.appendDummyInput("")
    .appendField(new Blockly.FieldDropdown(QDP_ASR_keyword_dropdown), "keyword");
    this.setInputsInline(true);
    this.setOutput(true);  
    this.setTooltip("当接收到对应的语音指令时");//增加块的鼠标注释内容 
  }
};

//语音发送数据
Blockly.Blocks.QDP8266_ASR_SendData= {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.buttoncolour);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/HC/qdp_hc.png", 30, 20))
    .appendField(Blockly.QDP_ASR_SendData+' '+Blockly.MIXLY_QDP_PIN)
    .appendField(new Blockly.FieldDropdown(QDP_Esp8266_Double_Digit_Pin_Dropdown), "pinn");
    this.appendDummyInput("")
    .appendField(new Blockly.FieldDropdown(QDP_ASR_keyword_dropdown2), "keyword");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip("发送指令控制模块相关IO动作，输出高电平5V");//增加块的鼠标注释内容 
  }
};

//语音识别初始化
Blockly.Blocks.QDP8266_ASR_ReceiveData = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.buttoncolour);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/HC/qdp_hc.png", 30, 20))
    .appendField(Blockly.QDP_ASR_ReceiveData)
    .appendField(Blockly.MIXLY_QDP_PIN)
    .appendField(new Blockly.FieldDropdown(QDP_Esp8266_Double_Digit_Pin_Dropdown), "pinn");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip("初始化定义模块端口,模块唤醒词：小齐小齐、小护小护、你好齐护、齐护机器人、齐护齐护，并亮起识别状态灯,\n其中识别词：音量增大/提高音量/增大音量/加大音量/减小音量/音量减小/最大音量/最小音量 为模块内部音量控制，不带输出。");//增加块的鼠标注释内容 

  }
};

//修改MAC地址
Blockly.Blocks['QDP8266_set_mac_address'] = {
  init: function() {
    this.appendValueInput("mac_address")
        .setCheck(null)
        .appendField(Blockly.Msg.LISTS_SET_INDEX_SET+Blockly.MIXLY_ETHERNET_MAC_ADDRESS);
    this.appendDummyInput();
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("自定义ESP32或ESP8266的MAC地址");
 this.setHelpUrl("");
  }
};

//EEPROM初始化
Blockly.Blocks['QDP8266_EEPROM_INIT'] = {
  init: function() {
    this.appendValueInput("size")
        .setCheck(null)
        .appendField(Blockly.QDP8266_EEPROM_INIT)
        .appendField(Blockly.QDP8266_EEPROM_INIT_SET_SIZE);
    this.appendDummyInput();
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("设置内存大小，最大4096字节\n注：请将ArduinoJson库更新到5.13.5版本，否则不能用！打开Mixly内的ArduinoIDE/工具/库管理/ArduinoJson/选5.13.5安装");
 this.setHelpUrl("");
  }
};

//EEPROM KEY是否存在
Blockly.Blocks['QDP8266_EEPROM_exists'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.QDP8266_EEPROM_exists+' KEY:');
    this.appendValueInput("key")
        .setCheck(null);
    this.appendDummyInput();
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip("查找内存");
    this.setHelpUrl("");
  }
};

//EEPROM 设置数据
Blockly.Blocks['QDP8266_EEPROM_set'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.QDP8266_EEPROM_set)
        .appendField(Blockly.blynk_IOT_DATA_TYPE)
        .appendField(new Blockly.FieldDropdown(qdprobotESP8266_VARIABLES_DROP), 'TYPE');
    this.appendValueInput("key")
        .setCheck(null)
        .appendField(' KEY:');
    this.appendValueInput("value")
        .setCheck(null)
        .appendField(' VALUE:');
    this.setColour(230);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip("发送数据到缓存");
    this.setHelpUrl("");
  }
};

//EEPROM 清除数据
Blockly.Blocks['QDP8266_EEPROM_clear'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.QDP8266_EEPROM_clear);
    this.setColour(230);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("清除缓存中所数据，需提交操作");
    this.setHelpUrl("");
  }
};

//EEPROM 提交数据
Blockly.Blocks['QDP8266_EEPROM_apply'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.QDP8266_EEPROM_apply);
    this.setColour(230);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("所有动作完成后都要执行一次提交，包括：缓存保存到EEPROM，清除。");
    this.setHelpUrl("");
  }
};

//EEPROM 读取数据
Blockly.Blocks['QDP8266_EEPROM_get'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.QDP8266_EEPROM_get)
        .appendField(Blockly.blynk_IOT_DATA_TYPE)
        .appendField(new Blockly.FieldDropdown(qdprobotESP8266_VARIABLES_DROP), 'TYPE');
    this.appendValueInput("key")
        .setCheck(null)
        .appendField(' KEY:');
    this.setColour(230);
    this.setOutput(true, null);
    this.setInputsInline(true);
    this.setTooltip("数据读取对应的值");
    this.setHelpUrl("");
  }
};

var QDPESP8266Voice_Dropdown = [
['欢迎使用齐护IOTstart模块','0'],
['欢迎光临','1'],
['打开','2'],
['关闭','3'],
['红灯','6'],
['绿灯','7'],
['黄灯','8'],
['百分之','9'],
['开始','15'],
['停止','16'],
['播报','17'],
['0','18'],
['1','19'],
['2','20'],
['3','21'],
['4','22'],
['5','23'],
['6','24'],
['7','25'],
['8','26'],
['9','27'],
['十','28'],
['百','29'],
['千','30'],
['万','31'],
['点','32'],
['红外发射成功','33'],
['红外信号已接收','34'],
['电视','35'],
['空调','36'],
['光线强度','37'],
['X轴','39'],
['Y轴','40'],
['平衡','41'],
['上午','42'],
['下午','43'],
['晚上','44'],
['时','45'],
['分','46'],
['秒','47'],
['度','48'],
['温度','49'],
['摄氏度','50'],
['湿度','51'],
['过高','52'],
['过低','53'],
['环境干燥','54'],
['环境湿润','55'],
['当前','56'],
['障碍物','57'],
['请注意','58'],
['安全','59'],
['危险','60'],
['通信故障','64'],
['连接上了','65'],
['上','68'],
['下','69'],
['左','70'],
['右','71'],
['是','72'],
['的','75'],
['厘米','77'],
['继电器','78'],
['土壤干燥','79'],
['现在时间','80'],
['加','81'],
['减','82'],
['插座','83'],
['距离','84'],
['高度','85'],
['角度','86'],
['狗叫音效','87'],
['猫叫音效','88'],
['119警警笛音','89'],
['小孩哭声音效','90'],
['小孩笑声音效','91'],
['电话铃音效','92'],
['闹钟音效','93']
  ];

  //NV080C语音 
Blockly.Blocks.QDPESP8266Voice = {
  init: function() {
    this.setColour(10);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/HC/qdp_hc.png", 30, 20))
        .appendField(Blockly.QDPESP8266Voice)
        
    this.appendValueInput('addr',Number)
        .appendField(Blockly.MIXLY_QDP_START);
        
    this.appendValueInput('delayTime')
          .setCheck(Number)
          .appendField(Blockly.MIXLY_QDP_yscgq2);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');//增加块的鼠标注释内容
  }
};

//NV080C语音选单
Blockly.Blocks.QDPESP8266Voice_Dropdown={
 init: function() {
    this.setColour(10);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown(QDPESP8266Voice_Dropdown), "PIN2");
    this.setOutput(true, Number);

  }
};

//负载输出
Blockly.Blocks.qdp_ESP8266_Load_Output = {
  init: function() {
    this.setColour(Blockly.Blocks.qdprobotESP8266.contor);
    this.appendDummyInput("")
    //.appendField(new Blockly.FieldImage("../../media/qdprobotESP8266/actuator/qdp_ledlight.png", 30, 20))
    .appendField(Blockly.qdp_ESP8266_Load_Output);
       
    this.appendValueInput("STAT")
    .appendField(Blockly.MIXLY_STAT)
    .setCheck([Number,Boolean]);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('2号端子输出');//增加块的鼠标注释内容
  }
};

//blynk属性设置
Blockly.Blocks['QDP_blynk_setproperty'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.qdp_blynk_widget)
        .appendField(Blockly.QDP_BLYNK_VIRTUALPIN)
        .appendField(new Blockly.FieldDropdown(BLYNK_VIRTUALPIN_SELECT), "Vpin")
        .appendField(Blockly.MIXLY_AIP_ATTR)
        .appendField(new Blockly.FieldDropdown([["lable","lable"], ["color","color"], ["onBackColor","onBackColor"], ["offBackColor","offBackColor"], ["onColor","onColor"], ["offColor","offColor"], ["onLabel","onLabel"], ["offLabel","offLabel"], ["labels","labels"], ["min","min"], ["max","max"], ["isOnPlay","isOnPlay"], ["url","url"], ["urls","urls"], ["step","step"], ["valueFormatting","valueFormatting"], ["suffix","suffix"], ["maximumFractionDigits","maximumFractionDigits"], ["opacity","opacity"], ["scale","scale"], ["rotation","rotation"], ["method","method"]]), "property")
        .appendField(Blockly.MIXLY_VALUE2);
    this.appendValueInput("value")
        .setCheck(null);
    this.appendDummyInput();
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.qdprobotESP8266.blynk);
 this.setTooltip("");
 this.setHelpUrl("https://docs.blynk.cc/#blynk-main-operations-change-widget-properties");
  }
};
