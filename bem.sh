#!/bin/zsh
# to make it work type 
# ❯ zsh bem.sh form 
block="$1"
elem="$2"
mod="$3"
mod="$4"

if [ "$#" -eq 1 ]; then
    code "blocks/$block/$block.css"
    exit
fi

if [ "$#" -eq 2 ]; then
    code "blocks/$block/__$elem/$block""__""$elem.css"
    exit
fi
if [ "$#" -eq 3 ]; then
    code "blocks/$block/__$elem/$block""__""$elem""_""$mod.css"
    exit
fi
if [ "$#" -eq 3 ]; then
    code "blocks/$block/__$elem/$block""__""$elem""_""$mod""_""$val.css"
    exit
fi
