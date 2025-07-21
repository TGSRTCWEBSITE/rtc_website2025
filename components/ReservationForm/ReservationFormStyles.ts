const ReservationFormStyle = {
    inputBox1: {
        border: "1px solid var(--color-gainsboro-200)",
        borderRight: "none",
        borderRadius: "var(--br-5xs) 0 0 var(--br-5xs)",
        display: "flex",
        alignItems: "center",
        position: "relative",
        padding: "var(--padding-mid) 16px var(--padding-mid) 24px",
        maxWidth: "100%",
        "@media (max-width: 1271px)": {
            borderBottom: "none",
            borderRadius: "var(--br-5xs) 0 0 0",
            width: "50%",
        },
        "@media (max-width: 750px)": {
            width: "auto",
            display: "flex",
            borderRight: "1px solid var(--color-gainsboro-200)",
            borderRadius: "var(--br-5xs) var(--br-5xs) 0 0",
        },
    },
    inputLabel: {
        fontSize: "var(--font-size-xl)",
        lineHeight: "17.07px",
        fontWeight: 400,
        fontFamily: "var(--font-montserrat)",
        color: "var(--color-gray)",
        left: "-14px",
        marginTop: "0px",
        '&.Mui-focused': {
            color: 'green',
        },
    },
    inputlabel1: {
        paddingTop: "3px",
        paddingLeft: "10px",
        fontSize: "var(--font-size-xl)",
        lineHeight: "17.07px",
        fontWeight: 400,
        fontFamily: "var(--font-montserrat)",
        color: "var(--color-gray)",
        "@media (max-width: 1271px)": {
            paddingLeft: "13px",
        },
        "@media (max-width: 750px)": {
            paddingLeft: "0px",
        },
        "@media (max-width: 450px)": {
            left: "-15px",
        },
        "&.Mui-focused": {
            color: "green",
        },
    },
    select1: {
        marginTop: "12.1px",
        ".MuiOutlinedInput-notchedOutline": {
            border: "none",
        },
        ".MuiSelect-icon": {
            top: "calc(50% - 12px)",
        },
        " .MuiSelect-select.MuiSelect-outlined.MuiInputBase-input.MuiOutlinedInput-input":
        {
            fontSize: "var(--font-size-base)",
            lineHeight: "19.6px",
            fontWeight: 500,
            fontFamily: "var(--font-montserrat)",
        },
        ".MuiSelect-select.MuiInputBase-input.MuiOutlinedInput-input":
        {
            paddingRight: "0px",
        },
        ".MuiSelect-select": {
            padding: "0px !important",
            height: "24px",
        },
    },
    select2: {
        marginTop: "12.1px",
        fontSize: "var(--font-size-base)",
        lineHeight: "19.6px",
        fontWeight: 500,
        fontFamily: "var(--font-montserrat)",
        ".MuiOutlinedInput-notchedOutline": {
            border: "none",
        },
        ".MuiSelect-icon": {
            top: "calc(50% - 12px)",
        },
        ".MuiSelect-select.MuiInputBase-input.MuiOutlinedInput-input":
        {
            paddingRight: "0px",
        },
        " .MuiSelect-select.MuiSelect-outlined.MuiInputBase-input.MuiOutlinedInput-input":
        {
            fontSize: "var(--font-size-base)",
            lineHeight: "19.6px",
            fontWeight: 500,
            fontFamily: "var(--font-montserrat)",
        },
        ".MuiSelect-select": {
            padding: "0px !important",
            height: "24px",
        },
    },
    inputBox3: {
        borderRadius: " 0 var(--br-80xl) var(--br-80xl) 0",
        border: "1px solid var(--color-gainsboro-200)",
        gap: "25px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        "@media (max-width: 1271px)": {
            borderRight: "1px solid var(--color-gainsboro-200)",
            borderRadius: " 0  0 var(--br-5xs) var(--br-5xs) ",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
        },
    },
    inputBox4: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "25px",
        "@media (max-width: 750px)": {
            flexDirection: "row",
            paddingBottom: "12px",
            paddingTop: "12px",
            paddingRight: "12px",
            paddingLeft: "12px",
        },
        "@media (max-width: 630px)": {
            flexDirection: "column",
            width: "100%",
            gap: "0px",
        },
    },
    datePicker: {
        marginTop: "15px",
        padding: "0",
        paddingLeft: "21px",
        paddingTop: "14px",
        width: "210px",
        ".MuiOutlinedInput-notchedOutline": {
            border: "none",
        },
        ".MuiInputBase-root": {
            padding: "0 !important",
            fontSize: "var(--font-size-base)",
            lineHeight: "19.6px",
            fontWeight: 500,
            fontFamily: "var(--font-montserrat)",
        },
        ".MuiInputBase-input": {
            padding: "0 !important",
        },
        "@media (max-width: 1271px)": {
            paddingLeft: "24px",
        },
        "@media (max-width: 750px)": {
            paddingLeft: "13px",
            width: "256px",
        },
        "@media (max-width: 450px)": {
            display: "flex",
            paddingLeft: "0px",
            justifyContent: "space-between",
        },
        "@media (max-width: 353px)": {
            width: "100%",
        },
        '&.Mui-focused': {
            color: 'green',
        },
    },
    box: {
        width: "100%",
        display: "flex",
        gap: "6px",
        alignItems: "center",
        justifyContent: "center",
        "@media (max-width: 450px)": {
            justifyContent: "space-between",
        },
    },

    box2: {
        display: "flex",
        gap: "25px",
        alignItems: "center",
        justifyContent: "center",
        "@media (max-width: 1271px)": {
            paddingRight: "20px",
        },
        "@media (max-width: 791px)": {
            display: "none",
        },
    },
    box3: {
        width: "100%",
        display: "none",
        "@media (max-width: 791px)": {
            display: "flex",
        },
    },

};
export default ReservationFormStyle;