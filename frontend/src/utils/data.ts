import {IAgencyOverviewCard} from "../components/AgencyCard";

export const TRAVEL_TYPES: string[] = ["Holiday", "Cruise", "Sightseeing tour", "Sport tour", "Ski tour", "Bicycle tour", "Spa"];
export const GRADIENT: string = 'radial-gradient(circle, rgba(225,233,238,1) 0%, rgba(0,137,255,1) 100%)'

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

