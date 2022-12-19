cd /d C:\Users\QA.AUTOMATION\Documents\autochekQA-main

set mydate = %date:/=%
set mytime = %time::=%
set mytimestamp = %mydate: =_%_%mytime:.=_%

echo "successful"

npx cypress run
