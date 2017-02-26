cls

rem build
CMD /C "npm run build"
pushd build
set from=%cd%
popd

rem deploy
pushd c:\inetpub\wwwroot\
del *.woff2 *.ttf *.eot *.woff *.ico *.html *.js *.js.map *.config
copy %from%\* .
popd
