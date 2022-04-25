#! /usr/bin/bash

#   I installed xclip to copy commands and it worked 
# when I run each command manually from terminal. But when I tried
# to make bash program it couldn't paste the copied output to the file. 

touch $(date '+%Y-%Y-%m-%d_%H-%M-%S.txt')
history 20 | xclip -i

xclip -o > $(date '+%Y-%Y-%m-%d_%H-%M-%S.txt')

