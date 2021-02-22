@echo off
title Mixly ��װ^&��������
@echo off
echo. 
echo ***************************Mixly ��װ^&��������****************************
echo ��л��ѡ��ʹ��Mixly�����������ǵ�һ��ʹ�ñ����������ϸ�Ķ���˵����
echo.
echo.
echo ĿǰMixly���֧�ֶԶ���Ӳ���ı�̣���Ϊ֧������Ӳ�������Ҫռ����Ӳ�̽ϴ�Ŀռ䣬������ѡ��ֻ��װ����Ҫ�õ��Ĳ��ֹ��ܼ��ɡ�
echo.
echo Mixly���֧�ֵ�Ӳ��������˵�����£�
echo ��Arduino AVRϵ�п����壨����Arduino UNO,Nano,Mega 2560,Pro Mini �ȣ�ΪĬ��֧�֣�����ѡ��
echo ��MicroPython ESP32ϵ�п�����(MicroPython[ESP32_MixGo]��MicroPython[ESP32_HandBit]��)ΪĬ��֧�֣�����ѡ��
echo ��ESP8266ϵ�п����壨����WeMos D1,NodeMCU �ȣ�
echo ��ESP32ϵ�п����壨����MixGo,�ƿذ�,��ͨESP32������ȣ�
echo ��Python(��Python,����Ӳ����֧��ͼ�λ��ʹ��뻥��ת��)
echo ��STM32ϵ�п�����
echo.
echo.
echo ��װ^&����������ʼ��������ѡ��װ���ֹ��ܣ�����y��ʾ��װ�ù��ܣ�����n��ʾ����װ�ù��ܡ�
@echo off

echo.
set python_select=
set /p python_select=��װ Python(y/n):
IF "%python_select%"=="n" (
	echo No
) ELSE (
	echo Yes
)
echo.
set esp32_select=
set /p esp32_select=��װ ESP32(y/n):
IF "%esp32_select%"=="n" (
	echo No
) ELSE (
	echo Yes
)
echo.
set esp8266_select=
set /p esp8266_select=��װ ESP8266(y/n):
IF "%esp8266_select%"=="n" (
	echo No
) ELSE (
	echo Yes
)
echo.
set vesp8266_select=
set /p vesp8266_select=��װ VIET ESP8266(y/n):
IF "%vesp8266_select%"=="n" (
	echo No
) ELSE (
	echo Yes
)
echo.
set stm32_select=
set /p stm32_select=��װ STM32(y/n):
IF "%stm32_select%"=="n" (
	echo No
) ELSE (
	echo Yes
)

IF EXIST "%~dp0"\.git\index.lock ( 
	del /f /s /q "%~dp0"\.git\index.lock > nul
	rd /q /s "%~dp0"\.git\index.lock > nul
)

echo.
echo.
cd "%~dp0"\PortableGit\cmd\
rem ����mixly�����ֿ�
git reset --hard origin/master
git pull origin master

git gc
git prune

rem rd/s/q "%~dp0"\.git\refs\original > nul
rem rd/s/q "%~dp0"\.git\logs\ > nul

IF EXIST "%~dp0"\arduino\portable\packages\esp8266\.git ( 
	IF EXIST "%~dp0"\arduino\portable\packages\.git (
		del /f /s /q "%~dp0"\arduino\portable\packages\.git > nul
		rd /q /s "%~dp0"\arduino\portable\packages\.git > nul
	)
)

rem ����esp32 Ӳ���ֿ�
IF "%esp32_select%"=="n" (
	IF EXIST "%~dp0"\arduino\portable\packages\esp32 (
		del /f /s /q "%~dp0"\arduino\portable\packages\esp32 > nul
		rd /q /s "%~dp0"\arduino\portable\packages\esp32 > nul
	)
	rem ɾ��ESP32ϵ�а忨�Ľ���
	del /f /s /q "%~dp0"\blockly\apps\mixly\index_board_Arduino_ESP32.html > nul
	del /f /s /q "%~dp0"\blockly\apps\mixly\index_board_Arduino_HandBit.html > nul
	del /f /s /q "%~dp0"\blockly\apps\mixly\index_board_Arduino_MixePi.html > nul
	del /f /s /q "%~dp0"\blockly\apps\mixly\index_board_Arduino_MixGo.html > nul
) ELSE (
	IF EXIST "%~dp0"\arduino\portable\packages\esp32\.git (
		echo A|xcopy "%~dp0"\PortableGit "%~dp0"\arduino\portable\packages\esp32\PortableGit\ /s /c /h > nul
		echo.
		echo.
		cd "%~dp0"\arduino\portable\packages\esp32\PortableGit\cmd\
		git reset --hard origin/master
		git pull origin master
		cd "%~dp0"
		del /f /s /q "%~dp0"\arduino\portable\packages\esp32\PortableGit > nul
		rd /q /s "%~dp0"\arduino\portable\packages\esp32\PortableGit > nul
	) ELSE (
		IF EXIST "%~dp0"\arduino\portable\packages\esp32 (
			del /f /s /q "%~dp0"\arduino\portable\packages\esp32 > nul
			rd /q /s "%~dp0"\arduino\portable\packages\esp32 > nul
		)
		echo.
		echo.
		cd "%~dp0"\PortableGit\cmd\
		git clone https://gitee.com/devshop2019/win_esp32.git "%~dp0arduino\portable\packages\esp32\
	)
)

