"use strict";
const getTotalBalanceByGender = (users, gender) => {
  return users
    .filter((user) => user.gender === gender)
    .reduce((totalBalance, user) => totalBalance + user.balance, 0);
};
const maleBalance = getTotalBalanceByGender(users, "male");
const femaleBalance = getTotalBalanceByGender(users, "female");
