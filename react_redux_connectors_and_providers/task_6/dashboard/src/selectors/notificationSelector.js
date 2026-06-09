export const filterTypeSelected = (state) => {
  return state.get("filter");
};
export const getNotifications = (state) => {
  return state.get("notifications");
};
export const getUnreadNotifications = (state) => {
  const notifications = state.notifications.get("messages");
  if (!notifications) return notifications;
  return notifications.filter((value) => value.get("isRead") === false);
};
