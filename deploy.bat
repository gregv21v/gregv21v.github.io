
# build
cd vue
npm run build

# navigate into the build output directory
cd ..

# delete dist files from root
rmdir css 
rmdir js
rmdir pages 
rmdir screenshots
rmdir svgArt 
del "favicon.ico"
del "index.html"

# copy dist files to root
copy "vue/dist" dist


# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
git push -f git@github.com:gregv21v/gregv21v.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -
