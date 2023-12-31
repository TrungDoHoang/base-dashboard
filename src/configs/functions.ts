/**
 * Get cookie value with name
 * @param name Name of the cookie
 * @returns Value of the cookie or null if not found
 */
export const getCookie = (name: string) => {
	const cookieValue = document.cookie
		.split('; ')
		.find((cookie) => cookie.startsWith(`${name}=`));

	if (cookieValue) {
		return cookieValue.split('=')[1];
	}

	return null;
};

/**
 * Set the value to cookie
 * @param name The name of the cookie
 * @param value The value to set
 * @param days The number of days expire
 */
export const setCookie = (name: string, value: any, days: number) => {
	const expirationDate = new Date();
	expirationDate.setDate(expirationDate.getDate() + days);

	const cookieValue = `${name}=${value}; expires=${expirationDate.toUTCString()}; path=/`;
	document.cookie = cookieValue;
};
