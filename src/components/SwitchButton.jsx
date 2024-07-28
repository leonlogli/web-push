import { Component } from "react";

export default class SwitchButton extends Component {
  render() {
    return (
      <div className="switch-container">
        <div
          id="wonderpush-subscription-switch"
          data-on="YES"
          data-off="NO"
          data-sentence="Optin Push Notification: "
        ></div>
      </div>
    );
  }
}
