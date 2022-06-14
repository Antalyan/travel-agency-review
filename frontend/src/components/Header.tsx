import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Link} from "@mui/material";
import Logo from "../images/logo-new.jpg"

export default function Header() {
    return (
        <AppBar position="static" sx={{
            color: 'white',
            background: 'radial-gradient(circle, rgba(225,233,238,1) 0%, rgba(0,137,255,1) 100%)'
        }}>
            <Toolbar>
                <Box sx={{flexGrow: 1, display: "flex"}} marginRight={"auto"} marginLeft={"auto"} maxWidth={960}>
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
                    <Box display="flex"
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
