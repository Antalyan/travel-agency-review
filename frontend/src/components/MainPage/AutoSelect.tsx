import {Control, Controller} from "react-hook-form";
import {Autocomplete, TextField} from "@mui/material";
import * as React from "react";
import {IFilter} from "./FilterMenu";

type AutoSelectProps = {
    control: Control<any, any>,
    id: string,
    name: string,
    label: string,
    multiple?: boolean
    options: any[]
};

export function AutoSelect({control, id, name, label, options, multiple}: AutoSelectProps) {
    return (
        <Controller
            render={(props) => (
                <Autocomplete
                    {...props}
                    id={id}
                    multiple={multiple}
                    options={options}
                    sx={{width: 200}}
                    renderInput={(params) => <TextField {...params}
                                                        name={name}
                                                        label={label}/>}
                    onChange={(_, data) => props.field.onChange(data)}/>
            )}
            name={name}
            control={control}
        />
    );
}
