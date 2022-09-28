import React from "react";
import classes from "./CompanyList.module.css";

const CompanyList = () => {
  return (
    <React.Fragment>
      <div className={classes.control}>
        <div className={classes.row}>
          <span className={classes.column}>
            <img src="https://logo.clearbit.com/icicibank.com?size=100" />
            <h2>Management Trainee</h2>
            <h4>April 2022 - PRESENT</h4>
            <h3>
              <a target="_blank" href="https://www.icicibank.com/">
                ICICI Bank
              </a>
            </h3>
            <h5>Hyderabad, Telangana</h5>
            <p>
              I am working here as a Management Trainee. Project work is to push
              all on-prem databases like iMobile, UPI, PCMS, iCore and Prime on
              Azure cloud to make data analytics and business more efficient.
              And for this data extraction is happening through Golden Gate(GG)
              b/w source and destination.
            </p>
          </span>
          <span className={classes.company}>
            <img src="https://logo.clearbit.com/quantiphi.com?size=100" />
            <h2>Platform Engineer</h2>
            <h4>November 2021 - April 2022</h4>
            <h3>
              <a target="_blank" href="https://www.quantiphi.com/">
                Quantiphi Inc.
              </a>
            </h3>
            <h5>Remote</h5>
            <p>
              Trained on AWS cloud with its basic features like managing
              flexibility, cost-effectiveness(pay-as-you-go),
              scalibility(auto-scaling and load-balancing) and security.
              Hands-on experience on AWS tools which includes troubleshooting of
              ec2 instances and EMR issues. jsyatera
              raaaaaaaaaaaaaajejatyrejgjwegr. aewrjyjeary
            </p>
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CompanyList;
