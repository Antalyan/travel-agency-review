import Typography from "@mui/material/Typography";
import * as React from "react";
import Header from "../Header";
import Box from "@mui/material/Box";
import {Footer} from "../Footer";
import {useNavigate, useParams} from 'react-router-dom';
import {Rating, Tab, Tabs} from "@mui/material";
import useSWR from "swr";
import fetcher from "../../utils/fetcher";

import {createTheme} from "@mui/material/styles";
import {AGENCY_DETAIL, MAX_WIDTH} from "../../utils/data";
import {AgencyDetailCard, IAgencyDetailCard} from "./AgencyDetailCard";
import {AgencyOverviewCard} from "../MainPage/AgencyOverviewCard";

export function AgencyDetailPage() {
    const {id} = useParams();
    let navigate = useNavigate();
    if (id === undefined) {
        navigate("/");
    }

    // TODO: fetch data including particular reviews
    // const url = 'http://localhost:4000/doctors/' + id;
    // // TODO: return error or redirect if the user with this id does not exist
    // const {data, error} = useSWR(url, fetcher);
    // if (error) {
    //     console.log(error.message);
    // }
    //
    // if (!data) return <div>Loading...</div>;
    // if (data) console.log(data)

    // TODO: change type or add reviews (attributes), replace with data.data
    const agency: IAgencyDetailCard = AGENCY_DETAIL;

    const theme = createTheme();
    return <>
        <Header/>
        <Box
            sx={{
                minHeight: `calc(100vh - ${theme.spacing(19.7)})`,
            }}
            marginLeft={{md: "auto"}}
            marginRight={{md: "auto"}}
            maxWidth={{md: MAX_WIDTH}}
        >
            <AgencyDetailCard {...agency}/>
        </Box>
        <Footer/>
    </>
}
