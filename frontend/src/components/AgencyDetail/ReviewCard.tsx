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
import {ICountryType} from "../../utils/Countries";

export interface IReview {
    author?: string,
    title: string,
    groupSize?: number,
    travelType?: string,
    destination?: ICountryType,
    month?: string,
    year?: number,
    scores: (number | undefined)[],
    texts: (string | undefined)[]
}

export function ReviewCard({author, title, groupSize, travelType, destination, month, year, scores, texts}: IReview) {
    const [detailedState, setDetailedState] = useState(false);
    return (
        <Grid container justifyContent={"center"} maxWidth={{md: MAX_WIDTH}} marginLeft={{md: "auto"}}
              marginRight={{md: "auto"}} marginTop={2}>
            <Grid container item xs={11} rowSpacing={1}
                  columnSpacing={{xs: 0}}
                  marginBottom={2}
                  marginLeft={4}
            >
                <Grid item xs={12} md={10} container pr={4}>
                    <Typography variant="h5"
                                color="text.primary"
                                gutterBottom
                                fontWeight="bold"
                    > {title}
                    </Typography>
                </Grid>
                <Grid item xs={12} md={3} container>
                    <Stack direction={"row"} spacing={1}>
                        <PersonOutlinedIcon color={author === undefined ? "disabled" : "primary"}/>
                        <Typography display={"block"} color={author === undefined ? "text.secondary" : "black"}>
                            <strong>Author:</strong> {author ?? ""}
                        </Typography>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={3} container>
                    <Stack direction={"row"} spacing={1}>
                        <GroupOutlinedIcon color={groupSize === undefined ? "disabled" : "primary"}/>
                        <Typography display={"block"} color={groupSize === undefined ? "text.secondary" : "black"}>
                            <strong>Group size:</strong> {groupSize ?? ""}
                        </Typography>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={3} container direction="row">
                    <Stack direction={"row"} spacing={1}>
                        <EventOutlinedIcon color={month === undefined && year === undefined ? "disabled" : "primary"}/>
                        <Typography display={"block"} color={month === undefined && year === undefined ? "text.secondary" : "black"}>
                            <strong>Visited in:</strong> {month != undefined || year != undefined ?
                            ((month === undefined ? "" : month + " ") + year ?? "") : ""}
                        </Typography>
                    </Stack>
                </Grid>

                <Grid item xs={12} md={3} container>
                    <Stack direction={"row"} spacing={1}>
                        <FlightOutlinedIcon color={travelType === undefined ? "disabled" : "primary"}/>
                        <Typography display={"block"} color={travelType === undefined ? "text.secondary" : "black"}>
                            <strong>Travel type:</strong> {travelType ?? ""}
                        </Typography>
                    </Stack>
                </Grid>

                <Grid item xs={12} md={6} container>
                    <Stack direction={"row"} spacing={1}>
                        <LocationOnOutlinedIcon color={destination === undefined ? "disabled" : "primary"}/>
                        <Typography display={"block"} color={destination === undefined ? "text.secondary" : "black"}>
                            <strong>Destination:</strong>
                        </Typography>
                        {destination != undefined && <Box sx={{'& > img': {flexShrink: 0}}}>
                            <img
                                loading="lazy"
                                width="20"
                                src={`https://flagcdn.com/w20/${destination.code.toLowerCase()}.png`}
                                srcSet={`https://flagcdn.com/w40/${destination.code.toLowerCase()}.png 2x`}
                                alt=""
                            />
                        </Box>}
                        <Typography display={"block"} color={destination === undefined ? "text.secondary" : "black"}>
                           {destination?.label ?? ""}
                        </Typography>
                    </Stack>
                </Grid>

                <Grid item xs={12} md={4} mt={2}>
                    <Stack direction={"row"} spacing={1}>
                        <Rating name="main-rating" value={scores[0]} precision={0.5} readOnly
                                size={"small"} sx={{color: "primary.main"}}/>
                        <Typography variant="body2"
                                    align="left"
                                    color="text.primary"
                        >
                            <strong>Overall satisfaction</strong>
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
                        {(score != undefined) && <Grid item xs={10} mt={2}>
                            <Stack direction={"row"} spacing={1}>
                                <Rating name={"rating" + index} value={score} precision={0.5} readOnly
                                        size={"small"} sx={{color: "primary.main"}}/>
                                <Typography variant="body2"
                                            align="left"
                                            color="text.primary"
                                >
                                    <strong>{REVIEW_CATEGORIES[index]}</strong>
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

