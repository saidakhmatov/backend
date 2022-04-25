#! /usr/bin/bash


touch $(date '+%Y-%Y-%m-%d_%H-%M-%S.txt')
history 20 | xclip -i

xclip -o > $(date '+%Y-%Y-%m-%d_%H-%M-%S.txt')

#When I specified the folder name in script my bash program 
#worked but in above case it didn't work because time
#and date not exact so it couldn't found file to paste