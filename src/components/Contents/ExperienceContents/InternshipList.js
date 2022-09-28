import React from "react";
import classes from "./InternshipList.module.css";

const InternshipList = () => {
  return (
    <React.Fragment>
      <div className={classes.control__intern}>
        <div className={classes.rowintern}>
          <span className={classes.column_1}>
            <img src="https://logo.clearbit.com/quantiphi.com?size=100" />
            <h2>Platform Engineer</h2>
            <h4>July 2021 - November 2021</h4>
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
              ec2 instances and EMR issues.
            </p>
          </span>
          {/* <span className={classes.column_2}>
            <img src="https://logo.clearbit.com/peacocksolar.com?size=100" />
            <h2>Data Analyst</h2>
            <h3>
              <a target="_blank" href="https://www.peacocksolar.com/">
                Peacock Solar
              </a>
            </h3>
            <p>
              Trained on AWS cloud with its basic features like managing
              flexibility, cost-effectiveness(pay-as-you-go),
              scalibility(auto-scaling and load-balancing) and security.
              Hands-on experience on AWS tools which includes troubleshooting of
              ec2 instances and EMR issues.
            </p>
          </span> */}
          <span className={classes.column_2}>
            <img src="https://logo.clearbit.com/brainsaas.com?size=100" />
            <h2>Software Engineer</h2>
            <h4>November 2020 - December 2020</h4>
            <h3>
              <a target="_blank" href="http://www.brainsaas.com/">
                Brainsaas Technologies Pvt. Ltd.
              </a>
            </h3>
            <h5>Remote</h5>
            <p>
              Trained on AWS cloud with its basic features like managing
              flexibility, cost-effectiveness(pay-as-you-go),
              scalibility(auto-scaling and load-balancing) and security.
              Hands-on experience on AWS tools which includes troubleshooting of
              ec2 instances and EMR issues.
            </p>
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default InternshipList;
