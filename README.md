# Auth_tutorial

## (1) Init Project

    mkdir Auth_tutorial
    cd Auth_tutorial
    npm init -y

## (2) Install module

    npm i -D nodemon #2.0.12
    npm i express #4.17.1
    npm i morgan #1.10.0
    npm i http-errors #1.8.0
    npm i dotenv #10.0.0
    npm i mongoose #5.13.3
    npm i @hapi/joi #17.1.1
    npm i bcrypt #5.0.1
    npm i jsonwebtoken #8.5.1
    npm i redis #3.1.2

## (3) Git

    git init
    git status
    git add .
    git commit -m 'your message'
    git remote add origin 'your_url_name'
    git remote -v
    git push -u origin master
    
    git branch --unset-upstream
    git push --set-upstream origin master

## (4) Optional

    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    brew update
    brew install redis #6.2.4
    brew services start redis
    brew services stop redis

    sudo npm i -g redis-commander
    redis-commander
    redis-cli
