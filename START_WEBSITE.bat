@echo off
title IDHIKA GROUP - Web Server Launch
echo Starting IDHIKA GROUP Server...
cd /d "%~dp0"

:: Check if Node.js is available
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] Node.js is not installed on your system!
    echo Please download and install Node.js from https://nodejs.org/
    pause
    exit /b
)

:: Install dependencies if missing
if not exist "node_modules" (
    echo Installing dependencies...
    call npm install
)

:: Start server in a dedicated command window
echo Launching Node.js Server...
start "IDHIKA Server Engine" cmd /k "node server.js"

:: Give the server 3 seconds to boot up
timeout /t 3 /nobreak >nul

:: Open browser
start http://localhost:3000