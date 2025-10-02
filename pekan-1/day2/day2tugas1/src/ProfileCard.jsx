function ProfileCard(props) {
  const boxStyle = {
    marginLeft: "450px",
    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateArrows: "1fr 1fr 1fr 1fr",
    border: "1px solid black",
    borderRadius: "20px",
    backgroundColor: "purple",
    justifyContent: "center",
  };
  return <div style={boxStyle}>{props.children}</div>;
}
export default ProfileCard;
