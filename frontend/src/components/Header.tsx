import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Link} from "@mui/material";
import Logo from "../images/logo-new.jpg"

export default function Header() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Box sx={{flexGrow: 1, display: "flex"}} marginRight={"auto"} marginLeft={"auto"} maxWidth={960}>
                    <Link href={"/"} underline="hover" marginTop={2}>
                        <img src={Logo} alt="Logo" width="50" height="57"/>
                    </Link>
                    <Typography
                        sx={{flexGrow: 1}}
                        variant="h6"
                        color="white"
                        margin={2}
                    >
                        Traview
                    </Typography>
                </Box>
            </Toolbar>
        </AppBar>
    );
};
