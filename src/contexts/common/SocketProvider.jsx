import { createContext } from "react";
import PropTypes from "prop-types";
import { io } from "socket.io-client";

export const SocketContext = createContext();
const socket = io(import.meta.env.VITE_SOCKET_SERVER_URL);

const SocketProvider = ({ children }) => {
  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};

SocketProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default SocketProvider;
