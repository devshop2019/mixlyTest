#### 更新日志

#### 1.2.0 2021-01-15
* 新增mixGoCE板卡
* RGB彩灯新增HSV颜色设置


#### 1.1.9 2021-01-15
* arduino IDE 退回到1.8.12以避免esp8266兼容性问题

#### 1.1.8 2020-11-30
* 修复micropython 中blynk块的部分已知问题
* 修复esp32下的sd卡模块
* 修复部分已知错误

#### 1.1.7 2020-09-30
* BMP/BME280模块增加设备地址输入
* 支持pocketCard开发板
* 增加NTC热敏电阻
* 增加MPU9250加速度传感器

#### 1.1.6 2020-09-30
* 增加支持BMP280传感器
* 优化繁体中文翻译
* 优化EEPROM相关模块
* 优化范例程序
* 更新RFID相关模块
* 更新ESP8266到2.7.4
* STM32界面添加TFT分类
* 新增promini、leonardo管脚图
* TM1637数码管增加开关，闪烁功能
* 更新STM32界面SPI
* ESP8266下增加wifi一键配网模块
* ESP8266下增加UDP通讯模块
* 修复有时鼠标右键单击导致界面出现错位的问题

#### 1.1.5 2020-07-30
* ESP8266库更新到2.7.3
* 更新STM32视图，增加EEPROM,OLED,电机等控制
* 修复部分已知错误
* SD部分增加获取SD卡基本信息相关块
* 合并 串口打印与串口打印自动换行块
* 更新电机相关块，支持三线控制L298/293模块
* 支持局部变量和全局变量
* 变量类型新增char\*类型
* 修复win7兼容性问题


#### 1.1.4 2020-07-10
* Arduino IDE更新到1.8.13
* 修复 代码视图无法复制代码的问题
* 一键更新功能支持板卡选装
* 云端库增加库开发工具
* 一键更新支持安装STM32板卡


#### 1.1.3 2020-06-22
* 准备支持STM32
* microit增加超声波传感器，电机控制的模块
* 修复颜色识别传感器的编译错误问题
* 处理随机数种子的问题
* 云端库增加blinker点灯物联

#### 1.1.2 2020-06-12
* 修复ESP8266中LM35温度传感器数据错误问题
* 电机控制模块增加电机驱动类型选择
* 修复电机反转程序
* 删除ESP8266的软件中断，修复ESP8266的硬件中断
* 修正ESP8266红外发射编译错误
* 调整一些图形化模块生成代码的位置，增加代码的可读性
* 更新数字输入模块，防止使用数组时出现错误
* 更新文本分类中转整数\小数模块
* 添加软件模拟PWM模块
* 更新列表转数组模块在mixpy
* 更新mithon视图

#### 1.1.1 2020-05-23
* 支持多块OLED同时使用，OLED初始化增加地址选项。
* 掌控板视图增加掌控宝电机控制
* 修复部分视图的图标错乱
* mixpy视图增加list转换为array
* Esp8266硬件库升级到2.7.1
* 调整部分模块的翻译
* 根据python的try函数
* 新增mithon视图


#### 1.1.0 2020-05-15
* 修复ESP32和RGB的兼容性问题
* 优化幂运算和异或运算的表示问题
* 更新一部分C库
* 修复已知问题
* Mixpy增加新分类，机器学习
* mixpy增加二维列表获取数据模块
* 修复microbit的部分错误

#### 1.0.9 2020-04-26
* 红外接收和蜂鸣器增加warning
* 修复LCD的软IIC问题
* arduino 类开发板列表保持与官方一致
* 增加LCD自定义字符显示
* 增加dfplayermini支持
* 执行器下分类为电机、声音、光线
* 删除esp8266下的get请求（不稳定）
* 更新mixgo固件
* 增加多个scoop使用时的warning
* 改进blynk terminal显示
* 统一blynk table的格式
* 更新若干个C库
* 更新rgb c库，解决esp32兼容性问题
* 添加 python库sklearn
* 更新 Mini MP3模块，更改DFPlayer Mini为Mini MP3
* 增加ESP32触摸多功能按键
* 添加 绘制散点图模块在mixpy
* 添加 二维列表获取数据模块在mixpy

