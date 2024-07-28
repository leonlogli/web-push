import { useState, useEffect } from "react";
import { withWonderPush } from "react-wonderpush";

const UserIdManager = ({ wonderPush }) => {
  const [userId, setUserId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [newUserId, setNewUserId] = useState("");

  useEffect(() => {
    wonderPush.push(() => {
      wonderPush.getUserId().then((id) => {
        setUserId(id);
        if (id) {
          setNewUserId(id);
        }
      });
    });
  }, [wonderPush]);

  const handleSave = () => {
    wonderPush.push(["setUserId", newUserId]);
    setUserId(newUserId);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleLogout = () => {
    wonderPush.push(["unsetUserId"]);
    setUserId(null);
    setNewUserId("");
  };

  return (
    <div className="user-id-manager">
      {!isEditing && !userId && (
        <button onClick={() => setIsEditing(true)}>Change user id</button>
      )}

      {userId && !isEditing && (
        <div className="user-info">
          <span className="user-id">UserId: {userId}</span>
          <button onClick={() => setIsEditing(true)}>Change user id</button>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}

      {isEditing && (
        <div className="edit-form">
          <input
            type="text"
            placeholder="New user id"
            value={newUserId}
            onChange={(e) => setNewUserId(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default withWonderPush(UserIdManager);
