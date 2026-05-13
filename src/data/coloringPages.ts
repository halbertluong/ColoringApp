import { ColoringPage } from '../types';

const W = 900;
const H = 900;
const BG = `<rect width="${W}" height="${H}" fill="white"/>`;

const butterfly: ColoringPage = {
  id: 'butterfly',
  name: 'Butterfly',
  category: 'Nature',
  svgData: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}">${BG}
    <!-- Body -->
    <ellipse cx="450" cy="460" rx="16" ry="100" fill="white" stroke="#111" stroke-width="5"/>
    <!-- Head -->
    <circle cx="450" cy="345" r="26" fill="white" stroke="#111" stroke-width="5"/>
    <!-- Left antenna -->
    <path d="M437 322 C418 290 388 255 362 228" fill="none" stroke="#111" stroke-width="4" stroke-linecap="round"/>
    <circle cx="358" cy="224" r="12" fill="white" stroke="#111" stroke-width="4"/>
    <!-- Right antenna -->
    <path d="M463 322 C482 290 512 255 538 228" fill="none" stroke="#111" stroke-width="4" stroke-linecap="round"/>
    <circle cx="542" cy="224" r="12" fill="white" stroke="#111" stroke-width="4"/>
    <!-- Left upper wing -->
    <path d="M436 385 C375 340 225 305 180 365 C140 420 178 505 260 518 C335 530 420 472 436 425" fill="white" stroke="#111" stroke-width="5"/>
    <!-- Left upper wing – eye spot ring -->
    <circle cx="268" cy="422" r="48" fill="white" stroke="#111" stroke-width="3"/>
    <circle cx="268" cy="422" r="25" fill="white" stroke="#111" stroke-width="2.5"/>
    <circle cx="268" cy="422" r="10" fill="white" stroke="#111" stroke-width="2"/>
    <!-- Left upper wing – small dot -->
    <circle cx="340" cy="375" r="14" fill="white" stroke="#111" stroke-width="2.5"/>
    <!-- Right upper wing -->
    <path d="M464 385 C525 340 675 305 720 365 C760 420 722 505 640 518 C565 530 480 472 464 425" fill="white" stroke="#111" stroke-width="5"/>
    <!-- Right upper wing – eye spot ring -->
    <circle cx="632" cy="422" r="48" fill="white" stroke="#111" stroke-width="3"/>
    <circle cx="632" cy="422" r="25" fill="white" stroke="#111" stroke-width="2.5"/>
    <circle cx="632" cy="422" r="10" fill="white" stroke="#111" stroke-width="2"/>
    <!-- Right upper wing – small dot -->
    <circle cx="560" cy="375" r="14" fill="white" stroke="#111" stroke-width="2.5"/>
    <!-- Left lower wing -->
    <path d="M436 510 C390 530 308 552 272 600 C238 645 264 702 318 698 C372 694 428 642 440 585" fill="white" stroke="#111" stroke-width="5"/>
    <!-- Left lower wing detail -->
    <circle cx="313" cy="635" r="28" fill="white" stroke="#111" stroke-width="2.5"/>
    <circle cx="313" cy="635" r="13" fill="white" stroke="#111" stroke-width="2"/>
    <!-- Right lower wing -->
    <path d="M464 510 C510 530 592 552 628 600 C662 645 636 702 582 698 C528 694 472 642 460 585" fill="white" stroke="#111" stroke-width="5"/>
    <!-- Right lower wing detail -->
    <circle cx="587" cy="635" r="28" fill="white" stroke="#111" stroke-width="2.5"/>
    <circle cx="587" cy="635" r="13" fill="white" stroke="#111" stroke-width="2"/>
    <!-- Face – eyes -->
    <circle cx="438" cy="342" r="9" fill="black"/>
    <circle cx="462" cy="342" r="9" fill="black"/>
    <circle cx="441" cy="339" r="3" fill="white"/>
    <circle cx="465" cy="339" r="3" fill="white"/>
    <!-- Smile -->
    <path d="M438 362 Q450 372 462 362" fill="none" stroke="#111" stroke-width="3" stroke-linecap="round"/>
  </svg>`,
};

const hotAirBalloon: ColoringPage = {
  id: 'balloon',
  name: 'Hot Air Balloon',
  category: 'Adventure',
  svgData: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}">${BG}
    <!-- Balloon outer -->
    <ellipse cx="450" cy="370" rx="230" ry="280" fill="white" stroke="#111" stroke-width="5"/>
    <!-- Balloon vertical panels -->
    <line x1="310" y1="130" x2="268" y2="600" stroke="#111" stroke-width="3.5"/>
    <line x1="380" y1="95" x2="380" y2="645" stroke="#111" stroke-width="3.5"/>
    <line x1="450" y1="90" x2="450" y2="648" stroke="#111" stroke-width="3.5"/>
    <line x1="520" y1="95" x2="520" y2="645" stroke="#111" stroke-width="3.5"/>
    <line x1="590" y1="130" x2="632" y2="600" stroke="#111" stroke-width="3.5"/>
    <!-- Horizontal band across balloon center -->
    <path d="M222 360 Q450 400 678 360" fill="none" stroke="#111" stroke-width="3"/>
    <path d="M222 360 Q450 320 678 360" fill="none" stroke="#111" stroke-width="3"/>
    <!-- Balloon bottom skirt -->
    <path d="M325 610 Q450 650 575 610" fill="white" stroke="#111" stroke-width="4"/>
    <!-- Ropes -->
    <line x1="340" y1="638" x2="385" y2="720" stroke="#111" stroke-width="4" stroke-linecap="round"/>
    <line x1="560" y1="638" x2="515" y2="720" stroke="#111" stroke-width="4" stroke-linecap="round"/>
    <line x1="420" y1="648" x2="415" y2="720" stroke="#111" stroke-width="3" stroke-linecap="round"/>
    <line x1="480" y1="648" x2="485" y2="720" stroke="#111" stroke-width="3" stroke-linecap="round"/>
    <!-- Basket -->
    <rect x="375" y="718" width="150" height="105" rx="10" fill="white" stroke="#111" stroke-width="5"/>
    <line x1="375" y1="755" x2="525" y2="755" stroke="#111" stroke-width="3"/>
    <line x1="375" y1="788" x2="525" y2="788" stroke="#111" stroke-width="3"/>
    <line x1="415" y1="718" x2="415" y2="823" stroke="#111" stroke-width="3"/>
    <line x1="450" y1="718" x2="450" y2="823" stroke="#111" stroke-width="3"/>
    <line x1="485" y1="718" x2="485" y2="823" stroke="#111" stroke-width="3"/>
    <!-- Passengers (stick figures) -->
    <circle cx="418" cy="735" r="10" fill="white" stroke="#111" stroke-width="2.5"/>
    <circle cx="482" cy="735" r="10" fill="white" stroke="#111" stroke-width="2.5"/>
    <!-- Left cloud -->
    <ellipse cx="155" cy="200" rx="55" ry="38" fill="white" stroke="#111" stroke-width="4"/>
    <ellipse cx="110" cy="215" rx="42" ry="30" fill="white" stroke="#111" stroke-width="4"/>
    <ellipse cx="200" cy="218" rx="42" ry="30" fill="white" stroke="#111" stroke-width="4"/>
    <!-- Right cloud -->
    <ellipse cx="768" cy="280" rx="50" ry="35" fill="white" stroke="#111" stroke-width="4"/>
    <ellipse cx="725" cy="295" rx="40" ry="28" fill="white" stroke="#111" stroke-width="4"/>
    <ellipse cx="810" cy="295" rx="40" ry="28" fill="white" stroke="#111" stroke-width="4"/>
    <!-- Sun top-left -->
    <circle cx="140" cy="110" r="52" fill="white" stroke="#111" stroke-width="4"/>
    <line x1="140" y1="42" x2="140" y2="22" stroke="#111" stroke-width="4" stroke-linecap="round"/>
    <line x1="192" y1="58" x2="207" y2="43" stroke="#111" stroke-width="4" stroke-linecap="round"/>
    <line x1="208" y1="110" x2="228" y2="110" stroke="#111" stroke-width="4" stroke-linecap="round"/>
    <line x1="192" y1="162" x2="207" y2="177" stroke="#111" stroke-width="4" stroke-linecap="round"/>
    <line x1="140" y1="178" x2="140" y2="198" stroke="#111" stroke-width="4" stroke-linecap="round"/>
    <line x1="88" y1="162" x2="73" y2="177" stroke="#111" stroke-width="4" stroke-linecap="round"/>
    <line x1="72" y1="110" x2="52" y2="110" stroke="#111" stroke-width="4" stroke-linecap="round"/>
    <line x1="88" y1="58" x2="73" y2="43" stroke="#111" stroke-width="4" stroke-linecap="round"/>
    <!-- Birds (simple V shapes) -->
    <path d="M620 155 Q630 148 640 155" fill="none" stroke="#111" stroke-width="3" stroke-linecap="round"/>
    <path d="M660 135 Q672 127 684 135" fill="none" stroke="#111" stroke-width="3" stroke-linecap="round"/>
    <path d="M700 158 Q710 150 720 158" fill="none" stroke="#111" stroke-width="3" stroke-linecap="round"/>
  </svg>`,
};