#### 1.0.8 2020-03-11
* 数学类别中的映射增加小数选项
* 点阵屏增加显示文本模块
* OLED增加汉字取模块
* OLED 扩充支持诺基亚5110，LCD12864等多种屏幕，支持IIC SPI方式连接
* 工具类增加汉字取模模块
* 修复ESP32 无法通过NTP获取时间的问题
* 优化RTC时钟类的时间设置和读取
* 点阵屏增加静态显示文本模块
* 添加MLX90614红外测温传感器模块
* 添加TCS230颜色传感器模块
* 添加 自增/自减模块
* 添加获取字节数、二维数组行数/列数模块

#### 1.0.7 2020-02-20
* 屏蔽esp32中无法使用的模块
* 增加AFMotor库支持
* 数组类别中增加一维数组循环模块
* 数组类别中增加二维数组
* 控制类别中增加do-while循环模块
* esp8266/32增加HTTP GET请求
* 整合各种常见的RTC模块（DS1302,1307,3231,3234）
* esp32中增加spiffs文件操作类别
* 文本类别增加多个实用模块
* 统一各种变量的类型
* 存储类别细分出二级菜单
* esp32中增加esp_now模块，用于板间通信

#### 1.0.6 2020-01-30
* 去除include按照字母顺序排列的规则
* 重新调整include define declare的顺序
* 在文本类别中新增 连接字符串模块，使用更加方便【王立帮】
* 在文本类别中新增返回字符串B在字符串A中的索引（indexof函数）【王立帮】
* 数组中新增 初始化二维数组模块【王立帮】
* 控制类别中新增do-while循环模块【王立帮】

#### 1.0.5 2020-01-24
* 调整 一键更新规则，每次更新时删除.git目录的冗余文件，防止.git目录越来越大。
* Handbit mpy 页面添加 RGB 初始化
* 修正 mage 的 SPI 管脚
* 简化 ESP32 arduino PWM 操作
* 简化 ESP32 arduino 蜂鸣器操作
* Handbit arduino 增加初始化模块
* 重新优化部分模块的初始管脚
* MixGo microPython 新增板载资源分类
* microPython 新增 irremote 库，支持遥控器
* microPython OLED(SSD1306) 增加显示 bitmap 图片功能并增加绘制点、圆形、三角形

#### 1.0.4 2019-12-31
* 修复 arduino esp8266 一键配网上传失败问题。
* 修复掌控板范例错误问题。
* 修复掌控板micropython中无法上传的问题。
* 重新定义第三方库的C的导入路径，改为arduino\portable\sketchbook\libraries
* 更新micropython ssd1306库
* 优化 blynk  led组件

#### 1.0.3 2019-12-25
* micropython增加lm35,adxl345库。
* Arduino 的彩灯模块增加类型选择，可选GRB,RGB,RGBW.
* arduino 增加sht20温湿度传感器。

#### 1.0.2 2019-12-15
* 修复 如果为真,如果为假 模块放到数字空中的问题。
* 修复scoop库文件大小写问题。
* arduino mixepi 添加 8833电机控制。
* 修复python中三角函数错误问题。
* 修复部分库无法正常显示的问题。


#### 1.0.1 2019-12-10
* 解决不能打开某些旧代码的问题，主要是用了LCD模块和串口16进制输出模块的代码。
* 修正了Python3库，完成了pyaduion,opencv和numpy.
* 修正了部分英文语言包。

#### 1.0.0 2019-12-07
* 更新arduino esp32 ledc模拟输出函数
* 调整arduino esp32蜂鸣器函数为ledcWriteNote
* 更新esp8266 到2.6.1
* OLED 增加不同尺寸选择，可选0.96和1.3寸
* 调整软件默认字体
* 修复blynk从app获取数据模块 某些情况下无法删除的问题
* uno视图下增加4\*4矩阵键盘
* UNO视图下增加I2C相关模块，SPI相关模块
* arduino esp32 增加pwm蜂鸣器控制模块
* OLED 增加背光亮度调整
* 更新jar程序包
* 更新mpy mixgo部分
* 支持第三方库从云端导入
* Mixly 1.0正式版发布


