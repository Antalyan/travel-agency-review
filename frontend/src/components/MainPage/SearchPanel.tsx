import {Controller, useForm} from "react-hook-form";
import {Box, IconButton, TextField} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import * as React from "react";
import {useState} from "react";
import {FilterList} from "@mui/icons-material";
import Menu from "@mui/material/Menu";
import {FilterMenu} from "./FilterMenu";

type mainFilter = { name?: string, destination?: string, travelType?: string }

export interface IPanelSetter {
    filter: mainFilter;
    setFilter: React.Dispatch<React.SetStateAction<mainFilter>>
}

export function SearchPanel({filter, setFilter}: IPanelSetter) {
    const {control, handleSubmit} = useForm<{name: string}>()

    const onSubmit = handleSubmit((formData: { name: string }) => {
        setFilter({
            name: formData.name,
            destination: filter.destination,
            travelType: filter.travelType
        });
    })

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <form onSubmit={onSubmit}>
            <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"} marginLeft={{md: "auto"}}
                 marginRight={{md: "auto"}} maxWidth={{md: 960}}>
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
                            size="small" sx={{marginLeft: 2, width: "80%"}}
                        />
                    )}
                />
                <IconButton type="submit">
                    <SearchIcon sx={{fill: "blue", fontSize: "100%", padding: 0}}/>
                </IconButton>
                <IconButton
                    size="large"
                    aria-label="filter area"
                    aria-controls="menu-filter"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                >
                    <FilterList fontSize="medium"/>
                </IconButton>
                <Menu
                    id="menu-filter"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <FilterMenu filter={filter} setFilter={setFilter}/>
                </Menu>
            </Box>
        </form>
    )
}
