import { ReactNode } from "react";
import { About } from "./About/About.tsx";
import { Gallery } from "./Gallery/Gallery.tsx";
import { Home } from "./Home/Home.tsx";
import { News } from "./News/News.tsx";
import { Teams } from './Teams/Teams.tsx';
import { Contact } from "./Contact/Contact.tsx";
import { ClubHire } from "./ClubHire/ClubHire.tsx";
import { Membership } from "./Membership/Membership.tsx";
import { Matches } from "./Matches/Matches.tsx";

interface INavigationConfig {
    name: string;
    route: string;
    description: string;
    component?: ReactNode,
    externalLink?: string;
}

export const NavigationConfig: INavigationConfig[] = [{
    "name": "Home",
    "route": "/",
    "description": "",
    "component": <Home />
}, {
    "name": "About",
    "route": "/about",
    "description": "",
    "component": <About/>
}, {
    "name": "News",
    "route": "/news",
    "description": "",
    "component": <News />
}, {
    "name": "Teams",
    "route": "/teams",
    "description": "",
    "component": <Teams />
}, {
    "name": "Matches",
    "route": "/matches",
    "description": "",
    "externalLink": "https://paignton.play-cricket.com/Matches"
}, {
    "name": "Gallery",
    "route": "/gallery",
    "description": "",
    "component": <Gallery />
}, {
    "name": "Contact",
    "route": "/contact",
    "description": "",
    "component": <Contact />
}, {
    "name": "Shop",
    "route": "/shop",
    "description": "",
    "externalLink": "https://www.devoncountysports.com/Club-Shop/Paignton-CC-Clothing"
}, {
    "name": "Club Hire",
    "route": "/club-hire",
    "description": "",
    "component": <ClubHire />
}, {
    "name": "Membership",
    "route": "/membership",
    "description": "",
    "component": <Membership />
}
// {
//     "name": "Fantasy CC",
//     "route": "/fantasy",
//     "description": "",
//     "externalLink": "https://paignton.fantasyclubcricket.co.uk/team-standings"
// }
]