import { Server } from './../configs/server'

class _API {
  async getEventList() {
    const res = await fetch(Server + "/events");
    const result = await res.json();
    return result;
  }
}

const API = new _API();
export default API;