export const defaultStateReducer = (state, action) => {
  const { payload } = action;
  const newState = { ...state, ...payload };
  return { ...newState };
};

export const getRegister = (rules, extra) => {
  let registry = {};
  if (rules) registry = { ...registry, ...rules };
  Object.entries(extra).map(([key, value]) => {
    if (key) registry[key] = value;
  });
  return registry;
};

export const isEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};

export const screenSize = () => {
  const screenProps = {};
  const winY = window.innerHeight;
  const winX = window.innerWidth;
  const screenSizeDia = Math.sqrt(winY * winY + winX * winX);
  if (winX > winY) screenProps.landscape = true;
  else screenProps.landscape = false;
  if (screenSizeDia >= 1468) {
    screenProps.mobileMax = false;
    screenProps.tabletMax = false;
  } else if (screenSizeDia >= 988) {
    screenProps.mobileMax = false;
    screenProps.tabletMax = true;
  } else {
    screenProps.mobileMax = true;
    screenProps.tabletMax = false;
  }
  return screenProps;
};

export const timeFromNow = (moment, timeAt) => {
  const msgTS = moment(timeAt);
  const currTS = moment();
  const diffs = {
    days: Number(currTS.diff(msgTS, "days")),
    hours: Number(currTS.diff(msgTS, "hours")),
    minutes: Number(currTS.diff(msgTS, "minutes")),
    seconds: Number(currTS.diff(msgTS, "seconds")),
  };
  if (diffs.days < 1) return msgTS.format("h:mm A");
  if (diffs.days < 2) return "Yesterday";
  if (diffs.days < 8) return msgTS.format("dddd");
  if (diffs.days < 8) return msgTS.format("dddd");
  return msgTS.calendar();
};

export const getDateAndTime = (moment, timeAt) => {
  const msgTS = moment(timeAt);
  const clockTime = msgTS.format("h:mm A");
  const timeDiff = timeFromNow(moment, timeAt);
  if (clockTime === timeDiff) return timeDiff;
  return `${msgTS.format("h:mm A")} ${timeFromNow(moment, timeAt)}`;
};

export const debounce = (func, timeout = 1000) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
};