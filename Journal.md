PRIMARY GOAL IS TO GET THE SITE WORKING STYLING SHOULD ONLY BE DONE AFTERWARDS IF TIME REMAINS
HIT DISPLAY SOURCE BLOB FOR EASIER VIEWING

Any freetime should be spent on research for needed fuctions.

Notes:(Updated as project continues)
-html
May try to find a 'switch'/'slider' style for varient play button in that case must find how to set up
Need to determine wether to put stakes buttons above or below gdsp
Decide wether to render game display via html/js

-js
May try to find a 'switch'/'slider' style for varient play button in that case must find how to set up
Figure out how to create a more dynamic version for wagering
(would likly nessitate removing diffrence between HS/LS or triggering a switch at 200cu)
Find out how add randomint funcs together
Figure out how to pass bet into W/L func
W/L func needs to be able to see output of random int func
Order of funcs(? have to check)
.input H/L stakes(may not do in favor of dynamic)<- did that(kinda) instead
.input Money amount x
.random intgen for each button x(not sure how to take output from both and combine)
.stop rig funcs after hitting num >16(probably don't need to do this)<- Modified asks for contiuned gambling after 16
.output W/L conditions
.use W/L Cons to calc money x(i think)
.change money amount x(i think)
.play agian Y/N?-take winnings or continue playing? vaguliy headed in that direction
pass rig funcs as var?
Ive relized a system that Im incapable of coding that being a tracking across reloads of playr money
WARNING VARABILES IN MOST FUNCTIONS MAY NEED TO BE CHANGED IN ORDER TO MOVE TOWARDS WORKING PROTOTYPE
Wasn't able to find a way to output rifs from sepreat click funcs to the same var/HTML element


-css(won't get to styling no time)
Have to figure out how render a background/effects for win-loose
seem to have forgoton many basic CSS functions will need to re-learn