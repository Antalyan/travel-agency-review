import {Control, Controller} from "react-hook-form";
import {Autocomplete, SxProps, TextField} from "@mui/material";
import * as React from "react";
import {IFilter} from "../MainPage/FilterMenu";

type AutoSelectProps = {
    control: Control<any, any>,
    name: string,
    label: string,
    size: "small" | "medium" | undefined,
    multiple?: boolean
    options: any[]
    sx?: SxProps
};

export function AutoSelect({control, name, size, label, options, multiple, sx}: AutoSelectProps) {
    return (
        <Controller
            render={(props) => (
                <Autocomplete
                    {...props}
                    multiple={multiple}
                    options={options}
                    sx={sx}
                    renderInput={(params) => <TextField {...params}
                                                        name={name}
                                                        size={size}
                                                        label={label}/>}
                    onChange={(_, data) => props.field.onChange(data)}/>
            )}
            name={name}
            control={control}
        />
    );
}
