import React from "react";
import "./Notifications.css";
import PropTypes from "prop-types";

const NotificationItem = React.memo(({ type, value, html, markAsRead, id }) => {
  return (
    <>
      {type && value ? (
        <li onClick={() => markAsRead(id)} data-notification-type={type}>
          {value}
        </li>
      ) : null}
      {html ? <li onClick={() => markAsRead(id)} data-urgent dangerouslySetInnerHTML={{ __html: html }}></li> : null}
    </>
  );
});

NotificationItem.propTypes = {
  html: PropTypes.shape({ __html: PropTypes.string }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  markAsRead: PropTypes.func,
  id: PropTypes.number,
};

NotificationItem.defaultProps = {
  type: "default",
  markAsRead: () => {},
  id: 0,
};

export default NotificationItem;
