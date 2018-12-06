import { Server } from './../configs/server'

class _API {
  async getEventList() {
    const res = await fetch(Server + "/event");
    const result = await res.json();
    return result;
  }

  async postEventSearch(text) {
    const res = await fetch(Server + "/event/search", {
      headers: {
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({
        key_word: text
      })
    });
    const result = await res.json();
    return result;
  }

  async postEvent(event_id) {

    const res = await fetch(Server + "/event", {
      headers: {
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({
        event_id: event_id
      })
    });
    const result = await res.json();
    return result;
  }
}

const API = new _API();
export default API;