const dinosaur: ColoringPage = {
  id: 'dinosaur',
  name: 'Cute Dinosaur',
  category: 'Fantasy',
  svgData: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}">${BG}
    <!-- Body -->
    <ellipse cx="430" cy="530" rx="195" ry="145" fill="white" stroke="#111" stroke-width="5"/>
    <!-- Neck -->
    <path d="M320 415 C308 370 318 325 348 300 L430 292 C462 300 478 348 470 415" fill="white" stroke="#111" stroke-width="5"/>
    <!-- Head -->
    <ellipse cx="390" cy="262" rx="90" ry="68" fill="white" stroke="#111" stroke-width="5"/>
    <!-- Snout -->
    <path d="M315 265 C290 266 272 288 278 313 C284 334 312 338 345 326" fill="white" stroke="#111" stroke-width="4"/>
    <!-- Nostril -->
    <ellipse cx="285" cy="290" rx="8" ry="5" fill="#111"/>
    <!-- Mouth smile -->
    <path d="M288 315 Q330 340 370 330" fill="none" stroke="#111" stroke-width="3.5" stroke-linecap="round"/>
    <!-- Teeth -->
    <path d="M300 318 L304 330 L312 318" fill="white" stroke="#111" stroke-width="2.5"/>
    <path d="M315 322 L319 334 L327 322" fill="white" stroke="#111" stroke-width="2.5"/>
    <!-- Eye -->
    <circle cx="360" cy="245" r="24" fill="white" stroke="#111" stroke-width="4"/>
    <circle cx="360" cy="245" r="12" fill="#111"/>
    <circle cx="365" cy="240" r="4" fill="white"/>
    <!-- Eyebrow -->
    <path d="M342 226 Q360 218 378 226" fill="none" stroke="#111" stroke-width="4" stroke-linecap="round"/>
    <!-- Ear fin -->
    <path d="M440 218 L462 180 L480 220" fill="white" stroke="#111" stroke-width="4"/>
    <!-- Back spikes -->
    <polygon points="460,415 478,368 496,415" fill="white" stroke="#111" stroke-width="4"/>
    <polygon points="495,400 518,345 540,400" fill="white" stroke="#111" stroke-width="4"/>
    <polygon points="530,390 558,328 585,390" fill="white" stroke="#111" stroke-width="4"/>
    <polygon points="562,400 588,345 614,400" fill="white" stroke="#111" stroke-width="4"/>
    <polygon points="592,418 612,375 632,418" fill="white" stroke="#111" stroke-width="4"/>
    <!-- Tail -->
    <path d="M612 545 C670 518 748 490 790 462 C818 444 812 422 792 430 C768 440 712 472 662 498" fill="white" stroke="#111" stroke-width="5"/>
    <!-- Tail tip -->
    <path d="M790 462 L820 442 L808 472 Z" fill="white" stroke="#111" stroke-width="3.5"/>
    <!-- Front left leg -->
    <path d="M318 640 L305 730 L285 730" fill="none" stroke="#111" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M285 730 L275 748 M285 730 L295 748 M285 730 L305 748" fill="none" stroke="#111" stroke-width="3.5" stroke-linecap="round"/>
    <!-- Front right leg -->
    <path d="M392 668 L388 758 L368 758" fill="none" stroke="#111" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M368 758 L358 776 M368 758 L378 776 M368 758 L390 776" fill="none" stroke="#111" stroke-width="3.5" stroke-linecap="round"/>
    <!-- Back left leg -->
    <path d="M470 668 L475 758 L455 758" fill="none" stroke="#111" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M455 758 L445 776 M455 758 L465 776 M455 758 L478 776" fill="none" stroke="#111" stroke-width="3.5" stroke-linecap="round"/>
    <!-- Back right leg -->
    <path d="M545 648 L555 738 L535 738" fill="none" stroke="#111" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M535 738 L525 756 M535 738 L548 756 M535 738 L560 756" fill="none" stroke="#111" stroke-width="3.5" stroke-linecap="round"/>
    <!-- Tiny arm -->
    <path d="M348 468 C325 488 310 508 318 528 C325 542 348 535 358 515" fill="white" stroke="#111" stroke-width="4"/>
    <path d="M318 528 L305 545 M318 528 L322 548" fill="none" stroke="#111" stroke-width="3" stroke-linecap="round"/>
    <!-- Belly spots -->
    <ellipse cx="420" cy="540" rx="45" ry="32" fill="white" stroke="#111" stroke-width="2.5"/>
    <ellipse cx="420" cy="540" rx="22" ry="16" fill="white" stroke="#111" stroke-width="2"/>
  </svg>`,
};

const mermaid: ColoringPage = {
  id: 'mermaid',
  name: 'Mermaid',
  category: 'Fantasy',
  svgData: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}">${BG}
    <!-- Rock she sits on -->
    <ellipse cx="450" cy="820" rx="220" ry="55" fill="white" stroke="#111" stroke-width="5"/>
    <path d="M240 820 Q280 775 330 780 Q380 760 450 770 Q520 760 570 780 Q620 775 660 820" fill="white" stroke="#111" stroke-width="4"/>
    <!-- Tail lower fin -->
    <path d="M390 780 C360 810 320 840 300 870 C285 895 310 908 330 888 C355 862 380 840 405 820" fill="white" stroke="#111" stroke-width="4"/>
    <path d="M510 780 C540 810 580 840 600 870 C615 895 590 908 570 888 C545 862 520 840 495 820" fill="white" stroke="#111" stroke-width="4"/>
    <!-- Tail scales band -->
    <path d="M380 680 Q450 695 520 680 Q545 720 540 770 Q500 790 450 790 Q400 790 360 770 Q355 720 380 680Z" fill="white" stroke="#111" stroke-width="4"/>
    <!-- Scale pattern on tail -->
    <path d="M390 700 Q420 692 450 700 Q480 692 510 700" fill="none" stroke="#111" stroke-width="2"/>
    <path d="M375 720 Q410 712 450 720 Q490 712 525 720" fill="none" stroke="#111" stroke-width="2"/>
    <path d="M368 740 Q408 732 450 740 Q492 732 532 740" fill="none" stroke="#111" stroke-width="2"/>
    <path d="M365 760 Q408 752 450 760 Q492 752 535 760" fill="none" stroke="#111" stroke-width="2"/>
    <!-- Waist -->
    <path d="M365 620 Q380 640 380 680 L520 680 Q520 640 535 620 Q500 630 450 630 Q400 630 365 620Z" fill="white" stroke="#111" stroke-width="4"/>
    <!-- Torso / top -->
    <path d="M340 480 C330 520 330 565 365 620 Q400 638 450 640 Q500 638 535 620 C570 565 570 520 560 480 L540 440 Q500 458 450 460 Q400 458 360 440 Z" fill="white" stroke="#111" stroke-width="5"/>
    <!-- Shell bra (two shells) -->
    <ellipse cx="418" cy="542" rx="35" ry="28" fill="white" stroke="#111" stroke-width="3.5"/>
    <path d="M384 542 Q418 528 452 542" fill="none" stroke="#111" stroke-width="2.5"/>
    <path d="M390 552 Q418 538 446 552" fill="none" stroke="#111" stroke-width="2"/>
    <ellipse cx="482" cy="542" rx="35" ry="28" fill="white" stroke="#111" stroke-width="3.5"/>
    <path d="M448 542 Q482 528 516 542" fill="none" stroke="#111" stroke-width="2.5"/>
    <path d="M454 552 Q482 538 510 552" fill="none" stroke="#111" stroke-width="2"/>
    <!-- Neck -->
    <rect x="428" y="420" width="44" height="60" rx="8" fill="white" stroke="#111" stroke-width="4"/>
    <!-- Head -->
    <ellipse cx="450" cy="350" rx="85" ry="95" fill="white" stroke="#111" stroke-width="5"/>
    <!-- Face -->
    <!-- Eyes -->
    <ellipse cx="418" cy="335" rx="16" ry="18" fill="white" stroke="#111" stroke-width="3.5"/>
    <ellipse cx="482" cy="335" rx="16" ry="18" fill="white" stroke="#111" stroke-width="3.5"/>
    <circle cx="420" cy="337" r="9" fill="#111"/>
    <circle cx="484" cy="337" r="9" fill="#111"/>
    <circle cx="423" cy="333" r="3" fill="white"/>
    <circle cx="487" cy="333" r="3" fill="white"/>
    <!-- Lashes -->
    <path d="M406 320 L402 310 M413 316 L410 305 M420 315 L419 304" fill="none" stroke="#111" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M470 316 L470 304 M477 316 L480 305 M484 320 L488 310" fill="none" stroke="#111" stroke-width="2.5" stroke-linecap="round"/>
    <!-- Nose -->
    <path d="M443 360 Q450 368 457 360" fill="none" stroke="#111" stroke-width="3" stroke-linecap="round"/>
    <!-- Smile -->
    <path d="M425 385 Q450 402 475 385" fill="none" stroke="#111" stroke-width="3.5" stroke-linecap="round"/>
    <!-- Cheek blushes -->
    <ellipse cx="400" cy="372" rx="18" ry="10" fill="none" stroke="#111" stroke-width="2" stroke-dasharray="3,3"/>
    <ellipse cx="500" cy="372" rx="18" ry="10" fill="none" stroke="#111" stroke-width="2" stroke-dasharray="3,3"/>
    <!-- Hair flowing left -->
    <path d="M370 295 C330 270 290 275 260 305 C240 330 258 370 285 365 C260 390 255 425 278 440 C260 455 252 490 275 505 C252 520 250 560 275 572" fill="white" stroke="#111" stroke-width="4"/>
    <!-- Hair flowing right -->
    <path d="M530 295 C570 270 610 275 640 305 C660 330 642 370 615 365" fill="white" stroke="#111" stroke-width="4"/>
    <!-- Hair top / crown -->
    <path d="M368 270 C390 235 418 220 450 218 C482 220 510 235 532 270" fill="white" stroke="#111" stroke-width="4"/>
    <!-- Hair details (strands) -->
    <path d="M380 265 C370 240 360 220 355 200" fill="none" stroke="#111" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M415 228 C412 205 415 182 420 165" fill="none" stroke="#111" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M455 222 C455 198 460 175 468 158" fill="none" stroke="#111" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M490 232 C498 210 510 190 522 175" fill="none" stroke="#111" stroke-width="2.5" stroke-linecap="round"/>
    <!-- Crown/tiara -->
    <path d="M400 260 L408 238 L420 255 L432 228 L450 248 L468 228 L480 255 L492 238 L500 260" fill="white" stroke="#111" stroke-width="3"/>
    <!-- Left arm -->
    <path d="M342 490 C318 510 298 538 292 568 C288 590 305 598 320 582 C338 562 352 535 360 510" fill="white" stroke="#111" stroke-width="4"/>
    <!-- Right arm reaching out -->
    <path d="M558 490 C582 498 610 505 630 495 C648 486 648 468 632 465 C615 462 592 472 572 480" fill="white" stroke="#111" stroke-width="4"/>
    <!-- Starfish accessory in hair -->
    <path d="M292 340 L298 320 L308 336 L328 330 L318 346 L325 366 L308 356 L292 366 L298 346 L278 336 Z" fill="white" stroke="#111" stroke-width="2.5"/>
    <!-- Bubbles -->
    <circle cx="680" cy="280" r="18" fill="none" stroke="#111" stroke-width="3"/>
    <circle cx="710" cy="220" r="12" fill="none" stroke="#111" stroke-width="3"/>
    <circle cx="730" cy="168" r="8" fill="none" stroke="#111" stroke-width="2.5"/>
    <circle cx="700" cy="320" r="9" fill="none" stroke="#111" stroke-width="2.5"/>
  </svg>`,
};

