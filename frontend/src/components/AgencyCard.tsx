import * as React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Profile from "../../images/mock_profile.jpg";
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { Rating } from "@mui/material";

export interface IAgencyOverviewCard {
    id: number,
    name: string,
    insuranceValid: boolean,
    overallScore: number,
    totalReviews: number
}

export function AgencyOverviewCard({id, name, insuranceValid, overallScore, totalReviews}: IAgencyOverviewCard) {
    return (
        <Grid container rowSpacing={1}
              columnSpacing={{xs: 0}}
              marginLeft={{md: "auto"}}
              marginRight={{md: "auto"}}
              maxWidth={{md: 960}}>
            <Grid item xs={8}>
                <Typography sx={{m: 2}}
                            variant="h3"
                            align="center"
                            color="text.primary"
                            gutterBottom
                            fontWeight="bold"
                > {name}
                </Typography>
            </Grid>
            <Grid item xs={2}>
                <Typography sx={{m: 2}}
                            variant="body2"
                            align="right"
                            color="text.primary"
                > INSURANCE <br/> {+insuranceValid ? "VALID" : "INVALID"}
                </Typography>
            </Grid>
            <Grid item xs={2}>
                {insuranceValid ? <DoneOutlineIcon/> : <CancelOutlinedIcon/>}
            </Grid>
            <Grid item xs={4} container direction="column" paddingRight={4} justifyContent={"flex-start"}
                  alignItems={"flex-end"} marginTop={3}>
                {/*TODO: fix href*/}
                <Button href={`/doctor/${id}`} variant='contained' color={'primary'}
                        size={"large"}>DETAIL</Button>
            </Grid>
            <Grid item xs={8}>
                <Rating name="main-rating" value={overallScore} precision={0.5} readOnly
                        sx={{color: "primary.main"}}/>
                <Typography sx={{m: 2}}
                            variant="body2"
                            align="left"
                            color="text.primary"
                >based on {totalReviews} reviews
                </Typography>
            </Grid>
            <Grid item xs={4} container direction="column" paddingRight={4} justifyContent={"flex-start"}
                  alignItems={"flex-end"} marginTop={3}>
                {/*TODO: fix href*/}
                <Button href={`/doctor/${id}`} variant='contained' color={'primary'}
                        size={"large"}>DETAIL</Button>
            </Grid>
        </Grid>
    )
}

