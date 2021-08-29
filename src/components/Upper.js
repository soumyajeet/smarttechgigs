import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


//import Onlinetools from './Onlinetools';
// import Assetlibrary from './Assetlibrary';

const Onlinetools = React.lazy(() => import('./Onlinetools'));
const Assetlibrary = React.lazy(() => import('./Assetlibrary'));

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}




const Upper = (props) => {

    
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (


        <div className="container-fluid">
            <div className="container p-3">
                <div className="row">
                    <AppBar position="static" color="default">
                        <Tabs
                            selectionFollowsFocus
                            value={value}
                            onChange={handleChange}
                            indicatorColor="secondary"
                            textColor="secondary"
                            variant="fullWidth"
                            aria-label="Main menu"
                        >
                            <Tab label="Web Hosting" {...a11yProps(0)} />
                            <Tab label="Asset Library" {...a11yProps(1)} />
                            

                        </Tabs>
                    </AppBar>
                    <SwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={value}
                        onChangeIndex={handleChangeIndex}
                    >
                        <TabPanel value={value} index={0} dir={theme.direction}>
                            <Suspense fallback={<div>Loading Hostings...</div>}>
                                <Onlinetools />
                            </Suspense>
                        </TabPanel>
                        <TabPanel value={value} index={1} dir={theme.direction}>
                            <Suspense fallback={<div>Loading Assets...</div>}>
                                <Assetlibrary />
                            </Suspense>
                        </TabPanel>
                        

                    </SwipeableViews>
                </div>
            </div>
        </div>





    )
}



export default Upper;