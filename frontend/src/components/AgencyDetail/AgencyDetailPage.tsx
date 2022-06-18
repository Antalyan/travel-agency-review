import Typography from "@mui/material/Typography";
import * as React from "react";
import Header from "../Header";
import Box from "@mui/material/Box";
import {Footer} from "../Footer";
import {useNavigate, useParams} from 'react-router-dom';
import {Autocomplete, Divider, Link, Rating, Stack, Tab, Tabs, TextField} from "@mui/material";
import useSWR from "swr";
import fetcher from "../../utils/fetcher";
import {createTheme} from "@mui/material/styles";
import {AGENCY_DETAIL, MAX_WIDTH, RATINGS, REVIEWS, TRAVEL_TYPES, URL_BASE} from "../../utils/data";
import {AgencyDetailCard, IAgencyDetailCard} from "./AgencyDetailCard";
import {AgencyOverviewCard, IAgencyOverviewCard} from "../MainPage/AgencyOverviewCard";
import {AutoSelect} from "../FormComponents/AutoSelect";
import {Controller, useForm} from "react-hook-form";
import {IFilter} from "../MainPage/FilterMenu";
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import {COUNTRIES, findCountry, ICountryType} from "../../utils/Countries";
import {useEffect, useState} from "react";
import {mainFilter} from "../MainPage/SearchPanel";
import Grid from "@mui/material/Grid";
import {IReview, ReviewCard} from "./ReviewCard";
import {CountrySelect} from "../FormComponents/CountrySelector";

interface IDatAgency {
    id: number,
    name: string,
    insuranceValid: boolean,
    address: string,
    overallScore: number,
    totalReviews: number,
    scoresInCategories: (number | undefined)[]
    reviews: IDatReview[]
}

interface IDatReview {
    author: string,
    title: string,
    groupSize: number,
    travelType: string,
    destination: string,
    month: string,
    year: number,
    scores: string,
    texts: string
}

export type detailFilter = { rating?: string, destination?: string, travelType?: string }

export function AgencyDetailPage() {
    const {id} = useParams();
    let navigate = useNavigate();
    if (id === undefined) {
        navigate("/");
    }

    // TODO: update URL
    const [url, setUrl] = useState(URL_BASE + "agencies/" + id);

    const [travelTypeState, setTravelTypeState] = useState<string | null>();
    const [countryState, setCountryState] = useState<ICountryType | null>();
    const [ratingsState, setRatingsState] = useState<number | null>();

    useEffect(() => {
        let tmpurl = URL_BASE + "agencies/" + id + "?";
        const names = ["traveltype", "destination", "rating"];
        const states = [travelTypeState, countryState, ratingsState];
        for (let i = 0; i < names.length; i++) {
            // @ts-ignore
            console.log(states[i]);
            if (states[i] != null && states[i] != undefined) {
                tmpurl += (names[i] + "=");
                if (i == 1 && states[i] != null && states[i] != undefined) {
                    // @ts-ignore
                    tmpurl += states[i].label;
                } else {
                    tmpurl += states[i];
                }
                tmpurl = tmpurl + "&"
            }
        }
        if (tmpurl[tmpurl.length - 1] == "&" || tmpurl[tmpurl.length - 1] == "=" || tmpurl[tmpurl.length - 1] == "?") {
            tmpurl = tmpurl.substring(0, tmpurl.length - 1)
        }
        console.log(tmpurl);
        setUrl(tmpurl);
    }, [travelTypeState, countryState, ratingsState])


    // TODO: load data
    const {data, error} = useSWR(url, fetcher);
    if (error) console.log(error.message)
    if (!data) return <div>Loading...</div>;
    if (data) console.log(data)

    // TODO: change type or add reviews (attributes), replace with data.data
    // const agency: IAgencyDetailCard = AGENCY_DETAIL;
    let dataAgency: IDatAgency = data.agency;
    let agency: IAgencyDetailCard = {
        id: dataAgency.id,
        name: dataAgency.name,
        insuranceValid: dataAgency.insuranceValid,
        overallScore: dataAgency.overallScore,
        totalReviews: dataAgency.totalReviews,
        address: dataAgency.address,
        scoresInCategories: dataAgency.scoresInCategories
    };

    let reviews: IReview[] = dataAgency.reviews.map((review) => {
        return {
            ...review,
            destination: findCountry(review.destination),
            scores: JSON.parse(review.scores),
            texts: JSON.parse(review.texts),
        }
    });

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
            <Grid container>
                <Grid item xs={12}>
                    <Typography sx={{m: 2}}
                                pl={2}
                                variant="h5"
                                color="text.primary"
                                fontWeight="bold"
                                display={"block"}
                    >
                        Reviews
                    </Typography>
                </Grid>
                <Grid item xs={12} ml={4} mr={2}>
                    <Box>
                        <CreateOutlinedIcon display={"inline"} fontSize={"small"} color={"primary"} sx={{mr: 1}}/>
                        <Link href={"/agency/" + id + "/review"} display={"inline"}><strong>
                            Write your own review</strong>
                        </Link>
                        <Typography
                            variant="body1"
                            color="text.primary"
                            display={"inline"}
                        >
                            {" " + "in a few minutes to share your experience!"}
                        </Typography>
                    </Box>
                </Grid>
                <Stack direction={{xs: "column", md: "row"}} justifyContent={"space-around"} spacing={2} mt={2} ml={4}
                       mr={4}>

                    <Autocomplete
                        id={id}
                        value={travelTypeState}
                        options={TRAVEL_TYPES}
                        sx={{width: 200}}
                        renderInput={(params) =>
                            <TextField {...params} name={"travelType"} label={"Filter by travel type"}/>}
                        onChange={(event, newValue) => {
                            setTravelTypeState(newValue);
                        }}/>

                    <Autocomplete
                        id="country-select"
                        value={countryState}
                        sx={{width: 200}}
                        options={COUNTRIES}
                        autoHighlight
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
                                name={"destination"}
                                inputProps={{
                                    ...params.inputProps,
                                    autoComplete: 'new-password', // disable autocomplete and autofill
                                }}
                            />
                        )}
                        onChange={(event, newValue) =>
                            setCountryState(newValue)}
                    />

                    <Autocomplete
                        id={id}
                        value={ratingsState}
                        options={RATINGS}
                        sx={{width: 200}}
                        renderInput={(params) =>
                            <TextField {...params} name={"rating"} label={"Filter by rating"}/>}
                        getOptionLabel={(option) => option.toString()}
                        onChange={(event, newValue) => {
                            setRatingsState(newValue);
                        }}/>
                </Stack>
            </Grid>

            <Grid container rowSpacing={1} columnSpacing={{xs: 1, sm: 2, md: 3}} margin={1}>
                {reviews.map((review: IReview, index) => (
                    <Grid item key={index} xs={12}>
                        <ReviewCard {...review}/>
                    </Grid>
                ))}
            </Grid>
        </Box>
        <Footer/>
    </>
}
