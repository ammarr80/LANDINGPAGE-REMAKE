function CheckedBox() {
  return (
    <div
      style={{
        display: "inline-block",
        width: "14px",
        height: "14px",
        border: "2px solid white",
        borderRadius: "50%",       // perfectly round
        backgroundColor: "white",  // white background
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "5px",
          height: "10px",
          bottom: "8px",
          border: "solid black",
          borderWidth: "0 1.5px 1.5px 0",
          top: "-2.5px",
          left: "4px",
          transform: "rotate(45deg)",
        }}
      />
    </div>
  );
}

export default CheckedBox;
