import React from 'react';
import {makeStyles} from "@material-ui/core/styles"
import {Typography, Box} from "@material-ui/core"
import Navbar from "./Navbar";


const useStyles = makeStyles(theme=> ({
    mainContainer:{
        background: "cornflowerblue"
    },
    timeline: {
        position: "relative",
        padding: "1rem",
        margin: "0 auto",
        "&:before": {
            content: "''",
            position: "absolute",
            height: "100%",
            border: " 1px solid tan",
            right: "40px",
            top: 0
,        },
            "&:after": {
                content: "''",
                display: "table",
                clear: "both"
            },
        [theme.breakpoints.up("md")]:{
            padding: "2rem",
            "&:before": {
                left: "calc(50% - 1px)",
                right: "auto"
            }
        }
    },
    timeLineItem: {
        padding: "1rem",
        borderBottom: "2px solid tan",
        position: "relative",
        margin: "1rem 3rem  1rem  1rem",
        clear: "both",
        "&:after": {
            content: "''",
            position: "absolute"
        },
        "&:before": {
            content: "''",
            position: "absolute",
            right: "-0.625rem",
            top: "calc(50% - 5px)",
            borderStyle: "solid",
            borderColor: "tomato tomato transparent transparent",
            borderWidth: " 0.625rem",
            transform: "rotate(45deg)"

        },

        [theme.breakpoints.up("md")]: {
            width: "44%",
            margin: "1rem",
            "&:nth-of-type(2n)": {
                float: "right",
                margin: "1rem",
                borderColor: "tan",
            },
            "&:nth-of-type(2n):before": {
                right: "auto",
                left: "--0.625rem",
                borderColor: "transparent transparent tomato tomato "
            }
        }
    },
    timeLineYear: {
        textAlign: "center",
        maxWidth: " 9.375rem",
        margin: " 0 3rem 0 auto",
        fontSize: " 1.8rem",
        background: "tomato",
        color: "white",
        lineHeight: 1,
        padding: "0.5rem 0 1rem",
        "&:before": {
            display: "none"
        },
        [theme.breakpoints.up("md")]: {
            textAlign: "center",
            margin: " 0 auto",
            "&:nth-of-type(2n)": {
                float: "none",
                margin: "0 auto"
            },
            "&:nth-of-type(2n):before": {
                display: "none"
            }
        }
    },
    heading: {
        color: "red",
        padding: "3rem 0",
        textTransform: "uppercase"
    },
    subHeading: {
        color: "white",
        padding: "0",
        textTransform: "uppercase"

    },
}));

const Resume = () => {
    const classes = useStyles()
    return (
        <>
            <Navbar/>
            <Box component="header" className={classes.mainContainer} >
                <Typography variant="h4" align="center" className={classes.heading}>
                    Working Experience






                </Typography>
                <Box component="div" className={classes.timeline}>
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>2020</Typography>
                    <Box component="div" className={classes.timeLineItem}>
                    <Typography variant="h5" aligh="center"  className={classes.subHeading}>
                        Full Stack Software Engineering (Student)
                    </Typography>
                    <Typography variant="body1" aligh="center" style={{color: "white"}}>
                        General Assembly Austin,TX
                    </Typography>
                    <Typography variant="Subtitle1" aligh="center" style={{color: "black"}}>
                    General Assembly’s Software Engineering Immersive (SEI) is a 12-week long training program dedicated to give students a deep dive into the world of software engineering, focusing on web development tools and best practices. Portfolios are created with the following
                    technologies: Git/Github, HTML, CSS, JavaScript, Node, MongoDB, SQL, Python. 
                    </Typography>
                    </Box>



                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>2018-2020</Typography>
                    <Box component="div" className={classes.timeLineItem}>
                    <Typography variant="h5" aligh="center"  className={classes.subHeading}>
                        Accounting Clerk 
                    </Typography>
                    <Typography variant="body1" aligh="center" style={{color: "white"}}>
                        Eaton Fine Art Austin, TX
                    </Typography>
                    <Typography variant="Subtitle1" aligh="center" style={{color: "black"}}>
                    • Responsible for providing accounting and administrative support for accounts payable, accounts receivable, vendor processing. 
                    <br/>
                    • Process AP invoices on a weekly basis. Process AR billings per project terms. Post deposits and assist with various accounts receivable functions. Maintaining accounting records and files. Maintaining client files. Maintain client and vendor databases 
                    <br/>
                    • Shipping duties included handling of inbound and outbound shipments. Ship documents such as bill of ladings for projects. Receiving and distributing incoming packages. Prepare outgoing packages for shipping to vendor and/or client. 

                    </Typography>
                    </Box>



                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>2018</Typography>
                    <Box component="div" className={classes.timeLineItem}>
                    <Typography variant="h5" aligh="center"  className={classes.subHeading}>
                         Accounting Clerk 
                    </Typography>
                    <Typography variant="body1" aligh="center" style={{color: "white"}}>
                        US Micro Products
                    </Typography>
                    <Typography variant="Subtitle1" aligh="center" style={{color: "black"}}>
                    • Accounts Payable: Oversee the payables cycle, maintaining reports, reviewing invoices, responding to vendors, entering data into our accounting system, preparation and mail of disbursements, preparation of wire transfers, and the distribution of AP related reports including shipping, and various other AP-related tasks. 
                    <br/>
                    • Accounts Receivable: Including the receipt, organization and file of payments from customers, entering data into our accounting system, reconciliation of discrepancies, collections, bank runs, aging AR metrics, audit confirmations, and other AR-related tasks. 
                    <br/>
                    • Month-End Activities including bank reconciliations, corporate credit card program and travel expenses, and other account expenses and payables including foreign branch accounts. • Inventory Management including RMAs, reports, audits and adjustments for the warehouse staff. Other Accounting Activities including the annual processing of W9/1099 requirements. 

                    </Typography>
                    </Box>



                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>2017-2018</Typography>
                    <Box component="div" className={classes.timeLineItem}>
                    <Typography variant="h5" aligh="center"  className={classes.subHeading}>
                         Staff Accountant 
                    </Typography>
                    <Typography variant="body1" aligh="center" style={{color: "white"}}>
                        Parterre Garden Services Boston, MA
                    </Typography>
                    <Typography variant="Subtitle1" aligh="center" style={{color: "black"}}>
                    • Accounts Payable temp position: Oversee the payables cycle, maintaining reports, reviewing invoices, responding to vendors, entering data into our accounting system, preparation and mail of disbursements, preparation of wire transfers, and the distribution of AP related reports including shipping, and various other AP-related tasks. 
                    <br/>
                    • Accounts Receivable: Including the receipt, organization and file of payments from customers, entering data into our accounting system, reconciliation of discrepancies, collections, bank runs, aging AR metrics, audit confirmations, and other AR-related tasks. • Payroll including timesheet maintenance, PTO tracking and reports, benefit analysis and reports, and other payroll activities. 
                    <br/>
                    • Month-End Activities including bank reconciliations, corporate credit card program and travel expenses, and other account expenses and payables including foreign branch accounts. 

                    </Typography>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Resume
