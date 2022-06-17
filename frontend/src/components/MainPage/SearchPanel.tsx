import {Controller, useForm} from "react-hook-form";
import {Box, IconButton, TextField} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import * as React from "react";
import {useState} from "react";
import {FilterList} from "@mui/icons-material";
import Menu from "@mui/material/Menu";
import {FilterMenu} from "./FilterMenu";
import {MAX_WIDTH} from "../../utils/data";

export type mainFilter = { name?: string, destination?: string, travelType?: string }

export interface IPanelSetter {
    filter: mainFilter;
    setFilter: React.Dispatch<React.SetStateAction<mainFilter>>
}

//deprecated for now
export function SearchPanel({filter, setFilter}: IPanelSetter) {
    const {control, handleSubmit} = useForm<{name: string}>()

    const onSubmit = handleSubmit((formData: { name: string }) => {
        setFilter({
            name: formData.name,
            destination: filter.destination,
            travelType: filter.travelType
        });
    })

    return (
        <form onSubmit={onSubmit}>
            <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"} pr={4} marginLeft={{md: "auto"}}
                 marginRight={{md: "auto"}} maxWidth={{md: MAX_WIDTH}}>
                <Controller
                    control={control}
                    name="name"
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            name={'search'}
                            variant="outlined"
                            placeholder="SEARCH TRAVEL AGENCY"
                            size="small" sx={{marginLeft: 5, width: "85%"}}
                        />
                    )}
                />
                <IconButton type="submit">
                    <SearchIcon sx={{fill: "blue", fontSize: "100%"}}/>
                </IconButton>
            </Box>
        </form>
    )
}
