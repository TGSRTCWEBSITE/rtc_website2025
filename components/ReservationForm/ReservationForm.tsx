import React, { useState } from "react";
import {
  InputLabel,
  MenuItem,
  Select,
  FormControl,
  Box,
  Button,
} from "@mui/material";
import styles from "./ReservationForm.module.css";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  LocalizationProvider,
  DesktopDatePicker,
} from "@mui/x-date-pickers";
import dayjs from "dayjs";
import ReservationFormStyle from "./ReservationFormStyles";
import {
  FROM_LABEL,
  TO_LABEL,
  INTERCITY,
  INTRACITY,
  ROUND_TRIP,
  SEARCH_BUSSES,
  TODAY_LABEL,
  TOMMAROW_LABEL,
  SEARCH_BUSES_LINK,
} from "../../constants"
import { NextPage } from "next";

export type BookYourTicketType = {
  className?: string;
  routes: { from: string; to: string }[];
  onRouteSelect: (from: string, to: string) => void;
  selectedTo: string;
  selectedFrom: string;
};

const buttons = [
  { label: TODAY_LABEL, style: styles.button1 },
  { label: TOMMAROW_LABEL, style: styles.button1 },
];

const ReservationForm: NextPage<BookYourTicketType> = ({
  routes,
  onRouteSelect,
  selectedFrom,
  selectedTo,
}) => {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [isClicked, setIsClicked] = useState(false);

  // from input logic

  const handleFromChange = (event: any) => {
    onRouteSelect(event.target.value, selectedTo);
  };

  // to input logic

  const handleToChange = (event: any) => {
    onRouteSelect(selectedFrom, event.target.value);
  };

  // swapping icon logic

  const handleExchange = () => {
    setIsClicked(!isClicked);
    onRouteSelect(selectedTo, selectedFrom);
  };

  // default date logic

  const handleDateChange = (newValue: any) => {
    setSelectedDate(newValue);
  };


  // today button date logic

  const handleTodayClick = () => {
    setSelectedDate(dayjs());
  };

  // tommarow button date logic

  const handleTomorrowClick = () => {
    setSelectedDate(dayjs().add(1, "day"));
  };

  return (
    <div className={styles.bookYourTicketFormTabs}>
      <div className={styles.searchTabsContainer}>
        <div className={styles.searchTabs}>
          <button className={styles.cityToCityBus} type="button">
            <img
              className={styles.icons}
              alt="Intercity Icon"
              src="/icons.svg"
              loading="lazy"
            />
            <b className={styles.intercity}>{INTERCITY}</b>
          </button>
          <button className={styles.cityToCityBus1} type="button">
            <img
              className={styles.icons1}
              alt="Intracity Icon"
              src="/icons-1.svg"
              loading="lazy"
            />
            <div className={styles.intracity}>{INTRACITY}</div>
          </button>
        </div>
      </div>
      <div className={styles.bookYourTicketForm}>
        <Box className={styles.container}>
          <Box className={styles.inputContainer}>
            <Box className={styles.inputBox1}>
              <FormControl className={styles.formControl}>
                <InputLabel
                  sx={ReservationFormStyle.inputLabel}
                  id="from-label"
                >
                  {FROM_LABEL}
                </InputLabel>
                <Select
                  labelId="from-label"
                  id="from-select"
                  value={selectedFrom}
                  label="from"
                  onChange={handleFromChange}
                  IconComponent={(props) => (
                    <img
                      src="/icons-2.svg"
                      alt="Image Description"
                      {...props}
                      loading="lazy"
                    />
                  )}
                  sx={ReservationFormStyle.select1}
                >
                  {routes.map((location) => (
                    <MenuItem key={location.from} value={location.from} className={styles.menuStyles}>
                      {location.from}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Button className={styles.exchangeIcon} onClick={handleExchange}>
                <img loading="lazy" alt="exchange icon" src="/exchange.svg" />
              </Button>
            </Box>
            <Box className={styles.inputBox2}>
              <FormControl className={styles.formControl}>
                <InputLabel id="to-label" sx={ReservationFormStyle.inputLabel}>
                  {TO_LABEL}
                </InputLabel>
                <Select
                  labelId="to-label"
                  id="to-select"
                  value={selectedTo}
                  label="to"
                  onChange={handleToChange}
                  // IconComponent={(props) => (
                  //   <img
                  //     src="/icons-2.svg"
                  //     alt="Image Description"
                  //     {...props}
                  //     loading="lazy"
                  //   />
                  // )}
                  sx={ReservationFormStyle.select2}
                >
                  {routes
                    .filter((location) => location.to !== selectedFrom)
                    .map((location) => (
                      <MenuItem key={location.to} value={location.to} className={styles.menuStyles}>
                        {location.to}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            </Box>
          </Box>
          <Box className={styles.inputBox3}>
            <Box className={styles.inputBox4}>
              <Box className={styles.inputBox5}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DesktopDatePicker
                    value={selectedDate}
                    onChange={handleDateChange}
                    format="DD-MM-YYYY"
                    sx={ReservationFormStyle.datePicker}
                    slotProps={{
                      textField: {
                        size: "medium",
                        fullWidth: false,
                        required: false,
                        autoFocus: false,
                        error: false,
                        color: "primary",
                        placeholder: "Date",
                        InputProps: {
                          className: styles.datePickerInputProps,
                        },
                        InputLabelProps: {
                          sx: ReservationFormStyle.inputlabel1,
                        },
                      },
                      openPickerIcon: {
                        component: () => (
                          <img
                            className={styles.datePickerIcon}
                            src="/date-icon.svg"
                            alt="Date Picker Icon"
                            loading="lazy"
                          />
                        ),
                      },
                      openPickerButton: {
                        className: styles.iconButton,
                      },
                    }}
                    label="Date"
                  />
                </LocalizationProvider>
              </Box>
              <Box className={styles.box}>
                {buttons.map((button, index) => (
                  <Button
                    key={button.label}
                    variant="contained"
                    className={button.style}
                    onClick={
                      index === 0 ? handleTodayClick : handleTomorrowClick
                    }
                  >
                    {button.label}
                  </Button>
                ))}
              </Box>
            </Box>
            <Box className={styles.box2}>
              <a className={styles.button} href={SEARCH_BUSES_LINK} target="_blank">
                <b className={styles.applyNow}>{SEARCH_BUSSES}</b>
              </a>
            </Box>
          </Box>
        </Box>
        <div className={styles.checkboxField}>
          <input className={styles.frameInput} type="checkbox" />
          <div className={styles.iWantTo}>{ROUND_TRIP}</div>
        </div>
        <Box className={styles.box3}>
          <button className={styles.button}>
            <b className={styles.applyNow}>{SEARCH_BUSSES}</b>
          </button>
        </Box>
      </div>
    </div>
  );
};

export default ReservationForm;