#### 1.0Beta 2019-10-20
* 更新arduino ESP32 库到1.0.4
* Arduino ESP32 串口使用三个硬件串口 
* 修复arduino esp32的舵机控制
* 新增BPI index
* AVR 视图增加8833电机驱动
* 修复其他已知错误
* 增加SD 卡初始化、读取文件、删除文件、文件是否存在模块
* 修复蜂鸣器模块与彩灯模块冲突问题

#### 1.0Beta 2019-10-01
* 更新arduino IDE 到1.8.10
* 更新ESP32 库到1.0.3
* 调整 Mixly类别图标
* 删除普通视图和高级视图，只有一种视图
* 清理多余字体
* 统一文字描述，英文专有名字标识规范
* 更新掌控arduino部分彩灯控制程序
* 改进OLED占用内存过大问题
* 修复第三方库无法导入问题
* 改进数组定义
* 各视图下模块类别重新整理，新增网络，显示器，板载资源二级菜单
* 整合原有LCD 初始化模块
* 删除esp32 和esp8266 中的PS2库，无法兼容
* 新增非阻塞延时模块
* 修改 串口输出数字模块，支持输出多种进制
* 支持日语、俄语翻译文件（未翻译完整）
* 修复代码视图下无法更换主题的问题
* 移除MU视觉类别
* 新增工具类别
* esp32 视图删去TM1650，无法兼容
* 统一arduino类所有视图
* 更新掌控mpy固件到1.5.1


#### 1.0Beta 2019-09-10
* 調整micropython Handbit试图，修复已知问题
* 新增板载资源分类
* 修复HX711无法精确称重的问题
* 修复HT16K33屏幕无法在ESP32下运行的问题
* 精简重复字段
* 优化RFID模块
* OLED新增字体
* 文本类别新增截取字符串、小数点保留、字符串大小写转换、字符串消除非可视字符、字符串替换、字符串查找
* OLED 增加预设图标200+
* 掌控板MicroPython 视图新增tello,yeelight控制
* 新增小Mu摄像头范例
* 调整HX711重量传感器，称重更精准
* 精简msg字段
* Factory类别新增 折叠说明块
* 调整RFID模块接口，使用spi硬接口
* 调整ESP32双核多任务模块
* 增加TCS34725颜色传感器
* OLED新增表情包
* 调整OLED 显示图片时的尺寸设置框，支持直接输入数值
* 增加日语，俄语语言文件,**等待翻译**
* OLED 设置字体分为设置中文字体，设置英文字体两个模块，增加可用字体
* 修复OLED内置图标2个
* 调整RGB颜色选择块，支持色盒取色和RGB数值兼容
* 更新语言文件，统一几个翻译：Wi-Fi、App、IoT(铁熊)
* 取消RGB生效模块
* 新增esp32 cam 拍照模块(佩恩提供，测试功能),arduino ESP32 blynk分类中
* arduino handbit中引出掌控所有引脚,方便使用各种掌控扩展板
* 整理arduino类模块顺序，做到各板卡模块顺序一致
* 更新micropython handbit掌控固件到最新版1.5.0

#### 1.0Beta 2019-08-12
* 新增小MU图像识别模块，arduino esp8266 esp32板卡
* 修复MAX7219 点阵序号不能用变量的问题
* 修复BME280输出气压单位值
* 掌控板独立一个板载资源分类，将板载传感器的使用统一到一起
* 掌控板新增msa300三轴加速度传感器模块 读取数据
* 新增判断掌控板姿态，前倾，后倾，左倾，右倾，正面朝上，反面朝上
* 优化blockly目录结构，归类js文件
* 优化掌控板接口编号，统一采用掌控编法，采用P编号
* mixGo独立一个板载资源分类
* ESP32 新增片内霍尔，温度数据

