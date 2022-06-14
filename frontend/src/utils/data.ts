import {IAgencyOverviewCard} from "../components/AgencyCard";

export const TRAVEL_TYPES: string[] = ["Holiday", "Cruise", "Sightseeing tour", "Sport tour", "Ski tour", "Bicycle tour", "Spa"];

// MOCK DATA

export const AGENCIES: IAgencyOverviewCard[] = [
    {
        id: 1,
        name: "Fischer",
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
    }
]