const castle: ColoringPage = {
  id: 'castle',
  name: 'Fantasy Castle',
  category: 'Fantasy',
  svgData: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}">${BG}
    <!-- Ground/hill -->
    <path d="M50 860 Q450 800 850 860 L850 900 L50 900 Z" fill="white" stroke="#111" stroke-width="4"/>
    <!-- Flowers in grass -->
    <circle cx="100" cy="855" r="8" fill="white" stroke="#111" stroke-width="2.5"/>
    <line x1="100" y1="863" x2="100" y2="878" stroke="#111" stroke-width="2.5"/>
    <circle cx="150" cy="848" r="8" fill="white" stroke="#111" stroke-width="2.5"/>
    <line x1="150" y1="856" x2="150" y2="870" stroke="#111" stroke-width="2.5"/>
    <circle cx="750" cy="848" r="8" fill="white" stroke="#111" stroke-width="2.5"/>
    <line x1="750" y1="856" x2="750" y2="870" stroke="#111" stroke-width="2.5"/>
    <circle cx="800" cy="855" r="8" fill="white" stroke="#111" stroke-width="2.5"/>
    <line x1="800" y1="863" x2="800" y2="878" stroke="#111" stroke-width="2.5"/>
    <!-- Main castle body -->
    <rect x="230" y="480" width="440" height="370" fill="white" stroke="#111" stroke-width="5"/>
    <!-- Main tower center -->
    <rect x="360" y="290" width="180" height="220" fill="white" stroke="#111" stroke-width="5"/>
    <!-- Center tower crenellations -->
    <rect x="360" y="258" width="36" height="35" rx="4" fill="white" stroke="#111" stroke-width="4"/>
    <rect x="412" y="258" width="36" height="35" rx="4" fill="white" stroke="#111" stroke-width="4"/>
    <rect x="464" y="258" width="36" height="35" rx="4" fill="white" stroke="#111" stroke-width="4"/>
    <rect x="504" y="258" width="36" height="35" rx="4" fill="white" stroke="#111" stroke-width="4"/>
    <!-- Center tower flag -->
    <line x1="450" y1="258" x2="450" y2="175" stroke="#111" stroke-width="4"/>
    <path d="M450 175 L498 198 L450 218 Z" fill="white" stroke="#111" stroke-width="3"/>
    <!-- Left tower -->
    <rect x="145" y="390" width="130" height="460" fill="white" stroke="#111" stroke-width="5"/>
    <!-- Left tower crenellations -->
    <rect x="145" y="358" width="26" height="35" rx="4" fill="white" stroke="#111" stroke-width="4"/>
    <rect x="180" y="358" width="26" height="35" rx="4" fill="white" stroke="#111" stroke-width="4"/>
    <rect x="215" y="358" width="26" height="35" rx="4" fill="white" stroke="#111" stroke-width="4"/>
    <rect x="250" y="358" width="26" height="35" rx="4" fill="white" stroke="#111" stroke-width="4"/>
    <!-- Left tower flag -->
    <line x1="210" y1="358" x2="210" y2="285" stroke="#111" stroke-width="3.5"/>
    <path d="M210 285 L252 305 L210 322 Z" fill="white" stroke="#111" stroke-width="3"/>
    <!-- Right tower -->
    <rect x="625" y="390" width="130" height="460" fill="white" stroke="#111" stroke-width="5"/>
    <!-- Right tower crenellations -->
    <rect x="625" y="358" width="26" height="35" rx="4" fill="white" stroke="#111" stroke-width="4"/>
    <rect x="660" y="358" width="26" height="35" rx="4" fill="white" stroke="#111" stroke-width="4"/>
    <rect x="695" y="358" width="26" height="35" rx="4" fill="white" stroke="#111" stroke-width="4"/>
    <rect x="730" y="358" width="26" height="35" rx="4" fill="white" stroke="#111" stroke-width="4"/>
    <!-- Right tower flag -->
    <line x1="690" y1="358" x2="690" y2="285" stroke="#111" stroke-width="3.5"/>
    <path d="M690 285 L648 305 L690 322 Z" fill="white" stroke="#111" stroke-width="3"/>
    <!-- Main body crenellations -->
    <rect x="230" y="448" width="30" height="35" rx="4" fill="white" stroke="#111" stroke-width="4"/>
    <rect x="272" y="448" width="30" height="35" rx="4" fill="white" stroke="#111" stroke-width="4"/>
    <rect x="598" y="448" width="30" height="35" rx="4" fill="white" stroke="#111" stroke-width="4"/>
    <rect x="640" y="448" width="30" height="35" rx="4" fill="white" stroke="#111" stroke-width="4"/>
    <!-- Gate arch -->
    <path d="M390 850 L390 680 Q450 640 510 680 L510 850 Z" fill="white" stroke="#111" stroke-width="5"/>
    <!-- Gate portcullis lines -->
    <line x1="410" y1="686" x2="410" y2="850" stroke="#111" stroke-width="2.5"/>
    <line x1="430" y1="682" x2="430" y2="850" stroke="#111" stroke-width="2.5"/>
    <line x1="450" y1="680" x2="450" y2="850" stroke="#111" stroke-width="2.5"/>
    <line x1="470" y1="682" x2="470" y2="850" stroke="#111" stroke-width="2.5"/>
    <line x1="490" y1="686" x2="490" y2="850" stroke="#111" stroke-width="2.5"/>
    <line x1="390" y1="720" x2="510" y2="720" stroke="#111" stroke-width="2.5"/>
    <line x1="390" y1="760" x2="510" y2="760" stroke="#111" stroke-width="2.5"/>
    <line x1="390" y1="800" x2="510" y2="800" stroke="#111" stroke-width="2.5"/>
    <!-- Windows in center tower -->
    <path d="M398 360 L398 330 Q420 312 442 330 L442 360 Z" fill="white" stroke="#111" stroke-width="3.5"/>
    <path d="M458 360 L458 330 Q480 312 502 330 L502 360 Z" fill="white" stroke="#111" stroke-width="3.5"/>
    <!-- Windows main body -->
    <path d="M280 580 L280 550 Q300 532 320 550 L320 580 Z" fill="white" stroke="#111" stroke-width="3.5"/>
    <path d="M580 580 L580 550 Q600 532 620 550 L620 580 Z" fill="white" stroke="#111" stroke-width="3.5"/>
    <!-- Windows in side towers -->
    <path d="M170 490 L170 460 Q210 442 250 460 L250 490 Z" fill="white" stroke="#111" stroke-width="3.5"/>
    <path d="M650 490 L650 460 Q690 442 730 460 L730 490 Z" fill="white" stroke="#111" stroke-width="3.5"/>
    <!-- Stone brick pattern -->
    <line x1="230" y1="580" x2="360" y2="580" stroke="#111" stroke-width="1.5" stroke-dasharray="20,10"/>
    <line x1="510" y1="580" x2="670" y2="580" stroke="#111" stroke-width="1.5" stroke-dasharray="20,10"/>
    <line x1="230" y1="660" x2="670" y2="660" stroke="#111" stroke-width="1.5" stroke-dasharray="20,10"/>
    <line x1="230" y1="740" x2="390" y2="740" stroke="#111" stroke-width="1.5" stroke-dasharray="20,10"/>
    <line x1="510" y1="740" x2="670" y2="740" stroke="#111" stroke-width="1.5" stroke-dasharray="20,10"/>
    <!-- Clouds -->
    <ellipse cx="730" cy="180" rx="62" ry="42" fill="white" stroke="#111" stroke-width="4"/>
    <ellipse cx="680" cy="198" rx="48" ry="34" fill="white" stroke="#111" stroke-width="4"/>
    <ellipse cx="780" cy="200" rx="45" ry="32" fill="white" stroke="#111" stroke-width="4"/>
  </svg>`,
};

const rocketSpace: ColoringPage = {
  id: 'rocket',
  name: 'Space Rocket',
  category: 'Adventure',
  svgData: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}">${BG}
    <!-- Stars background -->
    <circle cx="80" cy="80" r="5" fill="#111"/>
    <circle cx="180" cy="45" r="3" fill="#111"/>
    <circle cx="320" cy="60" r="4" fill="#111"/>
    <circle cx="620" cy="40" r="5" fill="#111"/>
    <circle cx="780" cy="75" r="3" fill="#111"/>
    <circle cx="840" cy="140" r="4" fill="#111"/>
    <circle cx="60" cy="220" r="3" fill="#111"/>
    <circle cx="120" cy="340" r="5" fill="#111"/>
    <circle cx="820" cy="280" r="3" fill="#111"/>
    <circle cx="860" cy="400" r="5" fill="#111"/>
    <circle cx="780" cy="480" r="3" fill="#111"/>
    <circle cx="100" cy="480" r="4" fill="#111"/>
    <circle cx="50" cy="600" r="3" fill="#111"/>
    <circle cx="840" cy="600" r="4" fill="#111"/>
    <!-- 4-point stars -->
    <path d="M150 150 L155 138 L160 150 L172 155 L160 160 L155 172 L150 160 L138 155 Z" fill="white" stroke="#111" stroke-width="2"/>
    <path d="M720 130 L725 118 L730 130 L742 135 L730 140 L725 152 L720 140 L708 135 Z" fill="white" stroke="#111" stroke-width="2"/>
    <path d="M800 380 L804 370 L808 380 L818 384 L808 388 L804 398 L800 388 L790 384 Z" fill="white" stroke="#111" stroke-width="1.5"/>
    <path d="M88 420 L92 410 L96 420 L106 424 L96 428 L92 438 L88 428 L78 424 Z" fill="white" stroke="#111" stroke-width="1.5"/>
    <!-- Rocket body -->
    <path d="M390 160 Q450 80 510 160 L530 640 L370 640 Z" fill="white" stroke="#111" stroke-width="5"/>
    <!-- Rocket window -->
    <circle cx="450" cy="320" r="55" fill="white" stroke="#111" stroke-width="5"/>
    <circle cx="450" cy="320" r="38" fill="white" stroke="#111" stroke-width="3"/>
    <!-- Window reflection -->
    <path d="M424 300 Q432 292 444 295" fill="none" stroke="#111" stroke-width="2.5" stroke-linecap="round"/>
    <!-- Rocket stripes -->
    <line x1="375" y1="450" x2="525" y2="450" stroke="#111" stroke-width="3"/>
    <line x1="370" y1="540" x2="530" y2="540" stroke="#111" stroke-width="3"/>
    <!-- Rocket nose star -->
    <path d="M450 112 L455 98 L460 112 L474 115 L462 124 L466 138 L450 130 L434 138 L438 124 L426 115 Z" fill="white" stroke="#111" stroke-width="2.5"/>
    <!-- Left fin -->
    <path d="M375 560 C340 580 285 620 265 665 C255 688 270 710 292 698 C318 684 355 648 375 620" fill="white" stroke="#111" stroke-width="5"/>
    <line x1="310" y1="640" x2="375" y2="580" stroke="#111" stroke-width="2.5"/>
    <line x1="282" y1="672" x2="375" y2="600" stroke="#111" stroke-width="2.5"/>
    <!-- Right fin -->
    <path d="M525 560 C560 580 615 620 635 665 C645 688 630 710 608 698 C582 684 545 648 525 620" fill="white" stroke="#111" stroke-width="5"/>
    <line x1="590" y1="640" x2="525" y2="580" stroke="#111" stroke-width="2.5"/>
    <line x1="618" y1="672" x2="525" y2="600" stroke="#111" stroke-width="2.5"/>
    <!-- Rocket exhaust flames -->
    <path d="M385 645 C395 695 420 740 450 768 C480 740 505 695 515 645" fill="white" stroke="#111" stroke-width="4"/>
    <path d="M400 645 C408 685 428 720 450 742 C472 720 492 685 500 645" fill="white" stroke="#111" stroke-width="3"/>
    <path d="M415 645 C422 675 436 702 450 718 C464 702 478 675 485 645" fill="white" stroke="#111" stroke-width="2.5"/>
    <!-- Moon -->
    <circle cx="750" cy="300" r="80" fill="white" stroke="#111" stroke-width="4"/>
    <circle cx="780" cy="272" r="68" fill="white" stroke="#111" stroke-width="3"/>
    <!-- Moon craters -->
    <circle cx="710" cy="330" r="18" fill="white" stroke="#111" stroke-width="2.5"/>
    <circle cx="735" cy="360" r="10" fill="white" stroke="#111" stroke-width="2"/>
    <!-- Planet -->
    <circle cx="140" cy="720" r="95" fill="white" stroke="#111" stroke-width="5"/>
    <!-- Planet rings -->
    <path d="M55 705 Q140 670 225 705" fill="none" stroke="#111" stroke-width="4"/>
    <path d="M45 720 Q140 680 235 720" fill="none" stroke="#111" stroke-width="3"/>
    <path d="M55 735 Q140 698 225 735" fill="none" stroke="#111" stroke-width="4"/>
    <!-- Planet surface bands -->
    <path d="M70 700 Q140 690 210 700" fill="none" stroke="#111" stroke-width="2.5"/>
    <path d="M60 730 Q140 718 220 730" fill="none" stroke="#111" stroke-width="2.5"/>
    <path d="M65 760 Q140 748 215 760" fill="none" stroke="#111" stroke-width="2.5"/>
  </svg>`,
};

