# Task 1

```bash
#! /usr/bin/bash

#find by name
ls | grep findme
find findme*

# Finds by ending 
find *.txt 

# Other option
locate -i findmes
```
### Various ways of finding file
<br />
<br />

# Task 2

```bash
#! /usr/bin/bash

touch $(date '+%Y-%Y-%m-%d_%H-%M-%S.txt')
history 20 | xclip -i

xclip -o > $(date '+%Y-%Y-%m-%d_%H-%M-%S.txt')
```
   
### I installed xclip to copy commands and it worked when I run each command manually from terminal. But when I tried to make bash program it couldn't paste the copied output to the file. When I specified the folder name in script my bash program has been executed correctly but in above case it didn't work because time and date not exact so it couldn't found file to paste


