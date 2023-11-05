import React from "react";
import './index.css'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import {Box} from '@mui/material'
import FormHeader from "./form";
import CardForm from "./headCard";
// import { ThemeContext } from '@mui/styled-engine';


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
function FrontPage() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return ( 
        <>
            <div>
               <div className="mainImage" >
                    {/* <img src="/asset/frontPage.jpg" className="w-100" alt="" srcset="" /> */}

                   <div className="maincontainer" >
                    <div className="frontHeader " >
                        <h1  className="text-white fw-bold mt-5">अब घर बनेगा आसानी से</h1>    
                    </div>
                  <div className="row background_color">

                    <div className="frist-grey  col-12 mt-5"  >
                    <Box >
                      <div className="background_tab_padding">
      <Box sx={{ borderBottom: 1, borderColor: 'divider',background:'#DADADA',marginTop:'-40px'}} className='mx-lg-4 mx-md-2 mx-sm-1'>
        <Tabs className="builder "  value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab  label={
            <div>
          <div >
            <div className="tab_icon">
            <img src="/asset/iconHead.png" alt="Your Image" width="23" height="23" />
            </div>
           
  <span className="mt-1">2D Layout Plan</span> 
          </div>
          </div>
        }   {...a11yProps(0)} />
          <Tab  label={
            <div>
          <div >
            <div className="tab_icon">
            <img src="/asset/iconHead.png" alt="Your Image" width="23" height="23" />
            </div>
           
2D Layout Plan
          </div>
          </div>
        }   {...a11yProps(1)} />
           <Tab  label={
          <div >
            <div className="tab_icon">
            <img src="/asset/iconHead.png" alt="Your Image" width="23" height="23" />
            </div>
           
2D Layout Plan
          </div>
        }   {...a11yProps(2)} />
         <Tab  label={
          <div >
            <div className="tab_icon">
            <img src="/asset/iconHead.png" alt="Your Image" width="23" height="23" />
            </div>
           
2D Layout Plan
          </div>
        }   {...a11yProps(3)} />
         <Tab  label={
          <div >
            <div className="tab_icon">
            <img src="/asset/iconHead.png" alt="Your Image" width="23" height="23" />
            </div>
           
2D Layout Plan
          </div>
        }   {...a11yProps(4)} />
        </Tabs>
      
       
      </Box>
      </div>
      <CustomTabPanel className='tab_body'  value={value} index={0}>
       <FormHeader/>
       
      </CustomTabPanel>
      <CustomTabPanel className='tab_body' value={value} index={1}>
       <FormHeader/>
        
      </CustomTabPanel>
      <CustomTabPanel className='tab_body' value={value} index={2}>
      <FormHeader/>

      </CustomTabPanel>
      <CustomTabPanel className='tab_body' value={value} index={3}>
      <FormHeader/>

      </CustomTabPanel>
      <CustomTabPanel className='tab_body_2' value={value} index={4}>
      <CardForm/>

      </CustomTabPanel>
    </Box> 
                    </div>
                  </div>

                
                    </div>
               </div>
            </div>
        </>
     );
}

export default FrontPage;