#### 1.0 2019-07-30
* 高级试图新增 多功能按键模块，只是一个按键检测单击、双击、长按开始、长按中、长按结束
* 修改ESP32 配置，增加程序存储空间到3MB
* 修改ESP8266 Flash默认空间
* 新增BME280 温度 气压传感器
* 新增PS2手柄 模块,包括初始化、按钮识别、摇杆
* 调整ESP32 ESP8266，只保留高级视图，不再区分普通试图和高级试图
* ESP32 新增NTP获取时间模块，方便获取标准时间
* 新增Blynk Table控制模块
* 新增Blynk 服务器连接状态反馈
* 修改OLED 刷新页面 模块文字说明
* 修复ESP32 视图图表错误

#### 1.0 2019-07-20
* esp8266 blynk 类别新增 一键配网AP 模式，Blynk连接状态，blynk LCD组件
* mixpy 新增数据结构类别
* 新增 创建二维数组模块，二维数组赋值，获取二维数组模块
* ESP8266 新增NTP 时间服务器
* mixpy新增网页类别
* 修复部分已知bug

#### 1.0 2019-06-30
* 增加简单定时器模块
* 增加 旋转编码器 模块
* 修复OLED中坐标值不能使用计算式和变量的问题
* 点阵屏幕旋转模块增加设置屏幕序号
* 删除多余的msg字段
* 调整esp8266 esp32 相关模块识别板卡规则
* 整理block/\*.js 文件中的换行符
* 删除mixgo预设的音乐和图形

#### 0.999 2019-06-20
* 增加MQTT协议模块
* ESP8266 ESP32增加连接wifi模块
* 修复baidu Ai
* 修复上一版本语言包问题
* 数组类型增加String类
* 输入/输出 控制 数字 类别模块 右击 帮助功能
* 修复其他用户提交的问题

#### 0.999 2019-06-06
* 修复icon不匹配问题
* 整合max7219、HT16K33点阵屏幕块
* mixpy 高级视图中增加百度人工智能

#### 0.999 2019-05-05
* handbit mixgo python 高级试图新增blynk物联网

#### 0.999 2019-04-25
* 修复if else 模块错误
* 增加arduino handbit高级试图
* 更新esp32库到1.0.2

#### 0.999 2019-04-12
* 调整OLED 库，减少字模占用内存。

#### 0.999 2019-04-12
* Mixly_For_IoT完全并入Mixly官方版本，以后都跟官方版一起发布

#### 0.2.7 2019-04-04
* 更新esp32 到1.0.1
* 更新arduino1.8.8到1.8.9
* 调整blynk库，给arduino也增加了blynk功能
* Blynk桥接支持多个设备

#### 0.2.6 2019-03-13
* 增加一键更新.bat
* 独立arduino MixGo页面，完善MixGo传感器
* 独立arduino Handbit页面，未完善传感器
* 调试esp32 下的blynk，独立esp8266和esp32 的blynk
* 解决部分代码翻译时顺序错误的问题

#### 0.2.5 2019-03-13
* 修复一些已知的问题
* 增加一些范例程序
* ESP32增加Mixgo分类，并增加点阵显示模块

#### 0.2.4 2019-03-10
* esp32 arduino 
* 更新mixly官方版本的OLED模块，普通视图中只保留简单的文字显示
* ESP32 蜂鸣器函数
* ESP32 软串口
* ESP32 双核
* 精简ESP32的库文件，与arduino重复部分只保留arduino部分，防止后期冲突
* 更新mixly官方版本的RGB库
* esp32 arduino通讯类增加蓝牙
* 更新库，将mixly原版的库加入到iot中，防止缺少库的问题出现。

#### 0.2.3 2019-03-02
* esp32 arduino新增Blynk
* 硬件定时器4个
* 触摸中断
* 管脚中断
* 支持掌控板，Mixgo,ESP32等设备连入Blynk
* 掌控板上传程序时要同时按住A B

#### 0.2.2 2019-02-28
* esp32 arduino新增OLED
* 修复mixly 代码视图中代码无法复制的问题
* 删除Mixly_For_IoT\arduino-1.8.8\libraries目录，避免出现问题
* 解决Blynk中 硬件已连接 模块与时间同步模块，桥接模块的冲突问题。

