import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {  Container } from '@mui/material';
import { Link } from 'react-scroll';

const drawerWidth = 240;

function Navbarr(props) {

    const navLinks = <div className="flex flex-col md:flex-row justify-center items-center gap-5">
        <Link to="home" spy={true}
            smooth={true}
            offset={50}
            duration={500} className="hover:text-[#c60678]">Home</Link>
        <Link to="about" spy={true}
            smooth={true}
            offset={50}
            duration={500} className="hover:text-[#c60678]">About</Link>
        <Link to="skills" spy={true}
            smooth={true}
            offset={50}
            duration={500} className="hover:text-[#c60678]">Skills</Link>
        <Link to="projects" spy={true}
            smooth={true}
            offset={50}
            duration={500} className="hover:text-[#c60678]">Projects</Link>
        <Link to="education" spy={true}
            smooth={true}
            offset={50}
            duration={500} className="hover:text-[#c60678]">Education</Link>
        <Link to="contact" spy={true}
            smooth={true}
            offset={50}
            duration={500} className="hover:text-[#c60678]">Contact</Link>
    </div>

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                THE GLASS HOUSE
            </Typography>
            <Divider />
            <List>
                {navLinks}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed" sx={{ backgroundColor: "#1515154D" }} component="nav">
                <Container maxWidth="2xl">
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        >
                            <img className='w-[160px]' src="https://shantaholdings.com/admin/settings_images/Shanta-holdings-logo-white-1678170808.svg" alt="" />
                        </Typography>
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            {navLinks}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
            <Box component="main">
                <Toolbar />
            </Box>
        </Box>
    );
}

export default Navbarr;
