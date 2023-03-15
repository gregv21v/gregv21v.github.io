rem build
cd vue
npm run build

rem navigate into the build output directory
cd ..



rem copy dist files to root overwriting existing files
xcopy "vue/dist" . /E


rem if you are deploying to a custom domain
rem echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

rem if you are deploying to https://<USERNAME>.github.io
git push -f git@github.com:gregv21v/gregv21v.github.io.git master

rem if you are deploying to https://<USERNAME>.github.io/<REPO>
rem git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd ..
