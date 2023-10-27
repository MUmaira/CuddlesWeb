import React from "react";

const cardStyle = {
  backgroundColor: "white",
  border: "1px solid lightgrey",
  borderRadius: "15px",
  width: "300px",
  height: "120px",
  display: "flex",
  alignItems: "center",
  padding: "20px",
  boxShadow: "3px 3px 3px 0px lightgrey",
  marginLeft: '200px'
};

const leftStyle = {
  flex: 1,
  marginRight: "10px",
  textAlign: "left",
};

const rightStyle = {
  textAlign: "right",
  display: "flex",
  justifyContent: "flex-end",
};

const buttonStyle = {
  backgroundColor: "#32de02",
  color: "white",
  fontSize: "12px",
  borderRadius: "50%",
  width: "20px",
  height: "20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
};

const topStyle = {
  flex: 3,
  display: "flex",
  alignItems: "center",
};

const bottomStyle = {
  flex: 1,
  display: "flex",
  justifyContent: "flex-end",
  padding: "0px",
};

const ScheduleCard = () => {
  return (
    <div style={cardStyle}>
      <div style={leftStyle}>
        <p style={{ fontWeight: "bold", fontSize: "14px" }}>Name</p>
        <p style={{ fontSize: "14px" }}>Details</p>
        <p>Tests</p>
      </div>
      <div style={rightStyle}>
        <div style={topStyle}></div>
        <div style={bottomStyle}>
          <p
            style={{
              alignSelf: "flex-end",
              fontSize: "12px",
              marginRight: "10px",
            }}
          >
            Completed
          </p>
          <div style={buttonStyle}>
            <span>✔</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleCard;
