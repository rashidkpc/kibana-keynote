# kibana-keynote
A Kibana app for displaying Keynote presentations that have been exported as PNGs

#### Who needs this?
Well, mostly me. I'm basically incompetent with a keyboard and after many tries I have concluded I lack the ability to switch back and forth between kibana and keynote while delivering a talk.

#### How does this help?
This lets me drop a collection of slides, exported as PNGs, and numbered in alphabetical order to `src/public/slides` (Keynote will do all this cleanly with its export function) and load them up right in Kibana. I can move around Kibana and everything goes smoothly. This keynote plugin keeps track of the last slide I was on and goes back to it, even as I switch Kibana apps.

#### Any gotchas?
Yeah sure. The first being that if you need help getting this rolling, you'll have to track me down in #kibana on freenode because the chance I'm going to look at this repo after delivering a talk, but before preparing for another talk is exactly zero, zip, nada. Here some other stuff you should know:

- To change slides, use your keyboard's directional arrows. Tapping the mouse isn't going to work. I'd take a pull to fix that.
- For obvious reasons, no presenter notes.
- Drop your slides **as pngs** in `src/public/slides`. No sub directories or other funny business. Just fill the directory with pngs. Not jpgs, no gifs, not a raw keynote presentation. PNGs. Pee-en-gee.
- By default the slides are in `cover` mode, so they're "full bleed", meaning they will get as much of the slide as possible on the screen, but will clip where needed, usually 15 or so pixels from each side. If you don't like that could can hit `alt + f` to move to `contain` mode ...
- In `contains` more its like watching a movie with those black bars at the top and bottom of the screen. So gross right? Kibana-Keynote tries to solve the black bar problem by reading the value of the pixel at position (0,0) on each slide, and using that for the bars. If your slides aren't the same color on every side this is going to look stupid. I'm not fixing that. My slides are the same color on all 4 sides.
- If you're not running from Kibana's source "dev mode" you'll need to `rm -rf optimize/bundles` in the Kibana directory every time you replace your slides. You'll also need to bounce Kibana.
- The currently checked in slides are my slides from Devoxx FR 2016.

#### Anything else?
Seriously, #kibana on freenode. I'm not looking at this repo.
