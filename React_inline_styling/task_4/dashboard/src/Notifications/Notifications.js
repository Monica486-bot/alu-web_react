import React from 'react';
import close_icon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css, keyframes } from 'aphrodite';

const translateKeyframes = keyframes({
  '0%': { transform: 'translateY(0px)' },
  '50%': { transform: 'translateY(-5px)' },
  '100%': { transform: 'translateY(5px)' },
});

const opacityKeyframes = keyframes({
  'from': { opacity: 0.5 },
  'to': { opacity: 1 },
});

const styles = StyleSheet.create({
  Notifications: {
    border: '2px dashed #e01d3f',
    padding: '24px',
  },

  NotificationUnorderedList: {
    listStyleType: 'none',
  },

  NotificationsButton: {
    float: 'right',
    height: '25px',
    width: '25px',
    position: 'absolute',
    top: '16px',
    right: '16px',
    background: 'none',
    border: 'none',
  },

  NotificationsButtonImg: {
    height: '20px',
    width: '20px',
  },

  menuItem: {
    position: 'absolute',
    top: '0',
    right: '0',
    margin: '10px',
    cursor: 'pointer',
    backgroundColor: '#fff8f8',
    ':hover': {
      animationName: [opacityKeyframes, translateKeyframes],
      animationDuration: '1s, 0.5s',
      animationIterationCount: '3',
    },
  },

  menuItemHidden: {
    display: 'none',
  },
});

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  shouldComponentUpdate(updatedProps) {
    return updatedProps.listNotifications.length > this.props.listNotifications.length;
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;

    return (
      <>
        <div className={css(styles.menuItem, displayDrawer && styles.menuItemHidden)} id="menuItem">
          Your notifications
        </div>
        {displayDrawer && (
          <div className={css(styles.Notifications)} id="Notifications">
            {listNotifications.length > 0 ? (
              <>
                <button
                  className={css(styles.NotificationsButton)}
                  aria-label="Close"
                  onClick={() => console.log('Close button has been clicked')}
                >
                  <img className={css(styles.NotificationsButtonImg)} src={close_icon} alt="Close" />
                </button>
                <p>Here is the list of notifications</p>
                <ul className={css(styles.NotificationUnorderedList)}>
                  {listNotifications.map((notification) => (
                    <NotificationItem
                      key={notification.id}
                      type={notification.type}
                      value={notification.value}
                      html={notification.html}
                      markAsRead={() => this.markAsRead(notification.id)}
                    />
                  ))}
                </ul>
              </>
            ) : (
              <p>No new notification for now</p>
            )}
          </div>
        )}
      </>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;
