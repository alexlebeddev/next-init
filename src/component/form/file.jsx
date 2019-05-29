import React, { Component } from 'react';
import _ from 'lodash';

class Input extends Component {
  state = {
    valueString: null,
  }

  onChange = (e) => {
    e.preventDefault();
    this.setState({
      valueString: _.values(e.target.files).map(file => file.name).join(', '),
    });
    this.props.input.onChange(e);
  }

  render() {
    const field = this.props;

    return (
      <div>
        <div className="input-group">
          <div className="custom-file">
            <input
              type="file"
              className="custom-file-input"
              id="inputGroupFile01"
              aria-describedby="inputGroupFileAddon01"
              multiple={field.multiple}
              onChange={this.onChange}
              onBlur={field.input.onBlur}
              onDrop={field.input.onDrop}
              onFocus={field.input.onFocus}
              onDragStart={field.input.onDragStart}
            />
            <label className="custom-file-label" htmlFor="inputGroupFile01">
              {this.state.valueString || 'Choose file'}
            </label>
          </div>
        </div>
        {field.meta.touched &&
        field.meta.error &&
        <span className="error">{field.meta.error}</span>}
      </div>
    );
  }
}

export default Input;
