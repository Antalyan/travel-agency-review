import {Button, Grid, Stack, Typography} from "@mui/material";
import {useForm} from "react-hook-form";
import * as React from "react";
import {AutoSelect} from "./AutoSelect";
import {IPanelSetter} from "./SearchPanel";
import useSWR from "swr";
import {fetcher} from "../../utils/fetcher";
import CountrySelect from "../../utils/Countries";
import {TRAVEL_TYPES} from "../../utils/data";

export interface IFilter {
    destination: string,
    travelType: string,
}

export function FilterMenu({filter, setFilter}: IPanelSetter) {
    const {handleSubmit, control} = useForm<IFilter>();
    const onSubmit = (data: IFilter) => {
        console.log(data);
        setFilter({
            name: filter.name,
            destination: data.destination,
            travelType: data.travelType
        });
    }

    // TODO: update url
    const url = 'http://localhost:4000/doctors-locations'
    const {data, error} = useSWR( url, fetcher);
    if (error) console.log(error.message)
    if (!data) return <div>Loading...</div>;
    if (data) console.log(data)

    return (
        <>
            <Typography variant="h5" gutterBottom component="div" align={"center"}
                        bgcolor={"primary.main"} color={"common.white"}
                        padding={2}>
                Nastavení filtru
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={2} margin={2}>
                    <CountrySelect/>
                    <AutoSelect control={control} id="travel-type-select" name="travelType" label="Travel Type"
                                options={TRAVEL_TYPES}/>
                    <Grid container justifyContent="center">
                        <Button variant='contained' type={'submit'} color={'primary'} onSubmit={handleSubmit(onSubmit)}>
                            Nastavit
                        </Button>
                    </Grid>
                </Stack>
            </form>
        </>
    )
}


