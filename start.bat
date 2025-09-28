@echo off
REM ====== CONFIGURE THIS ======
set CMDER_PATH=C:\Program Files\cmder\Cmder.exe
REM ===========================

REM Launch Cmder in the current folder and run "npm run dev"
start "" "%CMDER_PATH%" /START "%CD%" /TASK cmd /K "npm run dev"