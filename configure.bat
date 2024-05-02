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
@echo off
cls
powershell Copy-Item -Path 'D:\Documents\Notes\DND\Quartz\*\' -Destination 'C:\Users\Admin\quartz\content\' -Force -Recurse -Exclude configure.bat

powershell Remove-Item -Path 'D:\Documents\Notes\DND\Quartz\*\' -Destination 'C:\Users\Admin\quartz\content\' -Force -Recurse -Exclude configure.bat
pause
cls
goto START

:WEB
cls
C:\Users\Admin\quartz\configure-sync.bat
pause
cls
goto START

:GIT
cls
node
npx quartz build --serve
pause
cls
goto START