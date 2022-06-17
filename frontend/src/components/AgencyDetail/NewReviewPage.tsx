import Header from "../Header";
import {Autocomplete, Box, Button, Grid, Rating, Stack, TextField, Typography} from "@mui/material";
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
import {useState} from "react";

export function NewReviewPage() {
    const {handleSubmit, control} = useForm<IReview>();

    const onSubmit = (data: IReview) => {
        console.log(data);
    }

    const theme = createTheme();

    const [ratingState, setRatingState] = useState<(number | null | undefined)[]>
    ([undefined, undefined, undefined, undefined, undefined, undefined, undefined]);

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
                                <Typography display={"block"} color={"black"} fontSize={"large"} pr={3}>
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
                                <Typography display={"block"} color={"black"} fontSize={"large"} pr={3}>
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
                                <Typography display={"block"} color={"black"} fontSize={"large"} pr={3}>
                                    <strong>Group size:</strong>
                                </Typography>
                            </Stack>
                            <TextFieldElem name={"groupSize"} label={"Group size"} type={"text"} size={"small"}
                                           isRequired={false} sx={{pr: 4}}
                                           control={control}
                                           pattern={{value: /^[0-9]+$/, message: "You must insert a number!"}}/>
                        </Grid>

                        <Grid item xs={12} md={6} container key={"groupSize"} justifyContent={"space-between"}
                              alignItems={"center"} p={2}>
                            <Stack direction={"row"} spacing={1}>
                                <EventOutlinedIcon color={"primary"} fontSize={"medium"}/>
                                <Typography display={"block"} color={"black"} fontSize={"large"} pr={3}>
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
                                <Typography display={"block"} color={"black"} fontSize={"large"} pr={3}>
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
                                <Typography display={"block"} color={"black"} fontSize={"large"} pr={3}>
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
                                <Typography display={"block"} color={"black"} fontSize={"large"} pr={3}>
                                    <strong>Destination:</strong>
                                </Typography>
                            </Stack>
                            <CountryController control={control} sx={{width: 260, pr: 4}} size={"small"}/>
                        </Grid>

                        {REVIEW_CATEGORIES.map((category, index) => {
                            return <>
                                <Grid item xs={10} p={2} pr={4}>
                                    <Stack direction={"row"} spacing={1}>
                                        <Rating name={"rating" + index} precision={0.5}
                                                size={"medium"} sx={{color: "primary.main"}}
                                                onChange={(_, value) => {
                                                    let tmpRat = ratingState;
                                                    tmpRat[index] = value;
                                                    setRatingState(tmpRat);
                                                }}/>
                                        <Typography fontSize={"large"}
                                                    align="left"
                                                    color="text.primary"
                                        >
                                            <strong>{REVIEW_CATEGORIES[index]}</strong>
                                        </Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={12} p={2} pr={4}>
                                    <TextFieldElem name={"text"+index} label={"Description"} type={"text"} size={"small"}
                                                   isRequired={index==0} sx={{pr: 4}} multiline={true} fullWidth={true}
                                                   control={control}/>
                                </Grid>
                            </>
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
