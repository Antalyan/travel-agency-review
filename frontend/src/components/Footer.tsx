import Typography from "@mui/material/Typography";
import * as React from "react";
import Box from "@mui/material/Box";
import {GRADIENT} from "../utils/data";

function Copyright(props: any) {
    return (
        <Typography variant="body2" align="center" color={"common.black"} {...props}>
            {'©'}
            {new Date().getFullYear()}
            {" ZOMPER company"}
        </Typography>
    );
}

export function Footer() {
    return <Box
        component="footer"
        sx={{
            mt: 2,
            py: [2, 2],
            background: GRADIENT
        }}
    >
        <Copyright/>
    </Box>;
}
