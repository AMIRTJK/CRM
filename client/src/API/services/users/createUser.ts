interface TData {
	login: string;
}

export const createUser = async (newUser: TData): Promise<any> => {
	try {
		const response = await fetch("http://localhost:3000/regme", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newUser),
		});
		if (!response.ok) {
			throw new Error(`Error on createUser`);
		}
		console.log(response);

		return response.json();
	} catch (error) {
		console.error("Error:", error);
		throw error;
	}
};
