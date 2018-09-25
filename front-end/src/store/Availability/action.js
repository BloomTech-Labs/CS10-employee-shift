import axios from "axios";

export const getAvailabilities = () => (dispatch, getState) => {
  dispatch({ type: "LOADING_AVAILABILITIES" });
  const headers = { "Content-Type": "application/x-www-form-urlencoded" };
  const token = getState().user.token;

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  axios
    // Need user in body? Or is it read off of token?
    .get(`${process.env.REACT_APP_ROOT_URL}/api/availabilities/`, headers)
    .then(res => {
      if (res.status === 200) {
        return dispatch({ type: "READ_AVAILABILITIES", data: res.data });
      }
    })
    .catch(err => {
      if (err.status === 401 || err.status === 403) {
        dispatch({ type: "AUTHENTICATION_ERROR", data: err.data });
        throw err.data;
      } else {
        dispatch({ type: "ERROR", data: err.data });
        throw err.data;
      }
    });
};

// TODO: fill in correct data to send
export const postAvailabilities = (startTime, endTime) => (
  dispatch,
  getState
) => {
  dispatch({ type: "LOADING_AVAILABILITIES" });
  const token = getState().user.token;
  const headers = { "Content-Type": "application/x-www-form-urlencoded" };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const body = JSON.stringify({
    startTime: startTime,
    endTime: endTime,
  });

  axios({
    method: "post",
    // TODO: fill correct end point
    url: `${process.env.REACT_APP_ROOT_URL}/api/availabilities/`,
    headers: headers,
    data: body,
  })
    .then(res => {
      if (res.status === 200) {
        return dispatch({ type: "CREATE_AVAILABILITIES", data: res.data });
      }
    })
    .catch(err => {
      if (err.status === 401 || err.status === 403) {
        dispatch({ type: "AUTHENTICATION_ERROR", data: err.data });
        throw err.data;
      } else {
        dispatch({ type: "ERROR", data: err.data });
        throw err.data;
      }
    });
};

export const updateAvailabilities = (id, startTime, endTime) => (
  dispatch,
  getState
) => {
  dispatch({ type: "LOADING_AVAILABILITIES" });
  const token = getState().user.token;
  const headers = { "Content-Type": "application/x-www-form-urlencoded" };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const body = JSON.stringify({
    id: id,
    startTime: startTime,
    endTime: endTime,
  });

  axios({
    method: "update",
    // TODO: fill correct end point
    url: `${process.env.REACT_APP_ROOT_URL}/api/availabilities/`,
    headers: headers,
    data: body,
  })
    .then(res => {
      if (res.status === 200) {
        return dispatch({ type: "UPDATE_AVAILABILITIES", data: res.data });
      }
    })
    .catch(err => {
      if (err.status === 401 || err.status === 403) {
        dispatch({ type: "AUTHENTICATION_ERROR", data: err.data });
        throw err.data;
      } else {
        dispatch({ type: "ERROR", data: err.data });
        throw err.data;
      }
    });
};

export const deleteAvailabilities = id => (dispatch, getState) => {
  dispatch({ type: "LOADING_AVAILABILITIES" });
  const token = getState().user.token;
  const headers = { "Content-Type": "application/x-www-form-urlencoded" };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const body = JSON.stringify({ id: id });

  axios({
    method: "delete",
    // TODO: fill correct end point
    url: `${process.env.REACT_APP_ROOT_URL}/api/availabilities/`,
    headers: headers,
    data: body,
  })
    .then(res => {
      if (res.status === 200) {
        return dispatch({ type: "DELETE_AVAILABILITIES", data: res.data });
      }
    })
    .catch(err => {
      if (err.status === 401 || err.status === 403) {
        dispatch({ type: "AUTHENTICATION_ERROR", data: err.data });
        throw err.data;
      } else {
        dispatch({ type: "ERROR", data: err.data });
        throw err.data;
      }
    });
};