#### 0.2.1 2019-02-15
* esp32 arduino 新增蓝牙串口连接
* 支持多个DHT11

#### 0.2.0 2019-02-15
* 更新blynk-arduino库到0.6.0
* 更新BlynkLib.py库到0.2.0
* 更新u8g2库到2.25.10
* ESP8266视图新增高级视图
* 精简ESP8266 普通视图，移除部分使用频率低的功能。

#### 0.1.7 2019-01-07
* 修复UNO等开发板二次上传失败的问题
* 整理文件，减小与mixly官方库的差异
* 增加syncVirtual、BLYNK_CONNECTED BLYNK_APP_CONNECTED BLYNK_APP_DISCONNECTED 
* 修改factory自定义块
* 增加Bylnk定时器选择，共16个

#### 0.1.6 2019-01-07
* 更新BlynkLib.py支持掌控連接Blynk國內服務器
* 更新esp32 arduino index 为后期做准备
* 新增esp8266 index，独立esp8266，blynk只能在esp8266中使用

#### 0.1.5 2018-11-20
* 更新esp8266库为2.5.0beta2
* 更新esp32库为1.0.1 
* 更新mixly到最新0.999版本
* 新增Python编程，新增掌控板

#### 0.1.4 2018-11-20
* 解决无法导入其他库的问题
* 统一arduino库路径
* 修复blynk定时器、发送、获取等模块必须初始化之后的问题
* 升级esp32库

#### 0.1.3 2018-11-08
* 修复从App获取数据模块无法删除的问题
* 添加范例程序，路径：Mixly_For_IoT\sample
* 删除OLED库中的显示字符串模块

#### 0.1.2 2018-10-30
* 修复IIC点阵屏幕LED_ON,LED_OFF丢失定义的问题
* 修改蜂鸣器相关函数，不再使用含有定时器的蜂鸣器函数
* 更新u8g2库、esp8266 Remote库
* 修正adxl345库，解决无法编译345的问题
* 显示类别中独立IIC 点阵和MAX7219点阵。

#### 0.1.1 2018-10-20
* 修复MAX7219缺少库问题
* 添加TM1637清屏功能
* 默认服务器地址为国内服务器地址

#### 0.1.0 2018-10-15
* 更新arduino版本到1.8.7
* 更新esp8266到2.4.2
* 更新blynk库到0.5.9
* 新增终端组件、时间输入组件（简单）,视频流，光线传感器，重力传感器，加速度传感器
* 更换各组件的图标，与blynk app一致
* 修复iot版本中arduino类硬件无法重复编译的问题。

#### 0.0.7 2018-09-22
* 新增一键配网功能，并增加一键配网使用指南二维码。
* 新增USB连接模式，让UNO连上物联网。
* 新增扫码学习模块，通过二维码引导师生学习查找相关资料。
* 同步Mixly官方更新内容，新增代码模式的主题色。

#### 0.0.6 2018-08-17
* Mixly中添加通知模块，对Blynk app notification对应。
* sample中新增示例，提高易用性。
* 修复部分小bugs

#### 0.0.5 2018-08-01
* 修复从app获取数据，定时器等模块，使其成为独立模块。
* 新增blynk音乐播放组件
* 新增mixly GD5800 MP3模块

#### 0.0.4
* 新增blynk桥接模块，桥接授权码，桥接数字、模拟、虚拟管脚
* Blynk RTC组件
* 翻译中文字段到英文

#### 0.0.3
* blynk LED组件
* Blynk 定时器、发送数据到app，从app接收数据等模块

#### 0.0.2
* Mixly添加blynk服务器信息模块，完成物联网图形化编程第一步。
* 修改Blynk中文库示例，汉化，降低难度。

#### 0.0.1 2018-07-15
* Mixly 添加esp8266硬件开发库，可以通过mixly代码模式给esp8266编写程序，完成初始测试工作
* Mixly 中增加Blynk中文库。