import Typography from "@mui/material/Typography";
import * as React from "react";
import {useEffect, useState} from "react";
import Header from "../Header";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import BeachImage from "../../images/beach.jpg";
import {SearchPanel} from "./SearchPanel";
import {Footer} from "../Footer";
import {createTheme} from "@mui/material/styles";
import {AgencyOverviewCard, IAgencyOverviewCard} from "../AgencyCard";
import {AGENCIES} from "../../utils/data";

export function MainPage() {
    const [dataFilter, setDataFilter] = useState<{ name?: string, destination?: string, travelType?: string }>({
        name: undefined,
        destination: undefined,
        travelType: undefined
    });

    // // TODO: update URL
    // const [url, setUrl] = useState('http://localhost:4000/doctors');
    //
    // useEffect(() => {
    //     // TODO: update URL
    //     let tmpurl = 'http://localhost:4000/doctors'
    //     if (dataFilter.name !== undefined || dataFilter.destination !== undefined || dataFilter.travelType !== undefined) {
    //         tmpurl = tmpurl + "?";
    //     }
    //     if (dataFilter.name !== undefined) {
    //         tmpurl = tmpurl + "name=" + dataFilter.name
    //     }
    //     if (dataFilter.destination !== undefined) {
    //         if (tmpurl.includes("=")) {
    //             tmpurl = tmpurl + "&"
    //         }
    //         tmpurl = tmpurl + "destination=" + dataFilter.destination
    //     }
    //     if (dataFilter.travelType != null) {
    //         if (tmpurl.includes("=")) {
    //             tmpurl = tmpurl + "&"
    //         }
    //         tmpurl = tmpurl + "travelType=" + dataFilter.travelType
    //     }
    //     setUrl(tmpurl);
    // }, [dataFilter])

    // TODO: load data
    // const {data, error} = useSWR(url, fetcher);
    // if (error) console.log(error.message)
    // if (!data) return <div>Loading...</div>;
    // if (data) console.log(data)

    // TODO: convert agency data
    // function convertAgencyDatas() {
    //     return data.data.map((agency) => {
    //         return {
    //             id: agency.id,
    //             name: (doctor.degree ? doctor.degree + " " : "") + doctor.firstname + " " + doctor.surname,
    //             specialization: doctor.specialization,
    //             location: doctor.city,
    //             actuality: doctor.actuality,
    //         }
    //     });
    // }

    // TODO: replace with data load (in data) above
    let agencies: IAgencyOverviewCard[] = AGENCIES;
    const theme = createTheme();
    return <>
        <Header/>
        <Box
            sx={{
                minHeight: `calc(100vh - ${theme.spacing(20.7)})`,
            }}
        >
            <Grid container rowSpacing={0} columnSpacing={{xs: 1}} marginLeft={{md: "auto"}}
                  marginRight={{md: "auto"}} maxWidth={{md: 960}}>
                <Grid item xs={12}>
                    {/*TODO: check and fix image*/}
                    <img src={BeachImage} alt='Beach' width="100%"/>
                    {/*<Box display="flex" height={{xs:"10rem", md:"13rem"}}*/}
                    {/*     alignItems="right"*/}
                    {/*     margin={0}*/}
                    {/*     justifyContent="right">*/}
                    {/*   */}
                    {/*</Box>*/}
                </Grid>
                <Grid item xs={12}>
                    <Typography sx={{m: 2}}
                                align="left"
                                color="text.secondary"
                                gutterBottom
                    >
                        <strong>Travelled recently? </strong>Share your experience with others to help them enjoy the
                        best holidays ever! Praise those who improved your experiences and shame those who offer
                        low quality services. If issues are shared and known, travel agencies will have no other option
                        than to resolve them, so the quality of your future holidays is in your hands!<br/>
                        <strong>Going to travel? </strong>Read other's experiences in advance to avoid disappointment!
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography sx={{m: 2}}
                                component="h2"
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
