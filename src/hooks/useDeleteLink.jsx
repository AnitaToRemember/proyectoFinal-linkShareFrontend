import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { deleteLinkService } from "../services";

function useDeleteLink() {
	const { token } = useContext(AuthContext);
	const [error, setError] = useState("");

	const deleteLink = async (linkId, onSuccess) => {
		try {
			await deleteLinkService({ linkId, token });

			if (onSuccess) {
				onSuccess(linkId);
			}
		} catch (error) {
			setError(error.message);
		}
	};

	return { deleteLink, error };
}

export default useDeleteLink;
