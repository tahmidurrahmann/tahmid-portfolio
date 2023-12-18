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

function Navbar(props) {

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const navLinks = <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-6 font-permanent">
        <Link to="home" spy={true}
            smooth={true}
            offset={50}
            duration={500} className="hover:text-[#c60678] mt-6 md:mt-0">Home</Link>
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

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center'}}>
            <Typography sx={{ my: 2 }}>
            <div className='font-permanent text-3xl text-black flex items-center justify-center'><img className="w-[60px]" src="https://i.ibb.co/3BPbCfh/21904da7d079ccffa6b95ecfc6f7bbb7-1.png" alt="" />Tahmid</div>
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
                <Container maxWidth="xl">
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
                            <div className='font-permanent text-3xl text-white flex items-center'><img className="w-[60px]" src="https://i.ibb.co/3BPbCfh/21904da7d079ccffa6b95ecfc6f7bbb7-1.png" alt="" />Tahmid</div>
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

export default Navbar;