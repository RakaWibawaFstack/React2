import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/FormLogin";
import Content from "./components/Content";
/*import "./styles/App.css";
import "./styles/sass/variable.css";
import "./styles/sass/nesting.css";*/


function Wrapper(props) {
  return (
    <div>
      <Header text="Selamat Datang" name="Raka" />
      <Content>
        <Login />
      </Content>
      <Footer copy="&copy;" name="Raka" tahun="2020" />
    </div>
  );
}
export default Wrapper;
