import React from 'react';

const MessageForm = ({onChange, value}) => {
  return (
    <div className="col-md-12 text-center">
      <p>Message:</p>
      <div className="form-group">
        <label htmlFor="Message">
          <textarea
            type="text"
            rows="5"
            value={value}
            onChange={onChange}
            ></textarea>
          </label>
        </div>
      </div>
  );
};

export default MessageForm;
