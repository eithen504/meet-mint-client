import type { ProblemData } from "../types";

const BASE_URL = "https://meet-mint-server.onrender.com/api";

export const sessionApi = {
  createSession: async (data: ProblemData) => {
    const res = await fetch(`${BASE_URL}/session`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      credentials: "include",
    });

    return res.json();
  },

  getActiveSessions: async () => {
    const res = await fetch(`${BASE_URL}/session/active`, {
      credentials: "include",
    });

    return res.json();
  },

  getMyRecentSessions: async () => {
    const res = await fetch(`${BASE_URL}/session/my-recent`, {
      credentials: "include",
    });

    return res.json();
  },

  getSessionById: async (id: string) => {
    const res = await fetch(`${BASE_URL}/session/${id}`, {
      credentials: "include",
    });

    return res.json();
  },

  joinSession: async (id: string) => {
    const res = await fetch(`${BASE_URL}/session/${id}/join`, {
      method: "POST",
      credentials: "include",
    });

    return res.json();
  },

  endSession: async (id: string) => {
    const res = await fetch(`${BASE_URL}/session/${id}/end`, {
      method: "POST",
      credentials: "include",
    });

    return res.json();
  },

  getStreamToken: async () => {
    const res = await fetch(`${BASE_URL}/chat/token`, {
      credentials: "include",
    });

    return res.json();
  },
};