"use strict";
const sortByDescendingFriendCount = (users) => {
  return users.sort((a, b) => b.friends - a.friends);
};
