@echo off
echo ========================================
echo   Starting Portfolio Development Server
echo ========================================
echo.
echo Opening portfolio at http://localhost:5173
echo Press Ctrl+C to stop the server
echo.

cd /d "%~dp0"
npm run dev

pause
