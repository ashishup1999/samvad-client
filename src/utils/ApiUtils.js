import { isEmpty } from "./CommonUtils";

export const ajaxApi = {
  get: async (path) => {
    const res = await fetch(path, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=utf-8",
      },
    });
    return await res.json();
  },
  post: async (path, payload) => {
    if (isEmpty(payload)) {
      const res = await fetch(path);
      return await res.json();
    }
    const res = await fetch(path, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-type": "application/json; charset=utf-8",
      },
    });
    return await res.json();
  },
};
