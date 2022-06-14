import * as React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Profile from "../../images/mock_profile.jpg";
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import {Card, CardContent, Container, Rating, Stack} from "@mui/material";

export interface IAgencyOverviewCard {
    id: number,
    name: string,
    insuranceValid: boolean,
    overallScore: number,
    totalReviews: number
}

export function AgencyOverviewCard({id, name, insuranceValid, overallScore, totalReviews}: IAgencyOverviewCard) {
    return (
       <Grid container justifyContent={"center"} maxWidth={{md: 960}} marginLeft={{md: "auto"}} marginRight={{md: "auto"}}>
           <Grid item xs={11} marginBottom={2}>
               <Card>
                   <CardContent>
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
                                      {insuranceValid ? <DoneOutlineIcon sx={{color: "green"}}/> : <CancelOutlinedIcon sx={{color: "red"}}/>}
                                  </Stack>
                           </Grid>
                           <Grid item xs={8} md={10} pl={4}>
                               <Rating name="main-rating" value={overallScore} precision={0.5} readOnly
                                       sx={{color: "primary.main"}}/>
                               <Typography variant="body2"
                                           align="left"
                                           color="text.primary"
                               >based on {totalReviews} reviews
                               </Typography>
                           </Grid>
                           <Grid item xs={4} md={2} container direction="column" paddingRight={4}
                                 alignItems={"flex-end"} marginTop={1}>
                               {/*TODO: fix href*/}
                               <Button href={`/doctor/${id}`} variant='contained' color={'primary'}
                                       size={"large"}>DETAIL</Button>
                           </Grid>
                       </Grid>
                   </CardContent>
               </Card>
           </Grid>
       </Grid>
    )
}

