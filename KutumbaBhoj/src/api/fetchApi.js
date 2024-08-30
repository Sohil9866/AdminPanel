export class FetchAPI {
  constructor(baseURL = import.meta.env.VITE_API_BASE_URL) {
    this.baseURL = baseURL;
    this.token = localStorage.getItem("token");
  }

  async request(path, options = {}) {
    const url = `${this.baseURL}${path}`;
    try {
      const reqHeader = new Headers();
      if (!(options.body instanceof FormData)) {
        reqHeader.append("Content-Type", "application/json");
      }
      if (this.token) {
        reqHeader.append("Authorization", `Bearer ${this.token}`);
      }

      const reqOptions = { ...options, headers: reqHeader };
      const response = await fetch(url, reqOptions);
      if (!response.ok) {
        return { error: await response.json() };
      }

      const data = await response.json();
      return { data };
    } catch (error) {
      return { error };
    }
  }

  get(path, headers = {}) {
    return this.request(path, { method: "GET", headers });
  }

  post(path, body, headers = {}) {
    const options = {
      method: "POST",
      headers,
    };
    if (body instanceof FormData) {
      options.body = body;
    } else {
      options.body = JSON.stringify(body);
    }
    return this.request(path, options);
  }
  delete(path, headers = {}) {
    return this.request(path, { method: "DELETE", headers });
  }
  put(path, body, headers = {}) {
    const options = {
      method: "PUT",
      headers,
    };
    if (body instanceof FormData) {
      options.body = body;
    } else {
      options.body = JSON.stringify(body);
    }
    return this.request(path, options);
  }
}