rem ����esp8266Ӳ���ֿ�
IF "%esp8266_select%"=="n" (
	IF EXIST "%~dp0"\arduino\portable\packages\esp8266 (
		del /f /s /q "%~dp0"\arduino\portable\packages\esp8266 > nul
		rd /q /s "%~dp0"\arduino\portable\packages\esp8266 > nul
	)
	rem ɾ��ESP8266����
	del /f /s /q "%~dp0"\blockly\apps\mixly\index_board_Arduino_ESP8266.html > nul
) ELSE (
	IF EXIST "%~dp0"\arduino\portable\packages\esp8266\.git (
		echo A|xcopy "%~dp0"\PortableGit "%~dp0"\arduino\portable\packages\esp8266\PortableGit\ /s /f /h > nul
		echo.
		echo.
		cd "%~dp0"\arduino\portable\packages\esp8266\PortableGit\cmd\
		git reset --hard origin/master
		git pull origin master
		cd "%~dp0"
		del /f /s /q "%~dp0"\arduino\portable\packages\esp8266\PortableGit > nul
		rd /q /s "%~dp0"\arduino\portable\packages\esp8266\PortableGit > nul
	) ELSE (
		IF EXIST "%~dp0"\arduino\portable\packages\esp8266 (
			del /f /s /q "%~dp0"\arduino\portable\packages\esp8266 > nul
			rd /q /s "%~dp0"\arduino\portable\packages\esp8266 > nul
		)
		echo.
		echo.
		cd "%~dp0"\PortableGit\cmd\
		git clone https://gitee.com/devshop2019/win_esp8266 "%~dp0arduino\portable\packages\esp8266\
	)
)

rem ����esp8266Ӳ���ֿ�
IF "%vesp8266_select%"=="n" (
	IF EXIST "%~dp0"\arduino\portable\packages\vietesp8266 (
		del /f /s /q "%~dp0"\arduino\portable\packages\vietesp8266 > nul
		rd /q /s "%~dp0"\arduino\portable\packages\vietesp8266 > nul
	)
	rem ɾ��ESP8266����
	del /f /s /q "%~dp0"\blockly\apps\mixly\index_board_Vietduino_ESP8266_1.0.html > nul
) ELSE (
	IF EXIST "%~dp0"\arduino\portable\packages\vietesp8266\.git (
		echo A|xcopy "%~dp0"\PortableGit "%~dp0"\arduino\portable\packages\vietesp8266\PortableGit\ /s /f /h > nul
		echo.
		echo.
		cd "%~dp0"\arduino\portable\packages\vietesp8266\PortableGit\cmd\
		git reset --hard origin/master
		git pull origin master
		cd "%~dp0"
		del /f /s /q "%~dp0"\arduino\portable\packages\vietesp8266\PortableGit > nul
		rd /q /s "%~dp0"\arduino\portable\packages\vietesp8266\PortableGit > nul
	) ELSE (
		IF EXIST "%~dp0"\arduino\portable\packages\vietesp8266 (
			del /f /s /q "%~dp0"\arduino\portable\packages\vietesp8266 > nul
			rd /q /s "%~dp0"\arduino\portable\packages\vietesp8266 > nul
		)
		echo.
		echo.
		cd "%~dp0"\PortableGit\cmd\
		git clone https://github.com/devshop2019/win_vesp8266.git "%~dp0arduino\portable\packages\VietESP8266\
	)
)

