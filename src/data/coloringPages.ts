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
  colorSvgData: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 900">
    <path d="M436 385 C375 340 225 305 180 365 C140 420 178 505 260 518 C335 530 420 472 436 425" fill="#FF7F00"/>
    <path d="M464 385 C525 340 675 305 720 365 C760 420 722 505 640 518 C565 530 480 472 464 425" fill="#FF7F00"/>
    <path d="M436 510 C390 530 308 552 272 600 C238 645 264 702 318 698 C372 694 428 642 440 585" fill="#FF4500"/>
    <path d="M464 510 C510 530 592 552 628 600 C662 645 636 702 582 698 C528 694 472 642 460 585" fill="#FF4500"/>
    <circle cx="268" cy="422" r="48" fill="#FFD700"/>
    <circle cx="268" cy="422" r="10" fill="#8B4513"/>
    <circle cx="632" cy="422" r="48" fill="#FFD700"/>
    <circle cx="632" cy="422" r="10" fill="#8B4513"/>
    <ellipse cx="450" cy="460" rx="16" ry="100" fill="#6B3A1A"/>
    <circle cx="450" cy="345" r="26" fill="#6B3A1A"/>
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
  colorSvgData: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 900">
    <ellipse cx="450" cy="370" rx="230" ry="280" fill="#FF0000"/>
    <path d="M222 360 Q310 390 450 360 Q590 390 678 360 Q590 320 450 360 Q310 320 222 360Z" fill="#FFD700"/>
    <path d="M310 90 L268 600 L380 645 L380 95Z" fill="#FF4500"/>
    <path d="M590 90 L632 600 L520 645 L520 95Z" fill="#4169E1"/>
    <rect x="375" y="718" width="150" height="105" rx="10" fill="#8B4513"/>
    <circle cx="140" cy="110" r="52" fill="#FFD700"/>
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
  colorSvgData: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 900">
    <ellipse cx="430" cy="530" rx="195" ry="145" fill="#7BC67A"/>
    <path d="M320 415 C308 370 318 325 348 300 L430 292 C462 300 478 348 470 415" fill="#7BC67A"/>
    <ellipse cx="390" cy="262" rx="90" ry="68" fill="#7BC67A"/>
    <path d="M315 265 C290 266 272 288 278 313 C284 334 312 338 345 326" fill="#7BC67A"/>
    <polygon points="460,415 478,368 496,415" fill="#2E8B57"/>
    <polygon points="495,400 518,345 540,400" fill="#2E8B57"/>
    <polygon points="530,390 558,328 585,390" fill="#2E8B57"/>
    <polygon points="562,400 588,345 614,400" fill="#2E8B57"/>
    <polygon points="592,418 612,375 632,418" fill="#2E8B57"/>
    <ellipse cx="420" cy="540" rx="45" ry="32" fill="#B8E6A0"/>
    <ellipse cx="420" cy="540" rx="22" ry="16" fill="#D4F5C0"/>
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
  colorSvgData: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 900">
    <ellipse cx="450" cy="820" rx="220" ry="55" fill="#888888"/>
    <path d="M390 780 C360 810 320 840 300 870 C285 895 310 908 330 888 C355 862 380 840 405 820" fill="#00CED1"/>
    <path d="M510 780 C540 810 580 840 600 870 C615 895 590 908 570 888 C545 862 520 840 495 820" fill="#00CED1"/>
    <path d="M380 680 Q450 695 520 680 Q545 720 540 770 Q500 790 450 790 Q400 790 360 770 Q355 720 380 680Z" fill="#00CED1"/>
    <path d="M365 620 Q380 640 380 680 L520 680 Q520 640 535 620 Q500 630 450 630 Q400 630 365 620Z" fill="#00A896"/>
    <path d="M340 480 C330 520 330 565 365 620 Q400 638 450 640 Q500 638 535 620 C570 565 570 520 560 480 L540 440 Q500 458 450 460 Q400 458 360 440 Z" fill="#FDBCB4"/>
    <ellipse cx="418" cy="542" rx="35" ry="28" fill="#FF69B4"/>
    <ellipse cx="482" cy="542" rx="35" ry="28" fill="#FF69B4"/>
    <rect x="428" y="420" width="44" height="60" rx="8" fill="#FDBCB4"/>
    <ellipse cx="450" cy="350" rx="85" ry="95" fill="#FDBCB4"/>
    <path d="M370 295 C330 270 290 275 260 305 C240 330 258 370 285 365 C260 390 255 425 278 440" fill="#DC143C"/>
    <path d="M530 295 C570 270 610 275 640 305 C660 330 642 370 615 365" fill="#DC143C"/>
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
  colorSvgData: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 900">
    <path d="M50 860 Q450 800 850 860 L850 900 L50 900 Z" fill="#228B22"/>
    <rect x="145" y="390" width="130" height="460" fill="#D2B48C"/>
    <rect x="625" y="390" width="130" height="460" fill="#D2B48C"/>
    <rect x="230" y="480" width="440" height="370" fill="#D2B48C"/>
    <rect x="360" y="290" width="180" height="220" fill="#C8A87A"/>
    <path d="M390 850 L390 680 Q450 640 510 680 L510 850 Z" fill="#4A2C17"/>
    <path d="M398 360 L398 330 Q420 312 442 330 L442 360 Z" fill="#87CEEB"/>
    <path d="M458 360 L458 330 Q480 312 502 330 L502 360 Z" fill="#87CEEB"/>
    <path d="M280 580 L280 550 Q300 532 320 550 L320 580 Z" fill="#87CEEB"/>
    <path d="M580 580 L580 550 Q600 532 620 550 L620 580 Z" fill="#87CEEB"/>
    <path d="M170 490 L170 460 Q210 442 250 460 L250 490 Z" fill="#87CEEB"/>
    <path d="M650 490 L650 460 Q690 442 730 460 L730 490 Z" fill="#87CEEB"/>
    <path d="M450 175 L498 198 L450 218 Z" fill="#FF0000"/>
    <path d="M210 285 L252 305 L210 322 Z" fill="#FF0000"/>
    <path d="M690 285 L648 305 L690 322 Z" fill="#0080FF"/>
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
  colorSvgData: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 900">
    <circle cx="80" cy="80" r="5" fill="#FFD700"/>
    <circle cx="320" cy="60" r="4" fill="#FFD700"/>
    <circle cx="620" cy="40" r="5" fill="#FFD700"/>
    <circle cx="840" cy="140" r="4" fill="#FFD700"/>
    <circle cx="860" cy="400" r="5" fill="#FFD700"/>
    <path d="M390 180 C390 100 450 60 450 60 C450 60 510 100 510 180" fill="#FF0000"/>
    <rect x="390" y="180" width="120" height="300" fill="#FF6B6B"/>
    <path d="M390 480 L340 580 L390 560" fill="#FF4500"/>
    <path d="M510 480 L560 580 L510 560" fill="#FF4500"/>
    <circle cx="450" cy="320" r="45" fill="#87CEEB"/>
    <path d="M390 560 Q450 580 510 560 L510 620 Q450 640 390 620 Z" fill="#C0C0C0"/>
    <ellipse cx="140" cy="740" rx="118" ry="88" fill="#FF8C00"/>
    <path d="M420 620 Q435 660 420 700 Q440 680 450 700 Q460 680 480 700 Q465 660 480 620" fill="#FF8C00"/>
    <path d="M425 640 Q435 670 450 650 Q465 670 475 640" fill="#FFD700"/>
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
  colorSvgData: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 900">
    <path d="M580 780 C650 740 720 680 730 608 C738 548 700 520 670 548 C645 572 650 620 635 660 C620 700 580 730 555 755" fill="#FF9800"/>
    <ellipse cx="430" cy="680" rx="220" ry="185" fill="#FF9800"/>
    <ellipse cx="340" cy="840" rx="70" ry="35" fill="#FFB84D"/>
    <ellipse cx="520" cy="840" rx="70" ry="35" fill="#FFB84D"/>
    <ellipse cx="430" cy="390" rx="162" ry="148" fill="#FF9800"/>
    <path d="M290 298 L252 198 L352 272 Z" fill="#FF9800"/>
    <path d="M570 298 L608 198 L508 272 Z" fill="#FF9800"/>
    <path d="M296 286 L272 222 L335 270 Z" fill="#FF69B4"/>
    <path d="M564 286 L588 222 L525 270 Z" fill="#FF69B4"/>
    <ellipse cx="375" cy="378" rx="42" ry="38" fill="#00C800"/>
    <ellipse cx="485" cy="378" rx="42" ry="38" fill="#00C800"/>
    <ellipse cx="430" cy="700" rx="100" ry="120" fill="#FFD0A0"/>
    <path d="M340 510 Q430 525 520 510 Q510 545 430 548 Q350 545 340 510 Z" fill="#E55A00"/>
    <circle cx="430" cy="535" r="14" fill="#FFD700"/>
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
  colorSvgData: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 900">
    <circle cx="780" cy="115" r="65" fill="#FFD700"/>
    <ellipse cx="200" cy="115" rx="75" ry="45" fill="#FFFFFF"/>
    <ellipse cx="145" cy="132" rx="52" ry="36" fill="#FFFFFF"/>
    <ellipse cx="262" cy="130" rx="52" ry="36" fill="#FFFFFF"/>
    <rect x="0" y="720" width="900" height="180" fill="#228B22"/>
    <path d="M48 780 L48 840 L120 840 L120 780 Q90 768 48 780 Z" fill="#4169E1"/>
    <path d="M120 810 L160 800 L168 820 L128 830 Z" fill="#8B6914"/>
    <circle cx="168" cy="810" r="8" fill="#C0A060"/>
    <ellipse cx="580" cy="138" rx="32" ry="20" fill="#FF69B4"/>
    <ellipse cx="540" cy="145" rx="25" ry="16" fill="#FF4500"/>
    <circle cx="562" cy="140" r="6" fill="#FFD700"/>
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
  colorSvgData: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 900">
    <path d="M0 800 Q225 768 450 785 Q675 800 900 775 L900 900 L0 900 Z" fill="#C2956B"/>
    <path d="M365 430 C305 388 270 330 295 272 C318 218 388 205 450 218 C512 205 582 218 605 272 C630 330 595 388 535 430 C522 465 478 488 450 488 C422 488 378 465 365 430Z" fill="#FF6B35"/>
    <path d="M388 228 Q450 218 512 228 Q520 252 512 278 Q450 268 388 278 Q380 252 388 228Z" fill="#FFFFFF"/>
    <path d="M328 348 Q450 328 572 348 Q578 378 572 405 Q450 382 328 405 Q322 378 328 348Z" fill="#FFFFFF"/>
    <path d="M400 218 C388 178 402 148 430 138 C458 148 472 178 460 218" fill="#FF4500"/>
    <path d="M365 430 C325 450 280 438 258 460 C280 490 330 482 370 468" fill="#FF4500"/>
    <path d="M535 430 C575 450 620 438 642 460 C620 490 570 482 530 468" fill="#FF4500"/>
    <circle cx="415" cy="258" r="28" fill="#FFD700"/>
    <ellipse cx="188" cy="282" rx="68" ry="42" fill="#FFD700"/>
    <path d="M120 282 C95 258 75 262 68 282 C75 302 95 306 120 282Z" fill="#FFB300"/>
    <ellipse cx="712" cy="310" rx="68" ry="42" fill="#00BFFF"/>
    <path d="M780 310 C805 286 825 290 832 310 C825 330 805 334 780 310Z" fill="#0080FF"/>
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
  colorSvgData: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 900">
    <path d="M50 750 Q450 200 850 750" fill="none" stroke="#FF0000" stroke-width="10"/>
    <path d="M80 750 Q450 245 820 750" fill="none" stroke="#FF8C00" stroke-width="8"/>
    <path d="M110 750 Q450 290 790 750" fill="none" stroke="#FFD700" stroke-width="8"/>
    <path d="M140 750 Q450 335 760 750" fill="none" stroke="#00C800" stroke-width="8"/>
    <path d="M0 830 Q450 800 900 830 L900 900 L0 900 Z" fill="#90EE90"/>
    <path d="M220 680 C210 630 215 570 240 520 C265 470 310 448 370 440 L600 440 C660 448 700 475 718 525 C735 572 732 635 722 682 C680 712 600 730 450 735 C300 730 245 712 220 682 Z" fill="#FFF5E4"/>
    <path d="M370 440 C358 398 362 358 382 328 L498 328 C518 358 522 398 510 440" fill="#FFF5E4"/>
    <ellipse cx="440" cy="285" rx="98" ry="82" fill="#FFF5E4"/>
    <path d="M532 225 C565 218 590 232 598 255 C575 265 550 250 532 225Z" fill="#FF69B4"/>
    <path d="M540 255 C578 250 602 268 608 295 C580 305 554 288 540 255Z" fill="#FF1493"/>
    <path d="M535 292 C572 290 598 310 600 340 C572 350 548 328 535 292Z" fill="#DA70D6"/>
    <path d="M525 330 C558 332 582 355 580 385 C552 392 530 368 525 330Z" fill="#9370DB"/>
    <path d="M518 368 C548 372 568 398 562 428 C534 432 515 406 518 368Z" fill="#6A5ACD"/>
    <path d="M462 210 L445 110 L478 110 Z" fill="#FFD700"/>
    <rect x="295" y="718" width="68" height="98" rx="12" fill="#FFF5E4"/>
    <rect x="382" y="722" width="68" height="95" rx="12" fill="#FFF5E4"/>
    <rect x="478" y="722" width="68" height="95" rx="12" fill="#FFF5E4"/>
    <rect x="562" y="718" width="68" height="98" rx="12" fill="#FFF5E4"/>
    <rect x="290" y="808" width="78" height="22" rx="8" fill="#888888"/>
    <rect x="377" y="808" width="78" height="22" rx="8" fill="#888888"/>
    <rect x="472" y="808" width="78" height="22" rx="8" fill="#888888"/>
    <rect x="556" y="808" width="78" height="22" rx="8" fill="#888888"/>
    <ellipse cx="450" cy="600" rx="105" ry="68" fill="#FFE4C4"/>
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
  colorSvgData: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 900">
    <path d="M0 860 Q450 825 900 860 L900 900 L0 900 Z" fill="#228B22"/>
    <path d="M255 680 C242 625 248 558 278 505 C310 450 362 422 438 415 C515 422 568 452 595 508 C620 560 622 630 608 685 C565 728 510 750 450 752 C390 750 330 726 255 680 Z" fill="#8B0000"/>
    <path d="M270 490 C232 450 198 388 210 320 C220 265 265 240 310 258" fill="#8B0000"/>
    <path d="M630 490 C668 450 702 388 690 320 C680 265 635 240 590 258" fill="#8B0000"/>
    <path d="M270 490 C195 440 128 400 90 350 C68 322 72 295 95 302 C122 310 160 345 215 388" fill="#C00000"/>
    <path d="M630 490 C705 440 772 400 810 350 C832 322 828 295 805 302 C778 310 740 345 685 388" fill="#C00000"/>
    <path d="M270 500 C200 462 138 462 92 490 C128 525 192 522 255 505" fill="#FFD700"/>
    <path d="M630 500 C700 462 762 462 808 490 C772 525 708 522 645 505" fill="#FFD700"/>
    <path d="M342 418 C340 370 352 332 378 308 L522 308 C548 332 560 370 558 418" fill="#8B0000"/>
    <ellipse cx="450" cy="265" rx="98" ry="78" fill="#8B0000"/>
    <path d="M355 268 C330 265 312 285 318 310 C325 332 352 340 380 325" fill="#A00000"/>
    <circle cx="378" cy="252" r="18" fill="#FFD700"/>
    <path d="M462 198 L475 152 L490 198 Z" fill="#FFD700"/>
    <path d="M342 418 C240 388 148 348 92 290 C72 268 80 245 102 252 C128 260 175 298 232 335 C282 368 325 398 342 418Z" fill="#C00000"/>
    <path d="M558 418 C660 388 752 348 808 290 C828 268 820 245 798 252 C772 260 725 298 668 335 C618 368 575 398 558 418Z" fill="#C00000"/>
    <path d="M608 680 C668 648 738 608 778 572 C810 540 808 508 785 515 C760 522 728 558 698 592 C668 625 638 658 618 678Z" fill="#C00000"/>
    <path d="M390 500 Q440 480 490 490 Q480 540 450 548 Q420 540 390 500Z" fill="#FFD700"/>
    <ellipse cx="425" cy="560" rx="30" ry="22" fill="#FFD700"/>
    <ellipse cx="475" cy="560" rx="30" ry="22" fill="#FFD700"/>
    <ellipse cx="450" cy="600" rx="40" ry="28" fill="#FFD700"/>
    <path d="M415 630 C405 650 408 668 420 672 L435 672" fill="#FF4500"/>
    <path d="M430 635 Q450 620 465 635 Q480 652 475 672 L455 672" fill="#FF8C00"/>
  </svg>`,
};


const cinderella: ColoringPage = {
  id: 'cinderella',
  name: 'Cinderella',
  category: 'Princess',
  svgData: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 900"><rect width="900" height="900" fill="white"/>
    <ellipse cx="450" cy="200" rx="75" ry="85" fill="white" stroke="#111" stroke-width="5"/>
    <path d="M385 155 C370 120 355 85 345 60 L390 90 L410 55 L430 100 L450 60 L470 100 L490 55 L510 90 L555 60 C545 85 530 120 515 155" fill="white" stroke="#111" stroke-width="4"/>
    <ellipse cx="425" cy="195" rx="14" ry="18" fill="white" stroke="#111" stroke-width="3.5"/>
    <ellipse cx="475" cy="195" rx="14" ry="18" fill="white" stroke="#111" stroke-width="3.5"/>
    <circle cx="427" cy="197" r="8" fill="#111"/>
    <circle cx="477" cy="197" r="8" fill="#111"/>
    <circle cx="429" cy="193" r="3" fill="white"/>
    <circle cx="479" cy="193" r="3" fill="white"/>
    <path d="M433 225 Q450 238 467 225" fill="none" stroke="#111" stroke-width="3" stroke-linecap="round"/>
    <path d="M436 213 Q450 220 464 213" fill="none" stroke="#111" stroke-width="2.5" stroke-linecap="round"/>
    <ellipse cx="415" cy="218" rx="12" ry="7" fill="none" stroke="#111" stroke-width="1.5" stroke-dasharray="2,2"/>
    <ellipse cx="485" cy="218" rx="12" ry="7" fill="none" stroke="#111" stroke-width="1.5" stroke-dasharray="2,2"/>
    <path d="M390 275 C388 285 395 295 410 300 L490 300 C505 295 512 285 510 275" fill="white" stroke="#111" stroke-width="4"/>
    <path d="M390 275 C390 500 300 680 250 850 L650 850 C600 680 510 500 510 275" fill="white" stroke="#111" stroke-width="5"/>
    <path d="M285 540 Q380 510 390 540 Q380 570 285 580 Z" fill="white" stroke="#111" stroke-width="3.5"/>
    <path d="M615 540 Q520 510 510 540 Q520 570 615 580 Z" fill="white" stroke="#111" stroke-width="3.5"/>
    <path d="M250 620 Q350 580 390 600 Q350 640 250 660 Z" fill="white" stroke="#111" stroke-width="3"/>
    <path d="M650 620 Q550 580 510 600 Q550 640 650 660 Z" fill="white" stroke="#111" stroke-width="3"/>
    <path d="M250 850 Q350 820 450 825 Q550 820 650 850" fill="none" stroke="#111" stroke-width="4"/>
    <ellipse cx="315" cy="860" rx="40" ry="22" fill="white" stroke="#111" stroke-width="3.5"/>
    <ellipse cx="585" cy="860" rx="40" ry="22" fill="white" stroke="#111" stroke-width="3.5"/>
    <path d="M408 155 C395 165 388 178 390 192" fill="none" stroke="#111" stroke-width="3" stroke-linecap="round"/>
    <path d="M492 155 C505 165 512 178 510 192" fill="none" stroke="#111" stroke-width="3" stroke-linecap="round"/>
    <path d="M415 155 C420 148 430 145 440 148 C450 145 460 148 465 155" fill="white" stroke="#111" stroke-width="3"/>
    <circle cx="435" cy="148" r="5" fill="white" stroke="#111" stroke-width="2.5"/>
    <circle cx="450" cy="143" r="5" fill="white" stroke="#111" stroke-width="2.5"/>
    <circle cx="465" cy="148" r="5" fill="white" stroke="#111" stroke-width="2.5"/>
  </svg>`,
  colorSvgData: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 900">
    <ellipse cx="450" cy="200" rx="75" ry="85" fill="#FDBCB4"/>
    <path d="M385 155 C370 120 355 85 345 60 L390 90 L410 55 L430 100 L450 60 L470 100 L490 55 L510 90 L555 60 C545 85 530 120 515 155" fill="#FFD700"/>
    <path d="M390 275 C388 285 395 295 410 300 L490 300 C505 295 512 285 510 275" fill="#FDBCB4"/>
    <path d="M390 275 C390 500 300 680 250 850 L650 850 C600 680 510 500 510 275" fill="#87CEEB"/>
    <path d="M285 540 Q380 510 390 540 Q380 570 285 580 Z" fill="#6BB8E0"/>
    <path d="M615 540 Q520 510 510 540 Q520 570 615 580 Z" fill="#6BB8E0"/>
    <path d="M250 620 Q350 580 390 600 Q350 640 250 660 Z" fill="#5AADD0"/>
    <path d="M650 620 Q550 580 510 600 Q550 640 650 660 Z" fill="#5AADD0"/>
    <ellipse cx="315" cy="860" rx="40" ry="22" fill="#D4AF8C"/>
    <ellipse cx="585" cy="860" rx="40" ry="22" fill="#D4AF8C"/>
    <circle cx="435" cy="148" r="5" fill="#FFD700"/>
    <circle cx="450" cy="143" r="5" fill="#FFD700"/>
    <circle cx="465" cy="148" r="5" fill="#FFD700"/>
  </svg>`,
};

const snowWhite: ColoringPage = {
  id: 'snow-white',
  name: 'Snow White',
  category: 'Princess',
  svgData: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 900"><rect width="900" height="900" fill="white"/>
    <ellipse cx="450" cy="195" rx="80" ry="88" fill="white" stroke="#111" stroke-width="5"/>
    <path d="M372 148 C358 100 365 60 390 42 L450 55 L510 42 C535 60 542 100 528 148" fill="white" stroke="#111" stroke-width="4.5"/>
    <path d="M375 148 C355 158 345 178 352 198 L548 198 C555 178 545 158 525 148" fill="white" stroke="#111" stroke-width="4"/>
    <path d="M372 148 C362 162 358 182 365 202" fill="none" stroke="#111" stroke-width="3"/>
    <path d="M528 148 C538 162 542 182 535 202" fill="none" stroke="#111" stroke-width="3"/>
    <ellipse cx="422" cy="192" rx="16" ry="19" fill="white" stroke="#111" stroke-width="3.5"/>
    <ellipse cx="478" cy="192" rx="16" ry="19" fill="white" stroke="#111" stroke-width="3.5"/>
    <circle cx="424" cy="194" r="9" fill="#111"/>
    <circle cx="480" cy="194" r="9" fill="#111"/>
    <circle cx="426" cy="190" r="3" fill="white"/>
    <circle cx="482" cy="190" r="3" fill="white"/>
    <path d="M408 155 L402 140 M418 150 L414 134 M428 148 L426 132" fill="none" stroke="#111" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M472 150 L472 133 M482 152 L484 136 M492 155 L498 140" fill="none" stroke="#111" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M436 220 Q450 232 464 220" fill="none" stroke="#111" stroke-width="3" stroke-linecap="round"/>
    <ellipse cx="418" cy="215" rx="12" ry="7" fill="none" stroke="#111" stroke-width="1.5" stroke-dasharray="2,2"/>
    <ellipse cx="482" cy="215" rx="12" ry="7" fill="none" stroke="#111" stroke-width="1.5" stroke-dasharray="2,2"/>
    <path d="M444 208 Q450 214 456 208" fill="none" stroke="#111" stroke-width="2" stroke-linecap="round"/>
    <path d="M390 278 C385 285 388 295 400 302 L500 302 C512 295 515 285 510 278" fill="white" stroke="#111" stroke-width="4"/>
    <path d="M400 302 L375 850 L525 850 L500 302" fill="white" stroke="#111" stroke-width="4.5"/>
    <path d="M400 302 L310 480 L380 490 L400 450 L400 302" fill="white" stroke="#111" stroke-width="4"/>
    <path d="M500 302 L590 480 L520 490 L500 450 L500 302" fill="white" stroke="#111" stroke-width="4"/>
    <path d="M425 302 L425 850 M450 302 L450 850 M475 302 L475 850" fill="none" stroke="#111" stroke-width="1.5" stroke-dasharray="8,12"/>
    <path d="M375 500 Q420 488 450 490 Q480 488 525 500" fill="none" stroke="#111" stroke-width="3"/>
    <ellipse cx="315" cy="855" rx="45" ry="20" fill="white" stroke="#111" stroke-width="3.5"/>
    <ellipse cx="585" cy="855" rx="45" ry="20" fill="white" stroke="#111" stroke-width="3.5"/>
    <path d="M390 278 L375 258 Q380 275 400 282" fill="white" stroke="#111" stroke-width="3"/>
    <path d="M510 278 L525 258 Q520 275 500 282" fill="white" stroke="#111" stroke-width="3"/>
    <path d="M390 300 C380 310 365 318 355 310 C352 300 360 288 375 288" fill="white" stroke="#111" stroke-width="3"/>
    <path d="M510 300 C520 310 535 318 545 310 C548 300 540 288 525 288" fill="white" stroke="#111" stroke-width="3"/>
    <ellipse cx="680" cy="420" rx="42" ry="68" fill="white" stroke="#111" stroke-width="4"/>
    <path d="M650 390 L622 365 L618 390 Z" fill="white" stroke="#111" stroke-width="3"/>
    <path d="M665 358 Q680 345 695 358" fill="none" stroke="#111" stroke-width="3"/>
    <circle cx="680" cy="380" r="10" fill="white" stroke="#111" stroke-width="3"/>
  </svg>`,
  colorSvgData: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 900">
    <ellipse cx="450" cy="195" rx="80" ry="88" fill="#FDBCB4"/>
    <path d="M372 148 C358 100 365 60 390 42 L450 55 L510 42 C535 60 542 100 528 148" fill="#1C1C1C"/>
    <path d="M375 148 C355 158 345 178 352 198 L548 198 C555 178 545 158 525 148" fill="#1C1C1C"/>
    <path d="M390 278 C385 285 388 295 400 302 L500 302 C512 295 515 285 510 278" fill="#FDBCB4"/>
    <path d="M400 302 L375 850 L525 850 L500 302" fill="#FFD700"/>
    <path d="M400 302 L310 480 L380 490 L400 450 L400 302" fill="#4169E1"/>
    <path d="M500 302 L590 480 L520 490 L500 450 L500 302" fill="#4169E1"/>
    <ellipse cx="315" cy="855" rx="45" ry="20" fill="#FDBCB4"/>
    <ellipse cx="585" cy="855" rx="45" ry="20" fill="#FDBCB4"/>
    <path d="M390 300 C380 310 365 318 355 310 C352 300 360 288 375 288" fill="#FDBCB4"/>
    <path d="M510 300 C520 310 535 318 545 310 C548 300 540 288 525 288" fill="#FDBCB4"/>
    <ellipse cx="680" cy="420" rx="42" ry="68" fill="#FF0000"/>
    <path d="M650 390 L622 365 L618 390 Z" fill="#228B22"/>
  </svg>`,
};

const arielDisney: ColoringPage = {
  id: 'ariel-disney',
  name: 'Ariel',
  category: 'Princess',
  svgData: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 900"><rect width="900" height="900" fill="white"/>
    <path d="M0 700 Q225 665 450 680 Q675 695 900 670 L900 900 L0 900 Z" fill="white" stroke="#111" stroke-width="4"/>
    <path d="M390 798 C358 828 318 855 295 882 C278 902 302 915 325 898 C352 876 382 848 408 820" fill="white" stroke="#111" stroke-width="4.5"/>
    <path d="M510 798 C542 828 582 855 605 882 C622 902 598 915 575 898 C548 876 518 848 492 820" fill="white" stroke="#111" stroke-width="4.5"/>
    <path d="M375 680 Q450 695 525 680 Q548 728 540 785 Q500 802 450 802 Q400 802 360 785 Q352 728 375 680Z" fill="white" stroke="#111" stroke-width="4.5"/>
    <path d="M385 698 Q415 690 450 698 Q485 690 515 698" fill="none" stroke="#111" stroke-width="2"/>
    <path d="M372 718 Q410 710 450 718 Q490 710 528 718" fill="none" stroke="#111" stroke-width="2"/>
    <path d="M368 740 Q408 732 450 740 Q492 732 532 740" fill="none" stroke="#111" stroke-width="2"/>
    <path d="M368 762 Q408 754 450 762 Q492 754 532 762" fill="none" stroke="#111" stroke-width="2"/>
    <path d="M355 605 Q368 628 372 668 L528 668 Q532 628 545 605 Q505 622 450 622 Q395 622 355 605Z" fill="white" stroke="#111" stroke-width="4"/>
    <path d="M338 468 C325 508 325 558 355 605 Q395 625 450 627 Q505 625 545 605 C575 558 575 508 562 468 L540 428 Q500 448 450 450 Q400 448 360 428 Z" fill="white" stroke="#111" stroke-width="5"/>
    <ellipse cx="415" cy="535" rx="38" ry="30" fill="white" stroke="#111" stroke-width="3.5"/>
    <path d="M378 535 Q415 520 452 535" fill="none" stroke="#111" stroke-width="2.5"/>
    <ellipse cx="485" cy="535" rx="38" ry="30" fill="white" stroke="#111" stroke-width="3.5"/>
    <path d="M448 535 Q485 520 522 535" fill="none" stroke="#111" stroke-width="2.5"/>
    <rect x="425" y="408" width="50" height="62" rx="10" fill="white" stroke="#111" stroke-width="4"/>
    <ellipse cx="450" cy="345" rx="88" ry="96" fill="white" stroke="#111" stroke-width="5"/>
    <ellipse cx="416" cy="332" rx="17" ry="20" fill="white" stroke="#111" stroke-width="3.5"/>
    <ellipse cx="484" cy="332" rx="17" ry="20" fill="white" stroke="#111" stroke-width="3.5"/>
    <circle cx="418" cy="334" r="10" fill="#111"/>
    <circle cx="486" cy="334" r="10" fill="#111"/>
    <circle cx="421" cy="330" r="3" fill="white"/>
    <circle cx="489" cy="330" r="3" fill="white"/>
    <path d="M404 314 L400 303 M412 311 L409 299 M420 310 L420 298" fill="none" stroke="#111" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M468 311 L468 298 M476 313 L479 301 M484 315 L489 304" fill="none" stroke="#111" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M440 360 Q450 370 460 360" fill="none" stroke="#111" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M430 380 Q450 395 470 380" fill="none" stroke="#111" stroke-width="3" stroke-linecap="round"/>
    <path d="M368 272 C332 252 295 258 268 288 C245 315 262 352 290 348 C265 372 258 408 282 422" fill="white" stroke="#111" stroke-width="4.5"/>
    <path d="M532 272 C568 252 605 258 632 288 C655 315 638 352 610 348" fill="white" stroke="#111" stroke-width="4.5"/>
    <path d="M368 260 C390 225 418 210 450 208 C482 210 510 225 532 260" fill="white" stroke="#111" stroke-width="4.5"/>
    <path d="M372 268 C358 242 348 215 342 192" fill="none" stroke="#111" stroke-width="3" stroke-linecap="round"/>
    <path d="M408 220 C402 198 400 175 405 155" fill="none" stroke="#111" stroke-width="3" stroke-linecap="round"/>
    <path d="M450 210 C450 188 452 165 460 148" fill="none" stroke="#111" stroke-width="3" stroke-linecap="round"/>
    <path d="M342 468 C320 490 305 518 312 545 C320 560 342 555 352 535" fill="white" stroke="#111" stroke-width="4"/>
    <path d="M558 468 C580 490 595 518 588 545 C580 560 558 555 548 535" fill="white" stroke="#111" stroke-width="4"/>
    <path d="M285 465 L260 420 M272 490 L242 462 M305 448 L290 400" fill="none" stroke="#111" stroke-width="3" stroke-linecap="round"/>
    <path d="M618 468 L645 422 M628 492 L658 462 M598 450 L612 402" fill="none" stroke="#111" stroke-width="3" stroke-linecap="round"/>
  </svg>`,
  colorSvgData: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 900">
    <path d="M0 700 Q225 665 450 680 Q675 695 900 670 L900 900 L0 900 Z" fill="#C2956B"/>
    <path d="M390 798 C358 828 318 855 295 882 C278 902 302 915 325 898 C352 876 382 848 408 820" fill="#00CED1"/>
    <path d="M510 798 C542 828 582 855 605 882 C622 902 598 915 575 898 C548 876 518 848 492 820" fill="#00CED1"/>
    <path d="M375 680 Q450 695 525 680 Q548 728 540 785 Q500 802 450 802 Q400 802 360 785 Q352 728 375 680Z" fill="#00CED1"/>
    <path d="M355 605 Q368 628 372 668 L528 668 Q532 628 545 605 Q505 622 450 622 Q395 622 355 605Z" fill="#00A896"/>
    <path d="M338 468 C325 508 325 558 355 605 Q395 625 450 627 Q505 625 545 605 C575 558 575 508 562 468 L540 428 Q500 448 450 450 Q400 448 360 428 Z" fill="#FDBCB4"/>
    <ellipse cx="415" cy="535" rx="38" ry="30" fill="#FF69B4"/>
    <ellipse cx="485" cy="535" rx="38" ry="30" fill="#FF69B4"/>
    <rect x="425" y="408" width="50" height="62" rx="10" fill="#FDBCB4"/>
    <ellipse cx="450" cy="345" rx="88" ry="96" fill="#FDBCB4"/>
    <path d="M368 272 C332 252 295 258 268 288 C245 315 262 352 290 348 C265 372 258 408 282 422" fill="#FF2222"/>
    <path d="M532 272 C568 252 605 258 632 288 C655 315 638 352 610 348" fill="#FF2222"/>
    <path d="M368 260 C390 225 418 210 450 208 C482 210 510 225 532 260" fill="#FF2222"/>
    <path d="M342 468 C320 490 305 518 312 545 C320 560 342 555 352 535" fill="#FDBCB4"/>
    <path d="M558 468 C580 490 595 518 588 545 C580 560 558 555 548 535" fill="#FDBCB4"/>
  </svg>`,
};

const simba: ColoringPage = {
  id: 'simba',
  name: 'Simba',
  category: 'Animals',
  svgData: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 900"><rect width="900" height="900" fill="white"/>
    <path d="M0 820 Q450 785 900 820 L900 900 L0 900 Z" fill="white" stroke="#111" stroke-width="4"/>
    <path d="M250 780 L225 848 L202 848" fill="none" stroke="#111" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M202 848 L185 868 M202 848 L215 868 M202 848 L232 865" fill="none" stroke="#111" stroke-width="3.5" stroke-linecap="round"/>
    <path d="M355 795 L348 862 L322 862" fill="none" stroke="#111" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M322 862 L306 882 M322 862 L335 882 M322 862 L350 879" fill="none" stroke="#111" stroke-width="3.5" stroke-linecap="round"/>
    <path d="M545 795 L552 862 L578 862" fill="none" stroke="#111" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M578 862 L564 882 M578 862 L591 882 M578 862 L605 879" fill="none" stroke="#111" stroke-width="3.5" stroke-linecap="round"/>
    <path d="M650 780 L675 848 L698 848" fill="none" stroke="#111" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M698 848 L682 868 M698 848 L711 868 M698 848 L728 865" fill="none" stroke="#111" stroke-width="3.5" stroke-linecap="round"/>
    <path d="M650 625 C715 592 772 568 808 548 C835 532 835 512 815 518 C792 525 758 548 722 568 C688 588 662 608 652 622Z" fill="white" stroke="#111" stroke-width="5"/>
    <ellipse cx="450" cy="618" rx="225" ry="168" fill="white" stroke="#111" stroke-width="5"/>
    <path d="M318 465 C305 418 310 372 335 338 L450 322 L565 338 C590 372 595 418 582 465" fill="white" stroke="#111" stroke-width="5"/>
    <ellipse cx="450" cy="288" rx="105" ry="92" fill="white" stroke="#111" stroke-width="5"/>
    <path d="M352 230 L322 175 L382 215 Z" fill="white" stroke="#111" stroke-width="4"/>
    <path d="M548 230 L578 175 L518 215 Z" fill="white" stroke="#111" stroke-width="4"/>
    <path d="M358 228 L335 185 L378 212 Z" fill="white" stroke="#111" stroke-width="2.5"/>
    <path d="M542 228 L565 185 L522 212 Z" fill="white" stroke="#111" stroke-width="2.5"/>
    <ellipse cx="415" cy="278" rx="22" ry="24" fill="white" stroke="#111" stroke-width="4"/>
    <ellipse cx="485" cy="278" rx="22" ry="24" fill="white" stroke="#111" stroke-width="4"/>
    <circle cx="417" cy="280" r="12" fill="#111"/>
    <circle cx="487" cy="280" r="12" fill="#111"/>
    <circle cx="420" cy="276" r="4" fill="white"/>
    <circle cx="490" cy="276" r="4" fill="white"/>
    <ellipse cx="450" cy="315" rx="52" ry="38" fill="white" stroke="#111" stroke-width="4"/>
    <ellipse cx="450" cy="322" rx="22" ry="12" fill="#111"/>
    <path d="M415 335 Q450 350 485 335" fill="none" stroke="#111" stroke-width="3.5" stroke-linecap="round"/>
    <path d="M415 350 L395 345 M415 357 L390 355 M415 364 L395 368" fill="none" stroke="#111" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M485 350 L505 345 M485 357 L510 355 M485 364 L505 368" fill="none" stroke="#111" stroke-width="2.5" stroke-linecap="round"/>
    <ellipse cx="450" cy="635" rx="88" ry="62" fill="white" stroke="#111" stroke-width="3" stroke-dasharray="0"/>
    <path d="M338 465 C315 488 305 515 312 540 C320 558 342 555 352 535" fill="white" stroke="#111" stroke-width="4"/>
    <path d="M562 465 C585 488 595 515 588 540 C580 558 558 555 548 535" fill="white" stroke="#111" stroke-width="4"/>
  </svg>`,
  colorSvgData: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 900">
    <path d="M0 820 Q450 785 900 820 L900 900 L0 900 Z" fill="#228B22"/>
    <path d="M650 625 C715 592 772 568 808 548 C835 532 835 512 815 518 C792 525 758 548 722 568 C688 588 662 608 652 622Z" fill="#CD853F"/>
    <ellipse cx="450" cy="618" rx="225" ry="168" fill="#F4A460"/>
    <path d="M318 465 C305 418 310 372 335 338 L450 322 L565 338 C590 372 595 418 582 465" fill="#F4A460"/>
    <ellipse cx="450" cy="288" rx="105" ry="92" fill="#F4A460"/>
    <path d="M352 230 L322 175 L382 215 Z" fill="#F4A460"/>
    <path d="M548 230 L578 175 L518 215 Z" fill="#F4A460"/>
    <path d="M358 228 L335 185 L378 212 Z" fill="#FF69B4"/>
    <path d="M542 228 L565 185 L522 212 Z" fill="#FF69B4"/>
    <ellipse cx="450" cy="315" rx="52" ry="38" fill="#FFD0A0"/>
    <ellipse cx="450" cy="635" rx="88" ry="62" fill="#FFD0A0"/>
    <path d="M338 465 C315 488 305 515 312 540 C320 558 342 555 352 535" fill="#F4A460"/>
    <path d="M562 465 C585 488 595 515 588 540 C580 558 558 555 548 535" fill="#F4A460"/>
  </svg>`,
};

const elsa: ColoringPage = {
  id: 'elsa',
  name: 'Elsa',
  category: 'Princess',
  svgData: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 900"><rect width="900" height="900" fill="white"/>
    <path d="M125 220 L135 198 L145 220 L167 227 L145 234 L135 256 L125 234 L103 227 Z" fill="white" stroke="#111" stroke-width="2"/>
    <path d="M758 155 L766 135 L774 155 L794 162 L774 169 L766 189 L758 169 L738 162 Z" fill="white" stroke="#111" stroke-width="2"/>
    <path d="M218 388 L225 370 L232 388 L250 394 L232 400 L225 418 L218 400 L200 394 Z" fill="white" stroke="#111" stroke-width="1.5"/>
    <path d="M665 285 L672 268 L679 285 L697 292 L679 299 L672 316 L665 299 L647 292 Z" fill="white" stroke="#111" stroke-width="1.5"/>
    <ellipse cx="450" cy="195" rx="78" ry="85" fill="white" stroke="#111" stroke-width="5"/>
    <path d="M498 128 C515 108 520 85 512 65 C545 85 558 112 548 140 C548 128 530 112 498 128Z" fill="white" stroke="#111" stroke-width="4"/>
    <path d="M498 128 C510 110 505 88 495 72 C475 55 455 60 450 75 C445 60 425 55 405 72 C395 88 390 110 402 128" fill="white" stroke="#111" stroke-width="4"/>
    <path d="M402 128 C352 115 335 88 352 65 C340 85 358 112 402 128Z" fill="white" stroke="#111" stroke-width="4"/>
    <ellipse cx="422" cy="192" rx="15" ry="18" fill="white" stroke="#111" stroke-width="3.5"/>
    <ellipse cx="478" cy="192" rx="15" ry="18" fill="white" stroke="#111" stroke-width="3.5"/>
    <circle cx="424" cy="194" r="8" fill="#111"/>
    <circle cx="480" cy="194" r="8" fill="#111"/>
    <circle cx="427" cy="190" r="3" fill="white"/>
    <circle cx="483" cy="190" r="3" fill="white"/>
    <path d="M434 220 Q450 232 466 220" fill="none" stroke="#111" stroke-width="3" stroke-linecap="round"/>
    <path d="M444 208 Q450 214 456 208" fill="none" stroke="#111" stroke-width="2" stroke-linecap="round"/>
    <path d="M415 215 Q412 212 410 208" fill="none" stroke="#111" stroke-width="1.5" stroke-dasharray="2,2"/>
    <path d="M485 215 Q488 212 490 208" fill="none" stroke="#111" stroke-width="1.5" stroke-dasharray="2,2"/>
    <path d="M498 155 C522 162 530 180 522 198" fill="none" stroke="#111" stroke-width="3"/>
    <path d="M402 155 C378 162 370 180 378 198" fill="none" stroke="#111" stroke-width="3"/>
    <path d="M498 158 C530 165 545 185 540 215 C545 212 550 218 548 228 C538 232 532 228 532 220" fill="white" stroke="#111" stroke-width="3.5"/>
    <path d="M402 158 C370 165 355 185 360 215 C355 212 350 218 352 228 C362 232 368 228 368 220" fill="white" stroke="#111" stroke-width="3.5"/>
    <path d="M390 278 C385 290 390 302 402 308 L498 308 C510 302 515 290 510 278" fill="white" stroke="#111" stroke-width="4"/>
    <path d="M402 308 L365 850 L535 850 L498 308" fill="white" stroke="#111" stroke-width="5"/>
    <path d="M402 308 L315 495 L382 505 L402 460 L402 308" fill="white" stroke="#111" stroke-width="4"/>
    <path d="M498 308 L585 495 L518 505 L498 460 L498 308" fill="white" stroke="#111" stroke-width="4"/>
    <path d="M385 480 Q450 465 515 480" fill="none" stroke="#111" stroke-width="2.5" stroke-dasharray="6,4"/>
    <path d="M375 560 Q450 545 525 560" fill="none" stroke="#111" stroke-width="2.5" stroke-dasharray="6,4"/>
    <ellipse cx="315" cy="855" rx="45" ry="20" fill="white" stroke="#111" stroke-width="3.5"/>
    <ellipse cx="585" cy="855" rx="45" ry="20" fill="white" stroke="#111" stroke-width="3.5"/>
  </svg>`,
  colorSvgData: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 900">
    <ellipse cx="450" cy="195" rx="78" ry="85" fill="#FDBCB4"/>
    <path d="M498 128 C515 108 520 85 512 65 C545 85 558 112 548 140 C548 128 530 112 498 128Z" fill="#B0E0E6"/>
    <path d="M498 128 C510 110 505 88 495 72 C475 55 455 60 450 75 C445 60 425 55 405 72 C395 88 390 110 402 128" fill="#B0E0E6"/>
    <path d="M402 128 C352 115 335 88 352 65 C340 85 358 112 402 128Z" fill="#B0E0E6"/>
    <path d="M498 158 C530 165 545 185 540 215 C545 212 550 218 548 228 C538 232 532 228 532 220" fill="#B0E0E6"/>
    <path d="M402 158 C370 165 355 185 360 215 C355 212 350 218 352 228 C362 232 368 228 368 220" fill="#B0E0E6"/>
    <path d="M390 278 C385 290 390 302 402 308 L498 308 C510 302 515 290 510 278" fill="#FDBCB4"/>
    <path d="M402 308 L365 850 L535 850 L498 308" fill="#87CEEB"/>
    <path d="M402 308 L315 495 L382 505 L402 460 L402 308" fill="#ADD8E6"/>
    <path d="M498 308 L585 495 L518 505 L498 460 L498 308" fill="#ADD8E6"/>
    <ellipse cx="315" cy="855" rx="45" ry="20" fill="#FDBCB4"/>
    <ellipse cx="585" cy="855" rx="45" ry="20" fill="#FDBCB4"/>
  </svg>`,
};

const moana: ColoringPage = {
  id: 'moana',
  name: 'Moana',
  category: 'Adventure',
  svgData: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 900"><rect width="900" height="900" fill="white"/>
    <path d="M0 780 Q225 745 450 758 Q675 772 900 745 L900 900 L0 900 Z" fill="white" stroke="#111" stroke-width="4"/>
    <path d="M338 758 Q388 740 450 748 Q512 740 562 758 Q568 790 562 820 L338 820 Q332 790 338 758Z" fill="white" stroke="#111" stroke-width="4.5"/>
    <path d="M342 762 Q380 752 450 758 Q520 752 558 762" fill="none" stroke="#111" stroke-width="2"/>
    <path d="M338 785 Q380 778 450 782 Q520 778 562 785" fill="none" stroke="#111" stroke-width="2"/>
    <path d="M338 808 Q388 802 450 804 Q512 802 562 808" fill="none" stroke="#111" stroke-width="2"/>
    <path d="M338 820 L290 850 L338 850Z" fill="white" stroke="#111" stroke-width="4"/>
    <path d="M562 820 L610 850 L562 850Z" fill="white" stroke="#111" stroke-width="4"/>
    <path d="M355 605 Q362 628 362 668 L538 668 Q538 628 545 605 Q508 625 450 625 Q392 625 355 605Z" fill="white" stroke="#111" stroke-width="4"/>
    <path d="M338 468 C325 510 325 558 355 605 Q395 630 450 632 Q505 630 545 605 C575 558 575 510 562 468 L542 428 Q505 448 450 450 Q395 448 358 428 Z" fill="white" stroke="#111" stroke-width="5"/>
    <path d="M355 490 Q380 480 395 490 Q388 510 365 515 Z" fill="white" stroke="#111" stroke-width="3"/>
    <path d="M545 490 Q520 480 505 490 Q512 510 535 515 Z" fill="white" stroke="#111" stroke-width="3"/>
    <rect x="425" y="405" width="50" height="65" rx="10" fill="white" stroke="#111" stroke-width="4"/>
    <ellipse cx="450" cy="338" rx="90" ry="98" fill="white" stroke="#111" stroke-width="5"/>
    <path d="M368 258 C332 240 295 245 268 275 C245 302 262 338 290 335" fill="white" stroke="#111" stroke-width="5"/>
    <path d="M532 258 C568 240 605 245 632 275 C655 302 638 338 610 335" fill="white" stroke="#111" stroke-width="5"/>
    <path d="M368 248 C390 215 418 200 450 198 C482 200 510 215 532 248" fill="white" stroke="#111" stroke-width="5"/>
    <path d="M368 252 C355 230 348 205 350 182" fill="none" stroke="#111" stroke-width="3" stroke-linecap="round"/>
    <path d="M405 212 C398 190 395 168 400 148" fill="none" stroke="#111" stroke-width="3" stroke-linecap="round"/>
    <path d="M450 200 C450 178 452 155 460 138" fill="none" stroke="#111" stroke-width="3" stroke-linecap="round"/>
    <path d="M495 212 C502 190 505 168 500 148" fill="none" stroke="#111" stroke-width="3" stroke-linecap="round"/>
    <path d="M532 252 C545 230 552 205 550 182" fill="none" stroke="#111" stroke-width="3" stroke-linecap="round"/>
    <ellipse cx="418" cy="325" rx="17" ry="20" fill="white" stroke="#111" stroke-width="3.5"/>
    <ellipse cx="482" cy="325" rx="17" ry="20" fill="white" stroke="#111" stroke-width="3.5"/>
    <circle cx="420" cy="327" r="10" fill="#111"/>
    <circle cx="484" cy="327" r="10" fill="#111"/>
    <circle cx="423" cy="323" r="3" fill="white"/>
    <circle cx="487" cy="323" r="3" fill="white"/>
    <path d="M436 365 Q450 376 464 365" fill="none" stroke="#111" stroke-width="3.5" stroke-linecap="round"/>
    <path d="M444 352 Q450 358 456 352" fill="none" stroke="#111" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M412 350 Q408 345 406 340" fill="none" stroke="#111" stroke-width="1.5" stroke-dasharray="2,2"/>
    <path d="M488 350 Q492 345 494 340" fill="none" stroke="#111" stroke-width="1.5" stroke-dasharray="2,2"/>
    <path d="M355 468 C332 490 318 518 325 548 C332 568 352 562 362 542" fill="white" stroke="#111" stroke-width="4"/>
    <path d="M545 468 C568 490 582 518 575 548 C568 568 548 562 538 542" fill="white" stroke="#111" stroke-width="4"/>
    <path d="M692 450 L700 350 C700 350 740 320 762 350 L762 440 L720 440Z" fill="white" stroke="#111" stroke-width="4"/>
    <line x1="700" y1="440" x2="762" y2="440" stroke="#111" stroke-width="4"/>
    <path d="M762 395 L842 365 L832 420 L762 418Z" fill="white" stroke="#111" stroke-width="3.5"/>
    <line x1="692" y1="450" x2="692" y2="680" stroke="#111" stroke-width="5" stroke-linecap="round"/>
    <path d="M692 500 C660 515 648 540 652 568 C660 592 682 598 692 580" fill="none" stroke="#111" stroke-width="3"/>
  </svg>`,
  colorSvgData: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 900">
    <path d="M0 780 Q225 745 450 758 Q675 772 900 745 L900 900 L0 900 Z" fill="#1E90FF"/>
    <path d="M338 758 Q388 740 450 748 Q512 740 562 758 Q568 790 562 820 L338 820 Q332 790 338 758Z" fill="#228B22"/>
    <path d="M338 820 L290 850 L338 850Z" fill="#228B22"/>
    <path d="M562 820 L610 850 L562 850Z" fill="#228B22"/>
    <path d="M355 605 Q362 628 362 668 L538 668 Q538 628 545 605 Q508 625 450 625 Q392 625 355 605Z" fill="#8B4513"/>
    <path d="M338 468 C325 510 325 558 355 605 Q395 630 450 632 Q505 630 545 605 C575 558 575 510 562 468 L542 428 Q505 448 450 450 Q395 448 358 428 Z" fill="#C68642"/>
    <path d="M355 490 Q380 480 395 490 Q388 510 365 515 Z" fill="#CC3300"/>
    <path d="M545 490 Q520 480 505 490 Q512 510 535 515 Z" fill="#CC3300"/>
    <rect x="425" y="405" width="50" height="65" rx="10" fill="#C68642"/>
    <ellipse cx="450" cy="338" rx="90" ry="98" fill="#C68642"/>
    <path d="M368 258 C332 240 295 245 268 275 C245 302 262 338 290 335" fill="#1C1C1C"/>
    <path d="M532 258 C568 240 605 245 632 275 C655 302 638 338 610 335" fill="#1C1C1C"/>
    <path d="M368 248 C390 215 418 200 450 198 C482 200 510 215 532 248" fill="#1C1C1C"/>
    <path d="M355 468 C332 490 318 518 325 548 C332 568 352 562 362 542" fill="#C68642"/>
    <path d="M545 468 C568 490 582 518 575 548 C568 568 548 562 538 542" fill="#C68642"/>
    <path d="M692 450 L700 350 C700 350 740 320 762 350 L762 440 L720 440Z" fill="#8B4513"/>
    <path d="M762 395 L842 365 L832 420 L762 418Z" fill="#F5DEB3"/>
  </svg>`,
};

const woody: ColoringPage = {
  id: 'woody',
  name: 'Woody',
  category: 'Adventure',
  svgData: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 900"><rect width="900" height="900" fill="white"/>
    <ellipse cx="450" cy="195" rx="78" ry="85" fill="white" stroke="#111" stroke-width="5"/>
    <path d="M372 148 C368 112 380 80 410 60 L450 70 L490 60 C520 80 532 112 528 148" fill="white" stroke="#111" stroke-width="4.5"/>
    <path d="M352 148 C332 158 318 178 325 200 C332 220 360 228 390 218" fill="white" stroke="#111" stroke-width="4"/>
    <path d="M548 148 C568 158 582 178 575 200 C568 220 540 228 510 218" fill="white" stroke="#111" stroke-width="4"/>
    <path d="M372 155 C365 170 362 185 368 198" fill="none" stroke="#111" stroke-width="3"/>
    <path d="M528 155 C535 170 538 185 532 198" fill="none" stroke="#111" stroke-width="3"/>
    <ellipse cx="422" cy="192" rx="16" ry="18" fill="white" stroke="#111" stroke-width="3.5"/>
    <ellipse cx="478" cy="192" rx="16" ry="18" fill="white" stroke="#111" stroke-width="3.5"/>
    <circle cx="424" cy="194" r="9" fill="#111"/>
    <circle cx="480" cy="194" r="9" fill="#111"/>
    <circle cx="427" cy="190" r="3" fill="white"/>
    <circle cx="483" cy="190" r="3" fill="white"/>
    <path d="M412 155 L408 142 M422 150 L419 137" fill="none" stroke="#111" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M478 150 L478 137 M488 152 L491 139" fill="none" stroke="#111" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M434 220 Q450 232 466 220" fill="none" stroke="#111" stroke-width="3" stroke-linecap="round"/>
    <path d="M444 208 Q450 214 456 208" fill="none" stroke="#111" stroke-width="2" stroke-linecap="round"/>
    <path d="M415 215 Q412 212 410 208" fill="none" stroke="#111" stroke-width="1.5" stroke-dasharray="2,2"/>
    <path d="M485 215 Q488 212 490 208" fill="none" stroke="#111" stroke-width="1.5" stroke-dasharray="2,2"/>
    <path d="M390 278 C385 292 390 305 405 312 L495 312 C510 305 515 292 510 278" fill="white" stroke="#111" stroke-width="4"/>
    <rect x="392" y="312" width="116" height="285" fill="white" stroke="#111" stroke-width="5"/>
    <path d="M405 312 L405 598 M450 312 L450 598 M495 312 L495 598" fill="none" stroke="#111" stroke-width="1.5"/>
    <path d="M392 380 L508 380 M392 448 L508 448 M392 516 L508 516" fill="none" stroke="#111" stroke-width="2.5"/>
    <rect x="348" y="597" width="100" height="285" rx="8" fill="white" stroke="#111" stroke-width="4.5"/>
    <rect x="452" y="597" width="100" height="285" rx="8" fill="white" stroke="#111" stroke-width="4.5"/>
    <path d="M348 680 L448 680 M348 762 L448 762 M452 680 L552 680 M452 762 L552 762" fill="none" stroke="#111" stroke-width="2.5"/>
    <ellipse cx="380" cy="878" rx="45" ry="18" fill="white" stroke="#111" stroke-width="4"/>
    <ellipse cx="520" cy="878" rx="45" ry="18" fill="white" stroke="#111" stroke-width="4"/>
    <path d="M390 278 L332 318 L342 365 L392 345 L392 312" fill="white" stroke="#111" stroke-width="4"/>
    <path d="M510 278 L568 318 L558 365 L508 345 L508 312" fill="white" stroke="#111" stroke-width="4"/>
    <path d="M342 365 L310 405 L312 455 L342 435" fill="white" stroke="#111" stroke-width="4"/>
    <path d="M558 365 L590 405 L588 455 L558 435" fill="white" stroke="#111" stroke-width="4"/>
    <path d="M310 455 L298 495 L315 505 L332 468" fill="white" stroke="#111" stroke-width="3.5"/>
    <path d="M590 455 L602 495 L585 505 L568 468" fill="white" stroke="#111" stroke-width="3.5"/>
  </svg>`,
  colorSvgData: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 900">
    <ellipse cx="450" cy="195" rx="78" ry="85" fill="#FDBCB4"/>
    <path d="M372 148 C368 112 380 80 410 60 L450 70 L490 60 C520 80 532 112 528 148" fill="#8B4513"/>
    <path d="M352 148 C332 158 318 178 325 200 C332 220 360 228 390 218" fill="#8B4513"/>
    <path d="M548 148 C568 158 582 178 575 200 C568 220 540 228 510 218" fill="#8B4513"/>
    <path d="M390 278 C385 292 390 305 405 312 L495 312 C510 305 515 292 510 278" fill="#FDBCB4"/>
    <rect x="392" y="312" width="116" height="285" fill="#FFD700"/>
    <rect x="348" y="597" width="100" height="285" rx="8" fill="#0000AA"/>
    <rect x="452" y="597" width="100" height="285" rx="8" fill="#0000AA"/>
    <ellipse cx="380" cy="878" rx="45" ry="18" fill="#8B4513"/>
    <ellipse cx="520" cy="878" rx="45" ry="18" fill="#8B4513"/>
    <path d="M390 278 L332 318 L342 365 L392 345 L392 312" fill="#FDBCB4"/>
    <path d="M510 278 L568 318 L558 365 L508 345 L508 312" fill="#FDBCB4"/>
    <path d="M342 365 L310 405 L312 455 L342 435" fill="#FDBCB4"/>
    <path d="M558 365 L590 405 L588 455 L558 435" fill="#FDBCB4"/>
    <path d="M310 455 L298 495 L315 505 L332 468" fill="#FDBCB4"/>
    <path d="M590 455 L602 495 L585 505 L568 468" fill="#FDBCB4"/>
  </svg>`,
};

const buzz: ColoringPage = {
  id: 'buzz',
  name: 'Buzz Lightyear',
  category: 'Adventure',
  svgData: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 900"><rect width="900" height="900" fill="white"/>
    <ellipse cx="450" cy="195" rx="80" ry="85" fill="white" stroke="#111" stroke-width="5"/>
    <path d="M390 148 L390 115 L410 108 L430 115 L450 105 L470 115 L490 108 L510 115 L510 148" fill="white" stroke="#111" stroke-width="4"/>
    <ellipse cx="422" cy="192" rx="16" ry="19" fill="white" stroke="#111" stroke-width="3.5"/>
    <ellipse cx="478" cy="192" rx="16" ry="19" fill="white" stroke="#111" stroke-width="3.5"/>
    <circle cx="424" cy="194" r="9" fill="#111"/>
    <circle cx="480" cy="194" r="9" fill="#111"/>
    <circle cx="427" cy="190" r="3" fill="white"/>
    <circle cx="483" cy="190" r="3" fill="white"/>
    <path d="M434 220 Q450 232 466 220" fill="none" stroke="#111" stroke-width="3" stroke-linecap="round"/>
    <path d="M408 155 C405 148 410 142 420 140" fill="none" stroke="#111" stroke-width="2.5"/>
    <path d="M492 155 C495 148 490 142 480 140" fill="none" stroke="#111" stroke-width="2.5"/>
    <path d="M390 278 L390 310 L510 310 L510 278" fill="white" stroke="#111" stroke-width="4"/>
    <path d="M390 278 C388 290 392 302 402 308 L498 308 C508 302 512 290 510 278" fill="white" stroke="#111" stroke-width="4"/>
    <ellipse cx="450" cy="345" rx="92" ry="62" fill="white" stroke="#111" stroke-width="5"/>
    <ellipse cx="450" cy="345" rx="58" ry="38" fill="white" stroke="#111" stroke-width="3.5"/>
    <circle cx="420" cy="338" r="8" fill="white" stroke="#111" stroke-width="3"/>
    <circle cx="450" cy="332" r="8" fill="white" stroke="#111" stroke-width="3"/>
    <circle cx="480" cy="338" r="8" fill="white" stroke="#111" stroke-width="3"/>
    <rect x="390" y="405" width="120" height="295" rx="10" fill="white" stroke="#111" stroke-width="5"/>
    <path d="M390 450 L510 450 M390 495 L510 495 M390 540 L510 540 M390 585 L510 585 M390 630 L510 630" fill="none" stroke="#111" stroke-width="2"/>
    <rect x="348" y="698" width="102" height="195" rx="8" fill="white" stroke="#111" stroke-width="4.5"/>
    <rect x="450" y="698" width="102" height="195" rx="8" fill="white" stroke="#111" stroke-width="4.5"/>
    <ellipse cx="390" cy="890" rx="52" ry="20" fill="white" stroke="#111" stroke-width="4"/>
    <ellipse cx="510" cy="890" rx="52" ry="20" fill="white" stroke="#111" stroke-width="4"/>
    <path d="M390 405 L305 468 L318 548 L390 522 L390 462" fill="white" stroke="#111" stroke-width="4.5"/>
    <path d="M510 405 L595 468 L582 548 L510 522 L510 462" fill="white" stroke="#111" stroke-width="4.5"/>
    <path d="M318 548 L298 628 L312 638 L332 568" fill="white" stroke="#111" stroke-width="4"/>
    <path d="M582 548 L602 628 L588 638 L568 568" fill="white" stroke="#111" stroke-width="4"/>
    <path d="M220 435 C175 408 160 375 175 348 C188 322 215 320 232 335 C245 322 272 318 282 342 C292 365 278 400 248 418" fill="white" stroke="#111" stroke-width="4"/>
    <path d="M165 350 C148 328 155 305 175 300 C192 296 208 310 205 330" fill="white" stroke="#111" stroke-width="3.5"/>
    <path d="M680 435 C725 408 740 375 725 348 C712 322 685 320 668 335 C655 322 628 318 618 342 C608 365 622 400 652 418" fill="white" stroke="#111" stroke-width="4"/>
    <path d="M735 350 C752 328 745 305 725 300 C708 296 692 310 695 330" fill="white" stroke="#111" stroke-width="3.5"/>
  </svg>`,
  colorSvgData: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 900">
    <ellipse cx="450" cy="195" rx="80" ry="85" fill="#FDBCB4"/>
    <path d="M390 148 L390 115 L410 108 L430 115 L450 105 L470 115 L490 108 L510 115 L510 148" fill="#228B22"/>
    <path d="M390 278 L390 310 L510 310 L510 278" fill="#FFFFFF"/>
    <path d="M390 278 C388 290 392 302 402 308 L498 308 C508 302 512 290 510 278" fill="#FFFFFF"/>
    <ellipse cx="450" cy="345" rx="92" ry="62" fill="#228B22"/>
    <ellipse cx="450" cy="345" rx="58" ry="38" fill="#87CEEB"/>
    <rect x="390" y="405" width="120" height="295" rx="10" fill="#FFFFFF"/>
    <rect x="348" y="698" width="102" height="195" rx="8" fill="#7B2ABB"/>
    <rect x="450" y="698" width="102" height="195" rx="8" fill="#7B2ABB"/>
    <ellipse cx="390" cy="890" rx="52" ry="20" fill="#FFFFFF"/>
    <ellipse cx="510" cy="890" rx="52" ry="20" fill="#FFFFFF"/>
    <path d="M390 405 L305 468 L318 548 L390 522 L390 462" fill="#7B2ABB"/>
    <path d="M510 405 L595 468 L582 548 L510 522 L510 462" fill="#7B2ABB"/>
    <path d="M318 548 L298 628 L312 638 L332 568" fill="#7B2ABB"/>
    <path d="M582 548 L602 628 L588 638 L568 568" fill="#7B2ABB"/>
    <path d="M220 435 C175 408 160 375 175 348 C188 322 215 320 232 335 C245 322 272 318 282 342 C292 365 278 400 248 418" fill="#C8C8C8"/>
    <path d="M680 435 C725 408 740 375 725 348 C712 322 685 320 668 335 C655 322 628 318 618 342 C608 365 622 400 652 418" fill="#C8C8C8"/>
  </svg>`,
};

const belle: ColoringPage = {
  id: 'belle',
  name: 'Belle',
  category: 'Princess',
  svgData: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 900"><rect width="900" height="900" fill="white"/>
    <ellipse cx="450" cy="195" rx="78" ry="85" fill="white" stroke="#111" stroke-width="5"/>
    <path d="M375 158 C358 125 362 90 388 68 L450 78 L512 68 C538 90 542 125 525 158" fill="white" stroke="#111" stroke-width="4.5"/>
    <path d="M530 160 C548 168 558 185 552 205" fill="none" stroke="#111" stroke-width="3"/>
    <path d="M370 160 C352 168 342 185 348 205" fill="none" stroke="#111" stroke-width="3"/>
    <ellipse cx="422" cy="192" rx="16" ry="19" fill="white" stroke="#111" stroke-width="3.5"/>
    <ellipse cx="478" cy="192" rx="16" ry="19" fill="white" stroke="#111" stroke-width="3.5"/>
    <circle cx="424" cy="194" r="9" fill="#111"/>
    <circle cx="480" cy="194" r="9" fill="#111"/>
    <circle cx="427" cy="190" r="3" fill="white"/>
    <circle cx="483" cy="190" r="3" fill="white"/>
    <path d="M434 220 Q450 232 466 220" fill="none" stroke="#111" stroke-width="3" stroke-linecap="round"/>
    <path d="M444 208 Q450 214 456 208" fill="none" stroke="#111" stroke-width="2" stroke-linecap="round"/>
    <path d="M412 215 Q409 212 408 208" fill="none" stroke="#111" stroke-width="1.5" stroke-dasharray="2,2"/>
    <path d="M488 215 Q491 212 492 208" fill="none" stroke="#111" stroke-width="1.5" stroke-dasharray="2,2"/>
    <path d="M390 278 C385 290 390 305 405 312 L495 312 C510 305 515 290 510 278" fill="white" stroke="#111" stroke-width="4"/>
    <path d="M405 312 L335 850 L565 850 L495 312" fill="white" stroke="#111" stroke-width="5"/>
    <path d="M405 312 L318 492 L382 505 L405 460 L405 312" fill="white" stroke="#111" stroke-width="4"/>
    <path d="M495 312 L582 492 L518 505 L495 460 L495 312" fill="white" stroke="#111" stroke-width="4"/>
    <path d="M385 480 Q450 468 515 480" fill="none" stroke="#111" stroke-width="2.5"/>
    <path d="M372 540 Q450 525 528 540" fill="none" stroke="#111" stroke-width="2.5"/>
    <path d="M358 608 Q450 592 542 608" fill="none" stroke="#111" stroke-width="2.5"/>
    <path d="M348 680 Q450 662 552 680" fill="none" stroke="#111" stroke-width="2.5"/>
    <ellipse cx="315" cy="855" rx="45" ry="20" fill="white" stroke="#111" stroke-width="3.5"/>
    <ellipse cx="585" cy="855" rx="45" ry="20" fill="white" stroke="#111" stroke-width="3.5"/>
    <path d="M390 278 L332 320 L342 368 L390 345 L390 312" fill="white" stroke="#111" stroke-width="4"/>
    <path d="M510 278 L568 320 L558 368 L510 345 L510 312" fill="white" stroke="#111" stroke-width="4"/>
    <ellipse cx="680" cy="425" rx="45" ry="85" fill="white" stroke="#111" stroke-width="4.5"/>
    <path d="M668 348 Q680 338 692 348" fill="none" stroke="#111" stroke-width="3"/>
    <ellipse cx="680" cy="398" rx="22" ry="38" fill="white" stroke="#111" stroke-width="3"/>
    <path d="M668 342 L652 318 C648 308 655 298 665 302 L680 318 L695 302 C705 298 712 308 708 318 L692 342" fill="white" stroke="#111" stroke-width="3.5"/>
  </svg>`,
  colorSvgData: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 900">
    <ellipse cx="450" cy="195" rx="78" ry="85" fill="#FDBCB4"/>
    <path d="M375 158 C358 125 362 90 388 68 L450 78 L512 68 C538 90 542 125 525 158" fill="#8B4513"/>
    <path d="M390 278 C385 290 390 305 405 312 L495 312 C510 305 515 290 510 278" fill="#FDBCB4"/>
    <path d="M405 312 L335 850 L565 850 L495 312" fill="#FFD700"/>
    <path d="M405 312 L318 492 L382 505 L405 460 L405 312" fill="#C8A000"/>
    <path d="M495 312 L582 492 L518 505 L495 460 L495 312" fill="#C8A000"/>
    <ellipse cx="315" cy="855" rx="45" ry="20" fill="#FDBCB4"/>
    <ellipse cx="585" cy="855" rx="45" ry="20" fill="#FDBCB4"/>
    <path d="M390 278 L332 320 L342 368 L390 345 L390 312" fill="#FDBCB4"/>
    <path d="M510 278 L568 320 L558 368 L510 345 L510 312" fill="#FDBCB4"/>
    <ellipse cx="680" cy="425" rx="45" ry="85" fill="#228B22"/>
    <ellipse cx="680" cy="398" rx="22" ry="38" fill="#FF0000"/>
    <path d="M668 342 L652 318 C648 308 655 298 665 302 L680 318 L695 302 C705 298 712 308 708 318 L692 342" fill="#228B22"/>
  </svg>`,
};

const genie: ColoringPage = {
  id: 'genie',
  name: 'Genie',
  category: 'Fantasy',
  svgData: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 900"><rect width="900" height="900" fill="white"/>
    <path d="M450 740 C428 755 408 775 400 800 C392 825 410 835 428 820 C440 810 450 790 450 790 C450 790 460 810 472 820 C490 835 508 825 500 800 C492 775 472 755 450 740Z" fill="white" stroke="#111" stroke-width="4.5"/>
    <path d="M450 740 C415 720 385 695 358 668 C330 640 318 605 328 580 C338 555 365 548 390 560" fill="white" stroke="#111" stroke-width="5"/>
    <path d="M450 740 C485 720 515 695 542 668 C570 640 582 605 572 580 C562 555 535 548 510 560" fill="white" stroke="#111" stroke-width="5"/>
    <ellipse cx="450" cy="488" rx="142" ry="175" fill="white" stroke="#111" stroke-width="5"/>
    <path d="M318 408 C285 388 265 358 272 332 C280 308 305 302 325 315 C320 302 325 285 340 282 C358 278 372 295 368 315" fill="white" stroke="#111" stroke-width="4"/>
    <path d="M582 408 C615 388 635 358 628 332 C620 308 595 302 575 315 C580 302 575 285 560 282 C542 278 528 295 532 315" fill="white" stroke="#111" stroke-width="4"/>
    <ellipse cx="390" cy="420" rx="28" ry="30" fill="white" stroke="#111" stroke-width="4"/>
    <ellipse cx="510" cy="420" rx="28" ry="30" fill="white" stroke="#111" stroke-width="4"/>
    <circle cx="392" cy="422" r="16" fill="#111"/>
    <circle cx="512" cy="422" r="16" fill="#111"/>
    <circle cx="396" cy="416" r="5" fill="white"/>
    <circle cx="516" cy="416" r="5" fill="white"/>
    <path d="M368 395 Q390 385 412 395" fill="none" stroke="#111" stroke-width="3" stroke-linecap="round"/>
    <path d="M488 395 Q510 385 532 395" fill="none" stroke="#111" stroke-width="3" stroke-linecap="round"/>
    <ellipse cx="450" cy="468" rx="58" ry="42" fill="white" stroke="#111" stroke-width="4"/>
    <ellipse cx="450" cy="478" rx="28" ry="16" fill="#111"/>
    <path d="M415 490 Q450 505 485 490" fill="none" stroke="#111" stroke-width="3.5" stroke-linecap="round"/>
    <path d="M405 468 Q400 462 398 455" fill="none" stroke="#111" stroke-width="1.5" stroke-dasharray="2,2"/>
    <path d="M495 468 Q500 462 502 455" fill="none" stroke="#111" stroke-width="1.5" stroke-dasharray="2,2"/>
    <path d="M368 348 C348 325 350 298 368 282 C382 268 400 272 408 288 C395 268 398 245 415 238 C432 230 448 245 448 262 C448 245 462 230 480 238 C498 245 502 268 490 288 C498 272 518 268 530 282 C548 298 550 325 532 348" fill="white" stroke="#111" stroke-width="4.5"/>
    <path d="M450 338 L450 285 M425 345 L412 298 M475 345 L488 298" fill="none" stroke="#111" stroke-width="3" stroke-linecap="round"/>
    <ellipse cx="150" cy="688" rx="88" ry="52" fill="white" stroke="#111" stroke-width="4.5"/>
    <path d="M62 688 Q150 650 238 688 Q150 726 62 688Z" fill="white" stroke="#111" stroke-width="3"/>
    <path d="M238 688 L258 658 L268 688" fill="white" stroke="#111" stroke-width="3.5"/>
    <path d="M128 688 C98 648 72 605 68 568 C65 540 80 528 95 538" fill="none" stroke="#111" stroke-width="4" stroke-linecap="round"/>
    <circle cx="128" cy="665" r="10" fill="white" stroke="#111" stroke-width="3"/>
    <path d="M318 408 L298 388 M318 440 L292 452 M318 470 L302 490" fill="none" stroke="#111" stroke-width="3" stroke-linecap="round"/>
    <path d="M582 408 L602 388 M582 440 L608 452 M582 470 L598 490" fill="none" stroke="#111" stroke-width="3" stroke-linecap="round"/>
  </svg>`,
  colorSvgData: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 900">
    <path d="M450 740 C428 755 408 775 400 800 C392 825 410 835 428 820 C440 810 450 790 450 790 C450 790 460 810 472 820 C490 835 508 825 500 800 C492 775 472 755 450 740Z" fill="#1E90FF"/>
    <path d="M450 740 C415 720 385 695 358 668 C330 640 318 605 328 580 C338 555 365 548 390 560" fill="#1E90FF"/>
    <path d="M450 740 C485 720 515 695 542 668 C570 640 582 605 572 580 C562 555 535 548 510 560" fill="#1E90FF"/>
    <ellipse cx="450" cy="488" rx="142" ry="175" fill="#1E90FF"/>
    <path d="M318 408 C285 388 265 358 272 332 C280 308 305 302 325 315 C320 302 325 285 340 282 C358 278 372 295 368 315" fill="#1E90FF"/>
    <path d="M582 408 C615 388 635 358 628 332 C620 308 595 302 575 315 C580 302 575 285 560 282 C542 278 528 295 532 315" fill="#1E90FF"/>
    <path d="M368 348 C348 325 350 298 368 282 C382 268 400 272 408 288 C395 268 398 245 415 238 C432 230 448 245 448 262 C448 245 462 230 480 238 C498 245 502 268 490 288 C498 272 518 268 530 282 C548 298 550 325 532 348" fill="#CC0000"/>
    <ellipse cx="450" cy="468" rx="58" ry="42" fill="#87CEEB"/>
    <ellipse cx="150" cy="688" rx="88" ry="52" fill="#FFD700"/>
    <path d="M238 688 L258 658 L268 688" fill="#C8A000"/>
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
  dinosaur,
  cinderella,
  snowWhite,
  arielDisney,
  simba,
  elsa,
  moana,
  woody,
  buzz,
  belle,
  genie,
];
