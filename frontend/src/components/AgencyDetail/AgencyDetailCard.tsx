import * as React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Profile from "../../images/mock_profile.jpg";
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import {Card, CardContent, Container, Divider, Rating, Stack} from "@mui/material";
import {MAX_WIDTH, REVIEW_CATEGORIES} from "../../utils/data";
import HomeIcon from '@mui/icons-material/Home';

export interface IAgencyDetailCard {
    id: number,
    name: string,
    insuranceValid: boolean,
    overallScore: number,
    totalReviews: number
    address: string,
    averageScores: (number | undefined)[]
}

export function AgencyDetailCard({
                                     id,
                                     name,
                                     insuranceValid,
                                     overallScore,
                                     totalReviews,
                                     address,
                                     averageScores
                                 }: IAgencyDetailCard) {
    return (
        <Grid container justifyContent={"center"} maxWidth={{md: MAX_WIDTH}} marginLeft={{md: "auto"}}
              marginRight={{md: "auto"}}>
            <Grid item xs={11} marginBottom={2}>
                <Grid container rowSpacing={1}
                      columnSpacing={{xs: 0}}
                      justifyContent={"center"}
                >
                    <Grid item xs={8} md={10}>
                        <Typography sx={{m: 2}}
                                    pl={2}
                                    variant="h4"
                                    color="text.primary"
                                    gutterBottom
                                    fontWeight="bold"
                        > {name}
                        </Typography>
                    </Grid>
                    <Grid item xs={4} md={2} container direction="column" paddingRight={4}
                          alignItems={"flex-end"} marginTop={3}>
                        <Stack direction={"row"} spacing={2}>
                            <Typography variant="body2"
                                        align="right"
                                        color={insuranceValid ? "green" : "red"}
                            > INSURANCE <br/> {+insuranceValid ? "VALID" : "INVALID"}
                            </Typography>
                            {insuranceValid ? <DoneOutlineIcon sx={{color: "green"}}/> :
                                <CancelOutlinedIcon sx={{color: "red"}}/>}
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={8} pl={4}>
                        <Stack direction={"column"} spacing={1}>
                            <Stack direction={"row"} alignItems={"center"} spacing={2}>
                                <Rating name="main-rating" value={overallScore} precision={0.5}
                                        readOnly size={"large"}
                                        sx={{color: "primary.main"}}/>
                                <Typography variant="h6"
                                            align="left"
                                            color="text.primary"
                                >OVERALL
                                </Typography>
                            </Stack>
                            <Divider/>
                            {averageScores.map((score, index) => {
                                return <Stack direction={"row"} alignItems={"center"} spacing={2} key={"score" + index}>
                                    <Rating name={"rating" + index} value={score} precision={0.5}
                                            readOnly size={"medium"}
                                            sx={{color: "primary.main"}}/>
                                    <Typography variant="body1"
                                                align="left"
                                                color="text.primary"
                                    >{REVIEW_CATEGORIES[index]}
                                    </Typography>
                                </Stack>
                            })}
                        </Stack>
                    </Grid>
                    <Grid item md={4} container direction="column" pr={4}
                          alignItems={"center"} marginTop={5}
                          display={{xs: "none", md: "block"}}
                    >
                        <Stack direction={"row"} spacing={1}>
                            <HomeIcon/>
                            <Typography>
                                Adresa
                            </Typography>
                        </Stack>
                        <Stack direction={"column"} alignItems={"flex-start"}>
                            {address.split(",").map((part) => {
                                return <Typography key={part} display={"block"}>
                                    {part}
                                </Typography>
                            })}
                        </Stack>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

