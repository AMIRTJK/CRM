import { LogmeProps } from "../users/logMe";

export const useAuth = () => {
	const logMe = async (data: LogmeProps): Promise<void> => {
		return await fetch(`http://localhost:3000/logme`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			},
			body: JSON.stringify(data),
		})
			.then((res: Response) => {
				if (!res.ok) {
					throw Error;
				}
				return res.json();
			})
			.then((resData) => {
				localStorage.setItem("token", resData.token);
			});
	};
	return {
		logMe,
	};
};
