@echo off
title The Lay Dharma Household Bhāvanā Launcher
echo =======================================================
echo    Starting The Lay Dharma Household Bhavana
echo =======================================================
echo.
start http://localhost:8081
powershell -ExecutionPolicy Bypass -File "%~dp0server.ps1"
pause
