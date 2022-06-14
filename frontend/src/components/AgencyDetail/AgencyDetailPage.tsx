import Typography from "@mui/material/Typography";
import * as React from "react";
import Header from "../Header";
import Box from "@mui/material/Box";
import {Footer} from "../Footer";
import {useNavigate, useParams} from 'react-router-dom';
import {Autocomplete, Divider, Rating, Stack, Tab, Tabs, TextField} from "@mui/material";
import useSWR from "swr";
import fetcher from "../../utils/fetcher";
import {createTheme} from "@mui/material/styles";
import {AGENCY_DETAIL, MAX_WIDTH, RATINGS, TRAVEL_TYPES} from "../../utils/data";
import {AgencyDetailCard, IAgencyDetailCard} from "./AgencyDetailCard";
import {AgencyOverviewCard} from "../MainPage/AgencyOverviewCard";
import {AutoSelect} from "../MainPage/AutoSelect";
import {Controller, useForm} from "react-hook-form";
import {IFilter} from "../MainPage/FilterMenu";
import CountrySelect, {COUNTRIES, ICountryType} from "../../utils/Countries";
import {useEffect, useState} from "react";
import {mainFilter} from "../MainPage/SearchPanel";

export type detailFilter = { rating?: string, destination?: string, travelType?: string }

export function AgencyDetailPage() {
    const {id} = useParams();
    let navigate = useNavigate();
    if (id === undefined) {
        navigate("/");
    }

    // TODO: update URL
    const [url, setUrl] = useState('http://localhost:4000/doctors');

    // TODO: load data
    // const {data, error} = useSWR(url, fetcher);
    // if (error) console.log(error.message)
    // if (!data) return <div>Loading...</div>;
    // if (data) console.log(data)

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

    const [travelTypes, setTravelTypes] = useState<string[]>();
    const [countries, setCountries] = useState<ICountryType[]>();
    const [ratings, setRatings] = useState<number[]>();

    useEffect(() => {
        // TODO: change url
        let tmpurl = 'http://localhost:4000/doctors?'
        const names = ["travelTypes", "countries", "ratings"];
        const states = [travelTypes, countries, ratings];
        for (let i = 0; i < names.length; i++) {
                // @ts-ignore
                if (states[i]?.length && states[i]?.length > 0) {
                    tmpurl += (names[i] + "=");
                    // @ts-ignore
                    for (const name of states[i]) {
                        if (i == 1) {
                            // @ts-ignore
                            tmpurl += (name.label + "|");
                        } else {
                            tmpurl += (name + "|");
                        }
                    }
                    tmpurl = tmpurl.substring(0, tmpurl.length - 1)
                    tmpurl = tmpurl + "&"
                }
        }
        if (tmpurl[tmpurl.length - 1] == "&" || tmpurl[tmpurl.length - 1] == "=" || tmpurl[tmpurl.length - 1] == "?") {
            tmpurl = tmpurl.substring(0, tmpurl.length - 1)
        }
        console.log(tmpurl);
        setUrl(tmpurl);
    }, [travelTypes, countries, ratings])

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
            {/*<Typography sx={{m: 2}}*/}
            {/*            variant="h4"*/}
            {/*            align="center"*/}
            {/*            color="text.primary"*/}
            {/*            gutterBottom*/}
            {/*            fontWeight="bold"*/}
            {/*>*/}
            {/*    Reviews*/}
            {/*</Typography>*/}

            <Stack direction={{xs: "column", md:"row"}} justifyContent={"flex-start"} spacing={2} mt={2} ml={4}>
                <Autocomplete
                    id="country-select"
                    sx={{width: 200}}
                    options={COUNTRIES}
                    autoHighlight
                    multiple
                    getOptionLabel={(option) => option.label}
                    renderOption={(props, option) => (
                        <Box component="li" sx={{'& > img': {mr: 2, flexShrink: 0}}} {...props}>
                            <img
                                loading="lazy"
                                width="20"
                                src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                                srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                                alt=""
                            />
                            {option.label}
                        </Box>
                    )}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Filter by country"
                            inputProps={{
                                ...params.inputProps,
                                autoComplete: 'new-password', // disable autocomplete and autofill
                            }}
                        />
                    )}
                    onChange={(event, newValue) => {
                        setCountries([
                            ...newValue
                        ]);
                    }}
                />

                <Autocomplete
                    id={id}
                    multiple
                    options={TRAVEL_TYPES}
                    sx={{width: 200}}
                    renderInput={(params) =>
                        <TextField {...params} name={"travelType"} label={"Filter by travel type"}/>}
                    onChange={(event, newValue) => {
                        setTravelTypes([
                            ...newValue
                        ]);
                    }}/>

                <Autocomplete
                    id={id}
                    multiple
                    options={RATINGS}
                    sx={{width: 200}}
                    renderInput={(params) =>
                        <TextField {...params} name={"travelType"} label={"Filter by rating"}/>}
                    onChange={(event, newValue) => {
                        setRatings([
                            ...newValue
                        ]);
                    }}/>
            </Stack>
        </Box>
        <Footer/>
    </>
}
