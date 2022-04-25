#! /bin/bash


while true; 
do 
    scrot -d 2 '%Y-%Y-%m-%d_%H-%M-%S.txt.png' -e 'mv $f /"Screenshot data "'; #by changing d you can control time delay
done

