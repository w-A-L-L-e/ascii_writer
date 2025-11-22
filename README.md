## Ascii Writer

### Installation

```
npm install
node ascii_writer.js
```

This then prints an example and shows the usage.

```
$ node ascii_writer.js

 .d888888                    oo oo    dP   dP   dP          oo   dP
d8'    88                             88   88   88               88
88aaaaa88a .d8888b. .d8888b. dP dP    88  .8P  .8P 88d888b. dP d8888P .d8888b. 88d888b.
88     88  Y8ooooo. 88'  `"" 88 88    88  d8'  d8' 88'  `88 88   88   88ooood8 88'  `88
88     88        88 88.  ... 88 88    88.d8P8.d8P  88       88   88   88.  ... 88
88     88  `88888P' `88888P' dP dP    8888' Y88'   dP       dP   dP   `88888P' dP
oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo

USAGE: node ascii_writer.js <FONT> <YOUR TEXT>

   Example fonts: Kban, Georgi16, Graffiti, Terrace, DOS Rebel.
   (more fonts in ./node_modules/figlet/fonts/)

```

So if you want a different font and text here's an example for that:

```
$ node ascii_writer Graffiti "Hello world"

  ___ ___         .__  .__                               .__       .___
 /   |   \   ____ |  | |  |   ____   __  _  _____________|  |    __| _/
/    ~    \_/ __ \|  | |  |  /  _ \  \ \/ \/ /  _ \_  __ \  |   / __ |
\    Y    /\  ___/|  |_|  |_(  <_> )  \     (  <_> )  | \/  |__/ /_/ |
 \___|_  /  \___  >____/____/\____/    \/\_/ \____/|__|  |____/\____ |
       \/       \/                                                  \/

```

### About ascii writer

Small tool I made years ago. I used to have a Qt/c++ version called WMAnsiEd way back in 2000.
https://walter.schreppers.com/page?content=ansied

However the code didn't compile on modern Qt framework anymore and I didn't find the time to fix it.

Then did some googling and stumbled on an exellent figlet library
which pretty much had all the features I needed.

This little project just wraps it in a simple commandline program.
I had this on my old laptop and a few days ago someone asked me how I did some logo on a small webtool
I made in 2021. So on a late friday night I decided to look it up and just
post it on github here for others to use and enjoy.

### References

The figlet library with all the ascii and ansi fonts:
https://github.com/patorjk/figlet.js

To render these in browser you could use:
https://github.com/drudru/ansi_up

### Linux cli without node

Just wanted to add this for completeness. On linux figlet was around ages ago.
So you can also just do the following:

```
sudo apt install figlet
```

And then even use the same fonts from figlet.js package like so:

```
figlet -f node_modules/figlet/fonts/Graffiti.flf "Hello world"
```

Nowadays on windows 11 you probably also can just use this using WSL.
Making this little tool obsolete apart from all those nice included fonts ;)
