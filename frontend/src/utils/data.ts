import {IAgencyOverviewCard} from "../components/MainPage/AgencyOverviewCard";
import {IAgencyDetailCard} from "../components/AgencyDetail/AgencyDetailCard";

export const TRAVEL_TYPES: string[] = ["Holiday", "Cruise", "Sightseeing tour", "Sport tour", "Ski tour", "Bicycle tour", "Spa"];
export const GRADIENT: string = 'radial-gradient(circle, rgba(225,233,238,1) 0%, rgba(0,137,255,1) 100%)'
export const MAX_WIDTH: number = 960
export const REVIEW_CATEGORIES: string[] = ["Selling vacation", "Transfer to destination", "Transfer to hotel",
    "Communication with client", "Delegate in destination", "Trips", "Overall satisfaction"]

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

export const AGENCY_DETAIL: IAgencyDetailCard =
    {
        id: 1,
        name: "Cestovní kancelář Fischer",
        insuranceValid: true,
        overallScore: 4.5,
        totalReviews: 20,
        address: "Babákova 2390/2, 148 00, Praha 4 - Chodov",
        averageScores: [5, 4.5, 4, 3, 4.5, undefined, 3]
    }




