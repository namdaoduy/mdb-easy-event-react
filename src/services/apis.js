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

  async putGuest(guest) {
    const res = await fetch(Server + "/event/guest", {
      headers: {
        'Content-Type': 'application/json'
      },
      method: "PUT",
      body: JSON.stringify(guest)
    });
    const result = await res.json();
    return result;
  }

  async postVerifyEmail(hashed, guest_email, event_id) {
    const res = await fetch(Server + "/verify", {
      headers: {
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({
        hashed: hashed,
        guest_email: guest_email,
        event_id: event_id
      })
    });
    const result = await res.json();
    return result;
  }

  async postLogin(username, password) {
    const res = await fetch(Server + "/user/login", {
      headers: {
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password
      })
    });
    const result = await res.json();
    return result;
  }
}

const API = new _API();
export default API;