import React, { useState, SyntheticEvent } from "react";
import {
  Box,
  Tabs,
  Tab,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import MunchintalaTab from "../munchitala-tab";
import HyderabadTab from "../hyderabad-tab";
import YadagiriguttaTab from "../yadagirigutta-tab";
import AirPortPushpak from "../airport-pushpak-tab";
import styles from "./index.module.css";
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      style={{ width: "100%" }}
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
interface TabsData {
  data: any;
}
const ReservationBusesTabs: React.FC<TabsData> = ({ data }) => {
  const tabsData = [
    {
      label: "Airport Pushpak",
      component: (
        <AirPortPushpak
          airportPushpakParagraph1={data?.airPushpakFirstParagraph}
          airportPushpakParagraph2={data?.airPushpakSecondParagraph}
          airportPushpakTableHeading={data?.airPushpakTimingsTableDataHeading}
          airportPushpakTableData={data?.airportPushpakData}
          tgstrcMiyapurText={data?.tgstrcMiyapurText}
          tgsrtcAirPortPushpakBusTimingsHeading={
            data?.tgsrtcAirPortPushpakBusTimingsHeading
          }
          airPortPushpakBustimingsTowardsRGIAData={
            data?.airPortPushpakBustimingsTowardsRGIAData
          }
          airPushpakBusPointControllersTableHeading={
            data?.airPushpakBusPointControllersTableHeading
          }
          airPushpakBusPointControllers={data?.airPushpakBusPointControllers}
          pushpakBusTimingsFromRGIAHeading={
            data?.pushpakBusTimingsFromRGIAHeading
          }
          pushpakBusTimingsFromRGIAData={data?.pushpakBusTimingsFromRGIAData}
        />
      ),
    },
    {
      label: "Muchintala",
      component: (
        <MunchintalaTab
          munchintalaParagraph1={data?.munchintalaFirstParagraph}
          munchintalaParagraph2={data?.munchintalaSecondParagraph}
          munchintalaTableHeading={data?.munchintalaTableHeading}
          munchintalaTablData={data?.munchintalaData}
        />
      ),
    },
    {
      label: "Hyderabad to Yadagirigutta",
      component: (
        <HyderabadTab
          yadagiriguttaFirstParagraph={data?.yadagiriguttaFirstParagraph}
          yadagiriguttaSecondParagraph={data?.yadagiriguttaSecondParagraph}
          yadagiriguttaThirdParagraph={data?.yadagiriguttaThirdParagraph}
          yadagiriguttaTableHeading={data?.yadagiriguttaTableHeading}
          yadagiriguttaData={data?.hyderabadData}
          jbsToYadadriTableData={data?.jbsToYadadriTableData}
          jbsToYadagiriguttaTableHeading={data?.jbsToYadagiriguttaTableHeading}
        />
      ),
    },
    {
      label: "Yadagirigutta to Hyderabad",
      component: (
        <YadagiriguttaTab
          hyderabadTableHeading={data?.hyderabadTableHeading}
          hyderabadData={data?.yadagiriguttaData}
          yadagiriguttaToJBSTableHeading={data?.yadagiriguttaToJBSTableHeading}
          yadagiriguttaToJBSdata={data?.yadagiriguttaToJBSdata}
        />
      ),
    },
  ];
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleSelectChange = (event: SelectChangeEvent<number>) => {
    setValue(event.target.value as number);
  };

  return (
    <Box
      sx={{
        width: "100%",
        "&.MuiTabs-root": {
          width: "100%",
        },
      }}
    >
      <div className={styles.muiTabs}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            TabIndicatorProps={{
              style: {
                backgroundColor: "#09843E",
                border: "1px solid #09843E",
              },
            }}
            sx={{
              "&.MuiTabs-root": {
                width: "100%",
              },
              marginTop: "24px",
              ".MuiTabs-flexContainer": {
                display: "flex",
                justifyContent: "space-between",
              },
            }}
          >
            {tabsData.map((tab, index) => (
              <Tab
                className={styles.muiTabssection}
                sx={{
                  flex: 1,

                  width: "295px",
                  fontSize: 16,
                  fontWeight: 500,
                  fontFamily: "var(--font-montserrat)",
                  lineHeight: 0,
                  textAlign: "left",
                  textTransform: "none",
                  color: "#4D4D4D",
                  textColor: "#4D4D4D",
                  indicatorColor: "#4D4D4D",
                  ariaLabel: "secondary tabs example",
                  marginTop: "-11px",
                  "&.Mui-selected": {
                    color: "#CD342B !important",
                    fontWeight: 700,
                  },
                }}
                key={index}
                label={tab.label}
                {...a11yProps(index)}
              />
            ))}
          </Tabs>
        </Box>
        {tabsData.map((tab, index) => (
          <CustomTabPanel key={index} value={value} index={index}>
            {tab.component}
          </CustomTabPanel>
        ))}
      </div>
      <div className={styles.muiForm}>
        <FormControl fullWidth>
          <InputLabel id=""></InputLabel>
          <Select
            labelId=""
            id=""
            value={value}
            label=""
            sx={{
              borderRadius: "6px",
              fontFamily: "var(--font-playfair-display)",
              fontSize: 16,
              fontWeight: 500,
              backgroundColor: "#FFFFFF",
              textAlign: "left",
              boxShadow: "0px 4px 10px 0px #E8E8E8",
            }}
            onChange={handleSelectChange}
          >
            {tabsData.map((tab, index) => (
              <MenuItem key={index} value={index} sx={{
                ...(value === index && {
                  backgroundColor: "var(--primary-green) !important",
                  color: "white",
                })
              }}>
                {tab.label}
              </MenuItem>
            ))}
          </Select>
          {tabsData.map((tab, index) => (
            <CustomTabPanel key={index} value={value} index={index}>
              <div style={{ paddingTop: "24px" }}>{tab.component}</div>
            </CustomTabPanel>
          ))}
        </FormControl>
      </div>
    </Box>
  );
};

export default ReservationBusesTabs;
