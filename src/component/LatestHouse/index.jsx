import React from "react";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './index.css'
import CarosuaelLatestHouse from "./carousol";
import LatestTrends from "../Carosuael/LatestTrends";

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

function LatestHouse() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return ( 
        <>
        <div className="p-5">
           <div>
              <h3 className="ttl">Latest Trends In House And Home Designs</h3>
              <div class="ttl-brdr">
                <div class="innr-ttl-brdr"></div>
              </div>
           </div>
          <Box sx={{ width: '100%' }} className='mt-4'>
              <Box sx={{ }}>
                <Tabs value={value} onChange={handleChange}  className="template_Tab p-0" aria-label="basic tabs example">
                  <Tab className="mt-4" label="By Area" {...a11yProps(0)} />
                  <Tab className="mt-4" label="By BHK" {...a11yProps(1)} />
                  <Tab className="mt-4" label="By Direction" {...a11yProps(2)} />
                  <Tab className="mt-4" label="By Loaction" {...a11yProps(3)} />
                </Tabs>
              </Box>
              <CustomTabPanel className='custom_body' value={value} index={0}>
                <LatestTrends/>
              </CustomTabPanel>
              <CustomTabPanel className='custom_body' value={value} index={1}>
                <CarosuaelLatestHouse/>
              </CustomTabPanel>
              <CustomTabPanel className='custom_body' value={value} index={2}>
                <CarosuaelLatestHouse/>
              </CustomTabPanel>
              <CustomTabPanel className='custom_body' value={value} index={3}>
              <CarosuaelLatestHouse/>
              </CustomTabPanel>
          </Box>
       </div>
        </>
     );
}

export default LatestHouse;