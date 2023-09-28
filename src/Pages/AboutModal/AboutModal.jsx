import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";

const AboutModal = ({ isOpen, onClose, user }) => {
    const [updateUser, setUpdateUser] = useState(user);
    const queryClient = useQueryClient();

    const updateUserMutation = useMutation(
        (updatedUserData) =>
            fetch(`https://smedia-server.vercel.app/user/${user._id}`, {
                method: "PATCH",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(updatedUserData),
            }).then((res) => res.json()),
        {
            onSuccess: () => {
                queryClient.invalidateQueries(["user", user.email]);
                Swal.fire("Good job!", "User updated successfully!", "success").then(
                    () => {
                        window.location.reload();
                    }
                );

            },
            onError: () => {
                Swal.fire(
                    "Error",
                    "User updating failed!",
                    "error"
                );
            }
        }
    );

    const handleUpdate = (event) => {
        event.preventDefault();
        updateUserMutation.mutate(updateUser);
        onClose();
    };

    const handleInputChange = (event) => {
        const field = event.target.name;
        const value = event.target.value;
        const newUserInfo = { ...updateUser };
        newUserInfo[field] = value;
        setUpdateUser(newUserInfo);
    };

    return (
        <div className={`fixed inset-0 z-10 ${isOpen ? "block" : "hidden"}`}>
            <div className="fixed inset-0 opacity-25"></div>
            <div className="fixed inset-0 flex items-center justify-center">
                <div className="bg-indigo-200 rounded-lg p-6">
                    <div className="mb-4">
                        <h2 className="text-lg font-medium">User Details</h2>
                    </div>
                    <form
                        action="#"
                        onSubmit={handleUpdate}
                        className="mb-4 text-left text-slate-900"
                    >
                        <div>
                            <input
                                onChange={handleInputChange}
                                type="text"
                                defaultValue={user?.name}
                                placeholder="Name"
                                name="name"
                                className="w-full py-5 px-3 border border-gray-300 rounded-md"
                            />
                        </div>
                        <div className="my-2">
                            <input
                                type="text"
                                readOnly
                                defaultValue={user?.email}
                                placeholder="Email"
                                name="email"
                                className="w-full py-5 px-3 border border-gray-300 rounded-md"
                            />
                        </div>
                        <div>
                            <input
                                onChange={handleInputChange}
                                defaultValue={user?.address}
                                type="text"
                                placeholder="Address"
                                name="address"
                                className="w-full py-5 px-3 border border-gray-300 rounded-md"
                            />
                        </div>
                        <div className="my-2">
                            <input
                                onChange={handleInputChange}
                                type="text"
                                defaultValue={user?.university}
                                placeholder="University"
                                name="university"
                                className="w-full py-5 px-3 border border-gray-300 rounded-md"
                            />
                        </div>

                        <div className="flex gap-4 my-4">
                            <button
                                type="submit"
                                className="rounded-md px-3 py-2 text-sm md:text-base md:px-8 hover:bg-blue-600 text-black bg-transparent hover:text-white border-blue-600 border-2 duration-500"
                            >
                                Update
                            </button>
                            <button
                                className="px-4 py-2 text-white rounded-md bg-indigo-700 hover:bg-slate-950"
                                onClick={onClose}
                            >
                                Close
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AboutModal;
