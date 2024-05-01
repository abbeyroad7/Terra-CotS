:START
@echo Choose selection:
@echo (1)Sync (2)WebUI (3)Github
@echo off
cd C:\Users\Admin\quartz
set /p cho=
if %cho%==1 goto SYNC
if %cho%==2 goto WEB
if %cho%==3 goto GIT

:SYNC

pause
goto START

:WEB
npx quartz sync
pause
goto START

:GIT
node
npx quartz build --serve
pause
goto START