const cat: ColoringPage = {
  id: 'cat',
  name: 'Cute Cat',
  category: 'Animals',
  svgData: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}">${BG}
    <!-- Tail -->
    <path d="M580 780 C650 740 720 680 730 608 C738 548 700 520 670 548 C645 572 650 620 635 660 C620 700 580 730 555 755" fill="white" stroke="#111" stroke-width="5"/>
    <!-- Body -->
    <ellipse cx="430" cy="680" rx="220" ry="185" fill="white" stroke="#111" stroke-width="5"/>
    <!-- Front paws -->
    <ellipse cx="340" cy="840" rx="70" ry="35" fill="white" stroke="#111" stroke-width="4"/>
    <ellipse cx="520" cy="840" rx="70" ry="35" fill="white" stroke="#111" stroke-width="4"/>
    <!-- Paw toes -->
    <ellipse cx="308" cy="850" rx="16" ry="12" fill="white" stroke="#111" stroke-width="2.5"/>
    <ellipse cx="340" cy="855" rx="16" ry="12" fill="white" stroke="#111" stroke-width="2.5"/>
    <ellipse cx="372" cy="850" rx="16" ry="12" fill="white" stroke="#111" stroke-width="2.5"/>
    <ellipse cx="488" cy="850" rx="16" ry="12" fill="white" stroke="#111" stroke-width="2.5"/>
    <ellipse cx="520" cy="855" rx="16" ry="12" fill="white" stroke="#111" stroke-width="2.5"/>
    <ellipse cx="552" cy="850" rx="16" ry="12" fill="white" stroke="#111" stroke-width="2.5"/>
    <!-- Neck/chest fur -->
    <path d="M338 512 Q370 485 430 475 Q490 485 522 512" fill="white" stroke="#111" stroke-width="4"/>
    <!-- Head -->
    <ellipse cx="430" cy="390" rx="162" ry="148" fill="white" stroke="#111" stroke-width="5"/>
    <!-- Left ear -->
    <path d="M290 298 L252 198 L352 272 Z" fill="white" stroke="#111" stroke-width="5"/>
    <!-- Left inner ear -->
    <path d="M296 286 L272 222 L335 270 Z" fill="white" stroke="#111" stroke-width="2.5"/>
    <!-- Right ear -->
    <path d="M570 298 L608 198 L508 272 Z" fill="white" stroke="#111" stroke-width="5"/>
    <!-- Right inner ear -->
    <path d="M564 286 L588 222 L525 270 Z" fill="white" stroke="#111" stroke-width="2.5"/>
    <!-- Eyes -->
    <ellipse cx="375" cy="378" rx="42" ry="38" fill="white" stroke="#111" stroke-width="4"/>
    <ellipse cx="485" cy="378" rx="42" ry="38" fill="white" stroke="#111" stroke-width="4"/>
    <!-- Pupils (vertical slits) -->
    <ellipse cx="375" cy="378" rx="15" ry="30" fill="#111"/>
    <ellipse cx="485" cy="378" rx="15" ry="30" fill="#111"/>
    <!-- Eye shine -->
    <circle cx="382" cy="368" r="7" fill="white"/>
    <circle cx="492" cy="368" r="7" fill="white"/>
    <!-- Eye lashes top -->
    <path d="M348 355 C355 348 365 345 375 344" fill="none" stroke="#111" stroke-width="3" stroke-linecap="round"/>
    <path d="M375 344 C385 343 395 346 403 353" fill="none" stroke="#111" stroke-width="3" stroke-linecap="round"/>
    <path d="M458 355 C465 348 475 345 485 344" fill="none" stroke="#111" stroke-width="3" stroke-linecap="round"/>
    <path d="M485 344 C495 343 505 346 513 353" fill="none" stroke="#111" stroke-width="3" stroke-linecap="round"/>
    <!-- Nose – triangle -->
    <path d="M418 415 L442 415 L430 432 Z" fill="#111"/>
    <!-- Mouth -->
    <path d="M430 432 Q410 450 398 448" fill="none" stroke="#111" stroke-width="3.5" stroke-linecap="round"/>
    <path d="M430 432 Q450 450 462 448" fill="none" stroke="#111" stroke-width="3.5" stroke-linecap="round"/>
    <!-- Whiskers left -->
    <line x1="380" y1="422" x2="268" y2="408" stroke="#111" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="378" y1="432" x2="262" y2="430" stroke="#111" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="380" y1="442" x2="268" y2="452" stroke="#111" stroke-width="2.5" stroke-linecap="round"/>
    <!-- Whiskers right -->
    <line x1="480" y1="422" x2="592" y2="408" stroke="#111" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="482" y1="432" x2="598" y2="430" stroke="#111" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="480" y1="442" x2="592" y2="452" stroke="#111" stroke-width="2.5" stroke-linecap="round"/>
    <!-- Forehead markings (stripes) -->
    <path d="M415 290 Q430 272 445 290" fill="none" stroke="#111" stroke-width="2.5"/>
    <path d="M400 308 Q430 285 460 308" fill="none" stroke="#111" stroke-width="2.5"/>
    <!-- Bow tie / collar -->
    <path d="M340 510 Q430 525 520 510 Q510 545 430 548 Q350 545 340 510 Z" fill="white" stroke="#111" stroke-width="3"/>
    <!-- Bell on collar -->
    <circle cx="430" cy="535" r="14" fill="white" stroke="#111" stroke-width="3"/>
    <path d="M424 540 Q430 546 436 540" fill="none" stroke="#111" stroke-width="2"/>
    <!-- Belly fur oval -->
    <ellipse cx="430" cy="700" rx="100" ry="120" fill="white" stroke="#111" stroke-width="3" stroke-dasharray="0"/>
    <!-- Belly swirl -->
    <path d="M430 640 Q445 658 430 675 Q415 692 430 710" fill="none" stroke="#111" stroke-width="2.5"/>
  </svg>`,
};

const flowerGarden: ColoringPage = {
  id: 'flowers',
  name: 'Flower Garden',
  category: 'Nature',
  svgData: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}">${BG}
    <!-- Sky area (top) -->
    <!-- Sun -->
    <circle cx="780" cy="115" r="65" fill="white" stroke="#111" stroke-width="5"/>
    <line x1="780" y1="35" x2="780" y2="12" stroke="#111" stroke-width="4" stroke-linecap="round"/>
    <line x1="835" y1="60" x2="852" y2="43" stroke="#111" stroke-width="4" stroke-linecap="round"/>
    <line x1="860" y1="115" x2="883" y2="115" stroke="#111" stroke-width="4" stroke-linecap="round"/>
    <line x1="835" y1="170" x2="852" y2="187" stroke="#111" stroke-width="4" stroke-linecap="round"/>
    <line x1="725" y1="60" x2="708" y2="43" stroke="#111" stroke-width="4" stroke-linecap="round"/>
    <line x1="700" y1="115" x2="677" y2="115" stroke="#111" stroke-width="4" stroke-linecap="round"/>
    <line x1="725" y1="170" x2="708" y2="187" stroke="#111" stroke-width="4" stroke-linecap="round"/>
    <!-- Cloud -->
    <ellipse cx="200" cy="115" rx="75" ry="45" fill="white" stroke="#111" stroke-width="4"/>
    <ellipse cx="145" cy="132" rx="52" ry="36" fill="white" stroke="#111" stroke-width="4"/>
    <ellipse cx="262" cy="130" rx="52" ry="36" fill="white" stroke="#111" stroke-width="4"/>
    <!-- Butterfly -->
    <ellipse cx="580" cy="138" rx="32" ry="20" fill="white" stroke="#111" stroke-width="3"/>
    <ellipse cx="540" cy="145" rx="25" ry="16" fill="white" stroke="#111" stroke-width="3"/>
    <circle cx="562" cy="140" r="6" fill="white" stroke="#111" stroke-width="2.5"/>
    <!-- Ground -->
    <rect x="0" y="720" width="900" height="180" fill="white" stroke="#111" stroke-width="4"/>
    <!-- Grass blades -->
    <path d="M30 720 Q35 690 42 720" fill="white" stroke="#111" stroke-width="2"/>
    <path d="M55 720 Q62 685 68 720" fill="white" stroke="#111" stroke-width="2"/>
    <path d="M180 720 Q186 688 192 720" fill="white" stroke="#111" stroke-width="2"/>
    <path d="M400 720 Q406 688 412 720" fill="white" stroke="#111" stroke-width="2"/>
    <path d="M680 720 Q686 688 692 720" fill="white" stroke="#111" stroke-width="2"/>
    <path d="M820 720 Q826 685 832 720" fill="white" stroke="#111" stroke-width="2"/>
    <!-- Watering can -->
    <path d="M48 780 L48 840 L120 840 L120 780 Q90 768 48 780 Z" fill="white" stroke="#111" stroke-width="3.5"/>
    <path d="M120 810 L160 800 L168 820 L128 830 Z" fill="white" stroke="#111" stroke-width="3.5"/>
    <circle cx="168" cy="810" r="8" fill="white" stroke="#111" stroke-width="2.5"/>
    <path d="M75 780 C65 758 52 745 48 730" fill="none" stroke="#111" stroke-width="3.5" stroke-linecap="round"/>
    <!-- Water drops -->
    <ellipse cx="34" cy="716" rx="4" ry="6" fill="#111"/>
    <ellipse cx="44" cy="724" rx="4" ry="6" fill="#111"/>
    <ellipse cx="26" cy="726" rx="4" ry="6" fill="#111"/>

    <!-- LARGE CENTER SUNFLOWER -->
    <!-- Stem -->
    <line x1="450" y1="720" x2="450" y2="430" stroke="#111" stroke-width="6" stroke-linecap="round"/>
    <!-- Leaves -->
    <path d="M450 580 C410 555 375 560 358 580 C375 595 410 595 450 580Z" fill="white" stroke="#111" stroke-width="3.5"/>
    <path d="M450 650 C490 625 525 630 542 650 C525 665 490 665 450 650Z" fill="white" stroke="#111" stroke-width="3.5"/>
    <!-- Petals (12 petals) -->
    <ellipse cx="450" cy="348" rx="26" ry="52" fill="white" stroke="#111" stroke-width="3.5"/>
    <ellipse cx="490" cy="357" rx="26" ry="52" fill="white" stroke="#111" stroke-width="3.5" transform="rotate(30 490 357)"/>
    <ellipse cx="518" cy="382" rx="26" ry="52" fill="white" stroke="#111" stroke-width="3.5" transform="rotate(60 518 382)"/>
    <ellipse cx="530" cy="420" rx="26" ry="52" fill="white" stroke="#111" stroke-width="3.5" transform="rotate(90 530 420)"/>
    <ellipse cx="520" cy="458" rx="26" ry="52" fill="white" stroke="#111" stroke-width="3.5" transform="rotate(120 520 458)"/>
    <ellipse cx="492" cy="480" rx="26" ry="52" fill="white" stroke="#111" stroke-width="3.5" transform="rotate(150 492 480)"/>
    <ellipse cx="450" cy="488" rx="26" ry="52" fill="white" stroke="#111" stroke-width="3.5"/>
    <ellipse cx="410" cy="480" rx="26" ry="52" fill="white" stroke="#111" stroke-width="3.5" transform="rotate(30 410 480)"/>
    <ellipse cx="382" cy="458" rx="26" ry="52" fill="white" stroke="#111" stroke-width="3.5" transform="rotate(60 382 458)"/>
    <ellipse cx="370" cy="420" rx="26" ry="52" fill="white" stroke="#111" stroke-width="3.5" transform="rotate(90 370 420)"/>
    <ellipse cx="380" cy="382" rx="26" ry="52" fill="white" stroke="#111" stroke-width="3.5" transform="rotate(120 380 382)"/>
    <ellipse cx="408" cy="357" rx="26" ry="52" fill="white" stroke="#111" stroke-width="3.5" transform="rotate(150 408 357)"/>
    <!-- Center disk -->
    <circle cx="450" cy="418" r="72" fill="white" stroke="#111" stroke-width="5"/>
    <!-- Seed pattern (hexagonal dots) -->
    <circle cx="450" cy="418" r="12" fill="#111"/>
    <circle cx="430" cy="404" r="9" fill="#111"/>
    <circle cx="450" cy="398" r="9" fill="#111"/>
    <circle cx="470" cy="404" r="9" fill="#111"/>
    <circle cx="476" cy="424" r="9" fill="#111"/>
    <circle cx="470" cy="442" r="9" fill="#111"/>
    <circle cx="450" cy="448" r="9" fill="#111"/>
    <circle cx="430" cy="442" r="9" fill="#111"/>
    <circle cx="424" cy="424" r="9" fill="#111"/>
    <circle cx="415" cy="408" r="7" fill="white" stroke="#111" stroke-width="2"/>
    <circle cx="485" cy="408" r="7" fill="white" stroke="#111" stroke-width="2"/>
    <circle cx="498" cy="432" r="7" fill="white" stroke="#111" stroke-width="2"/>
    <circle cx="485" cy="455" r="7" fill="white" stroke="#111" stroke-width="2"/>
    <circle cx="415" cy="455" r="7" fill="white" stroke="#111" stroke-width="2"/>
    <circle cx="402" cy="432" r="7" fill="white" stroke="#111" stroke-width="2"/>

    <!-- LEFT ROSE -->
    <line x1="220" y1="720" x2="220" y2="500" stroke="#111" stroke-width="5" stroke-linecap="round"/>
    <path d="M220 620 C185 598 162 605 152 628 C162 648 185 645 220 620Z" fill="white" stroke="#111" stroke-width="3"/>
    <!-- Rose bud petals -->
    <circle cx="220" cy="460" r="68" fill="white" stroke="#111" stroke-width="4"/>
    <path d="M220 396 Q242 418 220 440 Q198 418 220 396Z" fill="white" stroke="#111" stroke-width="3"/>
    <path d="M281 420 Q272 446 248 448 Q248 422 281 420Z" fill="white" stroke="#111" stroke-width="3"/>
    <path d="M272 492 Q248 498 236 478 Q254 465 272 492Z" fill="white" stroke="#111" stroke-width="3"/>
    <path d="M168 492 Q182 465 200 478 Q188 498 168 492Z" fill="white" stroke="#111" stroke-width="3"/>
    <path d="M159 420 Q192 422 192 448 Q168 446 159 420Z" fill="white" stroke="#111" stroke-width="3"/>
    <circle cx="220" cy="458" r="35" fill="white" stroke="#111" stroke-width="3"/>
    <path d="M205 445 Q220 435 235 445 Q235 462 220 468 Q205 462 205 445Z" fill="white" stroke="#111" stroke-width="2.5"/>

    <!-- RIGHT TULIP -->
    <line x1="680" y1="720" x2="680" y2="520" stroke="#111" stroke-width="5" stroke-linecap="round"/>
    <path d="M680 640 C720 618 742 625 748 648 C742 668 720 665 680 640Z" fill="white" stroke="#111" stroke-width="3"/>
    <!-- Tulip head -->
    <path d="M640 520 Q640 430 680 395 Q720 430 720 520" fill="white" stroke="#111" stroke-width="4"/>
    <path d="M620 520 Q618 428 660 385 Q665 420 660 520" fill="white" stroke="#111" stroke-width="4"/>
    <path d="M700 520 Q695 420 700 385 Q742 428 740 520" fill="white" stroke="#111" stroke-width="4"/>
    <path d="M620 520 L740 520" fill="none" stroke="#111" stroke-width="4"/>

    <!-- SMALL DAISY left -->
    <line x1="105" y1="720" x2="105" y2="618" stroke="#111" stroke-width="4" stroke-linecap="round"/>
    <circle cx="105" cy="580" r="38" fill="white" stroke="#111" stroke-width="3.5"/>
    <ellipse cx="105" cy="542" rx="12" ry="24" fill="white" stroke="#111" stroke-width="3"/>
    <ellipse cx="131" cy="553" rx="12" ry="24" fill="white" stroke="#111" stroke-width="3" transform="rotate(60 131 553)"/>
    <ellipse cx="131" cy="607" rx="12" ry="24" fill="white" stroke="#111" stroke-width="3" transform="rotate(120 131 607)"/>
    <ellipse cx="105" cy="618" rx="12" ry="24" fill="white" stroke="#111" stroke-width="3"/>
    <ellipse cx="79" cy="607" rx="12" ry="24" fill="white" stroke="#111" stroke-width="3" transform="rotate(60 79 607)"/>
    <ellipse cx="79" cy="553" rx="12" ry="24" fill="white" stroke="#111" stroke-width="3" transform="rotate(120 79 553)"/>
    <circle cx="105" cy="580" r="20" fill="white" stroke="#111" stroke-width="2.5"/>

    <!-- SMALL DAISY right -->
    <line x1="795" y1="720" x2="795" y2="618" stroke="#111" stroke-width="4" stroke-linecap="round"/>
    <circle cx="795" cy="580" r="38" fill="white" stroke="#111" stroke-width="3.5"/>
    <ellipse cx="795" cy="542" rx="12" ry="24" fill="white" stroke="#111" stroke-width="3"/>
    <ellipse cx="821" cy="553" rx="12" ry="24" fill="white" stroke="#111" stroke-width="3" transform="rotate(60 821 553)"/>
    <ellipse cx="821" cy="607" rx="12" ry="24" fill="white" stroke="#111" stroke-width="3" transform="rotate(120 821 607)"/>
    <ellipse cx="795" cy="618" rx="12" ry="24" fill="white" stroke="#111" stroke-width="3"/>
    <ellipse cx="769" cy="607" rx="12" ry="24" fill="white" stroke="#111" stroke-width="3" transform="rotate(60 769 607)"/>
    <ellipse cx="769" cy="553" rx="12" ry="24" fill="white" stroke="#111" stroke-width="3" transform="rotate(120 769 553)"/>
    <circle cx="795" cy="580" r="20" fill="white" stroke="#111" stroke-width="2.5"/>
  </svg>`,
};

