rem build this project before deploying it 
rem with the command npm run build

rem copy dist files to root overwriting existing files
del "../css"
xcopy "./dist/css" "../css" /E/Y

del "../js"
xcopy "./dist/js" "../js" /E/Y

del "../pages"
xcopy "./dist/pages" "../pages" /E/Y

xcopy "./dist/screenshots" "../screenshots" /E/Y
xcopy "./dist/svgArt" "../svgArt" /E/Y
copy "./dist/favicon.ico" "../favicon.ico" /E/Y 
copy "./dist/index.html" "../index.html" /E/Y 
copy "./dist/index.html" "../404.html" /E/Y


rem if you are deploying to a custom domain
rem echo 'www.example.com' > CNAME

rem git init
rem git add -A
rem git commit -m 'deploy'

rem if you are deploying to https://<USERNAME>.github.io
rem git push -f git@github.com:gregv21v/gregv21v.github.io.git master

rem if you are deploying to https://<USERNAME>.github.io/<REPO>
rem git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

rem cd ..
