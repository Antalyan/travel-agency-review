import * as React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import FlightOutlinedIcon from '@mui/icons-material/FlightOutlined';
import {Box, Card, CardContent, Container, Divider, Rating, Stack} from "@mui/material";
import {MAX_WIDTH, REVIEW_CATEGORIES} from "../../utils/data";
import {useState} from "react";

export interface IReview {
    author?: string,
    title: string,
    groupSize?: number,
    travelType?: string,
    destination?: string,
    month?: string,
    year?: number,
    scores: (number | undefined)[],
    texts: (string | undefined)[]
}

export function ReviewCard({author, title, groupSize, travelType, destination, month, year, scores, texts}: IReview) {
    const [detailedState, setDetailedState] = useState(false);
    return (
        <Grid container justifyContent={"center"} maxWidth={{md: MAX_WIDTH}} marginLeft={{md: "auto"}}
              marginRight={{md: "auto"}}>
            <Grid container item xs={11} rowSpacing={1}
                  columnSpacing={{xs: 0}}
                  marginBottom={2}
                  marginLeft={4}
            >
                <Grid item xs={12} md={10} container>
                    <Typography variant="h4"
                                color="text.primary"
                                gutterBottom
                                fontWeight="bold"
                    > {title}
                    </Typography>
                </Grid>
                <Grid item xs={12} md={3} container>
                    <Stack direction={"row"} spacing={1}>
                        <PersonOutlinedIcon color={"primary"}/>
                        <Typography display={"block"}>
                            <strong>Author:</strong> {author === undefined ? "Anonymous" : author}
                        </Typography>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={3} container visibility={groupSize !== undefined ? "visible" : "hidden"}>
                    <Stack direction={"row"} spacing={1}>
                        <GroupOutlinedIcon color={"primary"}/>
                        <Typography display={"block"}>
                            <strong>Group size:</strong> {groupSize}
                        </Typography>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={3} container direction="row"
                      visibility={(month !== undefined || year !== undefined) ? "visible" : "hidden"}>
                    <Stack direction={"row"} spacing={1}>
                        <EventOutlinedIcon color={"primary"}/>
                        {/*TODO: format time*/}
                        <Typography display={"block"}>
                            <strong>Visited in:</strong> {month + " " + year}
                        </Typography>
                    </Stack>
                </Grid>
                <Grid item md={3}/>

                <Grid item xs={12} md={3} container visibility={travelType !== undefined ? "visible" : "hidden"}>
                    <Stack direction={"row"} spacing={1}>
                        <FlightOutlinedIcon color={"primary"}/>
                        <Typography display={"block"}>
                            <strong>Travel type:</strong> {travelType}
                        </Typography>
                    </Stack>
                </Grid>

                <Grid item xs={12} md={6} container visibility={destination !== undefined ? "visible" : "hidden"}>
                    <Stack direction={"row"} spacing={1}>
                        <LocationOnOutlinedIcon color={"primary"}/>
                        <Typography display={"block"}>
                            <strong>Destination:</strong> {destination}
                        </Typography>
                    </Stack>
                </Grid>

                {/*{scores.map((score, index) => {*/}
                {/*    return <Stack direction={"row"} alignItems={"center"} spacing={2} key={"score" + index}>*/}
                {/*        <Rating name={"rating" + index} value={score} precision={0.5}*/}
                {/*                readOnly size={"medium"}*/}
                {/*                sx={{color: "primary.main"}}/>*/}
                {/*        <Typography variant="body1"*/}
                {/*                    align="left"*/}
                {/*                    color="text.primary"*/}
                {/*        >{REVIEW_CATEGORIES[index]}*/}
                {/*        </Typography>*/}
                {/*    </Stack>*/}
                {/*})}*/}

                <Grid item xs={12} md={4} mt={2}>
                    <Stack direction={"row"} spacing={1}>
                        <Rating name="main-rating" value={scores[0]} precision={0.5} readOnly
                                size={"small"} sx={{color: "primary.main"}}/>
                        <Typography variant="body2"
                                    align="left"
                                    color="text.primary"
                        >
                            Overall satisfaction
                        </Typography>
                    </Stack>
                </Grid>
                <Grid item xs={10} mt={2}
                      display={texts[0] === undefined ? "none" : "block"}>
                    <Typography variant={"body2"}>
                        {texts[0]}
                    </Typography>
                </Grid>

                {detailedState && scores.slice(1).map((score, ind) => {
                    const index = ind + 1;
                    return <>
                        {(score != undefined) && <Grid item xs={12} mt={2}>
                            <Stack direction={"row"} spacing={1}>
                                <Rating name={"rating" + index} value={score} precision={0.5} readOnly
                                        size={"small"} sx={{color: "primary.main"}}/>
                                <Typography variant="body2"
                                            align="left"
                                            color="text.primary"
                                >
                                    {REVIEW_CATEGORIES[index]}
                                </Typography>
                            </Stack>
                        </Grid>}
                        <Grid item xs={10} mt={2}
                              display={texts[index] === undefined ? "none" : "block"}>
                            <Typography variant={"body2"}>
                                {texts[index]}
                            </Typography>
                        </Grid>
                    </>
                })}


                <Grid item xs={12} md={2} container justifyContent={"right"} pr={4}>
                    <Stack direction={"column"} justifyContent={"flex-end"}>
                        <Button variant="text" size={"small"} onClick={() => setDetailedState(!detailedState)}>
                            <Typography variant={"body2"} color={"text.secondary"}>
                                {detailedState ? "SHOW LESS" : "SHOW MORE"}
                            </Typography>
                        </Button>
                    </Stack>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Divider/>
            </Grid>
        </Grid>
    )
}

