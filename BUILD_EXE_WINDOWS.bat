@echo off
chcp 65001 >nul
echo Divarpanel.az Qaime - EXE qurulmasi
where node >nul 2>nul
if errorlevel 1 (
 echo Node.js tapilmadi. https://nodejs.org saytindan Node.js LTS qurasdirin.
 pause
 exit /b 1
)
call npm install
if errorlevel 1 goto err
call npm run dist
if errorlevel 1 goto err
echo Hazir EXE fayllari dist qovlugundadir.
pause
exit /b 0
:err
echo Qurulma xetasi. Internet ve Node.js versiyasini yoxlayin.
pause
exit /b 1