const fish: ColoringPage = {
  id: 'fish',
  name: 'Underwater Scene',
  category: 'Nature',
  svgData: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}">${BG}
    <!-- Ocean floor -->
    <path d="M0 800 Q225 768 450 785 Q675 800 900 775 L900 900 L0 900 Z" fill="white" stroke="#111" stroke-width="4"/>
    <!-- Sand ripples -->
    <path d="M80 840 Q200 828 320 838" fill="none" stroke="#111" stroke-width="2.5"/>
    <path d="M560 830 Q680 818 800 828" fill="none" stroke="#111" stroke-width="2.5"/>
    <!-- Seaweed left -->
    <path d="M80 800 C55 760 85 720 60 685 C38 652 68 618 48 585" fill="none" stroke="#111" stroke-width="5" stroke-linecap="round"/>
    <path d="M115 800 C140 760 110 720 135 685 C158 652 128 618 148 585" fill="none" stroke="#111" stroke-width="5" stroke-linecap="round"/>
    <!-- Coral left -->
    <path d="M175 800 L175 740 M175 770 L152 748 M175 755 L198 732" fill="none" stroke="#111" stroke-width="5" stroke-linecap="round"/>
    <circle cx="175" cy="738" r="12" fill="white" stroke="#111" stroke-width="3.5"/>
    <circle cx="150" cy="746" r="10" fill="white" stroke="#111" stroke-width="3.5"/>
    <circle cx="200" cy="730" r="10" fill="white" stroke="#111" stroke-width="3.5"/>
    <!-- Seashell left -->
    <path d="M235 795 C222 778 228 758 245 752 C268 744 290 758 292 778 C294 798 275 808 255 802 Z" fill="white" stroke="#111" stroke-width="3.5"/>
    <line x1="245" y1="752" x2="238" y2="800" stroke="#111" stroke-width="2"/>
    <line x1="258" y1="748" x2="255" y2="800" stroke="#111" stroke-width="2"/>
    <line x1="272" y1="750" x2="273" y2="800" stroke="#111" stroke-width="2"/>
    <line x1="285" y1="758" x2="288" y2="800" stroke="#111" stroke-width="2"/>
    <!-- Seaweed right -->
    <path d="M760 800 C735 760 765 720 740 685 C718 652 748 618 728 585" fill="none" stroke="#111" stroke-width="5" stroke-linecap="round"/>
    <path d="M800 800 C825 760 795 720 820 685 C843 652 813 618 833 585" fill="none" stroke="#111" stroke-width="5" stroke-linecap="round"/>
    <!-- Coral right -->
    <path d="M852 800 L852 740 M852 770 L828 748 M852 755 L876 732" fill="none" stroke="#111" stroke-width="5" stroke-linecap="round"/>
    <circle cx="852" cy="738" r="12" fill="white" stroke="#111" stroke-width="3.5"/>
    <circle cx="826" cy="746" r="10" fill="white" stroke="#111" stroke-width="3.5"/>
    <circle cx="878" cy="730" r="10" fill="white" stroke="#111" stroke-width="3.5"/>
    <!-- Starfish on floor -->
    <path d="M618 792 L628 764 L638 792 L664 782 L644 800 L654 828 L628 810 L602 828 L612 800 L592 782 Z" fill="white" stroke="#111" stroke-width="3.5"/>
    <!-- BIG CLOWNFISH (center) -->
    <!-- Body -->
    <path d="M365 430 C305 388 270 330 295 272 C318 218 388 205 450 218 C512 205 582 218 605 272 C630 330 595 388 535 430 C522 465 478 488 450 488 C422 488 378 465 365 430Z" fill="white" stroke="#111" stroke-width="5"/>
    <!-- White band 1 (face) -->
    <path d="M388 228 Q450 218 512 228 Q520 252 512 278 Q450 268 388 278 Q380 252 388 228Z" fill="white" stroke="#111" stroke-width="3.5"/>
    <!-- White band 2 (middle) -->
    <path d="M328 348 Q450 328 572 348 Q578 378 572 405 Q450 382 328 405 Q322 378 328 348Z" fill="white" stroke="#111" stroke-width="3.5"/>
    <!-- Dorsal fin -->
    <path d="M400 218 C388 178 402 148 430 138 C458 148 472 178 460 218" fill="white" stroke="#111" stroke-width="4"/>
    <line x1="415" y1="178" x2="418" y2="222" stroke="#111" stroke-width="2"/>
    <line x1="432" y1="160" x2="434" y2="222" stroke="#111" stroke-width="2"/>
    <line x1="449" y1="163" x2="450" y2="222" stroke="#111" stroke-width="2"/>
    <!-- Tail fin -->
    <path d="M365 430 C325 450 280 438 258 460 C280 490 330 482 370 468" fill="white" stroke="#111" stroke-width="4"/>
    <path d="M535 430 C575 450 620 438 642 460 C620 490 570 482 530 468" fill="white" stroke="#111" stroke-width="4"/>
    <!-- Pectoral fin -->
    <path d="M422 362 C398 380 380 402 385 425 C400 415 418 398 432 375" fill="white" stroke="#111" stroke-width="3.5"/>
    <path d="M478 362 C502 380 520 402 515 425 C500 415 482 398 468 375" fill="white" stroke="#111" stroke-width="3.5"/>
    <!-- Eye -->
    <circle cx="415" cy="258" r="28" fill="white" stroke="#111" stroke-width="4"/>
    <circle cx="415" cy="258" r="16" fill="#111"/>
    <circle cx="420" cy="252" r="6" fill="white"/>
    <!-- Mouth -->
    <path d="M400 305 Q418 318 438 312" fill="none" stroke="#111" stroke-width="3.5" stroke-linecap="round"/>
    <!-- Scale pattern -->
    <path d="M345 345 Q395 332 445 345" fill="none" stroke="#111" stroke-width="2"/>
    <path d="M455 345 Q505 332 555 345" fill="none" stroke="#111" stroke-width="2"/>
    <path d="M335 375 Q395 362 455 375" fill="none" stroke="#111" stroke-width="2"/>
    <path d="M445 375 Q505 362 565 375" fill="none" stroke="#111" stroke-width="2"/>

    <!-- SMALL FISH upper left -->
    <ellipse cx="188" cy="282" rx="68" ry="42" fill="white" stroke="#111" stroke-width="4"/>
    <path d="M120 282 C95 258 75 262 68 282 C75 302 95 306 120 282Z" fill="white" stroke="#111" stroke-width="4"/>
    <circle cx="238" cy="268" r="14" fill="white" stroke="#111" stroke-width="3"/>
    <circle cx="242" cy="265" r="5" fill="#111"/>
    <!-- Stripes -->
    <line x1="175" y1="242" x2="175" y2="322" stroke="#111" stroke-width="2.5"/>
    <line x1="205" y1="240" x2="205" y2="324" stroke="#111" stroke-width="2.5"/>
    <!-- Fins -->
    <path d="M205 240 C215 215 228 208 238 218 C230 232 218 238 205 240Z" fill="white" stroke="#111" stroke-width="3"/>

    <!-- SMALL FISH upper right -->
    <ellipse cx="712" cy="310" rx="68" ry="42" fill="white" stroke="#111" stroke-width="4"/>
    <path d="M780 310 C805 286 825 290 832 310 C825 330 805 334 780 310Z" fill="white" stroke="#111" stroke-width="4"/>
    <circle cx="662" cy="296" r="14" fill="white" stroke="#111" stroke-width="3"/>
    <circle cx="665" cy="293" r="5" fill="#111"/>
    <line x1="698" y1="270" x2="698" y2="350" stroke="#111" stroke-width="2.5"/>
    <line x1="725" y1="268" x2="725" y2="352" stroke="#111" stroke-width="2.5"/>

    <!-- Bubbles -->
    <circle cx="248" cy="205" r="16" fill="none" stroke="#111" stroke-width="3"/>
    <circle cx="270" cy="158" r="11" fill="none" stroke="#111" stroke-width="2.5"/>
    <circle cx="255" cy="118" r="7" fill="none" stroke="#111" stroke-width="2"/>
    <circle cx="638" cy="235" r="14" fill="none" stroke="#111" stroke-width="3"/>
    <circle cx="658" cy="192" r="9" fill="none" stroke="#111" stroke-width="2.5"/>
    <circle cx="642" cy="155" r="6" fill="none" stroke="#111" stroke-width="2"/>
    <!-- Small fish far right -->
    <circle cx="812" cy="510" r="22" fill="none" stroke="#111" stroke-width="2.5"/>
    <circle cx="820" cy="458" r="15" fill="none" stroke="#111" stroke-width="2.5"/>
    <circle cx="828" cy="418" r="9" fill="none" stroke="#111" stroke-width="2"/>
  </svg>`,
};

const unicorn: ColoringPage = {
  id: 'unicorn',
  name: 'Magic Unicorn',
  category: 'Fantasy',
  svgData: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}">${BG}
    <!-- Rainbow arc behind unicorn -->
    <path d="M50 750 Q450 200 850 750" fill="none" stroke="#111" stroke-width="5"/>
    <path d="M80 750 Q450 245 820 750" fill="none" stroke="#111" stroke-width="4"/>
    <path d="M110 750 Q450 290 790 750" fill="none" stroke="#111" stroke-width="4"/>
    <path d="M140 750 Q450 335 760 750" fill="none" stroke="#111" stroke-width="4"/>
    <!-- Ground -->
    <path d="M0 830 Q450 800 900 830 L900 900 L0 900 Z" fill="white" stroke="#111" stroke-width="4"/>
    <!-- Small flowers in grass -->
    <circle cx="80" cy="826" r="8" fill="white" stroke="#111" stroke-width="2.5"/>
    <line x1="80" y1="834" x2="80" y2="848" stroke="#111" stroke-width="2.5"/>
    <circle cx="820" cy="826" r="8" fill="white" stroke="#111" stroke-width="2.5"/>
    <line x1="820" y1="834" x2="820" y2="848" stroke="#111" stroke-width="2.5"/>
    <!-- Stars around unicorn -->
    <path d="M125 240 L130 225 L135 240 L150 245 L135 250 L130 265 L125 250 L110 245 Z" fill="white" stroke="#111" stroke-width="2"/>
    <path d="M758 195 L763 180 L768 195 L783 200 L768 205 L763 220 L758 205 L743 200 Z" fill="white" stroke="#111" stroke-width="2"/>
    <path d="M195 445 L199 434 L203 445 L214 449 L203 453 L199 464 L195 453 L184 449 Z" fill="white" stroke="#111" stroke-width="1.5"/>
    <path d="M692 408 L696 397 L700 408 L711 412 L700 416 L696 427 L692 416 L681 412 Z" fill="white" stroke="#111" stroke-width="1.5"/>
    <circle cx="158" cy="348" r="5" fill="#111"/>
    <circle cx="740" cy="302" r="5" fill="#111"/>
    <circle cx="162" cy="502" r="4" fill="#111"/>
    <circle cx="738" cy="478" r="4" fill="#111"/>
    <!-- UNICORN BODY -->
    <!-- Main body -->
    <path d="M220 680 C210 630 215 570 240 520 C265 470 310 448 370 440 L600 440 C660 448 700 475 718 525 C735 572 732 635 722 682 C680 712 600 730 450 735 C300 730 245 712 220 682 Z" fill="white" stroke="#111" stroke-width="5"/>
    <!-- Neck -->
    <path d="M370 440 C358 398 362 358 382 328 L498 328 C518 358 522 398 510 440" fill="white" stroke="#111" stroke-width="5"/>
    <!-- Head -->
    <ellipse cx="440" cy="285" rx="98" ry="82" fill="white" stroke="#111" stroke-width="5"/>
    <!-- Snout bump -->
    <path d="M345 285 C322 285 305 305 312 328 C320 348 348 355 375 340" fill="white" stroke="#111" stroke-width="4"/>
    <!-- Nostril -->
    <ellipse cx="318" cy="310" rx="9" ry="6" fill="#111"/>
    <!-- Mouth -->
    <path d="M318 332 Q348 348 372 340" fill="none" stroke="#111" stroke-width="3.5" stroke-linecap="round"/>
    <!-- Eye -->
    <circle cx="398" cy="268" r="28" fill="white" stroke="#111" stroke-width="4"/>
    <circle cx="398" cy="268" r="15" fill="#111"/>
    <circle cx="403" cy="262" r="5" fill="white"/>
    <!-- Lashes -->
    <path d="M376 248 L372 236 M386 242 L384 230 M398 240 L398 228" fill="none" stroke="#111" stroke-width="2.5" stroke-linecap="round"/>
    <!-- Horn (spiral) -->
    <path d="M462 210 L445 110 L478 110 Z" fill="white" stroke="#111" stroke-width="4"/>
    <line x1="450" y1="195" x2="464" y2="165" stroke="#111" stroke-width="2.5"/>
    <line x1="449" y1="175" x2="461" y2="145" stroke="#111" stroke-width="2.5"/>
    <line x1="448" y1="153" x2="460" y2="123" stroke="#111" stroke-width="2.5"/>
    <!-- Ear -->
    <path d="M490 222 L512 178 L534 224 Z" fill="white" stroke="#111" stroke-width="4"/>
    <path d="M496 220 L512 190 L528 220 Z" fill="white" stroke="#111" stroke-width="2.5"/>
    <!-- MANE flowing -->
    <path d="M532 225 C565 218 590 232 598 255 C575 265 550 250 532 225Z" fill="white" stroke="#111" stroke-width="3.5"/>
    <path d="M540 255 C578 250 602 268 608 295 C580 305 554 288 540 255Z" fill="white" stroke="#111" stroke-width="3.5"/>
    <path d="M535 292 C572 290 598 310 600 340 C572 350 548 328 535 292Z" fill="white" stroke="#111" stroke-width="3.5"/>
    <path d="M525 330 C558 332 582 355 580 385 C552 392 530 368 525 330Z" fill="white" stroke="#111" stroke-width="3.5"/>
    <path d="M518 368 C548 372 568 398 562 428 C534 432 515 406 518 368Z" fill="white" stroke="#111" stroke-width="3.5"/>
    <!-- TAIL -->
    <path d="M718 545 C762 518 808 498 840 478 C868 460 868 438 848 444 C824 452 785 475 752 496 C720 515 700 532 695 548Z" fill="white" stroke="#111" stroke-width="4"/>
    <path d="M720 575 C768 552 820 538 855 525 C882 514 885 494 862 496 C835 498 790 516 752 535 C718 552 700 568 698 582Z" fill="white" stroke="#111" stroke-width="4"/>
    <path d="M718 605 C760 588 812 582 845 575 C872 568 872 548 848 548 C822 548 775 558 740 572 C710 582 698 596 700 608Z" fill="white" stroke="#111" stroke-width="4"/>
    <!-- Legs -->
    <!-- Front left -->
    <rect x="295" y="718" width="68" height="98" rx="12" fill="white" stroke="#111" stroke-width="4"/>
    <!-- Front right -->
    <rect x="382" y="722" width="68" height="95" rx="12" fill="white" stroke="#111" stroke-width="4"/>
    <!-- Back left -->
    <rect x="478" y="722" width="68" height="95" rx="12" fill="white" stroke="#111" stroke-width="4"/>
    <!-- Back right -->
    <rect x="562" y="718" width="68" height="98" rx="12" fill="white" stroke="#111" stroke-width="4"/>
    <!-- Hooves -->
    <rect x="290" y="808" width="78" height="22" rx="8" fill="white" stroke="#111" stroke-width="3.5"/>
    <rect x="377" y="808" width="78" height="22" rx="8" fill="white" stroke="#111" stroke-width="3.5"/>
    <rect x="472" y="808" width="78" height="22" rx="8" fill="white" stroke="#111" stroke-width="3.5"/>
    <rect x="556" y="808" width="78" height="22" rx="8" fill="white" stroke="#111" stroke-width="3.5"/>
    <!-- Belly marking (oval) -->
    <ellipse cx="450" cy="600" rx="105" ry="68" fill="white" stroke="#111" stroke-width="3" stroke-dasharray="0"/>
    <!-- Heart on cheek -->
    <path d="M450 298 C452 293 458 290 462 296 C466 290 472 293 474 298 C474 308 462 318 462 318 C462 318 450 308 450 298Z" fill="white" stroke="#111" stroke-width="2"/>
  </svg>`,
};

