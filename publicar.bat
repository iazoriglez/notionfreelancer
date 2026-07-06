@echo off
cd /d "C:\Users\f.zori\Claude\Projects\Notion Templates\notionfreelancer"
git add .
git commit -m "post: publicacion semanal"
git push origin main
echo.
echo Posts publicados correctamente. Cloudflare desplegara en ~30 segundos.
pause
