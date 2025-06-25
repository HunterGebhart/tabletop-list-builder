#!/bin/bash

git remote -v
echo "---------- STATUS ----------"
git status
echo "********** GIT ADD **********"
git add .
echo "---------- STATUS ----------"
git status
echo "********** GIT COMMIT **********"
git commit -m "$1"
echo "---------- STATUS ----------"
git status
echo "********** GIT PUSH **********"
git push -u origin main
echo "---------- STATUS ----------"
git status