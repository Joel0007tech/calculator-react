import React from "react";
import Heading from "./heading";

const CalcBody = {
  border: "5px solid black",
  borderRadius : "10px",
  margin: "0 auto",
  width: "fit-content",
  paddingBottom : "10px",
  borderBottomLeftRadius : "10px",
  padding : "10px",
  backgroundColor : "black"
};
const NumberSymbol = {
  display: "flex",
  flexDirection: "row",
  gap: "25px",
  border: "5px solid black",
  backgroundColor: "white",
  padding: "10px",
  paddingBottom : "20px"

};
const Number = {
  display: "flex",
  flexDirection: "column",
  border: "2px solid black",
  width: "160px",
  padding : "10px",
  backgroundColor: "black",
  borderBottomRightRadius: "10px",
  borderTopRightRadius: "10px"
};
const FirstNumberLine = {
  display: "flex",
  flexDirection: "row",
  gap: "40px",
  border: "2px solid black",
  justifyContent: "center",
};
const SecondNumberLine = {
  display: "flex",
  flexDirection: "row",
  gap: "40px",
  border: "2px solid black",
  justifyContent: "center",
};
const ThirdNumberLine = {
  display: "flex",
  flexDirection: "row",
  gap: "40px",
  border: "2px solid black",
  justifyContent: "center",
};
const Symbol = {
  display: "flex",
  flexDirection: "column",
  border: "2px solid black",
  width: "100px",
  backgroundColor: "black",
  padding : "10px",
  borderBottomLeftRadius: "10px",
  borderTopLeftRadius: "10px"
};
const FirstSymbolLine = {
  display: "flex",
  flexDirection: "row",
  gap: "40px",
  border: "2px solid black",
  justifyContent: "center",
};
const SecondSymbolLine = {
  display: "flex",
  flexDirection: "row",
  gap: "40px",
  border: "2px solid black",
  justifyContent: "center",
};
const ParagraphStyling = {
  border: "2px solid white",
  color: "black",
  backgroundColor: "white",
  width: "40px",
  textAlign: "center",
  borderRadius: "10px",
  fontSize: "25px",
  cursor: "pointer",
};
const LastItem ={
 textAlign : "center",
 display : "flex",
 margin : "0 auto"
}

function Main(params) {
  return (
    <div>
      <Heading />
      <div style={CalcBody}>
        <input
          placeholder="type here"
          style={{
            padding: "10px",
            marginTop: "15px",
            marginBottom: "15px",
            display: "flex",
            margin: "0 auto",
            width : "300px",
            border : "2px solid black",
            borderRadius : "10px"
          }}
        />
        <div style={NumberSymbol}>
          <div style={Number}>
            <div style={FirstNumberLine}>
              <p style={ParagraphStyling} >1</p>
              <p style={ParagraphStyling}>2</p>
              <p style={ParagraphStyling}>3</p>
            </div>
            <div style={SecondNumberLine}>
              <p style={ParagraphStyling}>4</p>
              <p style={ParagraphStyling}>5</p>
              <p style={ParagraphStyling}>6</p>
            </div>
            <div style={ThirdNumberLine}>
              <p style={ParagraphStyling}>7</p>
              <p style={ParagraphStyling}>8</p>
              <p style={ParagraphStyling}>9</p>
            </div>
            <div style={LastItem}>
              <p style={ParagraphStyling}>0</p>
            </div>
          </div>
          <div style={Symbol}>
            <div style={FirstSymbolLine}>
              <p style={ParagraphStyling}>+</p>
              <p style={ParagraphStyling}>-</p>
            </div>
            <div style={SecondSymbolLine}>
              <p style={ParagraphStyling}>/</p>
              <p style={ParagraphStyling}>*</p>
            </div>
            <div style={LastItem}>
              <p style={ParagraphStyling}>=</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
