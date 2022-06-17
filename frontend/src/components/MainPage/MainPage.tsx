import Typography from "@mui/material/Typography";
import * as React from "react";
import {useEffect, useState} from "react";
import Header from "../Header";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import BeachImage from "../../images/beach.jpg";
import {SearchPanel} from "./SearchPanel";
import {mainFilter} from "./SearchPanel";
import {Footer} from "../Footer";
import {createTheme} from "@mui/material/styles";
import {AgencyOverviewCard, IAgencyOverviewCard} from "./AgencyOverviewCard";
import {AGENCIES, MAX_WIDTH, URL_BASE} from "../../utils/data";
import useSWR from "swr";
import fetcher from "../../utils/fetcher";

export function MainPage() {
    const [dataFilter, setDataFilter] = useState<mainFilter>({
        name: undefined,
        destination: undefined,
        travelType: undefined
    });

    const [url, setUrl] = useState(URL_BASE + 'agencies');

    useEffect(() => {
        // TODO: check url after filter reset
        let tmpurl = URL_BASE + 'agencies'
        if (dataFilter.name !== undefined || dataFilter.destination !== undefined || dataFilter.travelType !== undefined) {
            tmpurl = tmpurl + "?";
        }
        if (dataFilter.name !== undefined) {
            tmpurl = tmpurl + "name=" + dataFilter.name
        }
        if (dataFilter.destination !== undefined) {
            if (tmpurl.includes("=")) {
                tmpurl = tmpurl + "&"
            }
            tmpurl = tmpurl + "destination=" + dataFilter.destination
        }
        if (dataFilter.travelType != null) {
            if (tmpurl.includes("=")) {
                tmpurl = tmpurl + "&"
            }
            tmpurl = tmpurl + "travelType=" + dataFilter.travelType
        }
        setUrl(tmpurl);
        console.log(tmpurl);
    }, [dataFilter])

    const {data, error} = useSWR(url, fetcher);
    if (error) console.log(error.message)
    if (!data) return <div>Loading...</div>;
    if (data) console.log(data)

    // TODO: check load
    let agencies: IAgencyOverviewCard[] = data.agencies;
    const theme = createTheme();
    return <>
        <Header/>
        <Box
            sx={{
                minHeight: `calc(100vh - ${theme.spacing(20.7)})`,
            }}
        >
            <Grid container rowSpacing={0} columnSpacing={{xs: 1}} marginLeft={{md: "auto"}}
                  marginRight={{md: "auto"}} maxWidth={{md: MAX_WIDTH}}>
                <Grid item xs={12}>
                    <img src={BeachImage} alt='Beach' width="100%"/>
                </Grid>
                <Grid item xs={12}>
                    <Typography sx={{m: 2}}
                                align="left"
                                color="text.secondary"
                    >
                        <Typography variant={"h4"}><strong>Travelled recently? </strong></Typography><br/>
                        <strong>Share</strong> your experience with others to help them enjoy the
                        best holidays ever!<br/> <strong>Praise</strong> those who improved your experience and
                        <strong> criticise</strong> those who offer low quality services. If issues are shared and known,
                        travel agencies will have no other option than to resolve them, so the <strong>
                        quality of your future holidays is in your hands!</strong><br/>
                        <Typography variant={"h4"} mt={2}><strong>Going to travel? </strong></Typography><br/>
                        Read other's experiences in advance to avoid disappointment!
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography sx={{m: 2}}
                                variant="h3"
                                align="center"
                                color="text.primary"
                                gutterBottom
                                fontWeight="bold"
                    >
                        Travel Agencies List
                    </Typography>
                </Grid>
            </Grid>
            <Grid container rowSpacing={1} columnSpacing={{xs: 1, sm: 2, md: 3}}>
                <Grid item xs={12}>
                    <SearchPanel filter={dataFilter} setFilter={setDataFilter}/>
                </Grid>
            </Grid>

            <Grid container rowSpacing={1} columnSpacing={{xs: 1, sm: 2, md: 3}} margin={1}>
                {agencies.map((agency: IAgencyOverviewCard, index) => (
                    <Grid item key={index} xs={12}>
                        <AgencyOverviewCard {...agency}/>
                    </Grid>
                ))}
            </Grid>
        </Box>
        <Footer/>
    </>
}
