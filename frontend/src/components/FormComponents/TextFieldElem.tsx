import {Control, Controller, ValidationRule} from "react-hook-form";
import {BaseTextFieldProps, SxProps, TextField} from "@mui/material";

interface TextFieldElemProps {
    name: string,
    label?: string,
    type: string,
    size: "small" | "medium" | undefined,
    isRequired: boolean,
    control: Control<any>,
    fullWidth?: boolean,
    multiline?: boolean,
    pattern?: ValidationRule<RegExp> | undefined,
    sx?: SxProps
}

export function TextFieldElem ({name, label, type, size, isRequired, control, fullWidth, multiline, pattern, sx}: TextFieldElemProps) {
    return <Controller
            rules={{required: isRequired, pattern: pattern}}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
                <TextField value={value}
                           type={type}
                           size={size}
                           sx={sx}
                           onChange={onChange}
                           required = {isRequired}
                           label={label}
                           fullWidth={fullWidth}
                           multiline={multiline}
                           error = {!!error}
                           helperText={error ? error.message : null}/>)}
            name={name}
            control={control}
        />
}
