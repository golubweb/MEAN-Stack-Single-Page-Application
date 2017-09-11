Install MongoDB

1. go to https://www.mongodb.com/download-center?jmp=nav#community
2. select the version (example: click on "Windows" and select "Windows Server 2008 R2 64-bit and later, with SSL support x64", after that "Download")
3. when you finish the installation on the "C" partition on the computer, you need to create several folders inside the mongoose (folders: data, log)
4. create a folder "db" within the data folder, in db folder will be your data
5. open "cmd" as an administrator, navigate to c:\<your mongodb path folder>\bin
6. run this command: mongod --directoryperdb --dbpath c:\<your mongodb path folder>\data\db --logpath c:\<your mongodb path folder>\log\mongo.log --logappend --rest --install
7. in bin folder run this command: net start MongoDB
8. after that run command: mongo
9. mongodb is started

# install module: npm install

# run server: nodemon ./bin/www
# npm run build
# npm run watch
