import { AddUserModal } from "@/components/module/users/AddUserModal";
import { removeUser, selectUsers } from "@/redux/features/user/userSlice";
import { useAppdispatch, useAppSelector } from "@/redux/hook";
import { Trash2 } from "lucide-react";

const Users = () => {
  const dispatch = useAppdispatch();
  const users = useAppSelector(selectUsers);

  return (
    <div className="mx-auto max-w-7xl px-5 mt-20">
      <div className="flex justify-end items-center gap-5">
        <h1 className="mr-auto">Users</h1>
        <AddUserModal />
      </div>
      <div className="grid grid-cols-3 gap-5 mt-3">
        {users.map((user) => (
          <div className="p-10 flex justify-between border border-green-500">
            <div>
              <p>{user.name}</p>
            </div>
            <div>
              <Trash2
                onClick={() => dispatch(removeUser(user.id))}
                className="text-red-500"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
