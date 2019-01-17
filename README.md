# node-express-cra-deploy-elasticbeanstalk

Here a simple boilerplate to have a node app hooked with create-react-app ( using proxy for dev ) and ready to be deployed on aws elastic beanstalk. 

**setup**

create a IAM
https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html
give access for programmatic access

install aws eb-cli
https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb-cli3-install.html

add your credentials in .aws credentials like this: 
aws_access_key_id = xxx
aws_secret_access_key = xxx

**create-eb-environment**

go on your folder root.
`eb init`
choose the correct region ( the one you setuo in your IAM)
create a new app
Do you wish to continue with CodeCommit? Yes
Do you want to set up SSH for your instances? Yes
select a key pair or create one

`eb create <name-env>`

`eb deploy`

then 
`eb open`

useful commands
`eb logs`
`eb ssh`

**IMPORTANT NOTES.**
1) if you are in a git repo, don't forget to commit, before `eb deploy`
2) in .ebextensions there is a command that allow the writing in `client` from node.js
without this, you will probably get an error
3) don't forget to change in aws configuration / software to add `npm start` as command, otherwise node will simply run `node app.js` as default and will fail to install all the dependencies, and build the `build`
you can use `prestart` npm command if your npm start get too complicated.

**Run**
`npm run dev` will launch create-react-app web server and nodemon on the app. 

`npm run prod` will create a build and launch a local server to test

`npm start` is being used by elastic, but is similar to prod, just using node instead of nodemon.
