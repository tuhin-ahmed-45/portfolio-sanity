import { UseDrive } from "@/store/placesMemory";

const PlaceInfo = () => {
  const { bears, userData, updateUser } = UseDrive();
  console.log({ bears, userData });
  return (
    <div>
      <button
        onClick={() =>
          updateUser({
            place: "Chittagong",
            favorite: "Chandranath Hill",
            Tavel: "Train, Bus",
          })
        }
      >
        Update Info
      </button>
    </div>
  );
};

export default PlaceInfo;
