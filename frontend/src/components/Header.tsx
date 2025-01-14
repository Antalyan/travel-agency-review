import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Link} from "@mui/material";
import Logo from "../images/logo-new.jpg"
import {GRADIENT, MAX_WIDTH} from "../utils/data";

export default function Header() {
    return (
        <AppBar position="static" sx={{
            color: 'white',
            background: GRADIENT
        }}>
            <Toolbar>
                <Box sx={{flexGrow: 1, display: "flex"}} marginRight={"auto"} marginLeft={"auto"} maxWidth={MAX_WIDTH}>
                    <Link href={"/"} underline="hover" marginTop={2}>
                        <img src={Logo} alt="Logo" width="60" height="60"/>
                    </Link>
                    <Typography
                        variant="h3"
                        color="black"
                        margin={2}
                    >
                        <strong>Traview</strong>
                    </Typography>
                    <Box display={{xs: "none", md: "flex"}}
                         justifyContent="center"
                         alignItems="center">
                        <Typography
                            variant="h5"
                            color="black"
                            margin={4}
                        >
                            Reviewing travel agencies
                        </Typography>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    );
};
