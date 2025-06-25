#!/bin/bash

git remote -v
git status
git add .
git status
git commit -m "$1"
git status
git push -u origin main
git status