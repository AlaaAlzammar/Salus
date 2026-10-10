import type { Values } from "./validators";

/**
 * Sends the join request to the backend.
 *
 * TODO: replace with a real request (e.g. POST /api/join-requests). Until then
 * nothing is sent or stored. Throw on failure so the form shows an error.
 */
export async function submitJoinRequest(request: Values): Promise<void> {
  void request;
}
