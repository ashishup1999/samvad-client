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
  const msgTS = moment(new Date(timeAt));
  const currTS = moment(new Date());
  const diffs = {
    days: Number(currTS.diff(msgTS, "days")),
    hours: Number(currTS.diff(msgTS, "hours")),
    minutes: Number(currTS.diff(msgTS, "minutes")),
    seconds: Number(currTS.diff(msgTS, "seconds")),
  };
  if (diffs.days) return diffs.days + "d";
  else if (diffs.hours) return diffs.hours + "h";
  else if (diffs.minutes) return diffs.minutes + "m";
  else if (diffs.seconds) return diffs.seconds + "s";
  else return "";
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
