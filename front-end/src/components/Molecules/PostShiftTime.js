import React from "react";

import TimePicker from "../Atoms/TimePicker.js";

import { HoOButton } from "../../styles/Calendar.js";
import { Segment, Portal } from "semantic-ui-react";

// TODO: add bounds to where the portal can open

class PostShiftTime extends React.Component {
  state = {
    open: false,
    clickX: 0,
    clickY: 0,
  };

  submitTimeChange(newTime) {
    const event = {
      target: {
        name: this.props.data,
        value: newTime,
      },
    };
    this.props.inputChangeHandler(event);
  }

  handleOpen = e => {
    this.setState({ open: true, clickX: e.pageX, clickY: e.pageY });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    this.submitTimeChange = this.submitTimeChange.bind(this);

    return (
      <div>
        <HoOButton onClick={this.handleOpen}>{this.props.day}</HoOButton>
        <Portal open={this.state.open} onClose={this.handleClose}>
          <Segment
            style={{
              position: "absolute",
              top: `${this.state.clickY - 230}px`,
              left: `${this.state.clickX - 354}px`,
              zIndex: 1000,
              minWidth: "120px",
            }}
          >
            <TimePicker
              handleClose={this.handleClose}
              submitTimeChange={this.submitTimeChange}
            />
          </Segment>
        </Portal>
      </div>
    );
  }
}

export default PostShiftTime;