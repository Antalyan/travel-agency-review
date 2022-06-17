import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import * as React from "react";
import {Control, Controller} from "react-hook-form";
import {COUNTRIES} from "../../utils/Countries";
import {SxProps} from "@mui/material";

export interface ICountrySelectProps {
    control: Control<any, any>,
    size: "small" | "medium" | undefined,
    sx?: SxProps
}

export function CountryController({control, size, sx}: ICountrySelectProps) {
    return (
        <Controller
            render={(props) => (
                <Autocomplete
                    {...props}
                    id="country-select"
                    sx={sx}
                    options={COUNTRIES}
                    autoHighlight
                    getOptionLabel={(option) => option.label}
                    renderOption={(props, option) => (
                        <Box component="li" sx={{'& > img': {mr: 2, flexShrink: 0}}} {...props}>
                            <img
                                loading="lazy"
                                width="20"
                                src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                                srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                                alt=""
                            />
                            {option.label}
                        </Box>
                    )}
                    onChange={(_, data) => props.field.onChange(data)}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            name={"destination"}
                            size={size}
                            label="Destination"
                            inputProps={{
                                ...params.inputProps,
                                autoComplete: 'new-password', // disable autocomplete and autofill
                            }}
                        />
                    )}
                />
            )}
            name={"destination"}
            control={control}
        />)
}

export function CountrySelect() {
    return (
        <Autocomplete
            id="country-select"
            sx={{width: 200}}
            options={COUNTRIES}
            autoHighlight
            getOptionLabel={(option) => option.label}
            renderOption={(props, option) => (
                <Box component="li" sx={{'& > img': {mr: 2, flexShrink: 0}}} {...props}>
                    <img
                        loading="lazy"
                        width="20"
                        src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                        srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                        alt=""
                    />
                    {option.label}
                </Box>
            )}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Choose a country"
                    inputProps={{
                        ...params.inputProps,
                        autoComplete: 'new-password', // disable autocomplete and autofill
                    }}
                />
            )}
        />
    );
}
