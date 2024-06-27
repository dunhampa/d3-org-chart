import React from "react";
import { FaBuilding } from "react-icons/fa";

const styles = {
  nodeContainer: {
    minHeight: "150px",
    backgroundColor: "#227c9d",
    color: "#227c9d",
    display: "flex",
    justifyContent: "center",
    borderRadius: "1rem",
  },
  nodeDetails: {
    width: "100%",
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  nodeContent: {
    display: "flex",
    alignItems: "center",
  },
  nodeTeam: {
    width: "100%",
    textAlign: "center",
  },
  nodeTeamName: {
    marginBottom: "0.5rem",
    color: "#fef9ef",
    fontSize: "1.5rem",
  },
  nodeImg: {
    width: "90px",
    height: "90px",
    borderRadius: "1rem",
  },
  nodeInfo: {
    marginLeft: "1.5rem",
    color: "#fef9ef",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  nodeName: {
    paddingBottom: "0.3rem",
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  nodeRole: {
    paddingBottom: "0.5rem",
    fontSize: "1.2rem",
  },
  nodeDepartment: {
    padding: "0.5rem",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    backgroundColor: "#ffcb77",
    borderRadius: "1rem",
    color: "#227c9d",
  },
  icon: {
    marginRight: "0.5rem",
  },
};

const CustomNodeContent = (props) => {
  console.log("Props received: ", props);

  const isTeamNode = props.data.team !== "";

  return (
    <div style={styles.nodeContainer}>
      <div style={styles.nodeDetails}>
        <div style={styles.nodeContent}>
          <img
            style={styles.nodeImg}
            src={props.data.imageUrl}
            alt={isTeamNode ? "Team Profile" : "Profile"}
          />
          <div style={styles.nodeInfo}>
            <div style={styles.nodeName}>
              {isTeamNode ? props.data.team : props.data.name}
            </div>
            <div style={styles.nodeRole}>
              {isTeamNode ? "" : props.data.positionName}
            </div>
            {props.data.department && !isTeamNode && (
              <div style={styles.nodeDepartment}>
                <FaBuilding style={styles.icon} />
                <div>{props.data.department}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomNodeContent;
