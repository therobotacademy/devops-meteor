In this introductory course you will learn how to create a complete, multi-user web site using the Meteor.js framework and MongoDB. You will implement user authentication, security features, reactive templates and routing using iron router. You will also carry out key database operations such as inserting, removing and updating data as well as sorting and filtering. Finally, you will see how a complete application can be built, line by line.

This is the code of the course https://www.coursera.org/learn/meteor-development

# Week 1 Introduction to Meteor
In this module we'll be installing Meteor tools, editing a template and learning how to define a template helper and template event listeners.
https://www.meteor.com/install

```$ curl https://install.meteor.com/ | sh```

You will receive this output:

*Meteor 1.7.0.5 has been installed in your home directory (~/.meteor).
Writing a launcher script to /usr/local/bin/meteor for your convenience.
This may prompt for your password.*

To get started fast:
```
  $ meteor create ~/my_cool_app
  $ cd ~/my_cool_app
  $ meteor
```
*Or see the docs at:*  ```docs.meteor.com```

For uninstalling:
```
$ sudo rm /usr/local/bin/meteor
$ rm -rf ~/.meteor
```
Then run the app of week 1:
```
$ cd ~
$ git clone https://github.com/therobotacademy/devops-meteor meteor-source
$ mkdir ~/meteor-dev
$ cd meteor-dev
$ meteor create image-share --bare

$ cd image-share
$ cat .meteor/release  # This will check which version is installed

$ cp -r ~/meteor-source/_meteor_Intro_coursera/week_1_image_share/* .

$ meteor
```



# Week 2 Databases and collections
We will be creating Mongo Collections and using Mongo find and insert operations. In addition, we will be looking at how to control a Bootstrap modal from Meteor and we will be using third party Meteor packages to add functionality.
- Create a mongodb collection
- Use mongodb find and insert operations
- Operate a Bootstrap modal from Meteor
- Use third party Meteor packages to add functionality

# Week 3 User authentication
In this module we will be looking at adding a user authentication to your Meteor app and learning how to use Mongo filters. Finally, we will be using the Meteor reactive Session variable and we will implement an infinite scroll.
- Employ user authentication in your Meteor app
- Use mongodb filters
- Use the Meteor reactive session variable
- Create an infinite scroll function

# Week 4 Security and routing
In this module we will show you how to perform basic security testing on your app and how to implement basic data security features. In addition, we will look at how to organise Meteor application code and how to implement multiple routes using iron:router.
- Evaluate the basic security of your app
- Develop basic data security features
- Use folders to organise Meteor application code
- Use iron:router to implement routes
