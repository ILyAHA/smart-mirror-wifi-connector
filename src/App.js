import React from "react";
import "./styles.css";
import { TextField } from "@material-ui/core";
import QRCode from "qrcode.react";
import Typography from "@material-ui/core/Typography";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      networkName: "error",
      networkPassword: "error"
    };
  }

  qrString() {
    return `SMART-MIRROR-WIFISETTINGS:NETWORK="${this.state.networkName}"&PASSWORD="${this.state.networkPassword}"`;
  }

  handleChangeName(e) {
    this.setState({ networkName: e.target.value });
  }

  handleChangePassword(e) {
    this.setState({ networkPassword: e.target.value });
  }

  isValidQRCode() {
    return this.state.networkName && this.state.networkName !== "error";
  }

  render() {
    return (
      <div className="App">
        <div id="qrCode">
          {this.isValidQRCode() ? (
            <QRCode value={this.qrString()} size="192" />
          ) : (
            <Typography component="h1" variant="h5">
              Начните вводить название Wifi сети
            </Typography>
          )}
        </div>
        <form noValidate autoComplete="off">
          <div>
            <TextField
              label="Навание сети"
              onChange={this.handleChangeName.bind(this)}
            />
          </div>
          <div>
            <TextField
              label="Пароль"
              type="password"
              onChange={this.handleChangePassword.bind(this)}
            />
          </div>
        </form>
      </div>
    );
  }
}
