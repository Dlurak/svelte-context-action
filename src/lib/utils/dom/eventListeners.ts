export type EventName = keyof DocumentEventMap;

/**
 * Adds multiple event listeners to the specified HTMLElement for the given events.
 * @param element - The element to which event listeners will be added.
 * @param events - An array of event names to listen for.
 * @param callback - The callback function to be executed when the events occur.
 * @returns A function that removes all the added event listeners.
 */
export function addMultipleEventListeners(
	element: HTMLElement,
	events: EventName[],
	callback: (e: Event) => void
) {
	for (const eventName of events) {
		element.addEventListener(eventName, callback);
	}

	return () => {
		for (const eventName of events) {
			element.removeEventListener(eventName, callback);
		}
	}
}
