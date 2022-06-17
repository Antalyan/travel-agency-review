import Header from "../Header";
import {Autocomplete, Box, Button, Grid, Rating, Stack, Switch, TextField, Typography} from "@mui/material";
import {Controller, useForm} from "react-hook-form";
import {Footer} from "../Footer";
import * as React from "react";
import NotesOutlinedIcon from '@mui/icons-material/NotesOutlined';
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import FlightOutlinedIcon from '@mui/icons-material/FlightOutlined';
import {IReview} from "./ReviewCard";
import {MAX_WIDTH, MONTHS, REVIEW_CATEGORIES, REVIEW_FIELDS, TRAVEL_TYPES} from "../../utils/data";
import {createTheme} from "@mui/material/styles";
import {TextFieldElem} from "../FormComponents/TextFieldElem";
import {AutoSelect} from "../FormComponents/AutoSelect";
import {CountryController, CountrySelect} from "../FormComponents/CountrySelector";
import {Fragment, useEffect, useState} from "react";

export function NewReviewPage() {
    const {handleSubmit, control} = useForm<IReview>();

    const onSubmit = (data: IReview) => {
        console.log(data);
    }

    const theme = createTheme();

    // First is always required
    const [enabledState, setEnabledState] = useState<boolean[]>([true, false, false, false, false, false, false]);
    const [ratingState, setRatingState] = useState<(number | null | undefined)[]>
    ([undefined, undefined, undefined, undefined, undefined, undefined, undefined]);

    const changeEnableState = (index: number) => {
        return setEnabledState(enabledState.map((val, ind) => {
            return index == ind ? !val : val
        }))
    }
    const changeRatingState = (index: number, newValue: number | null | undefined) => {
        const newState = [...ratingState];
        newState[index] = newValue;
        setRatingState(newState);
    }

    return (<>
            <Header/>
            <Box
                sx={{
                    minHeight: `calc(100vh - ${theme.spacing(20.7)})`,
                    marginTop: 2
                }}
            >
                <form onSubmit={handleSubmit(onSubmit)} className={"form"}>
                    <Grid container marginLeft={{md: "auto"}}
                          marginRight={{md: "auto"}} maxWidth={{md: MAX_WIDTH}}
                          marginX={2}
                    >
                        <Grid item xs={12} marginBottom={4}>
                            <Typography
                                variant="h4"
                                color="text.primary"
                                fontWeight="bold"
                            > New review
                            </Typography>
                        </Grid>

                        <Grid item xs={12} md={6} container key={"title"} justifyContent={"space-between"}
                              alignItems={"center"} p={2}>
                            <Stack direction={"row"} spacing={1}>
                                <NotesOutlinedIcon color={"primary"} fontSize={"medium"}/>
                                <Typography display={"block"} color={"black"} fontSize={"large"} pr={4}>
                                    <strong>Title:</strong>
                                </Typography>
                            </Stack>
                            <TextFieldElem name={"title"} label={"Title"} type={"text"} size={"small"}
                                           isRequired={true} sx={{pr: 4}}
                                           control={control}/>
                        </Grid>
                        <Grid item md={6} display={{xs: "none", md: "block"}}/>

                        <Grid item xs={12} md={6} container key={"author"} justifyContent={"space-between"}
                              alignItems={"center"} p={2}>
                            <Stack direction={"row"} spacing={1}>
                                <PersonOutlinedIcon color={"primary"} fontSize={"medium"}/>
                                <Typography display={"block"} color={"black"} fontSize={"large"} pr={4}>
                                    <strong>Author:</strong>
                                </Typography>
                            </Stack>
                            <TextFieldElem name={"author"} label={"Author"} type={"text"} size={"small"}
                                           isRequired={false} sx={{pr: 4}}
                                           control={control}/>
                        </Grid>

                        <Grid item xs={12} md={6} container key={"groupSize"} justifyContent={"space-between"}
                              alignItems={"center"} p={2}>
                            <Stack direction={"row"} spacing={1}>
                                <GroupOutlinedIcon color={"primary"} fontSize={"medium"}/>
                                <Typography display={"block"} color={"black"} fontSize={"large"} pr={4}>
                                    <strong>Group size:</strong>
                                </Typography>
                            </Stack>
                            <TextFieldElem name={"groupSize"} label={"Group size"} type={"text"} size={"small"}
                                           isRequired={false} sx={{pr: 4}}
                                           control={control}
                                           pattern={{value: /^[0-9]+$/, message: "You must insert a number!"}}/>
                        </Grid>

                        <Grid item xs={12} md={6} container key={"month"} justifyContent={"space-between"}
                              alignItems={"center"} p={2}>
                            <Stack direction={"row"} spacing={1}>
                                <EventOutlinedIcon color={"primary"} fontSize={"medium"}/>
                                <Typography display={"block"} color={"black"} fontSize={"large"} pr={4}>
                                    <strong>Month of visit:</strong>
                                </Typography>
                            </Stack>
                            <AutoSelect name={"month"} label={"Month"} options={MONTHS} size={"small"}
                                        sx={{width: 260, pr: 4}} control={control}/>
                        </Grid>

                        <Grid item xs={12} md={6} container key={"year"} justifyContent={"space-between"}
                              alignItems={"center"} p={2}>
                            <Stack direction={"row"} spacing={1}>
                                <EventOutlinedIcon color={"primary"} fontSize={"medium"}/>
                                <Typography display={"block"} color={"black"} fontSize={"large"} pr={4}>
                                    <strong>Year of visit:</strong>
                                </Typography>
                            </Stack>
                            <TextFieldElem name={"year"} label={"Year"} type={"text"} size={"small"} isRequired={false}
                                           sx={{pr: 4}}
                                           control={control}
                                           pattern={{value: /^[0-9]+$/, message: "You must insert a number!"}}/>
                        </Grid>

                        <Grid item xs={12} md={6} container key={"travelType"} justifyContent={"space-between"}
                              alignItems={"center"} p={2}>
                            <Stack direction={"row"} spacing={1}>
                                <FlightOutlinedIcon color={"primary"} fontSize={"medium"}/>
                                <Typography display={"block"} color={"black"} fontSize={"large"} pr={4}>
                                    <strong>Travel type:</strong>
                                </Typography>
                            </Stack>
                            <AutoSelect name={"travelType"} label={"Type"} options={TRAVEL_TYPES} size={"small"}
                                        sx={{width: 260, pr: 4}} control={control}/>
                        </Grid>
                        <Grid item xs={12} md={6} container key={"destination"} justifyContent={"space-between"}
                              alignItems={"center"} p={2}>
                            <Stack direction={"row"} spacing={1}>
                                <LocationOnOutlinedIcon color={"primary"} fontSize={"medium"}/>
                                <Typography display={"block"} color={"black"} fontSize={"large"} pr={4}>
                                    <strong>Destination:</strong>
                                </Typography>
                            </Stack>
                            <CountryController control={control} sx={{width: 260, pr: 4}} size={"small"}/>
                        </Grid>

                        {REVIEW_CATEGORIES.map((category, index) => {
                            return <Fragment key={category}>
                                <Grid item xs={10} p={2}>
                                    <Stack direction={{xs: "column", md: "row"}} spacing={1} alignContent={"center"}>
                                        <Switch size={"small"}
                                                checked={enabledState[index]}
                                                disabled={index == 0}
                                                onClick={() => {
                                                    changeEnableState(index);
                                                }}/>
                                        <Rating name={"rating" + index} precision={0.5}
                                                size={"medium"} sx={{color: "primary.main"}}
                                                value={enabledState[index] ? ratingState[index] : 0}
                                                readOnly={!enabledState[index]}
                                                onChange={(_, value) => {
                                                    changeRatingState(index, value);
                                                }}/>
                                        <Typography fontSize={"large"}
                                                    align="left"
                                                    color="text.primary"
                                        >
                                            <strong>{REVIEW_CATEGORIES[index] + (index == 0 ? " *" : "")}</strong>
                                        </Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={12} p={2}>
                                    <TextFieldElem name={"text"+index} label={"Description"} type={"text"} size={"small"}
                                                   isRequired={index==0} sx={{pr: 4}} multiline={true} fullWidth={true}
                                                   control={control} disabled={!enabledState[index]}/>
                                </Grid>
                            </Fragment>
                        })}

                        <Button type={"submit"} onSubmit={handleSubmit(onSubmit)}>
                            SUBMIT
                        </Button>
                    </Grid>
                </form>
            </Box>
            <Footer/>
        </>
    )
        ;
}