const dragon: ColoringPage = {
  id: 'dragon',
  name: 'Friendly Dragon',
  category: 'Fantasy',
  svgData: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}">${BG}
    <!-- Dragon body sitting on ground -->
    <!-- Ground / rock -->
    <path d="M0 860 Q450 825 900 860 L900 900 L0 900 Z" fill="white" stroke="#111" stroke-width="4"/>
    <path d="M248 848 Q295 830 362 840 Q295 855 248 848Z" fill="white" stroke="#111" stroke-width="3"/>
    <path d="M568 842 Q622 826 688 836 Q622 852 568 842Z" fill="white" stroke="#111" stroke-width="3"/>
    <!-- Main body -->
    <path d="M255 680 C242 625 248 558 278 505 C310 450 362 422 438 415 C515 422 568 452 595 508 C620 560 622 630 608 685 C565 728 510 750 450 752 C390 750 330 726 255 680 Z" fill="white" stroke="#111" stroke-width="5"/>
    <!-- Belly scales / plates -->
    <path d="M310 600 Q450 572 590 600 Q578 648 450 660 Q322 648 310 600Z" fill="white" stroke="#111" stroke-width="3.5"/>
    <path d="M325 645 Q450 618 575 645 Q562 688 450 698 Q338 688 325 645Z" fill="white" stroke="#111" stroke-width="3"/>
    <path d="M338 690 Q450 665 562 690 Q550 728 450 736 Q350 728 338 690Z" fill="white" stroke="#111" stroke-width="3"/>
    <!-- Wing (left, folded) -->
    <path d="M258 520 C218 475 175 428 145 398 C118 370 118 338 145 330 C172 322 205 348 232 385 C258 420 268 465 270 505" fill="white" stroke="#111" stroke-width="4"/>
    <path d="M258 520 C235 498 198 480 172 468 C148 458 138 440 148 425 C162 410 188 415 212 428 C238 442 255 468 262 495" fill="white" stroke="#111" stroke-width="3.5"/>
    <!-- Wing membrane lines -->
    <path d="M258 520 L145 330" fill="none" stroke="#111" stroke-width="2"/>
    <path d="M258 520 L148 425" fill="none" stroke="#111" stroke-width="2"/>
    <!-- Wing (right, folded) -->
    <path d="M640 520 C680 475 722 428 752 398 C779 370 779 338 752 330 C725 322 692 348 665 385 C638 420 628 465 627 505" fill="white" stroke="#111" stroke-width="4"/>
    <path d="M640 520 C662 498 700 480 725 468 C748 458 758 440 748 425 C734 410 708 415 685 428 C658 442 642 468 635 495" fill="white" stroke="#111" stroke-width="3.5"/>
    <path d="M640 520 L752 330" fill="none" stroke="#111" stroke-width="2"/>
    <path d="M640 520 L748 425" fill="none" stroke="#111" stroke-width="2"/>
    <!-- Back spines -->
    <polygon points="368,420 380,375 392,420" fill="white" stroke="#111" stroke-width="3.5"/>
    <polygon points="405,412 420,360 435,412" fill="white" stroke="#111" stroke-width="3.5"/>
    <polygon points="445,408 462,350 480,408" fill="white" stroke="#111" stroke-width="3.5"/>
    <polygon points="490,412 505,360 520,412" fill="white" stroke="#111" stroke-width="3.5"/>
    <polygon points="528,420 540,375 552,420" fill="white" stroke="#111" stroke-width="3.5"/>
    <!-- Neck -->
    <path d="M368 418 C358 378 365 338 385 310 L468 310 C488 338 495 378 485 418" fill="white" stroke="#111" stroke-width="5"/>
    <!-- Head -->
    <ellipse cx="425" cy="272" rx="105" ry="82" fill="white" stroke="#111" stroke-width="5"/>
    <!-- Snout -->
    <path d="M322 275 C295 276 278 298 285 325 C292 348 322 355 355 340" fill="white" stroke="#111" stroke-width="4"/>
    <!-- Nostril -->
    <ellipse cx="292" cy="305" rx="10" ry="6" fill="#111"/>
    <!-- Smoke puffs (from nostril) -->
    <circle cx="278" cy="292" r="9" fill="none" stroke="#111" stroke-width="2.5"/>
    <circle cx="265" cy="278" r="7" fill="none" stroke="#111" stroke-width="2"/>
    <circle cx="255" cy="265" r="5" fill="none" stroke="#111" stroke-width="2"/>
    <!-- Mouth wide smile -->
    <path d="M290 330 Q352 362 415 348" fill="none" stroke="#111" stroke-width="4" stroke-linecap="round"/>
    <!-- Teeth -->
    <path d="M302 336 L306 352 L315 336" fill="white" stroke="#111" stroke-width="2.5"/>
    <path d="M320 344 L324 358 L332 344" fill="white" stroke="#111" stroke-width="2.5"/>
    <path d="M338 350 L342 364 L350 350" fill="white" stroke="#111" stroke-width="2.5"/>
    <!-- Eye (big and friendly) -->
    <circle cx="378" cy="252" r="32" fill="white" stroke="#111" stroke-width="4"/>
    <circle cx="378" cy="252" r="18" fill="#111"/>
    <circle cx="384" cy="245" r="7" fill="white"/>
    <circle cx="390" cy="255" r="3" fill="white"/>
    <!-- Eyebrow (lifted = happy) -->
    <path d="M355 225 Q378 215 400 224" fill="none" stroke="#111" stroke-width="4" stroke-linecap="round"/>
    <!-- Horn on head -->
    <path d="M462 198 L475 152 L490 198 Z" fill="white" stroke="#111" stroke-width="4"/>
    <!-- Ear frills -->
    <path d="M508 222 L535 195 L542 228 L520 238 Z" fill="white" stroke="#111" stroke-width="3.5"/>
    <path d="M522 210 L545 192 L546 218 L528 224 Z" fill="white" stroke="#111" stroke-width="2.5"/>
    <!-- Tail -->
    <path d="M608 680 C668 648 738 608 778 572 C810 540 808 508 785 515 C760 522 728 558 698 592 C668 625 638 658 618 678Z" fill="white" stroke="#111" stroke-width="5"/>
    <!-- Tail tip (heart shape!) -->
    <path d="M778 572 C782 558 795 552 805 558 C815 552 828 558 832 572 C832 592 805 608 805 608 C805 608 778 592 778 572Z" fill="white" stroke="#111" stroke-width="3.5"/>
    <!-- Legs -->
    <path d="M300 730 L282 820 L258 820" fill="none" stroke="#111" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M258 820 L242 845 M258 820 L268 845 M258 820 L285 842" fill="none" stroke="#111" stroke-width="3.5" stroke-linecap="round"/>
    <path d="M382 758 L378 845 L352 845" fill="none" stroke="#111" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M352 845 L336 868 M352 845 L362 868 M352 845 L378 865" fill="none" stroke="#111" stroke-width="3.5" stroke-linecap="round"/>
    <path d="M518 758 L522 845 L548 845" fill="none" stroke="#111" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M548 845 L534 868 M548 845 L558 868 M548 845 L575 865" fill="none" stroke="#111" stroke-width="3.5" stroke-linecap="round"/>
    <path d="M598 730 L618 820 L645 820" fill="none" stroke="#111" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M645 820 L632 845 M645 820 L655 845 M645 820 L672 842" fill="none" stroke="#111" stroke-width="3.5" stroke-linecap="round"/>
  </svg>`,
};

export const COLORING_PAGES: ColoringPage[] = [
  butterfly,
  unicorn,
  mermaid,
  dragon,
  castle,
  rocketSpace,
  cat,
  flowerGarden,
  fish,
  hotAirBalloon,
];
