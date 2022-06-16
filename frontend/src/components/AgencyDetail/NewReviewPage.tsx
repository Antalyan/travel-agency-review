import Header from "../Header";
import {Autocomplete, Box, Button, Grid, Stack, TextField, Typography} from "@mui/material";
import {Controller, useForm} from "react-hook-form";
import {Footer} from "../Footer";
import * as React from "react";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import FlightOutlinedIcon from '@mui/icons-material/FlightOutlined';
import {IReview} from "./ReviewCard";
import {MAX_WIDTH, REVIEW_FIELDS} from "../../utils/data";
import {createTheme} from "@mui/material/styles";

export function NewReviewPage() {
    const {handleSubmit, control} = useForm<IReview>();

    const onSubmit = (data: IReview) => {
        console.log(data);
    }

    const theme = createTheme();

    const icons = [PersonOutlinedIcon, GroupOutlinedIcon, EventOutlinedIcon, EventOutlinedIcon, FlightOutlinedIcon, LocationOnOutlinedIcon];
    const names = ["author", "groupSize", "month", "year", "travelType", "destination"]

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

                        {REVIEW_FIELDS.map((text, index) => {
                            const Icon = icons[index];
                            return <Grid item xs={12} md={6} container key={text} justifyContent={"space-between"}
                                         alignItems={"center"} p={2}>
                                <Stack direction={"row"} spacing={1}>
                                    <Icon color={"primary"} fontSize={"medium"}/>
                                    <Typography display={"block"} color={"black"} fontSize={"large"} pr={3}>
                                        <strong>{text}:</strong>
                                    </Typography>
                                </Stack>
                                <Controller
                                    defaultValue={-1}
                                    rules={isNumber}
                                    // @ts-ignore
                                    name={names[index]}
                                    control={control}
                                    render={({field}) => (
                                        <TextField
                                            {...field}
                                            size={"small"}
                                            sx={{pr:4}}
                                        />
                                    )}
                                />
                            </Grid>
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
