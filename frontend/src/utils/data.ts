import {IAgencyOverviewCard} from "../components/MainPage/AgencyOverviewCard";
import {IAgencyDetailCard} from "../components/AgencyDetail/AgencyDetailCard";
import {IReview} from "../components/AgencyDetail/ReviewCard";

export const TRAVEL_TYPES: string[] = ["Holiday", "Cruise", "Sightseeing tour", "Sport tour", "Ski tour", "Bicycle tour", "Spa", "Other"];
export const MONTHS: string[] = ["January", "February", "March", "April", "May", "June", "July", "September", "October", "November", "December"]
export const GRADIENT: string = 'radial-gradient(circle, rgba(225,233,238,1) 0%, rgba(0,137,255,1) 100%)'
export const MAX_WIDTH: number = 960
export const REVIEW_CATEGORIES: string[] = ["Overall satisfaction", "Selling vacation", "Transfer to destination", "Transfer to hotel",
    "Communication with client", "Delegate in destination", "Trips"]
export const RATINGS: number[] = [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]
export const REVIEW_FIELDS: string[] = ["Author", "Group size", "Month of visit", "Year of visit", "Travel type", "Destination"]
export const URL_BASE: string = "https://cestovkarna.herokuapp.com/"

// MOCK DATA

export const AGENCIES: IAgencyOverviewCard[] = [
    {
        id: 1,
        name: "Cestovní kancelář Fischer",
        insuranceValid: true,
        overallScore: 4.5,
        totalReviews: 20,
    },
    {
        id: 2,
        name: "RS Tour",
        insuranceValid: false,
        overallScore: 2,
        totalReviews: 1,
    },
    {
        id: 3,
        name: "AIR MARINE Travel & Incentive s.r.o.",
        insuranceValid: true,
        overallScore: 0,
        totalReviews: 0,
    }
]

export const REVIEWS: IReview[] = [
    {
        author: "Václav Klaun",
        title: "Best holidays ever! Pens for free!",
        groupSize: 1,
        travelType: "Other",
        destination: {code: 'CL', label: 'Chile', phone: '56'},
        month: "April",
        year: 2011,
        scores: [5, 4.5, 2, undefined, undefined, 4, 5],
        texts: ["I believe each of us would choose something different. There were too many enjoyable parts to pick one. We had the most wonderful weather while we were there which made each of our excursions close to perfect. I particularly enjoyed the camaraderie of the ladies I traveled with and watching their amazement and joy as they experienced Portugal.",
            "I would add a few more days! So many lovely towns I wished we could have enjoyed for a longer period of time.",
            "For 21 days everything we did was perfectly coordinated! We had great and very knowledgeable drivers/guides throughout our trip and enjoyed every minute with them",
            undefined,
            undefined,
            undefined,
            "Learning the history of Portugal from our driver/guides, learning about food from our food tour guides, and visiting a sheepherder and his sheep and watching his dogs control the sheep!"]
    },
    {
        author: undefined,
        title: "Disappointed",
        groupSize: undefined,
        travelType: undefined,
        destination: undefined,
        month: undefined,
        year: undefined,
        scores: [0, 2, 1, 3, 1, 1.5, 1.5],
        texts: ["They cheated on us, stole our money!",
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined
        ]
    }
]

export const AGENCY_DETAIL: IAgencyDetailCard =
    {
        id: 1,
        name: "Cestovní kancelář Fischer",
        insuranceValid: true,
        overallScore: 4.5,
        totalReviews: 20,
        address: "Babákova 2390/2, 148 00, Praha 4 - Chodov",
        scoresInCategories: [5, 4.5, 4, 3, 4.5, undefined, 3]
    }