rem ����stm32Ӳ���ֿ�
IF "%stm32_select%"=="n" (
	IF EXIST "%~dp0"\arduino\portable\packages\stm32duino (
		del /f /s /q "%~dp0"\arduino\portable\packages\stm32duino > nul
		rd /q /s "%~dp0"\arduino\portable\packages\stm32duino > nul
	)
	IF EXIST "%~dp0"\arduino\portable\packages\arduino\tools\arm-none-eabi-gcc (
		del /f /s /q "%~dp0"\arduino\portable\packages\arduino\tools\arm-none-eabi-gcc > nul
		rd /q /s "%~dp0"\arduino\portable\packages\arduino\tools\arm-none-eabi-gcc > nul
	)
	rem ɾ��STM32����
	del /f /s /q "%~dp0"\blockly\apps\mixly\index_board_Arduino_STM32.html > nul
) ELSE (
	IF EXIST "%~dp0"\arduino\portable\packages\stm32duino\.git (
		echo A|xcopy "%~dp0"\PortableGit "%~dp0"\arduino\portable\packages\stm32duino\PortableGit\ /s /f /h > nul
		echo.
		echo.
		cd "%~dp0"\arduino\portable\packages\stm32duino\PortableGit\cmd\
		git reset --hard origin/master
		git pull origin master
		cd "%~dp0"
		del /f /s /q "%~dp0"\arduino\portable\packages\stm32duino\PortableGit > nul
		rd /q /s "%~dp0"\arduino\portable\packages\stm32duino\PortableGit > nul
		echo A|xcopy "%~dp0"\arduino\portable\packages\stm32duino\arm-none-eabi-gcc "%~dp0"\arduino\portable\packages\arduino\tools\arm-none-eabi-gcc\ /s /f /h > nul
		del /f /s /q "%~dp0"\arduino\portable\packages\stm32duino\arm-none-eabi-gcc > nul
		rd /q /s "%~dp0"\arduino\portable\packages\stm32duino\arm-none-eabi-gcc > nul
	) ELSE (
		IF EXIST "%~dp0"\arduino\portable\packages\stm32duino (
			del /f /s /q "%~dp0"\arduino\portable\packages\stm32duino > nul
			rd /q /s "%~dp0"\arduino\portable\packages\stm32duino > nul
		)
		echo.
		echo.
		cd "%~dp0"\PortableGit\cmd\
		git clone https://gitee.com/devshop2019/win_esp32 "%~dp0arduino\portable\packages\stm32duino\
		echo A|xcopy "%~dp0"\arduino\portable\packages\stm32duino\arm-none-eabi-gcc "%~dp0"\arduino\portable\packages\arduino\tools\arm-none-eabi-gcc\ /s /f /h > nul
		del /f /s /q "%~dp0"\arduino\portable\packages\stm32duino\arm-none-eabi-gcc > nul
		rd /q /s "%~dp0"\arduino\portable\packages\stm32duino\arm-none-eabi-gcc > nul
	)
)

rem ����win_python3�ֿ�
IF "%python_select%"=="n" (
	IF EXIST "%~dp0"\mixpyBuild\win_python3 (
		del /f /s /q "%~dp0"\mixpyBuild\win_python3 > nul
		rd /q /s "%~dp0"\mixpyBuild\win_python3 > nul
	)
	rem ɾ��Python����
	del /f /s /q "%~dp0"\blockly\apps\mixly\index_board_mixpy.html > nul
) ELSE (
	IF EXIST "%~dp0"\mixpyBuild\win_python3\.git (
		echo A|xcopy "%~dp0"\PortableGit "%~dp0"\mixpyBuild\win_python3\PortableGit\ /s /f /h > nul
		echo.
		echo.
		cd "%~dp0"\mixpyBuild\win_python3\PortableGit\cmd\ 
		git reset --hard origin/master
		git pull origin master
		cd "%~dp0"
		del /f /s /q "%~dp0"\mixpyBuild\win_python3\PortableGit > nul
		rd /q /s "%~dp0"\mixpyBuild\win_python3\PortableGit > nul
	) ELSE (
		IF EXIST "%~dp0"\mixpyBuild\win_python3 (
			del /f /s /q "%~dp0"\mixpyBuild\win_python3 > nul
			rd /q /s "%~dp0"\mixpyBuild\win_python3 > nul
		)
		echo.
		echo.
		cd "%~dp0"\PortableGit\cmd\
		git clone https://gitee.com/devshop2019/win_python3 "%~dp0mixpyBuild\win_python3\
	)
)
cd "%~dp0"\PortableGit\cmd\

@echo on
echo Mixly ��������Enjoy it!
@echo off
pause
